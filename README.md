# Yoga Instructor — Next.js + Tailwind

A clean, responsive landing page inspired by the "Yoga Instructor" demo, built with **Next.js (App Router)** and **Tailwind CSS**. No TypeScript.

## Quick Start

```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

Open http://localhost:3000

## What’s inside

- App Router (`/app`)
- Tailwind configured (`globals.css`)
- Components: Header, Hero, Services, Stats, Benefits, Testimonials, CTA, Footer
- Simple contact form (no backend wired—hook to your service as needed)
- Placeholder images in `/public/images`

## Customize

- Edit text/content in the components or in `data_content.js`.
- Replace images in `public/images` with your assets.
- Colors: update `tailwind.config.js` (`theme.extend.colors.primary`).

## Notes

- Fonts are system defaults. If you want Google Fonts, add `next/font` in `app/layout.jsx`.
- No external animation libs; add `framer-motion` if you want advanced effects.