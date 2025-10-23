'use client'

import Link from 'next/link'
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
  const currentYear = new Date().getFullYear()

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
              <Link href="/" className="inline-block mb-4">
                <span className="text-3xl font-serif font-light tracking-tight text-cream">
                  Interior<span className="font-medium">Vista</span>
                </span>
              </Link>
              <p className="text-neutral-300 max-w-sm leading-relaxed mb-6">
                Designing timeless interiors for modern living. Transforming spaces into experiences that reflect your unique story.
              </p>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@interiorvista.com" className="hover:text-gold transition-colors">
                  hello@interiorvista.com
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
            © {currentYear} InteriorVista. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <Link href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

