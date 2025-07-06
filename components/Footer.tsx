import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/about" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            Services
          </Link>
          <Link href="/process" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            Process
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center mb-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/misc/NewAtlantic-1.png"
                alt="New Atlantic Global"
                width={120}
                height={40}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs leading-5 text-gray-400">
              Complete garment sourcing solutions since 2014
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
              <p className="text-xs leading-5 text-gray-400">
                &copy; {currentYear} New Atlantic Global. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <Link href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                  195 Mattison Drive, Concord, MA 01742
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 text-xs">
              <a href="tel:+19785056547" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                +1 978-505-6547
              </a>
              <a href="mailto:zia@newatlantic.biz" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                zia@newatlantic.biz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
