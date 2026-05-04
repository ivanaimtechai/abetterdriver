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
      ? 'd-inline-flex align-items-center bg-white bg-opacity-75 rounded px-2 py-1'
      : 'd-inline-flex align-items-center'

  return (
    <span className={`${wrapperClass} user-select-none`}>
      <img
        src={logoImage}
        alt="aBetterDriver.com"
        className={className}
        style={{ height: '40px', width: 'auto' }}
        loading="eager"
      />
    </span>
  )
}
