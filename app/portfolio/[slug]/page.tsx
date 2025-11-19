'use client'

import { useEffect, useRef, useState } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { formatBudget } from '@/lib/utils'
import { Clock, Users, Package, DoorOpen, Sparkles, Heart, Palette, Home, Lightbulb } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import ImageLightbox from '@/components/ImageLightbox'
import MaterialPalette from '@/components/MaterialPalette'
import RelatedProjects from '@/components/RelatedProjects'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const bannerRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    // Only use GSAP for banner parallax - everything else uses Framer Motion
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Banner parallax only
      if (bannerRef.current) {
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
      }
    })

    return () => ctx.revert()
  }, [])

  if (!project) {
    notFound()
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const navigateLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
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

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-8 left-0 right-0 section-padding z-10"
        >
          <div className="container-width">
            <Breadcrumb
              items={[
                { label: 'Portfolio', href: '/portfolio' },
                { label: project.title },
              ]}
              className="text-white [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/60"
            />
          </div>
        </motion.div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-12 md:pb-20">
          <div className="container-width">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4 text-white/90">
                <span className="text-sm uppercase tracking-widest text-gold font-medium">
                  {project.city}
                </span>
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span>{formatBudget(project.budget)}</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>{project.area}</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>{project.year}</span>
              </div>
              <h1 className="heading-1 text-white mb-0">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Project Summary Grid */}
      {project.overview && (
        <section className="section-spacing bg-white">
          <div className="container-width section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
              {/* Left: Project Overview */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="fade-in-section"
              >
                <h2 className="heading-2 text-slate-dark mb-8">Project Overview</h2>
                <div className="space-y-6 text-neutral-700 leading-relaxed">
                  {project.overview.clientWants && (
                    <div>
                      <h3 className="text-sm font-medium text-slate-dark mb-2 uppercase tracking-wider">
                        Client Vision
                      </h3>
                      <p className="body-text">{project.overview.clientWants}</p>
                    </div>
                  )}
                  {project.overview.constraints && (
                    <div>
                      <h3 className="text-sm font-medium text-slate-dark mb-2 uppercase tracking-wider">
                        Design Constraints
                      </h3>
                      <p className="body-text">{project.overview.constraints}</p>
                    </div>
                  )}
                  {project.overview.vision && (
                    <div>
                      <h3 className="text-sm font-medium text-slate-dark mb-2 uppercase tracking-wider">
                        Design Vision
                      </h3>
                      <p className="body-text">{project.overview.vision}</p>
                    </div>
                  )}
                  {project.overview.outcome && (
                    <div>
                      <h3 className="text-sm font-medium text-slate-dark mb-2 uppercase tracking-wider">
                        Final Outcome
                      </h3>
                      <p className="body-text">{project.overview.outcome}</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Right: Key Attributes */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="fade-in-section bg-beige/50 rounded-sm p-8 border-b-4 border-gold"
              >
                <h2 className="heading-2 text-slate-dark mb-8">Key Attributes</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600 uppercase tracking-wider">Location</span>
                    <span className="font-medium text-slate-dark">{project.city}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600 uppercase tracking-wider">Type</span>
                    <span className="font-medium text-slate-dark">{project.projectType || 'N/A'}</span>
                  </div>
                  {project.space && project.space.length > 0 && (
                    <div className="flex justify-between py-3 border-b border-neutral-200">
                      <span className="text-sm text-neutral-600 uppercase tracking-wider">Space</span>
                      <span className="font-medium text-slate-dark">{project.space.join(', ')}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600 uppercase tracking-wider">Area</span>
                    <span className="font-medium text-slate-dark">{project.area}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600 uppercase tracking-wider">Budget</span>
                    <span className="font-medium text-slate-dark">{formatBudget(project.budget)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600 uppercase tracking-wider">Year</span>
                    <span className="font-medium text-slate-dark">{project.year}</span>
                  </div>
                  {project.style && (
                    <div className="flex justify-between py-3 border-b border-neutral-200">
                      <span className="text-sm text-neutral-600 uppercase tracking-wider">Style</span>
                      <span className="font-medium text-slate-dark">{project.style}</span>
                    </div>
                  )}
                  {project.services && project.services.length > 0 && (
                    <div className="pt-3">
                      <span className="text-sm text-neutral-600 uppercase tracking-wider block mb-3">
                        Services Provided
                      </span>
                      <ul className="space-y-2">
                        {project.services.map((service, index) => (
                          <li key={index} className="flex items-center text-sm text-slate-dark">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Design Story */}
      {project.designStory && (
        <section className="section-spacing bg-gradient-to-b from-cream via-white to-cream relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container-width section-padding relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto fade-in-section"
            >
              {/* Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-gold font-medium">
                    The Narrative
                  </span>
                </motion.div>
                <h2 className="heading-2 text-slate-dark mb-6">The Design Story</h2>
                <div className="w-24 h-px bg-gold mx-auto" />
              </div>

              {/* Story Cards - 3x3 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.designStory.intention && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-sm p-6 shadow-sm border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif text-slate-dark mb-3">Design Intention</h3>
                      <p className="text-base text-neutral-700 leading-relaxed" style={{ fontSize: '16px' }}>
                        {project.designStory.intention}
                      </p>
                    </div>
                  </motion.div>
                )}

                {project.designStory.emotions && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-sm p-6 shadow-sm border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif text-slate-dark mb-3">Emotional Experience</h3>
                      <p className="text-base text-neutral-700 leading-relaxed" style={{ fontSize: '16px' }}>
                        {project.designStory.emotions}
                      </p>
                    </div>
                  </motion.div>
                )}

                {project.designStory.materials && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-sm p-6 shadow-sm border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                        <Package className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif text-slate-dark mb-3">Material Philosophy</h3>
                      <p className="text-base text-neutral-700 leading-relaxed" style={{ fontSize: '16px' }}>
                        {project.designStory.materials}
                      </p>
                    </div>
                  </motion.div>
                )}

                {project.designStory.colorPalette && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-sm p-6 shadow-sm border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                        <Palette className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif text-slate-dark mb-3">Color Palette</h3>
                      <p className="text-base text-neutral-700 leading-relaxed" style={{ fontSize: '16px' }}>
                        {project.designStory.colorPalette}
                      </p>
                    </div>
                  </motion.div>
                )}

                {project.designStory.lifestyle && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-sm p-6 shadow-sm border-l-4 border-gold hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                        <Home className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-serif text-slate-dark mb-3">Lifestyle Integration</h3>
                      <p className="text-base text-neutral-700 leading-relaxed" style={{ fontSize: '16px' }}>
                        {project.designStory.lifestyle}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 4. Image Gallery */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="fade-in-section"
          >
            <h2 className="heading-2 text-slate-dark mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                      Click to view
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={project.gallery}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}

      {/* 5. Material Palette */}
      {project.materials && project.materials.length > 0 && (
        <MaterialPalette
          materials={project.materials}
          description="Each material was carefully selected for its tactile quality, durability, and ability to create visual interest while maintaining the minimalist aesthetic."
        />
      )}

      {/* 6. Lighting & Decor Breakdown */}
      {project.lighting && (
        <section className="section-spacing bg-white">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto fade-in-section"
            >
              <h2 className="heading-2 text-slate-dark mb-12 text-center">Lighting & Decor Breakdown</h2>
              <div className="space-y-8">
                {project.lighting.strategy && (
                  <div>
                    <h3 className="text-2xl font-serif text-slate-dark mb-4">Lighting Strategy</h3>
                    <p className="body-text text-lg text-neutral-700 leading-relaxed">
                      {project.lighting.strategy}
                    </p>
                  </div>
                )}
                {project.lighting.decor && (
                  <div>
                    <h3 className="text-2xl font-serif text-slate-dark mb-4">Decor Selection</h3>
                    <p className="body-text text-lg text-neutral-700 leading-relaxed">
                      {project.lighting.decor}
                    </p>
                  </div>
                )}
                {project.lighting.customFurniture && (
                  <div>
                    <h3 className="text-2xl font-serif text-slate-dark mb-4">Custom Furniture</h3>
                    <p className="body-text text-lg text-neutral-700 leading-relaxed">
                      {project.lighting.customFurniture}
                    </p>
                  </div>
                )}
                {project.lighting.philosophy && (
                  <div>
                    <h3 className="text-2xl font-serif text-slate-dark mb-4">Design Philosophy</h3>
                    <p className="body-text text-lg text-neutral-700 leading-relaxed">
                      {project.lighting.philosophy}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 7. Project Stats Bar */}
      {project.stats && (
        <section className="section-spacing bg-beige/30">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto fade-in-section"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {project.stats.duration && (
                  <div>
                    <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                    <p className="text-2xl font-serif text-slate-dark mb-1">{project.stats.duration}</p>
                    <p className="text-sm text-neutral-600 uppercase tracking-wider">Duration</p>
                  </div>
                )}
                {project.stats.teamSize && (
                  <div>
                    <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                    <p className="text-2xl font-serif text-slate-dark mb-1">{project.stats.teamSize}</p>
                    <p className="text-sm text-neutral-600 uppercase tracking-wider">Team Size</p>
                  </div>
                )}
                {project.stats.materialsUsed && (
                  <div>
                    <Package className="w-8 h-8 text-gold mx-auto mb-3" />
                    <p className="text-2xl font-serif text-slate-dark mb-1">
                      {project.stats.materialsUsed}
                    </p>
                    <p className="text-sm text-neutral-600 uppercase tracking-wider">Materials</p>
                  </div>
                )}
                {project.stats.rooms && (
                  <div>
                    <DoorOpen className="w-8 h-8 text-gold mx-auto mb-3" />
                    <p className="text-2xl font-serif text-slate-dark mb-1">{project.stats.rooms}</p>
                    <p className="text-sm text-neutral-600 uppercase tracking-wider">Rooms</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 8. Client Testimonial */}
      {project.testimonial && (
        <section className="section-spacing bg-cream">
          <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto fade-in-section"
            >
              <div className="bg-beige/50 rounded-sm p-12 md:p-16 text-center border-l-4 border-gold">
                <svg
                  className="w-16 h-16 text-gold mx-auto mb-8 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-serif text-slate-dark mb-8 italic leading-relaxed">
                  &ldquo;{project.testimonial.text}&rdquo;
                </blockquote>
                <cite className="text-base text-neutral-700 not-italic font-medium">
                  — {project.testimonial.author}
                </cite>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 9. Related Projects */}
      <RelatedProjects currentProject={project} allProjects={projects} />

      {/* 10. CTA Footer */}
      <section className="section-spacing bg-slate-dark text-white">
        <div className="container-width section-padding">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center fade-in-section"
            >
            <h2 className="heading-2 text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="body-text text-lg text-white/90 mb-8 leading-relaxed">
              We design spaces that feel like home — with intention, warmth, and timeless simplicity.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center bg-gold hover:bg-gold-dark text-white">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
