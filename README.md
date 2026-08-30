# Hesham Alsadan Portfolio

Static GitHub Pages portfolio for AI, data science, and web projects.

## Structure

- `index.html` — page content and project cards
- `assets/css/style.css` — layout, responsive styles, RTL support
- `assets/js/script.js` — menu, language switch, filters, reveal effects, lazy videos
- `assets/pdf/CV_Hesham_Alsadan.pdf` — downloadable CV
- `assets/certificates/` — certificate PDFs, plus `thumbs/` previews rendered from page 1 of each
- `assets/logos/` — issuer logos, monochromed in CSS for the dark theme
- `my_projects/` — project images, videos, and reports

## Edit content

`assets/js/script.js` rewrites the page text on load, so every visible string lives in two places: the markup in `index.html` and the `translations` object in the script. Update both, or the script will overwrite the markup.

Repeated blocks are keyed by a `data-` attribute so items can be added or reordered without shifting the other translations:

- project cards — `data-project`
- experience entries — `data-exp`
- certifications — `data-cert`

## Certificate stream

The certifications rail is one `.cert-set` in the markup; the script clones it so the
`-50%` keyframe loops seamlessly. Travel direction follows the reading direction —
`html[dir="ltr"]` streams left to right, `html[dir="rtl"]` right to left — and the loop
duration is derived from the measured set width so the speed stays constant at any
viewport. Hovering or focusing a card pauses the rail and scales that card up.

The rail can also be dragged by hand. A CSS animation outranks an inline
transform, so a drag switches the animation off, moves the track directly, and
switches it back on with a negative `animation-delay` that resumes from wherever
the visitor left it — the same trick the language switch uses. Positions wrap
into one set width, which is what keeps dragging endless in both directions.
Pointer capture is deferred until the gesture passes a 6px threshold, because a
captured pointer retargets the click away from the card and would stop a plain
click opening the PDF. Under `prefers-reduced-motion` the rail is a plain scroll
container instead and the custom drag stays out of the way.

To add a certificate: drop the PDF in `assets/certificates/`, render a preview with

```bash
pdftoppm -png -r 200 -f 1 -l 1 assets/certificates/<name>.pdf /tmp/<name>
```

trim it to the artwork and centre it on a 900x600 white canvas as `thumbs/<name>.webp`
and `.jpg`, then add the card to `index.html` and both `translations` blocks.

## Local checks

```bash
node --check assets/js/script.js
git diff --check
```

For GitHub Pages, push to `main`; the site deploys from this repository.
