'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          '-=0.6'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )

      // Parallax effect on image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 -z-10">
        <Image
          src="/images/Anisa Home New render PDF (dragged).webp"
          alt="Modern interior design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-width section-padding w-full py-32 md:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm text-gold text-sm font-medium tracking-wider uppercase rounded-full">
              Premium Interior Design
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="heading-hero text-cream mb-6 md:mb-8 max-w-3xl text-balance"
          >
            Transforming spaces into experiences
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-neutral-200 mb-10 md:mb-12 max-w-2xl leading-relaxed font-light"
          >
            Interior design that reflects your story. We create timeless, elegant spaces for modern living.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-primary group">
              <span>View Portfolio</span>
              <motion.svg
                className="w-5 h-5 ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </Link>

            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-cream text-sm tracking-widest uppercase">Scroll</span>
          <svg
            className="w-6 h-6 text-cream"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

