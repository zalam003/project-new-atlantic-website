import Image from 'next/image'

export default function About() {
  return (
    <div id="about" className="py-8 sm:py-10 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">About New Atlantic Global</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Trusted Partner Since 2014
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            We believe that garment sourcing is more than just supply - it's about building complete 
            supply chain solutions with significant backward linkages.
          </p>
        </div>
        
        <div className="mx-auto mt-8 max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Complete Supply Chain Management
                  </h3>
                  <p className="text-gray-600 leading-7">
                    Our comprehensive approach includes research and development of products, 
                    fabric and trims selection and sourcing, developing samples and size sets, 
                    selecting the right factory, and following up with social compliance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Quality & Compliance Focus
                  </h3>
                  <p className="text-gray-600 leading-7">
                    We maintain the highest standards in health and safety of workers, 
                    product quality control, and timely shipping to ensure your complete satisfaction.
                  </p>
                </div>

                {/* Key strengths grid */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                      <p className="text-sm text-gray-600">Rigorous quality control at every step</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 20 12 16.77 5.82 20 7 13.87 2 9l6.91-.74L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Social Compliance</h4>
                      <p className="text-sm text-gray-600">Ethical manufacturing standards</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-sm text-gray-600">Experienced professionals</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Scalable Solutions</h4>
                      <p className="text-sm text-gray-600">From small to large orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Images */}
            <div className="flex flex-col space-y-6">
              {/* Main feature image */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/misc/Portfolio-01.jpg"
                  alt="New Atlantic Global Manufacturing Facility"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    State-of-the-Art Facilities
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Modern manufacturing facilities equipped with the latest technology
                  </p>
                </div>
              </div>

              {/* Secondary images grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/misc/Key_strength.jpg"
                    alt="Quality Control Process"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 image-overlay-gradient"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-center">
                      <span className="text-overlay-primary text-sm block drop-shadow-lg">Quality Control</span>
                      <span className="text-overlay-secondary text-xs drop-shadow-md">Precision Standards</span>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/misc/store.jpg"
                    alt="Product Storage and Distribution"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 image-overlay-gradient"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-center">
                      <span className="text-overlay-primary text-sm block drop-shadow-lg">Storage & Distribution</span>
                      <span className="text-overlay-secondary text-xs drop-shadow-md">Global Logistics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Our Track Record
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">10+</div>
                    <div className="text-sm text-gray-600">Years in Business</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">50+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">100+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">99%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
