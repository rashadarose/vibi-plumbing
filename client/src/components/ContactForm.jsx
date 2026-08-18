import { useState } from 'react'

const SERVICES = [
  { group: 'Plumbing', items: ['Faucet Replacement', 'Garbage Disposal Replacement', 'Toilet Repair / Replacement', 'Toilet Fill Valve / Flapper', 'Sink Drain Issues', 'P-trap Replacement', 'Showerhead / Faucet Replacement', 'Minor Leaks', 'Caulking'] },
  { group: 'Handyman', items: ['Door / Fixture Repairs', 'Shelving Installation', 'TV Mounting', 'General Handyman Work', 'Small Drywall Repairs', 'Furniture Assembly'] },
]

const initialForm = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('')

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = true
    if (!form.lastName.trim()) e.lastName = true
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true
    if (!form.service) e.service = true
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: false }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setMsg(data.message)
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setMsg(err.message)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" placeholder="John" value={form.firstName} onChange={handleChange} className={errors.firstName ? 'error' : ''} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Smith" value={form.lastName} onChange={handleChange} className={errors.lastName ? 'error' : ''} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="john@email.com" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className={errors.service ? 'error' : ''}>
          <option value="" disabled>Select a service…</option>
          {SERVICES.map(({ group, items }) => (
            <optgroup key={group} label={group}>
              {items.map(item => <option key={item}>{item}</option>)}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Project</label>
        <textarea id="message" name="message" placeholder="Describe what you need, any urgency, or send photos via email…" value={form.message} onChange={handleChange} />
      </div>

      <button type="submit" className="form-submit" disabled={status === 'loading'}>
        {status === 'loading' ? '⏳ Sending…' : '📝 Schedule Service'}
      </button>

      {status === 'success' && <p className="form-msg success">✅ {msg}</p>}
      {status === 'error' && <p className="form-msg error">⚠️ {msg}</p>}
    </form>
  )
}
