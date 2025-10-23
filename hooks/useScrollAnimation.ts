import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationOptions {
  trigger?: string
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
}

export function useScrollAnimation(
  animationConfig: gsap.TweenVars,
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current!, {
        ...animationConfig,
        scrollTrigger: {
          trigger: options.trigger || elementRef.current!,
          start: options.start || 'top 80%',
          end: options.end,
          scrub: options.scrub,
          markers: options.markers,
        },
      })
    })

    return () => ctx.revert()
  }, [animationConfig, options])

  return elementRef
}

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current!, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: elementRef.current!,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return elementRef
}

