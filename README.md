# Qasar Labs

Corporate website for **Qasar Labs** — a CEA-aligned electrical equipment manufacturer focused on import substitution for India's power infrastructure.

**Live:** [qasarlabs.com](https://qasarlabs.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS 3.4 (class-based dark mode) |
| Animations | CSS keyframes + IntersectionObserver scroll reveals |
| Illustrations | Inline React SVG components with CSS animations |
| Deployment | Vercel (auto-deploy from `main`) |

> **Note:** Three.js dependencies (`three`, `@react-three/fiber`, `@react-three/drei`) are listed in `package.json` from the original build but are **no longer used**. They can be safely removed.

---

## Project Structure

```
app/
  layout.tsx                         Root layout, metadata, dark mode anti-flash script
  page.tsx                           Page composition (imports all sections)
  globals.css                        CSS variables, keyframe animations, circuit-bg pattern

  components/
    AnimatedSection.tsx               IntersectionObserver scroll-reveal wrapper
    Nav.tsx                           Fixed header, mobile menu, dark mode toggle
    Hero.tsx                          Hero with decorative circuit SVG background
    TrustBar.tsx                      Certification badges bar
    ProductShowcase.tsx               Product data + orchestrates ProductSection renders
    ProductSection.tsx                Alternating layout (text + SVG + process flow)
    RoadmapMarket.tsx                 Dark section: market stats + 3-phase growth timeline
    Contact.tsx                       Contact info + inquiry form
    Footer.tsx                        Copyright bar

    svg/
      EpoxyInsulatorSVG.tsx           Animated HV insulator cross-section
      HeatShrinkSVG.tsx               Animated busbar tubing with heat waves
      CircuitBreakerSVG.tsx           11kV VCB panel with arc flicker + LED
      BusbarSystemSVG.tsx             Modular trunking with power pulse animation
      NetworkSwitchSVG.tsx            IEC 61850 switch with GOOSE/MMS topology
      ProcessFlow.tsx                 Reusable 5-step horizontal process diagram

tailwind.config.ts                   Dark mode, custom colors (navy, accent, tints)
```

---

## Page Sections (top to bottom)

1. **Nav** — Fixed header with Products / Roadmap / Contact links, dark mode toggle, "Request Quote" CTA
2. **Hero** — Full-height section with headline, subtitle, two CTAs, decorative circuit SVG
3. **TrustBar** — BIS Certified, IEC Compliant, CEA Localization Partner, MSME Registered, Make in India
4. **Product Sections (x5)** — Alternating left/right layouts with animated SVG illustrations and process flow diagrams:
   - Epoxy APG Casting (Phase 1, blue tint)
   - Heat Shrink Tubing (Phase 2, green tint)
   - VCB Distribution & AMC (Phase 1, blue-green blend)
   - Busbar Trunking Systems (Phase 3, green-blue blend)
   - IEC 61850 Networking (Phase 3, blue-green blend)
5. **Roadmap & Market** — Dark navy section with 4 market stat cards and 3-phase growth timeline
6. **Contact** — Two-column layout: contact info + inquiry form
7. **Footer** — Logo + copyright

---

## Design System

### Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `navy` | `#1e3a5f` | same | Primary brand, headings |
| `navy-dark` | `#0f2440` | same | Hover states, roadmap bg |
| `accent` | `#0ea5e9` | same | Highlights, timeline accents |
| `page` | `#f8f9fb` | `#0a0f1a` | Page background |
| `tint-blue` | `#eef4fb` | `#0c1528` | Blue product section tint |
| `tint-green` | `#eef7f2` | `#0c1a14` | Green product section tint |

### Dark Mode

- **Strategy:** Tailwind `darkMode: 'class'` on `<html>`
- **Toggle:** Sun/moon button in Nav, persisted to `localStorage`
- **Anti-flash:** Inline `<script>` in `layout.tsx` reads `localStorage` before first paint
- **Fallback:** Respects `prefers-color-scheme: dark` if no saved preference
- **SVG labels:** Global CSS rule `.dark .svg-illustration text { fill: #cbd5e1 }` adapts all SVG text

### Animations (CSS keyframes in `globals.css`)

| Class | Animation | Duration | Used By |
|-------|-----------|----------|---------|
| `animate-float` | Gentle vertical bob | 4s | All SVG illustrations |
| `animate-pulse-glow` | Blue drop-shadow pulse | 3s | Conductor glow, joint LEDs |
| `animate-draw-path` | Stroke dash reveal | 2s | Hero circuit paths |
| `animate-flow` | Dashed line flow | 0.8s | Process flow connectors |
| `animate-arc` | Opacity flicker | 2s | VCB electrical arc |
| `animate-shrink` | Scale oscillation | 3s | Heat shrink tube |
| `animate-data-flow` | Translate + fade | 2s | Network data packets |
| `animate-power-pulse` | Translate + opacity | 2.5s | Busbar power flow |
| `animate-heat-wave` | Rise + fade | 2s | Heat waves above tube |
| `animate-resin-drip` | Fall + fade | 2.5s | Epoxy resin particles |
| `animate-led-blink` | Step toggle | 1.2s | VCB/switch LEDs |

All animations respect `prefers-reduced-motion: reduce`.

### Scroll Reveals (`AnimatedSection`)

Wrapper component using `IntersectionObserver` (threshold 0.15, fires once). Supports:
- `direction`: `up`, `left`, `right`, `fade`
- `delay`: stagger in ms
- Applies `opacity-0 translate-*` to `opacity-100 translate-0` transition

---

## Local Development

```bash
npm install
npm run dev        # starts on http://localhost:3000
```

### Build

```bash
npm run build      # production build
npm start          # serve production build
```

---

## Deployment

The site auto-deploys to **Vercel** on push to `main`.

- **Framework:** Next.js (auto-detected)
- **Build command:** `next build`
- **Output:** Static + SSR (App Router)
- **Domain:** qasarlabs.com (configured in Vercel dashboard)

---

## Customization Notes

- **Contact form:** Client-side only (`e.preventDefault()`). Wire to a server action, API route, or form service (Formspree, etc.) for actual submissions.
- **OG image:** Replace `public/og.png` with a branded 1200x630 image.
- **Products:** Edit `ProductShowcase.tsx` to add/remove/reorder products. Each product needs a title, subtitle, description, specs array, SVG component, and process steps.
- **Market data:** Edit the `stats` and `phases` arrays in `RoadmapMarket.tsx`.
