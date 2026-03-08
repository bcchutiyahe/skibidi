import { redirect } from 'next/navigation'

const redirectMap: Record<string, string> = {
  'sage-mba': 'https://sageuniversity.in/mba',
  'svvv-mba': 'https://svvv.edu.in/mba',
  'renaissance-mba': 'https://rui.edu.in/mba',
  'jaipuria-pgdm': 'https://indore.jaipuria.ac.in/pgdm',
  'lnct-btech': 'https://lnctuniversity.com/b-tech',
  'medicaps-mba': 'https://medicaps.ac.in/mba',
  'iim-pgp': 'https://www.iimidr.ac.in/pgp',
  'iim-ipm': 'https://www.iimidr.ac.in/ipm',
  'aru-uk': 'https://www.aru.ac.uk/study/international-students',
  'napier-mba': 'https://www.napier.ac.uk/courses/mba-business-leadership-postgraduate-fulltime',
  'hull-msc': 'https://www.hull.ac.uk/study/postgraduate/taught/msc-ai-and-data-science',
  'aston-apply': 'https://www.aston.ac.uk/study/apply',
}

export default async function GoRedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dest = redirectMap[slug]
  if (dest) redirect(dest)
  redirect('/universities')
}
