# yasharya.dev

My personal portfolio, live at **[yasharya.dev](https://yasharya.dev)**.

I'm a backend-leaning full-stack engineer; this is the site I point people to from my resume and LinkedIn. The goal is simple: minimal, fast, and honest.

> **Status - July 2026:** Just launched and a work in progress. Right now it's a landing page and an experience page. Project case studies are on the way.

## Stack

- Static HTML, CSS, and a little vanilla JavaScript, no framework
- Light and dark mode
- Built mobile-first and accessible (WCAG 2.1 AA)
- Hosted on Cloudflare Workers (static assets, automatic HTTPS, deploys on push)

## Running it locally

No build step. Either open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000     # Python
# or
npx serve .                    # Node
```

Then open http://localhost:8000.

## Structure

```
.
├── index.html          # Landing page
├── experience.html     # Experience page
├── styles.css          # Design tokens, components, and light/dark theming
├── theme.js            # Light/dark toggle (vanilla JS)
├── og.png              # Social preview card (Open Graph / Twitter)
├── robots.txt          # Crawler policy + sitemap pointer
├── sitemap.xml         # Page list for search engines
└── wrangler.jsonc      # Cloudflare Workers config (static assets)
```

The favicon is an inline SVG data URI in each page's `<head>` (no image file). Archivo loads from Google Fonts via a non-render-blocking `<link>`.

## Deployment

Connected to Cloudflare Workers Builds via `wrangler.jsonc`: pushing to `main` deploys automatically (`npx wrangler deploy` uploads the static assets), and the custom domain `yasharya.dev` points at the Worker.

## Contact

Yash Arya - [yash@yasharya.dev](mailto:yash@yasharya.dev) · [LinkedIn](https://linkedin.com/in/yasharyadev) · [GitHub](https://github.com/yasharya-dev)
