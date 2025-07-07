import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Chef Uniforms Wholesale | Restaurant Uniforms & Culinary Apparel Manufacturer',
  description: 'Wholesale chef uniforms, restaurant uniforms & culinary apparel manufacturer. Custom chef coats, kitchen uniforms, food service apparel with bulk pricing & custom embroidery.',
  keywords: 'chef uniforms wholesale, restaurant uniforms, culinary apparel manufacturer, chef coats bulk, food service uniforms, kitchen uniforms supplier, commercial chef wear, hospitality uniforms, chef jacket manufacturer',
}

// Chef coat product data based on current website
const chefCoatProducts = [
  {
    id: 'CGC-SS-01-TCT',
    name: 'Double Breasted Short Sleeve Chef Coat',
    features: [
      'Double breasted design',
      'Short sleeved for comfort',
      'Turn-back cuffs',
      'Left chest patch pocket',
      'Left sleeve pen pocket',
      'Inner pocket for essentials'
    ],
    applications: ['Restaurant kitchens', 'Catering services', 'Culinary schools', 'Hotel food service']
  },
  {
    id: 'CGC-SS-02-TCT',
    name: 'Professional Short Sleeve Chef Coat',
    features: [
      'Double breasted construction',
      'Short sleeved for mobility',
      'Turn-back cuffs',
      'Left chest patch pocket',
      'Left sleeve pen pocket',
      'Inner pocket storage'
    ],
    applications: ['Fast-casual restaurants', 'Food trucks', 'Corporate cafeterias', 'Healthcare food service']
  }
]

const culinaryProducts = [
  {
    category: 'Chef Coats',
    description: 'Professional chef coats with custom features and compliance standards',
    features: ['Double-breasted designs', 'Custom pocket configurations', 'Stain-resistant treatments', 'Ventilation options'],
    image: '/images/products/product-11.MSK-01-W-AB-copy-1.png'
  },
  {
    category: 'Chef Aprons',
    description: 'Durable aprons for kitchen protection and professional appearance',
    features: ['Adjustable straps', 'Multiple pocket options', 'Easy-clean materials', 'Custom branding available'],
    image: '/images/misc/CoverImage01-600x600-1.jpg'
  },
  {
    category: 'Chef Pants',
    description: 'Comfortable and functional chef pants for all-day wear',
    features: ['Elastic waistbands', 'Cargo pocket options', 'Stain-resistant fabric', 'Professional patterns'],
    image: '/images/misc/CoverImage02-600x600-1.jpg'
  },
  {
    category: 'Chef Hats',
    description: 'Traditional and modern chef hats for complete uniform programs',
    features: ['Multiple height options', 'Disposable and reusable', 'Custom embroidery', 'Comfortable fit'],
    image: '/images/misc/CoverImage03-600x600-1.jpg'
  }
]

const complianceFeatures = [
  {
    title: 'Health Department Standards',
    description: 'All uniforms meet local and federal food safety requirements',
    icon: '🏥'
  },
  {
    title: 'Stain & Soil Resistance',
    description: 'Advanced fabric treatments for easy cleaning and maintenance',
    icon: '🧼'
  },
  {
    title: 'Temperature Control',
    description: 'Breathable fabrics and ventilation features for kitchen environments',
    icon: '🌡️'
  },
  {
    title: 'Durability Testing',
    description: 'Commercial-grade construction for high-volume wash cycles',
    icon: '💪'
  }
]

export default function CulinaryServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <Image
            src="/images/misc/cutting-1.jpg"
            alt="Professional Kitchen Environment"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Culinary & Food Service
            <span className="text-blue-400 block">Uniform Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Professional chef coats, kitchen uniforms, and food service apparel designed for comfort, 
            compliance, and durability. From restaurants to culinary schools, we outfit food service professionals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Culinary Uniforms */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Food Service Professionals Choose New Atlantic
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique demands of kitchen environments and design uniforms that meet both 
              professional standards and practical needs.
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

      {/* Featured Chef Coat Products */}
      <div id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Featured Chef Coat Designs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our signature chef coats combine traditional double-breasted styling with modern functionality 
              and custom features tailored to your kitchen's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {chefCoatProducts.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={`/images/products/product-11.MSK-01-W-AB-copy-1.png`}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Model: {product.id}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Ideal Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Request Sample
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Complete Product Line */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Complete Kitchen Uniform Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From head to toe, we provide everything needed for a professional kitchen uniform program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culinaryProducts.map((product, index) => (
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
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2 text-xs">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Solutions */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Custom Culinary Uniform Programs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every kitchen is unique. We work with restaurants, hotels, catering companies, and culinary 
                schools to create uniform programs that reflect your brand and meet your operational needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Consultation & Requirements</h3>
                    <p className="text-gray-600 text-sm">We assess your kitchen environment, safety requirements, and brand preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Design & Sampling</h3>
                    <p className="text-gray-600 text-sm">Custom designs with features like embroidered logos, specific pocket configurations, and color options.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Bulk Production & Delivery</h3>
                    <p className="text-gray-600 text-sm">Efficient production timelines with quality control and direct delivery to your locations.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Start Your Custom Program
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/misc/our_collection-1000x1000-1.jpg"
                alt="Professional Kitchen Team in Uniforms"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Professional Kitchen Teams</p>
                <p className="text-sm opacity-90">Outfitted with New Atlantic uniforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              From fine dining to institutional food service, we understand industry-specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              'Fine Dining Restaurants',
              'Fast Casual Chains',
              'Hotel Food Service',
              'Catering Companies',
              'Culinary Schools',
              'Healthcare Food Service',
              'Corporate Cafeterias',
              'Food Trucks',
              'Country Clubs',
              'Cruise Lines',
              'Airlines Catering',
              'Prison Food Service'
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-sm font-medium text-gray-700">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Outfit Your Kitchen Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a consultation on your culinary uniform needs. We'll help you create a 
            professional, compliant, and comfortable uniform program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="tel:+19785056547"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Call: +1 978-505-6547
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}