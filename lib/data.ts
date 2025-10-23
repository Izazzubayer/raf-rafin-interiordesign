export interface Project {
  id: number
  title: string
  city: string
  budget: string
  thumbnail: string
  slug: string
  gallery: string[]
  description: string
  year: number
  area: string
  client: string
  testimonial?: {
    text: string
    author: string
  }
}

// All available images
const allImages = [
  "/images/Anisa Home New render PDF (dragged).webp",
  "/images/Anisa Home New render PDF (dragged) 2.webp",
  "/images/Anisa Home New render PDF (dragged) 3.webp",
  "/images/Anisa Home New render PDF (dragged) 4.webp",
  "/images/Anisa Home New render PDF (dragged) 5.webp",
  "/images/Anisa Home New render PDF (dragged) 6.webp",
  "/images/Anisa Home New render PDF (dragged) 7.webp",
  "/images/Anisa Home New render PDF (dragged) 8.webp",
  "/images/Anisa Home New render PDF (dragged) 9.webp",
  "/images/Anisa Home New render PDF (dragged) 10.webp",
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Anisa Home - Serene Living Space",
    city: "Dhanmondi",
    budget: "10l-20l",
    thumbnail: "/images/Anisa Home New render PDF (dragged).webp",
    slug: "anisa-home-serene-living",
    gallery: allImages,
    description: "A contemporary living space designed with clean lines and natural materials. This project showcases how minimalist aesthetics can create a warm, inviting atmosphere while maintaining functionality for modern family living.",
    year: 2024,
    area: "1,800 sq ft",
    client: "Anisa Rahman",
    testimonial: {
      text: "The team transformed our space beyond expectations. Every detail was thoughtfully considered.",
      author: "Anisa Rahman"
    }
  },
  {
    id: 2,
    title: "Elegant Bedroom Retreat",
    city: "Gulshan",
    budget: "20l+",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 4.webp",
    slug: "elegant-bedroom-retreat",
    gallery: allImages,
    description: "A luxurious bedroom sanctuary featuring custom furniture, ambient lighting, and a sophisticated neutral palette. This design creates a perfect balance between comfort and elegance.",
    year: 2024,
    area: "450 sq ft",
    client: "Private Residence"
  },
  {
    id: 3,
    title: "Modern Kitchen & Dining",
    city: "Banani",
    budget: "10l-20l",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 6.webp",
    slug: "modern-kitchen-dining",
    gallery: allImages,
    description: "An open-concept kitchen and dining area that combines functionality with contemporary design. The space features high-end appliances, ample storage, and a seamless flow between cooking and entertaining areas.",
    year: 2023,
    area: "650 sq ft",
    client: "Rahman Family"
  },
  {
    id: 4,
    title: "Sophisticated Living Room",
    city: "Lalmatia",
    budget: "5l-10l",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 8.webp",
    slug: "sophisticated-living-room",
    gallery: allImages,
    description: "A refined living space that showcases timeless design principles. The room features carefully curated furniture, layered lighting, and a cohesive color scheme that creates visual harmony.",
    year: 2023,
    area: "550 sq ft",
    client: "Ahmed Residence",
    testimonial: {
      text: "Outstanding attention to detail and impeccable taste. Our living room is now the heart of our home.",
      author: "Ahmed Family"
    }
  },
  {
    id: 5,
    title: "Tranquil Master Suite",
    city: "Mohammadpur",
    budget: "5l-10l",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 10.webp",
    slug: "tranquil-master-suite",
    gallery: allImages,
    description: "A peaceful master bedroom designed to be a personal retreat. Soft textures, calming colors, and thoughtful spatial planning create an environment conducive to rest and relaxation.",
    year: 2024,
    area: "400 sq ft",
    client: "Private Client"
  },
  {
    id: 6,
    title: "Contemporary Office Space",
    city: "Dhanmondi",
    budget: "10l-20l",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 2.webp",
    slug: "contemporary-office-space",
    gallery: allImages,
    description: "A modern home office designed for productivity and inspiration. Clean lines, natural light, and ergonomic furniture create the perfect workspace for remote professionals.",
    year: 2024,
    area: "300 sq ft",
    client: "Tech Professional"
  },
  {
    id: 7,
    title: "Luxury Guest Suite",
    city: "Gulshan",
    budget: "20l+",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 5.webp",
    slug: "luxury-guest-suite",
    gallery: allImages,
    description: "An elegant guest suite that provides comfort and privacy for visitors. Thoughtful amenities and sophisticated design ensure guests feel welcomed and pampered.",
    year: 2023,
    area: "350 sq ft",
    client: "Executive Residence"
  },
  {
    id: 8,
    title: "Family Entertainment Room",
    city: "Banani",
    budget: "10l-20l",
    thumbnail: "/images/Anisa Home New render PDF (dragged) 9.webp",
    slug: "family-entertainment-room",
    gallery: allImages,
    description: "A versatile entertainment space designed for family gatherings and relaxation. Comfortable seating, smart storage, and ambient lighting create the perfect environment for quality time together.",
    year: 2023,
    area: "600 sq ft",
    client: "Family Home"
  }
]

export const cities = ["Mohammadpur", "Lalmatia", "Dhanmondi", "Gulshan", "Banani"]

export const budgetRanges = [
  { value: "below-5l", label: "Below ৳5 Lakh" },
  { value: "5l-10l", label: "৳5-10 Lakh" },
  { value: "10l-20l", label: "৳10-20 Lakh" },
  { value: "20l+", label: "৳20 Lakh+" },
]

