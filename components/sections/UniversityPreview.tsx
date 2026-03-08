'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { localUniversities } from '@/lib/universities/local'
import { nationalUniversities } from '@/lib/universities/national'
import { internationalUniversities } from '@/lib/universities/international'
import UniLogo from '@/components/ui/UniLogo'

const tabs = [
  { id: 'local', label: 'Local — Indore & MP', data: localUniversities.slice(0, 6) },
  { id: 'national', label: 'National', data: nationalUniversities.slice(0, 6) },
  { id: 'international', label: 'International', data: internationalUniversities.slice(0, 6) },
]

export default function UniversityPreview() {
  const [active, setActive] = useState('local')
  const current = tabs.find(t => t.id === active)!

  return (
    <section style={{ padding: '88px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="badge-navy" style={{ marginBottom: 12, display: 'inline-block' }}>200+ Partner Colleges</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--navy)', marginBottom: 12 }}>
            Explore Our University Partners
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
            From top colleges in Indore to globally ranked universities — we cover them all.
          </p>
        </div>

        {/* Pill Tabs — larger, touch-friendly */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                padding: '12px 28px',
                borderRadius: 50,
                fontWeight: 600,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                border: active === t.id ? 'none' : '1.5px solid var(--border)',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                background: active === t.id ? 'var(--navy)' : 'white',
                color: active === t.id ? 'white' : 'var(--text-muted)',
                boxShadow: active === t.id ? '0 4px 16px rgba(26,63,98,0.22)' : 'none',
                minWidth: 140,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid — responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: 20,
        }}>
          {current.data.map(uni => (
            <Link key={uni.slug} href={`/universities/${uni.slug}`} style={{ textDecoration: 'none' }}>
              <div className="uni-card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                  <UniLogo website={uni.website} name={uni.name} size={44} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, color: 'var(--navy)', marginBottom: 4, lineHeight: 1.3 }}>
                      {uni.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: 13 }}>
                      <MapPin size={12} />
                      {uni.city}{uni.state && uni.state !== uni.city ? `, ${uni.state}` : ''}
                    </div>
                  </div>
                  {uni.naac && uni.naac !== 'N/A' && (
                    <span className="badge-gold" style={{ fontSize: 11, flexShrink: 0 }}>NAAC {uni.naac}</span>
                  )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {uni.courses.slice(0, 3).map(c => (
                    <span key={c.name} style={{ background: 'rgba(26,63,98,0.06)', color: 'var(--navy)', fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}>
                      {c.name}
                    </span>
                  ))}
                  {uni.courses.length > 3 && (
                    <span style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-dark)', fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 500 }}>
                      +{uni.courses.length - 3} more
                    </span>
                  )}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{uni.type}</span>
                  <span style={{ color: 'var(--navy)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link href="/universities" className="btn-primary">
            View All Universities <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
