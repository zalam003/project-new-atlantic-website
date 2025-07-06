import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Atlantic Global - Complete Garment Sourcing Solutions',
  description: 'New Atlantic Global provides complete solutions for garment sourcing including casual wear, active wear, outerwear and workwear. Established in 2014 with a focus on quality, compliance, and timely delivery.',
  keywords: 'garment sourcing, apparel manufacturing, clothing supply chain, private label manufacturing, fashion sourcing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
