# 🚀 Quick Start Guide

## Installation (First Time)

```bash
# Install all dependencies
npm install
```

## Development

```bash
# Start development server (localhost:3000)
npm run dev
```

## Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Overview

### 📁 File Structure
```
interior design/
├── app/              # Pages (Next.js App Router)
├── components/       # React components
├── lib/             # Data & utilities
├── hooks/           # Custom hooks
├── images/          # Your project images ✅
└── public/          # Static assets
```

### 🎨 Key Files to Customize

#### 1. Project Data (`lib/data.ts`)
Update projects with your portfolio:
```typescript
{
  id: 1,
  title: "Project Name",
  city: "Dhanmondi",
  budget: "10l-20l",
  thumbnail: "/images/your-image.webp",
  slug: "project-slug",
  // ... more fields
}
```

#### 2. Colors (`tailwind.config.ts`)
```typescript
colors: {
  cream: '#F5F1E8',
  gold: '#C9A961',
  // Add your brand colors
}
```

#### 3. Company Info
- `components/Footer.tsx` - Footer content
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact info

### 🎬 Animations Included

✅ GSAP parallax scrolling
✅ Framer Motion transitions
✅ Hover micro-interactions
✅ Scroll-triggered reveals
✅ Staggered animations
✅ Mobile menu animations
✅ Loading states

### 📱 Pages Created

1. **/** - Homepage with hero, stats, services, portfolio
2. **/portfolio** - Filterable project grid
3. **/portfolio/[slug]** - Individual project pages
4. **/about** - Company story and team
5. **/contact** - Contact form and info

### 🔧 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Framer Motion
- Zustand (state)
- React Hook Form

### ⚡ Performance Features

✅ Image optimization (Next/Image)
✅ Code splitting
✅ Font optimization
✅ Lazy loading
✅ Responsive images
✅ Minimal JavaScript

### ♿ Accessibility

✅ Semantic HTML
✅ ARIA labels
✅ Keyboard navigation
✅ Focus states
✅ Reduced motion support
✅ Color contrast

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check for errors

# Useful
code .              # Open in VS Code
```

## Next Steps

1. ✅ **Run `npm install`**
2. ✅ **Run `npm run dev`**
3. ✅ **Visit http://localhost:3000**
4. 🎨 **Customize your content**
5. 📸 **Update project data**
6. 🚀 **Deploy to Vercel**

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Environment Variables (if needed)
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Module not found?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clean Next.js cache
rm -rf .next
npm run build
```

## Resources

- 📖 [README.md](README.md) - Full documentation
- 🎬 [ANIMATIONS.md](ANIMATIONS.md) - Animation guide
- 🛠️ [SETUP.md](SETUP.md) - Detailed setup

## Support

Need help? Check:
1. Documentation files
2. Component comments
3. TypeScript types
4. Console errors

---

**Your Umbrella Interiors website is production-ready! 🎉**

Start with `npm run dev` and make it yours!

