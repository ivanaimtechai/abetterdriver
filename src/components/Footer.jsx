import React from 'react'
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react'
import Logo from './Logo'

const resourceLinks = ['About Us', 'How It Works', 'FAQ', 'Course Requirements', 'Court Information']
const companyLinks = ['Privacy Policy', 'Terms of Use', 'Contact Us', 'Blog']

const socialLinks = [
  { name: 'Facebook', icon: Facebook, color: 'text-blue-500' },
  { name: 'YouTube', icon: Youtube, color: 'text-red-500' },
  {
    name: 'TikTok',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.79a8.16 8.16 0 0 0 4.77 1.52V6.85a4.85 4.85 0 0 1-1.84-.16Z"/>
      </svg>
    ),
    color: 'text-pink-400'
  },
  { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-slate-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Indiana's trusted online provider of Driver Safety Programs. Get your 4-point credit and become a safer driver today.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:1-888-665-9219" className="hover:text-white">1-888-665-9219</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@abetterdriver.com" className="hover:text-white break-all">info@abetterdriver.com</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>8034 Garden Grove Blvd Suite C<br />Garden Grove, CA 92844</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Follow Us</h4>
            <ul className="space-y-3">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.name}>
                    <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                      <span className={`${s.color}`}>
                        <Icon className="w-5 h-5" />
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
        <div className="mt-12 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            © 2026 abetterdriver.com Powered by{' '}
            <a href="#" className="underline hover:text-white">Cyberactive</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
