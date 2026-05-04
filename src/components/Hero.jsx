import React from 'react'
import { Link2, Play, ShieldCheck } from 'lucide-react'
import heroImage from '../image.png_202605050219.jpeg'

export default function Hero() {
  return (
    <section className="bg-brand-slate-50 py-5 py-lg-6" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="row align-items-center g-5 g-lg-5">
          {/* Left content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <p className="small fw-bold text-brand-blue text-uppercase mb-3" style={{ letterSpacing: '.15em' }}>
              Referral Program
            </p>
            <h1 className="fw-bolder text-brand-slate-900 mb-3"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.1 }}>
              Refer a Friend.<br />
              Reward Everyone.
            </h1>
            <p className="text-brand-slate-600 mb-4" style={{ fontSize: '1.125rem', maxWidth: '32rem' }}>
              Share aBetterDriver.com with friends and family.<br className="d-none d-sm-block" />
              They get 15% off — you earn $10 when they sign up!
            </p>

            <div className="d-flex flex-column flex-sm-row gap-2 mb-3">
              <button className="btn-brand">
                <Link2 size={20} />
                Get My Referral Link
              </button>
              <button className="btn-brand-outline">
                <Play size={20} fill="currentColor" />
                How It Works
              </button>
            </div>

            <div className="d-flex align-items-center gap-2 small text-brand-slate-500">
              <ShieldCheck size={20} className="text-brand-blue" />
              Our program is free to join and easy to use.
            </div>
          </div>

          {/* Right image */}
          <div className="col-lg-6 order-1 order-lg-2 position-relative">
            <div className="position-relative rounded-2xl overflow-hidden shadow-soft"
                 style={{ aspectRatio: '4/3' }}>
              <img
                src={heroImage}
                alt="Happy friends enjoying a road trip"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
                loading="eager"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100"
                   style={{ background: 'linear-gradient(to top, rgba(0,0,0,.1), transparent)' }} />
            </div>

            {/* Floating earnings card */}
            <div className="position-absolute bg-white rounded-xl shadow-soft p-3 p-sm-4 d-flex align-items-center gap-3 gap-sm-4"
                 style={{ bottom: '-1.5rem', right: '1.5rem', maxWidth: '90%' }}>
              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-brand-green-tint d-flex align-items-center justify-content-center flex-shrink-0"
                     style={{ width: '3rem', height: '3rem' }}>
                  <span className="text-brand-green fw-bold fst-italic" style={{ fontSize: '1.25rem' }}>a</span>
                </div>
                <div>
                  <p className="small text-brand-slate-500 fw-medium mb-0">You Earn</p>
                  <p className="fw-bolder text-brand-green mb-0" style={{ fontSize: '1.875rem' }}>$10</p>
                </div>
              </div>
              <div style={{ width: '1px', height: '2.5rem', backgroundColor: 'var(--brand-slate-200)' }} />
              <div>
                <p className="small text-brand-slate-500 fw-medium mb-0">They Get</p>
                <p className="fw-bolder text-brand-blue mb-0" style={{ fontSize: '1.875rem' }}>15% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
