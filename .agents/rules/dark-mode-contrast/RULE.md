---
name: dark-mode-contrast
description: Automatically ensures readability across both light and dark modes by verifying contrast ratios for backgrounds and text. Also ensures that elements explicitly requested to remain light (e.g., specific navbars) do not inherit global dark mode styles, maintaining their designated theme while ensuring their child text remains legible.
---

# Dark Mode Contrast & Theming Rules

Based on recent interactions, this rule prevents visual glitches, unreadable text, and theming conflicts when working with Tailwind dark mode (`dark:` variants).

## 1. Strict Contrast Verification
- **Never rely on default inheritance for colored backgrounds.** When applying a light background (e.g., `bg-slate-50`, `bg-red-50/30`), you MUST explicitly define a dark mode counterpart (e.g., `dark:bg-slate-900`, `dark:bg-red-950/20`) that maintains contrast with the foreground text.
- **Always pair background and text colors.** If a container has `bg-white dark:bg-slate-950`, any nested text that forces a dark color (e.g., `text-slate-900`) MUST have a corresponding dark mode color (e.g., `dark:text-slate-100`).

## 2. Explicit Theme Exceptions
- If the user requests a component (like a Navbar or Footer) to remain a specific color (e.g., "always white"), **strip ALL `dark:` background and `dark:` text classes** from that component.
- **Do not mix global theme variables in locked components.** If a component is locked to light mode, its text must remain dark (`text-slate-900`), and its interactive states must not use `dark:` hover variants.

## 3. Transparency & Overlays
- When text sits directly over an image or an absolute-positioned gradient, ensure there is a readable contrast layer (e.g., `bg-black/40` or a `backdrop-blur-md` panel) behind the text.

## 4. Mobile Responsiveness (No Hidden Content)
- Interactive banners or structural elements should **not** be hidden on mobile (e.g., avoid `hidden md:block` for primary content). Instead, use flex/grid stacking (`flex-col md:flex-row`) to ensure the content remains visible and legible across all viewports.
