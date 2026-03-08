import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'

export const metadata: Metadata = {
  title: 'MBA Admission Indore 2026 — Top MBA Colleges | Live Admission Status',
  description: 'MBA admissions in Indore 2026. Check live admission status, last dates, and top MBA colleges in Indore. Free counselling by Educational Mitra. Call +91 7909500055.',
  alternates: { canonical: 'https://educationalmitra.in/mba-admission-indore' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which are the top MBA colleges in Indore?', acceptedAnswer: { '@type': 'Answer', text: 'Top MBA colleges in Indore include Sage University, SVVV, IIM Indore (IPM/PGP), Jaipuria Institute, Renaissance University, Avantika University, LNCT University, IPS Academy, and Medicaps University.' } },
    { '@type': 'Question', name: 'What is the MBA admission process in Indore colleges?', acceptedAnswer: { '@type': 'Answer', text: 'Most private universities in Indore accept MAT, CAT, CMAT, or their own entrance tests for MBA admission. Eligibility is graduation with minimum 50% marks.' } },
    { '@type': 'Question', name: 'Is Educational Mitra\'s MBA admission counselling free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Educational Mitra provides completely free MBA admission counselling and guidance. Contact us at +91 7909500055.' } },
  ],
}

const admissionStatus = [
  { college: 'Sage University Indore', course: 'MBA', lastDate: 'July 2026', status: 'Open', specialisations: 'Marketing, Finance, HRM, Hospital Admin, AI, Logistics' },
  { college: 'SVVV Indore', course: 'MBA', lastDate: 'June 2026', status: 'Open', specialisations: 'Executive MBA, IBM Collaboration, Healthcare Mgmt' },
  { college: 'Renaissance University', course: 'MBA / MBA+PGB', lastDate: 'June 2026', status: 'Open', specialisations: 'Hospital Admin, Business Analytics (Harvard Cert)' },
  { college: 'Jaipuria Institute', course: 'PGDM / MBA', lastDate: 'May 2026', status: 'Open', specialisations: 'Marketing, Finance, HR, Operations, IB' },
  { college: 'Avantika University', course: 'MBA', lastDate: 'July 2026', status: 'Open', specialisations: 'Business Analytics, BFSI, Digital Marketing, Hospitality' },
  { college: 'IPS Academy', course: 'MBA', lastDate: 'July 2026', status: 'Open', specialisations: 'General MBA' },
  { college: 'LNCT University', course: 'MBA', lastDate: 'July 2026', status: 'Open', specialisations: 'General MBA' },
  { college: 'Medicaps University', course: 'MBA', lastDate: 'July 2026', status: 'Open', specialisations: 'General MBA' },
  { college: 'Prestige University', course: 'MBA', lastDate: 'June 2026', status: 'Open', specialisations: 'General MBA' },
  { college: 'IIM Indore', course: 'PGP / IPM', lastDate: 'Closed', status: 'Waitlist', specialisations: 'PGP MBA, 5-Year IPM' },
  { college: 'CDIM Indore', course: 'MBA', lastDate: 'Aug 2026', status: 'Open', specialisations: 'Marketing, Finance, HRM, Foreign Trade' },
  { college: 'Amity Business School Indore', course: 'MBA', lastDate: 'June 2026', status: 'Open', specialisations: 'General MBA' },
]

const mbaColleges = [
  { name: 'IIM Indore', rank: '#1', desc: 'India\'s premier B-School. CAT cutoff 95+ percentile. 5-year IPM (IPMAT exam) also available.', slug: 'iim-indore' },
  { name: 'Jaipuria Institute of Management', rank: '#2 Local', desc: 'NAAC A grade, part of pan-India Jaipuria group. PGDM with industry-leading placements.', slug: 'jaipuria-indore' },
  { name: 'Sage University Indore', rank: 'Top Choice', desc: 'Most specialisations available including AI, Logistics, Hospital Admin, Real Estate.', slug: 'sage-university-indore' },
  { name: 'Renaissance University', rank: 'Innovative', desc: 'Unique MBA+PGB with Harvard Certificate in Business Analytics. PGDBM 360 also available.', slug: 'renaissance-university-indore' },
  { name: 'SVVV', rank: 'Established', desc: 'IBM collaboration programme, Healthcare & Hospital Management specialisation.', slug: 'svvv-indore' },
  { name: 'Avantika University, Ujjain', rank: 'Emerging', desc: 'Unique MBA super-specialisations: BFSI, Digital Marketing, BA&AI, Hospitality.', slug: 'avantika-university-ujjain' },
]

export default function MBAAdmissionIndorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhatsAppFAB message="Hi%2C%20I%20want%20to%20know%20about%20MBA%20admissions%20in%20Indore" />

      <div className="page-hero">
        <div className="container">
          <span style={{ background: 'rgba(239,68,68,0.15)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.3)', padding: '3px 14px', borderRadius: 20, fontSize: 13, display: 'inline-block', marginBottom: 16 }}>
            🔴 Live — 2026 Admissions Open
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,4vw,46px)', color: 'white', marginBottom: 12 }}>
            MBA Admission Indore 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 560, marginBottom: 24 }}>
            Top MBA colleges in Indore with live admission status, last dates, and specialisations. Get free counselling from Educational Mitra.
          </p>
          <a href="https://wa.me/917909500055?text=Hi%2C%20I%20want%20to%20know%20about%20MBA%20admissions%20in%20Indore" target="_blank" rel="noopener" className="btn-gold">
            Get Free MBA Guidance <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Live Status Table */}
      <section style={{ background: 'var(--cream)', padding: '56px 0' }}>
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 28, marginBottom: 8 }}>
              Live MBA Admission Status 2026
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Updated regularly by Educational Mitra counsellors. Last updated: March 2026</p>
          </div>
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid var(--border)', overflowX: 'auto' }}>
            <table className="em-table">
              <thead>
                <tr>
                  <th>College</th>
                  <th>Course</th>
                  <th>Specialisations</th>
                  <th>Last Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {admissionStatus.map(row => (
                  <tr key={row.college}>
                    <td style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 13 }}>{row.college}</td>
                    <td style={{ fontSize: 13 }}>{row.course}</td>
                    <td style={{ fontSize: 12, color: 'var(--text-muted)', maxWidth: 260 }}>{row.specialisations}</td>
                    <td style={{ fontSize: 13 }}>{row.lastDate}</td>
                    <td>
                      <span style={{ background: row.status === 'Open' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', color: row.status === 'Open' ? '#15803d' : '#dc2626', fontSize: 12, padding: '3px 10px', borderRadius: 20, fontWeight: 600 }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Colleges */}
      <section style={{ background: 'white', padding: '56px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 28, marginBottom: 28 }}>
            Top MBA Colleges in Indore
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {mbaColleges.map(c => (
              <Link key={c.slug} href={`/universities/${c.slug}`} style={{ textDecoration: 'none' }}>
                <div className="uni-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 15 }}>{c.name}</h3>
                    <span className="badge-gold" style={{ fontSize: 11, flexShrink: 0 }}>{c.rank}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{c.desc}</p>
                  <span style={{ color: 'var(--navy)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    View Details <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 28, marginBottom: 28 }}>
            MBA Admissions in Indore — FAQ
          </h2>
          {faqSchema.mainEntity.map(q => (
            <div key={q.name} style={{ background: 'white', borderRadius: 12, padding: 24, border: '1px solid var(--border)', marginBottom: 12 }}>
              <h3 style={{ color: 'var(--navy)', fontSize: 16, marginBottom: 8 }}>{q.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 28, marginBottom: 12 }}>
            Get Free MBA Admission Counselling
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, fontSize: 15 }}>
            Talk to Educational Mitra's counsellors. We'll help you pick the right MBA college based on your score, budget, and career goals.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/917909500055?text=Hi%2C%20I%20want%20to%20know%20about%20MBA%20admissions%20in%20Indore" target="_blank" rel="noopener" className="btn-gold">
              WhatsApp for MBA Guidance <ArrowRight size={16} />
            </a>
            <a href="tel:+917909500055" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              Call +91 7909500055
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
