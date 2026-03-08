import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { internationalUniversities } from '@/lib/universities/international'

export const metadata: Metadata = {
  title: 'Study Abroad — UK, USA, Ireland & Europe Admissions from Indore',
  description: 'Study in the UK, USA, Ireland, Germany, France and Belgium. Educational Mitra helps students from Indore with study abroad admissions — applications, visa guidance, and 1+1 pathway programmes.',
  alternates: { canonical: 'https://educationalmitra.in/study-abroad' },
}

const countries = [
  { name: 'UK', emoji: '🇬🇧', count: 116, desc: 'World-class universities with May/June 2026 intakes still open', href: '/study-abroad/uk' },
  { name: 'Ireland', emoji: '🇮🇪', count: 4, desc: 'Post-study work visa of 2 years. Affordable and welcoming', href: '/universities?section=international&country=Ireland' },
  { name: 'USA', emoji: '🇺🇸', count: 5, desc: 'OPT-eligible programmes via PIBM global partners', href: '/study-abroad/global-mba-ms' },
  { name: 'Europe', emoji: '🇪🇺', count: 6, desc: 'France, Germany, Belgium — MBA & MSc at top business schools', href: '/study-abroad/global-mba-ms' },
]

const priorityUK = internationalUniversities.filter(u => u.region === 'UK' && u.intake && u.intake !== '—').slice(0, 6)

export default function StudyAbroadPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <span style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.4)', padding: '3px 14px', borderRadius: 20, fontSize: 13, display: 'inline-block', marginBottom: 16 }}>
            Study Abroad Guidance — Free
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px,4vw,48px)', color: 'white', marginBottom: 14, lineHeight: 1.2 }}>
            Study in the UK, USA,<br />Ireland & Europe
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 560, marginBottom: 28 }}>
            Educational Mitra is your Indore-based gateway to top global universities. We handle everything — shortlisting, applications, and offer acceptance.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20am%20interested%20in%20Study%20Abroad%20options" target="_blank" rel="noopener" className="btn-gold">
              Get Free Guidance <ArrowRight size={16} />
            </a>
            <Link href="/study-abroad/uk" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              🇬🇧 View UK Universities
            </Link>
          </div>
        </div>
      </div>

      {/* Country Tabs */}
      <section style={{ background: 'var(--cream)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,3vw,36px)', color: 'var(--navy)', marginBottom: 10 }}>
              Choose Your Destination
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>131 partner universities across 4 regions</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {countries.map(c => (
              <Link key={c.name} href={c.href} style={{ textDecoration: 'none' }}>
                <div className="uni-card" style={{ textAlign: 'center', padding: 28 }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{c.emoji}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 22, marginBottom: 6 }}>{c.name}</h3>
                  <span className="badge-gold" style={{ marginBottom: 10, display: 'inline-block' }}>{c.count} Universities</span>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UK Priority Intake */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <span className="badge-gold" style={{ marginBottom: 10, display: 'inline-block' }}>Urgent — 2026 Intakes Open</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px,3vw,34px)', color: 'var(--navy)' }}>
              UK Priority Universities — March to June 2026
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {priorityUK.map(u => (
              <Link key={u.slug} href={`/universities/${u.slug}`} style={{ textDecoration: 'none' }}>
                <div className="uni-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, color: 'var(--navy)', lineHeight: 1.3 }}>{u.name}</h3>
                    <span style={{ background: 'rgba(239,68,68,0.1)', color: '#dc2626', fontSize: 11, padding: '2px 8px', borderRadius: 20, fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>
                      {u.intake}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 10 }}>
                    {u.courses.slice(0, 2).map(c => (
                      <span key={c.name} style={{ background: 'rgba(26,63,98,0.06)', color: 'var(--navy)', fontSize: 11, padding: '2px 8px', borderRadius: 20 }}>{c.name}</span>
                    ))}
                  </div>
                  <span style={{ color: 'var(--navy)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    View Details <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/study-abroad/uk" className="btn-primary">See All 116 UK Universities <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 1+1 Pathway */}
      <section style={{ background: 'var(--navy)', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <span style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)', padding: '3px 14px', borderRadius: 20, fontSize: 13, display: 'inline-block', marginBottom: 16 }}>
            PIBM Global Partners
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 'clamp(24px,3vw,36px)', marginBottom: 14 }}>
            1+1 MBA / MS Pathway
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
            Study <strong style={{ color: 'white' }}>1 year in India</strong> + <strong style={{ color: 'white' }}>1 year in USA/UK/Europe</strong>. Get an internationally recognised degree at a fraction of the cost of going abroad for 2 full years.
          </p>
          {['Lawrence Technological University, USA', 'Clark University, USA', 'ISM Germany', 'KEDGE Business School, France', 'UBI Business School, Belgium'].map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 8 }}>
              <CheckCircle size={15} style={{ color: 'var(--gold)' }} />
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>{p}</span>
            </div>
          ))}
          <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/study-abroad/global-mba-ms" className="btn-gold">Explore 1+1 Pathways <ArrowRight size={16} /></Link>
            <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20know%20about%20the%201%2B1%20MBA%20pathway" target="_blank" rel="noopener" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              Request Fee Breakdown
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
