---
name: enterprise-app-standards
description: Enforces enterprise-grade engineering standards — architecture, security, data integrity, scalability, observability, testing, maintainability, and compliance — for any backend, API, database, or infrastructure work. Use this whenever designing a new system or feature, reviewing architecture decisions, writing anything touching auth/permissions/payments/state transitions, setting up logging or monitoring, or when the user asks to make something "production-ready," "enterprise-grade," or "ready to scale." Complements traxx-premium-ui, which covers the UI/design layer — this skill governs everything underneath it.
---

# Enterprise Application Standards

A system is enterprise-grade not because of which framework it uses, but because it's designed for constraints that don't show up until scale, time, or headcount increases. This skill is the checklist for those constraints — apply it before something breaks in production, not after.

## 1. Architecture — design for change, not just for now

- **Separate concerns at every layer.** UI, business logic, data access, and infrastructure must be independently replaceable. If swapping the database or auth provider requires touching UI code, the boundaries are wrong.
- **Organize by business capability, not technical layer.** Group code by domain (billing, fleet, tracking) rather than by type (all controllers together, all models together). This is what lets people work in parallel without stepping on each other.
- **Design for the failure case first.** For every integration point, explicitly answer: what happens when this times out, returns an error, or is unreachable? A system is judged on how gracefully it degrades, not how well it works when everything's fine.

## 2. Security — non-negotiable, never an afterthought

- **Never trust the client.** All authorization must be enforced server-side (database security rules, server functions, API middleware). UI-level restrictions are convenience, never security.
- **Principle of least privilege everywhere.** Every service account, API key, database rule, and admin role gets the minimum access it needs — never broad access "to be safe" or "for convenience."
- **Audit logging for sensitive actions.** Who changed what, when — for anything involving money, permissions, or user data. Buyers and regulators will ask for this eventually even if it isn't needed today.
- **Secrets never in code or client bundles.** Environment variables or a secret manager only — never committed, never shipped to the browser.
- **Validate and sanitize all external input**, including data coming from webhooks, third-party APIs, and file uploads — never assume upstream data is well-formed or safe.

## 3. Data integrity and consistency

- **Single source of truth for every piece of data.** No silently duplicated state that can drift out of sync between two stores or two parts of the UI.
- **Validate at every boundary.** Client-side validation is for UX; server-side validation is the only validation that actually protects the system — never skip the server-side check because the client already checked.
- **Idempotency on anything involving money or state transitions** (a payment, a status update, a delivery confirmation). Network retries will happen; design so a duplicate request cannot double-charge, double-apply, or corrupt state.
- **Explicit state machines for anything with a lifecycle** (order status, delivery status, subscription status) — invalid transitions should be structurally impossible, not just "shouldn't happen."

## 4. Scalability — plan for 10x, not for today

- **Stateless services where possible.** Anything holding session state in memory doesn't scale horizontally — push session state to a shared store if it must persist.
- **Pagination and query limits everywhere.** "Fetch all records" breaks the moment a customer has 10,000 rows instead of 10 — paginate from the start, not after the first production slowdown.
- **Define a caching strategy upfront**, even before it's needed. Know what's cacheable and what invalidates it as an architecture decision, not a bolt-on optimization under pressure.
- **Avoid N+1 queries and unbounded fan-out** in any loop that hits a database or external API.

## 5. Observability — you can't fix what you can't see

- **Structured logging and error tracking** (e.g. Sentry or equivalent) from day one. "It's broken for a customer" without logs turns into hours of guessing instead of minutes of diagnosis.
- **Health checks and uptime monitoring** for every critical service and integration.
- **Metrics that map to business outcomes**, not just infrastructure state — "deliveries are being tracked successfully," not only "server is up."
- **Alerting on the failure modes that matter**, tuned to avoid noise — an alert nobody trusts gets ignored, which defeats the purpose.

## 6. Testing and quality gates

- **Automated tests for business logic**, especially anything involving money, permissions, or state transitions — this is where regressions are most expensive and least visible in manual testing.
- **CI that blocks bad code from merging**: linting, type-checking, and tests all automated — never left to memory or reviewer discipline alone.
- **A staging environment that mirrors production.** Enterprise bugs are disproportionately environment-specific ones nobody catches locally.

## 7. Maintainability — code outlives its author

- **Consistent conventions enforced by tooling** (linters, formatters, type checkers), not by hoping everyone remembers the style guide.
- **Document the *why*, not just the *what*.** The code already shows what it does; the valuable documentation is the reasoning behind non-obvious decisions, trade-offs, and constraints that shaped them.
- **No tribal knowledge.** If only one person understands how a critical system works, treat that as a liability to fix (documentation, pairing, code review depth), not a strength to rely on.

## 8. Compliance and operational readiness

- **Data retention and deletion policies**, especially for personal, financial, or location data — know what's stored, for how long, and how it's deleted on request.
- **A tested backup and disaster recovery plan** — tested means someone has actually restored from it, not just configured it.
- **A defined incident response process.** When something goes down, there should be a known first step, not improvisation — "we'll figure it out" is not an acceptable answer to "what happens when it fails."

## Definition of done for any enterprise-scoped feature

Before considering backend/infrastructure work complete, confirm:
- [ ] Authorization is enforced server-side, not just hidden in the UI
- [ ] All external/webhook/user input is validated and sanitized server-side
- [ ] Anything touching money or state transitions is idempotent
- [ ] No unbounded queries — pagination or limits are in place
- [ ] Errors are logged to a tracked system, not just console output
- [ ] Sensitive actions are audit-logged (who, what, when)
- [ ] No secrets in code, config committed to the repo, or client bundles
- [ ] Automated tests cover the business-critical logic touched
- [ ] The change has been considered for its failure/degradation path, not only its happy path
