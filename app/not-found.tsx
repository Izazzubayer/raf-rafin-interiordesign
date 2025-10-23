'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center section-padding">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-serif font-light text-gold mb-4">404</h1>
          <h2 className="heading-2 text-slate mb-6">Page Not Found</h2>
          <p className="body-text mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go Home
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

