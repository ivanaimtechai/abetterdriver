import React from 'react'

export default function Logo({ variant = 'dark' }) {
  const textColor = variant === 'dark' ? 'text-slate-900' : 'text-white'
  const accentColor = variant === 'dark' ? 'text-blue-600' : 'text-blue-400'
  const dotColor = variant === 'dark' ? 'text-slate-700' : 'text-slate-300'

  return (
    <div className="flex items-center gap-1 select-none">
      <span className={`text-2xl font-light italic ${textColor}`}>a</span>
      <span className={`text-2xl font-extrabold italic ${accentColor}`}>Better</span>
      <span className={`text-2xl font-extrabold italic ${textColor}`}>Driver</span>
      <span className={`text-sm ${dotColor}`}>.com</span>
      <svg
        className="ml-1 w-10 h-5"
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 18 Q 20 4, 40 12 T 58 18"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M5 24 Q 22 14, 42 20 T 56 26"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
