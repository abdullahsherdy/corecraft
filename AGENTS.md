# Repository Guidelines

## Project Structure & Module Organization

CoreCraft is a Next.js 14 App Router site for a coding education business. Public pages live in `app/(marketing)/`, with route folders such as `courses`, `blog`, `mentorship`, `about`, and `contact`. The embedded Sanity Studio route is under `app/(studio)/studio/[[...tool]]/`, and the contact endpoint is `app/api/contact/route.ts`.

Shared UI primitives are in `components/ui/`, page sections in `components/sections/`, and navigation/footer components in `components/layout/`. Utility code and site metadata live in `lib/`, while Sanity client code, GROQ queries, and CMS types are in `lib/sanity/`. Sanity schemas are defined in `sanity/schemas/`. Design references are kept in `designs/`.

## Build, Test, and Development Commands

Use pnpm for all package operations.

- `pnpm dev`: run the local Next.js development server.
- `pnpm build`: create a production build.
- `pnpm start`: serve the production build locally.
- `pnpm lint`: run Next.js ESLint checks.
- `pnpm type-check`: run TypeScript with `--noEmit`.
- `pnpm format`: format the repository with Prettier.

## Coding Style & Naming Conventions

Write TypeScript with strict types; avoid `any` and `@ts-ignore`. Use React Server Components by default, adding `'use client'` only for browser APIs, state, effects, event handlers, or form interactions. Keep route files named according to Next.js conventions, such as `page.tsx`, `layout.tsx`, `route.ts`, and `opengraph-image.tsx`.

Use Tailwind CSS for styling and prefer existing brand tokens from `tailwind.config.ts`, such as `brand-navy`, `brand-teal`, `brand-amber`, `brand-fog`, and the configured `font-display` / `font-body` families. Components should use PascalCase; utility functions should use camelCase.

## Testing Guidelines

No automated test framework is currently configured. Before opening a PR, run `pnpm lint`, `pnpm type-check`, and `pnpm build`. If tests are added later, place focused tests near the feature they cover or in a clearly named test directory, and document the new command in `package.json`.

## Commit & Pull Request Guidelines

Recent commit messages are informal, short summaries such as `fixing OG` and `trying to fix vercel issue`. Keep commits concise but prefer clearer imperative wording, for example `Fix course Open Graph image` or `Update mentorship page content`.

Pull requests should include a short description, affected routes or components, verification commands run, and screenshots for visible UI changes. Link related issues when available and call out any Sanity schema or environment variable changes.

## Security & Configuration Tips

Do not commit secrets or Sanity tokens. Keep deployment-sensitive configuration in environment variables and verify Vercel behavior with `pnpm build` before merging changes that affect routing, metadata, or CMS queries.
