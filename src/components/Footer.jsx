import React from 'react'
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react'
import Logo from './Logo'

const resourceLinks = ['About Us', 'How It Works', 'FAQ', 'Course Requirements', 'Court Information']
const companyLinks = ['Privacy Policy', 'Terms of Use', 'Contact Us', 'Blog']

const socialLinks = [
  { name: 'Facebook', icon: Facebook, color: '#3b82f6' },
  { name: 'YouTube', icon: Youtube, color: '#ef4444' },
  {
    name: 'TikTok',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.79a8.16 8.16 0 0 0 4.77 1.52V6.85a4.85 4.85 0 0 1-1.84-.16Z"/>
      </svg>
    ),
    color: '#f472b6',
  },
  { name: 'LinkedIn', icon: Linkedin, color: '#60a5fa' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-light">
      <div className="container py-5 py-lg-6" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="row g-4 g-lg-5">
          {/* Brand */}
          <div className="col-12 col-sm-6 col-lg">
            <Logo variant="light" />
            <p className="mt-3 small mb-0" style={{ color: 'rgba(203, 213, 225, .7)', lineHeight: 1.6 }}>
              Indiana's trusted online provider of Driver Safety Programs. Get your 4-point credit and become a safer driver today.
            </p>
          </div>

          {/* Resources */}
          <div className="col-12 col-sm-6 col-lg">
            <h4 className="text-white fw-bold small text-uppercase mb-3" style={{ letterSpacing: '.1em' }}>Resources</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {resourceLinks.map((l) => (
                <li key={l}><a href="#" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-lg">
            <h4 className="text-white fw-bold small text-uppercase mb-3" style={{ letterSpacing: '.1em' }}>Company</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {companyLinks.map((l) => (
                <li key={l}><a href="#" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg">
            <h4 className="text-white fw-bold small text-uppercase mb-3" style={{ letterSpacing: '.1em' }}>Contact Us</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li className="d-flex align-items-start gap-2 small" style={{ color: 'rgba(203, 213, 225, .7)' }}>
                <Phone size={16} style={{ marginTop: '.125rem', flexShrink: 0 }} />
                <a href="tel:1-888-665-9219" className="footer-link">1-888-665-9219</a>
              </li>
              <li className="d-flex align-items-start gap-2 small" style={{ color: 'rgba(203, 213, 225, .7)' }}>
                <Mail size={16} style={{ marginTop: '.125rem', flexShrink: 0 }} />
                <a href="mailto:info@abetterdriver.com" className="footer-link text-break">info@abetterdriver.com</a>
              </li>
              <li className="d-flex align-items-start gap-2 small" style={{ color: 'rgba(203, 213, 225, .7)' }}>
                <MapPin size={16} style={{ marginTop: '.125rem', flexShrink: 0 }} />
                <span>8034 Garden Grove Blvd Suite C<br />Garden Grove, CA 92844</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="col-12 col-sm-6 col-lg">
            <h4 className="text-white fw-bold small text-uppercase mb-3" style={{ letterSpacing: '.1em' }}>Follow Us</h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.name}>
                    <a href="#" className="footer-link d-inline-flex align-items-center gap-2">
                      <span style={{ color: s.color }}>
                        <Icon size={20} />
                      </span>
                      <span>{s.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-5 pt-3 border-top text-center" style={{ borderColor: 'rgba(148, 163, 184, .25) !important' }}>
          <p className="small mb-0" style={{ color: 'rgba(203, 213, 225, .7)' }}>
            © 2026 abetterdriver.com Powered by{' '}
            <a href="#" className="text-decoration-underline" style={{ color: 'inherit' }}>Cyberactive</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
