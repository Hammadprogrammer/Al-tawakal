# Tawakal BBQ — Static Website

Fully static Next.js site (no database, no API routes, no server). `next build` produces a plain
HTML/CSS/JS bundle in `out/` that can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages
or any static file server.

## Getting Started

```bash
npm install
npm run dev        # local dev server on http://localhost:3000
npm run build      # static export into ./out
npm start          # serve the exported ./out folder locally
```

## Content / Data

All site content lives in `data/static-data.ts`:

- `MENU_CATEGORIES`, `MENU_ITEMS` — categories, dishes, prices, images
- `DEALS` — combo deals shown on the homepage and `/deals`
- `BRANCHES`, `ACTIVE_BRANCHES` — restaurant branches (`isActive: false` hides a branch)
- `DELIVERY_AREAS` — delivery areas + fees per branch
- `RESTAURANT_SETTINGS` — phone numbers, WhatsApp number, address, delivery fee, etc.

Editing this file and re-running `npm run build` updates the whole site (menu pages for each item
are generated automatically via `generateStaticParams`).

## Orders & Reservations

There is no backend. Order and reservation forms build a pre-filled WhatsApp message
(`lib/whatsapp-link.ts`) and open WhatsApp click-to-chat. Orders are also saved in the browser's
localStorage (`lib/local-orders.ts`) so `/order-confirmation` and `/track-order` can show the
order placed on that device.

The business WhatsApp number can be overridden with `NEXT_PUBLIC_WHATSAPP_ADMIN_NUMBER`
(see `.env.example`); otherwise the active branch's number from `data/static-data.ts` is used.

## Notes

- Security headers (CSP, HSTS, X-Frame-Options, ...) can't be set by a static export — configure
  them at the hosting layer (e.g. Netlify `_headers`, Cloudflare rules, Nginx).
- Images use `images.unoptimized: true` because the Next.js image optimizer needs a server.
- `trailingSlash: true` is enabled so every route maps to a `.../index.html` file.
