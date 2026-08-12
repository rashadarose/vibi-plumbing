import { useState } from 'react'
import { Link } from 'react-router-dom'

const SERVICE_OPTIONS = {
  Plumbing: [
    'Drain Cleaning',
    'Leak Repair',
    'Water Heater',
    'Fixture Installation',
    'Mainline Sewer',
    'Emergency Plumbing',
    'Other Plumbing Work',
  ],
  Handyman: [
    'TV Mounting',
    'Furniture Assembly',
    'Drywall Repair',
    'Door or Lock Repair',
    'Light Fixture Swap',
    'General Handyman Tasks',
  ],
  Remodeling: [
    'Kitchen Remodel',
    'Bathroom Remodel',
    'Flooring or Tile',
    'Basement Finishing',
    'Room Addition',
    'Consultation',
  ],
}

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceCategory: '',
  service: '',
  urgency: '',
  timeline: '',
  propertyType: '',
  preferredContact: '',
  bestTime: '',
  address: '',
  details: '',
}

export default function ServiceQuestionnaire() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState('')

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = true
    if (!form.lastName.trim()) e.lastName = true
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true
    if (!form.phone.trim()) e.phone = true
    if (!form.serviceCategory) e.serviceCategory = true
    if (!form.service) e.service = true
    if (!form.urgency) e.urgency = true
    if (!form.timeline) e.timeline = true
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target

    if (name === 'serviceCategory') {
      setForm(f => ({ ...f, serviceCategory: value, service: '' }))
      setErrors(er => ({ ...er, serviceCategory: false, service: false }))
      return
    }

    setForm(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: false }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()

    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setStatus('loading')

    const composedMessage = [
      `Intake Questionnaire`,
      `Urgency: ${form.urgency}`,
      `Timeline: ${form.timeline}`,
      `Property Type: ${form.propertyType || 'Not provided'}`,
      `Preferred Contact: ${form.preferredContact || 'Not provided'}`,
      `Best Time To Reach: ${form.bestTime || 'Not provided'}`,
      `Service Address: ${form.address || 'Not provided'}`,
      `Project Notes: ${form.details || 'None provided'}`,
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: `${form.serviceCategory} - ${form.service}`,
          message: composedMessage,
        }),
      })

      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong while submitting your request.')
      }

      setStatus('success')
      setMsg(data.message)
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setMsg(err.message)
    }
  }

  const options = form.serviceCategory ? SERVICE_OPTIONS[form.serviceCategory] : []

  return (
    <section className="service-intake-page">
      <div className="service-intake-inner">
        <div className="section-header fade-up visible">
          <span className="section-label">Service Intake</span>
          <h1 className="section-title">Tell Us About Your Project</h1>
          <p className="section-desc">
            Complete this quick questionnaire and we will contact you with scheduling options and a clear next step.
          </p>
        </div>

        <div className="intake-shell fade-up visible">
          <div className="intake-aside">
            <h2>What Happens Next</h2>
            <ol>
              <li>We review your request right away.</li>
              <li>We reach out to confirm details and timing.</li>
              <li>You get a clear service plan before work begins.</li>
            </ol>
            <p>
              Need immediate help? <a href="tel:+19186093674">Call (918) 609-3674</a>
            </p>
            <Link to="/" className="btn-outline intake-back">Back to Home</Link>
          </div>

          <form className="contact-form intake-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} className={errors.firstName ? 'error' : ''} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} className={errors.lastName ? 'error' : ''} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={errors.phone ? 'error' : ''} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="serviceCategory">Service Category</label>
                <select id="serviceCategory" name="serviceCategory" value={form.serviceCategory} onChange={handleChange} className={errors.serviceCategory ? 'error' : ''}>
                  <option value="" disabled>Select category...</option>
                  {Object.keys(SERVICE_OPTIONS).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className={errors.service ? 'error' : ''} disabled={!form.serviceCategory}>
                  <option value="" disabled>{form.serviceCategory ? 'Select service...' : 'Choose category first'}</option>
                  {options.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="urgency">Urgency</label>
                <select id="urgency" name="urgency" value={form.urgency} onChange={handleChange} className={errors.urgency ? 'error' : ''}>
                  <option value="" disabled>Select urgency...</option>
                  <option value="Emergency (today)">Emergency (today)</option>
                  <option value="Soon (this week)">Soon (this week)</option>
                  <option value="Flexible (next 2-3 weeks)">Flexible (next 2-3 weeks)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Project Timeline</label>
                <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} className={errors.timeline ? 'error' : ''}>
                  <option value="" disabled>Select timeline...</option>
                  <option value="Ready now">Ready now</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Just planning">Just planning</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="propertyType">Property Type</label>
                <select id="propertyType" name="propertyType" value={form.propertyType} onChange={handleChange}>
                  <option value="" disabled>Select type...</option>
                  <option value="Single-family home">Single-family home</option>
                  <option value="Townhome">Townhome</option>
                  <option value="Condo">Condo</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Contact</label>
                <select id="preferredContact" name="preferredContact" value={form.preferredContact} onChange={handleChange}>
                  <option value="" disabled>Select contact method...</option>
                  <option value="Phone call">Phone call</option>
                  <option value="Text message">Text message</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bestTime">Best Time To Reach You</label>
                <input id="bestTime" name="bestTime" type="text" placeholder="Example: Weekdays after 4 PM" value={form.bestTime} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Service Address</label>
                <input id="address" name="address" type="text" placeholder="Street, City" value={form.address} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="details">Project Details</label>
              <textarea id="details" name="details" placeholder="Share details, issues you noticed, fixture model, photos available, etc." value={form.details} onChange={handleChange} />
            </div>

            <button type="submit" className="form-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending Request...' : 'Submit Service Questionnaire'}
            </button>

            {status === 'success' && <p className="form-msg success">{msg}</p>}
            {status === 'error' && <p className="form-msg error">{msg}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
