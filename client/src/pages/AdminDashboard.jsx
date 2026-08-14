import { useEffect, useMemo, useState } from 'react'

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const initialForm = {
  serviceRequestId: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  notes: '',
  appointmentDate: '',
  status: 'scheduled',
}

function toLocalDateTime(isoString) {
  if (!isoString) return ''
  const d = new Date(isoString)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleString()
}

function toDateKey(isoString) {
  if (!isoString) return ''
  const d = new Date(isoString)
  if (Number.isNaN(d.getTime())) return ''
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function formatDateKey(dateKey) {
  if (!dateKey) return 'Select a day'
  const d = new Date(`${dateKey}T00:00:00`)
  if (Number.isNaN(d.getTime())) return dateKey
  return d.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function AdminDashboard() {
  const [token, setToken] = useState(localStorage.getItem('vibi_admin_token') || '')
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [loginMsg, setLoginMsg] = useState('')
  const [requests, setRequests] = useState([])
  const [appointments, setAppointments] = useState([])
  const [loadingData, setLoadingData] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [formMsg, setFormMsg] = useState('')
  const [monthCursor, setMonthCursor] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })
  const [selectedDateKey, setSelectedDateKey] = useState(() => toDateKey(new Date().toISOString()))

  const authHeaders = useMemo(() => ({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }), [token])

  const appointmentsByDay = useMemo(() => {
    const map = {}
    for (const appt of appointments) {
      const key = toDateKey(appt.appointment_date)
      if (!key) continue
      if (!map[key]) map[key] = []
      map[key].push(appt)
    }
    return map
  }, [appointments])

  const calendarDays = useMemo(() => {
    const year = monthCursor.getFullYear()
    const month = monthCursor.getMonth()
    const firstWeekday = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const cells = []
    for (let i = 0; i < firstWeekday; i += 1) cells.push(null)
    for (let day = 1; day <= daysInMonth; day += 1) {
      const key = toDateKey(new Date(year, month, day).toISOString())
      cells.push({ day, key })
    }
    return cells
  }, [monthCursor])

  const selectedAppointments = useMemo(
    () => (selectedDateKey ? (appointmentsByDay[selectedDateKey] || []) : []),
    [appointmentsByDay, selectedDateKey]
  )

  const loadData = async () => {
    if (!token) return
    setLoadingData(true)
    setLoginMsg('')

    try {
      const [reqRes, apptRes] = await Promise.all([
        fetch('/api/admin/requests', { headers: authHeaders }),
        fetch('/api/admin/appointments', { headers: authHeaders }),
      ])

      const reqJson = await reqRes.json()
      const apptJson = await apptRes.json()

      if (!reqRes.ok || !reqJson.ok || !apptRes.ok || !apptJson.ok) {
        throw new Error(reqJson.error || apptJson.error || 'Failed to load admin data.')
      }

      setRequests(reqJson.requests || [])
      setAppointments(apptJson.appointments || [])

      if (!selectedDateKey) {
        const todayKey = toDateKey(new Date().toISOString())
        setSelectedDateKey(todayKey)
      }
    } catch (err) {
      setLoginMsg(err.message)
      if (String(err.message || '').toLowerCase().includes('token')) {
        localStorage.removeItem('vibi_admin_token')
        setToken('')
      }
    } finally {
      setLoadingData(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [token])

  const handleLogin = async e => {
    e.preventDefault()
    setLoginMsg('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Login failed.')
      }

      localStorage.setItem('vibi_admin_token', data.token)
      setToken(data.token)
      setLoginForm({ email: '', password: '' })
    } catch (err) {
      setLoginMsg(err.message)
    }
  }

  const handleCreateAppointment = async e => {
    e.preventDefault()
    setFormMsg('')

    try {
      const payload = {
        ...form,
        serviceRequestId: form.serviceRequestId ? Number(form.serviceRequestId) : null,
      }

      const res = await fetch('/api/admin/appointments', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Could not create appointment.')
      }

      setFormMsg('Appointment created successfully.')
      setForm(initialForm)
      loadData()
    } catch (err) {
      setFormMsg(err.message)
    }
  }

  const prefillFromRequest = request => {
    setForm(f => ({
      ...f,
      serviceRequestId: String(request.id),
      firstName: request.first_name || '',
      lastName: request.last_name || '',
      email: request.email || '',
      phone: request.phone || '',
      address: request.address || '',
      notes: request.message || '',
    }))
  }

  const handleLogout = () => {
    localStorage.removeItem('vibi_admin_token')
    setToken('')
    setRequests([])
    setAppointments([])
  }

  const monthLabel = monthCursor.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })

  const todayKey = toDateKey(new Date().toISOString())

  const previousMonth = () => {
    setMonthCursor(cur => new Date(cur.getFullYear(), cur.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setMonthCursor(cur => new Date(cur.getFullYear(), cur.getMonth() + 1, 1))
  }

  if (!token) {
    return (
      <section className="admin-page">
        <div className="admin-card">
          <h1>Admin Sign In</h1>
          <p>Sign in to manage service requests and appointments.</p>
          <form onSubmit={handleLogin} className="admin-form" noValidate>
            <label>
              Email
              <input
                type="email"
                value={loginForm.email}
                onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={loginForm.password}
                onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                required
              />
            </label>
            <button type="submit" className="btn-primary">Sign In</button>
            {loginMsg && <p className="admin-msg">{loginMsg}</p>}
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button type="button" className="btn-outline" onClick={handleLogout}>Log Out</button>
      </div>

      {loginMsg && <p className="admin-msg">{loginMsg}</p>}
      {loadingData && <p className="admin-muted">Loading dashboard data...</p>}

      <div className="admin-grid">
        <div className="admin-panel">
          <h2>Create Appointment</h2>
          <form className="admin-form" onSubmit={handleCreateAppointment}>
            <label>
              Linked Service Request ID (optional)
              <input value={form.serviceRequestId} onChange={e => setForm(f => ({ ...f, serviceRequestId: e.target.value }))} />
            </label>
            <div className="admin-two">
              <label>
                First Name
                <input value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} required />
              </label>
              <label>
                Last Name
                <input value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} required />
              </label>
            </div>
            <div className="admin-two">
              <label>
                Email
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
              </label>
              <label>
                Phone
                <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              </label>
            </div>
            <div className="admin-two">
              <label>
                Address
                <input value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
              </label>
              <label>
                City
                <input value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
              </label>
            </div>
            <div className="admin-two">
              <label>
                State
                <input value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))} />
              </label>
              <label>
                ZIP
                <input value={form.zip} onChange={e => setForm(f => ({ ...f, zip: e.target.value }))} />
              </label>
            </div>
            <div className="admin-two">
              <label>
                Appointment Date/Time
                <input
                  type="datetime-local"
                  value={form.appointmentDate}
                  onChange={e => setForm(f => ({ ...f, appointmentDate: e.target.value }))}
                  required
                />
              </label>
              <label>
                Status
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                  <option value="scheduled">Scheduled</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </label>
            </div>
            <label>
              Notes
              <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
            </label>
            <button type="submit" className="btn-primary">Save Appointment</button>
            {formMsg && <p className="admin-msg">{formMsg}</p>}
          </form>
        </div>

        <div className="admin-panel">
          <h2>Incoming Service Requests</h2>
          <div className="admin-list">
            {requests.map(r => (
              <div className="admin-item" key={r.id}>
                <div>
                  <strong>#{r.id} {r.first_name} {r.last_name}</strong>
                  <p>{r.service}</p>
                  <p>{r.email}{r.phone ? ` | ${r.phone}` : ''}</p>
                  {r.address && <p>{r.address}</p>}
                </div>
                <button type="button" className="btn-outline" onClick={() => prefillFromRequest(r)}>
                  Use for Appointment
                </button>
              </div>
            ))}
            {!requests.length && <p className="admin-muted">No requests yet.</p>}
          </div>
        </div>
      </div>

      <div className="admin-panel">
        <div className="admin-calendar-header">
          <h2>Appointments Calendar</h2>
          <div className="admin-calendar-nav">
            <button type="button" className="btn-outline" onClick={previousMonth}>Prev</button>
            <span>{monthLabel}</span>
            <button type="button" className="btn-outline" onClick={nextMonth}>Next</button>
          </div>
        </div>

        <div className="admin-calendar-grid">
          {WEEKDAY_LABELS.map(label => (
            <div key={label} className="admin-calendar-weekday">{label}</div>
          ))}

          {calendarDays.map((cell, idx) => {
            if (!cell) {
              return <div key={`empty-${idx}`} className="admin-calendar-empty" />
            }

            const count = (appointmentsByDay[cell.key] || []).length
            const isSelected = selectedDateKey === cell.key
            const isToday = todayKey === cell.key

            return (
              <button
                key={cell.key}
                type="button"
                className={[
                  'admin-calendar-day',
                  count ? 'has-appt' : '',
                  isSelected ? 'selected' : '',
                  isToday ? 'today' : '',
                ].join(' ').trim()}
                onClick={() => setSelectedDateKey(cell.key)}
              >
                <span>{cell.day}</span>
                {count > 0 && <small>{count} appt</small>}
              </button>
            )
          })}
        </div>

        <div className="admin-selected-day">
          <h3>{formatDateKey(selectedDateKey)}</h3>
          {!selectedAppointments.length && <p className="admin-muted">No appointments scheduled for this day.</p>}
          {!!selectedAppointments.length && (
            <div className="admin-list">
              {selectedAppointments.map(a => (
                <div className="admin-item" key={`day-${a.id}`}>
                  <div>
                    <strong>{a.first_name} {a.last_name}</strong>
                    <p>{toLocalDateTime(a.appointment_date)} | {a.status}</p>
                    <p>{a.email}{a.phone ? ` | ${a.phone}` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="admin-panel">
        <h2>Appointments</h2>
        <div className="admin-list">
          {appointments.map(a => (
            <div className="admin-item" key={a.id}>
              <div>
                <strong>{a.first_name} {a.last_name}</strong>
                <p>{toLocalDateTime(a.appointment_date)} | {a.status}</p>
                <p>{a.email}{a.phone ? ` | ${a.phone}` : ''}</p>
                {a.request_service && <p>From request: {a.request_service}</p>}
              </div>
            </div>
          ))}
          {!appointments.length && <p className="admin-muted">No appointments yet.</p>}
        </div>
      </div>
    </section>
  )
}
