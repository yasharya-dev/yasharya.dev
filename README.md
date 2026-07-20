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

No build step. Either open `public/index.html` directly, or serve the deploy root:

```bash
python -m http.server 8000 --directory public     # Python
# or
npx serve public                                  # Node
```

Then open http://localhost:8000.

## Structure

```
.
├── README.md               # This file (not deployed)
├── wrangler.jsonc          # Cloudflare Workers config (not deployed)
└── public/                 # Deploy root: everything below is served as-is
    ├── index.html          # Landing page
    ├── experience.html     # Experience page
    ├── assets/
    │   ├── styles.css      # Design tokens, components, and light/dark theming
    │   └── theme.js        # Light/dark toggle (vanilla JS)
    ├── og.png              # Social preview card (Open Graph / Twitter)
    ├── favicon.ico         # Multi-size favicon (16/32/48), also picked up by Google Search
    ├── favicon-96x96.png   # Larger favicon for high-DPI tabs and Google
    ├── apple-touch-icon.png# iOS home-screen icon (180x180)
    ├── robots.txt          # Crawler policy + sitemap pointer
    └── sitemap.xml         # Page list for search engines
```

Archivo loads from Google Fonts via a non-render-blocking `<link>`.

## Deployment

Connected to Cloudflare Workers Builds via `wrangler.jsonc`: pushing to `main` deploys automatically (`npx wrangler deploy` uploads the static assets), and the custom domain `yasharya.dev` points at the Worker.

## Contact

Yash Arya - [yash@yasharya.dev](mailto:yash@yasharya.dev) · [LinkedIn](https://linkedin.com/in/yasharyadev) · [GitHub](https://github.com/yasharya-dev)
