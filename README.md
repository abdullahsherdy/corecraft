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
