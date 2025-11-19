# Umbrella Interiors — Project Case Study Page Specification

## GOAL
Create a premium, editorial-style project case study page for each interior design project.  
The page should feel high-end, calm, minimal, and emotionally engaging.  
It must follow interior design industry standards and focus on visual storytelling.

---

# PAGE STRUCTURE

## 1. Hero Section (Full Width)
- Large banner image of the project (highest-impact shot)
- Soft gradient fade bottom overlay (optional)
- Project Title (big serif font)
- Subtitle: City • Budget • Sq Ft • Year
- Breadcrumbs:
  Home / Portfolio / {Project Name}

### Example Layout:
[ Full Width Image (1600px) ]
Project Title
Location • Budget • Sq Ft • Year

yaml
Copy code

---

## 2. Project Summary Grid (Information Panel)
A 2-column grid summarizing all important specs.

### Left:
- **Project Overview** (2–3 paragraphs)
- What the client wanted  
- Design constraints  
- Design vision  
- Final outcome feel

### Right: Key Attributes List
- Location: Dhaka / Gulshan  
- Type: Residential / Commercial  
- Space Type: Living / Bedroom / Kitchen (etc)  
- Area: 1800 sq ft  
- Budget: 20 Lakh+  
- Completion Year: 2024  
- Style: Modern Minimal / Scandinavian / Luxury  
- Services Provided:
  - Space Planning  
  - Full Interior Design  
  - Material Selection  
  - Lighting Plan  
  - Furniture Curation  

**Design Note:**  
Use a card with a warm beige background + bottom border lines.

---

## 3. The Design Story (Narrative Section)
A long-scrolling text area describing:
- The design intention  
- What emotions the space should evoke  
- Material philosophy  
- Color palette inspiration  
- How the space accommodates lifestyle

Use a calm serif for headings + clean sans for body.

---

## 4. Image Gallery (Feature Section)
A tall-scrolling, elegant photo section:
- 6–12 images  
- Mix of:
  - wide hero shots  
  - medium detail shots  
  - vertical compositions  

**UX Requirements:**
- Lightbox modal (zoomable)
- Smooth fade and parallax on scroll
- Lazy load below fold  
- Captions optional (e.g., “Dining area with custom lighting design”)

### Layout Styles:
- 2-Column Masonry for photos  
- Full-width breakout images  
- Alternating wide + narrow images  
(Choose whichever matches your design system.)

---

## 5. Moodboard / Material Palette
Interior design websites always show:
- Material swatches  
- Wood textures  
- Fabric  
- Stone  
- Tile  
- Wall paint color palette  
- Lighting mood references  

### Components:
- 4–8 square swatch blocks  
- A short paragraph about why these materials were chosen  

[ Woodgrain ] [ Fabric ] [ Marble ] [ Warm Taupe ]
[ Brass ] [ Concrete ] [ Linen ] [ Sand Beige ]

yaml
Copy code

This adds huge *studio-level credibility*.

---

## 6. Floor Plan / Layout Map (Optional but Highly Professional)
- 2D floor plan (top-view)
- Annotated layout
- Mark the rooms shown in the gallery

### Optional advanced components:
- Interactive hover map:
  Hover room → highlight images from that space

---

## 7. Before / After Section (If available)
Interior sites love this feature.

### Features:
- Slider comparison (left = before, right = after)
- Or static side-by-side with labels
- Add notes about design transformation

---

## 8. Lighting & Decor Breakdown (Expert Section)
A detailed explanation of:
- Lighting strategy (ambient, task, accent)
- Decor objects selection
- Custom furniture details
- Style philosophy behind each element

---

## 9. Client Testimonial (If available)
A quote block:

> “Umbrella Interiors transformed our home into a modern sanctuary.  
> The attention to detail, communication, and expertise was unmatched.”

– Client Name

Use elegant typography + soft divider.

---

## 10. Project Stats Bar (Optional)
A horizontal section with icons:
- Duration  
- Team Size  
- Materials Used  
- Number of Rooms  

Minimal, line-based icons.

---

## 11. Related Projects (Bottom Section)
Show 3 or 4 curated projects from the same:
- Style  
- City  
- Budget range  
- Category  

Grid design:
- Similar card style to portfolio  
- CTA: **View Project**

---

## 12. CTA Footer
Encourage user conversion.

### Heading:
Ready to Transform Your Space?

### Button:
**Book a Consultation**

Warm, inviting copy:
“We design spaces that feel like home — with intention, warmth, and timeless simplicity.”

---

# DESIGN REQUIREMENTS

## Typography
- Titles/Headings: Canela / Playfair / Cormorant
- Body: Inter / Neue Haas Grotesk
- Quotes/Testimonial: Serif italic

## Spacing
- Use generous white space
- Section spacing: 80px desktop / 40px mobile
- Gallery spacing: 24–32px gaps

## Colors
Use Umbrella Interiors palette:
- Warm taupe  
- Soft sand  
- Deep chocolate brown  
- Ivory white  

## Animation
- Soft fade-in on scroll  
- Slow parallax on hero image  
- Lightbox zoom animation  
- Smooth transitions between sections  

---

# TECHNICAL REQUIREMENTS

## Performance
- Use Next/Image for all images
- Preload hero image
- Lazy load gallery
- Implement responsive breakpoints

## SEO
Each project page must include:
- Unique metadata  
- OpenGraph image  
- JSON-LD (Project Schema)  
- Canonical link  

## URL Structure
/portfolio/project-slug

---

# COMPLETION CRITERIA
A project page should feel:
- Editorial  
- Luxurious  
- Warm minimal  
- Highly detailed  
- Emotionally immersive  
- Interior-studio grade  

This page must be able to stand as a *premium case study* representing Umbrella Interiors.
