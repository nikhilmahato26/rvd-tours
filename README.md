# R.V.D Best Quality Trip — Travel & Tourism Website

A premium, modern, high-converting travel agency website built as a single-page React app.

**Stack:** React + Vite + Tailwind CSS + React Router DOM + Framer Motion + Swiper + React Hook Form + React Icons + Lucide React.

---

## Quick Start

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

> Requires Node.js 18+.

---

## Where to Edit Content

**Everything is centralized in one file:**

```
src/data/siteContent.js
```

This holds the company details, consultants, phone numbers, address, navigation,
hero background slides, experience cards, posters, destinations, packages,
why-choose-us features, testimonials, FAQ and form options. Change it there and
it updates everywhere — no need to touch component code.

### Swapping images

The hero backgrounds and card images currently use Unsplash URLs (placeholders).
To use your own:

1. Drop files into `src/assets/images/`.
2. Import them at the top of `siteContent.js`, e.g.
   ```js
   import kashmir from '../assets/images/kashmir.jpg'
   ```
3. Replace the relevant `img:` URL string with the imported variable.

### Adding real A4 posters

Poster cards preserve the **A4 portrait ratio and are never cropped**. By default
each poster renders a branded placeholder. To use real poster artwork:

1. Put the A4 poster image in `src/assets/posters/`.
2. In `siteContent.js`, set the poster's `img` field to the imported image
   (set it back to `null` to use the branded placeholder again).

### Phone / WhatsApp / Instagram / Address

Edit the `company` and `consultants` objects in `siteContent.js`. All `tel:`,
`wa.me` and map links are generated automatically from those values
(see `src/utils/links.js`).

---

## Project Structure

```
src/
├── assets/           images, posters, icons
├── components/
│   ├── ui/           Button, Badge, SectionTitle, GlassCard,
│   │                 DestinationCard, PackageCard, PosterCard, Logo, FloatingActions
│   ├── layout/       Navbar, Footer, MobileMenu
│   └── sections/     Hero, PosterCarousel, Destinations, WhyChooseUs,
│                     Packages, Testimonials, CTASection, ContactSection, FAQ
├── data/             siteContent.js  ← all content lives here
├── hooks/            useScrolled, useLockBodyScroll
├── utils/            links.js, motion.js, icons.js
├── pages/            Home.jsx
├── App.jsx
└── main.jsx
```

---

## Notes

- **Light mode only**, luxury travel-startup aesthetic with glassmorphism, soft
  shadows and Framer Motion scroll reveals throughout.
- **Contact form** uses React Hook Form. On submit it opens a pre-filled WhatsApp
  message to the primary consultant — no backend required. To wire it to an email
  service or API instead, edit `onSubmit` in
  `src/components/sections/ContactSection.jsx`.
- **Icons** are imported through `src/utils/icons.js` (a curated registry) rather
  than a wildcard import, which keeps the JS bundle small.
- Fully responsive (320px → 1440px+), no horizontal scroll.
- Routing is set up via React Router so additional pages can be added easily.
```
```
