'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Info, Rocket, Eye } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import { projects } from '@/lib/data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section fade-in
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Stats counter animation
      const statNumbers = document.querySelectorAll('.stat-number')
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0')
        gsap.to(stat, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
          textContent: target,
          duration: 2,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          onUpdate: function () {
            stat.textContent = Math.ceil(parseFloat(stat.textContent || '0')).toString()
          },
        })
      })

      // Stagger reveal for service cards
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
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

  const stats = [
    { number: 150, label: 'Projects Completed', suffix: '+' },
    { number: 12, label: 'Years Experience', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' },
    { number: 25, label: 'Design Awards', suffix: '+' },
  ]

  const services = [
    {
      title: 'Residential Design',
      description: 'Complete home interior solutions tailored to your lifestyle and preferences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Space Planning',
      description: 'Optimize your space with intelligent layouts that maximize functionality and flow.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
    },
    {
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed and crafted specifically for your space.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Renovation & Styling',
      description: 'Transform existing spaces with modern updates and expert styling services.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section ref={statsRef} className="section-spacing bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif text-gold mb-2">
                  <span className="stat-number" data-target={stat.number}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <p className="text-sm text-neutral-700 uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Expertise Section */}
      <section className="section-spacing bg-beige">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-slate mb-6">Our Expertise</h2>
            <p className="text-lg text-neutral-800 leading-relaxed">
              We offer comprehensive interior design services, from initial concept to final installation, ensuring every detail reflects your vision.
            </p>
          </motion.div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card bg-white rounded-sm p-8 hover:shadow-xl transition-shadow duration-500"
              >
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-slate-dark mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="section-spacing bg-cream">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20"
          >
            <div>
              <h2 className="heading-2 text-slate-dark mb-4">Selected Work</h2>
              <p className="text-neutral-800 leading-relaxed max-w-xl">
                Explore our carefully curated collection of residential projects that showcase our design philosophy and attention to detail.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary mt-6 md:mt-0 inline-flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              View All Projects
            </Link>
          </motion.div>

          <ProjectGrid projects={projects} featured />
        </div>
      </section>

      {/* About Snippet Section */}
      <section ref={aboutRef} className="section-spacing bg-slate-dark text-neutral-100">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-2 text-cream mb-6">Our Design Philosophy</h2>
                <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                  <p>
                    At Umbrella Interiors, we believe that exceptional interior design goes beyond aesthetics—it&apos;s about creating spaces that enhance daily living and reflect the unique personality of each client.
                  </p>
                  <p>
                    With over a decade of experience across Dhaka&apos;s most prestigious neighborhoods, we&apos;ve honed our ability to blend timeless elegance with contemporary functionality.
                  </p>
                  <p>
                    Our approach is collaborative, detail-oriented, and deeply committed to sustainability. Every project is a journey toward creating a space you&apos;ll love for years to come.
                  </p>
                </div>
                <Link href="/about" className="btn-primary mt-8 inline-flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Learn More About Us
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gold/10 backdrop-blur-sm p-6 rounded-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h4 className="text-gold font-medium">Attention to Detail</h4>
                  </div>
                  <p className="text-sm text-neutral-400">Every element is carefully considered</p>
                </div>
                <div className="bg-gold/10 backdrop-blur-sm p-6 rounded-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="text-gold font-medium">Client-Centric</h4>
                  </div>
                  <p className="text-sm text-neutral-400">Your vision guides our design</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gold/10 backdrop-blur-sm p-6 rounded-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-gold font-medium">Timeless Design</h4>
                  </div>
                  <p className="text-sm text-neutral-400">Spaces that age beautifully</p>
                </div>
                <div className="bg-gold/10 backdrop-blur-sm p-6 rounded-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <h4 className="text-gold font-medium">Quality Craftsmanship</h4>
                  </div>
                  <p className="text-sm text-neutral-400">Premium materials and finishes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-beige to-cream">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 text-slate-dark mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg text-neutral-800 leading-relaxed mb-8">
              Let&apos;s discuss your project and bring your vision to life. Schedule a consultation with our design team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-secondary inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

