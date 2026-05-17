# Zahid Ali — Portfolio

This repository contains a modern portfolio site for Zahid Ali built with Vite + React and a static Tailwind preview for quick checks.

## Contents
- `src/` — React source (main app in `src/App.jsx`).
- `preview.html` — dependency-free static preview using Tailwind CDN.
- `package.json`, `vite.config.js`, `tailwind.config.cjs` — build tooling.

## Quick start

Install dependencies (if needed):
```bash
npm install --legacy-peer-deps
```

Run dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Open the static preview (no install required):
- Double-click `preview.html` in the project root or serve it with a static server.

## Updating projects & testimonials
- React app: edit `src/App.jsx` — the `projects` and `testimonials` arrays are defined at the top.
- Static preview: edit `preview.html` — there are `projects` and `reviews` arrays inside the inline scripts.

## Versioning and future updates
- This project uses manual versioning. Add a `VERSION` file or tag commits when releasing updates. Example semantic tag: `v1.0.0`.

## Notes / Troubleshooting
- If you hit dependency or peer errors, try `npm install --legacy-peer-deps` (used during initial setup).
- If animations or filtering appear stuck in the dev server, refresh the page or restart the dev server; the `ProjectGallery` uses `key={selected}` to remount on category change.

If you want, I can:
- Add a `VERSION` file and a short release checklist.
- Wire up a simple script to bump versions automatically.
# Zahid Ali — Portfolio (local)

This workspace contains a minimal Vite + React scaffold to preview the portfolio component.

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Notes:
- Tailwind CSS is configured; the design uses Tailwind utility classes.
- Icons require `lucide-react` and animations use `framer-motion`.
