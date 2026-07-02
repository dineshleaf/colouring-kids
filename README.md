# 🎨 Color Fun

A tiny, personal, kid-style coloring app — tap a shape to fill it with color. No
accounts, no ads, no internet needed once it's loaded. Works great in Safari on
an iPhone and can be added to your Home Screen so it opens full-screen like a
real app.

Inspired by the little animal coloring apps: pick a picture (cat, fish,
butterfly, turtle, ladybug, flower, snail, star, mushroom), choose a crayon
color, and tap the parts to color them in. Undo, clear, and save your picture
to Photos.

## What's inside

| File            | What it does                                            |
| --------------- | ------------------------------------------------------- |
| `index.html`    | The whole app — UI + coloring logic (one file)          |
| `pictures.js`   | The line-art pictures (add your own here)               |
| `manifest.json` | Makes it installable to the Home Screen                 |
| `sw.js`         | Service worker so it works offline                      |
| `icon.svg`      | Home Screen app icon                                    |

## How to use it on your iPhone

Because it uses a service worker (for offline use), open it over `http://`, not
by double-clicking the file. Two easy ways:

### Option A — Run it from your Mac/PC on the same Wi-Fi
1. In this folder, start a tiny web server:
   ```
   python3 -m http.server 8137
   ```
2. Find your computer's local IP (e.g. `192.168.1.20`).
3. On your iPhone (same Wi-Fi), open Safari and go to:
   `http://192.168.1.20:8137/`
4. Tap the **Share** button → **Add to Home Screen**. Done — open it any time
   from the icon; it works even without Wi-Fi after the first load.

### Option B — Host it for free
Put this folder on any free static host (GitHub Pages, Netlify, Cloudflare
Pages), open the URL on your iPhone, then **Add to Home Screen**.

> Just want to try it fast? You can also open `index.html` directly in a desktop
> browser — everything works except offline caching.

## Saving your artwork

Tap **💾 Save**. On modern iPhones this opens the Share sheet so you can
**Save Image** to Photos. On other browsers it downloads a PNG.

## Add your own pictures

Open `pictures.js` and copy one of the entries. Any SVG shape with
`class="z"` becomes a tappable, fillable zone. Everything else (eyes,
whiskers, outlines) stays put. All pictures use a `240 × 240` viewBox.

```js
{
  id: 'balloon',
  name: 'Balloon',
  svg: `
    <ellipse class="z" cx="120" cy="100" rx="70" ry="85" fill="#fff"/>
    <path d="M120 185 L120 210" fill="none"/>
  `,
}
```

Made for personal use. Have fun coloring! ✏️
