'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { internationalUniversities } from '@/lib/universities/international'

const ukUniversities = internationalUniversities.filter(u => u.country === 'UK')

const programFilters = ['All', 'Foundation', 'UG', 'PG', 'Pre-Masters', 'Research']

export default function UKClient() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('All Intakes')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return ukUniversities.filter(u => {
      if (filter !== 'All' && !u.programTypes?.includes(filter)) return false
      if (search !== 'All Intakes' && search !== '—') {
        if (!u.intake || u.intake === '—') return false
      }
      if (search === 'Has Intake 2026' && (!u.intake || u.intake === '—')) return false
      if (query && !u.name.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [filter, search, query])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/study-abroad" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none' }}>Study Abroad</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: 'var(--gold)', fontSize: 13 }}>UK Universities</span>
          </div>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🇬🇧</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,4vw,44px)', color: 'white', marginBottom: 12 }}>
            UK Universities — 2026 Intake
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, maxWidth: 540, marginBottom: 24 }}>
            {ukUniversities.length} UK partner universities across Foundation, UG, PG, Pre-Masters and Research pathways. March–June 2026 intakes now open.
          </p>
          <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20want%20to%20apply%20to%20a%20UK%20university%20for%202026%20intake" target="_blank" rel="noopener" className="btn-gold">
            Apply for UK 2026 <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border)', position: 'sticky', top: 64, zIndex: 40, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ padding: '14px 24px' }}>
          <div style={{ position: 'relative', maxWidth: 380, marginBottom: 12 }}>
            <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input className="input-field" style={{ paddingLeft: 36, fontSize: 14 }} placeholder="Search UK universities..." value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
            {programFilters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`tab-btn${filter === f ? ' active' : ''}`}
                style={{ fontSize: 12, padding: '6px 14px' }}>{f}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['All Intakes', 'Has Intake 2026'].map(f => (
              <button key={f} onClick={() => setSearch(f)}
                style={{ padding: '4px 14px', borderRadius: 20, fontSize: 12, cursor: 'pointer', border: '1.5px solid', borderColor: search === f ? 'var(--gold)' : 'var(--border)', background: search === f ? 'rgba(201,168,76,0.1)' : 'transparent', color: search === f ? 'var(--gold-dark)' : 'var(--text-muted)', fontWeight: search === f ? 600 : 400 }}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table + Grid */}
      <div style={{ background: 'var(--cream)', padding: '32px 0 64px' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20 }}>Showing <strong>{filtered.length}</strong> UK universities</p>

          {/* Comparison table for desktop */}
          <div style={{ background: 'white', borderRadius: 14, border: '1px solid var(--border)', overflowX: 'auto', marginBottom: 32 }}>
            <table className="em-table">
              <thead>
                <tr>
                  <th>University</th>
                  <th>Program Types</th>
                  <th>Intake 2026</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(u => (
                  <tr key={u.slug}>
                    <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{u.name}</td>
                    <td style={{ fontSize: 13, color: 'var(--text-muted)' }}>{u.programTypes}</td>
                    <td>
                      {u.intake && u.intake !== '—'
                        ? <span style={{ background: 'rgba(239,68,68,0.1)', color: '#dc2626', fontSize: 12, padding: '2px 10px', borderRadius: 20, fontWeight: 600 }}>{u.intake}</span>
                        : <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>Contact us</span>
                      }
                    </td>
                    <td>
                      <Link href={`/universities/${u.slug}`} style={{ color: 'var(--navy)', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                        Details <ArrowRight size={13} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div style={{ background: 'var(--navy)', borderRadius: 14, padding: 32, textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: 22, marginBottom: 10 }}>
              Need help choosing a UK university?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>Our counsellors know exactly which programmes are open and best for your profile.</p>
            <a href="https://wa.me/917909500055?text=Hi%20Educational%20Mitra%2C%20I%20need%20help%20choosing%20a%20UK%20university%20for%202026" target="_blank" rel="noopener" className="btn-gold">
              WhatsApp for UK Guidance <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
