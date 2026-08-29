# Hesham Alsadan Portfolio

Static GitHub Pages portfolio for AI, data science, and web projects.

## Structure

- `index.html` — page content and project cards
- `assets/css/style.css` — layout, responsive styles, RTL support
- `assets/js/script.js` — menu, language switch, filters, reveal effects, lazy videos
- `assets/pdf/CV_Hesham_Alsadan.pdf` — downloadable CV
- `my_projects/` — project images, videos, and reports

## Edit content

`assets/js/script.js` rewrites the page text on load, so every visible string lives in two places: the markup in `index.html` and the `translations` object in the script. Update both, or the script will overwrite the markup.

Repeated blocks are keyed by a `data-` attribute so items can be added or reordered without shifting the other translations:

- project cards — `data-project`
- experience entries — `data-exp`
- certifications — `data-cert`

## Local checks

```bash
node --check assets/js/script.js
git diff --check
```

For GitHub Pages, push to `main`; the site deploys from this repository.
