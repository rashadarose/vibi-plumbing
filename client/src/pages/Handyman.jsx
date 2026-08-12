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
            Your Trusted Handyman
          </div>
          <h1>Handyman Services</h1>
          <p>Furniture assembly, TV mounting, drywall patches, and minor home repairs. No trip charge — quote given on arrival.</p>
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
              <p>Perfectly level, cord-free wall mounting — any TV size, any wall type.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="📺" price="Starting at $79" title="TV Wall Mounting" desc="Professional TV mounting on drywall, brick, stone, or tile. Includes stud finding, level placement, and bracket installation." />
            <ServiceCard icon="🔌" price="Starting at $149" title="Cord Concealment" desc="Hide all cables in-wall or with low-profile raceways for a clean, professional look that looks like it came with the house." />
            <ServiceCard icon="📐" price="Starting at $95" title="Shelf & Floating Shelf Install" desc="Floating shelves, display shelves, closet shelving systems — properly anchored and perfectly level for any wall type." />
            <ServiceCard icon="🖼️" price="Starting at $65" title="Picture & Art Hanging" desc="Gallery walls, large art pieces, mirrors, and accent frames — hung level and anchored safely for any weight." />
            <ServiceCard icon="📡" price="Starting at $85" title="Projector Mounting" desc="Ceiling mount projector installation with cord management for home theaters, offices, and media rooms." />
            <ServiceCard icon="🔊" price="Starting at $95" title="Speaker & Soundbar Mount" desc="Wall or ceiling mount for soundbars, surround sound speakers, and outdoor speakers — clean wiring included." />
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
              <p>IKEA, Wayfair, Amazon — all flat-pack furniture assembled correctly and quickly.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🛏️" price="Starting at $89" title="Bed Frame Assembly" desc="All bed frame types — platform, adjustable, canopy, and bunk beds — assembled sturdy and safely, all sizes." />
            <ServiceCard icon="🛋️" price="Starting at $75" title="Couch & Sectional Assembly" desc="Sectionals, sofa beds, and modular seating assembled, oriented, and placed exactly where you want them." />
            <ServiceCard icon="🗄️" price="Starting at $65" title="Desk & Office Furniture" desc="Standing desks, office chairs, bookcases, and filing cabinets assembled and arranged to your specifications." />
            <ServiceCard icon="🪞" price="Starting at $55" title="Dresser & Wardrobe Assembly" desc="Flat-pack dressers, wardrobes, armoires, and closet organizers — assembled squarely and anchored to the wall for safety." />
            <ServiceCard icon="🪑" price="Starting at $45" title="Dining Table & Chair Set" desc="Dining tables, chairs, bar stools, and outdoor patio furniture assembled and ready for use the same day." />
            <ServiceCard icon="📦" price="Custom Quote" title="Whole-Room Assembly Package" desc="Moving in? Let us assemble your entire room or home at once — discounted package rates for multiple pieces." />
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
              <p>All the small (and not-so-small) repairs your home needs handled by a pro.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🚪" price="Starting at $75" title="Door Repairs & Adjustments" desc="Sticky doors, squeaky hinges, misaligned latches, and door knob replacements — fixed so your doors work like new." />
            <ServiceCard icon="🔒" price="Starting at $65" title="Lock Installation & Re-key" desc="New deadbolts, smart locks, door handles, and re-keying services — improve your home security quickly and affordably." />
            <ServiceCard icon="🧱" price="Starting at $85" title="Drywall Patching" desc="Holes, cracks, and dings patched and textured to blend seamlessly with your existing wall. Paint-ready finish." />
            <ServiceCard icon="🪟" price="Starting at $55" title="Window & Screen Repair" desc="Torn window screens replaced, window hardware repaired, and weatherstripping replaced to stop drafts and bugs." />
            <ServiceCard icon="💧" price="Starting at $45" title="Caulking & Weatherproofing" desc="Fresh caulk around tubs, sinks, windows, and doors — stops water damage and improves energy efficiency." />
            <ServiceCard icon="💡" price="Starting at $55" title="Light Fixture Swap" desc="Replace dated light fixtures, ceiling fans, or bathroom vanity lights with your new fixtures — quickly and safely." />
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
