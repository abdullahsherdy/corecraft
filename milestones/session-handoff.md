# CoreCraft - Session Handoff

Read this file first at the start of each session. It summarizes the current working context and points to deeper docs only when needed.

## Current Focus

We are pausing implementation work to clarify brand positioning and possibly rename the company before rewriting site copy and updating UI.

The company is not only a course catalog. It is a coding education service business with three service lines:

- Private mentorship
- Private courses
- Group courses

The teaching focus is programming fundamentals:

- Intro to Programming
- Object-Oriented Programming
- Functional Programming
- Data Structures and Algorithms

## Latest Decision

CoreCraft may need to be replaced because the name overlaps with Minecraft/gaming-server naming patterns and may be difficult to own in search.

The naming goal is a catchy, clear, searchable, easy-to-pronounce company name that still carries the idea of fundamentals, core understanding, guidance, and programming skill.

## Naming Work

Detailed naming notes are in:

- `milestones/naming-strategy.md`

Current shortlist directions:

- BaseLoop
- LogicRoot
- CodeRoot
- RootCode
- FundaCode

Current top three:

1. BaseLoop
2. LogicRoot
3. CodeRoot

Positioning reminder:

- BaseLoop = catchier and product-like.
- LogicRoot = more premium and serious.
- CodeRoot = clearest fundamentals signal.

## Content Work

A full page-by-page content strategy draft exists at:

- `milestones/content-strategy-copy-review.md`

Important correction:

- That document currently over-focuses some messaging around courses.
- The next revision should reposition the website around services first, with courses as one service line.
- Primary service framing should be: private mentorship, private courses, and group courses.

## Product / Site Status

The main progress log is:

- `milestones/progress.md`

Current known unfinished items:

- `/mentorship` needs a redesign pass.
- `/api/contact` still returns `501`.
- `/contact` still uses a `mailto:` form.
- `/blog` and `/blog/[slug]` are placeholder/resource states, not Sanity-backed real posts.
- Real Sanity content still needs seeding/review.
- Favicon/final brand asset pass is pending.
- Visual QA and `pnpm lint`, `pnpm type-check`, `pnpm build` still need to be run when Node/pnpm are available.

Important drift:

- `app/(marketing)/mentorship/page.tsx` still contains mojibake text like `â€”` and `1â€“2`.

## Session Task File

Working task checklist:

- `milestones/session-tasks.md`

## Next Best Step

Continue naming work:

1. Generate stronger name options around services, fundamentals, guidance, and programming logic.
2. Check exact-match search visibility for finalists.
3. Choose 3-5 finalist names.
4. Once the name direction is chosen, revise the content strategy document around service-led positioning.

## Instructions For Future Sessions

- Start by reading only this file.
- Open deeper files only if needed for the current task.
- Update this handoff file before ending each session.
