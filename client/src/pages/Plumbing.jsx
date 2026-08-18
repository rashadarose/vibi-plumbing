import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function ServiceCard({ icon, price, title, desc }) {
  return (
    <div className="service-item-card fade-up">
      <span className="service-item-icon">{icon}</span>
      <span className="price-badge">{price}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to="/get-service" className="card-link">Schedule Service →</Link>
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
          <div className="hero-badge" style={{ margin: '0 auto 1.5rem' }}>Owner-Operated Residential Plumbing</div>
          <h1>Plumbing Services</h1>
          <p>Focused plumbing repairs and replacements handled directly by me, with a clear quote before work begins.</p>
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
              <p>Common sink and fixture drain issues diagnosed and fixed quickly.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🍳" price="Free on-site quote" title="Sink Drain Issues" desc="Kitchen and bathroom sink drains diagnosed and cleared without unnecessary upsells." />
            <ServiceCard icon="🧰" price="Free on-site quote" title="P-trap Replacement" desc="Worn, leaking, or corroded P-traps replaced cleanly with proper slope and sealing." />
            <ServiceCard icon="🚽" price="Free on-site quote" title="Toilet Fill Valve / Flapper" desc="Running toilet fixes including fill valve and flapper replacement to stop water waste." />
            <ServiceCard icon="💧" price="Free on-site quote" title="Minor Leaks" desc="Small leaks around fixtures, supply lines, and connections identified and repaired fast." />
            <ServiceCard icon="🧱" price="Free on-site quote" title="Caulking" desc="Fresh caulk around tubs, sinks, and plumbing fixtures to prevent moisture damage." />
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
              <p>Reliable fixture replacement services for the jobs homeowners request most.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🚰" price="Free on-site quote" title="Faucet Replacement" desc="Kitchen and bathroom faucet replacement with proper shutoff, seal, and leak check." />
            <ServiceCard icon="🪣" price="Free on-site quote" title="Garbage Disposal Replacement" desc="Old disposal swap-out and new unit install with connection checks and cleanup." />
            <ServiceCard icon="🚽" price="Free on-site quote" title="Toilet Repair / Replacement" desc="Toilet repairs and full replacements including reset, supply line, and function testing." />
            <ServiceCard icon="🚿" price="Free on-site quote" title="Showerhead / Faucet Replacement" desc="Showerhead and shower faucet fixture replacement for improved performance and finish." />
            <ServiceCard icon="🔩" price="Free on-site quote" title="Fixture Tune-Ups" desc="Targeted adjustments and parts replacement for common fixture problems and drips." />
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
              <p>Straightforward leak diagnostics and practical repairs for smaller residential issues.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🍳" price="Free on-site quote" title="Kitchen Leak Repair" desc="Under-sink and faucet connection leaks identified and fixed with quality replacement parts." />
            <ServiceCard icon="🪥" price="Free on-site quote" title="Bathroom Leak Repair" desc="Sink and toilet-side leaks repaired before they become bigger moisture problems." />
            <ServiceCard icon="🔍" price="Free on-site quote" title="Leak Source Check" desc="If the source is unclear, the issue is traced first and a clear repair path is provided." />
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
                <a href="tel:+19186093674" className="card-link">Call Now →</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="tel:+19186093674" className="btn-primary" style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>
              📞 Emergency Line: (918) 609-3674
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
            <Link to="/get-service" className="btn-primary">🔧 Schedule Service</Link>
            <a href="tel:+19186093674" className="btn-phone">📞 (918) 609-3674</a>
          </div>
        </div>
      </section>
    </>
  )
}
