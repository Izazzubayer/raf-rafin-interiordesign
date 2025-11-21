'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  Services: [
    { name: 'Residential Design', href: '/portfolio' },
    { name: 'Space Planning', href: '/portfolio' },
    { name: 'Custom Furniture', href: '/portfolio' },
  ],
  Connect: [
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}

export default function Footer() {
  const currentYear = 2026

  return (
    <footer className="bg-slate-dark text-neutral-200 section-spacing">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                <Image
                  src="/Frame%2017.png"
                  alt="Umbrella Interiors logo"
                  width={200}
                  height={80}
                  className="h-12 w-auto"
                />
                <span className="sr-only">Umbrella Interiors</span>
              </Link>
              <p className="text-neutral-300 max-w-sm leading-relaxed mb-6">
                Designing timeless interiors for modern living. Designing Spaces That Shelter Your Vision.
              </p>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@umbrellainteriors.com" className="hover:text-gold transition-colors">
                  hello@umbrellainteriors.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-cream font-medium mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-gold transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-neutral-400">
            © {currentYear} Umbrella Interiors. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
