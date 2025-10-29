# CLAUDE.md - WholeCare Marketing Website

## Project Overview

This is a **static marketing website** for WholeCare, a senior care coordination app. This is NOT a web application - it's a simple, fast-loading HTML/CSS/JavaScript landing page designed to showcase the product and attract users.

**Key Point:** This project has NO backend, NO database, NO build process beyond basic HTML/CSS/JS. Keep it simple.

## Project Type
- Static marketing/landing page
- Pure HTML/CSS/JavaScript (no frameworks)
- No CMS, no backend
- Optimized for performance and SEO

## Brand Identity

**Colors:**
- Primary Teal: `#4A9D9C` (from logo)
- Primary Coral/Orange: `#E15431` (from logo, accent)
- Warm Yellow: `#F8DD96` (highlight color)
- Dark Gray: `#666666` (body text)
- White: `#FFFFFF`
- Dark backgrounds: `#2C3E50` or similar

**Typography:**
- Headings: "Reenie Beanie" (handwritten style for hero), "Montserrat" (modern sans-serif)
- Body: "Open Sans" (clean, readable)
- Ensure web-safe fallbacks

**Logo:**
- Color logo for light backgrounds: `assets/images/wholecare-logo-color.jpg`
- White logo for dark backgrounds: `assets/images/wholecare-logo-white.png`

## File Structure

```
/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   ├── main.css       # Main styles
│   │   └── responsive.css # Media queries
│   ├── js/
│   │   └── main.js        # Simple interactions
│   └── images/
│       ├── logos/         # Logo files
│       ├── icons/         # Feature icons
│       ├── photos/        # Hero and story photos
│       └── ...
├── CLAUDE.md              # This file
└── TBD.md                 # Open questions/decisions
```

## Content Sections

The website includes these key sections:
1. **Hero** - "Individualized support for a unified circle of care"
2. **The Issue** - Problems caregivers face (miscommunication, scheduling, medication, etc.)
3. **Our Solution** - How WholeCare simplifies caregiving
4. **Our Story** - Founder's personal caregiving experience
5. **Mission** - Platform overview and values
6. **Features** - Mobile app highlights (HIPAA compliance, cross-device, etc.)
7. **Footer/CTA** - Contact and call-to-action

## Design Guidelines

**IMPORTANT Design Principles:**
- Clean, modern, professional aesthetic
- Mobile-first responsive design
- Generous whitespace
- Large, readable typography
- Accessibility (WCAG AA minimum)
- Fast loading (no heavy frameworks)
- Simple, purposeful animations

**Layout:**
- Max content width: 1200px
- Generous padding/margins
- Card-based feature sections
- Full-width hero with background image or gradient

## Development Commands

```bash
# Preview locally (simple HTTP server)
python3 -m http.server 8000
# or
npx serve

# No build process needed - just open index.html in browser
```

## Code Style

**HTML:**
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Meta tags for SEO and social sharing

**CSS:**
- Mobile-first approach
- BEM naming convention optional but preferred
- Avoid !important
- Use CSS custom properties for theme colors
- Smooth transitions for hover states

**JavaScript:**
- Vanilla JS only (no frameworks)
- Progressive enhancement
- Minimal, purposeful interactions
- Smooth scroll navigation
- Mobile menu toggle
- Simple scroll animations

## What This Project Is NOT

- NOT a React/Vue/Angular app
- NOT using a build tool (Webpack, Vite, etc.)
- NOT using a CSS framework (Bootstrap, Tailwind, etc.)
- NOT connected to a backend or database
- NOT a CMS or dynamic content system

Keep it simple, fast, and maintainable.

## Performance Goals

- Page load under 2 seconds
- Lighthouse score 90+ across all categories
- Optimized images (WebP with fallbacks)
- Minimal JavaScript
- No external dependencies if possible (self-host fonts/icons)

## SEO Considerations

- Proper meta tags (title, description, OG tags)
- Structured data for organization
- Fast load times
- Mobile-friendly
- Semantic HTML
- Descriptive alt text

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Notes

- Original content sourced from WaybackMachine archive
- Images saved locally in `assets/images/`
- Keep the personal, human-centered tone from original site
- Emphasize the founder's caregiving experience and expertise
