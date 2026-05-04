import React, { useState } from 'react'
import { ChevronDown, Globe, User, Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Referral Program', href: '#referral', active: true },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-bottom sticky-top" style={{ zIndex: 1030 }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between" style={{ minHeight: '4rem' }}>
          <a href="#" className="flex-shrink-0 text-decoration-none">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`small fw-medium text-decoration-none ${
                  link.active ? 'nav-link-active' : 'text-brand-slate-700'
                }`}
                style={{ transition: 'color .15s' }}
                onMouseEnter={(e) => { if (!link.active) e.currentTarget.style.color = 'var(--brand-blue-600)' }}
                onMouseLeave={(e) => { if (!link.active) e.currentTarget.style.color = '' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="d-none d-lg-flex align-items-center gap-2">
            <button className="d-flex align-items-center gap-1 small fw-medium text-brand-slate-700 px-3 py-2 rounded bg-transparent border-0">
              <Globe size={16} />
              English
              <ChevronDown size={16} />
            </button>
            <button className="d-flex align-items-center gap-2 small fw-semibold text-white px-4 py-2 rounded border-0"
              style={{ backgroundColor: 'var(--brand-blue-600)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-blue-700)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-blue-600)'}
            >
              <User size={16} />
              Log In
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="d-lg-none p-2 rounded border-0 bg-transparent text-brand-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="d-lg-none border-top py-3">
            <ul className="list-unstyled mb-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`d-block px-3 py-2 rounded fw-medium text-decoration-none ${
                      link.active ? 'text-brand-blue bg-brand-blue-50' : 'text-brand-slate-700'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3 mt-3 border-top d-flex flex-column gap-2">
              <button className="d-flex align-items-center justify-content-center gap-1 small fw-medium text-brand-slate-700 px-3 py-2 rounded bg-white border">
                <Globe size={16} />
                English
                <ChevronDown size={16} />
              </button>
              <button
                className="d-flex align-items-center justify-content-center gap-2 small fw-semibold text-white px-4 py-2 rounded border-0"
                style={{ backgroundColor: 'var(--brand-blue-600)' }}
              >
                <User size={16} />
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
