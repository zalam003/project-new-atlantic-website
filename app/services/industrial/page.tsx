import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fire Resistant Clothing Manufacturer | Industrial Safety Workwear & OSHA Compliant Apparel',
  description: 'Fire resistant clothing manufacturer & industrial safety workwear supplier. FR workwear, OSHA compliant clothing, arc flash protection, safety uniforms bulk.',
  keywords: 'fire resistant clothing manufacturer, FR workwear supplier, industrial safety apparel, OSHA compliant clothing, arc flash protective clothing, flame resistant uniforms, PPE clothing manufacturer, safety workwear bulk',
}

const industrialProducts = [
  {
    category: 'Fire Resistant (FR) Clothing',
    description: 'NFPA compliant fire resistant clothing for high-risk industrial environments',
    features: ['NFPA 2112 certified', 'Arc flash protection', 'Flame resistant fabrics', 'Durable construction'],
    image: '/images/misc/CoverImage04-1.jpg',
    applications: ['Oil & Gas', 'Electrical utilities', 'Chemical plants', 'Welding operations']
  },
  {
    category: 'High-Visibility Safety Wear',
    description: 'ANSI compliant high-visibility clothing for worker safety and visibility',
    features: ['ANSI/ISEA 107 compliant', 'Reflective striping', 'Bright safety colors', 'Moisture-wicking fabrics'],
    image: '/images/misc/CoverImage01-600x600-1.jpg',
    applications: ['Construction', 'Road work', 'Airports', 'Warehouses']
  },
  {
    category: 'Industrial Work Coveralls',
    description: 'Heavy-duty coveralls for industrial and manufacturing environments',
    features: ['Reinforced stress points', 'Multiple pockets', 'Easy-care fabrics', 'Size range options'],
    image: '/images/misc/CoverImage02-600x600-1.jpg',
    applications: ['Manufacturing', 'Automotive', 'Maintenance', 'Heavy industry']
  },
  {
    category: 'Arc Flash Protective Clothing',
    description: 'Specialized clothing for electrical workers with arc flash protection ratings',
    features: ['ASTM F1506 rated', 'CAT 1-4 protection levels', 'Electrical safety certified', 'Comfortable daily wear'],
    image: '/images/misc/CoverImage03-600x600-1.jpg',
    applications: ['Electrical utilities', 'Power generation', 'Electrical maintenance', 'Industrial electrical']
  }
]

const safetyStandards = [
  {
    standard: 'OSHA Compliance',
    description: 'All industrial workwear meets OSHA safety requirements and standards',
    icon: '🛡️'
  },
  {
    standard: 'NFPA Certified',
    description: 'Fire resistant clothing certified to NFPA 2112 standards',
    icon: '🔥'
  },
  {
    standard: 'ANSI/ISEA 107',
    description: 'High-visibility clothing meeting ANSI visibility standards',
    icon: '👁️'
  },
  {
    standard: 'ASTM F1506',
    description: 'Arc flash protective clothing meeting electrical safety standards',
    icon: '⚡'
  }
]

export default function IndustrialServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-orange-700 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/misc/cutting-1.jpg"
            alt="Industrial Safety Manufacturing"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Fire Resistant Clothing &
              <span className="text-orange-400 block">Industrial Safety Workwear</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-orange-100">
              Leading fire resistant clothing manufacturer and industrial safety workwear supplier. 
              OSHA compliant clothing, arc flash protection, and safety uniforms with bulk pricing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                Request Safety Quote
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-900 transition-colors duration-200"
              >
                View Safety Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Standards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Safety Standards & Compliance Certifications
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              As an industrial safety workwear supplier, we ensure all our protective clothing meets or exceeds 
              industry safety standards and OSHA compliance requirements.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStandards.map((standard, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.standard}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Safety Products */}
      <div id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Complete Industrial Safety Workwear Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From fire resistant clothing to high-visibility safety wear, we manufacture complete 
              industrial safety workwear solutions with OSHA compliance and bulk pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrialProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.category}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2 text-xs">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FR Clothing Manufacturing Expertise */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Fire Resistant Clothing Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a specialized fire resistant clothing manufacturer, we understand the critical importance of 
                protective workwear in high-risk industrial environments. Our FR workwear saves lives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">NFPA 2112 Certification</h3>
                    <p className="text-gray-600 text-sm">All fire resistant clothing meets or exceeds NFPA 2112 standards for flame resistance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Arc Flash Protection Ratings</h3>
                    <p className="text-gray-600 text-sm">Comprehensive range of CAT 1-4 arc flash protective clothing for electrical workers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Bulk Safety Programs</h3>
                    <p className="text-gray-600 text-sm">Complete safety workwear programs for industrial facilities with bulk pricing and inventory management.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  Get FR Clothing Quote
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/misc/our_collection-1000x1000-1.jpg"
                alt="Industrial Workers in Safety Clothing"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Industrial Safety Workers</p>
                <p className="text-sm opacity-90">Protected with New Atlantic safety workwear</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Industrial Safety Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our fire resistant clothing and safety workwear protect workers across high-risk industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'Oil & Gas',
              'Electric Utilities',
              'Chemical Manufacturing',
              'Steel Production',
              'Mining Operations',
              'Petrochemical Plants',
              'Power Generation',
              'Welding & Fabrication',
              'Aerospace Manufacturing',
              'Automotive Industry',
              'Construction',
              'Industrial Maintenance'
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-sm font-medium text-gray-700">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Workers with OSHA Compliant Safety Workwear
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Contact our industrial safety experts for fire resistant clothing, arc flash protection, 
            and complete safety workwear programs with bulk pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Safety Assessment
            </Link>
            <Link
              href="tel:+19785056547"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              Call Safety Experts: +1 978-505-6547
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}