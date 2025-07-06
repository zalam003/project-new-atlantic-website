import { Metadata } from 'next'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import BusinessImpact from '../components/BusinessImpact'
import Process from '../components/Process'
import EnhancedContact from '../components/EnhancedContact'

export const metadata: Metadata = {
  title: 'Complete Garment Sourcing Solutions | New Atlantic Global',
  description: 'New Atlantic Global offers comprehensive garment sourcing and manufacturing services for casual wear, active wear, outerwear, and workwear. 10+ years experience, quality guaranteed, competitive pricing.',
  alternates: {
    canonical: 'https://newatlantic.biz',
  },
  openGraph: {
    title: 'Complete Garment Sourcing Solutions | New Atlantic Global',
    description: 'Leading garment sourcing company with 10+ years experience. Complete solutions for all clothing categories with quality guarantee and competitive pricing.',
    url: 'https://newatlantic.biz',
    images: [
      {
        url: '/images/misc/our_collection-1000x1000.jpg',
        width: 1000,
        height: 1000,
        alt: 'New Atlantic Global Product Collection',
      }
    ],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BusinessImpact />
      <Process />
      <EnhancedContact />
    </>
  )
}
