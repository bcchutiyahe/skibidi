import type { Metadata } from 'next'
import UKClient from './UKClient'

export const metadata: Metadata = {
  title: 'UK Universities 2026 — Study in the UK from Indore | 116 Partner Universities',
  description: 'All 116 UK partner universities with 2026 intake dates. Foundation, UG, PG, Pre-Masters and Research programmes. Contact Educational Mitra, Indore for free UK university application guidance.',
  alternates: { canonical: 'https://educationalmitra.in/study-abroad/uk' },
}

export default function UKPage() {
  return <UKClient />
}
