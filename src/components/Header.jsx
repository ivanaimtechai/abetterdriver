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
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg transition-colors">
              <Globe className="w-4 h-4" />
              English
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              <User className="w-4 h-4" />
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  link.active
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <button className="flex items-center justify-center gap-1.5 text-sm font-medium text-slate-700 px-3 py-2.5 rounded-lg border border-slate-200">
                <Globe className="w-4 h-4" />
                English
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
                <User className="w-4 h-4" />
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
