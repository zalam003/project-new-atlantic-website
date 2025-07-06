import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-4xl py-20 sm:py-32 lg:py-48">
        <div className="text-center">
          {/* Main headline optimized for mobile */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Reduce Sourcing Costs by
            <span className="text-primary-600 block sm:inline sm:ml-3">30-50%</span>
          </h1>
          
          {/* Value proposition */}
          <p className="mt-4 text-base leading-7 text-gray-600 max-w-2xl mx-auto sm:mt-6 sm:text-lg sm:leading-8">
            Complete garment sourcing and manufacturing solutions. From design to delivery, 
            we handle everything so you can focus on growing your business.
          </p>
          
          {/* Key benefits - mobile optimized */}
          <div className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-6 sm:text-base max-w-3xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">24h Response</span>
            </div>
          </div>
          
          {/* CTA buttons - mobile optimized */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-x-6 sm:mt-10">
            <Link 
              href="#contact" 
              className="btn-primary text-center py-4 px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/process" 
              className="btn-secondary text-center py-4 px-8 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              How It Works
            </Link>
          </div>
          
          {/* Social proof - mobile friendly */}
          <div className="mt-8 pt-8 border-t border-gray-200 sm:mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by fashion brands worldwide</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">100+</div>
                <div className="text-xs text-gray-600">Successful Projects</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">24h</div>
                <div className="text-xs text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-200 to-primary-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  )
}
