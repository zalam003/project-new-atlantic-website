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
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=195+Mattison+Drive,+Concord,+MA+01742"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <svg className="footer-contact-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>195 Mattison Drive, Concord, MA 01742</span>
              </a>
              <a 
                href="tel:+19785056547" 
                className="footer-contact-item"
              >
                <svg className="footer-contact-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+1 978-505-6547</span>
              </a>
              <a 
                href="mailto:zia@newatlantic.biz" 
                className="footer-contact-item"
              >
                <svg className="footer-contact-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>zia@newatlantic.biz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
