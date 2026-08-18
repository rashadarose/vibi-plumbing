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

export default function Handyman() {
  useScrollAnimation()

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,#0a1a12,#102a1c,#0a1a12)' }}>
        <div className="page-hero-bg-img">
          <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=55" alt="" aria-hidden="true" />
        </div>
        <div className="page-hero-inner">
          <span className="page-hero-icon">🔨</span>
          <div className="hero-badge" style={{ margin: '0 auto 1.5rem', background: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.3)', color: '#6ee7b7' }}>
            Owner-Operated Handyman Service
          </div>
          <h1>Handyman Services</h1>
          <p>Focused handyman help for shelves, TV mounting, fixture/door repairs, drywall touch-ups, and furniture assembly.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Handyman</span>
          </div>
        </div>
      </div>

      {/* TV & MOUNTING */}
      <section className="services-section" id="mounting">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>📺</div>
            <div>
              <h2>TV &amp; Mounting Services</h2>
              <p>Shelving and TV mounting done cleanly and securely.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="📺" price="Starting at $79" title="TV Wall Mounting" desc="TV mounting on drywall, brick, or tile with solid anchoring and level placement." />
            <ServiceCard icon="📐" price="Starting at $95" title="Shelving Installation" desc="Floating and standard shelves installed securely and aligned cleanly." />
            <ServiceCard icon="🛠️" price="Starting at $75" title="General Fixture Repairs" desc="Common fixture issues adjusted or repaired to restore safe daily use." />
            <ServiceCard icon="🚪" price="Starting at $75" title="Door & Fixture Repairs" desc="Sticky doors, hinge issues, latch problems, and small fixture repairs handled quickly." />
          </div>
        </div>
      </section>

      {/* FURNITURE ASSEMBLY */}
      <section className="services-section alt-bg" id="assembly">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(232,160,32,0.12)' }}>🪑</div>
            <div>
              <h2>Furniture Assembly</h2>
              <p>Flat-pack furniture assembled correctly so it is sturdy, level, and ready to use.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🛏️" price="Starting at $89" title="Bed Frame Assembly" desc="Bed frames assembled safely and tightened properly for long-term use." />
            <ServiceCard icon="🛋️" price="Starting at $75" title="Couch & Sectional Assembly" desc="Sectionals and modular seating assembled and positioned where you want them." />
            <ServiceCard icon="🗄️" price="Starting at $65" title="Desk & Office Furniture" desc="Desks, office chairs, and storage pieces assembled and checked for stability." />
            <ServiceCard icon="🪞" price="Starting at $55" title="Dresser & Wardrobe Assembly" desc="Dressers and wardrobes assembled squarely with safety anchoring when needed." />
            <ServiceCard icon="📦" price="Custom Quote" title="Multi-Item Assembly" desc="Need multiple items assembled in one visit? Bundle options available." />
          </div>
        </div>
      </section>

      {/* HOME REPAIRS */}
      <section className="services-section" id="repairs">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(0,180,216,0.12)' }}>🔨</div>
            <div>
              <h2>Home Repairs &amp; Quick Fixes</h2>
              <p>Small repairs and touch-ups that keep your home functional and looking clean.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🚪" price="Starting at $75" title="Door Repairs & Adjustments" desc="Sticky doors, hinge issues, latch alignment, and everyday door hardware fixes." />
            <ServiceCard icon="💡" price="Starting at $55" title="Fixture Repairs" desc="Small fixture repairs and replacements around the home, done neatly and safely." />
            <ServiceCard icon="🧱" price="Starting at $85" title="Small Drywall Repairs" desc="Minor holes and patches smoothed and prepped for paint-ready touch-up." />
            <ServiceCard icon="💧" price="Starting at $45" title="Caulking" desc="Fresh caulk around tubs, sinks, and high-moisture areas to help prevent water intrusion." />
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section className="package-section">
        <div className="package-inner">
          <span className="section-label">Best Value</span>
          <h2 className="section-title">Book a Handyman Package</h2>
          <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
            Why schedule multiple visits? Book a 2-hour or 4-hour block and knock out your entire to-do list in one visit — at a discounted hourly rate.
          </p>
          <div className="package-grid">
            <div className="package-card">
              <div className="package-icon">⏰</div>
              <div className="package-name">2-Hour Block</div>
              <div className="package-price">$160</div>
              <div className="package-note">Perfect for 2–4 small tasks</div>
            </div>
            <div className="package-card featured">
              <span className="package-badge">MOST POPULAR</span>
              <div className="package-icon">⏱️</div>
              <div className="package-name">4-Hour Block</div>
              <div className="package-price">$280</div>
              <div className="package-note">Tackle your full list</div>
            </div>
          </div>
          <Link to="/get-service" className="btn-primary" style={{ display: 'inline-flex' }}>📋 Book a Handyman Package</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Your To-Do List Awaits.</h2>
          <p>One call handles it all. Book a handyman visit today and come home to a house that's finally done.</p>
          <div className="cta-band-actions">
            <Link to="/get-service" className="btn-primary">🔨 Schedule Service</Link>
            <a href="tel:+19186093674" className="btn-phone">📞 (918) 609-3674</a>
          </div>
        </div>
      </section>
    </>
  )
}
