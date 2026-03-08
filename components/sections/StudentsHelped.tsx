'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 47, suffix: '', label: 'Students helped this week', sub: 'Updated regularly', highlight: true },
  { number: 10000, suffix: '+', label: 'Total students guided', sub: 'Since 2012', highlight: false },
  { number: 200, suffix: '+', label: 'Partner colleges', sub: 'India & abroad', highlight: false },
  { number: 100, suffix: '%', label: 'Free service', sub: 'No hidden charges', highlight: false },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  const display = target >= 1000 ? `${Math.round(count / 1000)}k` : count.toString()

  return <div ref={ref}>{display}{suffix}</div>
}

export default function StudentsHelped() {
  return (
    <section style={{ background: 'white', padding: '56px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                padding: '24px 20px',
                background: stat.highlight ? 'var(--navy)' : 'var(--cream)',
                border: stat.highlight ? 'none' : '1px solid var(--border)',
                boxShadow: stat.highlight ? '0 4px 20px rgba(26,63,98,0.18)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
                color: stat.highlight ? 'var(--gold)' : 'var(--navy)',
                marginBottom: 6,
                lineHeight: 1,
              }}>
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                color: stat.highlight ? 'white' : 'var(--navy)',
                margin: '0 0 4px',
              }}>
                {stat.label}
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 12,
                color: stat.highlight ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)',
                margin: 0,
              }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
