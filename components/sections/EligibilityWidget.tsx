'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react'

const steps = [
  {
    id: 'stream',
    label: 'Your Stream',
    options: ['Science (PCB)', 'Science (PCM)', 'Commerce', 'Arts / Humanities', 'Already Graduated'],
  },
  {
    id: 'course',
    label: 'Interested In',
    options: ['MBA / PGDM', 'BBA', 'B.Tech', 'BCA / B.Sc', 'MBBS / Medical', 'LLB / Law', 'B.Des / Design', 'Study Abroad', 'Hotel Management'],
  },
  {
    id: 'location',
    label: 'Preference',
    options: ['Indore / MP Colleges', 'Top National University', 'Study Abroad — UK/Europe', 'Study Abroad — USA', 'No Preference'],
  },
]

// Map answers to recommended universities
const recommendations: Record<string, Record<string, { name: string; location: string; courses: string[] }[]>> = {
  'MBA / PGDM': {
    'Indore / MP Colleges': [
      { name: 'Sage University Indore', location: 'Indore, MP', courses: ['MBA', 'PGDM'] },
      { name: 'SVVV (Shri Vaishnav)', location: 'Indore, MP', courses: ['MBA'] },
      { name: 'Renaissance University', location: 'Indore, MP', courses: ['MBA + Harvard Cert.'] },
    ],
    'Top National University': [
      { name: 'Symbiosis International (SIU)', location: 'Pune', courses: ['MBA', 'PGDM'] },
      { name: 'NMIMS University', location: 'Mumbai', courses: ['MBA'] },
      { name: 'LPU', location: 'Punjab', courses: ['MBA'] },
    ],
    'Study Abroad — UK/Europe': [
      { name: 'Aston University', location: 'Birmingham, UK', courses: ['MSc Business'] },
      { name: 'Oxford Brookes', location: 'Oxford, UK', courses: ['MBA', 'MSc'] },
      { name: 'Edinburgh Napier', location: 'Edinburgh, UK', courses: ['MBA'] },
    ],
    'Study Abroad — USA': [
      { name: 'Clark University', location: 'Massachusetts, USA', courses: ['MBA', 'MS'] },
      { name: 'Lawrence Tech University', location: 'Michigan, USA', courses: ['MBA'] },
      { name: 'Alliant International University', location: 'California, USA', courses: ['MBA'] },
    ],
    'No Preference': [
      { name: 'Sage University Indore', location: 'Indore, MP', courses: ['MBA'] },
      { name: 'Symbiosis International', location: 'Pune', courses: ['MBA', 'PGDM'] },
      { name: 'Oxford Brookes', location: 'Oxford, UK', courses: ['MBA'] },
    ],
  },
  'BBA': {
    'Indore / MP Colleges': [
      { name: 'Sage University Indore', location: 'Indore, MP', courses: ['BBA'] },
      { name: 'IPS Academy', location: 'Indore, MP', courses: ['BBA'] },
      { name: 'Avantika University', location: 'Ujjain, MP', courses: ['BBA'] },
    ],
    'Top National University': [
      { name: 'Chandigarh University', location: 'Punjab', courses: ['BBA'] },
      { name: 'LPU', location: 'Punjab', courses: ['BBA'] },
      { name: 'Amity University', location: 'Noida', courses: ['BBA'] },
    ],
    'No Preference': [
      { name: 'Sage University Indore', location: 'Indore, MP', courses: ['BBA'] },
      { name: 'LPU', location: 'Punjab', courses: ['BBA'] },
      { name: 'Chandigarh University', location: 'Punjab', courses: ['BBA'] },
    ],
  },
  'B.Tech': {
    'Indore / MP Colleges': [
      { name: 'SVVV (Shri Vaishnav)', location: 'Indore, MP', courses: ['B.Tech'] },
      { name: 'Medicaps University', location: 'Indore, MP', courses: ['B.Tech'] },
      { name: 'LNCT University', location: 'Indore, MP', courses: ['B.Tech'] },
    ],
    'Top National University': [
      { name: 'VIT University', location: 'Vellore', courses: ['B.Tech'] },
      { name: 'SRM University', location: 'Chennai', courses: ['B.Tech'] },
      { name: 'LPU', location: 'Punjab', courses: ['B.Tech'] },
    ],
    'No Preference': [
      { name: 'SVVV (Shri Vaishnav)', location: 'Indore, MP', courses: ['B.Tech'] },
      { name: 'VIT University', location: 'Vellore', courses: ['B.Tech'] },
      { name: 'LPU', location: 'Punjab', courses: ['B.Tech'] },
    ],
  },
}

const defaultRecs = [
  { name: 'Sage University Indore', location: 'Indore, MP', courses: ['MBA', 'BBA', 'B.Tech'] },
  { name: 'SVVV (Shri Vaishnav)', location: 'Indore, MP', courses: ['MBA', 'B.Tech'] },
  { name: 'LPU', location: 'Punjab', courses: ['MBA', 'BBA', 'B.Tech'] },
]

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSeTRbMHte_1KK-AOmDKjzn-9PTBRDfZsKz_zov6ZM3ceLAFdQ/formResponse'

export default function EligibilityWidget() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)
    if (step < steps.length - 1) setStep(step + 1)
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('entry.1742867222', name)
      formData.append('entry.38060946', phone)
      formData.append('entry.276384077', 'Indore')
      formData.append('entry.210292186', answers[1] || '')
      formData.append('entry.440468208', answers[0] || '')
      await fetch(FORM_ACTION, { method: 'POST', body: formData, mode: 'no-cors' })
    } catch {}

    const waText = encodeURIComponent(
      `Hi Educational Mitra! I need admission guidance.\nName: ${name}\nPhone: ${phone}\nStream: ${answers[0]}\nCourse Interest: ${answers[1]}\nPreference: ${answers[2]}`
    )
    setSubmitted(true)
    setTimeout(() => {
      window.open(`https://wa.me/917909500055?text=${waText}`, '_blank')
    }, 800)
  }

  const done = answers.length === steps.length

  // Get recommendations based on answers
  const getRecs = () => {
    const course = answers[1]
    const location = answers[2]
    if (course && location && recommendations[course]?.[location]) {
      return recommendations[course][location]
    }
    if (course && recommendations[course]?.['No Preference']) {
      return recommendations[course]['No Preference']
    }
    return defaultRecs
  }

  return (
    <section style={{ background: 'var(--cream)', padding: '88px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="badge-gold" style={{ marginBottom: 12, display: 'inline-block' }}>Quick Eligibility Check</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 38px)', color: 'var(--navy)', marginBottom: 12 }}>
              Which College is Right for You?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, fontFamily: 'DM Sans, sans-serif' }}>
              Answer 3 quick questions and get personalised guidance from our counsellors.
            </p>
          </div>

          {/* Progress bar */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: 1 }}>
                <div style={{ height: 4, borderRadius: 2, background: i <= step ? 'var(--navy)' : 'var(--border)', transition: 'background 0.3s' }} />
                <p style={{ fontSize: 11, color: i <= step ? 'var(--navy)' : 'var(--text-muted)', marginTop: 6, fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>
                  {i + 1}. {s.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(26,63,98,0.07)' }}>

            {/* Thank you screen */}
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={40} style={{ color: '#22c55e' }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 26, marginBottom: 10 }}>
                  Thank you, {name}!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 400, margin: '0 auto 24px' }}>
                  We&apos;re opening WhatsApp to connect you with a counsellor right now. They&apos;ll guide you to the right college.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 10, padding: '10px 20px', color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
                  <CheckCircle size={16} />
                  Your details have been received
                </div>
              </div>

            ) : !done ? (
              /* Step questions */
              <>
                <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 20, marginBottom: 20 }}>
                  {steps[step].label}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
                  {steps[step].options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      style={{
                        padding: '13px 16px',
                        borderRadius: 10,
                        border: '1.5px solid var(--border)',
                        background: 'var(--cream)',
                        color: 'var(--navy)',
                        fontWeight: 500,
                        fontSize: 14,
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'DM Sans, sans-serif',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.background = 'rgba(26,63,98,0.04)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--cream)' }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>

            ) : (
              /* After all 3 steps — show recommendations + form */
              <>
                {/* Recommendation summary */}
                <div style={{ marginBottom: 28, padding: 20, background: 'rgba(26,63,98,0.04)', borderRadius: 14, border: '1px solid rgba(26,63,98,0.1)' }}>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 17, marginBottom: 6 }}>
                    Based on your answers — here are our top picks:
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
                    Stream: <strong style={{ color: 'var(--navy)' }}>{answers[0]}</strong> &nbsp;·&nbsp;
                    Interest: <strong style={{ color: 'var(--navy)' }}>{answers[1]}</strong> &nbsp;·&nbsp;
                    Preference: <strong style={{ color: 'var(--navy)' }}>{answers[2]}</strong>
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
                    {getRecs().map(uni => (
                      <div
                        key={uni.name}
                        style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                          <MapPin size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>{uni.location}</span>
                        </div>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 14, color: 'var(--navy)', fontWeight: 600, margin: '0 0 8px', lineHeight: 1.3 }}>{uni.name}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {uni.courses.map(c => (
                            <span key={c} style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-dark)', fontSize: 11, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 20, marginBottom: 6 }}>
                  Get personalised guidance — it&apos;s free
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20, fontFamily: 'DM Sans, sans-serif' }}>
                  Our counsellor will call you within 24 hours.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                  <input className="input-field" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
                  <input className="input-field" placeholder="WhatsApp / mobile number" value={phone} onChange={e => setPhone(e.target.value)} type="tel" />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!name || !phone}
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center', opacity: (!name || !phone) ? 0.5 : 1, cursor: (!name || !phone) ? 'not-allowed' : 'pointer' }}
                >
                  Get Free Counselling <ArrowRight size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
