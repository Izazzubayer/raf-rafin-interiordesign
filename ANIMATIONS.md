# Animation Guide - InteriorVista

## Overview

This project features sophisticated animations using **GSAP** and **Framer Motion** to create a premium, engaging user experience.

## Animation Philosophy

- **Purposeful**: Every animation serves a purpose
- **Smooth**: Easing functions create natural motion
- **Performant**: GPU-accelerated transforms
- **Accessible**: Respects `prefers-reduced-motion`
- **Delightful**: Micro-interactions enhance UX

## GSAP Animations

### 1. Hero Parallax Effect
```typescript
// components/HeroSection.tsx
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
```

**Effect**: Background image moves slower than content creating depth

### 2. Scroll-Triggered Reveals
```typescript
// Reveals elements as they enter viewport
gsap.from('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
})
```

### 3. Staggered Animations
```typescript
// Animates multiple elements in sequence
gsap.from('.service-card', {
  scrollTrigger: {
    trigger: '.services-grid',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,  // 150ms between each card
  ease: 'power3.out',
})
```

### 4. Counter Animation
```typescript
// Animates numbers counting up
gsap.from(stat, {
  textContent: 0,
  duration: 2,
  ease: 'power1.inOut',
  snap: { textContent: 1 },
  onUpdate: function () {
    stat.textContent = Math.ceil(this.targets()[0].textContent)
  },
})
```

## Framer Motion Animations

### 1. Page Elements Fade-In
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
```

**Easing**: Custom cubic-bezier for smooth, natural motion

### 2. Hover Interactions
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
>
```

### 3. Layout Animations
```typescript
<motion.div
  layoutId="navbar-indicator"
  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
/>
```

**Effect**: Smooth indicator movement between nav items

### 4. Stagger Children
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
```

### 5. Exit Animations
```typescript
<AnimatePresence mode="wait">
  {filteredProjects.length > 0 ? (
    <motion.div
      key="projects-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
  ) : (
    <motion.div key="no-results">
  )}
</AnimatePresence>
```

## Micro-Interactions

### 1. Button Hover
```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="btn-primary"
>
```

### 2. Card Elevation
```css
.card-hover {
  @apply transition-all duration-500 ease-out
         hover:shadow-2xl hover:-translate-y-1;
}
```

### 3. Magnetic Button
```typescript
// components/MagneticButton.tsx
// Button follows cursor with spring physics
<motion.div
  animate={{ x: position.x, y: position.y }}
  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
>
```

### 4. Scroll Progress Bar
```typescript
// components/ScrollProgress.tsx
const { scrollYProgress } = useScroll()
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
})
```

## Custom Hooks

### useScrollAnimation
```typescript
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const elementRef = useScrollAnimation({
  y: 60,
  opacity: 0,
  duration: 1,
}, {
  start: 'top 80%',
})
```

### useParallax
```typescript
import { useParallax } from '@/hooks/useScrollAnimation'

const parallaxRef = useParallax(0.5) // 50% speed
```

## Animation Timing

### Duration Guidelines
- **Micro**: 0.2-0.3s (button hovers)
- **Small**: 0.4-0.5s (card reveals)
- **Medium**: 0.6-0.8s (section fades)
- **Large**: 1.0-1.2s (hero entrances)

### Easing Functions
- **ease-out**: UI elements entering view
- **ease-in-out**: Smooth continuous motion
- **spring**: Interactive elements (mobile menu)
- **power3.out**: Dramatic reveals
- **Custom**: [0.22, 1, 0.36, 1] for refined motion

## Performance Tips

### DO ✅
- Use `transform` and `opacity` (GPU-accelerated)
- Set `will-change: transform` for animated elements
- Use `viewport={{ once: true }}` to animate only once
- Cleanup GSAP contexts: `return () => ctx.revert()`

### DON'T ❌
- Animate `width`, `height` (causes reflow)
- Use `transition: all` (expensive)
- Forget to respect reduced motion preferences
- Chain too many sequential animations

## Accessibility

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

All animations automatically respect user preferences.

## Animation Checklist

When adding new animations:

- [ ] Does it serve a purpose?
- [ ] Is the timing appropriate?
- [ ] Does it respect reduced motion?
- [ ] Is it performant (transform/opacity)?
- [ ] Does it enhance UX?
- [ ] Is it consistent with existing animations?

## Examples by Page

### Homepage
- Hero parallax background
- Staggered stats reveal
- Service cards fade-in
- Bento grid entrance

### Portfolio
- Filter sidebar slide-in
- Project cards stagger
- Hover scale effects
- Filter transition animations

### Project Detail
- Banner parallax
- Detail sections reveal
- Gallery image stagger
- Testimonial fade-in

### About
- Team member cards stagger
- Values grid reveal
- Story section parallax

### Contact
- Form fields sequential reveal
- Contact cards fade-in
- Success message animation

---

**Animation is not just decoration—it's the soul of the experience. ✨**

