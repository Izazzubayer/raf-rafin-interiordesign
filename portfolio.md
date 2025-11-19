# Portfolio Page Improvements Specification (Umbrella Interiors)

## GOAL
Enhance the existing MyPortfolio page with industry-standard interior design website functionality, including advanced filters, sorting, improved card layout, animations, mobile responsiveness, and an upgraded project viewing experience.

---

## FEATURES TO IMPLEMENT

### 1. Sorting System
Add a sorting dropdown with options:
- Newest First
- Oldest First
- Largest Area (sq ft)
- Highest Budget
- A → Z

Place it on the right side of the “8 projects found” text.

---

### 2. Additional Filter Categories
Extend filter panel with:
- By Space:
  - Living Room
  - Bedroom
  - Kitchen
  - Dining
  - Office
  - Retail
- By Style:
  - Modern
  - Minimalist
  - Contemporary
  - Scandinavian
  - Luxury
  - Classical
- By Project Type:
  - Residential
  - Commercial
  - Renovation
  - New Build

(Use checkbox groups like the existing City/Budget filters.)

---

### 3. Sticky Filter Panel
On desktop, the left filter panel should remain sticky while scrolling.
On mobile → transform into a bottom sheet modal (button: “Filter”).

---

### 4. View Style Toggle
Add icons on top:
- Grid View
- Masonry View
- Large Photo View

Default = Grid.

---

### 5. Project Quick View Modal
Hover over project → small “Quick View” button.
Clicking opens modal with:
- 2–3 preview images
- Project title
- Sq ft, budget, city, year
- 3-line description
- CTA: “View Full Project”

---

### 6. Pagination / Load More
Use:
- Show first 9 items
- Button: “Load More” → loads 9 more
If no more → button disappears.

---

### 7. Smooth Filter + Sorting Animations
When filtering/sorting:
- Fade out items
- Reflow grid
- Fade in new items
Use framer-motion or smooth CSS transitions.

---

### 8. Project Card Enhancements
Each project card must include:
- Main image (hover zoom subtle)
- Title
- Location
- Budget (formatted with commas, e.g., “৳20 Lakh+”)
- Sq ft
- Year
- 2-line description (ellipsis)

Hover effect:
- Soft scale (1.02)
- Drop shadow
- Title slide up

---

### 9. Case Study Page (Dedicated Project Page)
Create dynamic route: `/portfolio/[slug]`
Contents:
- Full gallery (carousel)
- Project information panel
- Story & design explanation
- Moodboard
- Material palette
- Before/after slider (optional)
- Floor plan
- Testimonial
- Related projects section

---

### 10. Breadcrumb Navigation
Add breadcrumbs:
Home / Portfolio / {Project Name}

---

### 11. Empty State UI
If filters return no items:
Show illustration + text:
“Nothing matches your filters — try adjusting them.”
Add button: “Clear All Filters”

---

### 12. Performance Improvements
- Use Next/image for all images
- Lazy load below-fold images
- Add shimmer placeholder
- Optimize for LCP

---

### 13. SEO Improvements
For each project:
- Unique meta title
- Meta description
- OpenGraph image
- JSON-LD schema

---

## VISUAL DESIGN GUIDELINES

### Colors
- Use existing Umbrella Interiors palette
- Filter panel background: `#f8f3ea`
- Card hover shadow: `rgba(0,0,0,0.08)` soft

### Typography
- H1, H2: Canela or Playfair (depending on system)
- Body: Inter / Neue Haas

### Spacing
- Grid gap: 32px desktop / 16px mobile
- Section padding: 64px desktop / 32px mobile

---

## COMPONENTS TO GENERATE
- Sorting dropdown
- Filter checkboxes
- Filter drawer (mobile)
- View toggle buttons
- Project card component
- Quick view modal
- Pagination/load more
- Breadcrumb component
- Empty state component
- Case study page template

---

## COMPLETION CRITERIA
The Portfolio page must look and behave like a premium interior design studio website, similar to:
- Studio McGee
- Kelly Wearstler
- The Cultural North
- Kinfolk Interiors

