# Kiran Bagul — personal portfolio

A static, responsive portfolio for engineering leadership and independent products. Hosted on GitHub Pages at https://www.kiranbagul.com.

## Pages

- `index.html`: introduction, selected work, products, and engineering approach.
- `pages/about.html`: background, experience, community, and education.
- `pages/consulting-services.html`: secondary advisory page, linked from the footer.
- `css/main.css`: shared responsive styles.
- `partials/`: shared header and footer sources.
- `js/main.js`: optional copyright-year update. Content and navigation work without JavaScript.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No installation or build is required.

Header and footer markup is included directly in each page. After editing either partial, update the pages with:

```sh
python3 scripts/sync-partials.py
```

Page-specific content is edited directly in the HTML files. Social previews use the existing portrait. Canonical URLs and the sitemap use the `www` hostname configured in `CNAME`.

## Deployment

The existing GitHub Pages workflow deploys changes pushed to `master`. Local edits do not change the public site until deployed.
