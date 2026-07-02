# CoreCraft - Session Tasks

Working checklist for the current session. Update statuses as work is completed.

## In Progress

- None yet.

## Completed

- Fixed remaining mojibake in `/mentorship`.
- Redesigned `/mentorship` to match the quality level of the redesigned homepage, courses, contact, and about pages.

## Next Up

- Replace the `mailto:` contact form with a real `react-hook-form` client form.
- Implement `/api/contact` behavior instead of returning `501`.
- Decide the contact delivery target and environment variables before wiring email/notification delivery.
- Implement Sanity-backed `/blog` listing and `/blog/[slug]` detail rendering.
- Seed/review real Sanity content for courses, posts, and site settings.
- Add favicon and final brand asset pass.
- Run visual QA at 375px, 768px, 1280px, and wide desktop.
- Run `pnpm lint`, `pnpm type-check`, and `pnpm build` when Node/pnpm are available.
- Choose a stronger company name that preserves the fundamentals/services idea and is easier to find online than CoreCraft.

## Notes

- Keep English very simple and easy to read across all site copy.
- `react-hook-form` is already installed.
- `/api/contact` currently returns `501`.
- `/contact` currently submits through `mailto:`.
- Blog Sanity queries and types already exist, but routes are not wired to them yet.
- `Site scanning.md` is the current UX/design audit file.
