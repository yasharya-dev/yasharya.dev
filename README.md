# yasharya.dev

My personal portfolio, live at **[yasharya.dev](https://yasharya.dev)**.

I'm a backend-leaning full-stack engineer; this is the site I point people to from my resume and LinkedIn. The goal is simple: minimal, fast, and honest.

> **Status - July 2026:** Just launched and a work in progress. Right now it's a landing page and an experience page. Project case studies are on the way.

## Stack

- Static HTML, CSS, and a little vanilla JavaScript, no framework
- Light and dark mode
- Built mobile-first and accessible (WCAG 2.1 AA)
- Hosted on Cloudflare Pages (automatic HTTPS, deploys on push)

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
├── styles/             # CSS
├── scripts/            # JavaScript
└── assets/             # Images and favicon
```

_(Update to match the actual files once the site is in.)_

## Deployment

Connected to Cloudflare Pages: pushing to `main` builds and deploys automatically, and the custom domain `yasharya.dev` points at the Pages project.

## Contact

Yash Arya - [yash@yasharya.dev](mailto:yash@yasharya.dev) · [LinkedIn](https://linkedin.com/in/yasharyadev) · [GitHub](https://github.com/yasharya-dev)
