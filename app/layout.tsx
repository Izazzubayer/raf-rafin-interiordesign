import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingChat from '@/components/FloatingChat'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Umbrella Interiors — Designing Timeless Interiors for Modern Living',
  description: 'Premium interior design studio in Dhaka, specializing in residential spaces that blend elegance with functionality.',
  keywords: ['interior design', 'Dhaka', 'Bangladesh', 'residential design', 'modern interiors', 'luxury homes'],
  authors: [{ name: 'Umbrella Interiors' }],
  icons: {
    icon: '/6.png',
    shortcut: '/6.png',
    apple: '/6.png',
  },
  openGraph: {
    title: 'Umbrella Interiors — Designing Timeless Interiors',
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
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
