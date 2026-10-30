# Veloura website

Marketing site and privacy policy for the Veloura Android app, modelled on
[santagallery.app](https://santagallery.app). Next.js (App Router), Tailwind CSS, static export.

| Page | File |
|---|---|
| `/` — hero, features, Veloura Home, privacy, screenshots | `src/app/page.tsx` |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` |
| `/terms` | `src/app/terms/page.tsx` |

App name, package, domain and contact email: `src/lib/site.ts`.
Screenshots: `public/screenshots/` (627×1400 JPEG, taken from the app on an emulator).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Deploy

`npm run build` writes plain HTML/CSS/JS to `out/`. Upload that folder to any static host
(Cloudflare Workers static assets like santagallery.app, Vercel, Netlify, GitHub Pages).

## Before launch

- Set the real domain and contact email in `src/lib/site.ts` (both are placeholders), and confirm `governingLaw`.
- If the app is renamed, update `site.name` / `site.packageName` and retake the screenshots.
- Add `public/app-ads.txt` once the real Ad Manager publisher ID is known
  (`google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`).
- Check the privacy policy still matches the app: ads, Firebase and permissions.
