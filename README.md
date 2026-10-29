# Hesham Alsadan Portfolio

Static GitHub Pages portfolio for AI, data science, and web projects.

## Structure

- `index.html`: page content and project cards. It includes the hand-drawn Riyadh skyline
  (inline SVG in the hero) and the icon sprite (Font Awesome Free SVGs, CC BY 4.0) just after
  `<body>`. Icons are used as `<svg class="icon"><use href="#i-name"/></svg>`.
- `assets/css/style.css`: the light and dark tokens, layout, responsive styles and RTL support.
- `assets/js/script.js`: the menu, language and theme switches, filters, the certificate rail and
  lazy videos.
- `assets/fonts/`: self-hosted Lexend (Latin) and Readex Pro (Arabic) variable woff2 subsets.
  There are no third-party font or icon requests.
- `assets/pdf/CV_Hesham_Alsadan.pdf`: the downloadable CV.
- `assets/certificates/`: certificate PDFs, plus `thumbs/` previews rendered from page 1 of each.
- `assets/logos/`: issuer logos, shown in color in light mode and turned white in CSS for the
  dark theme.
- `my_projects/`: project images, videos and reports.

## Edit content

Each language keeps its strings in exactly one place:

- **English** lives only in `index.html`. The script reads it from the markup on load and
  restores it when the visitor switches back, so edit English in the HTML and nowhere else.
- **Arabic** lives in `translations.ar` in `assets/js/script.js`, keyed by the same names the
  markup uses: `text` for `data-i18n` and `data-i18n-html` keys, `attrs` for `data-i18n-attr` keys.

Keys are named by meaning, not position (`nav.home`, `about.p2`, `exp.gpu.text`,
`cert.t5.meta`, `project.kharaf.link`), so blocks can be added or reordered freely. One key may
sit on several elements, like `category.ai` on every AI card.

To make an element translatable, give it a key and add the Arabic under that key:

- `data-i18n="key"` swaps the text. Use it on elements that hold plain text only.
- `data-i18n-html="key"` swaps the inner HTML, for text that carries inline markup
  (`<strong>`, `<em>`, `<br>`, the accent `<span>`).
- `data-i18n-attr="aria-label:key; alt:key"` swaps attribute values, one `attribute:key` pair per
  attribute.

When an element mixes a Font Awesome icon with text, wrap only the text in a `<span>` with the key,
so the icon is never re-rendered.

The page opens in English. `?lang=ar` (or `?lang=en`) picks the language from the URL; otherwise
the visitor's last choice, saved in `localStorage` as `portfolio-lang`, is used. A `lang` in the
URL is saved too, and toggling the switch keeps an existing `?lang=` in step.

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
and `.jpg`, then add the card to `index.html` with `data-cert="<id>"`, plus
`data-i18n="cert.<id>.name"` and `data-i18n="cert.<id>.meta"` on its name and meta, and add the Arabic for both keys to
`translations.ar.text`.

## Local checks

```bash
node --check assets/js/script.js
git diff --check
```

The training-hours bars in the About panel are real data: each bar's `--h` is the program's
hours, scaled against the largest (360). Keep them in step with the certificates, and with the
"1,500+" in the copy, when a program is added.

For GitHub Pages, push to `main`; the site deploys from this repository.
