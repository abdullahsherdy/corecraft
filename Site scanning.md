# Site Scanning

## Executive Summary

I audited the local CoreCraft Next.js marketing site from the repo, not a live URL or screenshots. The foundation is solid: simple IA, clean Tailwind structure, consistent brand tokens, accessible focus states, good semantic route structure, and clear education positioning.

The main opportunity is to make the site feel more premium and conversion-focused. Right now, many pages are functional but sparse. The design leans heavily on plain sections, repeated cards, text links, and limited visual proof. The user can understand the offer, but there is not enough trust-building, differentiation, progressive guidance, or polished visual storytelling to make the experience feel high-value.

Overall UI Score: **6.8 / 10**

Overall UX Score: **7.1 / 10**

## Key Strengths

- Clear navigation: Courses, Mentorship, About, Blog, Contact.
- Strong brand palette: navy, teal, amber, fog, midnight.
- Good App Router structure and reusable components.
- Focus states and skip link exist, which is good for accessibility.
- Course detail pages have useful structure: outcomes, syllabus, prerequisites, sticky enrollment card.
- Mobile drawer includes focus trapping, Escape handling, and reduced-motion consideration.

## Critical Weaknesses

- The site has several encoding issues: text displays `â€”` instead of proper dashes. This hurts professionalism immediately.
- Blog is in primary navigation but only says "Coming soon." That creates a dead-end in a core nav slot.
- Contact API returns `501`, and the contact page has no form. This weakens lead capture.
- Hero is text-only and visually plain for a learning brand. It lacks proof, product preview, student outcomes, or human signal.
- CTAs are inconsistent: "Get started," "Book a mentorship call," "Book a free session," "Message on WhatsApp," and "View mentorship" compete without a clear funnel.
- Course discovery lacks filtering, comparison, difficulty explanation, or recommended path.
- Visual hierarchy is serviceable but not premium. Sections feel modular, but not especially memorable.

## Detailed Audit

### Navigation Issues

The primary nav is simple, but Blog should not be a top-level link while empty. A dead-end page in primary nav lowers confidence.

Recommended solution: replace Blog with "Resources" only when content exists, or move Blog to the footer until live.

The "Get started" CTA goes to mentorship, while many course CTAs also route to mentorship. This is acceptable if mentorship is the business's main conversion path, but the label should be explicit: "Book free intro call" or "Start with mentorship."

### Information Architecture

The IA separates Courses and Mentorship, but the relationship between them needs more clarity. Users may ask: "Should I book mentorship, buy a course, or join a group?"

Recommended solution: the homepage should include a decision section:

```text
Not sure where to start?
Beginner -> Intro to Programming
Need help now -> 1-on-1 mentorship
Want structure -> Foundations track
```

### User Journey Friction

Course cards link to details, then details link to mentorship. That works, but the CTA says "Book a free session" without explaining what happens next.

Recommended solution: add a short "How booking works" block near every major CTA: choose topic, send availability, get a reply on WhatsApp/email.

### Accessibility

The site has good baseline focus handling. Improvements needed:

- Ensure amber buttons on light backgrounds maintain contrast in all states.
- Avoid text links that rely only on color. Many links underline only on hover.
- Add visible active state in mobile nav, not only desktop nav.
- Validate drawer focus handling with screen readers; custom dialog should include a clear title or `aria-labelledby`.
- Fix mojibake text because malformed characters affect readability and perceived quality.

### Mobile Responsiveness

The layout likely adapts cleanly because sections use single-column mobile grids. Main risk is CTA wrapping and sparse hero content.

Mobile hero should prioritize:

1. Outcome headline
2. Short proof point
3. Primary CTA
4. Secondary CTA
5. Course path preview

### Readability

Copy is clear, but some pages are too generic. "Master the fundamentals. Build anything." is strong, but supporting text needs more specificity: audience, format, outcomes, and proof.

### Conversion Bottlenecks

- No real contact form.
- No testimonials, student outcomes, portfolio examples, or instructor credibility near CTAs.
- No pricing or starting commitment clarity.
- No course comparison.
- No FAQ around scheduling, language, level, or prerequisites.
- Blog dead-end weakens trust.

## UI Evaluation

| Area | Score | Reasoning |
| --- | ---: | --- |
| Layout and spacing | 7 / 10 | Clean and consistent, but too many sections use the same centered heading plus cards pattern. Needs richer composition. |
| Typography | 7 / 10 | Good display/body distinction. Needs a more deliberate scale for eyebrow, hero, section title, card title, metadata, and helper text. |
| Color palette | 7.5 / 10 | Brand colors are strong. Current usage is safe but somewhat flat. Add more disciplined semantic tokens and reduce overuse of fog cards. |
| Visual hierarchy | 6.5 / 10 | Headings are clear, but CTAs, proof points, and decision paths do not stand out enough. |
| Iconography | 7 / 10 | Lucide usage is appropriate. Icons should be more consistently sized and paired with headings/actions. |
| Buttons and CTAs | 6.5 / 10 | Button component is useful, but variants need stronger rules. Ghost text CTAs can feel weak on dark sections. |
| Cards | 6.8 / 10 | Readable, consistent, but visually plain. Course cards need stronger scannability: level, duration, result, best-for label. |
| Forms | 3 / 10 | No real form exists; API is not implemented. |
| Images and illustrations | 4 / 10 | The site lacks meaningful visual assets. For an education business, human/instructional/product visuals would raise trust. |
| Branding consistency | 7 / 10 | Colors and fonts are consistent, but the brand personality is not yet expressed strongly through visual storytelling. |

## Redesign Recommendations

### Homepage Structure

```text
Header
Hero: outcome + proof + primary CTA + visual course path
Trust strip: formats, languages, response time, core subjects
Choose your path: Mentorship / Private Courses / Group Courses
Foundations roadmap: 4-course sequence
Why CoreCraft: teaching philosophy + outcomes
Instructor credibility / social proof
FAQ
Final CTA
Footer
```

### Hero Redesign

Use a split but balanced layout. Left side: headline, concise value prop, two CTAs. Right side: a polished "learning roadmap" visual showing the four foundations: Intro, OOP, FP, DSA. This can be built with Tailwind cards and connector lines.

Recommended hero copy:

```text
Learn programming from the fundamentals up.
Private mentorship and structured courses for students who want to understand the why behind code.
```

Primary CTA: "Book a free intro call"

Secondary CTA: "Explore foundations track"

### Course Page

Add filters or segmentation:

- Beginner
- Intermediate
- Foundations
- Frontend
- Backend
- Private / Group

Add a course comparison block:

```text
Course | Best for | Level | Duration | Outcome
```

### Course Detail

Keep the sticky enrollment card, but add:

- "Best for"
- "You will build"
- "What happens after booking"
- FAQ
- Related courses / next course

### Contact Page

Add a real lead form:

- Name
- Email or WhatsApp
- Goal
- Current level
- Preferred format
- Message

Keep WhatsApp as the fastest path, but do not make it the only serious conversion route.

## Component-by-Component Improvements

### Header

Current issue: compact and clear, but CTA label is vague.

Recommended improvement: use "Book free intro call." Add active underline or pill state. Consider hiding Blog until content exists.

UX rationale: clearer user intent and fewer dead ends.

### Navigation

Current issue: all links have equal weight, including empty Blog.

Recommended improvement: group conversion routes visually: main nav plus CTA.

UX rationale: users distinguish browsing from action.

### Hero

Current issue: text-only, low visual impact.

Recommended improvement: add roadmap/product-like visual, proof chips, and sharper CTA hierarchy.

UX rationale: first viewport must explain offer and credibility quickly.

### Feature Sections

Current issue: "How CoreCraft works" cards are good but generic.

Recommended improvement: make cards answer user decisions: "I need help now," "I want a full path," "I learn better with a group."

UX rationale: maps business offerings to user needs.

### Cards

Current issue: plain, low differentiation.

Recommended improvement: add top metadata row, result statement, stronger hover state, and consistent CTA row.

UX rationale: improves scanning and decision-making.

### Forms

Current issue: missing.

Recommended improvement: implement contact/intake form with validation, success state, and error state.

UX rationale: captures leads beyond WhatsApp.

### Buttons

Current issue: primary/secondary/ghost exist, but usage is inconsistent.

Recommended improvement:

- Primary: amber fill for main conversion.
- Secondary: navy fill or outline depending background.
- Ghost: text links only for low-priority actions.

UX rationale: predictable hierarchy.

### Footer

Current issue: functional but basic.

Recommended improvement: add grouped links, contact block, social/proof, and "Start here" CTA.

UX rationale: footer becomes a second conversion and orientation tool.

### Mobile Navigation

Current issue: solid foundation.

Recommended improvement: active states, larger CTA clarity, optional "Start here" grouping.

UX rationale: mobile users need faster path selection.

### Empty States

Current issue: "Courses are being prepared" is plain.

Recommended improvement: add action: "Message us to ask about upcoming cohorts."

UX rationale: empty states should still move users forward.

### Error States

Current issue: improved 404 exists.

Recommended improvement: add secondary "Browse courses" CTA if desired.

UX rationale: recovery path should match site goals.

### Loading States

Current issue: no visible strategy.

Recommended improvement: add skeleton cards for CMS-driven course sections if client-side loading is introduced.

UX rationale: prevents layout uncertainty.

### Success Messages

Current issue: no form success state.

Recommended improvement: clear confirmation with expected response time.

UX rationale: reduces anxiety after lead submission.

## Visual Design System Proposal

### Colors

```text
Primary navy: #1A2B4C
Primary midnight: #0D1526
Accent teal: #00C4B3
Accent amber: #F4A622
Surface fog: #F0F4FB
Success: #1F8A4C
Warning: #B26A00
Error: #B42318
Info: #2563EB
Text primary: brand-navy
Text secondary: brand-navy/70
Text muted: brand-navy/55
```

### Typography

```text
Hero: 56-64 / 1.05
Page H1: 44-56 / 1.1
Section H2: 32-40 / 1.15
Card H3: 20-24 / 1.25
Body large: 18 / 1.7
Body: 16 / 1.65
Small: 14 / 1.5
Meta: 12 / uppercase optional
```

### Spacing

```text
4, 8, 12, 16, 24, 32, 48, 64, 80, 112
```

### Border Radius

```text
Small: 8px
Default/card: 12px
Large feature panels: 16px max
Pills: 999px
```

### Shadows

Use subtle shadows only for elevated surfaces:

```text
Card: 0 1px 2px rgba(13,21,38,.06)
Raised: 0 12px 32px rgba(13,21,38,.10)
```

### Button Variants

- Primary: amber background, midnight text.
- Secondary: navy background, white text.
- Outline: transparent, navy border.
- Ghost: text-only, underline on hover and focus.

### Form Styles

- Labels always visible.
- Inputs 44px minimum height.
- Error text below field.
- Required fields marked textually, not only color.
- Success state with next-step timing.

### Card Guidelines

- One clear purpose per card.
- Metadata at top.
- Title next.
- Outcome/body.
- CTA at bottom.
- Entire card clickable only when the whole card is one action.

## User Experience Enhancements

- Add better onboarding through a "Not sure where to start?" decision section.
- Clarify calls to action by standardizing on "Book free intro call" as the main conversion.
- Reduce cognitive load by mapping services to user needs instead of internal service labels only.
- Improve content hierarchy with stronger proof, outcomes, and next-step microcopy.
- Speed up task completion with course filters, comparison, and recommended paths.
- Add feedback states for form submission, loading, empty states, and errors.
- Improve discoverability by making course relationships and progression visible.
- Raise accessibility through visible focus, persistent labels, contrast checks, and accessible dialog labeling.
- Add trust-building elements: instructor credibility, student outcomes, testimonials, response time, and FAQ.
- Improve conversion by adding a real contact/intake form and repeating clear CTAs at decision points.

## Prioritized Action Plan

### High Impact / Low Effort

| Recommendation | Design Complexity | Development Complexity |
| --- | --- | --- |
| Fix all mojibake `â€”` text | Low | Low |
| Remove Blog from primary nav until content exists | Low | Low |
| Rename main CTA to "Book free intro call" | Low | Low |
| Add active state to mobile nav | Low | Low |
| Add "what happens next" microcopy under booking CTAs | Low | Low |

### High Impact / High Effort

| Recommendation | Design Complexity | Development Complexity |
| --- | --- | --- |
| Redesign homepage hero with visual course roadmap | Medium | Medium |
| Build real contact/intake form and API behavior | Medium | High |
| Add course comparison and path recommendation section | Medium | Medium |
| Add testimonials, instructor credibility, and trust proof | Medium | Medium |

### Medium Priority

- Improve course cards with stronger metadata and outcomes.
- Add FAQ sections to mentorship and course detail pages.
- Add richer footer with grouped links and CTA.
- Improve empty states with useful next actions.
- Add consistent section header component.

### Nice-to-Have

- Add tasteful page transitions or micro-animations.
- Add skeleton loading states for CMS-driven content.
- Add search/filtering once course library grows.
- Add downloadable syllabus or lead magnet.

## Expected Benefits

### Usability

Users will understand the offer faster, choose the right path more easily, and recover from dead ends better.

### Accessibility

Improved focus states, clearer labels, stronger contrast discipline, visible form errors, and better mobile navigation will bring the experience closer to WCAG 2.2 expectations.

### Business Outcomes

Clearer CTAs, stronger trust signals, a real lead form, and better course decision support should increase inquiries, reduce hesitation, and make CoreCraft feel more professional and premium.
