import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="nav-logo" style={{ marginBottom: '0.75rem' }} aria-label="Vibi Plumbing & Remodeling">
            <Logo height={88} />
          </Link>
          <p>Expert plumbing, remodeling, and handyman services delivered with integrity and craftsmanship you can trust.</p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/plumbing">Plumbing</Link></li>
            <li><Link to="/handyman">Handyman</Link></li>
            <li><Link to="/plumbing#emergency">Emergency Plumbing</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/#why">About Us</Link></li>
            <li><Link to="/#testimonials">Reviews</Link></li>
            <li><Link to="/get-service">Schedule Service</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span className="contact-icon">📞</span>
            <span>(918) 609-3674</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">✉️</span>
            <span>vibimediallc@gmail.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">🕐</span>
            <span>Mon–Sat 7am–8pm<br />24/7 Emergency Line</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Vibi Plumbing &amp; Remodeling. All rights reserved.</span>
        <span>Licensed · Bonded · Insured | <a href="#">Privacy Policy</a></span>
      </div>
    </footer>
  )
}
