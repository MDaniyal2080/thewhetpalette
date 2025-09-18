# The Whet Palette — Premium Next.js Site

A premium, responsive editorial site built with Next.js 14 (App Router) and Tailwind CSS.

## Tech
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS + Typography
- Framer Motion animations
- next-themes for dark mode
- Lucide icons

## Getting Started
1. Node.js 18+ recommended
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Structure
- `app/` — routes, layouts, SEO (`robots.ts`, `sitemap.ts`)
- `components/` — UI components (`site-header`, `site-footer`, `article-card`, etc.)
- `content/` — sample post data (`posts.ts`)
- `public/` — assets (`favicon.svg`, `og.svg`)
- `tailwind.config.ts` — theme, fonts, brand colors

## Customize
- Update brand colors in `tailwind.config.ts`
- Add real posts via a CMS or MDX
- Replace `content/posts.ts` with your data source
- Swap fonts in `app/layout.tsx`

## Deploy
Export a production build and deploy anywhere that supports Node:
```bash
npm run build && npm start
```
