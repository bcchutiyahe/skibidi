export interface Course {
  level: 'UG' | 'PG' | 'Diploma' | 'Research'
  name: string
  specializations: string[]
  eligibility: string
}

export interface University {
  slug: string
  name: string
  shortName?: string
  city: string
  state: string
  country: string
  section: 'local' | 'national' | 'international'
  type: string
  naac: string
  established: number
  about: string
  highlights: string[]
  facilities: string[]
  courses: Course[]
  website: string
  logo: string
  // International-specific
  intake?: string
  programTypes?: string
  region?: string // UK | Ireland | USA | Europe
}
