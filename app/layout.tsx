import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'New Atlantic Global - Complete Garment Sourcing & Manufacturing Solutions',
    template: '%s | New Atlantic Global'
  },
  description: 'Leading garment sourcing company established in 2014. Complete solutions for casual wear, active wear, outerwear, and workwear. Quality guaranteed, social compliance, competitive pricing. Based in Concord, MA.',
  keywords: [
    'garment sourcing',
    'apparel manufacturing',
    'clothing supply chain',
    'private label manufacturing',
    'fashion sourcing',
    'casual wear manufacturing',
    'active wear sourcing',
    'outerwear manufacturing',
    'workwear sourcing',
    'textile manufacturing',
    'clothing production',
    'garment factory',
    'apparel sourcing services',
    'fashion manufacturing',
    'clothing supplier',
    'garment manufacturer',
    'textile sourcing',
    'apparel production',
    'fashion supply chain',
    'clothing manufacturer'
  ],
  authors: [{ name: 'New Atlantic Global' }],
  creator: 'New Atlantic Global',
  publisher: 'New Atlantic Global',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://newatlantic.biz',
    siteName: 'New Atlantic Global',
    title: 'New Atlantic Global - Complete Garment Sourcing Solutions',
    description: 'Leading garment sourcing company with 10+ years experience. Complete solutions for casual wear, active wear, outerwear, and workwear with quality guarantee.',
    images: [
      {
        url: '/images/misc/our_collection-1000x1000.jpg',
        width: 1000,
        height: 1000,
        alt: 'New Atlantic Global Product Collection',
      },
      {
        url: '/images/misc/Portfolio-01.jpg',
        width: 800,
        height: 600,
        alt: 'New Atlantic Global Manufacturing Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Atlantic Global - Complete Garment Sourcing Solutions',
    description: 'Leading garment sourcing company with 10+ years experience. Quality guaranteed, social compliance, competitive pricing.',
    images: ['/images/misc/our_collection-1000x1000.jpg'],
    creator: '@newatlantic',
  },
  alternates: {
    canonical: 'https://newatlantic.biz',
  },
  category: 'Manufacturing',
  classification: 'Business',
  other: {
    'geo.region': 'US-MA',
    'geo.placename': 'Concord',
    'geo.position': '42.4604;-71.3489',
    'ICBM': '42.4604, -71.3489',
    'business:contact_data:street_address': '195 Mattison Drive',
    'business:contact_data:locality': 'Concord',
    'business:contact_data:region': 'MA',
    'business:contact_data:postal_code': '01742',
    'business:contact_data:country_name': 'USA',
    'business:contact_data:email': 'zia@newatlantic.biz',
    'business:contact_data:phone_number': '+1-978-505-6547',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'New Atlantic Global',
    description: 'Complete garment sourcing and manufacturing solutions for casual wear, active wear, outerwear, and workwear.',
    url: 'https://newatlantic.biz',
    logo: 'https://newatlantic.biz/images/misc/NewAtlantic-1.png',
    image: 'https://newatlantic.biz/images/misc/our_collection-1000x1000.jpg',
    email: 'zia@newatlantic.biz',
    telephone: '+1-978-505-6547',
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '195 Mattison Drive',
      addressLocality: 'Concord',
      addressRegion: 'MA',
      postalCode: '01742',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-978-505-6547',
      contactType: 'sales',
      email: 'zia@newatlantic.biz',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://newatlantic.biz'
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    serviceType: [
      'Garment Sourcing',
      'Apparel Manufacturing',
      'Supply Chain Management',
      'Quality Control',
      'Social Compliance'
    ],
    knowsAbout: [
      'Casual Wear Manufacturing',
      'Active Wear Sourcing',
      'Outerwear Production',
      'Workwear Manufacturing',
      'Textile Sourcing',
      'Quality Control',
      'Social Compliance'
    ]
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/misc/NewAtlantic-1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
