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
  space?: string[] // e.g., ['Living Room', 'Kitchen']
  style?: string // e.g., 'Modern', 'Minimalist'
  projectType?: string // e.g., 'Residential', 'Commercial'
  testimonial?: {
    text: string
    author: string
  }
  // Extended fields for case study page
  overview?: {
    clientWants?: string
    constraints?: string
    vision?: string
    outcome?: string
  }
  designStory?: {
    intention?: string
    emotions?: string
    materials?: string
    colorPalette?: string
    lifestyle?: string
  }
  services?: string[] // e.g., ['Space Planning', 'Full Interior Design', 'Material Selection']
  materials?: {
    name: string
    type: 'wood' | 'fabric' | 'stone' | 'metal' | 'paint' | 'tile' | 'other'
    color?: string
  }[]
  lighting?: {
    strategy?: string
    decor?: string
    customFurniture?: string
    philosophy?: string
  }
  stats?: {
    duration?: string
    teamSize?: string
    materialsUsed?: number
    rooms?: number
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
    space: ["Living Room", "Dining"],
    style: "Minimalist",
    projectType: "Residential",
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
    client: "Private Residence",
    space: ["Bedroom"],
    style: "Luxury",
    projectType: "Residential"
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
    client: "Rahman Family",
    space: ["Kitchen", "Dining"],
    style: "Modern",
    projectType: "Residential"
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
    space: ["Living Room"],
    style: "Contemporary",
    projectType: "Residential",
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
    client: "Private Client",
    space: ["Bedroom"],
    style: "Scandinavian",
    projectType: "Residential"
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
    client: "Tech Professional",
    space: ["Office"],
    style: "Modern",
    projectType: "Commercial",
    overview: {
      clientWants: "A dedicated workspace that balances professional functionality with personal comfort. The client needed a space that could accommodate long work hours while maintaining a sense of calm and inspiration.",
      constraints: "Limited square footage required efficient space planning. The room needed to serve multiple functions: focused work, video calls, and occasional creative brainstorming sessions.",
      vision: "Create a minimalist sanctuary that promotes productivity through thoughtful design. Every element was chosen to reduce visual clutter while maximizing functionality and natural light.",
      outcome: "A serene, highly functional workspace that feels both professional and personal. The space successfully integrates ergonomic furniture, smart storage solutions, and ambient lighting to create an environment that supports both focused work and creative thinking."
    },
    designStory: {
      intention: "To design a workspace that transcends the traditional office environment, creating a space where productivity and well-being coexist harmoniously.",
      emotions: "The space should evoke feelings of clarity, focus, and calm. The neutral palette and natural materials create a grounding atmosphere that helps reduce stress and mental fatigue during long work sessions.",
      materials: "We selected materials that age beautifully and create a sense of permanence: solid wood desk surfaces, natural fiber textiles, and matte metal accents. Each material was chosen for its tactile quality and ability to create visual interest without distraction.",
      colorPalette: "A sophisticated neutral palette of warm grays, soft beiges, and warm whites. Accent colors in muted greens and soft blues were introduced through plants and artwork to add life without overwhelming the space.",
      lifestyle: "The design accommodates a modern remote work lifestyle, with flexible furniture arrangements, integrated technology solutions, and spaces that can transition from focused work to collaborative video calls seamlessly."
    },
    services: [
      "Space Planning",
      "Full Interior Design",
      "Material Selection",
      "Lighting Plan",
      "Furniture Curation",
      "Custom Storage Solutions"
    ],
    materials: [
      { name: "Oak Wood", type: "wood", color: "Natural Oak" },
      { name: "Linen Fabric", type: "fabric", color: "Warm Beige" },
      { name: "Concrete", type: "stone", color: "Light Gray" },
      { name: "Brass Accents", type: "metal", color: "Polished Brass" },
      { name: "Wall Paint", type: "paint", color: "Warm White" },
      { name: "Ceramic Tile", type: "tile", color: "Neutral Gray" }
    ],
    lighting: {
      strategy: "A three-layer lighting approach: ambient overhead lighting for general illumination, task lighting at the desk for focused work, and accent lighting to highlight artwork and create visual interest. Natural light was maximized through strategic window treatments.",
      decor: "Minimalist decor pieces were carefully curated to add personality without clutter. A selection of plants, art prints, and a few meaningful objects create a personal touch while maintaining the clean aesthetic.",
      customFurniture: "A custom-built desk with integrated cable management and storage drawers. The design maximizes surface area while maintaining a sleek, minimal profile. Ergonomic considerations were built into every dimension.",
      philosophy: "Every lighting decision was made to support circadian rhythms and reduce eye strain. Warm, dimmable lights allow the space to adapt throughout the day, from bright morning focus sessions to softer evening work."
    },
    stats: {
      duration: "8 weeks",
      teamSize: "3 designers",
      materialsUsed: 12,
      rooms: 1
    }
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
    client: "Executive Residence",
    space: ["Bedroom"],
    style: "Luxury",
    projectType: "Residential"
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
    client: "Family Home",
    space: ["Living Room"],
    style: "Contemporary",
    projectType: "Residential"
  }
]

export const cities = ["Mohammadpur", "Lalmatia", "Dhanmondi", "Gulshan", "Banani"]

export const budgetRanges = [
  { value: "below-5l", label: "Below ৳5 Lakh" },
  { value: "5l-10l", label: "৳5-10 Lakh" },
  { value: "10l-20l", label: "৳10-20 Lakh" },
  { value: "20l+", label: "৳20 Lakh+" },
]

export const spaces = ["Living Room", "Bedroom", "Kitchen", "Dining", "Office", "Retail"]
export const styles = ["Modern", "Minimalist", "Contemporary", "Scandinavian", "Luxury", "Classical"]
export const projectTypes = ["Residential", "Commercial", "Renovation", "New Build"]

