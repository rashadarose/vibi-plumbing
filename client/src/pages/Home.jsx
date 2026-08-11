import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import ContactForm from '../components/ContactForm'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-logo-bg" aria-hidden="true">
          <img src="/images/vibi-logo.png" alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">No Trip Charge · Licensed &amp; Insured</div>
            <h1>
              Your Home,<br />
              <span className="accent">Expertly</span><br />
              <span className="cyan">Crafted.</span>
            </h1>
            <p className="hero-desc">
              From leaking pipes to full kitchen remodels — Vibi Plumbing &amp; Remodeling delivers
              precision craftsmanship, honest pricing, and results that last a lifetime.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">📝 Schedule Service</a>
              <a href="tel:+15551234567" className="btn-outline">📞 Call Now</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-num">12<span>+</span></div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">850<span>+</span></div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">5<span>★</span></div>
                <div className="hero-stat-label">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section" id="why">
        <div className="section-header fade-up">
          <span className="section-label">Why Vibi</span>
          <h2 className="section-title">Built on Trust &amp; Quality</h2>
          <p className="section-desc">We treat every home like our own — no shortcuts, no upsells, just honest work done right the first time.</p>
        </div>
        <div className="why-grid">
          {[
            { icon: '🚗', title: 'No Trip Charge', desc: 'We come to you at no cost. Our tech assesses the job and gives you a straight quote on the spot — no obligation.' },
            { icon: '⚡', title: 'Same-Day Service', desc: "We know emergencies don't wait. Most calls are serviced the same day — often within hours." },
            { icon: '📝', title: 'Quote Before We Start', desc: 'You get a clear price before any work begins. You decide — no pressure, no hidden fees, ever.' },
            { icon: '🔒', title: 'Satisfaction Guaranteed', desc: "Every job comes with a workmanship guarantee. If it's not right, we make it right." },
          ].map(item => (
            <div className="why-card fade-up" key={item.title}>
              <span className="why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="services-overview">
        <div className="section-header fade-up">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Professional. Reliable. Honest.</h2>
          <p className="section-desc">One skilled technician for your plumbing needs and household repairs. No trip charge — you only pay when the work is quoted and approved by you.</p>
        </div>
        <div className="services-grid">
          <Link to="/plumbing" className="service-card-main card-plumbing fade-up">
            <div className="card-icon-wrap icon-cyan">💧</div>
            <h3>Plumbing</h3>
            <p>Expert plumbing for your home — drain cleaning, fixture installs, leak repair, and AC condensation lines. No trip charge.</p>
            <ul className="card-services-list">
              <li>Drain Cleaning (sinks, tubs, toilets)</li>
              <li>Mainline Sewer Cleaning</li>
              <li>Faucet &amp; Cartridge Replacement</li>
              <li>Garbage Disposal Install</li>
              <li>Toilet Remove &amp; Replace</li>
            </ul>
            <span className="card-cta cta-cyan">Explore Plumbing →</span>
          </Link>

          <Link to="/handyman" className="service-card-main card-handyman fade-up">
            <div className="card-icon-wrap icon-green">🔨</div>
            <h3>Handyman</h3>
            <p>Furniture assembly, TV mounting, drywall patches, and minor home repairs. No trip charge.</p>
            <ul className="card-services-list">
              <li>TV Wall Mounting</li>
              <li>Furniture Assembly</li>
              <li>Drywall Patching</li>
              <li>Light Fixture Swap</li>
              <li>Minor Home Repairs</li>
            </ul>
            <span className="card-cta cta-green">Explore Handyman →</span>
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-header fade-up">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Simple from Start to Finish</h2>
          <p className="section-desc">Getting your project done is as easy as four steps.</p>
        </div>
        <div className="process-steps">
          {[
            { n: '1', title: 'Contact Us', desc: 'Call, text, or fill out our form — we respond within the hour.' },
            { n: '2', title: 'On-Site Assessment', desc: 'Our tech arrives, assesses the job, and gives you a clear price before any work begins.' },
            { n: '3', title: 'We Get to Work', desc: 'Our team arrives on time, fully equipped, ready to deliver.' },
            { n: '4', title: 'You Love It', desc: "We clean up and don't leave until you're fully satisfied." },
          ].map(step => (
            <div className="process-step fade-up" key={step.n}>
              <div className="step-num">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header fade-up">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          {[
            { initials: 'MR', name: 'Maria Rodriguez', role: 'Kitchen & Bath Remodel', quote: 'Vibi completely transformed our master bathroom. The tile work is flawless and they finished ahead of schedule. Absolutely recommend!' },
            { initials: 'JK', name: 'James Kim', role: 'Emergency Plumbing Service', quote: 'Had a burst pipe at 11pm — they were at my door within 45 minutes. Fixed it fast, explained everything, and the price was very fair.' },
            { initials: 'TL', name: 'Tracy Lin', role: 'Handyman Package', quote: 'Hired them for TV mounting, shelf installation, and a bunch of odd jobs. Super professional, fast, and left the place spotless.' },
          ].map(t => (
            <div className="testimonial-card fade-up" key={t.name}>
              <div className="stars">★★★★★</div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-loc">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Ready to Get Started?</h2>
          <p>Call, text, or fill out the form and we’ll get you on the schedule fast.</p>
          <div className="cta-band-actions">
            <a href="#contact" className="btn-primary">� Schedule Service</a>
            <a href="tel:+15551234567" className="btn-phone">📞 (555) 123-4567</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Let’s Get You Scheduled</h2>
            <p>Fill out the form and we'll reach out within the hour to get you scheduled.</p>
            {[
              { icon: '📞', label: '(555) 123-4567', sub: 'Available 24/7 for emergencies' },
              { icon: '✉️', label: 'info@vibiplumbing.com', sub: 'We reply within 1 hour' },
              { icon: '📍', label: 'Serving the Greater Metro Area', sub: 'All surrounding cities and suburbs' },
              { icon: '🕐', label: 'Mon – Sat: 7am – 8pm', sub: 'Sunday by appointment · 24/7 Emergency' },
            ].map(d => (
              <div className="contact-detail" key={d.label}>
                <div className="contact-detail-icon">{d.icon}</div>
                <div><strong>{d.label}</strong><span>{d.sub}</span></div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
