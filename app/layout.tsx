import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'InteriorVista — Designing Timeless Interiors for Modern Living',
  description: 'Premium interior design studio in Dhaka, specializing in residential spaces that blend elegance with functionality.',
  keywords: ['interior design', 'Dhaka', 'Bangladesh', 'residential design', 'modern interiors', 'luxury homes'],
  authors: [{ name: 'InteriorVista' }],
  openGraph: {
    title: 'InteriorVista — Designing Timeless Interiors',
    description: 'Transform your space with award-winning interior design.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

