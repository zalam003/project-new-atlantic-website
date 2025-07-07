import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Corporate Uniforms Manufacturer | Business Apparel & Branded Company Clothing Supplier',
  description: 'Corporate uniforms manufacturer & business apparel supplier. Custom logo clothing, professional workwear, branded uniforms, corporate clothing programs.',
  keywords: 'corporate uniforms manufacturer, business apparel supplier, branded uniforms, company apparel custom logo, professional workwear, corporate clothing programs, retail uniforms, custom business clothing',
}

const corporateProducts = [
  {
    category: 'Professional Business Shirts',
    description: 'High-quality dress shirts and business casual tops for professional environments',
    features: ['Wrinkle-resistant fabrics', 'Professional styling', 'Custom embroidery options', 'Size range availability'],
    image: '/images/misc/CoverImage01-600x600-1.jpg',
    applications: ['Corporate offices', 'Financial services', 'Professional services', 'Customer service']
  },
  {
    category: 'Branded Polo Shirts',
    description: 'Custom logo polo shirts perfect for business casual and retail environments',
    features: ['Custom logo embroidery', 'Multiple color options', 'Moisture-wicking fabrics', 'Bulk pricing available'],
    image: '/images/misc/CoverImage02-600x600-1.jpg',
    applications: ['Retail stores', 'Sales teams', 'Events', 'Hospitality']
  },
  {
    category: 'Corporate Outerwear',
    description: 'Professional jackets, blazers, and outerwear with custom branding options',
    features: ['Custom logo placement', 'Professional appearance', 'Weather-appropriate options', 'Coordinated styling'],
    image: '/images/misc/CoverImage03-600x600-1.jpg',
    applications: ['Executives', 'Client-facing teams', 'Trade shows', 'Corporate events']
  },
  {
    category: 'Retail Uniforms',
    description: 'Complete retail uniform programs with brand consistency and professional appearance',
    features: ['Brand color matching', 'Durable construction', 'Easy-care fabrics', 'Coordinated pieces'],
    image: '/images/misc/CoverImage04-1.jpg',
    applications: ['Retail chains', 'Hospitality', 'Customer service', 'Food service']
  }
]

const corporateServices = [
  {
    service: 'Custom Logo Embroidery',
    description: 'Professional embroidery services for corporate logos and branding',
    icon: '🪡'
  },
  {
    service: 'Brand Color Matching',
    description: 'Precise color matching to maintain brand consistency across all uniforms',
    icon: '🎨'
  },
  {
    service: 'Corporate Program Management',
    description: 'Complete uniform program management from design to inventory',
    icon: '📋'
  },
  {
    service: 'Bulk Pricing Structure',
    description: 'Volume discounts for corporate accounts and large orders',
    icon: '💰'
  }
]

export default function CorporateServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-purple-700 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/misc/section01-rz-1.jpg"
            alt="Corporate Business Environment"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Corporate Uniforms &
              <span className="text-purple-400 block">Business Apparel</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Leading corporate uniforms manufacturer and business apparel supplier. Custom logo clothing, 
              professional workwear, and branded uniforms that strengthen your brand identity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Start Corporate Program
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors duration-200"
              >
                View Corporate Apparel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Corporate Uniform Program Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              As a specialized corporate uniforms manufacturer, we provide complete branded clothing solutions 
              that reinforce your professional image and build brand recognition.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.service}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Products */}
      <div id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Complete Business Apparel Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From professional business shirts to branded uniforms, we manufacture complete 
              corporate clothing programs with custom logo embroidery and bulk pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateProducts.map((product, index) => (
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
                          <span className="text-purple-500 mr-2 text-xs">✓</span>
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

      {/* Custom Branding & Logo Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Custom Logo Clothing & Brand Identity
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform your team's appearance with professional custom logo clothing that reinforces 
                your brand identity. Our corporate clothing programs build recognition and professionalism.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Professional Logo Embroidery</h3>
                    <p className="text-gray-600 text-sm">High-quality embroidery with precise brand color matching and professional placement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Corporate Clothing Programs</h3>
                    <p className="text-gray-600 text-sm">Complete uniform programs from executives to front-line staff with consistent branding.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Bulk Pricing & Management</h3>
                    <p className="text-gray-600 text-sm">Volume discounts for corporate accounts with inventory management and reorder systems.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  Design Your Corporate Program
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/misc/our_collection-1000x1000-1.jpg"
                alt="Professional Corporate Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Professional Corporate Teams</p>
                <p className="text-sm opacity-90">Branded with New Atlantic corporate apparel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Industries */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Corporate Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our corporate uniforms and business apparel serve diverse industries with professional clothing solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'Financial Services',
              'Professional Services',
              'Real Estate',
              'Technology Companies',
              'Retail Chains',
              'Hospitality',
              'Healthcare Administration',
              'Insurance Companies',
              'Consulting Firms',
              'Non-Profit Organizations',
              'Government Agencies',
              'Educational Institutions'
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

      {/* Benefits of Corporate Uniforms */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Benefits of Professional Corporate Uniforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Corporate uniforms provide measurable benefits for both employers and employees, 
              strengthening brand identity and professional appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-2xl mb-3">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Recognition</h3>
              <p className="text-gray-600 text-sm">Consistent branding across all team members builds customer recognition and trust.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-2xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Image</h3>
              <p className="text-gray-600 text-sm">Unified professional appearance enhances company credibility and customer confidence.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-2xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Unity</h3>
              <p className="text-gray-600 text-sm">Corporate uniforms build team spirit and eliminate workplace clothing disparities.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-2xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600 text-sm">Reduces employee clothing costs and provides tax benefits for employers.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-2xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Tool</h3>
              <p className="text-gray-600 text-sm">Branded uniforms serve as walking advertisements for your business.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-purple-600 text-2xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Savings</h3>
              <p className="text-gray-600 text-sm">Eliminates daily clothing decisions and ensures appropriate workplace attire.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Professional Image?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Contact us today to design your corporate uniform program. Custom logo clothing, 
            business apparel, and branded uniforms with competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Corporate Program
            </Link>
            <Link
              href="tel:+19785056547"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Call: +1 978-505-6547
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}