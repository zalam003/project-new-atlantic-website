import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/about" className="text-gray-400 hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-gray-300">
            Services
          </Link>
          <Link href="/process" className="text-gray-400 hover:text-gray-300">
            Process
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">New Atlantic</span>
            <span className="text-sm text-gray-400 ml-2">Global</span>
          </div>
          <p className="text-xs leading-5 text-gray-400 mt-2">
            &copy; 2024 New Atlantic Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
