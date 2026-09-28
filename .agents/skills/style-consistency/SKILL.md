---
name: style-consistency
description: Learns a project's real code style (indentation, quotes, naming, import order, comment style, error-handling patterns, etc.) from the codebase itself and enforces it on every edit, so files stay stylistically uniform across many separate prompts and sessions — not just within one response. Use this skill anytime you are asked to add to, update, edit, refactor, or fix a file in an existing project, especially on the 2nd+ prompt touching that codebase. Also trigger it when the user says things like "match the existing style", "keep it consistent", "don't change the formatting", or asks why generated code looks different from the rest of the file.
---

# Style Consistency

Keeps every edit you make looking like it was written by the same person who wrote the rest of the file — even across unrelated prompts, days apart, in the same repo.

The core problem this solves: without a persisted memory of a project's conventions, each new prompt re-derives style from scratch (or worse, from generic training-data defaults), so a file slowly accumulates mixed quote styles, inconsistent naming, and clashing patterns. This skill fixes that by learning conventions once, writing them down in the project, and re-reading that file before every edit from then on.

## Workflow

### 1. Check for an existing style profile

Look for `.agents/style-profile.md` in the project root (or nearest parent directory) before editing anything.

- **If it exists**: read it and skip to step 3 — apply it.
- **If it doesn't exist**: run step 2 to build it first, then proceed.

### 2. Learn the style (first run in a project, or when the profile is stale)

Detect conventions from two sources, in this priority order:

**A. Explicit config (always wins over inferred style)**
Check for and read, if present: `.editorconfig`, `.prettierrc*`, `.eslintrc*`, `pyproject.toml` / `.flake8` / `setup.cfg`, `rustfmt.toml`, `.rubocop.yml`, `.golangci.yml`, `tsconfig.json` (for path/strictness conventions). Anything these files specify is the rule — don't infer around it.

**B. Inferred convention (fills gaps the config doesn't cover)**
Read 3–5 representative existing files of the same language/type (not the file you're about to edit alone — sibling files give a truer picture). Note:
- Indentation: tabs vs spaces, width
- Quotes: single vs double (JS/TS/Python), string interpolation style
- Semicolons (JS/TS), trailing commas
- Naming: camelCase / snake_case / PascalCase — for variables, functions, files, constants
- Import/require style and ordering (grouped by std-lib/external/local? alphabetized?)
- Brace/bracket placement, max line length in practice
- Comment style (JSDoc vs inline vs minimal; docstring format)
- Error handling pattern (try/catch shape, custom error classes, Result types, error-first callbacks)
- Async pattern (async/await vs promises/.then vs callbacks)
- Function style (arrow vs function declarations, default exports vs named)
- Test file conventions, if visible (describe/it structure, naming of test files)
- Any project-specific idioms that repeat 3+ times (a particular helper pattern, a logging call shape, a component structure)

Write findings to `.agents/style-profile.md` (the same `.agents/` directory that holds `AGENTS.md` and `skills/`) as a short, scannable reference — bullet points, not prose, organized by category. Keep it under ~100 lines; this is a lookup sheet, not documentation.

### 3. Apply it on every edit

Before writing or modifying any code in this project:
- Re-read `.agents/style-profile.md` if it's not already in context for this session.
- Match every applicable convention exactly: indentation, quotes, naming, import grouping, brace style, comment style, error handling, async style.
- When the immediate surrounding code in the file being edited conflicts with the profile (e.g. an older file predates the profile, or was never in the sample), **follow the local file's own existing style** for that file — consistency within a file beats consistency with the profile. Note the conflict silently; don't interrupt the user about it unless it's a real ambiguity you can't resolve either way.
- Never introduce a "generic" or "default" style choice (e.g. defaulting to double quotes, semicolons, camelCase) that isn't what steps 1–2 established for this project.

### 4. Keep the profile current

If you observe a new pattern repeating 3+ times across the codebase that isn't yet in the profile, or the user explicitly corrects a style choice ("use snake_case here", "we don't use semicolons"), update `.agents/style-profile.md` with a short append — don't wait to be asked. This is what makes the skill "learn" rather than just check once: corrections compound instead of repeating.

If the user asks to change a stated convention going forward ("let's switch to double quotes"), update the profile immediately rather than only fixing the current file.

## What this skill is not for

- Running actual formatters/linters (prettier, eslint --fix, black, gofmt) — invoke those as normal tools when available; this skill governs the choices you make when generating code, not automated reformatting.
- Enforcing style on files outside the current project/repo.
- Overriding an explicit one-off instruction from the user in the current prompt (e.g. "just this once, write it with tabs") — that instruction wins for that edit, but don't let it silently update the profile.
