import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function ServiceCard({ icon, price, title, desc }) {
  return (
    <div className="service-item-card fade-up">
      <span className="service-item-icon">{icon}</span>
      <span className="price-badge">{price}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to="/#contact" className="card-link">Schedule Service →</Link>
    </div>
  )
}

export default function Plumbing() {
  useScrollAnimation()

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg-img">
          <img src='https://images.pexels.com/photos/12105083/pexels-photo-12105083.jpeg?auto=compress&cs=tinysrgb&w=1280&h=900&fit=crop' alt="" aria-hidden="true" />
        </div>
        <div className="page-hero-inner">
          <span className="page-hero-icon">💧</span>
          <div className="hero-badge" style={{ margin: '0 auto 1.5rem' }}>Expert Residential Plumbing</div>
          <h1>Plumbing Services</h1>
          <p>No trip charge — our tech comes to you, assesses the job, and gives you a clear quote before any work begins.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Plumbing</span>
          </div>
        </div>
      </div>

      {/* DRAIN CLEANING */}
      <section className="services-section" id="drains">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(0,180,216,0.12)' }}>🚿</div>
            <div>
              <h2>Drain Cleaning</h2>
              <p>Slow or clogged drains cleared fast — in-house lines and mainline sewer from exterior cleanouts.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🍳" price="Free on-site quote" title="Kitchen Sink Drain" desc="Grease, food buildup, and soap scum cleared from kitchen drain lines using professional snaking equipment." />
            <ServiceCard icon="🛁" price="Free on-site quote" title="Tub & Shower Drain" desc="Hair clogs and buildup removed from tub and shower drains — all fixture types and drain configurations." />
            <ServiceCard icon="🪥" price="Free on-site quote" title="Bathroom Sink Drain" desc="Slow bathroom sink drains cleared quickly. Stopper cleaning and P-trap service included when needed." />
            <ServiceCard icon="🚽" price="Free on-site quote" title="Toilet Clog Removal" desc="Stubborn toilet clogs cleared with a professional auger. If the clog is beyond the toilet, we track it down." />
            <ServiceCard icon="🌊" price="Free on-site quote" title="Mainline Sewer Cleaning" desc="Mainline sewer blockages cleared from exterior cleanout access. Roots, buildup, and debris removed." />
            <ServiceCard icon="❄️" price="Free on-site quote" title="AC Condensation Line" desc="Clogged AC drain lines cleared to prevent water damage and keep your system running efficiently." />
          </div>
        </div>
      </section>

      {/* FIXTURE INSTALLS */}
      <section className="services-section alt-bg" id="installs">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(232,160,32,0.12)' }}>🔧</div>
            <div>
              <h2>Fixture Installs</h2>
              <p>New fixtures installed correctly the first time — kitchens, bathrooms, and utility areas.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🚰" price="Free on-site quote" title="Sink Installation" desc="Kitchen and bathroom sink installations. We handle the supply lines, drain, and P-trap — ready to use same day." />
            <ServiceCard icon="💦" price="Free on-site quote" title="Faucet Install & Cartridge Replacement" desc="New faucet installation and worn cartridge replacement for dripping or hard-to-turn faucets in kitchen and bath." />
            <ServiceCard icon="🛁" price="Free on-site quote" title="Tub Faucet Installation" desc="Tub and shower faucet replacement including valve and trim. Single, double, or thermostatic configurations." />
            <ServiceCard icon="🪣" price="Free on-site quote" title="Garbage Disposal Install" desc="New garbage disposal installed and wired under your kitchen sink. Old unit removed and hauled away." />
            <ServiceCard icon="🚽" price="Free on-site quote" title="Toilet Removal & Install" desc="Old toilet removed and new toilet set, waxed, bolted, and leak-tested. Supply line and shut-off included." />
          </div>
        </div>
      </section>

      {/* LEAK REPAIR */}
      <section className="services-section" id="leaks">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(0,180,216,0.12)' }}>💧</div>
            <div>
              <h2>Leak Repair</h2>
              <p>Drips, seeps, and active leaks under sinks and at fixtures — located and stopped.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🍳" price="Free on-site quote" title="Kitchen Sink Leak Repair" desc="Supply line, drain, P-trap, or garbage disposal connection leaks diagnosed and repaired under your kitchen sink." />
            <ServiceCard icon="🪥" price="Free on-site quote" title="Bathroom Sink Leak Repair" desc="Leaking faucet bases, supply lines, drain connections, and P-traps under bathroom vanity sinks repaired clean." />
            <ServiceCard icon="🔍" price="Free on-site quote" title="Fixture Leak Detection" desc="Not sure where it's coming from? We trace moisture back to the source and fix it before it causes more damage." />
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="emergency-section" id="emergency">
        <div className="emergency-section-inner">
          <div className="section-header fade-up">
            <span className="section-label">Available 24/7</span>
            <h2 className="section-title">Emergency Plumbing</h2>
            <p className="section-desc">Burst pipes, major leaks, sewage backups — plumbing emergencies can't wait. We're available around the clock.</p>
          </div>
          <div className="service-cards-grid" style={{ maxWidth: 1100, margin: '0 auto 3rem' }}>
            {[
              { icon: '🚨', title: 'Burst Pipes', desc: 'Immediate shut-off, repair, and water extraction coordination. We minimize damage from the moment we arrive.' },
              { icon: '💦', title: 'Major Leaks', desc: 'Behind walls, under slabs, or at fixtures — we locate and stop active leaks before water damage worsens.' },
              { icon: '⬆️', title: 'Sewage Backups', desc: 'Sewage backup is a health emergency. We clear the line and sanitize — available 24/7, holidays included.' },
              { icon: '🔥', title: 'No Hot Water', desc: 'Same-day diagnosis and repair of water heater failures — we carry parts to get you back to hot water fast.' },
            ].map(item => (
              <div className="service-item-card dark fade-up" key={item.title}>
                <span className="service-item-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="tel:+15551234567" className="card-link">Call Now →</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="tel:+15551234567" className="btn-primary" style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>
              📞 Emergency Line: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Plumbing Problem?</h2>
          <p>Get a free estimate — we respond within the hour. No job is too big or too small.</p>
          <div className="cta-band-actions">
            <Link to="/#contact" className="btn-primary">🔧 Schedule Service</Link>
            <a href="tel:+15551234567" className="btn-phone">📞 (555) 123-4567</a>
          </div>
        </div>
      </section>
    </>
  )
}
