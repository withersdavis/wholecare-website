# WholeCare Marketing Website

A modern, responsive marketing website for WholeCare - a senior care coordination app providing individualized support for a unified circle of care.

## Project Overview

This is a **static HTML/CSS/JavaScript website** - no frameworks, no build process, no backend. Just clean, fast-loading code optimized for performance and SEO.

## Features

- Fully responsive design (mobile-first)
- Smooth scroll navigation
- Mobile menu with hamburger toggle
- Scroll reveal animations
- Modern, clean aesthetic
- Optimized images
- SEO-friendly structure
- Accessible (WCAG AA compliant)

## Project Structure

```
wholecare/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── main.css       # All styles in one file
│   ├── js/
│   │   └── main.js        # All JavaScript interactions
│   └── images/
│       ├── logos/         # WholeCare logo files
│       ├── icons/         # Feature and issue icons
│       └── photos/        # Story and hero photos
├── CLAUDE.md              # Development guidelines
├── TBD.md                 # Open decisions and questions
└── README.md              # This file
```

## Getting Started

### View Locally

The simplest way to view the website locally:

1. **Just open the file:**
   ```bash
   open index.html
   ```
   Double-click `index.html` in Finder or your file browser.

2. **Or use a local server (recommended):**

   Using Python:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

   Using npx:
   ```bash
   npx serve
   ```

   Using PHP:
   ```bash
   php -S localhost:8000
   ```

### Making Changes

Since this is pure HTML/CSS/JS:

1. Edit files directly in your favorite code editor
2. Save changes
3. Refresh your browser to see updates
4. No build process needed!

## Brand Colors

- **Primary Teal:** `#4A9D9C`
- **Accent Coral:** `#E15431`
- **Highlight Yellow:** `#F8DD96`
- **Dark Gray:** `#666666`
- **Dark Background:** `#2C3E50`

## Typography

- **Headings:** Montserrat (Google Fonts)
- **Body:** Open Sans (Google Fonts)
- **Hero Handwritten:** Reenie Beanie (Google Fonts)

## Page Sections

1. **Hero** - Main value proposition with CTA buttons
2. **The Issue** - Problems caregivers face (3 cards + detailed list)
3. **Our Solution** - How WholeCare helps
4. **Our Story** - Timeline of founder's experience
5. **Mission** - Platform overview and values
6. **Features** - 6 key feature cards
7. **CTA** - Call-to-action section
8. **Footer** - Links and copyright

## Deployment Options

### Option 1: Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the entire `wholecare` folder
3. Done! Free HTTPS and custom domain support.

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repo
3. Enable GitHub Pages in Settings
4. Your site will be live at `username.github.io/repo-name`

### Option 3: Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import the project
3. Deploy with one click

### Option 4: Any Web Host
Upload all files via FTP/SFTP to any web hosting provider. The website will work anywhere that serves HTML files.

## Customization Guide

### Changing Text Content
- Edit `index.html` directly
- All content is in semantic HTML tags
- Search for the section you want to modify

### Changing Colors
- Edit CSS custom properties in `assets/css/main.css` (lines 1-30)
- Colors are defined once and used throughout

### Changing Images
- Replace images in `assets/images/` folders
- Keep the same filenames, or update `src` attributes in `index.html`

### Adding New Sections
1. Add HTML to `index.html`
2. Add corresponding styles to `assets/css/main.css`
3. Update navigation in header if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Page load: < 2 seconds
- Minimal JavaScript
- Optimized images
- No external dependencies except Google Fonts

## SEO Features

- Semantic HTML5 markup
- Meta tags for social sharing (Open Graph)
- Descriptive alt text on all images
- Proper heading hierarchy
- Fast load times
- Mobile-friendly

## Next Steps / TBD

See `TBD.md` for open questions and decisions needed:
- Contact form integration
- App store links
- Analytics setup
- Domain and hosting
- Privacy policy page
- And more...

## Credits

- Original content from WholeCare (2023 archive)
- Design and development: 2025 refresh
- Fonts: Google Fonts
- Icons: From original WholeCare assets

## License

All content © 2025 WholeCare. All rights reserved.

---

**Need Help?**

Check the `CLAUDE.md` file for development guidelines and project specifics.
