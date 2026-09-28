---
name: traxx-product-knowledge
description: Core reference for Traxx's product positioning, feature list, site structure, and strict UX guidelines for the multi-step onboarding flow. Use this skill whenever writing marketing copy, building dashboard views, or implementing the signup/onboarding sequence.
---

# Traxx — Product Overview & Onboarding Standard

This document defines what Traxx is, its core feature set, and the exact UX specifications for its onboarding flow. Never invent new features or deviate from these onboarding constraints.

## 1. Positioning & Core Value
- **What it is:** A fleet intelligence platform for logistics businesses in Nigeria.
- **The Core Problem:** Fleet owners pay riders a salary, fuel, and vehicles but lack visibility. Traxx solves ghost rides, unassigned movement, and manual attendance tracking.
- **Tagline:** "Your Logistics. Under Control."
- **Trust Signals:** NDPR compliant, Paystack-secured, SSL encrypted, GPS data retained 90 days, CAC registered, KYC-verified riders.

## 2. Core Features
1. **Live Fleet Map:** 5-second GPS refreshes, color-coded status.
2. **Automated Flag Detection:** Route deviations, unassigned movement, idle alerts.
3. **Fair Flagging Engine:** Distinguishes genuine traffic from deliberate deviations.
4. **GPS Replay and Audit Trail:** Exportable PDF/CSV frame-by-frame history.
5. **Shift Management and Sign-Off:** Manual manager approval required; no auto-approvals.
6. **Rider Scorecards:** On-time rates, flags, and completed trips for performance reviews.
7. **Delivery Assignment & Live Tracking:** Assignments sync to rider phones; live tracking links sent to customers.
8. **Customer-Facing Tracking:** Real-time arrival maps for end customers.

## 3. Onboarding Flow (The 6-Step Standard)
The signup flow MUST be broken into 6 lightweight, single-concern steps to maximize retention. 

**Design Constraints for Onboarding:**
- **One concern per step.**
- **Visible progress at all times** (e.g., "Step X of 6" + visual progress bar).
- **Inline, real-time validation** with plain-language errors.
- **Autosave + Resume** keyed to the email address.
- **No dead-end errors** (keep entered data intact on validation failure).
- **Mobile-first layout** (one field/group per screen for one-handed use).

### The 6 Steps:
- **Step 1: Welcome** (Company/business name, Industry dropdown). Copy: *"We'll use this to set up your fleet workspace."*
- **Step 2: Location** (State, LGA). Copy: *"This helps us confirm coverage and set your local support contact."*
- **Step 3: Contact** (Company email, Company phone).
- **Step 4: Fleet** (Number of vehicles, Vehicle types as tappable cards).
- **Step 5: Account Owner** (Full name, Job title, Phone). Copy: *"This is the account owner — you can invite teammates later."*
- **Step 6: Login** (Login email pre-filled, Password, Confirm password, Live strength indicator, TOS checkbox). CTA: *"Create account and go to dashboard"*.

### Deferred Requirements
- **CAC Registration Number:** Do NOT ask during the 6-step signup. Present it as a post-signup dashboard banner ("Add your CAC number before going live").
- **First-Rider Setup:** Handled via an optional dashboard wizard, not during signup.
