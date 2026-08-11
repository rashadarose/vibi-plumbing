import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isInnerPage = location.pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const navClass = ['', scrolled || isInnerPage ? 'scrolled' : ''].join(' ').trim()

  return (
    <nav className={navClass} id="navbar">
      <Link to="/" className="nav-logo" aria-label="Vibi Plumbing & Remodeling — Home">
        <Logo height={72} />
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/plumbing">Plumbing</NavLink></li>
        <li><NavLink to="/handyman">Handyman</NavLink></li>
        <li>
          <NavLink to="/#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get Service Scheduled
          </NavLink>
        </li>
      </ul>

      <button
        className="hamburger"
        id="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
