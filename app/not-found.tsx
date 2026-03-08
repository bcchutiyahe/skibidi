import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)', fontSize: 80, fontWeight: 700, lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', fontSize: 28, marginBottom: 12, marginTop: 8 }}>Page Not Found</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 28 }}>The page you're looking for doesn't exist. Browse our universities or contact us.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Go Home <ArrowRight size={15} /></Link>
          <Link href="/universities" className="btn-outline">Browse Universities</Link>
        </div>
      </div>
    </div>
  )
}
