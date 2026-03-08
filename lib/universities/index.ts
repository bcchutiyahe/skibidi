export { localUniversities } from './local'
export { nationalUniversities } from './national'
export { internationalUniversities } from './international'
export type { University, Course } from './types'

import { localUniversities } from './local'
import { nationalUniversities } from './national'
import { internationalUniversities } from './international'

export const allUniversities = [
  ...localUniversities,
  ...nationalUniversities,
  ...internationalUniversities,
]

export function getUniversityBySlug(slug: string) {
  return allUniversities.find(u => u.slug === slug) ?? null
}

export function getSimilarUniversities(university: { slug: string; section: string; courses: { name: string }[] }, count = 3) {
  return allUniversities
    .filter(u =>
      u.slug !== university.slug &&
      u.section === university.section &&
      u.courses.some(c => university.courses.some(uc => uc.name === c.name))
    )
    .slice(0, count)
}
