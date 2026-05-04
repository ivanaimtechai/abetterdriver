import React from 'react'
import { Link2, Users, Gift } from 'lucide-react'

const steps = [
  {
    num: 1,
    icon: Link2,
    title: 'Share Your Link',
    description: 'Get your unique referral link or code and share it with friends and family by text, email, or on social media.',
  },
  {
    num: 2,
    icon: Users,
    title: 'They Sign Up',
    description: 'When your friend signs up for the Indiana Driver Safety Program using your link, they\'ll get 15% off.',
  },
  {
    num: 3,
    icon: Gift,
    title: 'You Earn $10',
    description: 'Once your friend completes their enrollment and the refund period has passed, you\'ll earn $10.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 py-lg-6 bg-white" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bolder text-brand-slate-900 mb-2" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)' }}>
            How It Works
          </h2>
          <p className="text-brand-slate-500" style={{ fontSize: '1.125rem' }}>
            It only takes a few simple steps.
          </p>
        </div>

        <div className="position-relative row g-4">
          {/* Dotted connector lines (desktop only) */}
          <div className="d-none d-md-block position-absolute pointer-events-none"
               style={{ top: '78px', left: '16.66%', right: '16.66%', height: '1px' }}>
            <div className="d-grid h-100" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="dotted-line"></div>
              <div className="dotted-line"></div>
            </div>
          </div>

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="col-md-4">
                <div className="position-relative bg-white border rounded-2xl p-4 p-lg-5 text-center card-lift h-100">
                  <div className="d-flex justify-content-center mb-4">
                    <div className="rounded-circle bg-brand-blue-50 d-flex align-items-center justify-content-center"
                         style={{ width: '5rem', height: '5rem' }}>
                      <Icon size={36} className="text-brand-blue" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                    <span className="rounded-circle text-white small fw-bold d-flex align-items-center justify-content-center"
                          style={{ width: '1.75rem', height: '1.75rem', backgroundColor: 'var(--brand-blue-600)' }}>
                      {step.num}
                    </span>
                    <h3 className="fw-bold text-brand-slate-900 mb-0" style={{ fontSize: '1.25rem' }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-brand-slate-500 mb-0 mx-auto" style={{ maxWidth: '20rem', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
