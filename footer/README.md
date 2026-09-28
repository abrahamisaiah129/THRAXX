# Traxx Footer Component (Updated Release)

This directory contains the updated, fully connected Traxx website footer component with all 19 links mapped to finished pages.

---

## Files in this Directory

- `footer-snippet.html`: The clean, drop-in HTML snippet of `<footer class="site-footer">...</footer>`.
- `footer.css`: The extracted CSS rules for the footer layout, compliance badges, newsletter input, and responsive rules.
- `footer.js`: The newsletter validation and toast notification logic.
- `index.html`: A standalone preview page demonstrating the footer in isolation with dual theme toggling.

---

## All 19 Mapped Links

| Column | Link Anchor | Target URL |
| :--- | :--- | :--- |
| **Platform** | Web Dashboard | `/web-dashboard/` |
| **Platform** | Fleet Manager App (Coming) | `/fleet-manager-app/` |
| **Platform** | Rider App | `/rider-app/` |
| **Platform** | System Status | `/system-status/` |
| **Platform** | API Docs (Soon) | `/api-docs/` |
| **Company** | About Traxx | `/about/` |
| **Company** | Careers | `/career/` |
| **Company** | Blog | `/blog/` |
| **Company** | Contact Us | `/contact/` |
| **Company** | Press Kit | `/press-kit/` |
| **Support** | Help Centre | `/help-centre/` |
| **Support** | FAQs | `/faqs/` |
| **Support** | WhatsApp Support | `https://wa.me/2348154225462` |
| **Support** | Email Us | `mailto:contact@traxx.ng` |
| **Support** | Rider App Guide | `/rider-app-guide/` |
| **Legal** | Privacy Policy | `/privacy-policy/` |
| **Legal** | Terms of Service | `/terms-of-service/` |
| **Legal** | Security | `/security/` |
| **Legal** | Anti Gaming Policy | `/anti-gaming-policy/` |
| **Legal** | NDPR Compliance | `/ndpr-compliance/` |
| **Legal** | Fleet Operator Agreement | `/fleet-operator-agreement/` |

---

## How to Update the Main Landing Page (`https://www.traxx.ng/`)

1. Open your live `index.html` file.
2. Locate the existing `<footer class="site-footer">...</footer>` block (around lines 1523–1680).
3. Replace that block entirely with the contents of `footer-snippet.html`.
4. Ensure the root links `/web-dashboard/`, `/about/`, `/career/`, etc., point to the uploaded page folders.
5. Save and deploy.
