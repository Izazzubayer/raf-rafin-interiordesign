import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, Anek_Latin } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingChat from '@/components/FloatingChat'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

const anekLatin = Anek_Latin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anek-latin',
})

export const metadata: Metadata = {
  title: 'Umbrella Interiors — Designing Timeless Interiors for Modern Living',
  description: 'Premium interior design studio in Dhaka, specializing in residential spaces that blend elegance with functionality.',
  keywords: ['interior design', 'Dhaka', 'Bangladesh', 'residential design', 'modern interiors', 'luxury homes'],
  authors: [{ name: 'Umbrella Interiors' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Umbrella Interiors — Designing Timeless Interiors',
    description: 'Transform your space with award-winning interior design.',
    type: 'website',
    url: 'https://umbrellainteriors.com',
    siteName: 'Umbrella Interiors',
    images: [
      {
        url: 'https://umbrellainteriors.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Umbrella Interiors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umbrella Interiors — Designing Timeless Interiors',
    description: 'Transform your space with award-winning interior design.',
    images: ['https://umbrellainteriors.com/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${anekLatin.variable}`}>
      <body className={anekLatin.className}>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  )
}
