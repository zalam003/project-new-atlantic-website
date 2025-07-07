'use client'

import Link from 'next/link'
import Image from 'next/image'
import { trackCTAClick } from '../lib/gtag'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-accent-section textile-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/misc/collage-rz.jpg"
          alt="New Atlantic Global Manufacturing"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/95"></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-primary-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pb-12 lg:flex lg:px-8 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-6">
          {/* Badge */}
          <div className="mt-8 sm:mt-12 lg:mt-6">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                Established 2014
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Complete sourcing solutions</span>
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your Complete
            <span className="text-primary-600 block sm:inline sm:ml-3">
              Garment Sourcing
            </span>
            Partner
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg leading-8 text-gray-600">
            New Atlantic Global provides end-to-end supply chain management from design to delivery. 
            Specializing in casual wear, active wear, outerwear, and workwear with over 10 years of industry expertise.
          </p>

          {/* Key benefits */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-medium">Social Compliance</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-medium">Timely Delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-medium">Competitive Pricing</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex items-center gap-x-6">
            <Link
              href="#contact"
              onClick={() => trackCTAClick('Get Quote', 'hero_section')}
              className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-200"
            >
              Get Quote
            </Link>
            <Link
              href="#about"
              onClick={() => trackCTAClick('Learn more', 'hero_section')}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right side - Product showcase */}
        <div className="mx-auto mt-8 flex max-w-2xl sm:mt-12 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-16">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Featured product image */}
              <div className="col-span-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/misc/our_collection-1000x1000.jpg"
                    alt="New Atlantic Global Product Collection"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Premium Quality Collection
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Complete garment sourcing solutions for all categories
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Manufacturing process images */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/misc/cutting.jpg"
                  alt="Precision Cutting Process"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 image-overlay-gradient"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-center">
                    <span className="text-overlay-primary text-sm block drop-shadow-lg">Precision Cutting</span>
                    <span className="text-overlay-secondary text-xs drop-shadow-md">Advanced Technology</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/misc/moisture_control_room.jpg"
                  alt="Quality Control Room"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 image-overlay-gradient"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-center">
                    <span className="text-overlay-primary text-sm block drop-shadow-lg">Quality Control</span>
                    <span className="text-overlay-secondary text-xs drop-shadow-md">Rigorous Testing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600">100+</div>
                <div className="text-sm text-gray-600">Successful Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary-600">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-200 to-primary-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  )
}
