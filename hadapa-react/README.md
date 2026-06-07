# Hadapa Services — Production React Website

## Quick Start

```bash
cd hadapa-react
cp .env.example .env          # then fill in your VITE_FORMSPREE_ID
npm install
npm run dev                   # → http://localhost:5173
```

## Commands

| Command             | Description                              |
|---------------------|------------------------------------------|
| `npm run dev`       | Start local dev server                   |
| `npm run build`     | TypeScript check + production build      |
| `npm run preview`   | Preview the production build locally     |
| `npm run test`      | Run all tests (Vitest)                   |
| `npm run test:ui`   | Run tests with Vitest UI                 |
| `npm run lint`      | ESLint across all TypeScript files       |
| `npm run type-check`| TypeScript type check (no emit)          |

## Deploy to Vercel (one command)

```bash
npm i -g vercel
vercel --prod
```

`vercel.json` handles SPA routing rewrites and sets production security headers automatically.

## Project Structure

```
hadapa-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.tsx            ← Sticky nav, scroll blur, mobile menu
│   │   ├── Hero.tsx           ← Full-screen hero + canvas particle animation
│   │   ├── Services.tsx       ← 6 cards (reused on Home + Services page)
│   │   ├── CaseStudies.tsx    ← 3 client case studies with metrics
│   │   ├── Testimonials.tsx   ← 3 testimonials with star ratings
│   │   ├── CTA.tsx            ← CTA band with ambient glow
│   │   ├── Footer.tsx         ← 4-column dark footer
│   │   ├── SEO.tsx            ← Per-page title, description, OG, Twitter Card
│   │   └── ErrorBoundary.tsx  ← Class-based crash fallback UI
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx        ← Real Formspree delivery + loading/error states
│   │   └── NotFound.tsx       ← Proper 404
│   ├── test/
│   │   ├── setup.ts
│   │   ├── Nav.test.tsx
│   │   ├── Contact.test.tsx   ← Tests loading, success, error, retry states
│   │   ├── NotFound.test.tsx
│   │   └── ErrorBoundary.test.tsx
│   ├── App.tsx                ← HelmetProvider + ErrorBoundary + lazy routes
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .eslintrc.cjs
├── vercel.json               ← SPA rewrites + security headers + asset caching
├── tsconfig.json
└── vite.config.ts            ← @ path alias + Vitest config
```

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **React Router v6** — client-side routing
- **Tailwind CSS v3** — utility-first design system
- **react-helmet-async** — per-page SEO meta + OG tags
- **Formspree** — real email delivery, zero backend needed
- **Vite 5** — build tool with `@` path alias
- **Vitest** + **React Testing Library** — unit + integration tests
- **Canvas API** — particle animation (no library)
- **IntersectionObserver** — scroll-triggered reveals (no library)

## Setting Up the Contact Form

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy the form ID (e.g. `xpwzabcd`)
3. Add it to your `.env` file:
   ```
   VITE_FORMSPREE_ID=xpwzabcd
   ```
4. That's it — submissions go straight to your inbox

In dev mode (no env var set), the form simulates success locally so you can still develop and test.

## Customization

- **Colors**: edit `tailwind.config.js` → `theme.extend.colors.brand`
- **Content**: each component's data is a typed array at the top of the file
- **SEO domain**: update `SITE_URL` in `src/components/SEO.tsx`
- **Analytics**: uncomment `VITE_GA_ID` in `.env.example` and add a GA4 snippet to `index.html`
