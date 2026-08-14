# Vibi Plumbing and Remodeling

Full-stack web application for a plumbing, handyman, and remodeling services business.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MySQL

## Project Structure

- `client/` React frontend
- `server/` Express API server
- `server/db/schema.sql` database schema

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- MySQL

### Install Dependencies

From the project root:

```bash
npm run install:all
```

### Run in Development

From the project root:

```bash
npm run dev
```

This starts both:

- frontend (Vite)
- backend (Express)

### Build Frontend

```bash
npm run build
```

### Run Production Server

```bash
npm run start
```

## Environment Variables

Create a `.env` file in `server/` for backend config (for example database credentials and port).

Example keys:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
EMAIL_TO=vibimediallc@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
JWT_SECRET=replace_with_long_random_secret
JWT_EXPIRES_IN=12h
```

For Gmail, use an app password rather than your normal account password.

## Admin Dashboard

- Route: `/admin`
- Default seed login (from `server/db/schema.sql`):
	- Email: `admin@vibiplumbing.com`
	- Password: `ChangeMe123!`

Change this password immediately after first login by updating the `users` table password hash.

## Deployment Notes

- The frontend build output is generated in `client/dist/`.
- Make sure your backend serves the frontend build or deploys separately based on your hosting setup.

## License

Private project.
