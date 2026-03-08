'use client'
import { Shield, Users, Globe, Clock, Star, HeartHandshake } from 'lucide-react'

const reasons = [
  { icon: Shield, title: '100% Free Counselling', desc: 'No hidden charges. Our guidance is completely free for students and parents.' },
  { icon: Users, title: '10,000+ Students Guided', desc: 'Over a decade of trust. Thousands of students placed in their dream colleges.' },
  { icon: Globe, title: 'Local to Global', desc: 'From Indore colleges to UK universities — we cover every pathway.' },
  { icon: Clock, title: 'Since 2012', desc: '13+ years of experience means we know which colleges deliver results.' },
  { icon: Star, title: 'PIBM Global Partners', desc: 'Official partners for 1+1 MBA/MS pathways to USA, UK, Germany & France.' },
  { icon: HeartHandshake, title: 'Personal Guidance', desc: 'Every student gets dedicated counsellor attention — not automated replies.' },
]

export default function WhyUs() {
  return (
    <section id="about" style={{ background: 'var(--navy)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)', padding: '2px 12px', borderRadius: 20, fontSize: 13, fontWeight: 500, display: 'inline-block', marginBottom: 14 }}>
            Why Choose Us
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 40px)', color: 'white', marginBottom: 12 }}>
            Why 10,000+ Students Trust Educational Mitra
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 520, margin: '0 auto' }}>
            We've been doing this for 13 years. Here's what sets us apart.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 28, transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={22} style={{ color: 'var(--gold)' }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 18, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20know%20more%20about%20your%20counselling%20services"
            target="_blank"
            rel="noopener"
            className="btn-gold"
          >
            Speak to a Counsellor
          </a>
        </div>
      </div>
    </section>
  )
}
