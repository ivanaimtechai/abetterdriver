import React from 'react'
import logoImage from '../image.png_202605050225.jpeg'

/**
 * aBetterDriver.com brand logo.
 * `variant="dark"`  → for use on light backgrounds (default).
 * `variant="light"` → for use on dark backgrounds (footer); a subtle white
 *                     halo is added so the logo stays legible.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const wrapperClass =
    variant === 'light'
      ? 'inline-flex items-center bg-white/95 rounded-md px-2 py-1'
      : 'inline-flex items-center'

  return (
    <span className={`${wrapperClass} select-none`}>
      <img
        src={logoImage}
        alt="aBetterDriver.com"
        className={`h-10 w-auto ${className}`}
        loading="eager"
      />
    </span>
  )
}
