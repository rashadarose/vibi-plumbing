require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const mysql = require('mysql2/promise')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3001
const mailRecipient = process.env.EMAIL_TO || 'vibimediallc@gmail.com'
const mailUser = process.env.SMTP_USER || process.env.EMAIL_USER
const mailPass = process.env.SMTP_PASS || process.env.EMAIL_PASS

const mailer = mailUser && mailPass
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    })
  : null

app.use(cors({
  origin: [
    'https://vibiplumbing.com',
    'https://www.vibiplumbing.com'
  ]
}))
app.use(express.json())

async function sendRequestEmail({ firstName, lastName, email, phone, service, message }) {
  if (!mailer) {
    console.log('ℹ️ Email notification skipped: SMTP credentials not configured.')
    return
  }

  const [serviceCategory, serviceName] = service.includes(' - ')
    ? service.split(' - ')
    : ['Service Request', service]

  const subject = `New Service Request: ${service}`
  const text = [
    'New service request received from the website.',
    '',
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Service: ${service}`,
    '',
    'Message:',
    message || 'No additional details provided.',
  ].join('\n')

  const html = `
    <div style="margin:0;padding:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="max-width:720px;margin:0 auto;padding:24px;">
        <div style="background:linear-gradient(135deg,#0a1628 0%,#1a3a5c 100%);padding:24px;border-radius:18px 18px 0 0;color:#fff;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#90e0ef;margin-bottom:8px;">Vibi Plumbing & Remodeling</div>
          <h2 style="margin:0;font-size:28px;line-height:1.2;">New Service Request</h2>
          <p style="margin:10px 0 0;color:rgba(255,255,255,0.78);">A customer just submitted the intake form and is ready for follow-up.</p>
        </div>

        <div style="background:#ffffff;padding:24px;border:1px solid #dde6f2;border-top:none;border-radius:0 0 18px 18px;">
          <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px;">
            <span style="display:inline-block;background:#e8f7fb;color:#0a1628;border:1px solid #bdebf4;padding:7px 12px;border-radius:999px;font-size:12px;font-weight:700;">${serviceCategory}</span>
            <span style="display:inline-block;background:#fff6df;color:#0a1628;border:1px solid #f0d48b;padding:7px 12px;border-radius:999px;font-size:12px;font-weight:700;">${serviceName}</span>
          </div>

          <table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eef2f7;width:140px;font-weight:700;color:#475569;">Name</td>
              <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eef2f7;font-weight:700;color:#475569;">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">${email}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eef2f7;font-weight:700;color:#475569;">Phone</td>
              <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;font-weight:700;color:#475569;">Service</td>
              <td style="padding:12px 0;">${service}</td>
            </tr>
          </table>

          <div style="margin-bottom:10px;font-weight:700;color:#475569;">Customer Notes</div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:16px;white-space:pre-wrap;line-height:1.7;">${message || 'No additional details provided.'}</div>

          <p style="margin:18px 0 0;color:#64748b;font-size:13px;">
            Reply directly to this email to contact the customer. The reply-to field is set to their submitted email address.
          </p>
        </div>
      </div>
    </div>
  `

  await mailer.sendMail({
    from: process.env.SMTP_FROM || mailUser,
    to: mailRecipient,
    replyTo: email,
    subject,
    text,
    html,
  })
}

// MySQL connection pool — reads credentials from .env
const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     process.env.DB_PORT     || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME     || 'vibi_plumbing',
  waitForConnections: true,
  connectionLimit: 10,
})

pool.getConnection()
  .then(conn => { console.log('✅ MySQL connected'); conn.release() })
  .catch(err  => console.error('❌ MySQL error:', err.message))

// Save contact / scheduling request to DB
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body

  if (!firstName || !lastName || !email || !service) {
    return res.status(400).json({ ok: false, error: 'Required fields missing.' })
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' })
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO service_requests
         (first_name, last_name, email, phone, service, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone || null, service, message || null]
    )

    try {
      await sendRequestEmail({ firstName, lastName, email, phone, service, message })
    } catch (mailErr) {
      console.error('📧 Email notification failed:', mailErr.message)
    }

    console.log(`📬 Request #${result.insertId}: ${firstName} ${lastName} — ${service}`)
    res.json({ ok: true, message: "Got it! We'll reach out within the hour to get you scheduled." })
  } catch (err) {
    console.error('DB insert error:', err.message)
    res.status(500).json({ ok: false, error: 'Could not save request. Please call us directly.' })
  }
})

// List all requests — secure this before going live
app.get('/api/requests', async (_req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM service_requests ORDER BY created_at DESC'
    )
    res.json({ ok: true, total: rows.length, requests: rows })
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message })
  }
})

// Update request status
app.patch('/api/requests/:id', async (req, res) => {
  const { status } = req.body
  const allowed = ['new', 'contacted', 'scheduled', 'completed']
  if (!allowed.includes(status)) {
    return res.status(400).json({ ok: false, error: 'Invalid status.' })
  }
  try {
    await pool.execute('UPDATE service_requests SET status = ? WHERE id = ?', [status, req.params.id])
    res.json({ ok: true })
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message })
  }
})

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}

app.listen(PORT, () => console.log(`🔧 Vibi server running on http://localhost:${PORT}`))
