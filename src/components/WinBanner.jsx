import React from 'react'
import { DollarSign, User } from 'lucide-react'

export default function WinBanner() {
  return (
    <section className="py-4 py-lg-5 bg-white">
      <div className="container">
        <div className="bg-brand-blue-soft rounded-2xl p-4 p-lg-5">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-4">
            {/* Icon + Headline */}
            <div className="d-flex align-items-center gap-3 flex-shrink-0">
              <div className="rounded-circle bg-brand-green-tint d-flex align-items-center justify-content-center flex-shrink-0"
                   style={{ width: '3.5rem', height: '3.5rem' }}>
                <DollarSign size={28} className="text-brand-green" strokeWidth={2.5} />
              </div>
              <h3 className="fw-bolder text-brand-slate-900 mb-0 text-nowrap" style={{ fontSize: '1.5rem' }}>
                A Win for Everyone!
              </h3>
            </div>

            {/* Benefits */}
            <div className="flex-grow-1 row g-3 w-100">
              <div className="col-12 col-sm-4 d-flex align-items-center gap-3 justify-content-center justify-content-sm-start">
                <div className="rounded-circle bg-brand-green-soft d-flex align-items-center justify-content-center flex-shrink-0"
                     style={{ width: '3rem', height: '3rem' }}>
                  <User size={24} className="text-brand-green" strokeWidth={2} />
                </div>
                <div>
                  <p className="small text-brand-slate-600 fw-medium mb-0">They Save</p>
                  <p className="fw-bold text-brand-green mb-0">15% OFF</p>
                  <p className="text-brand-slate-500 mb-0" style={{ fontSize: '.75rem' }}>on their course</p>
                </div>
              </div>

              <div className="col-12 col-sm-4 d-flex align-items-center gap-3 justify-content-center justify-content-sm-start">
                <div className="rounded-circle bg-brand-blue-100 d-flex align-items-center justify-content-center flex-shrink-0"
                     style={{ width: '3rem', height: '3rem' }}>
                  {/* Road icon — perspective road with dashed center line */}
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9 28 L14 4 L18 4 L23 28 Z" fill="#2563eb" fillOpacity="0.18" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M16 6 L16 10 M16 14 L16 18 M16 22 L16 26" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="small text-brand-slate-600 fw-medium mb-0">We Gain</p>
                  <p className="fw-bold text-brand-slate-900 mb-0">a new happy</p>
                  <p className="text-brand-slate-500 mb-0" style={{ fontSize: '.75rem' }}>customer</p>
                </div>
              </div>

              <div className="col-12 col-sm-4 d-flex align-items-center gap-3 justify-content-center justify-content-sm-start">
                <div className="rounded-circle bg-brand-green-500 d-flex align-items-center justify-content-center flex-shrink-0"
                     style={{ width: '3rem', height: '3rem' }}>
                  <span className="text-white fw-bolder small">$10</span>
                </div>
                <div>
                  <p className="small text-brand-slate-600 fw-medium mb-0">You Earn</p>
                  <p className="fw-bold text-brand-green mb-0">$10</p>
                  <p className="text-brand-slate-500 mb-0" style={{ fontSize: '.75rem' }}>for every referral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
