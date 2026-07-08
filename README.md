# Hesham Alsadan Portfolio

Static GitHub Pages portfolio for AI, data science, and web projects.

## Structure

- `index.html` — page content and project cards
- `assets/css/style.css` — layout, responsive styles, RTL support
- `assets/js/script.js` — menu, language switch, filters, reveal effects, lazy videos
- `assets/pdf/CV_Hesham_Alsadan.pdf` — downloadable CV
- `my_projects/` — project images, videos, and reports

## Edit projects

Update each project card in `index.html`, then keep the English/Arabic text in `assets/js/script.js` in sync using the matching `data-project` key.

## Local checks

```bash
node --check assets/js/script.js
git diff --check
```

For GitHub Pages, push to `main`; the site deploys from this repository.
