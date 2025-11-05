# Qasar Labs — Premium Nebula Site

A Next.js (App Router) one‑pager with a live GLSL nebula background using react‑three‑fiber.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- three.js + @react-three/fiber + @react-three/drei

## Local Dev
```bash
pnpm i   # or npm i / yarn
pnpm dev
```

## Deploy
- Push to GitHub and import in **Vercel** (recommended)
- Or build a Docker image for **Render**

## Tuning
Edit `app/page.tsx`:
- Nebula colors: `u_colorA/B/C`
- Animation speed: change multiplier on `u_time`
- Star density: scale inside `noise(p*40.0 + ...)`

## Notes
- Contact form is client-side demo; wire it to server actions or a form service.
- Replace `public/og.png` with a 1200×630 Open Graph image.
- Update contact info in the Contact section.
