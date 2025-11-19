'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Info, Rocket, Eye, Home, Building2, Layout, ShoppingBag, MessageSquare, Palette, DraftingCompass, Sparkles, Wrench, Lightbulb, Paintbrush } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { projects } from '@/lib/data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      const statNumbers = document.querySelectorAll('.stat-number')
        if (statNumbers.length > 0 && statsRef.current) {
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0')
        gsap.to(stat, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
                toggleActions: 'play none none none',
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
        }

        // Refresh ScrollTrigger after animations are set up
        ScrollTrigger.refresh()
      })

      return () => {
        clearTimeout(timer)
        ctx.revert()
      }
    }, 100)

    return () => clearTimeout(timer)
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
            className="mb-16"
          >
            <h2 className="heading-2 text-slate mb-6">Our Expertise</h2>
            <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
              We offer comprehensive interior design services, from initial concept to final installation, ensuring every detail reflects your vision.
            </p>
          </motion.div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="service-card bg-white rounded-sm p-8 hover:shadow-xl transition-shadow duration-500"
              >
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-slate-dark mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="heading-2 text-slate-dark mb-6">What We Do</h2>
            <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
              Comprehensive interior design services tailored to transform your space into an environment that inspires, functions beautifully, and reflects your unique vision.
            </p>
          </motion.div>

          <div className="what-we-do-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Residential Interior Design',
                description: 'Warm, curated, functional living spaces that reflect your personality and lifestyle. From concept to completion, we transform houses into homes.',
                icon: <Home className="w-8 h-8" strokeWidth={1.5} />,
                features: ['Complete home design', 'Room transformations', 'Custom solutions'],
              },
              {
                title: 'Commercial Interiors',
                description: 'Modern, branded environments that elevate your business identity. Create spaces that inspire productivity and reflect your brand values.',
                icon: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
                features: ['Office spaces', 'Retail design', 'Brand integration'],
              },
              {
                title: 'Space Planning & 3D Visualization',
                description: 'From concept to execution with full clarity. Detailed layouts, realistic renderings, and comprehensive plans ensure perfect execution.',
                icon: <Layout className="w-8 h-8" strokeWidth={1.5} />,
                features: ['Floor plans', '3D renderings', 'Virtual walkthroughs'],
              },
              {
                title: 'Material & Furniture Curation',
                description: 'A premium selection tailored to your lifestyle. We source the finest materials and furniture pieces that combine beauty with functionality.',
                icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />,
                features: ['Premium sourcing', 'Custom furniture', 'Quality assurance'],
              },
              {
                title: 'Renovation & Remodeling',
                description: 'Transform existing spaces with modern updates and expert styling. We handle structural changes while maintaining functionality and style.',
                icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />,
                features: ['Complete renovations', 'Kitchen & bathroom', 'Structural updates'],
              },
              {
                title: 'Lighting Design',
                description: 'Illuminate your space with thoughtfully designed lighting that enhances ambiance, functionality, and aesthetics for the perfect atmosphere.',
                icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
                features: ['Ambient lighting', 'Task lighting', 'Smart integration'],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="what-we-do-card group"
              >
                <div className="bg-white rounded-sm p-8 hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-gold/30 h-full flex flex-col">
                  {/* Icon with background */}
                  <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-serif text-slate-dark mb-3">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <svg
                          className="w-3 h-3 text-gold mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <Link href="/services" className="btn-secondary inline-flex items-center group">
              <span>View All Services</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
            <p className="text-sm text-neutral-600">
              Explore our complete range of interior design services
            </p>
          </motion.div>
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

      {/* Our Design Process Section */}
      <section ref={aboutRef} className="section-spacing bg-beige">
        <div className="container-width section-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="heading-2 text-slate-dark mb-6">Our Design Process</h2>
            <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
              A structured approach that ensures your project is completed on time, within budget, and exceeds your expectations. We guide you through every step with transparency and expertise.
            </p>
              </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gold/20" style={{ top: '5rem' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  number: '01',
                  title: 'Consultation',
                  description: 'Understanding your needs and vision. We begin with a comprehensive consultation to understand your lifestyle, preferences, budget, and goals for the space.',
                  icon: <MessageSquare className="w-8 h-8" strokeWidth={1.5} />,
                  details: [
                    'Initial meeting & site visit',
                    'Lifestyle & needs assessment',
                    'Budget & timeline discussion',
                    'Project scope definition',
                  ],
                },
                {
                  number: '02',
                  title: 'Concept & Moodboard',
                  description: 'Crafting a personalized interior language. We develop design concepts and create moodboards that capture the aesthetic direction and feel of your space.',
                  icon: <Palette className="w-8 h-8" strokeWidth={1.5} />,
                  details: [
                    'Design concept development',
                    'Moodboard creation',
                    'Style direction selection',
                    'Initial material exploration',
                  ],
                },
                {
                  number: '03',
                  title: 'Design Development',
                  description: 'Layouts, materials, colors, lighting — everything. We create detailed floor plans, select materials, develop color palettes, and plan lighting schemes.',
                  icon: <DraftingCompass className="w-8 h-8" strokeWidth={1.5} />,
                  details: [
                    'Detailed floor plans',
                    '3D visualizations',
                    'Material & color selection',
                    'Lighting design',
                    'Furniture specifications',
                  ],
                },
                {
                  number: '04',
                  title: 'Execution & Styling',
                  description: 'We bring your dream space to life. Our team manages procurement, coordinates installations, and handles final styling to ensure every detail is perfect.',
                  icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
                  details: [
                    'Procurement & sourcing',
                    'Installation coordination',
                    'Quality control',
                    'Final styling & accessories',
                    'Project handover',
                  ],
                },
              ].map((step, index) => (
            <motion.div
                  key={step.number}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="process-step relative"
                >
                  <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-all duration-500 h-full">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl font-serif text-gold/30">{step.number}</div>
                      <div className="text-gold">{step.icon}</div>
                  </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif text-slate-dark mb-4">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-700 leading-relaxed mb-6">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-600">
                          <svg
                            className="w-3 h-3 text-gold mr-2 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                    </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
                </div>
              </div>
                  </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="heading-2 text-slate-dark mb-6">What Our Clients Say</h2>
            <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Umbrella Interiors.
            </p>
            </motion.div>

          <div className="relative">
            <InfiniteMovingCards
              items={[
                {
                  quote: "The team at Umbrella Interiors transformed our home beyond our expectations. Every detail was thoughtfully considered, and the final result is absolutely stunning. We couldn't be happier with our new space.",
                  name: "Anisa Rahman",
                  title: "Residential Design • Dhanmondi",
                },
                {
                  quote: "Working with Umbrella Interiors was a seamless experience from start to finish. Their attention to detail and ability to understand our vision made the entire process enjoyable. Our office space now truly reflects our brand identity.",
                  name: "Karim Hassan",
                  title: "Commercial Interiors • Gulshan",
                },
                {
                  quote: "The 3D visualizations helped us see exactly what our space would look like before any work began. The team's professionalism and creativity exceeded our expectations. Highly recommend their services!",
                  name: "Nadia Khan",
                  title: "Space Planning • Banani",
                },
                {
                  quote: "Umbrella Interiors curated the most beautiful selection of materials and furniture for our home. Their expertise in sourcing premium pieces made all the difference. The quality is exceptional.",
                  name: "Reza Mahmud",
                  title: "Material Curation • Lalmatia",
                },
                {
                  quote: "From the initial consultation to the final styling, the entire process was handled with such care and professionalism. Our renovated kitchen is now the heart of our home, exactly as we envisioned.",
                  name: "Fatima Ahmed",
                  title: "Renovation • Mohammadpur",
                },
                {
                  quote: "The lighting design they created completely transformed the ambiance of our space. It's amazing how the right lighting can make such a difference. We're thrilled with the results!",
                  name: "Tariq Islam",
                  title: "Lighting Design • Gulshan",
                },
                {
                  quote: "What impressed us most was how they balanced our budget with our vision. They found creative solutions that didn't compromise on style or quality. Truly exceptional work.",
                  name: "Sadia Chowdhury",
                  title: "Residential Design • Dhanmondi",
                },
                {
                  quote: "The project management was flawless. They coordinated everything seamlessly, kept us informed at every step, and delivered on time. Our new space is everything we dreamed of and more.",
                  name: "Ahmed Ali",
                  title: "Complete Home Design • Banani",
                },
              ]}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
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

