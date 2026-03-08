import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'Free Admission Counselling in Indore — Educational Mitra',
  description: 'Get completely free admission counselling in Indore for MBA, BBA, B.Tech, MBBS, Law, Design & Study Abroad. Educational Mitra has guided 10,000+ students since 2012. Call +91 7909500055.',
  alternates: { canonical: 'https://educationalmitra.in/free-admission-counselling-indore' },
}

export default function FreeCounsellingPage() {
  return (
    <>
      <WhatsAppFAB message="Hi%20Educational%20Mitra%2C%20I%20want%20to%20know%20more%20about%20free%20admission%20counselling%20in%20Indore..." />

      <div className="page-hero">
        <div className="container">
          <span style={{ background: 'rgba(34,197,94,0.15)', color: '#86efac', border: '1px solid rgba(34,197,94,0.3)', padding: '3px 14px', borderRadius: 20, fontSize: 13, display: 'inline-block', marginBottom: 16 }}>
            ✅ 100% Free — No Hidden Charges
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,4vw,46px)', color: 'white', marginBottom: 14 }}>
            Free Admission Counselling in Indore
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 560, marginBottom: 24, lineHeight: 1.7 }}>
            Educational Mitra provides completely free admission guidance to students across Indore and Madhya Pradesh. Walk in, call, or WhatsApp — we're here to help.
          </p>
          <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20know%20more%20about%20free%20admission%20counselling%20in%20Indore..." target="_blank" rel="noopener" className="btn-gold">
            Book Free Counselling <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <section style={{ background: 'var(--cream)', padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 'clamp(22px,3vw,34px)', marginBottom: 10 }}>
              Counselling for Every Course & College
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Whatever you want to study, we have guidance for you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14 }}>
            {['MBA / PGDM', 'BBA', 'B.Tech / Engineering', 'BCA / BSc IT', 'MBBS / Medical', 'BDS / Dental', 'LLB / Law', 'B.Des / Design', 'BSc Nursing', 'Hotel Management', 'B.Ed / Teaching', 'Study Abroad UK', 'Study Abroad USA', 'Study Abroad Europe', 'B.Pharm', 'B.Com / CA'].map(c => (
              <div key={c} style={{ background: 'white', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)', textAlign: 'center', fontSize: 13, fontWeight: 500, color: 'var(--navy)' }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'white', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 28, marginBottom: 14 }}>
            How to Get Your Free Counselling
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, margin: '32px 0' }}>
            {[
              { num: '1', title: 'WhatsApp Us', desc: 'Message us on +91 7909500055 any time' },
              { num: '2', title: 'Call Us', desc: 'Call +91 7909500055 Mon–Sat 9am–7pm' },
              { num: '3', title: 'Visit Us', desc: '402, Silver Sanchora Castle, RNT Marg, Indore' },
            ].map(s => (
              <div key={s.num} style={{ background: 'var(--cream)', borderRadius: 12, padding: 24, border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{s.num}</div>
                <h3 style={{ color: 'var(--navy)', fontSize: 15, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20know%20more%20about%20free%20admission%20counselling%20in%20Indore..." target="_blank" rel="noopener" className="btn-gold" style={{ fontSize: 16 }}>
            WhatsApp for Free Counselling <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
