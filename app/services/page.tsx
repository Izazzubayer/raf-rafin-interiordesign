'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Building2, Layout, ShoppingBag, Palette, Wrench, Lightbulb, Calendar, ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ServicesPage() {
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

      // Service cards stagger
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
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: 'Residential Interior Design',
      description: 'Transform your home into a warm, curated, and functional living space that reflects your personality and lifestyle. We handle everything from concept to completion.',
      icon: <Home className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Complete home interior design',
        'Room-by-room transformation',
        'Color palette & material selection',
        'Custom furniture design',
        'Lighting design & installation',
        'Final styling & accessories',
      ],
    },
    {
      title: 'Commercial Interiors',
      description: 'Create modern, branded environments that elevate your business identity. From offices to retail spaces, we design environments that inspire productivity and reflect your brand values.',
      icon: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Office space design',
        'Retail & showroom design',
        'Restaurant & hospitality',
        'Brand identity integration',
        'Workplace optimization',
        'Project management',
      ],
    },
    {
      title: 'Space Planning & 3D Visualization',
      description: 'From concept to execution with full clarity. Experience detailed layouts, realistic renderings, and comprehensive plans that ensure every element is perfectly positioned.',
      icon: <Layout className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Detailed floor plans',
        '3D renderings & walkthroughs',
        'Furniture layout optimization',
        'Traffic flow analysis',
        'Technical drawings',
        'Virtual reality previews',
      ],
    },
    {
      title: 'Material & Furniture Curation',
      description: 'A premium selection tailored to your lifestyle. We connect you with the finest suppliers and artisans, ensuring every piece is beautiful and perfectly suited to your needs.',
      icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Premium material sourcing',
        'Custom furniture procurement',
        'Art & decor selection',
        'Supplier relationships',
        'Quality assurance',
        'Installation coordination',
      ],
    },
    {
      title: 'Color Consultation',
      description: 'Expert color palette selection that creates harmony and atmosphere. We help you choose colors that enhance your space and reflect your personal style.',
      icon: <Palette className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Color scheme development',
        'Paint selection & coordination',
        'Material color matching',
        'Mood & atmosphere planning',
        'Color psychology application',
        'Sample coordination',
      ],
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with modern updates and expert styling. We handle structural changes, updates, and complete transformations while maintaining functionality.',
      icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Complete home renovation',
        'Kitchen & bathroom remodeling',
        'Structural modifications',
        'Plumbing & electrical planning',
        'Material replacement',
        'Project coordination',
      ],
    },
    {
      title: 'Lighting Design',
      description: 'Illuminate your space with thoughtfully designed lighting that enhances ambiance, functionality, and aesthetics. From ambient to task lighting, we create the perfect atmosphere.',
      icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Lighting plan development',
        'Fixture selection & sourcing',
        'Ambient & task lighting',
        'Smart lighting integration',
        'Installation coordination',
        'Lighting control systems',
      ],
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project oversight from start to finish. We coordinate all aspects of your project, ensuring timely completion, quality control, and seamless execution.',
      icon: <Calendar className="w-8 h-8" strokeWidth={1.5} />,
      features: [
        'Timeline & budget management',
        'Vendor coordination',
        'Quality control & inspections',
        'Progress reporting',
        'Problem resolution',
        'Final walkthrough & handover',
      ],
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
                Our Services
              </span>
            </motion.div>
            <h1 className="heading-1 text-slate mb-6">Comprehensive Interior Design Solutions</h1>
            <p className="body-text text-lg text-neutral-700 leading-relaxed">
              From initial concept to final installation, we offer a full range of interior design services tailored to transform your space into an environment that inspires, functions beautifully, and reflects your unique vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-spacing">
        <div className="container-width section-padding">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="service-card"
              >
                <div className="bg-white rounded-sm p-8 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="text-gold mb-4">{service.icon}</div>
                  <h3 className="text-xl text-slate mb-3 advent-pro-heading">{service.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-dark uppercase tracking-wider mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-600">
                          <svg
                            className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0"
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="heading-2 text-slate mb-6">Our Design Process</h2>
            <p className="body-text text-lg text-neutral-700 leading-relaxed max-w-3xl">
              We follow a structured approach to ensure your project is completed on time, within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We begin with a comprehensive consultation to understand your vision, lifestyle, and requirements.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates detailed concepts, 3D visualizations, and material selections for your approval.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We manage every aspect of implementation, from procurement to installation and quality control.',
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final styling, walkthrough, and handover ensure your space is ready for you to enjoy.',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-beige rounded-sm p-8 text-center"
              >
                <div className="text-5xl font-serif text-gold/30 mb-4">{phase.step}</div>
                <h3 className="text-xl font-serif text-slate mb-3">{phase.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-beige">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-2 text-slate mb-6">Why Choose Umbrella Interiors</h2>
              <div className="space-y-4 body-text text-neutral-700">
                <p>
                  With over a decade of experience and 150+ completed projects, we bring expertise, creativity, and meticulous attention to detail to every project.
                </p>
                <p>
                  Our comprehensive service approach means you have a single point of contact for everything—from initial design concepts to final installation and styling.
                </p>
                <p>
                  We work with trusted suppliers and artisans to source premium materials and custom pieces, ensuring quality and uniqueness in every detail.
                </p>
                <p>
                  Our commitment to your vision means we collaborate closely throughout the process, keeping you informed and involved at every stage.
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
                src="/images/Anisa Home New render PDF (dragged) 3.webp"
                alt="Interior design project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-slate-dark text-neutral-100">
        <div className="container-width section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 text-cream mb-6">Ready to Start Your Project?</h2>
            <p className="body-text text-lg text-neutral-300 leading-relaxed mb-8">
              Let&apos;s discuss how we can transform your space. Schedule a consultation with our design team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <Link href="/portfolio" className="btn-secondary inline-flex items-center">
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
