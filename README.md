# Umbrella Interiors — Modern Interior Design Portfolio

A premium interior design portfolio website built with Next.js 14, TypeScript, Tailwind CSS, GSAP, and Framer Motion.

## 🎨 Features

- **Modern Design**: Elegant, minimalist design with soft neutrals and gold accents
- **Advanced Animations**: Smooth GSAP and Framer Motion animations throughout
- **Responsive Layout**: Fully responsive Bento grid and card layouts
- **Smart Filtering**: Filter portfolio projects by city and budget
- **Dynamic Routes**: Individual project detail pages with galleries
- **Performance Optimized**: Next.js Image optimization, code splitting, and more
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML
- **SEO Ready**: Optimized meta tags and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger, Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Image Optimization**: Next/Image

## 📁 Project Structure

```
interior design/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio pages
│   │   └── [slug]/        # Dynamic project pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── BentoGrid.tsx
│   ├── PortfolioCard.tsx
│   ├── FilterSidebar.tsx
│   └── ContactForm.tsx
├── lib/                   # Utilities and data
│   ├── data.ts           # Project data
│   ├── store.ts          # Zustand store
│   └── utils.ts          # Helper functions
├── images/               # Project images
└── public/              # Static assets
```

## 🎯 Pages

### Homepage (`/`)
- Hero section with parallax effect
- Stats showcase
- Services/Expertise grid
- Featured portfolio (Bento grid)
- About snippet
- CTA section

### Portfolio (`/portfolio`)
- Filter sidebar (by city & budget)
- Responsive project grid
- Animated card interactions

### Project Detail (`/portfolio/[slug]`)
- Parallax hero banner
- Project information
- Photo gallery
- Client testimonials
- CTA section

### About (`/about`)
- Company story
- Core values
- Team showcase
- Awards & recognition

### Contact (`/contact`)
- Contact form with validation
- Office information
- Social media links
- Map placeholder

## 🎬 Animations

### GSAP Animations
- Hero entrance animations
- Parallax scrolling effects
- Scroll-triggered reveals
- Staggered element animations
- Smooth counter animations

### Framer Motion
- Page transitions
- Hover interactions
- Mobile menu animations
- Card hover effects
- Micro-interactions

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Cream**: `#F5F1E8` - Background
- **Beige**: `#E8DCC8` - Secondary background
- **Slate**: `#4A5259` - Primary text
- **Gold**: `#C9A961` - Accent color

### Typography
- **Display**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
8pt grid system with consistent spacing scale

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Color contrast compliance

## 📄 License

© 2024 Umbrella Interiors. All rights reserved.

## 👨‍💻 Development

Built with ❤️ by a professional architect, web developer, and branding expert.

