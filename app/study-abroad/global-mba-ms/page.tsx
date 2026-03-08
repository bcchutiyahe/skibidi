import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Global MBA & MS — 1+1 Pathway to USA, UK, Europe | PIBM Partners',
  description: '1+1 MBA/MS pathway: Study 1 year in India + 1 year abroad in USA, UK, Germany, France or Belgium. PIBM global partner universities. Contact Educational Mitra Indore for fee breakdown.',
  alternates: { canonical: 'https://educationalmitra.in/study-abroad/global-mba-ms' },
}

const partners = [
  { country: '🇺🇸 USA', unis: ['Lawrence Technological University', 'Clark University', 'Alliant International University', 'CSU Chico', 'CSU San Bernardino'], slugs: ['lawrence-tech-university-usa', 'clark-university-usa', 'alliant-international-university-usa', 'csu-chico-usa', 'csu-san-bernardino-usa'] },
  { country: '🇬🇧 UK', unis: ['Edinburgh Business School (Heriot-Watt)'], slugs: ['edinburgh-business-school-uk'] },
  { country: '🇩🇪 Germany', unis: ['International School of Management (ISM)'], slugs: ['ism-germany'] },
  { country: '🇧🇪 Belgium', unis: ['UBI Business School'], slugs: ['ubi-business-school-belgium'] },
  { country: '🇫🇷 France', unis: ['KEDGE Business School', 'Montpellier Business School', 'Rennes School of Business'], slugs: ['kedge-business-school-france', 'montpellier-business-school-france', 'rennes-school-of-business-france'] },
]

export default function GlobalMBAPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
            <Link href="/study-abroad" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none' }}>Study Abroad</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: 'var(--gold)', fontSize: 13 }}>Global MBA & MS</span>
          </div>
          <span style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)', padding: '3px 14px', borderRadius: 20, fontSize: 13, display: 'inline-block', marginBottom: 16 }}>
            PIBM Global Partners
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,4vw,46px)', color: 'white', marginBottom: 14, lineHeight: 1.2 }}>
            1+1 Global MBA & MS Pathway
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 600, marginBottom: 28, lineHeight: 1.7 }}>
            <strong style={{ color: 'white' }}>1 year in India</strong> + <strong style={{ color: 'white' }}>1 year abroad</strong> = An internationally recognised MBA or MSc degree. Available in USA, UK, Germany, Belgium and France.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20know%20about%20the%201%2B1%20MBA%20or%20MS%20pathway%20fee%20breakdown" target="_blank" rel="noopener" className="btn-gold">
              Request 1+1 Fee Breakdown <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section style={{ background: 'var(--cream)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,3vw,36px)', color: 'var(--navy)', marginBottom: 10 }}>
              How the 1+1 Pathway Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto 40px' }}>
            {[
              { step: '01', title: 'Year 1 — India', desc: 'Complete your first year of MBA/MS at a partner institute in India. Fully recognised academic year.' },
              { step: '02', title: 'Year 2 — Abroad', desc: 'Transfer to your chosen university in USA, UK, Germany, Belgium or France to complete Year 2.' },
              { step: '03', title: 'International Degree', desc: 'Graduate with an internationally recognised MBA or MSc from the foreign university.' },
              { step: '04', title: 'Work Abroad or Return', desc: 'Eligible for post-study work visa (OPT in USA). Use the global network to launch your career.' },
            ].map(s => (
              <div key={s.step} style={{ background: 'white', borderRadius: 14, padding: 24, border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)', fontSize: 36, fontWeight: 700, marginBottom: 12 }}>{s.step}</div>
                <h3 style={{ color: 'var(--navy)', fontSize: 16, marginBottom: 8, fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 14, padding: 28, border: '1px solid var(--border)', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <Award size={28} style={{ color: 'var(--gold)', marginBottom: 12 }} />
            <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 20, marginBottom: 10 }}>
              Official MOU Partnerships
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>
              All partner universities hold official Memoranda of Understanding (MOUs) with PIBM. These partnerships are formally recognised and your credits are guaranteed to transfer.
            </p>
            {['Guaranteed credit transfer', 'Officially recognised programmes', 'Visa support & guidance', 'Alumni network in 40+ countries'].map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginTop: 10 }}>
                <CheckCircle size={15} style={{ color: 'var(--gold)' }} />
                <span style={{ fontSize: 14, color: 'var(--text-dark)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section style={{ background: 'white', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,3vw,36px)', color: 'var(--navy)', marginBottom: 10 }}>
              Our 12 Global Partner Universities
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>USA · UK · Germany · Belgium · France</p>
          </div>

          {partners.map(region => (
            <div key={region.country} style={{ marginBottom: 36 }}>
              <h3 style={{ fontSize: 18, color: 'var(--navy)', fontFamily: 'Playfair Display, serif', marginBottom: 16 }}>{region.country}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                {region.unis.map((uni, i) => (
                  <Link key={uni} href={`/universities/${region.slugs[i]}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'var(--cream)', borderRadius: 10, padding: '16px 20px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Globe size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>{uni}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--navy)', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 'clamp(22px,3vw,34px)', marginBottom: 14 }}>
            Ready to Go Global?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
            Request a complete fee breakdown for the 1+1 pathway of your choice. Our counsellors will walk you through costs, eligibility, visa, and timelines.
          </p>
          <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20the%20complete%201%2B1%20MBA%20MS%20fee%20breakdown%20and%20pathway%20details" target="_blank" rel="noopener" className="btn-gold" style={{ fontSize: 16 }}>
            Request Full Fee Breakdown <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
