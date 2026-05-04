import React from 'react'
import { DollarSign, User } from 'lucide-react'

export default function WinBanner() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container-custom">
        <div className="bg-blue-50/60 rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Icon + Headline */}
            <div className="flex items-center gap-4 lg:flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-7 h-7 text-green-600" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 whitespace-nowrap">
                A Win for Everyone!
              </h3>
            </div>

            {/* Benefits */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-3 w-full">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-green-600" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-medium">They Save</p>
                  <p className="font-bold text-green-600 text-base">15% OFF</p>
                  <p className="text-xs text-slate-500">on their course</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  {/* Road icon — perspective road with dashed center line */}
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Road surface (trapezoid in perspective) */}
                    <path
                      d="M9 28 L14 4 L18 4 L23 28 Z"
                      fill="#2563eb"
                      fillOpacity="0.18"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    {/* Dashed center line */}
                    <path
                      d="M16 6 L16 10 M16 14 L16 18 M16 22 L16 26"
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-medium">We Gain</p>
                  <p className="font-bold text-slate-900 text-base">a new happy</p>
                  <p className="text-xs text-slate-500">customer</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold text-sm">$10</span>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-medium">You Earn</p>
                  <p className="font-bold text-green-600 text-base">$10</p>
                  <p className="text-xs text-slate-500">for every referral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
