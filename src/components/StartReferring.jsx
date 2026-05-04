import React from 'react'
import { Link2, ArrowRight, Mail, Heart } from 'lucide-react'

export default function StartReferring() {
  return (
    <section className="py-4 py-lg-5 bg-white">
      <div className="container">
        <div className="bg-brand-blue-soft rounded-2xl p-4 p-lg-5">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
            <div className="d-flex align-items-center gap-4 flex-grow-1">
              <div className="bg-white shadow-sm d-flex align-items-center justify-content-center flex-shrink-0 position-relative rounded-xl"
                   style={{ width: '4rem', height: '4rem' }}>
                <Mail size={32} className="text-brand-blue" strokeWidth={1.5} />
                <Heart size={14} className="text-brand-blue position-absolute"
                       fill="currentColor"
                       style={{ top: '.75rem', right: '.75rem' }} />
              </div>
              <div className="text-center text-lg-start">
                <h3 className="fw-bolder text-brand-slate-900 mb-1" style={{ fontSize: '1.5rem' }}>
                  Start Referring Today!
                </h3>
                <p className="text-brand-slate-600 mb-0">
                  Help your friends become safer drivers<br className="d-none d-sm-block" />
                  and get rewarded for it.
                </p>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center align-items-lg-end gap-2 flex-shrink-0">
              <button className="btn-brand">
                <Link2 size={20} />
                Get My Referral Link
              </button>
              <a href="#referrals" className="d-inline-flex align-items-center gap-1 small fw-semibold text-decoration-none text-brand-blue">
                View My Referrals
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
