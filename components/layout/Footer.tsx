'use client'
import Link from 'next/link'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--navy)' }}>
      <div className="container section-pad">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 22, marginBottom: 12 }}>
              Educational Mitra
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
              Indore&apos;s trusted education consultancy since 2012. Free guidance for 50+ courses across 200+ partner colleges in India and abroad.
            </p>
            <a
              href="https://wa.me/917909500055"
              target="_blank"
              rel="noopener"
              className="btn-gold"
              style={{ padding: '9px 20px', fontSize: 13 }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 18, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
              Quick Links
            </h4>
            {[
              { label: 'All Universities', href: '/universities' },
              { label: 'Study Abroad', href: '/study-abroad' },
              { label: 'UK Universities', href: '/study-abroad/uk' },
              { label: 'Global MBA & MS', href: '/study-abroad/global-mba-ms' },
              { label: 'MBA Admissions Indore', href: '/mba-admission-indore' },
              { label: 'Free Counselling', href: '/free-admission-counselling-indore' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{ display: 'block', marginBottom: 9, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 18, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
              Services
            </h4>
            {[
              { label: 'Education Consultant Indore', href: '/education-consultant-indore' },
              { label: 'MBA Admission 2026', href: '/mba-admission-indore' },
              { label: 'Free Counselling Indore', href: '/free-admission-counselling-indore' },
              { label: 'B.Tech Admissions', href: '/universities?course=B.Tech' },
              { label: 'Law College Admissions', href: '/universities?course=Law' },
              { label: 'MBBS Admissions', href: '/universities?course=Medical' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{ display: 'block', marginBottom: 9, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 18, fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
              Contact Us
            </h4>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
              <MapPin size={15} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                402, Silver Sanchora Castle,<br />
                RNT Marg, Regal Square,<br />
                South Tukoganj, Indore 452001
              </p>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
              <Phone size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              <a href="tel:+917909500055" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, textDecoration: 'none' }}>
                +91 7909500055
              </a>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 16 }}>
              <Clock size={15} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ color: 'white', fontSize: 13, fontWeight: 600, margin: '0 0 2px' }}>Work Hours</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, margin: 0 }}>10:00 AM – 7:30 PM</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, margin: 0 }}>Monday – Saturday</p>
              </div>
            </div>

            <a
              href="https://educationalmitra.in"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--gold)', fontSize: 13, textDecoration: 'none' }}
            >
              <ExternalLink size={13} />
              educationalmitra.in
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0 }}>
            © {currentYear} Educational Mitra. All rights reserved. | MSME Registered | Founded 2012, Indore
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, margin: 0 }}>
            This is Educational Mitra&apos;s own reference page and not an official university website.
          </p>
        </div>
      </div>
    </footer>
  )
}
