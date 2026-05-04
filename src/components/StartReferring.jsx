import React from 'react'
import { Link2, ArrowRight, Mail, Heart } from 'lucide-react'

export default function StartReferring() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container-custom">
        <div className="bg-blue-50/60 rounded-2xl p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="flex items-center gap-5 flex-1">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 relative">
                <Mail className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-600 absolute top-3 right-3" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                  Start Referring Today!
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Help your friends become safer drivers<br className="hidden sm:block" />
                  and get rewarded for it.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-2 flex-shrink-0">
              <button className="btn-primary">
                <Link2 className="w-5 h-5" />
                Get My Referral Link
              </button>
              <a href="#referrals" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                View My Referrals
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
