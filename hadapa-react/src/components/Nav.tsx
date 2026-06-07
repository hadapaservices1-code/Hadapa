import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',          to: '/' },
  { label: 'Services',      to: '/services' },
  { label: 'Case Studies',  to: '/case-studies' },
  { label: 'About',         to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-white/5 shadow-glass' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: 72 }}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-glow-blue">
            <span className="text-white font-black text-sm">H</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Hadapa<span className="text-brand-cyan">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === l.to
                    ? 'text-brand-bright'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-brand text-white hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5"
          >
            Free Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-surface border-b border-white/5 px-6 py-4 space-y-3">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-2 text-sm font-medium ${pathname === l.to ? 'text-brand-bright' : 'text-white/70'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center py-3 text-sm font-semibold rounded-lg bg-gradient-brand text-white mt-2"
          >
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
