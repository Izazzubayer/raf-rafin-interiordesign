# Portfolio Page Content & Functionality Questionnaire

This document contains questions about the content and functionality for your portfolio pages (both the main listing page and individual project detail pages). Please provide detailed answers to help us customize your portfolio section perfectly.

---

## PART A: PORTFOLIO LISTING PAGE (/portfolio)

### 1. PAGE HEADER SECTION

#### Content Questions:
1. **Page Title**:
   - What should the main heading be? (Currently: "Our Portfolio")
   - Alternatives: "Our Work", "Projects", "Design Portfolio", "Case Studies", etc.

2. **Page Description**:
   - What should the introductory text say? (Currently: "Explore our collection of residential and commercial interior design projects across Dhaka...")
   - What key message do you want to convey?
   - Should it mention specific locations, project types, or services?

3. **Breadcrumb Navigation**:
   - Do you want breadcrumb navigation? (Currently: Yes, shows "Portfolio")
   - Should it be visible on all pages?

#### Functionality Questions:
4. **Header Animation**:
   - Do you want the header to animate on page load? (Currently: Yes, with GSAP)
   - Any preferences for animation style?

---

### 2. FILTER SIDEBAR

#### Content Questions:
1. **Filter Categories**:
   - Which filter categories do you want to keep? (Currently: City, Budget, Space, Style, Project Type)
   - Are there any additional filter categories you'd like? (e.g., Year, Services Provided, Completion Status, etc.)
   - Any categories you want to remove?

2. **City Filter**:
   - What cities/locations should be available? (Currently: Dhanmondi, Gulshan, Banani, etc.)
   - Please list all cities where you have projects:
     - City 1: _______________
     - City 2: _______________
     - City 3: _______________
     - (Add more as needed)

3. **Budget Filter**:
   - What budget ranges should be available? (Currently: "Under 10L", "10L-20L", "20L+")
   - Please specify your budget ranges:
     - Range 1: _______________
     - Range 2: _______________
     - Range 3: _______________
     - (Add more as needed)
   - Should budget ranges be displayed in a specific currency or format?

4. **Space Filter**:
   - What space types should be available? (Currently: Living Room, Kitchen, Bedroom, etc.)
   - Please list all space types you work with:
     - Space 1: _______________
     - Space 2: _______________
     - Space 3: _______________
     - (Add more as needed)

5. **Style Filter**:
   - What design styles should be available? (Currently: Modern, Minimalist, Contemporary, etc.)
   - Please list all design styles you offer:
     - Style 1: _______________
     - Style 2: _______________
     - Style 3: _______________
     - (Add more as needed)

6. **Project Type Filter**:
   - What project types should be available? (Currently: Residential, Commercial, etc.)
   - Please list all project types:
     - Type 1: _______________
     - Type 2: _______________
     - Type 3: _______________
     - (Add more as needed)

#### Functionality Questions:
7. **Filter Behavior**:
   - Should filters work independently (OR logic) or together (AND logic)? (Currently: AND logic - all selected filters must match)
   - Should there be a "Clear All Filters" button? (Currently: Yes)
   - Do you want filter counts (showing how many projects match each filter)?

8. **Mobile Filter Experience**:
   - Should filters be in a sidebar on desktop and a drawer/modal on mobile? (Currently: Yes)
   - Do you want a floating filter button on mobile? (Currently: Yes, with badge showing active filter count)
   - Any preferences for mobile filter interaction?

9. **Filter Persistence**:
   - Should selected filters persist when navigating between pages? (Currently: Yes, using Zustand store)
   - Should filters be saved in URL parameters? (Currently: No, but could be added)

---

### 3. SORT & VIEW CONTROLS

#### Content Questions:
1. **Sort Options**:
   - Which sort options do you want? (Currently: Newest First, Oldest First, Largest Area, Highest Budget, A-Z)
   - Are there any additional sort options you'd like? (e.g., Most Popular, Recently Updated, etc.)
   - Any sort options you want to remove?

2. **Default Sort**:
   - What should be the default sort order? (Currently: Newest First)
   - Should it be customizable per user or fixed?

#### Functionality Questions:
3. **View Modes**:
   - Which view modes do you want? (Currently: Grid View, Masonry View, Large Photo View)
   - Do you want all three, or would you prefer fewer options?
   - What should be the default view mode? (Currently: Grid)

4. **View Mode Preferences**:
   - Should the user's view mode preference be saved? (Currently: Yes, in Zustand store)
   - Should it persist across page visits?

---

### 4. PROJECT CARDS/DISPLAY

#### Content Questions:
1. **Information to Display**:
   - What information should each project card show? (Currently: City, Budget, Title, Description, Area, Year, Style)
   - Are there any additional fields you want to show? (e.g., Client Name, Project Status, Completion Date, etc.)
   - Any fields you want to hide?

2. **Project Card Layout**:
   - Do you prefer the current card layout with image on top and info below?
   - Would you prefer a different layout? (e.g., Side-by-side, Overlay text, etc.)

3. **Project Descriptions**:
   - How long should project descriptions be? (Currently: 2 lines with line-clamp)
   - Should descriptions be full or truncated?

#### Functionality Questions:
4. **Quick View Feature**:
   - Do you want a "Quick View" modal? (Currently: Yes)
   - What information should be shown in the quick view?
   - Should quick view allow navigation to full project page?

5. **Project Card Interactions**:
   - What should happen when clicking a project card? (Currently: Navigate to full project page)
   - Should there be hover effects? (Currently: Yes, with overlay and action buttons)
   - Do you want the "View Details" button on hover? (Currently: Yes)

6. **Image Display**:
   - Should project thumbnails be cropped to a specific aspect ratio? (Currently: 4:3 for grid, 3:4 for masonry, 16:10 for large)
   - Do you want lazy loading for images? (Currently: Yes, via Next.js Image)

---

### 5. PAGINATION & LOADING

#### Content Questions:
1. **Items Per Page**:
   - How many projects should be displayed initially? (Currently: 9)
   - How many should load with "Load More"? (Currently: 9 more)
   - Would you prefer traditional pagination instead of "Load More"?

2. **Results Count**:
   - Should the page show how many projects match the current filters? (Currently: Yes, e.g., "15 projects found")
   - Where should this be displayed? (Currently: Above the project grid)

#### Functionality Questions:
3. **Load More Button**:
   - Do you want a "Load More" button? (Currently: Yes)
   - Should it show remaining count? (Currently: Yes, e.g., "Load More Projects (6 remaining)")
   - Any animation preferences for loading new items?

4. **Empty State**:
   - What should be shown when no projects match filters? (Currently: Icon, message, and "Clear All Filters" button)
   - Do you want to suggest alternative filters or show all projects?

---

### 6. GENERAL PORTFOLIO LISTING PAGE

#### Content Questions:
1. **Page Layout**:
   - Do you prefer the sidebar layout? (Currently: Filters on left, projects on right)
   - Would you prefer filters at the top, or a different layout?

2. **Background & Styling**:
   - Do you like the current background color? (Currently: Cream/beige)
   - Any color scheme preferences?

#### Functionality Questions:
3. **Search Functionality**:
   - Do you want a search bar to search projects by name, description, etc.? (Currently: No)
   - If yes, what fields should be searchable?

4. **URL Structure**:
   - Should individual project pages have SEO-friendly URLs? (Currently: Yes, using slugs)
   - Do you want filter state in URL for shareable links? (Currently: No)

---

## PART B: INDIVIDUAL PROJECT DETAIL PAGES (/portfolio/[slug])

### 1. HERO/BANNER SECTION

#### Content Questions:
1. **Hero Image**:
   - Should the hero use the project thumbnail or a different image?
   - Do you want multiple images in a carousel/slider? (Currently: Single image with parallax)
   - What aspect ratio should the hero have? (Currently: 70vh on mobile, 80vh on desktop)

2. **Hero Overlay**:
   - What information should appear in the hero overlay? (Currently: City, Budget, Area, Year, Project Title)
   - Should the breadcrumb be visible in the hero? (Currently: Yes, at top)
   - Any additional information you want in the hero?

#### Functionality Questions:
3. **Parallax Effect**:
   - Do you want a parallax scrolling effect on the hero image? (Currently: Yes)
   - Any preferences for parallax intensity?

4. **Hero Animation**:
   - Should the title and info animate in? (Currently: Yes, with Framer Motion)
   - Any specific animation preferences?

---

### 2. PROJECT OVERVIEW SECTION

#### Content Questions:
1. **Overview Content**:
   - What sections should be included in the overview? (Currently: Client Vision, Design Constraints, Design Vision, Final Outcome)
   - Are there any additional sections you want? (e.g., Project Goals, Challenges, Solutions, etc.)
   - Any sections you want to remove?

2. **Content for Each Section**:
   - **Client Vision**: What should this describe? (Currently: What the client wanted)
   - **Design Constraints**: What should this cover? (Currently: Limitations or challenges)
   - **Design Vision**: What should this explain? (Currently: The design approach)
   - **Final Outcome**: What should this highlight? (Currently: The results achieved)

3. **Key Attributes Box**:
   - What information should be in the key attributes sidebar? (Currently: Location, Type, Space, Area, Budget, Year, Style, Services Provided)
   - Are there any additional attributes you want? (e.g., Timeline, Team Size, Client Name, etc.)
   - Any attributes you want to hide?

#### Functionality Questions:
4. **Layout**:
   - Do you prefer the two-column layout? (Currently: Overview on left, Attributes on right)
   - Should this section be collapsible or always visible?

---

### 3. DESIGN STORY SECTION

#### Content Questions:
1. **Design Story Cards**:
   - Which design story elements do you want? (Currently: Design Intention, Emotional Experience, Material Philosophy, Color Palette, Lifestyle Integration)
   - Are there any additional elements? (e.g., Lighting Philosophy, Furniture Selection, Art & Accessories, etc.)
   - Any elements you want to remove?

2. **Content for Each Element**:
   - **Design Intention**: What should this describe?
   - **Emotional Experience**: What feelings/atmosphere should this convey?
   - **Material Philosophy**: What should this explain about material choices?
   - **Color Palette**: Should this include visual color swatches? (Currently: Text only)
   - **Lifestyle Integration**: What should this cover?

3. **Visual Elements**:
   - Should the design story section include images? (Currently: No, text cards only)
   - Do you want icons for each story element? (Currently: Yes, with Sparkles, Heart, Package, Palette, Home icons)

#### Functionality Questions:
4. **Layout**:
   - Do you like the 3-column grid layout? (Currently: Yes, responsive to 1 column on mobile)
   - Should cards be expandable for more details?

---

### 4. IMAGE GALLERY SECTION

#### Content Questions:
1. **Gallery Images**:
   - How many images should be in each project gallery? (Currently: Variable, from project data)
   - What types of images should be included? (e.g., Before/After, Process shots, Detail shots, etc.)
   - Should images be organized into categories? (Currently: No, flat gallery)

2. **Image Organization**:
   - Should images have captions? (Currently: No)
   - Should images have alt text for accessibility? (Currently: Yes, auto-generated)
   - Do you want to specify image order/priority?

#### Functionality Questions:
3. **Lightbox Feature**:
   - Do you want a lightbox/modal for viewing full-size images? (Currently: Yes)
   - Should the lightbox allow navigation between images? (Currently: Yes, with arrow keys and buttons)
   - Should it show image numbers? (Currently: Yes, e.g., "1 / 10")
   - Do you want zoom functionality in the lightbox?

4. **Gallery Layout**:
   - Do you prefer the grid layout? (Currently: 3 columns on desktop, 2 on tablet, 1 on mobile)
   - Should images have hover effects? (Currently: Yes, scale and overlay)
   - Do you want a masonry/pinterest-style layout option?

5. **Image Loading**:
   - Should images lazy load? (Currently: Yes)
   - Do you want a loading placeholder or skeleton?

---

### 5. MATERIAL PALETTE SECTION

#### Content Questions:
1. **Material Display**:
   - Should each project show a material palette? (Currently: Yes, if materials are provided)
   - What information should each material show? (Currently: Name, Type, Color)
   - Are there additional details you want? (e.g., Brand, Supplier, Cost, etc.)

2. **Material Categories**:
   - What material types should be available? (Currently: Wood, Fabric, Stone, Metal, Paint, Tile, Other)
   - Are there additional categories? (e.g., Glass, Leather, Ceramic, etc.)

3. **Visual Representation**:
   - Should materials show color swatches? (Currently: Yes, if color is provided)
   - Do you want material sample images? (Currently: No)
   - Should materials be grouped by type?

#### Functionality Questions:
4. **Material Interaction**:
   - Should materials be clickable for more details? (Currently: No)
   - Do you want filtering by material type?

---

### 6. LIGHTING & DECOR BREAKDOWN SECTION

#### Content Questions:
1. **Section Content**:
   - What subsections should be included? (Currently: Lighting Strategy, Decor Selection, Custom Furniture, Design Philosophy)
   - Are there additional subsections? (e.g., Artwork Selection, Accessories, Window Treatments, etc.)
   - Any subsections you want to remove?

2. **Content Details**:
   - **Lighting Strategy**: What should this cover? (e.g., Types of lighting, placement, fixtures, etc.)
   - **Decor Selection**: What should this describe? (e.g., Decorative elements, styling choices, etc.)
   - **Custom Furniture**: What should this explain? (e.g., Bespoke pieces, design rationale, etc.)
   - **Design Philosophy**: What should this convey? (e.g., Overall approach, principles, etc.)

#### Functionality Questions:
3. **Section Display**:
   - Should this section always be visible or optional? (Currently: Optional, only if lighting data exists)
   - Do you want images within this section? (Currently: No)

---

### 7. PROJECT STATS SECTION

#### Content Questions:
1. **Statistics to Display**:
   - Which stats should be shown? (Currently: Duration, Team Size, Materials Used, Rooms)
   - Are there additional stats you want? (e.g., Budget Breakdown, Timeline, Square Footage, etc.)
   - Any stats you want to remove?

2. **Stat Values**:
   - How should duration be displayed? (e.g., "6 months", "24 weeks", etc.)
   - How should team size be shown? (e.g., "5 people", "5", etc.)
   - Should materials show count or list?

#### Functionality Questions:
3. **Visual Display**:
   - Do you like the icon-based stat cards? (Currently: Yes, with Clock, Users, Package, DoorOpen icons)
   - Should stats be in a grid or row? (Currently: 4-column grid, 2-column on mobile)

---

### 8. CLIENT TESTIMONIAL SECTION

#### Content Questions:
1. **Testimonial Display**:
   - Should each project have a client testimonial? (Currently: Optional)
   - What information should testimonials include? (Currently: Quote text and author name)
   - Do you want additional info? (e.g., Client photo, Project type, Rating, etc.)

2. **Testimonial Content**:
   - Should testimonials be project-specific? (Currently: Yes)
   - Do you want to pull testimonials from review platforms? (Currently: No, manual entry)

#### Functionality Questions:
3. **Testimonial Design**:
   - Do you like the current quote-style design? (Currently: Yes, with quote icon and styled box)
   - Should testimonials be shareable or have social sharing buttons?

---

### 9. RELATED PROJECTS SECTION

#### Content Questions:
1. **Related Projects Logic**:
   - How should related projects be determined? (Currently: By city, style, or project type)
   - Should it show a specific number? (Currently: 3 projects)
   - Do you want manual selection of related projects?

2. **Related Projects Display**:
   - What information should related project cards show? (Currently: Image, title, city, year)
   - Should they show in a carousel or grid? (Currently: Grid)

#### Functionality Questions:
3. **Navigation**:
   - Should clicking a related project navigate to its detail page? (Currently: Yes)
   - Do you want a "View All Projects" link? (Currently: No, but could be added)

---

### 10. CALL-TO-ACTION SECTION

#### Content Questions:
1. **CTA Content**:
   - What should the CTA heading say? (Currently: "Ready to Transform Your Space?")
   - What should the CTA description say? (Currently: "We design spaces that feel like home...")
   - What should the button text say? (Currently: "Book a Consultation")

2. **CTA Styling**:
   - Do you like the dark background? (Currently: Yes, slate-dark)
   - Should it match the homepage CTA or be different?

#### Functionality Questions:
3. **CTA Action**:
   - Where should the CTA button link? (Currently: /contact)
   - Should it open a contact form, Calendly, or navigate to contact page?

---

## PART C: PROJECT DATA STRUCTURE

### 1. REQUIRED PROJECT INFORMATION

For each project, please provide or confirm:

1. **Basic Information**:
   - Project Title: _______________
   - City/Location: _______________
   - Year Completed: _______________
   - Area (sq ft): _______________
   - Budget Range: _______________
   - Project Type: _______________
   - Design Style: _______________
   - Spaces Included: _______________

2. **Media**:
   - Thumbnail Image: _______________
   - Gallery Images (list all): _______________
   - Hero/Banner Image (if different): _______________

3. **Content**:
   - Short Description (for cards): _______________
   - Full Description: _______________
   - Client Name (if public): _______________

4. **Extended Content** (for detail page):
   - Client Vision: _______________
   - Design Constraints: _______________
   - Design Vision: _______________
   - Final Outcome: _______________
   - Design Story elements: _______________
   - Materials used: _______________
   - Lighting details: _______________
   - Project statistics: _______________
   - Client testimonial (if available): _______________

---

## PART D: GENERAL PORTFOLIO PREFERENCES

### 1. CONTENT STRATEGY

1. **Project Selection**:
   - How many projects should be featured? (Currently: All projects shown)
   - Should there be featured/highlighted projects?
   - Do you want to hide certain projects from the public listing?

2. **Content Updates**:
   - How often will you add new projects?
   - Who will be responsible for adding project content?
   - Do you need a content management system or will it be code-based?

### 2. FUNCTIONALITY PREFERENCES

1. **Social Sharing**:
   - Do you want social sharing buttons on project pages? (Currently: No)
   - Which platforms? (Facebook, Twitter, LinkedIn, Pinterest, etc.)

2. **Print/PDF**:
   - Do you want a "Print" or "Download PDF" option for project pages? (Currently: No)

3. **Project Comparison**:
   - Do you want users to compare multiple projects side-by-side? (Currently: No)

4. **Favorites/Bookmarks**:
   - Do you want users to save/favorite projects? (Currently: No)

5. **Project Search**:
   - Do you want a search bar on the portfolio page? (Currently: No)
   - What should be searchable? (Title, description, city, style, etc.)

### 3. SEO & ANALYTICS

1. **SEO**:
   - Do you want custom meta descriptions for each project?
   - Should project pages have structured data (Schema.org)?
   - Do you want Open Graph images for social sharing?

2. **Analytics**:
   - Do you want to track which projects are viewed most?
   - Should we track filter usage?
   - Any specific analytics requirements?

---

## NOTES SECTION

Please use this space for any additional comments, preferences, or special requests related to the portfolio pages:

_____________________________________________________________________________
_____________________________________________________________________________
_____________________________________________________________________________
_____________________________________________________________________________
_____________________________________________________________________________

---

**Next Steps:**
1. Please fill out this questionnaire as completely as possible
2. Provide project images and content for each project you want to feature
3. Share any reference portfolio websites you admire
4. Let us know your priorities and timeline

Thank you for your time! We'll use your responses to create a portfolio section that showcases your work beautifully and helps potential clients find exactly what they're looking for.
