# CoreCraft — Progress Log

Single source of truth for what's built and what's next. Update at the end of every
working session. Newest entries on top.

---

## Current status (as of 2026-06-26)

### ✅ Done
- **Tooling**: Next.js 14.2.30 + TS strict + Tailwind v3 + pnpm 11 configured
- **Deploy**: Vercel pipeline working (resolved lockfile + React 18 / Sanity v3 compat)
- **Design tokens**: `tailwind.config.ts` extended with brand palette + display/body fonts
- **Sanity**: Studio mounted at `/studio`; schemas defined for `course`, `post`, `siteSettings`; client + GROQ queries + types in `lib/sanity/`
- **UI primitives**: `Button`, `Badge`, `Section`
- **Layout**: `Header`, `Footer`, `Nav`
- **Homepage** (`/`): assembled from `HeroSection`, `ServicesSection`, `CoursesPreview`, `StatsStrip`, `CtaSection`
- **Logo**: `components/ui/logo.tsx` — `mark` and `wordmark` variants; SVG with teal brackets + amber diamond
- **Mobile nav drawer**: `components/layout/nav-drawer.tsx` — overlay, slide animation, ESC key, body scroll lock, prefers-reduced-motion
- **Header**: updated to use `<Logo variant="wordmark" />` + hamburger button wired to drawer
- **OG images**: `app/opengraph-image.tsx` (root default) + `app/(marketing)/courses/[slug]/opengraph-image.tsx` (course variant with Sanity fetch)
- **Sitemap**: `app/sitemap.ts` — static routes + dynamic course/post slugs from Sanity
- **Robots**: `app/robots.ts` — allow all, disallow `/studio`, sitemap pointer

### 🟡 Stubbed (placeholder pages, ~15 lines each — no real content, no data wiring)
- `/courses` (catalog)
- `/courses/[slug]` (course detail)
- `/mentorship`
- `/about`
- `/blog`, `/blog/[slug]`
- `/contact`
- `/api/contact` (route exists, no handler logic)

### ❌ Not started
- Contact form UI with `react-hook-form` (dep installed, unused)
- `generateStaticParams` for `[slug]` routes
- `generateMetadata` on inner pages
- Real Sanity data seeded (courses, posts, site settings)
- Blog content / SEO posts
- Mobile responsiveness audit (375 / 768 / 1280)
- favicon
- Mobile responsiveness audit (375 / 768 / 1280)

---

## Next session — suggested pickup points

Pick one and go:
1. **Build out `/courses` catalog** — wire `COURSES_QUERY`, add `CourseCard`, `generateMetadata`
2. **Build `/courses/[slug]`** — full detail page + `generateStaticParams`
3. **Contact form** — implement `react-hook-form` UI + `/api/contact` handler
4. **Seed Sanity** — add real course data via `/studio` so pages have content to render
5. **`/about` + `/mentorship`** — content pages with real copy

---

## Session log

### 2026-06-26
- Logo component (`mark` + `wordmark` variants) — SVG brackets + diamond
- Mobile nav drawer with overlay, slide, ESC, scroll lock, reduced-motion support
- Header updated: Logo + hamburger wired to drawer
- OG images: root default + per-course variant (Sanity fetch)
- `sitemap.ts` (static + dynamic Sanity slugs) + `robots.ts`
- `pnpm lint` and `pnpm type-check` both pass clean

### 2026-06-24
- Scanned project, created this progress log
- Confirmed homepage + scaffolding done, inner pages still stubs
- Resolved Vercel deploy issues (downgrade `sanity` → v3, `next-sanity` → v9 for React 18)

