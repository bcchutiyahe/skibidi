import { MetadataRoute } from 'next'
import { allUniversities } from '@/lib/universities'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://educationalmitra.in'

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/universities`, priority: 0.9 },
    { url: `${base}/study-abroad`, priority: 0.9 },
    { url: `${base}/study-abroad/uk`, priority: 0.85 },
    { url: `${base}/study-abroad/global-mba-ms`, priority: 0.8 },
    { url: `${base}/mba-admission-indore`, priority: 0.9 },
    { url: `${base}/education-consultant-indore`, priority: 0.85 },
    { url: `${base}/free-admission-counselling-indore`, priority: 0.85 },
  ]

  const universityPages = allUniversities.map(u => ({
    url: `${base}/universities/${u.slug}`,
    priority: u.section === 'local' ? 0.8 : 0.7,
    lastModified: new Date(),
  }))

  return [...staticPages, ...universityPages]
}
