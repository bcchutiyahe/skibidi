'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, ArrowRight, Filter } from 'lucide-react'
import { allUniversities } from '@/lib/universities'
import type { University } from '@/lib/universities/types'
import UniLogo from '@/components/ui/UniLogo'

const sectionTabs = [
  { id: 'all', label: 'All' },
  { id: 'local', label: '🏙️ Local — Indore & MP' },
  { id: 'national', label: '🇮🇳 National' },
  { id: 'international', label: '✈️ International' },
]

const courseFilters = ['All', 'MBA', 'BBA', 'B.Tech', 'Law', 'Medical', 'Design', 'Hotel Mgmt', 'Study Abroad']

function UniCard({ uni }: { uni: University }) {
  return (
    <Link href={`/universities/${uni.slug}`} style={{ textDecoration: 'none' }}>
      <div className="uni-card" style={{ height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
          <UniLogo website={uni.website} name={uni.name} size={44} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, color: 'var(--navy)', marginBottom: 3, lineHeight: 1.3 }}>
              {uni.name}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: 12 }}>
              <MapPin size={11} />
              {uni.city}{uni.country !== 'India' ? `, ${uni.country}` : uni.state ? `, ${uni.state}` : ''}
            </div>
          </div>
          {uni.naac && uni.naac !== 'N/A' && (
            <span className="badge-gold" style={{ fontSize: 11, flexShrink: 0 }}>NAAC {uni.naac}</span>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
          {uni.courses.slice(0, 3).map(c => (
            <span key={c.name} style={{ background: 'rgba(26,63,98,0.06)', color: 'var(--navy)', fontSize: 11, padding: '2px 8px', borderRadius: 20, fontWeight: 500 }}>
              {c.name}
            </span>
          ))}
          {uni.courses.length > 3 && (
            <span style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-dark)', fontSize: 11, padding: '2px 8px', borderRadius: 20 }}>
              +{uni.courses.length - 3}
            </span>
          )}
        </div>

        {uni.intake && uni.intake !== '—' && (
          <p style={{ fontSize: 12, color: 'var(--gold-dark)', marginBottom: 10 }}>📅 Intake: {uni.intake}</p>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{uni.type}</span>
          <span style={{ color: 'var(--navy)', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            View Details <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function UniversitiesClient() {
  const [section, setSection] = useState('all')
  const [course, setCourse] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return allUniversities.filter(u => {
      if (section !== 'all' && u.section !== section) return false
      if (course !== 'All') {
        const cMap: Record<string, string[]> = {
          'MBA': ['MBA', 'PGDM', 'MBA+PGB'], 'BBA': ['BBA'], 'B.Tech': ['B.Tech'],
          'Law': ['LLB', 'BA LLB', 'BBA LLB', 'LLM'], 'Medical': ['MBBS', 'BDS', 'BSc Nursing', 'MBBS'],
          'Design': ['B.Des', 'BFA', 'M.Des'], 'Hotel Mgmt': ['BSc Hotel Management', 'Diploma in Hotel Management'],
          'Study Abroad': [],
        }
        if (course === 'Study Abroad') return u.section === 'international'
        const terms = cMap[course] || []
        if (!terms.some(t => u.courses.some(c => c.name.includes(t) || c.name === t))) return false
      }
      if (search) {
        const q = search.toLowerCase()
        return u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q) || u.type.toLowerCase().includes(q)
      }
      return true
    })
  }, [section, course, search])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px,4vw,44px)', color: 'white', marginBottom: 12 }}>
            All Partner Universities
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16 }}>
            {allUniversities.length}+ colleges across Indore, India & Internationally. Find yours.
          </p>
        </div>
      </div>

      <div style={{ background: 'white', borderBottom: '1px solid var(--border)', position: 'sticky', top: 64, zIndex: 40, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ padding: '16px 24px' }}>
          <div style={{ position: 'relative', maxWidth: 420, marginBottom: 14 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              className="input-field"
              style={{ paddingLeft: 40 }}
              placeholder="Search by name, city, or type..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
            {sectionTabs.map(t => (
              <button key={t.id} onClick={() => setSection(t.id)}
                className={`tab-btn${section === t.id ? ' active' : ''}`}
                style={{ fontSize: 13, padding: '7px 14px' }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <Filter size={14} style={{ color: 'var(--text-muted)' }} />
            {courseFilters.map(f => (
              <button key={f} onClick={() => setCourse(f)}
                style={{
                  padding: '5px 14px', borderRadius: 20, fontSize: 12, cursor: 'pointer', border: '1.5px solid',
                  borderColor: course === f ? 'var(--gold)' : 'var(--border)',
                  background: course === f ? 'rgba(201,168,76,0.1)' : 'transparent',
                  color: course === f ? 'var(--gold-dark)' : 'var(--text-muted)',
                  fontWeight: course === f ? 600 : 400,
                  transition: 'all 0.15s',
                }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--cream)', padding: '32px 0 64px' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>
            Showing <strong>{filtered.length}</strong> universities
          </p>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ fontSize: 40, marginBottom: 12 }}>🔍</p>
              <p style={{ fontSize: 18, color: 'var(--navy)', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>No results found</p>
              <p style={{ color: 'var(--text-muted)' }}>Try a different search or filter</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {filtered.map(uni => <UniCard key={uni.slug} uni={uni} />)}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
