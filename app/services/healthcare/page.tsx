import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Medical Scrubs Wholesale | Nursing Uniforms & Healthcare Apparel Manufacturer',
  description: 'Wholesale medical scrubs, nursing uniforms & healthcare apparel manufacturer. Custom embroidery, bulk pricing, infection control standards. Hospital uniforms supplier.',
  keywords: 'medical scrubs wholesale, nursing uniforms bulk, healthcare apparel manufacturer, hospital uniforms supplier, medical uniforms custom embroidery, scrubs and lab coats, nursing scrub sets, medical apparel bulk',
}

const medicalProducts = [
  {
    category: 'Medical Scrubs',
    description: 'Professional medical scrubs designed for comfort and durability in healthcare environments',
    features: ['Infection control fabrics', 'Easy-care materials', 'Multiple pocket options', 'Comfortable fits for long shifts'],
    image: '/images/misc/CoverImage01-600x600-1.jpg',
    applications: ['Hospitals', 'Clinics', 'Medical centers', 'Nursing facilities']
  },
  {
    category: 'Lab Coats',
    description: 'Professional lab coats with safety features and compliance standards',
    features: ['Chemical resistance', 'Professional appearance', 'Custom embroidery options', 'Safety compliance'],
    image: '/images/misc/CoverImage02-600x600-1.jpg',
    applications: ['Laboratories', 'Medical facilities', 'Research centers', 'Pharmaceutical companies']
  },
  {
    category: 'Nursing Scrub Sets',
    description: 'Complete scrub sets for nursing professionals with coordinated styling',
    features: ['Coordinated top and bottom sets', 'Comfortable all-day wear', 'Professional appearance', 'Bulk pricing available'],
    image: '/images/misc/CoverImage03-600x600-1.jpg',
    applications: ['Nursing homes', 'Hospitals', 'Home health services', 'Medical practices']
  },
  {
    category: 'Healthcare Accessories',
    description: 'Essential healthcare accessories including caps, masks, and protective equipment',
    features: ['Disposable and reusable options', 'Safety compliance', 'Bulk quantities', 'Custom branding'],
    image: '/images/misc/CoverImage04-1.jpg',
    applications: ['All healthcare facilities', 'Emergency services', 'Dental offices', 'Veterinary clinics']
  }
]

const complianceFeatures = [
  {
    title: 'Infection Control Standards',
    description: 'Fabrics and designs that meet healthcare infection prevention requirements',
    icon: '🛡️'
  },
  {
    title: 'Easy-Care Materials',
    description: 'Machine washable, high-temperature resistant fabrics for hospital laundering',
    icon: '🧼'
  },
  {
    title: 'Professional Appearance',
    description: 'Maintains shape and color through multiple wash cycles',
    icon: '⭐'
  },
  {
    title: 'Custom Embroidery',
    description: 'Hospital logos, department names, and individual personalization available',
    icon: '🪡'
  }
]

export default function HealthcareServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/misc/moisture_control_room-1.jpg"
            alt="Healthcare Quality Control Environment"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Medical Scrubs Wholesale &
              <span className="text-green-400 block">Healthcare Apparel</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-green-100">
              Professional medical scrubs wholesale, nursing uniforms, and healthcare apparel manufacturer. 
              Custom embroidery, bulk pricing, and infection control standards for healthcare professionals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Request Wholesale Pricing
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors duration-200"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Medical Uniforms */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Healthcare Apparel Manufacturer You Can Trust
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              As a dedicated healthcare apparel manufacturer, we understand the unique demands of medical environments 
              and design uniforms that meet both professional standards and comfort needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Complete Healthcare Uniform Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From medical scrubs wholesale to custom nursing uniforms, we provide everything needed 
              for professional healthcare apparel programs with bulk pricing and custom embroidery services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {medicalProducts.map((product, index) => (
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
                          <span className="text-green-500 mr-2 text-xs">✓</span>
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

      {/* Bulk Pricing & Custom Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Wholesale Medical Uniforms with Custom Embroidery
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in bulk medical uniforms for hospitals, clinics, and healthcare systems. 
                Our wholesale pricing and custom embroidery services make us the preferred healthcare apparel manufacturer.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Bulk Pricing Structure</h3>
                    <p className="text-gray-600 text-sm">Volume discounts for hospitals and healthcare systems with competitive wholesale pricing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Custom Embroidery Services</h3>
                    <p className="text-gray-600 text-sm">Hospital logos, department names, and individual personalization with professional embroidery.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Program Management</h3>
                    <p className="text-gray-600 text-sm">Complete uniform program management from sizing to inventory and ongoing supply.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Get Wholesale Pricing Quote
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/misc/our_collection-1000x1000-1.jpg"
                alt="Healthcare Professionals in Custom Uniforms"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Healthcare Professionals</p>
                <p className="text-sm opacity-90">Equipped with New Atlantic medical uniforms</p>
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
              Healthcare Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our medical uniforms and healthcare apparel meet the specific needs of various healthcare environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'Hospitals',
              'Medical Clinics',
              'Nursing Homes',
              'Dental Offices',
              'Veterinary Clinics',
              'Medical Laboratories',
              'Home Health Services',
              'Emergency Medical Services',
              'Pharmaceutical Companies',
              'Research Facilities',
              'Rehabilitation Centers',
              'Mental Health Facilities'
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
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order Medical Scrubs Wholesale?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact us today for wholesale pricing on medical scrubs, nursing uniforms, and healthcare apparel. 
            Custom embroidery and bulk discounts available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Wholesale Quote
            </Link>
            <Link
              href="tel:+19785056547"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Call: +1 978-505-6547
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}