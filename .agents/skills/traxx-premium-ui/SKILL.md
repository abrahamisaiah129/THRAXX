---
name: traxx-premium-ui
description: Enforces Traxx's design and engineering standard for every page, component, and rebuild on traxx.ng — a Nigerian fleet management and delivery-tracking SaaS. Covers premium non-AI-looking visual design, responsive layouts with no form/content overflow, a consistent navbar and semi-transparent back-to-top button, plain-language (non-technical) UI copy, and TypeScript + Tailwind + DaisyUI code standards with commented, separated-concern code. Use this any time you build, redesign, or fix a page or component on traxx.ng, especially the homepage/hero, or when the user says "keep it premium", "make it feel real", "match the rest of the site", or asks for a hero/section rebuild.
---

# Traxx Premium UI Standard

This is the single standard every page and component on traxx.ng must meet. It exists so the site stays consistent, premium-feeling, and free of the small mistakes ("AI slop") that make generated interfaces look cheap — glowing gradients, emoji as decoration, mismatched spacing, jargon in the UI, sluggish or missing animation feedback.

## 0. Before writing any code

1. **Install and consult the reference animation/taste skill**: `npx skills@latest add emilkowalski/skills`. This pulls in `emil-design-eng` and related skills covering easing curves, animation timing, and component polish — read `emil-design-eng` before implementing any hover state, transition, dropdown, modal, or button press feedback. Do not invent animation timing or easing from scratch; follow that skill's decision framework (should it animate → what's the purpose → what easing → how fast).
2. **Inspect the current traxx.ng site first** (fonts, colors, spacing, existing components) before building anything new. Extract the actual font-family, weights, and type scale currently in use — match them exactly rather than substituting a generic default (no defaulting to Inter, Poppins, or a system font unless that's what traxx.ng already uses). If a page/section being rebuilt has visible bugs (layout breaks, overlapping elements, broken links, console errors, inconsistent spacing versus the rest of the site), fix them as part of the same change — don't leave known problems in place because they weren't the primary ask.
3. If the current live font or a specific list of known site errors hasn't been shared in this session, ask for them rather than guessing — matching an assumed font or silently skipping "other errors" produces inconsistency, which this skill exists to prevent.

## 1. Visual design: premium, not AI-generated

- **No emoji, no sparkle/glow decorative icons, no "✨" anywhere in the UI.** These are the most common tell of generated interfaces and read as unpolished on a B2B logistics product.
- **Text-first.** Convey information and hierarchy through typography, spacing, and weight — not icons. Add an icon only when it is functionally necessary (e.g., a status indicator, a nav item that's icon-only by established convention) — never as decoration next to a heading or bullet.
- **No generic AI-look patterns**: no purple-to-blue gradient blobs, no glassmorphism-by-default, no oversized rounded-everything without reason, no stock "3D isometric" hero illustrations unless explicitly requested. Premium logistics SaaS reads as clean, structured, and calm — closer to Linear or Vercel's marketing sites than a generic template.
- **Consistency over novelty.** Reuse the same spacing scale, corner radius, shadow depth, and color tokens across every page. If a new section needs a new pattern, check whether an existing component can be reused first. No repeated one-off implementations of the same UI idea (e.g., three different card styles for what is conceptually the same "info card").
- Follow the `emil-design-eng` review checklist for every interactive element before considering it done: correct easing (`ease-out` for entrances, never `ease-in`), animations under 300ms for UI (not marketing moments), press feedback (`scale(0.97)` on `:active`) on every clickable element, and no animation on high-frequency actions.

## 2. Layout and responsiveness

- Every page must be fully responsive: mobile, tablet, and desktop breakpoints, tested at minimum at 375px, 768px, and 1280px widths.
- **No form or content overflow, ever.** Inputs, buttons, and text must never overflow their container or the viewport at any breakpoint. Use `min-w-0`, `overflow-hidden`/`overflow-x-auto` deliberately on scrollable regions only, `break-words` on long unbroken strings (emails, tracking IDs), and test forms specifically with long input values and long validation error messages.
- **Navbar**: sticky/fixed, consistent across all pages, clear active-state indication for the current page, and a mobile menu that doesn't cause horizontal scroll or overlap page content when open.
- **Back-to-top button**: appears after the user scrolls past the first viewport height, semi-transparent background (not solid), positioned so it never overlaps footer content or covers a call-to-action, and animates in/out per the `emil-design-eng` entrance rules (never `scale(0)`, use opacity + scale(0.95), `ease-out`, under 250ms).

## 3. Content and copy: no technical jargon

Traxx is used by fleet managers, riders, and customers tracking deliveries — not developers. UI copy must always use plain, everyday language:

- Say "Delivery on the way" not "In transit" or "En route" (unless that specific phrase is already an established, well-understood product term for the audience).
- Say "Can't find that tracking number" not "404: Resource not found" or "Invalid ID".
- Say "Saving your changes…" not "Syncing to Firestore" or "Committing transaction".
- Never surface backend/infra terms (Firebase, Firestore, Cloud Function, API, webhook, payload) in anything a rider, fleet manager, or customer sees. These terms are fine in code comments, never in UI text.
- Error messages should say what happened and what to do next in plain terms, not expose stack traces, error codes, or technical causes.

## 4. Code standards

- **TypeScript throughout, strictly typed.** No `any` unless truly unavoidable (and commented why). Define explicit interfaces/types for props, API responses, and Firestore document shapes rather than inferring loosely.
- **Tailwind + DaisyUI** for all styling. Use DaisyUI components as the base (button, navbar, modal, etc.) and extend with Tailwind utility classes rather than writing custom CSS unless DaisyUI has no equivalent.
- **Separate concerns**: UI components render markup only; data-fetching and business logic live in hooks or service modules; types live in their own files. A component file should not contain raw Firestore queries, payment logic, or formatting logic inline — extract those.
- **Comment code purposefully, not redundantly.** Every non-trivial function needs a short comment explaining *why* it exists or *what problem it solves* — not a restatement of what the code obviously does. Every reusable asset (shared component, util function, custom hook) needs a one-line comment at its definition describing its purpose and where/why it's used.
- **No repetition.** If the same JSX structure, styling pattern, or logic appears more than twice, extract it into a shared component, hook, or utility.

## 5. Definition of done

Before considering a page/section complete, confirm:
- [ ] No emoji, sparkle icons, or decorative-only icons present
- [ ] Fonts and colors match the rest of traxx.ng exactly
- [ ] Fully responsive at mobile/tablet/desktop, no overflow anywhere (forms included)
- [ ] Navbar and back-to-top button present, consistent, and correctly animated
- [ ] All animations follow `emil-design-eng` timing/easing rules
- [ ] No technical/backend terms visible in the UI
- [ ] TypeScript typed, no unexplained `any`
- [ ] Tailwind + DaisyUI used consistently; no ad hoc custom CSS where a DaisyUI component exists
- [ ] Code is commented (functions and shared assets), concerns separated (UI / data / types)
- [ ] No duplicated UI patterns that should be a shared component
- [ ] Any known pre-existing bugs in the section being touched are fixed, not left in place
