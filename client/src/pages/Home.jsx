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
            <div className="hero-badge">No Trip Charge. Call for Emergency Service.</div>
            <h1>
              PLUMBING &amp;<br />
              <span className="accent">HANDYMAN SERVICES</span><br />
              <span className="cyan">IN HOUSTON</span>
            </h1>
            <p className="hero-desc">
              Fast, reliable home repairs without the runaround.
            </p>
            <div className="hero-actions">
              <Link to="/get-service" className="btn-primary">📝 Schedule Service</Link>
              <a href="tel:+19186093674" className="btn-outline btn-call">
                <span className="btn-call-label">📞 Call Now</span>
                <span className="btn-call-number">(918) 609-3674</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-num">500<span>+</span></div>
                <div className="hero-stat-label">Completed Projects</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num">5<span>★</span></div>
                <div className="hero-stat-label">Star Average</div>
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
          <p className="section-desc">Owner-operated and hands-on. You work directly with me from first call to final walkthrough.</p>
        </div>
        <div className="why-grid">
          {[
            { icon: '🚗', title: 'No Trip Charge', desc: 'I come to you at no cost, assess the issue, and give you a clear quote before work starts.' },
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
          <h2 className="section-title">Focused Services, Done Right</h2>
          <p className="section-desc">I focus on the plumbing and handyman jobs I can deliver quickly, cleanly, and consistently as an owner-operator.</p>
        </div>
        <div className="services-grid">
          <Link to="/plumbing" className="service-card-main card-plumbing fade-up">
            <div className="card-icon-wrap icon-cyan">💧</div>
            <h3>Plumbing</h3>
            <p>Faucets, disposals, toilets, sink drains, P-traps, shower fixtures, and minor leak repairs.</p>
            <ul className="card-services-list">
              <li>Faucet Replacement</li>
              <li>Garbage Disposal Replacement</li>
              <li>Toilet Repair/Replacement</li>
              <li>Toilet Fill Valve/Flapper</li>
              <li>Sink Drain &amp; P-trap Repairs</li>
            </ul>
            <span className="card-cta cta-cyan">Explore Plumbing →</span>
          </Link>

          <Link to="/handyman" className="service-card-main card-handyman fade-up">
            <div className="card-icon-wrap icon-green">🔨</div>
            <h3>Handyman</h3>
            <p>Small, high-impact home tasks handled quickly: fixtures, doors, shelves, TV mounts, drywall, and assembly.</p>
            <ul className="card-services-list">
              <li>Door &amp; Fixture Repairs</li>
              <li>Shelving Installation</li>
              <li>TV Wall Mounting</li>
              <li>Small Drywall Repairs</li>
              <li>Furniture Assembly</li>
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
          <p className="section-desc">A simple owner-operated process that keeps communication clear.</p>
        </div>
        <div className="process-steps">
          {[
            { n: '1', title: 'Contact Us', desc: 'Call, text, or fill out our form — we respond within the hour.' },
            { n: '2', title: 'On-Site Assessment', desc: 'I arrive, assess the job, and give you a clear price before any work begins.' },
            { n: '3', title: 'Work Gets Done', desc: 'I complete the work cleanly and efficiently, with no upsells or surprises.' },
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
            { initials: 'MR', name: 'Maria Rodriguez', role: 'Toilet & Faucet Repair', quote: 'My toilet kept running and the faucet was leaking. Vibi fixed both in one visit, explained everything clearly, and left the area spotless.' },
            { initials: 'JK', name: 'James Kim', role: 'Garbage Disposal & Drain Issue', quote: 'Our disposal failed and the sink was backing up. Fast response, fair pricing, and the repair has been perfect since day one.' },
            { initials: 'TL', name: 'Tracy Lin', role: 'TV Mounting & Small Repairs', quote: 'Had a TV mounted, shelving installed, and a few small drywall spots patched. Clean work, on time, and very professional.' },
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
            <Link to="/get-service" className="btn-primary">📝 Schedule Service</Link>
            <a href="tel:+19186093674" className="btn-phone">📞 (918) 609-3674</a>
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
              { icon: '📞', label: '(918) 609-3674', sub: 'Available 24/7 for emergencies' },
              { icon: '✉️', label: 'vibimediallc@gmail.com', sub: 'We reply within 1 hour' },
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
