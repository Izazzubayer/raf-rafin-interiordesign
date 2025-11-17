# Project Understanding & Sitemap

## Project Overview

**InteriorVista** is a premium interior design portfolio website built for showcasing residential interior design projects. The site is designed for a design studio based in Dhaka, Bangladesh, specializing in luxury residential spaces.

### Purpose
- Showcase portfolio of interior design projects
- Provide information about services and expertise
- Enable client contact and inquiries
- Display project galleries with detailed information

### Key Characteristics
- **Premium Design**: Elegant, minimalist aesthetic with soft neutrals (cream, beige) and gold accents
- **Animation-Rich**: Heavy use of GSAP and Framer Motion for smooth, professional animations
- **Performance-Focused**: Next.js 14 with App Router, optimized images, code splitting
- **Responsive**: Fully responsive design across all device sizes
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and keyboard navigation

---

## Tech Stack

### Core Framework
- **Next.js 14.2.5** (App Router) - React framework with SSR/SSG capabilities
- **React 18.3.1** - UI library
- **TypeScript 5.5.4** - Type safety

### Styling
- **Tailwind CSS 3.4.7** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom Design System** - Defined color palette, typography, spacing

### Animations
- **GSAP 3.12.5** - Advanced animation library
- **ScrollTrigger** (GSAP plugin) - Scroll-based animations
- **Framer Motion 11.3.19** - React animation library for component animations

### State Management
- **Zustand 4.5.4** - Lightweight state management (used for filter state)

### Forms
- **React Hook Form 7.52.1** - Form handling and validation

### Utilities
- **clsx 2.1.1** - Conditional class names
- **tailwind-merge 2.4.0** - Merge Tailwind classes

---

## Architecture & Structure

### File Organization

```
raf-rafin-interiordesign/
├── app/                          # Next.js App Router directory
│   ├── about/                   # About page route
│   │   └── page.tsx
│   ├── contact/                 # Contact page route
│   │   └── page.tsx
│   ├── portfolio/               # Portfolio routes
│   │   ├── [slug]/              # Dynamic project detail pages
│   │   │   └── page.tsx
│   │   └── page.tsx             # Portfolio listing page
│   ├── layout.tsx               # Root layout (wraps all pages)
│   ├── page.tsx                 # Homepage
│   ├── loading.tsx              # Loading UI component
│   ├── not-found.tsx            # 404 error page
│   └── globals.css              # Global styles and design tokens
│
├── components/                  # Reusable React components
│   ├── AnimatedSection.tsx      # Wrapper for animated sections
│   ├── BentoGrid.tsx            # Masonry-style grid for projects
│   ├── ContactForm.tsx          # Contact form component
│   ├── FilterSidebar.tsx        # Portfolio filtering sidebar
│   ├── Footer.tsx               # Site footer
│   ├── HeroSection.tsx          # Homepage hero section
│   ├── MagneticButton.tsx      # Interactive button component
│   ├── Navbar.tsx               # Site navigation
│   ├── PortfolioCard.tsx        # Individual project card
│   └── ScrollProgress.tsx       # Scroll progress indicator
│
├── hooks/                       # Custom React hooks
│   └── useScrollAnimation.ts   # Scroll animation utilities
│
├── lib/                         # Utilities and data
│   ├── data.ts                 # Project data and constants
│   ├── store.ts                # Zustand state store
│   └── utils.ts                # Helper functions (cn, formatBudget)
│
├── public/                      # Static assets
│   └── images/                 # Project images (WebP format)
│
└── Configuration Files
    ├── package.json            # Dependencies and scripts
    ├── tsconfig.json           # TypeScript configuration
    ├── tailwind.config.ts     # Tailwind CSS configuration
    ├── next.config.js         # Next.js configuration
    └── postcss.config.js      # PostCSS configuration
```

---

## Key Features

### 1. Homepage (`/`)
- **Hero Section**: Full-screen hero with parallax background image, animated title/subtitle, CTA buttons
- **Stats Section**: Animated counter statistics (150+ projects, 12+ years, 98% satisfaction, 25+ awards)
- **Services/Expertise Section**: 4 service cards (Residential Design, Space Planning, Custom Furniture, Renovation & Styling)
- **Featured Portfolio**: Bento grid layout showing 6 featured projects
- **About Snippet**: Design philosophy section with core values
- **CTA Section**: Call-to-action for starting projects

### 2. Portfolio Page (`/portfolio`)
- **Filter Sidebar**: Filter projects by:
  - City (Mohammadpur, Lalmatia, Dhanmondi, Gulshan, Banani)
  - Budget range (Below ৳5L, ৳5-10L, ৳10-20L, ৳20L+)
- **Project Grid**: Responsive grid displaying filtered projects
- **Empty State**: Message when no projects match filters
- **Real-time Filtering**: Uses Zustand for state management

### 3. Project Detail Pages (`/portfolio/[slug]`)
- **Hero Banner**: Parallax banner with project thumbnail
- **Project Information**: Location, budget, area, year
- **Description**: Detailed project description
- **Gallery**: Grid of project images with hover effects
- **Testimonial**: Client testimonial (if available)
- **CTA**: Link to contact page

### 4. About Page (`/about`)
- **Hero Section**: Company introduction
- **Story Section**: Company history and mission
- **Values Section**: 4 core values (Design Excellence, Client Partnership, Sustainability, Timeless Quality)
- **Team Section**: 4 team members with photos and roles
- **Awards Section**: Recognition and awards display
- **CTA Section**: Link to contact

### 5. Contact Page (`/contact`)
- **Hero Section**: Contact introduction
- **Contact Information**: Email, phone, office address
- **Office Hours**: Business hours display
- **Social Links**: Facebook, Instagram, LinkedIn
- **Contact Form**: Form with validation (using React Hook Form)
- **Map Placeholder**: Location map (placeholder implementation)

---

## Component Breakdown

### Layout Components

#### `Navbar.tsx`
- Fixed header with scroll-based styling changes
- Desktop navigation with active state indicators
- Mobile hamburger menu with slide-in animation
- Logo with hover effects
- Uses Framer Motion for animations

#### `Footer.tsx`
- Site footer with links and information
- (Implementation details not fully visible in codebase)

#### `ScrollProgress.tsx`
- Scroll progress indicator at top of page
- Visual feedback for page scroll position

### Page-Specific Components

#### `HeroSection.tsx`
- Full-screen hero with background image
- GSAP timeline animations for entrance
- Parallax scroll effect on background
- CTA buttons with hover animations
- Scroll indicator at bottom

#### `BentoGrid.tsx`
- Masonry-style grid layout
- Varied card sizes (large cards for featured items)
- Hover effects with image scaling
- Overlay content with project information
- Framer Motion stagger animations

#### `PortfolioCard.tsx`
- Individual project card component
- Image with overlay
- Project metadata display
- Link to project detail page

#### `FilterSidebar.tsx`
- Filter controls for city and budget
- Checkbox-style toggles
- Reset filters functionality
- Connected to Zustand store

#### `ContactForm.tsx`
- Form with validation
- Uses React Hook Form
- Fields: name, email, phone, message
- Submit handling

### Utility Components

#### `AnimatedSection.tsx`
- Wrapper component for animated sections
- Provides consistent animation patterns

#### `MagneticButton.tsx`
- Interactive button with magnetic hover effect
- (Implementation details not fully visible)

---

## Data Structure

### Project Interface (`lib/data.ts`)

```typescript
interface Project {
  id: number
  title: string
  city: string
  budget: string                    // 'below-5l' | '5l-10l' | '10l-20l' | '20l+'
  thumbnail: string                 // Image path
  slug: string                      // URL slug
  gallery: string[]                 // Array of image paths
  description: string
  year: number
  area: string
  client: string
  testimonial?: {                   // Optional
    text: string
    author: string
  }
}
```

### Current Data
- **8 Projects** total
- **5 Cities**: Mohammadpur, Lalmatia, Dhanmondi, Gulshan, Banani
- **4 Budget Ranges**: Below ৳5L, ৳5-10L, ৳10-20L, ৳20L+
- **10 Images**: All projects share the same 10 images (from "Anisa Home" project)

### State Management (`lib/store.ts`)

```typescript
interface FilterState {
  selectedCities: string[]
  selectedBudgets: string[]
  toggleCity: (city: string) => void
  toggleBudget: (budget: string) => void
  resetFilters: () => void
}
```

Uses Zustand for lightweight, performant state management.

---

## Routing Structure

### Next.js App Router Structure

```
/                           → Homepage (app/page.tsx)
/about                      → About page (app/about/page.tsx)
/contact                    → Contact page (app/contact/page.tsx)
/portfolio                  → Portfolio listing (app/portfolio/page.tsx)
/portfolio/[slug]           → Project detail (app/portfolio/[slug]/page.tsx)
```

### Dynamic Routes
- `/portfolio/[slug]` uses dynamic routing
- Slug is generated from project title (e.g., "anisa-home-serene-living")
- 404 handling via `not-found.tsx`

### Layout Hierarchy
- `app/layout.tsx` wraps all pages
- Includes: Navbar, Footer, ScrollProgress
- Sets up fonts (Inter, Playfair Display)
- Defines metadata for SEO

---

## Styling System

### Design Tokens

#### Colors
- **Cream**: `#F5F1E8` - Primary background
- **Beige**: `#E8DCC8` - Secondary background
- **Slate**: `#4A5259` - Primary text (with light/dark variants)
- **Gold**: `#C9A961` - Accent color (with light/dark variants)
- **Neutral Scale**: 50-900 for grays

#### Typography
- **Display Font**: Playfair Display (serif) - Headings
- **Body Font**: Inter (sans-serif) - Body text
- **Responsive Sizing**: Uses `clamp()` for fluid typography
  - Hero: `clamp(2.5rem, 8vw, 5rem)`
  - H1: `clamp(2rem, 5vw, 3.5rem)`
  - H2: `clamp(1.5rem, 4vw, 2.5rem)`
  - H3: `clamp(1.25rem, 3vw, 2rem)`
  - Body: `clamp(1rem, 2vw, 1.125rem)`

#### Spacing
- 8pt grid system
- Consistent spacing scale (0.5rem to 6rem)
- Section padding: `px-6 md:px-12 lg:px-16`
- Section spacing: `py-16 md:py-24 lg:py-32`

### Utility Classes

#### Layout
- `.container-width` - Max-width container with auto margins
- `.section-padding` - Horizontal padding
- `.section-spacing` - Vertical spacing

#### Typography
- `.heading-hero` - Hero heading styles
- `.heading-1`, `.heading-2`, `.heading-3` - Heading styles
- `.body-text` - Body text styles

#### Buttons
- `.btn-primary` - Primary button (slate bg, gold hover)
- `.btn-secondary` - Secondary button (outline style)

---

## Animations

### GSAP Animations

#### Scroll-Triggered Animations
- **Fade-in on scroll**: Elements fade in as they enter viewport
- **Stagger animations**: Sequential reveal of cards/items
- **Parallax effects**: Background images move at different speeds
- **Counter animations**: Numbers count up to target values

#### Timeline Animations
- **Hero entrance**: Sequential animation of title, subtitle, CTA
- **Page transitions**: Smooth transitions between sections

### Framer Motion Animations

#### Component Animations
- **Hover effects**: Scale, translate, color transitions
- **Page transitions**: Fade and slide animations
- **Stagger children**: Sequential animation of list items
- **Mobile menu**: Slide-in from right

#### Interaction Patterns
- **While hover**: Scale, translate, color changes
- **While in view**: Trigger animations when element enters viewport
- **Animate presence**: Exit animations for removed elements

### Animation Principles
- **Easing**: Custom easing curves (`power3.out`, `ease-out`)
- **Duration**: Typically 0.6-1.2s for major animations
- **Stagger**: 0.1-0.2s delays between items
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

---

## Image Handling

### Image Format
- All images use **WebP format** for optimal performance
- Located in `/public/images/`
- Named: "Anisa Home New render PDF (dragged).webp" through "Anisa Home New render PDF (dragged) 10.webp"

### Next.js Image Optimization
- Uses `next/image` component throughout
- Automatic image optimization
- Responsive sizing with `sizes` attribute
- Lazy loading (except priority images)
- Priority loading for hero images

---

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (nav, main, section, article)
- ARIA labels where appropriate

### Keyboard Navigation
- Focus visible states
- Tab order follows visual flow
- Skip links (if implemented)

### Screen Readers
- Alt text for all images
- Descriptive link text
- Form labels

### Motion Preferences
- Respects `prefers-reduced-motion`
- Disables animations for users who prefer reduced motion

### Color Contrast
- WCAG 2.1 AA compliant
- High contrast between text and backgrounds

---

## Performance Optimizations

### Next.js Features
- **App Router**: Modern routing with React Server Components
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Automatic WebP conversion and sizing
- **Font Optimization**: Next.js font optimization for Google Fonts

### Best Practices
- **Lazy Loading**: Images and components load on demand
- **Memoization**: `useMemo` for filtered projects
- **Animation Cleanup**: Proper GSAP context cleanup
- **Bundle Size**: Minimal dependencies, tree-shaking

---

## Development Workflow

### Scripts (`package.json`)
- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - ESLint checking

### TypeScript
- Strict type checking enabled
- Type definitions for all components
- Interface definitions for data structures

---

## Sitemap

### Site Structure

```
InteriorVista Website
│
├── / (Homepage)
│   ├── Hero Section
│   ├── Stats Section
│   ├── Services/Expertise Section
│   ├── Featured Portfolio (Bento Grid)
│   ├── About Snippet
│   └── CTA Section
│
├── /portfolio (Portfolio Listing)
│   ├── Filter Sidebar
│   │   ├── City Filter
│   │   │   ├── Mohammadpur
│   │   │   ├── Lalmatia
│   │   │   ├── Dhanmondi
│   │   │   ├── Gulshan
│   │   │   └── Banani
│   │   └── Budget Filter
│   │       ├── Below ৳5 Lakh
│   │       ├── ৳5-10 Lakh
│   │       ├── ৳10-20 Lakh
│   │       └── ৳20 Lakh+
│   └── Projects Grid
│       └── [8 Projects]
│
├── /portfolio/[slug] (Project Detail Pages)
│   ├── /portfolio/anisa-home-serene-living
│   ├── /portfolio/elegant-bedroom-retreat
│   ├── /portfolio/modern-kitchen-dining
│   ├── /portfolio/sophisticated-living-room
│   ├── /portfolio/tranquil-master-suite
│   ├── /portfolio/contemporary-office-space
│   ├── /portfolio/luxury-guest-suite
│   └── /portfolio/family-entertainment-room
│   │   Each includes:
│   │   ├── Hero Banner
│   │   ├── Project Information
│   │   ├── Description
│   │   ├── Gallery
│   │   ├── Testimonial (if available)
│   │   └── CTA Section
│
├── /about (About Page)
│   ├── Hero Section
│   ├── Story Section
│   ├── Values Section
│   │   ├── Design Excellence
│   │   ├── Client Partnership
│   │   ├── Sustainability
│   │   └── Timeless Quality
│   ├── Team Section
│   │   ├── Sarah Ahmed (Principal Designer)
│   │   ├── Karim Hassan (Senior Architect)
│   │   ├── Nadia Khan (Project Manager)
│   │   └── Reza Mahmud (Interior Stylist)
│   ├── Awards Section
│   └── CTA Section
│
└── /contact (Contact Page)
    ├── Hero Section
    ├── Contact Information
    │   ├── Email
    │   ├── Phone
    │   └── Office Address
    ├── Office Hours
    ├── Social Links
    ├── Contact Form
    └── Map Placeholder
```

### Navigation Structure

```
Navbar (All Pages)
├── Home (/)
├── Portfolio (/portfolio)
├── About (/about)
└── Contact (/contact)
```

### Footer Links
- (Footer structure not fully visible in codebase, but typically includes)
  - Navigation links
  - Social media links
  - Copyright information
  - Additional resources

---

## Key Design Patterns

### 1. Component Composition
- Reusable components (BentoGrid, PortfolioCard)
- Composition over configuration
- Props-based customization

### 2. State Management
- Zustand for global filter state
- Local state for UI interactions (mobile menu, scroll position)
- React Hook Form for form state

### 3. Animation Strategy
- GSAP for complex scroll animations
- Framer Motion for component animations
- CSS transitions for simple hover effects

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Fluid typography with clamp()
- Flexible grid layouts

### 5. Performance
- Image optimization with Next.js Image
- Code splitting by route
- Lazy loading for below-fold content
- Memoization for expensive computations

---

## Future Considerations

### Potential Enhancements
1. **CMS Integration**: Move project data to a headless CMS
2. **Image Management**: Dedicated image management system
3. **Blog Section**: Add blog for design tips and updates
4. **Client Portal**: Private area for project updates
5. **3D Tours**: Interactive 3D room tours
6. **Booking System**: Online consultation booking
7. **Multi-language**: Support for Bengali/English
8. **Analytics**: User behavior tracking
9. **SEO Enhancement**: More structured data, sitemap.xml
10. **Performance Monitoring**: Real-time performance metrics

---

## Notes

- All project images currently use the same set of 10 images (from "Anisa Home" project)
- Budget ranges are in Bangladeshi Taka (৳)
- Projects are focused on Dhaka neighborhoods
- Design emphasizes luxury and premium aesthetics
- Heavy emphasis on animations and visual polish
- Client testimonials are optional per project

---

*Last Updated: Based on codebase analysis*
*Project: InteriorVista - Interior Design Portfolio Website*

