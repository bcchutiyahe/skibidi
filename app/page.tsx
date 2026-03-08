import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StudentsHelped from '@/components/sections/StudentsHelped'
import EligibilityWidget from '@/components/sections/EligibilityWidget'
import UniversityPreview from '@/components/sections/UniversityPreview'
import UniversityComparison from '@/components/sections/UniversityComparison'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Educational Mitra — Free Admission Counselling Indore | MBA BBA BTech MBBS Law Study Abroad',
  description:
    "Educational Mitra is Indore's #1 education consultancy since 2012. Free counselling for MBA, BBA, B.Tech, MBBS, Law & Study Abroad admissions. 200+ partner colleges. Call +91 7909500055.",
  alternates: { canonical: 'https://educationalmitra.in' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Educational Mitra's counselling really free?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Educational Mitra provides completely free admission counselling and guidance to students for college admissions in Indore, across India, and internationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which colleges does Educational Mitra cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Educational Mitra covers 200+ partner colleges including local Indore colleges, national universities like LPU and Amity, and 130+ international universities in UK, USA, Ireland and Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact Educational Mitra for admission guidance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Educational Mitra at +91 7909500055 or WhatsApp on the same number. Our office is at 402, Silver Sanchora Castle, RNT Marg, South Tukoganj, Indore.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Educational Mitra help with Study Abroad admissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Educational Mitra specialises in UK, Ireland, USA, and European university admissions. We are PIBM global partners with access to 1+1 pathway programmes.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <StudentsHelped />
      <EligibilityWidget />
      <UniversityPreview />
      <UniversityComparison />
      <WhyUs />
      <Testimonials />
      <ContactSection />
    </>
  )
}
