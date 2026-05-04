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
    <section id="how-it-works" className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            It only takes a few simple steps.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4">
          {/* Dotted connector lines (desktop only) */}
          <div className="hidden md:block absolute top-[78px] left-[16.66%] right-[16.66%] h-px pointer-events-none">
            <div className="grid grid-cols-2 h-full">
              <div className="dotted-line"></div>
              <div className="dotted-line"></div>
            </div>
          </div>

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="w-9 h-9 text-blue-600" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
