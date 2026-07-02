# 🎨 Color Fun

A friendly, kid-style coloring app with **500+ pictures**. Tap a shape to fill
it, scribble freely with a brush, splash on gradients, add your name, and save
your artwork. No accounts, no ads, and it works offline once loaded. Runs great
on **phone, iPad and desktop**, and can be added to the Home Screen so it opens
full-screen like a real app.

## Features

- **500+ pictures** — hand-drawn animals plus procedurally generated mandalas,
  flowers, starbursts, geometric patterns, bubble letters (A–Z) and numbers (0–9).
- **Categories & search** — jump to a theme or type to find a picture.
- **Full color palette** — 16 preset colors **plus a full-spectrum color picker**.
- **Gradients** — 8 ready-made gradient fills (sunset, ocean, rainbow, …).
- **Three tools** — 🪣 **Fill** (tap/drag zones), ✏️ **Draw** (freehand brush with
  S/M/L sizes), 🧽 **Erase**.
- **Add your name** — type it once; stamp it onto any picture and it's baked into
  the saved image.
- **Save** — export a crisp PNG (Share sheet → Save to Photos on iOS, download
  elsewhere).
- **Undo / Clear**, **🎲 Surprise me**, offline support, and installable as a PWA.

## What's inside

| File            | What it does                                            |
| --------------- | ------------------------------------------------------- |
| `index.html`    | The whole app — UI + coloring/drawing logic (one file)  |
| `pictures.js`   | Hand-drawn art + the procedural picture generator       |
| `manifest.json` | Makes it installable to the Home Screen                 |
| `sw.js`         | Service worker so it works offline                      |
| `icon.svg`      | Home Screen app icon                                    |
| `vercel.json`   | Static-hosting config for Vercel                        |

## Run it locally

Because it uses a service worker (for offline use), open it over `http://`, not
by double-clicking the file:

```
python3 -m http.server 8137
```

Then open `http://localhost:8137/` (or your computer's LAN IP from a phone on the
same Wi-Fi). On iPhone/iPad, tap **Share → Add to Home Screen**.

> You can also just open `index.html` in a desktop browser — everything works
> except offline caching.

## Put it online (Vercel)

This is a plain static site, so hosting is one click:

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to **vercel.com → New Project → Import** this repository.
3. Framework preset: **Other**. No build command, no output directory needed —
   Vercel serves the files as-is (`vercel.json` handles the service-worker and
   manifest headers).
4. Click **Deploy**. You'll get a public `https://…vercel.app` URL that works on
   any device.

Prefer the CLI? `npm i -g vercel && vercel` from this folder (then `vercel --prod`).

## Add your own pictures

Open `pictures.js`. The `ANIMALS` array holds hand-drawn art; add an entry with a
`240 × 240` viewBox. Any SVG shape with `class="z"` becomes a tappable, fillable
zone — everything else (eyes, whiskers, outlines) stays put.

```js
{
  id: 'balloon', name: 'Balloon', cat: 'animals',
  svg: `
    <ellipse class="z" cx="120" cy="100" rx="70" ry="85" fill="#fff"/>
    <path d="M120 185 L120 210" fill="none"/>
  `,
}
```

Made with love for personal use. Have fun coloring! ✏️
