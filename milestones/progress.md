# CoreCraft — Progress Log

Single source of truth for what's built and what's next. Update at the end of every
working session. Newest entries on top.

---

## Current status (as of 2026-06-27)

### ✅ Done
- **Tooling**: Next.js 14.2.30 + TS strict + Tailwind v3 + pnpm 11 configured
- **Deploy**: Vercel pipeline working (resolved lockfile + React 18 / Sanity v3 compat)
- **Design tokens**: `tailwind.config.ts` extended with brand palette + display/body fonts
- **Sanity**: Studio mounted at `/studio`; schemas defined for `course`, `post`, `siteSettings`; client + GROQ queries + types in `lib/sanity/`; **nullable client + `sanityFetch`/`sanityFetchOne` helpers** so pages render empty states instead of 500 when `NEXT_PUBLIC_SANITY_PROJECT_ID` is unset
- **UI primitives**: `Button` (Radix-style `asChild` Slot — no more `<a>` nested in `<button>`), `Badge`, `Section`, `CourseCard`, `Logo`
- **Layout**: `Header`, `Footer`, `Nav`, `NavDrawer` (mobile)
- **Homepage** (`/`): `HeroSection`, `ServicesSection`, `CoursesPreview` (Sanity `FEATURED_COURSES_QUERY`, shared `CourseCard`), `StatsStrip`, `CtaSection`
- **`/courses` catalog**: wired to `COURSES_QUERY`, renders `CourseCard` grid (1/2/3-col at sm/md/lg), includes `metadata` with OG + canonical, empty-state fallback
- **`/courses/[slug]` detail**: full page — navy hero (track/level/duration badges, H1, excerpt), 65/35 body (outcomes checklist grid, numbered syllabus, prerequisites arrow list, audience) + sticky enrollment card (amber CTA, quick stats), navy CTA strip; `generateStaticParams` + `generateMetadata`; OG image auto-resolves from `opengraph-image.tsx`
- **OG images**: `app/opengraph-image.tsx` (root default) + `app/(marketing)/courses/[slug]/opengraph-image.tsx` (per-course, Sanity fetch)
- **Sitemap**: `app/sitemap.ts` — static routes + dynamic course/post slugs from Sanity
- **Robots**: `app/robots.ts` — allow all, disallow `/studio`, sitemap pointer

### 🟡 Stubbed (placeholder pages, ~15–22 lines each — no real content, no data wiring)
- `/mentorship`
- `/about`
- `/blog`, `/blog/[slug]`
- `/contact`
- `/api/contact` (route exists, no handler logic)

### ❌ Not started
- Contact form UI with `react-hook-form` (dep installed, unused)
- `generateStaticParams` for `/blog/[slug]`
- `generateMetadata` on remaining inner pages (`/about`, `/mentorship`, `/contact`, `/blog`, `/blog/[slug]`)
- Real Sanity data seeded (courses, posts, site settings)
- Blog content / SEO posts
- Mobile responsiveness audit (375 / 768 / 1280)
- Favicon
- Empty `components/courses/` folder — decide if needed or remove

---

## Next session — suggested pickup points

Pick one and go:
1. **Seed Sanity** — add real course data via `/studio` so `/courses`, `/courses/[slug]`, and the homepage featured grid have content to render
2. **Contact form** — implement `react-hook-form` UI + `/api/contact` handler (the course detail CTAs already link to `/contact`)
3. **`/about` + `/mentorship`** — content pages with real copy + `generateMetadata`
4. **Blog scaffolding** — `/blog` list + `/blog/[slug]` with `generateStaticParams` / `generateMetadata`

---

## Session log

### 2026-06-27 (OG image fix)
- Fixed OG image not showing when sharing Vercel links: the homepage, `/courses`, and `/courses/[slug]` each set an explicit `openGraph: { title, description, url }` without `images`, which overrode the `opengraph-image.tsx` file-convention injection (Next.js dropped the `og:image` meta). Removed the explicit `openGraph` blocks so the file convention auto-injects `og:image` + `twitter:image` (verified in rendered HTML); `og:title`/`og:description` now auto-derive from `title`/`description`
- Fixed `undefined` in canonical URLs: `/courses` and `/courses/[slug]` used `${process.env.NEXT_PUBLIC_SITE_URL}/...` without a fallback → emitted `undefined/courses`. Added `?? 'https://corecraft.io'` fallback (matches the homepage pattern)
- Note: OG image *route* returns 500 on Windows dev only (`@vercel/og` default-font `fileURLToPath` path bug); works fine on Vercel (Linux) — not a production issue
- `pnpm lint` and `pnpm type-check` both pass clean

### 2026-06-27 (500 fix + Button asChild)
- Fixed `GET / 500`: `createClient` threw `Configuration must contain projectId` when `NEXT_PUBLIC_SANITY_PROJECT_ID` was unset (no `.env`). Made Sanity client nullable + added `sanityFetch`/`sanityFetchOne` helpers that return `[]`/`null` when unconfigured; routed all 6 fetch sites (`CoursesPreview`, `/courses`, `/courses/[slug]` x3, `sitemap`, OG image) through them. Pages now render empty-state fallbacks instead of crashing
- Fixed `Button` `asChild` prop leak (was spreading onto the DOM → React warning + invalid `<button><a>` nesting). Implemented a minimal Slot via `cloneElement`; flipped all call sites from `asChild={false}` to `asChild`
- Cleared corrupted `.next` cache (stale vendor chunks); clean build verified `GET / 200`, `/courses`, `/about`, `/contact` all 200
- `pnpm lint` and `pnpm type-check` both pass clean

### 2026-06-27 (courses section build)
- Built full `/courses/[slug]` detail page: navy hero (track/level/duration badges), 65/35 body (outcomes checklist, numbered syllabus, prerequisites arrow list, audience), sticky enrollment card (amber CTA + quick stats), navy CTA strip
- Added `generateStaticParams` (COURSE_SLUGS_QUERY) + `generateMetadata` (title/excerpt, canonical, OG) on `[slug]`; `notFound()` on missing course
- Replaced hardcoded homepage `CoursesPreview` cards with `FEATURED_COURSES_QUERY` fetch — now a server component using shared `CourseCard`
- Fixed `/courses` catalog grid breakpoints to 1/2/3-col at sm/md/lg per spec
- Verified `CourseCard` already matched spec (teal top border, level tints green/amber/red, `<Link>` root)
- `pnpm lint` and `pnpm type-check` both pass clean

### 2026-06-27
- Audited filesystem vs progress log; reconciled drift
- Confirmed `/courses` catalog is built (Sanity-wired, metadata, CourseCard grid) — moved out of Stubbed
- `/courses/[slug]` still a 22-line stub
- Noted empty `components/courses/` folder

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

