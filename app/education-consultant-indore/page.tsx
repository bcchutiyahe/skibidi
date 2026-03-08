import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'Education Consultant in Indore — Free Admission Guidance | Educational Mitra',
  description: 'Looking for the best education consultant in Indore? Educational Mitra offers free admission counselling for MBA, BBA, B.Tech, MBBS, Law, and Study Abroad since 2012. Call +91 7909500055.',
  alternates: { canonical: 'https://educationalmitra.in/education-consultant-indore' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does an education consultant in Indore do?', acceptedAnswer: { '@type': 'Answer', text: 'An education consultant in Indore helps students choose the right college and course based on their academic profile, career goals, and budget. They assist with applications, documentation, and follow-up.' } },
    { '@type': 'Question', name: 'Is Educational Mitra a good education consultant in Indore?', acceptedAnswer: { '@type': 'Answer', text: 'Educational Mitra is one of Indore\'s most trusted education consultancies, established in 2012 by Ravi Shukla. With 10,000+ students guided and 200+ partner colleges, they offer free, unbiased counselling.' } },
    { '@type': 'Question', name: 'Does Educational Mitra charge for counselling?', acceptedAnswer: { '@type': 'Answer', text: 'No. Educational Mitra\'s counselling is completely free for students. There are no charges for guidance, shortlisting, or application support.' } },
  ],
}

const services = [
  { icon: '🎓', title: 'College Shortlisting', desc: 'We analyse your academic profile and shortlist the best colleges for your goals and budget.' },
  { icon: '📝', title: 'Application Support', desc: 'Guidance on filling forms, documentation, and deadlines for your chosen colleges.' },
  { icon: '✈️', title: 'Study Abroad', desc: 'UK, USA, Ireland and European university applications with visa guidance.' },
  { icon: '📊', title: 'Career Counselling', desc: 'Course selection based on career objectives — MBA, engineering, medicine, law, design.' },
  { icon: '🤝', title: 'University Liaison', desc: 'We coordinate directly with partner universities for faster processing.' },
  { icon: '💼', title: 'Scholarship Guidance', desc: 'Information on available scholarships, merit seats, and fee waiver opportunities.' },
]

export default function EducationConsultantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhatsAppFAB message="Hi%20Educational%20Mitra%2C%20I%20saw%20your%20page%20about%20admission%20consultant%20in%20Indore%20and%20have%20a%20question..." />

      <div className="page-hero">
        <div className="container">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,4vw,46px)', color: 'white', marginBottom: 14 }}>
            Education Consultant in Indore
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 560, marginBottom: 24, lineHeight: 1.7 }}>
            Educational Mitra — Indore's most trusted education consultancy since 2012. Free, unbiased, and personalised guidance for every student.
          </p>
          <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20saw%20your%20page%20about%20admission%20consultant%20in%20Indore%20and%20have%20a%20question..." target="_blank" rel="noopener" className="btn-gold">
            Ask a Question <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* About */}
      <section style={{ background: 'var(--cream)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: 14, display: 'inline-block' }}>About Educational Mitra</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 'clamp(22px,3vw,34px)', marginBottom: 16, lineHeight: 1.3 }}>
                Indore's Most Trusted Education Consultant Since 2012
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Founded by <strong>Ravi Shukla</strong>, Educational Mitra has guided over <strong>10,000 students</strong> from Indore and Madhya Pradesh to their dream colleges — locally, nationally, and globally.
              </p>
              {['100% Free Counselling', '200+ Partner Colleges', '13 Years of Experience', 'PIBM Global Study Abroad Partners', 'UK, USA, Ireland, Europe Admissions'].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                  <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'var(--text-dark)', fontSize: 14 }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[{ num: '10,000+', label: 'Students Guided' }, { num: '200+', label: 'Partner Colleges' }, { num: '13+', label: 'Years in Indore' }, { num: 'Free', label: 'Counselling Cost' }].map(s => (
                <div key={s.label} style={{ background: 'white', borderRadius: 12, padding: 20, textAlign: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)', fontSize: 28, fontWeight: 700 }}>{s.num}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: 'white', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 'clamp(22px,3vw,34px)', marginBottom: 10 }}>
              What We Help You With
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {services.map(s => (
              <div key={s.title} style={{ background: 'var(--cream)', borderRadius: 12, padding: 24, border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 28, marginBottom: 28 }}>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map(q => (
            <div key={q.name} style={{ background: 'white', borderRadius: 12, padding: 24, border: '1px solid var(--border)', marginBottom: 12 }}>
              <h3 style={{ color: 'var(--navy)', fontSize: 16, marginBottom: 8 }}>{q.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 28, marginBottom: 14 }}>Talk to Indore's Best Education Consultant</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, fontSize: 15 }}>Free, personalised, and immediate. Walk in or WhatsApp.</p>
          <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20saw%20your%20page%20about%20admission%20consultant%20in%20Indore%20and%20have%20a%20question..." target="_blank" rel="noopener" className="btn-gold" style={{ fontSize: 16 }}>
            WhatsApp Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
