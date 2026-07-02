# CLAUDE.md — CoreCraft Website

This file is the single source of truth for building the CoreCraft marketing and
course catalog website. Read it fully before writing any code or creating any file.

**At the start of every session, also read `.claude/milestones/progress.md`** — it
tracks what's built, what's stubbed, and the suggested pickup point for next work.
Update it at the end of every session before stopping.

---

## Project overview

CoreCraft is a coding education company that teaches programming fundamentals:
Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms.
Services: private mentorship, private courses, and group courses.

The website is a public-facing marketing and enrollment site. No student dashboard,
no auth, no payment processing in v1 — those come later. The goals are:

1. Present CoreCraft's services clearly to prospective students.
2. Rank on Google for fundamentals-focused coding education keywords.
3. Let the owner update course content without touching code.

---

## Tech stack

| Layer         | Choice                  | Notes                                      |
|---------------|-------------------------|--------------------------------------------|
| Framework     | Next.js 14 (App Router) | Server components by default               |
| Language      | TypeScript (strict)     | No `any`, no `@ts-ignore`                  |
| Styling       | Tailwind CSS v3         | Extended with CoreCraft design tokens      |
| Fonts         | `next/font/google`      | Space Grotesk + Inter, no layout shift     |
| CMS           | Sanity v3               | Embedded studio at `/studio`               |
| Icons         | `lucide-react`          | Outline style only                         |
| Forms         | `react-hook-form`       | Contact form only; no backend in v1        |
| Deployment    | Vercel                  | Auto-deploy on `main` branch push          |
| Package mgr   | `pnpm`                  | Always use pnpm, never npm or yarn         |

---

## Commands

```bash
pnpm dev          # start dev server on :3000
pnpm build        # production build
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
pnpm format       # prettier --write .
```

Run `pnpm lint && pnpm type-check` before considering any task done.

---

## Environment variables

```
# .env.local (never commit)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=        # server-side reads for draft previews
NEXT_PUBLIC_SITE_URL=https://corecraft-one.vercel.app
```

Never hardcode these values. Always read from `process.env`.
Fail fast at startup if required vars are missing.

---

## Project structure

```
corecraft/
├── app/
│   ├── (marketing)/               # Public-facing pages
│   │   ├── layout.tsx             # Marketing layout: header + footer
│   │   ├── page.tsx               # / — homepage
│   │   ├── courses/
│   │   │   ├── page.tsx           # /courses — catalog
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # /courses/[slug] — single course
│   │   ├── mentorship/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx           # /blog — post list
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── (studio)/                  # Sanity Studio
│   │   └── studio/
│   │       └── [[...tool]]/
│   │           └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts           # Contact form endpoint
│   ├── layout.tsx                 # Root layout (fonts, metadata defaults)
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/                        # Primitives: Button, Badge, Card, etc.
│   ├── sections/                  # Page sections: Hero, CourseGrid, etc.
│   └── layout/                    # Header, Footer, Nav
├── lib/
│   ├── sanity/
│   │   ├── client.ts              # Sanity client config
│   │   ├── queries.ts             # GROQ queries
│   │   └── types.ts               # Generated/manual Sanity types
│   └── utils.ts                   # cn(), formatDate(), etc.
├── sanity/
│   ├── schemas/                   # Document type schemas
│   └── sanity.config.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md
```

---

## Design tokens

These are the CoreCraft brand values. Every color, font, and spacing decision must
derive from this system. Do not introduce new colors or font families.

### Color palette

| Token              | Hex       | Tailwind class     | Usage                               |
|--------------------|-----------|--------------------|-------------------------------------|
| Deep Navy          | `#1A2B4C` | `brand-navy`       | Primary brand, headings, navbar bg  |
| Signal Teal        | `#00C4B3` | `brand-teal`       | Accent, links, hover states, logo   |
| Spark Amber        | `#F4A622` | `brand-amber`      | Primary CTA buttons, highlights     |
| Fog White          | `#F0F4FB` | `brand-fog`        | Section backgrounds, card surfaces  |
| Midnight           | `#0D1526` | `brand-midnight`   | Footer bg, dark hero sections       |
| Navy muted         | `#2D4170` | `brand-navy-muted` | Secondary text on dark backgrounds  |

### Typography

Two fonts, loaded via `next/font/google`. No other font families.

```
Display / headings → Space Grotesk, weight 500 and 700
Body / UI / labels → Inter, weight 400 and 500
Code snippets      → font-mono (system monospace stack)
```

Font CSS variables (set in root layout):
```
--font-display: Space Grotesk
--font-body: Inter
```

### Type scale

| Role         | Size     | Weight | Font     | Tailwind                        |
|--------------|----------|--------|----------|---------------------------------|
| H1           | 56px     | 700    | Display  | `text-5xl font-bold font-display`|
| H2           | 36px     | 700    | Display  | `text-4xl font-bold font-display`|
| H3           | 24px     | 500    | Display  | `text-2xl font-medium font-display`|
| H4           | 18px     | 500    | Display  | `text-lg font-medium font-display` |
| Body large   | 18px     | 400    | Body     | `text-lg font-body`             |
| Body         | 16px     | 400    | Body     | `text-base font-body`           |
| Small / label| 13px     | 500    | Body     | `text-sm font-medium font-body` |

### Tailwind config extension

```ts

// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:        '#1A2B4C',
          'navy-muted':'#2D4170',
          teal:        '#00C4B3',
          amber:       '#F4A622',
          fog:         '#F0F4FB',
          midnight:    '#0D1526',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      borderRadius: {
        brand: '0.75rem',
      },
    },
  },
  plugins: [],
};

export default config; 

```

---

## Font setup in root layout

```tsx
// app/layout.tsx
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-brand-navy antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## Architecture rules

### Server vs client components

Use React Server Components by default. Add `'use client'` only when the component
needs browser APIs, event handlers, or React state/effects. Never add it "just in case".

```
'use client' is justified for:
  - Interactive UI (dropdowns, modals, accordions, carousels)
  - Forms (contact form, search)
  - Hooks (useState, useEffect, useRouter for navigation events)

'use client' is NOT justified for:
  - Fetching and displaying Sanity data  → do this in server components
  - Static layout components             → server components
  - Components that only receive props   → server components
```

### Data fetching

All Sanity queries go through `lib/sanity/queries.ts`. Fetch in server components
or `generateStaticParams` / `generateMetadata`. No client-side Sanity queries.

```tsx
// lib/sanity/client.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
});

// lib/sanity/queries.ts
export const COURSES_QUERY = `
  *[_type == "course" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, title, slug, track, level, duration, excerpt, isFeatured
  }
`;

export const COURSE_BY_SLUG_QUERY = `
  *[_type == "course" && slug.current == $slug][0] {
    _id, title, slug, track, level, duration, description, 
    syllabus, prerequisites, instructor, isFeatured
  }
`;
```

### Static generation

All marketing pages are statically generated. Use `generateStaticParams` for
dynamic routes (`/courses/[slug]`, `/blog/[slug]`). Revalidate on-demand via
Sanity webhooks, not time-based ISR.

```tsx
export async function generateStaticParams() {
  const courses = await client.fetch<{ slug: string }[]>(COURSE_SLUGS_QUERY);
  return courses.map((c) => ({ slug: c.slug }));
}
```

### Metadata

Every page must export a `generateMetadata` function or a static `metadata` object.
No page should fall back to the root layout defaults.

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await client.fetch<Course>(COURSE_BY_SLUG_QUERY, { slug: params.slug });
  return {
    title:       `${course.title} — CoreCraft`,
    description: course.excerpt,
    openGraph: {
      title:       course.title,
      description: course.excerpt,
      url:         `${process.env.NEXT_PUBLIC_SITE_URL}/courses/${params.slug}`,
    },
  };
}
```

---

## Component conventions

### Naming
- Files: `kebab-case.tsx` — `course-card.tsx`, `hero-section.tsx`
- Components: PascalCase — `CourseCard`, `HeroSection`
- One component per file. No barrel re-exports unless the folder has 4+ exports.

### Props pattern

Use explicit interface, not inline type literal.

```tsx
interface CourseCardProps {
  title:    string;
  slug:     string;
  level:    'beginner' | 'intermediate';
  duration: string;
  track:    string;
  excerpt:  string;
}

export function CourseCard({ title, slug, level, duration, track, excerpt }: CourseCardProps) {
  // ...
}
```

### Utility function

Always use `cn()` from `lib/utils.ts` for conditional class merging. Never use
string template literals for Tailwind class concatenation.

```ts
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Button component

```tsx
// components/ui/button.tsx
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?:    Size;
  asChild?: boolean;
}

const variants: Record<Variant, string> = {
  primary:   'bg-brand-amber text-brand-midnight hover:bg-amber-400 font-medium',
  secondary: 'bg-brand-navy text-white hover:bg-brand-navy-muted font-medium',
  ghost:     'text-brand-teal underline-offset-4 hover:underline',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
```

### Section wrapper pattern

All homepage and page sections use this pattern for consistent vertical rhythm:

```tsx
interface SectionProps {
  children:  React.ReactNode;
  className?: string;
  dark?:      boolean;
}

export function Section({ children, className, dark = false }: SectionProps) {
  return (
    <section className={cn('py-20 px-4', dark ? 'bg-brand-midnight text-white' : 'bg-white', className)}>
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}
```

---

## Sanity schemas

Three document types in v1. Define schemas in `sanity/schemas/`.

### Course schema

```ts
// sanity/schemas/course.ts
export const courseSchema = {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    { name: 'title',        type: 'string',   title: 'Title',            validation: (R: any) => R.required() },
    { name: 'slug',         type: 'slug',     title: 'Slug',             options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'track',        type: 'string',   title: 'Track',            options: { list: ['foundations', 'backend', 'frontend'] } },
    { name: 'level',        type: 'string',   title: 'Level',            options: { list: ['beginner', 'intermediate', 'advanced'] } },
    { name: 'duration',     type: 'string',   title: 'Duration',         description: 'e.g. "8 weeks"' },
    { name: 'excerpt',      type: 'text',     title: 'Short description', rows: 3 },
    { name: 'description',  type: 'array',    title: 'Full description', of: [{ type: 'block' }] },
    { name: 'syllabus',     type: 'array',    title: 'Syllabus topics',  of: [{ type: 'string' }] },
    { name: 'prerequisites',type: 'array',    title: 'Prerequisites',    of: [{ type: 'string' }] },
    { name: 'isFeatured',   type: 'boolean',  title: 'Featured?',        initialValue: false },
    { name: 'order',        type: 'number',   title: 'Display order' },
  ],
};
```

### Blog post schema

```ts
// sanity/schemas/post.ts
export const postSchema = {
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    { name: 'title',       type: 'string', title: 'Title',        validation: (R: any) => R.required() },
    { name: 'slug',        type: 'slug',   title: 'Slug',         options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'publishedAt', type: 'date',   title: 'Published at', validation: (R: any) => R.required() },
    { name: 'excerpt',     type: 'text',   title: 'Excerpt',      rows: 3 },
    { name: 'body',        type: 'array',  title: 'Body',         of: [{ type: 'block' }] },
  ],
};
```

### Site settings schema (singleton)

```ts
// sanity/schemas/siteSettings.ts
export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroHeadline', type: 'string', title: 'Hero headline' },
    { name: 'heroSubline',  type: 'text',   title: 'Hero sub-headline', rows: 2 },
    { name: 'ctaLabel',     type: 'string', title: 'Hero CTA label', initialValue: 'Explore courses' },
    { name: 'email',        type: 'string', title: 'Contact email' },
  ],
};
```

---

## SEO rules

Every page must have:
- A unique `<title>` in the format `Page name — CoreCraft`
- A unique `<meta name="description">` of 140–160 characters
- Canonical URL set via `alternates.canonical` in metadata
- Semantic HTML: one `<h1>` per page, proper heading hierarchy

Images must use `next/image` with `alt` text. No `<img>` tags.

The `/blog` section is the primary SEO surface. Posts should target long-tail keywords
such as: "what is object oriented programming", "how to learn algorithms from scratch",
"difference between procedural and functional programming".

---

## Accessibility rules

- All interactive elements must be keyboard-focusable with a visible focus ring.
  Use `focus-visible:ring-2 focus-visible:ring-brand-teal` on all interactive components.
- Color contrast: text on `brand-navy` backgrounds must be white or `brand-fog`.
  Text on `brand-fog` backgrounds must be `brand-navy`. Never use `brand-teal` as
  text color on white — it fails WCAG AA.
- Use `aria-label` on icon-only buttons. Use semantic elements (`<nav>`, `<main>`,
  `<header>`, `<footer>`, `<article>`, `<section>`).
- Respect `prefers-reduced-motion` for any animations.

---

## Strict don'ts

- No inline styles. All styling via Tailwind utility classes.
- No CSS modules. One styling system only.
- No `useEffect` for data fetching. Use server components.
- No `any` type. If a type is unknown, use `unknown` and narrow it.
- No `console.log` in committed code. Use proper error boundaries.
- No hardcoded colors or font families outside `tailwind.config.ts`.
- No new npm packages without checking if Tailwind or a built-in can handle it.
- No placeholder or lorem ipsum content. Use real CoreCraft copy.
- Do not touch the `/studio` route group for anything other than Sanity config.

---

## Copy and tone

CoreCraft's voice is direct, encouraging, and precise — like a senior developer
who genuinely wants to help a junior succeed. No marketing fluff, no hype. Headlines
should state a fact or a promise, not a feeling. Body copy explains what the student
gets and why it matters.

Avoid: "unlock your potential", "transform your career", "world-class", "cutting-edge".
Prefer: "learn to write clean loops before you touch a framework",
        "understand why, not just how", "private sessions scheduled around you".

---

## Tracks (current and planned)

| Track       | Status  | Slug prefix     | Courses                            |
|-------------|---------|-----------------|------------------------------------ |
| Foundations | Active  | `/courses`      | Intro to Programming, OOP, FP, DSA |
| Backend     | Planned | `/courses`      | (future — do not stub pages yet)   |
| Frontend    | Planned | `/courses`      | (future — do not stub pages yet)   |

Do not create placeholder pages for planned tracks. Only build what is live.

---

## Checklist before marking any task done

- [ ] `pnpm lint` passes with zero warnings
- [ ] `pnpm type-check` passes
- [ ] New component has correct TypeScript interface
- [ ] Every color comes from `brand-*` token, not arbitrary hex
- [ ] Font family is `font-display` or `font-body`, not the Tailwind default
- [ ] Every new page exports `metadata` or `generateMetadata`
- [ ] Images use `next/image` with `alt`
- [ ] No `'use client'` added without a clear reason
- [ ] Mobile responsive (check at 375px, 768px, 1280px)
