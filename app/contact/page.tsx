'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@umbrellainteriors.com',
      link: 'mailto:hello@umbrellainteriors.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      value: '+880 1626 436389',
      link: 'tel:+8801234567890',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Office',
      value: 'Iqbal Road, Mohammadpur, Bangladesh',
      link: null,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/umbrellaInteriorsBD', icon: 'facebook' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 section-padding bg-gradient-to-br from-beige to-cream">
        <div className="container-width">
          <div className="contact-hero max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-medium tracking-wider uppercase rounded-full">
                Get in Touch
              </span>
            </motion.div>
            <h1 className="heading-1 text-slate mb-6">Let&apos;s Start Your Project</h1>
            <p className="body-text text-lg text-neutral-700 leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Fill out the form below or reach out directly using our contact information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-3 text-slate mb-8">Contact Information</h2>
                <div className="contact-grid space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="contact-card">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center text-gold">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-neutral-600 mb-1 uppercase tracking-wider">
                            {info.title}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-slate hover:text-gold transition-colors duration-300 font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-slate font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-sm p-6 mb-8"
                >
                  <h3 className="font-serif text-lg text-slate mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>Saturday - Thursday</span>
                      <span className="font-medium text-slate">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span className="font-medium text-slate">Closed</span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-medium text-slate mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <span className="text-sm font-medium">{social.icon[0].toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-sm p-8 md:p-12 shadow-sm"
              >
                <h2 className="heading-3 text-slate mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-neutral-200 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <iframe
            title="Umbrella Interiors Location"
            src="https://www.google.com/maps?q=Iqbal%20Road%2C%20Mohammadpur%2C%20Dhaka%2C%20Bangladesh&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </div>
  )
}
