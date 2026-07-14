# CoreCraft - Progress Log

Single source of truth for what's built and what's next. Update at the end of every
working session. Newest entries on top.

---

## Current Status (as of 2026-07-14)

### Done

- **Supabase scaffolding**: `@supabase/supabase-js` + `@supabase/ssr` installed; `lib/supabase/` has browser client (`client.ts`), cookie-aware server client (`server.ts`, auth-ready for v2), service-role admin client (`admin.ts`), and `Database` types (`types.ts`) — all return `null` when env vars are missing, matching the Sanity fallback pattern; `supabase/schema.sql` defines `contact_submissions` and `enrollment_leads` tables with RLS enabled and no public policies (server-only writes via admin client); env vars documented in CLAUDE.md.
- **Tooling**: Next.js 14.2.30, TypeScript strict mode, Tailwind v3, pnpm 11 configured in project metadata.
- **Deploy**: Vercel pipeline previously verified after lockfile and React 18 / Sanity v3 compatibility fixes.
- **Design tokens**: `tailwind.config.ts` includes CoreCraft brand palette (`brand-navy`, `brand-navy-muted`, `brand-teal`, `brand-amber`, `brand-fog`, `brand-midnight`) plus display/body font families.
- **Sanity**: Studio mounted at `/studio`; schemas defined for `course`, `post`, and `siteSettings`; client, GROQ queries, and CMS types live in `lib/sanity/`; nullable client + `sanityFetch` / `sanityFetchOne` helpers keep pages rendering empty states when Sanity env vars are missing.
- **UI primitives**: `Button` with `asChild` support and `primary`, `secondary`, `outline`, and `ghost` variants; `Badge`; `Section`; `CourseCard`; `Logo`.
- **Layout**: `Header`, `Footer`, `Nav`, `MobileNav`, and `NavDrawer`.
- **Accessibility foundations**: skip link exists; mobile drawer has Escape handling, scroll lock, focus trap behavior, and reduced-motion handling; marketing layout no longer wraps pages in nested `<main>` landmarks.
- **Navigation IA**: primary nav now focuses on live user paths (`Courses`, `Mentorship`, `About`, `Contact`); `Blog` remains available in the footer as a secondary resource route.
- **Homepage** (`/`): redesigned hero with CoreCraft foundations roadmap visual, proof points, clearer CTAs, redesigned intent-based service cards, stats strip, featured course preview, and final CTA section.
- **`/courses` catalog**: redesigned from `designs/corecraft_course_layouts.html` inspiration while preserving brand colors; includes fog hero, guidance panel, course cards, empty state, and comparison table.
- **`/courses/[slug]` detail**: full page with navy hero, badges, outcomes checklist, numbered syllabus, prerequisites, audience, sticky enrollment card, "what happens next" microcopy, and final CTA strip.
- **`/contact`**: redesigned as the intro-call landing page; includes WhatsApp/email actions, "what happens next" steps, contact cards, location/language details, and a visible-label inquiry form using `mailto:`.
- **`/about`**: redesigned with stronger positioning, Abdullah Sherdy bio/proof panel, teaching philosophy, focus areas, and CTA.
- **`/blog` and `/blog/[slug]`**: redesigned from plain placeholders into intentional resource/empty states with recovery CTAs.
- **404 page**: redesigned with a creative, funny brand-colored `404` scene inspired by a cat/cable illustration; includes oversized numbers, CSS-drawn mascot, cable detail, motion with reduced-motion support, and recovery CTAs.
- **OG images**: root default `app/opengraph-image.tsx` and per-course `app/(marketing)/courses/[slug]/opengraph-image.tsx`.
- **Sitemap**: `app/sitemap.ts` includes static routes and dynamic course/post slugs from Sanity.
- **Robots**: `app/robots.ts` allows public routes, disallows `/studio`, and points to the sitemap.
- **UX audit documentation**: `Site scanning.md` contains the product/design audit, redesign strategy, design system proposal, and prioritized roadmap.
- **Mojibake cleanup**: visible corrupted dash/quote characters were removed from `app`, `components`, and `lib` during redesign.

### Stubbed / Deferred

- **`/mentorship`**: still intentionally deferred for a later redesign pass. Existing page remains functional but was not redesigned in the latest round.
- **`/api/contact`**: route exists and still returns `501`; current contact form uses `mailto:` instead of this endpoint.
- **Blog CMS rendering**: blog routes are now polished resource states, but real Sanity post list/detail rendering is not implemented yet.
- **Real Sanity content**: course/post/site settings content still needs to be seeded and reviewed in Studio.

### Not Started / Needs Follow-Up

- Create the actual Supabase project, run `supabase/schema.sql`, and set env vars locally + on Vercel.
- Wire `/api/contact` to insert into `contact_submissions` via the admin client (with `react-hook-form` on the frontend).
- Implement real contact form submission with `react-hook-form` and `/api/contact`.
- Redesign `/mentorship` with the same quality level as the new homepage/course/contact surfaces.
- Implement real `/blog` list and `/blog/[slug]` detail pages with Sanity data, `generateStaticParams`, and rich content rendering.
- Add favicon and final brand asset pass.
- Run visual QA at 375px, 768px, 1280px, and wide desktop.
- Run production build after local Node/pnpm availability is restored.
- Decide whether any empty folders or unused scaffolding should be removed.

---

## Next Session - Suggested Pickup Points

1. **Mentorship redesign**: build the dedicated mentorship page around outcomes, format, proof, FAQ, pricing/commitment clarity, and a contact CTA.
2. **Contact backend**: wire the inquiry form to `/api/contact` using `react-hook-form`, validation, loading/error/success states, and email/notification delivery.
3. **Sanity seeding**: add real course data and featured course settings so `/courses`, `/courses/[slug]`, and homepage course preview have production content.
4. **Blog implementation**: replace resource placeholders with real Sanity-powered post listing and post detail pages.
5. **Visual QA**: run browser review across breakpoints and tune spacing, text wrapping, and component density.

---

## Session Log

### 2026-07-14 (Supabase architecture scaffolding)

- Installed `@supabase/supabase-js` and `@supabase/ssr`.
- Created `lib/supabase/`:
  - `types.ts`: `Database` type with `contact_submissions` and `enrollment_leads` row/insert types.
  - `client.ts`: `createSupabaseBrowserClient()` for future client-side auth.
  - `server.ts`: `createSupabaseServerClient()` cookie-aware via `@supabase/ssr` so v2 auth works in server components/route handlers without call-site changes.
  - `admin.ts`: `createSupabaseAdminClient()` using `SUPABASE_SERVICE_ROLE_KEY` (server-only, bypasses RLS) for form/lead inserts.
  - All clients return `null` when env vars are unset (same graceful-fallback pattern as Sanity).
- Added `supabase/schema.sql`: both tables with status checks, indexes, RLS enabled, intentionally no public policies.
- Documented Supabase env vars in CLAUDE.md.
- `pnpm lint` and `pnpm type-check` passed.
- Next: create Supabase project, run schema, set env vars, then wire `/api/contact`.

### 2026-06-30 (404 creative redesign)

- Rebuilt `app/not-found.tsx` around the user's requested visual direction: large `4 0 4`, cat-style mascot, cable/plug gag, and playful copy.
- Kept implementation lightweight and editable with Tailwind/CSS instead of external assets.
- Used CoreCraft brand colors instead of the stock black/white reference: navy numbers, teal accents, amber cable detail, fog background.
- Added subtle cat/paw animation and `prefers-reduced-motion` support.
- Kept recovery actions: `Go home` and `Browse courses`.
- Verification note: static file read completed; automated `pnpm`/Node checks could not run in the current shell because `node`, `pnpm`, and `corepack` are unavailable.

### 2026-06-30 (sitewide redesign pass)

- Continued implementation from `Site scanning.md` redesign recommendations while preserving the existing CoreCraft color identity.
- Rerouted all `Book free intro call` CTAs away from `/mentorship` and toward `/contact`; mentorship-specific nav/footer links remain intentionally available.
- Redesigned `/contact` as the intro-call landing page:
  - stronger hero and value proposition
  - WhatsApp/email primary contact options
  - "What happens next" step cards
  - contact method cards
  - location/language details
  - visible-label inquiry form using `mailto:`
- Redesigned `/about`:
  - stronger CoreCraft positioning
  - Abdullah Sherdy profile/proof card
  - teaching philosophy section
  - focus-area cards
  - contact/course CTAs
- Redesigned `/blog` and `/blog/[slug]` as intentional resource states instead of bare "Coming soon" pages:
  - resource-library positioning
  - upcoming topic cards
  - useful recovery CTAs to courses/contact
- Redesigned `Footer`:
  - grouped Site links
  - grouped Learning links
  - "Start here" CTA
  - contact row
  - brand proof chips
- Fixed marketing layout landmark nesting by changing the wrapper from `<main id="main-content">` to `<div id="main-content">`, since individual pages render their own `<main>`.
- Added secondary `Browse courses` action to 404 page before the later full creative redesign.
- Replaced corrupted global metadata in `app/layout.tsx` with clean ASCII titles/descriptions.
- Static scans confirmed:
  - no visible mojibake remains in `app`, `components`, or `lib`
  - no visible `Coming soon` placeholders remain in `app`, `components`, or `lib`
  - remaining `/mentorship` references are intentional page/nav/SEO/sitemap references, not intro-call CTA redirects
- Verification note: automated checks remained blocked because the shell does not expose usable `node`, `pnpm`, or `corepack`.

### 2026-06-30 (homepage and course redesign pass)

- Redesigned `HeroSection`:
  - new headline focused on learning fundamentals
  - proof points for 1-on-1 guidance, Arabic/English, and practice-first learning
  - CoreCraft foundations roadmap visual
  - primary CTA changed to `Book free intro call`
  - secondary CTA changed to `Explore foundations track`
- Redesigned `ServicesSection` around user intent:
  - "Need help now" -> private mentorship/contact path
  - "Want a full path" -> private courses
  - "Learn with peers" -> group courses
- Updated `StatsStrip` labels to improve trust and clarity.
- Redesigned `CtaSection` with clearer next-step messaging and stronger CTA hierarchy.
- Updated `CourseCard` hover and beginner badge tint while preserving the original brand system.
- Redesigned `/courses` catalog using `designs/corecraft_course_layouts.html` as inspiration:
  - fog hero
  - foundations chip
  - "Not sure where to start?" guidance card
  - improved empty state
  - course catalog heading
  - course card grid
  - comparison table for track, level, duration, and action
- Updated `CoursesPreview`:
  - stronger section headline
  - polished empty state
  - icon-based `See all courses` link
- Updated `/courses/[slug]`:
  - CTA copy standardized
  - sticky enrollment card gained "What happens next" microcopy
  - final CTA copy changed to "free intro call"
- Added `outline` variant to `Button`.
- Split navigation data into `primaryNavLinks` and `footerNavLinks`; Blog moved out of primary nav until real content exists.
- Added active state to mobile navigation drawer.

### 2026-06-30 (design audit documentation)

- Created `Site scanning.md` with:
  - executive summary
  - UI/UX scores
  - strengths and weaknesses
  - detailed UX audit
  - UI evaluation table
  - redesign recommendations
  - component-by-component improvements
  - visual design system proposal
  - prioritized action plan
  - expected usability, accessibility, and business benefits

### 2026-06-27 (OG image fix)

- Fixed OG image not showing when sharing Vercel links: the homepage, `/courses`, and `/courses/[slug]` each set an explicit `openGraph: { title, description, url }` without `images`, which overrode the `opengraph-image.tsx` file-convention injection. Removed the explicit `openGraph` blocks so the file convention auto-injects `og:image` and `twitter:image`.
- Fixed `undefined` in canonical URLs by adding a `NEXT_PUBLIC_SITE_URL` fallback.
- Note: OG image route returns 500 on Windows dev only due to an `@vercel/og` default-font path issue; works on Vercel Linux.
- `pnpm lint` and `pnpm type-check` passed at that time.

### 2026-06-27 (500 fix + Button asChild)

- Fixed `GET / 500`: `createClient` threw `Configuration must contain projectId` when `NEXT_PUBLIC_SANITY_PROJECT_ID` was unset.
- Made Sanity client nullable and added `sanityFetch` / `sanityFetchOne` helpers returning `[]` / `null` when unconfigured.
- Routed fetch sites through the helpers so pages render empty-state fallbacks instead of crashing.
- Fixed `Button` `asChild` prop leak and invalid `<button><a>` nesting by implementing a minimal Slot via `cloneElement`.
- Cleared corrupted `.next` cache and verified main routes returned 200 at that time.
- `pnpm lint` and `pnpm type-check` passed at that time.

### 2026-06-27 (courses section build)

- Built full `/courses/[slug]` detail page: navy hero, track/level/duration badges, outcomes checklist, numbered syllabus, prerequisites, audience, sticky enrollment card, and navy CTA strip.
- Added `generateStaticParams`, `generateMetadata`, and `notFound()` behavior for missing courses.
- Replaced hardcoded homepage `CoursesPreview` cards with `FEATURED_COURSES_QUERY`.
- Fixed `/courses` catalog grid breakpoints.
- Verified `CourseCard` matched the original course layout spec.
- `pnpm lint` and `pnpm type-check` passed at that time.

### 2026-06-27

- Audited filesystem vs progress log and reconciled drift.
- Confirmed `/courses` catalog was built and moved it out of stubbed status.
- Noted `/courses/[slug]` still needed detail build at that point.
- Noted empty `components/courses/` folder.

### 2026-06-26

- Built logo component with `mark` and `wordmark` variants.
- Built mobile nav drawer with overlay, slide, Escape handling, scroll lock, and reduced-motion support.
- Updated header with logo and hamburger wired to drawer.
- Added root and per-course OG image routes.
- Added sitemap and robots routes.
- `pnpm lint` and `pnpm type-check` passed at that time.

### 2026-06-24

- Scanned project and created this progress log.
- Confirmed homepage and scaffolding were done while inner pages were still stubs.
- Resolved Vercel deploy issues by aligning Sanity/next-sanity versions with React 18.
