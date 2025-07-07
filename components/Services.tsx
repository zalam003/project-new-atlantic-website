'use client'

import Image from 'next/image'
import { trackServiceCardClick } from '../lib/gtag'

const services = [
  {
    name: 'Casual Wear',
    subtitle: 'Everyday Essentials',
    description: 'Complete sourcing solutions for everyday clothing including t-shirts, jeans, shirts, and casual dresses with modern styling and competitive pricing.',
    features: ['Quality fabric selection', 'Modern styling', 'Competitive pricing', 'Fast turnaround'],
    image: '/images/misc/CoverImage01-600x600.jpg',
    bgColor: 'bg-blue-50',
    iconColor: 'bg-blue-600'
  },
  {
    name: 'Active Wear',
    subtitle: 'Performance Focused',
    description: 'Performance clothing for sports and fitness including activewear, athleisure, and workout gear with moisture-wicking fabrics.',
    features: ['Moisture-wicking fabrics', 'Flexible designs', 'Durability testing', 'Size optimization'],
    image: '/images/misc/CoverImage02-600x600.jpg',
    bgColor: 'bg-green-50',
    iconColor: 'bg-green-600'
  },
  {
    name: 'Outerwear',
    subtitle: 'Weather Protection',
    description: 'Protective and fashionable outer garments including jackets, coats, and weather-resistant clothing for all seasons.',
    features: ['Weather protection', 'Insulation options', 'Style variety', 'Seasonal collections'],
    image: '/images/misc/CoverImage03-600x600.jpg',
    bgColor: 'bg-purple-50',
    iconColor: 'bg-purple-600'
  },
  {
    name: 'Workwear',
    subtitle: 'Safety & Durability',
    description: 'Professional and industrial clothing including uniforms, safety wear, and corporate apparel with safety compliance focus.',
    features: ['Safety compliance', 'Durability focus', 'Professional appearance', 'Custom branding'],
    image: '/images/misc/CoverImage04.jpg',
    bgColor: 'bg-orange-50',
    iconColor: 'bg-orange-600'
  }
]

export default function Services() {
  return (
    <div id="services" className="py-8 sm:py-10 bg-accent-section textile-pattern">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Garment Categories
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            We specialize in four main categories of garment manufacturing, each with dedicated expertise 
            and quality standards to meet your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.name} className={`relative overflow-hidden rounded-2xl ${service.bgColor} p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                {/* Service Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={250}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${service.iconColor} shadow-lg`}>
                      <span className="text-white font-bold text-base">
                        {service.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-center">
                      <span className="text-overlay-primary text-sm block drop-shadow-lg">{service.name}</span>
                      <span className="text-overlay-secondary text-xs drop-shadow-md">{service.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <p className="text-gray-600 leading-6 mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-4">
                    <a 
                      href={`/#contact?projectType=${service.name.toLowerCase().replace(/ /g, '-')}`}
                      onClick={() => trackServiceCardClick(service.name)}
                      className="inline-flex items-center text-xs font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200"
                    >
                      Get Quote for {service.name}
                      <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services CTA */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-blue-600 p-6 shadow-xl">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/misc/section01-rz.jpg"
                alt="Manufacturing Background"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-3">
                Custom Solutions Available
              </h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Don't see exactly what you're looking for? We provide custom garment sourcing 
                solutions tailored to your specific requirements and industry needs.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
              >
                Discuss Custom Solutions
              </a>
            </div>
          </div>
        </div>

        {/* Service Process Overview */}
        <div className="mx-auto mt-10 max-w-7xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Service Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, we manage every step of your garment sourcing journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h4>
              <p className="text-gray-600 text-sm">Understanding your requirements and specifications</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Design & Sampling</h4>
              <p className="text-gray-600 text-sm">Creating samples and finalizing designs</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Production</h4>
              <p className="text-gray-600 text-sm">Manufacturing with quality control oversight</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Delivery</h4>
              <p className="text-gray-600 text-sm">Timely shipping and logistics management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
