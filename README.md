# Kiran Bagul - Portfolio Website

Static HTML/CSS/JS portfolio website showcasing consulting services and professional experience.

## Structure

```
├── index.html                    # Homepage
├── pages/
│   ├── consulting-services.html # Consulting services page
│   └── about.html               # About page
├── partials/
│   ├── header.html              # Shared header navigation
│   └── footer.html              # Shared footer
├── css/
│   ├── main.css                 # Main stylesheet
│   └── normalize.min.css        # CSS reset
├── js/
│   └── main.js                  # JavaScript functionality
├── images/                      # Images and assets
├── svg/                         # SVG icons
├── robots.txt                   # SEO robots file
└── sitemap.xml                  # SEO sitemap

```

## Features

- **Dark Theme**: Professional dark gradient design
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Performance**: Optimized fonts, deferred scripts, minimal dependencies
- **Consulting Services**: Full consulting portfolio with service details
- **About Page**: Professional experience and expertise

## Local Development

Open `index.html` in a browser or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000`

## Deployment

The site automatically deploys to GitHub Pages on push to main branch via GitHub Actions.

## Technologies

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- GitHub Pages for hosting

