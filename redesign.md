# Cranbear Multi-App Platform — Decoupled Skin & Data Architecture

## Executive Overview
The **Cranbear** platform is architected with complete **Separation of Concerns**. Core app data, metadata, and legal markdown content are 100% decoupled from the visual theme ("skin"). If you decide to redesign the UI or switch themes tomorrow, you only update CSS theme variables or layout skins without altering any app data, copy, or content.

---

## 1. Architecture Layers & Decoupling Matrix

```text
┌─────────────────────────────────────────────────────────────┐
│                    CORE DATA LAYER                          │
│  src/data/apps.ts          ──  App Metadata & Features      │
│  src/content/legal/        ──  Markdown Policies & Guides   │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Pure Data / No Styling)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    THEME & SKIN LAYER                       │
│  src/styles/theme/tokens.css ── Design System Variables     │
│  src/components/ui/         ── Reusable Skin Primitives     │
│  src/layouts/               ── Page Templates & Shells      │
└─────────────────────────────────────────────────────────────┘
```

| Layer | Responsibility | What it Contains | How You Edit It Tomorrow |
| :--- | :--- | :--- | :--- |
| **Data Layer** | App Copy & Content | `src/data/apps.ts`<br>`src/content/legal/` | Edit text, add new apps, or change store links without touching HTML/CSS. |
| **Skin / Theme Layer** | Visual Aesthetics | `src/styles/theme/tokens.css`<br>`src/layouts/`<br>`src/components/ui/` | Change fonts, colors, border-radii, cards, or theme skins without touching data. |

---

## 2. Theme Token Architecture (`src/styles/theme/tokens.css`)

All visual styling is governed by unified CSS Custom Properties. Changing the theme skin is as simple as updating these tokens:

```css
:root {
  /* Surface & Canvas Tokens */
  --skin-bg-base: #0a0a0c;
  --skin-bg-surface: #141417;
  --skin-bg-elevated: #1c1c21;
  
  /* Border & Radius Tokens */
  --skin-border: rgba(255, 255, 255, 0.08);
  --skin-radius-card: 1.5rem; /* 24px Apple Squircle */
  --skin-radius-button: 9999px; /* Pill Shape */
  
  /* Shadow Elevation */
  --skin-shadow-card: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  
  /* Typography Tokens */
  --skin-font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --skin-font-heading: 'Plus Jakarta Sans', var(--skin-font-sans);
  
  /* Brand Accent Colors */
  --skin-accent-emerald: #10b981;
  --skin-accent-cyan: #06b6d4;
  --skin-accent-indigo: #6366f1;
}
```

---

## 3. Page Layout Architecture

### A. Main Hub Page (`index.html`)
- **Apple Feature Hero**: Big headline + intro subtitle.
- **App Showcase Cards Grid**: Renders each app from `src/data/apps.ts` inside a `--skin-radius-card` Apple container:
  - App Icon (Squircle) + Title + Category Pill Badge.
  - Headline + Human-friendly feature checklist.
  - Screenshot Carousel (Full width phone frames).
  - Quick Action Buttons: `[ Play Store ]`, `[ User Guide ]`, `[ Privacy ]`, `[ Terms ]`.

### B. App-Specific Pages (`/[app]/`)
- Dedicated product showcase landing page for each app (`/universal-scanner/`, `/music-bridge/`, `/cosphere/`).

### C. App-Specific Help & User Guides (`/[app]/guide/`)
- Apple Knowledge Base layout displaying user guides, FAQs, and step-by-step instructions.

### D. App-Specific Privacy Policy (`/[app]/privacy/`) & Terms (`/[app]/terms/`)
- 2-column legal document reader with sticky "On This Page" Table of Contents outline.

---

## 4. Preservation Checklist
* `public/.well-known/assetlinks.json` (Android Digital Asset Links)
* `public/.nojekyll` (GitHub Pages Jekyll bypass)
* `public/assets/` (App icons, screenshots, brand logos)

---

## 5. Implementation Roadmap

1. **Setup Core Data File (`src/data/apps.ts`)**:
   Define pure TypeScript data interfaces and populate app metadata.
2. **Setup Theme Token System (`src/styles/theme/tokens.css`)**:
   Implement Apple design tokens decoupled from application logic.
3. **Build Skin Primitives (`src/components/ui/`)**:
   Create theme-aware `AppIcon`, `Button`, `Badge`, and `ScreenshotCarousel` components.
4. **Build Layouts & Pages (`src/layouts/` & `src/pages/`)**:
   Assemble Apple-style layouts for root hub, app portals, guides, privacy, and terms.
5. **Static Bundle Build Verification**:
   Execute `npm run build` to confirm zero-error output compilation in `dist/`.
