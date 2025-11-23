import type { Metadata } from 'next'
import Script from 'next/script'
import { Advent_Pro, Anek_Latin } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingChat from '@/components/FloatingChat'

const adventPro = Advent_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-advent-pro',
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
    <html lang="en" className={`${adventPro.variable} ${anekLatin.variable}`}>
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
