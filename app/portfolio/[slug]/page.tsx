'use client'

import { useEffect, useRef } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { formatBudget } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const bannerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner parallax
      gsap.to(bannerRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Content fade-in
      gsap.from('.detail-section', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Gallery images stagger
      gsap.from('.gallery-image', {
        scrollTrigger: {
          trigger: '.gallery-grid',
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

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div ref={bannerRef} className="absolute inset-0 scale-110">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent" />
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-32 left-6 md:left-16 z-10"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-12 md:pb-16">
          <div className="container-width">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  {project.city}
                </span>
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span className="text-xs text-neutral-300">{project.year}</span>
              </div>
              <h1 className="heading-1 text-white mb-4">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div ref={contentRef} className="section-spacing">
        <div className="container-width section-padding">
          {/* Info Grid */}
          <div className="detail-section grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-neutral-200">
            <div>
              <p className="text-sm text-neutral-600 mb-2 uppercase tracking-wider">Location</p>
              <p className="text-lg font-medium text-slate">{project.city}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2 uppercase tracking-wider">Budget</p>
              <p className="text-lg font-medium text-slate">{formatBudget(project.budget)}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2 uppercase tracking-wider">Area</p>
              <p className="text-lg font-medium text-slate">{project.area}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2 uppercase tracking-wider">Year</p>
              <p className="text-lg font-medium text-slate">{project.year}</p>
            </div>
          </div>

          {/* Description */}
          <div className="detail-section max-w-4xl mb-16">
            <h2 className="heading-3 text-slate mb-6">About This Project</h2>
            <p className="body-text text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Gallery */}
          <div className="detail-section mb-16">
            <h2 className="heading-3 text-slate mb-8">Project Gallery</h2>
            <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-image relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="detail-section bg-beige rounded-sm p-8 md:p-12 max-w-4xl mx-auto text-center"
            >
              <svg
                className="w-12 h-12 text-gold mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-serif text-slate mb-6 italic">
                &ldquo;{project.testimonial.text}&rdquo;
              </blockquote>
              <cite className="text-sm text-neutral-600 not-italic">— {project.testimonial.author}</cite>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20 pt-16 border-t border-neutral-200"
          >
            <h2 className="heading-3 text-slate mb-6">Have a Project in Mind?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create a space that perfectly reflects your style and needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

