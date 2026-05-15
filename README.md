# Robocon Archive

Static website scaffold for publishing a personal Robocon history on GitHub Pages.

## What is included

- A responsive single-page site in plain HTML, CSS, and JavaScript
- Sample Robocon story content in one editable file: `data/site-data.js`
- AI-DLC-style project notes in `docs/aidlc/`
- GitHub Pages deployment workflow in `.github/workflows/deploy.yml`

## Why this structure

This repo follows the shape of AWS AI-DLC at a practical level:

- `Inception`: capture intent, requirements, and design in `docs/aidlc/`
- `Construction`: build the website as portable static files
- `Operations`: deploy through GitHub Pages and optionally attach a custom domain

## Edit your content

Update `data/site-data.js` to replace the sample values with your real:

- start year
- timeline entries
- robot or subsystem names
- competition lessons
- public footer note

## Local preview

Because the site uses ES modules, preview it through a local server instead of opening the file directly.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Push to `main` and let the workflow deploy the site.

## Custom domain

When you are ready, add a root-level `CNAME` file that contains only your domain, for example:

```text
robocon.yourdomain.com
```

Then configure the DNS records in GitHub Pages settings for that domain.
