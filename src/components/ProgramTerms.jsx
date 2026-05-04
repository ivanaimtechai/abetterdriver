import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const terms = [
  'Referrals must be new customers to qualify.',
  'Rewards are issued only after the refund period has passed.',
  'Self referrals don\'t count.',
  'Posting referral links on coupon or deals sites is not allowed.',
]

export default function ProgramTerms() {
  return (
    <section className="py-5 py-lg-6 bg-white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="container">
        <h3 className="fw-bolder text-brand-slate-900 text-center mb-5"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          Program Terms
        </h3>
        <div className="row g-4 mx-auto" style={{ maxWidth: '64rem' }}>
          {terms.map((term, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="d-flex align-items-start gap-2">
                <CheckCircle2 size={20} className="text-brand-blue flex-shrink-0" style={{ marginTop: '.125rem' }} />
                <p className="small text-brand-slate-600 mb-0" style={{ lineHeight: 1.6 }}>{term}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
