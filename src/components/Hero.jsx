import React from 'react'
import { Link2, Play, ShieldCheck } from 'lucide-react'
import heroImage from '../image.png_202605050219.jpeg'

export default function Hero() {
  return (
    <section className="bg-slate-50 py-12 lg:py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">
              Referral Program
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-5">
              Refer a Friend.<br />
              Reward Everyone.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg">
              Share aBetterDriver.com with friends and family.<br className="hidden sm:block" />
              They get 15% off — you earn $10 when they sign up!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="btn-primary">
                <Link2 className="w-5 h-5" />
                Get My Referral Link
              </button>
              <button className="btn-outline">
                <Play className="w-5 h-5 fill-current" />
                How It Works
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              Our program is free to join and easy to use.
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
              <img
                src={heroImage}
                alt="Happy friends enjoying a road trip"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Floating earnings card */}
            <div className="absolute -bottom-6 -left-2 sm:left-6 lg:left-auto lg:right-6 bg-white rounded-xl shadow-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-6 max-w-[90%]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl font-bold italic">a</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">You Earn</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-green-600">$10</p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <p className="text-xs text-slate-500 font-medium">They Get</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">15% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
