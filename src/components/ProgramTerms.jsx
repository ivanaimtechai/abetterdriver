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
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10">
          Program Terms
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {terms.map((term, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">{term}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
