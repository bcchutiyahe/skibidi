import type { Metadata } from 'next'
import UniversitiesClient from './UniversitiesClient'

export const metadata: Metadata = {
  title: 'All Universities & Colleges — Indore, National & International',
  description: 'Browse 200+ partner universities and colleges. Filter by course type — MBA, BBA, B.Tech, MBBS, Law, Design and more. Local Indore colleges, national universities, and UK/USA study abroad options.',
  alternates: { canonical: 'https://educationalmitra.in/universities' },
}

export default function UniversitiesPage() {
  return <UniversitiesClient />
}
