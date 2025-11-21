# Umbrella Interiors Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

Your images are already in the `/images` folder at the root level. The Next.js app will automatically serve them.

## Key Features Implemented

### ✅ Advanced Animations
- **GSAP ScrollTrigger**: Parallax effects, scroll-based reveals, staggered animations
- **Framer Motion**: Page transitions, hover effects, mobile menu animations
- **Micro-interactions**: Button hovers, card transforms, loading states

### ✅ Pages Created
1. **Homepage** (`/`) - Hero, stats, services, featured portfolio, about snippet, CTA
2. **Portfolio** (`/portfolio`) - Filterable project grid with sidebar
3. **Project Details** (`/portfolio/[slug]`) - Individual project pages with galleries
4. **About** (`/about`) - Company story, values, team, awards
5. **Contact** (`/contact`) - Contact form, info cards, map placeholder

### ✅ Components
- `Navbar` - Sticky nav with mobile menu and active indicators
- `Footer` - Multi-column footer with links and social
- `HeroSection` - Full-screen hero with GSAP parallax
- `BentoGrid` - Responsive grid with varied layouts
- `PortfolioCard` - Animated project cards
- `FilterSidebar` - Smart filtering by city and budget
- `ContactForm` - Validated form with React Hook Form
- `ScrollProgress` - Visual scroll indicator

### ✅ Features
- **Smart Filtering**: Real-time portfolio filtering with Zustand
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, structured data
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Next.js Image optimization, code splitting
- **Animations**: Smooth GSAP and Framer Motion throughout

## Animation Highlights

### GSAP Animations
- Hero entrance with staggered reveals
- Parallax scrolling on images
- Scroll-triggered section animations
- Stat counter animations
- Staggered grid reveals

### Framer Motion
- Navbar mobile menu slide-in
- Card hover scale and elevation
- Button micro-interactions
- Page transition effects
- Form field animations

## Customization

### Update Project Data
Edit `/lib/data.ts` to add/modify projects:

```typescript
{
  id: 6,
  title: "Your Project Name",
  city: "Location",
  budget: "10l-20l",
  thumbnail: "/images/your-image.webp",
  slug: "your-project-slug",
  gallery: [...],
  description: "...",
  year: 2026,
  area: "1,200 sq ft",
  client: "Client Name"
}
```

### Update Colors
Modify `/tailwind.config.ts` for custom colors:

```typescript
colors: {
  cream: '#F5F1E8',
  gold: '#C9A961',
  // Add your colors
}
```

### Update Content
- **Company Info**: Edit footer in `/components/Footer.tsx`
- **About Content**: Update `/app/about/page.tsx`
- **Contact Info**: Edit `/app/contact/page.tsx`

## Animation Tips

### Reduce Motion
The site respects `prefers-reduced-motion` for accessibility:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are simplified */
}
```

### Custom GSAP Animations
Add in any component:

```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.my-element', {
      scrollTrigger: {
        trigger: '.my-element',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    })
  })
  return () => ctx.revert()
}, [])
```

### Custom Framer Motion
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Support

For issues or questions:
- Check the README.md
- Review component documentation
- Inspect animation implementation in components

## Performance Checklist

✅ Next.js Image optimization
✅ Code splitting with dynamic imports
✅ CSS optimization with Tailwind
✅ Lazy loading images
✅ Minimal JavaScript bundle
✅ Font optimization with next/font

---

**Your Umbrella Interiors website is ready! 🎉**

Run `npm run dev` and start customizing!

