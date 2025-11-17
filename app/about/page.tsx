'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { Mail } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-content', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })

      // Team cards stagger
      gsap.from('.team-member', {
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Values cards stagger
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const team = [
    {
      name: 'Sarah Ahmed',
      role: 'Principal Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face',
    },
    {
      name: 'Karim Hassan',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    },
    {
      name: 'Nadia Khan',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    },
    {
      name: 'Reza Mahmud',
      role: 'Interior Stylist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    },
  ]

  const values = [
    {
      title: 'Design Excellence',
      description: 'We pursue perfection in every detail, creating spaces that are both beautiful and functional.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Client Partnership',
      description: 'Your vision guides our process. We collaborate closely to bring your dreams to life.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description: 'We prioritize eco-friendly materials and practices for a better tomorrow.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Timeless Quality',
      description: 'We create spaces that stand the test of time with enduring style and quality.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 section-padding bg-gradient-to-br from-beige to-cream">
        <div className="container-width">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-medium tracking-wider uppercase rounded-full">
                About Us
              </span>
            </motion.div>
            <h1 className="heading-1 text-slate mb-6">Crafting Spaces, Creating Experiences</h1>
            <p className="body-text text-lg text-neutral-700 leading-relaxed">
              For over a decade, Umbrella Interiors has been transforming residential spaces across Dhaka into stunning environments that reflect our clients&apos; unique personalities and lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-2 text-slate mb-6">Our Story</h2>
              <div className="space-y-4 body-text text-neutral-700">
                <p>
                  Founded in 2012, Umbrella Interiors began with a simple mission: to create beautiful, functional spaces that enhance the way people live.
                </p>
                <p>
                  What started as a small studio has grown into one of Dhaka&apos;s most trusted interior design firms, with a portfolio spanning luxury residences across the city&apos;s most prestigious neighborhoods.
                </p>
                <p>
                  Our approach combines timeless design principles with contemporary aesthetics, always prioritizing our clients&apos; needs and the unique character of each space we work with.
                </p>
                <p>
                  Today, we&apos;re proud to have completed over 150 projects, each one a testament to our commitment to excellence, innovation, and the transformative power of great design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden"
            >
              <Image
                src="/images/Anisa Home New render PDF (dragged) 2.webp"
                alt="Umbrella Interiors studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-slate mb-6">Our Core Values</h2>
            <p className="body-text text-lg">
              These principles guide every project we undertake and every relationship we build.
            </p>
          </motion.div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="value-card bg-beige rounded-sm p-8 hover:shadow-lg transition-all duration-500"
              >
                <div className="text-gold mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif text-slate mb-3">{value.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 text-slate mb-6">Meet Our Team</h2>
            <p className="body-text text-lg">
              A talented group of designers, architects, and creative professionals dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="team-member group"
              >
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg font-serif text-slate mb-1">{member.name}</h3>
                <p className="text-sm text-gold font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards/Recognition Section */}
      <section className="section-spacing bg-slate-dark text-neutral-100">
        <div className="container-width section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-cream mb-12">Recognition & Awards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { year: '2023', award: 'Best Residential Design' },
                { year: '2022', award: 'Interior Designer of the Year' },
                { year: '2021', award: 'Sustainable Design Award' },
                { year: '2020', award: 'Excellence in Craftsmanship' },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-sm"
                >
                  <div className="text-3xl font-serif text-gold mb-2">{item.year}</div>
                  <p className="text-sm text-neutral-300">{item.award}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="heading-2 text-slate mb-6">Let&apos;s Create Something Beautiful Together</h2>
            <p className="body-text text-lg mb-8">
              Ready to transform your space? We&apos;d love to hear about your project.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

