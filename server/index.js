require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const mysql = require('mysql2/promise')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

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
