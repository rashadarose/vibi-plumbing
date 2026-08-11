import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'

function ServiceCard({ icon, price, title, desc }) {
  return (
    <div className="service-item-card fade-up">
      <span className="service-item-icon">{icon}</span>
      <span className="price-badge">{price}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to="/#contact" className="card-link">Get a Quote →</Link>
    </div>
  )
}

export default function Remodeling() {
  useScrollAnimation()

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,#1a1a0a,#2d2d10,#1a1a0a)' }}>
        <div className="page-hero-bg-img">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=55" alt="" aria-hidden="true" />
        </div>
        <div className="page-hero-inner">
          <span className="page-hero-icon">🏗️</span>
          <div className="hero-badge" style={{ margin: '0 auto 1.5rem', background: 'rgba(232,160,32,0.12)', borderColor: 'rgba(232,160,32,0.3)', color: 'var(--accent-light)' }}>
            Custom Home Remodeling
          </div>
          <h1>Remodeling Services</h1>
          <p>Transform your living spaces with expert craftsmanship. From dream kitchens to stunning bathroom renovations — we bring your vision to life.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Remodeling</span>
          </div>
        </div>
      </div>

      {/* KITCHEN */}
      <section className="services-section" id="kitchen">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(232,160,32,0.12)' }}>🍳</div>
            <div>
              <h2>Kitchen Remodeling</h2>
              <p>The heart of the home — reimagined. From cabinet refacing to full gut renovations.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🗄️" price="Starting at $3,500" title="Cabinet Installation & Refacing" desc="New custom cabinetry or budget-friendly refacing that transforms the look of your kitchen without the full replacement cost." />
            <ServiceCard icon="🪨" price="Starting at $2,200" title="Countertop Replacement" desc="Granite, quartz, marble, butcher block — we install all countertop materials with precision cuts for a flawless fit." />
            <ServiceCard icon="💡" price="Starting at $1,200" title="Kitchen Backsplash" desc="Custom tile, subway, mosaic, or stone backsplash installation that ties your kitchen design together beautifully." />
            <ServiceCard icon="🚰" price="Starting at $450" title="Sink & Faucet Upgrade" desc="Undermount, farmhouse, or drop-in sinks installed with the faucet of your choice — complete with all plumbing connections." />
            <ServiceCard icon="🏠" price="Starting at $15,000" title="Full Kitchen Remodel" desc="Complete kitchen transformation — design consultation, demolition, cabinets, countertops, flooring, plumbing, and electrical." />
            <ServiceCard icon="🪟" price="Starting at $800" title="Kitchen Island Addition" desc="Add workspace, storage, and seating with a custom kitchen island — built to match your existing cabinets and countertops." />
          </div>
        </div>
      </section>

      {/* BATHROOM */}
      <section className="services-section alt-bg" id="bathroom">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(0,180,216,0.12)' }}>🛁</div>
            <div>
              <h2>Bathroom Renovations</h2>
              <p>Spa-like retreats or efficient guest baths — every bathroom deserves a beautiful upgrade.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🛁" price="Starting at $8,500" title="Full Bathroom Remodel" desc="Complete gut and renovate — new tile, vanity, tub, shower, lighting, and fixtures. We handle permits, plumbing, and finish work." />
            <ServiceCard icon="🚿" price="Starting at $3,500" title="Shower Conversion" desc="Convert a tub to a walk-in shower, or add a tile shower with custom glass enclosure. Barrier-free options available." />
            <ServiceCard icon="🪞" price="Starting at $900" title="Vanity & Mirror Upgrade" desc="New floating or freestanding vanities, framed mirrors, and updated lighting to modernize your bathroom instantly." />
            <ServiceCard icon="⬛" price="Starting at $1,800" title="Tile Installation" desc="Floor-to-ceiling tile work — large format, mosaic, or subway tile. Heated floor tile options available for ultimate comfort." />
            <ServiceCard icon="♿" price="Starting at $2,000" title="Accessibility Upgrades" desc="Walk-in showers, grab bars, comfort-height toilets, and roll-in conversions for aging-in-place or accessibility needs." />
            <ServiceCard icon="💡" price="Starting at $650" title="Bathroom Lighting" desc="LED vanity lights, recessed lighting, exhaust fan combo units — proper bathroom lighting that flatters and functions." />
          </div>
        </div>
      </section>

      {/* FLOORING */}
      <section className="services-section" id="flooring">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(232,160,32,0.12)' }}>🪵</div>
            <div>
              <h2>Flooring &amp; Tile</h2>
              <p>The foundation of every beautiful room — installed with precision and built to last.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🪵" price="Starting at $4.50/sq ft" title="Hardwood & Engineered Wood" desc="Solid hardwood and engineered wood floor installation — nail-down, glue-down, or floating. All species and finishes available." />
            <ServiceCard icon="⬜" price="Starting at $3.50/sq ft" title="Tile & Stone Flooring" desc="Porcelain, ceramic, slate, and natural stone tile installation for kitchens, baths, entryways, and outdoor spaces." />
            <ServiceCard icon="🎯" price="Starting at $2.50/sq ft" title="LVP & Laminate" desc="Luxury vinyl plank and laminate — waterproof, durable, and beautiful. Perfect for high-traffic areas and basements." />
            <ServiceCard icon="🔄" price="Starting at $2.00/sq ft" title="Floor Refinishing" desc="Bring your existing hardwood floors back to life — sanding, staining, and refinishing at a fraction of replacement cost." />
          </div>
        </div>
      </section>

      {/* MORE REMODELING */}
      <section className="services-section alt-bg">
        <div className="services-section-inner">
          <div className="sub-section-header">
            <div className="sub-section-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>🏠</div>
            <div>
              <h2>More Remodeling Services</h2>
              <p>Expanding your home or transforming underutilized spaces into beautiful, functional areas.</p>
            </div>
          </div>
          <div className="service-cards-grid">
            <ServiceCard icon="🏚️" price="Starting at $18,000" title="Basement Finishing" desc="Transform your unfinished basement into a home theater, guest suite, office, or gym — fully framed, drywalled, and finished." />
            <ServiceCard icon="🏗️" price="Starting at $25,000" title="Room Additions" desc="Add square footage with a professional room addition — fully permitted, framed, and finished to match your existing home." />
            <ServiceCard icon="🖼️" price="Starting at $1,200" title="Drywall & Painting" desc="Smooth walls and fresh paint make every room feel brand new. We do texture, skim coat, and premium interior painting." />
            <ServiceCard icon="🚪" price="Starting at $350" title="Door & Window Trim" desc="Interior door installation, casing, baseboards, crown molding, and window trim — the finish details that elevate every room." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Dream Space, Expert Build.</h2>
          <p>Let's talk about your project. We provide free in-home consultations and detailed proposals.</p>
          <div className="cta-band-actions">
            <Link to="/#contact" className="btn-primary">🏗️ Get a Free Consultation</Link>
            <a href="tel:+15551234567" className="btn-phone">📞 (555) 123-4567</a>
          </div>
        </div>
      </section>
    </>
  )
}
