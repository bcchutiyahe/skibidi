'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Universities', href: '/universities' },
  {
    label: 'Study Abroad',
    href: '/study-abroad',
    children: [
      { label: 'UK Universities', href: '/study-abroad/uk' },
      { label: 'Global MBA & MS (1+1)', href: '/study-abroad/global-mba-ms' },
    ],
  },
  { label: 'MBA Admissions Indore', href: '/mba-admission-indore' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDrop = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setDropdown(label)
  }
  const closeDrop = () => {
    hoverTimeout.current = setTimeout(() => setDropdown(null), 130)
  }

  return (
    <header style={{ background: 'var(--navy)' }} className="sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div style={{ background: 'var(--gold)', padding: '7px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: 13 }}>
          <span style={{ color: 'white', opacity: 0.95 }} className="hidden md:block">
            📍 402, Silver Sanchora Castle, RNT Marg, South Tukoganj, Indore
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, margin: '0 auto' }} className="md:mx-0">
            <a href="tel:+917909500055" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: 5, fontWeight: 500 }}>
              <Phone size={13} />
              +91 7909500055
            </a>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12 }}>
              Mon–Sat &nbsp;10 AM – 7:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 68 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', overflow: 'hidden', background: 'white', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Using img tag — avoids Next.js domain config issues */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpeg" alt="Educational Mitra" width={42} height={42} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 19, fontWeight: 600, lineHeight: 1.15 }}>
              Educational Mitra
            </div>
            <div style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '0.09em', fontFamily: 'DM Sans, sans-serif' }}>
              SINCE 2012 · INDORE
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navLinks.map(link => (
            <div
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.children && openDrop(link.label)}
              onMouseLeave={() => link.children && closeDrop()}
            >
              <Link
                href={link.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  padding: '8px 12px', borderRadius: 8,
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  transition: 'color 0.15s, background 0.15s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
                {link.children && (
                  <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: dropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                )}
              </Link>

              {/* Dropdown */}
              {link.children && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, paddingTop: 6,
                  minWidth: 220, zIndex: 200,
                  pointerEvents: dropdown === link.label ? 'auto' : 'none',
                  opacity: dropdown === link.label ? 1 : 0,
                  transform: dropdown === link.label ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.18s ease, transform 0.18s ease',
                }}>
                  <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                    {link.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ display: 'block', padding: '11px 16px', color: 'var(--navy)', fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'background 0.15s, color 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--gold-dark)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)' }}
                        onClick={() => setDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <a
            href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20need%20free%20counselling"
            target="_blank"
            rel="noopener"
            className="btn-gold"
            style={{ marginLeft: 8, padding: '10px 22px', fontSize: 14 }}
          >
            Free Counselling
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu"
          style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div style={{
        background: 'white',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        maxHeight: open ? '600px' : '0',
        transition: 'max-height 0.32s ease',
      }} className="md:hidden">
        <div style={{ padding: '8px 0 16px' }}>
          {navLinks.map(link => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 24px', background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--navy)', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500,
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {link.label}
                    <ChevronDown size={16} style={{ color: 'var(--text-muted)', transition: 'transform 0.2s', transform: mobileExpanded === link.label ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>
                  <div style={{ maxHeight: mobileExpanded === link.label ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.25s ease' }}>
                    {link.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ display: 'block', padding: '10px 24px 10px 36px', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', fontSize: 14, borderBottom: '1px solid var(--border)', textDecoration: 'none' }}
                        onClick={() => setOpen(false)}
                      >
                        → {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  style={{ display: 'block', padding: '12px 24px', color: 'var(--navy)', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, borderBottom: '1px solid var(--border)', textDecoration: 'none' }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div style={{ padding: '16px 24px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20need%20free%20counselling"
              target="_blank"
              rel="noopener"
              className="btn-gold"
              style={{ justifyContent: 'center', fontSize: 15, padding: '13px 20px' }}
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'white', flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp — Free Counselling
            </a>
            <a
              href="tel:+917909500055"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 20px', border: '1.5px solid rgba(26,63,98,0.2)', borderRadius: 12, color: 'var(--navy)', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}
              onClick={() => setOpen(false)}
            >
              <Phone size={16} />
              +91 7909500055
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
