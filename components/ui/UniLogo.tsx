'use client'
import { useState } from 'react'

interface UniLogoProps {
  website: string
  name: string
  size?: number
}

export default function UniLogo({ website, name, size = 40 }: UniLogoProps) {
  const [error, setError] = useState(false)

  const domain = website
    ? website.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
    : ''

  const initials = name
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')

  if (!domain || error) {
    return (
      <div style={{
        width: size, height: size, borderRadius: 8,
        background: 'var(--navy)', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.3, fontWeight: 700,
        fontFamily: 'DM Sans, sans-serif', flexShrink: 0,
      }}>
        {initials || '?'}
      </div>
    )
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={`${name} logo`}
      width={size}
      height={size}
      onError={() => setError(true)}
      style={{ borderRadius: 6, objectFit: 'contain', flexShrink: 0, background: 'white' }}
    />
  )
}
