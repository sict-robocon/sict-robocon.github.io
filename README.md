# Robocon Archive

Static website scaffold for publishing a personal Robocon history on GitHub Pages.

## What is included

- A responsive single-page site in plain HTML, CSS, and JavaScript
- Sample Robocon story content in one editable file: `data/site-data.js`
- English and Mongolian language switching
- A browser-side editor for text, awards, and image uploads
- Public sections for `Home`, `Competitions`, `Reward`, `History`, `Projects`, `Experiments`, `Support`, and `Talarhal`
- AI-DLC-style project notes in `docs/aidlc/`
- GitHub Pages deployment workflow in `.github/workflows/deploy.yml`

## Why this structure

This repo follows the shape of AWS AI-DLC at a practical level:

- `Inception`: capture intent, requirements, and design in `docs/aidlc/`
- `Construction`: build the website as portable static files
- `Operations`: deploy through GitHub Pages and optionally attach a custom domain

## Edit your content

You have two ways to edit content:

- Edit `data/site-data.js` directly in the repo
- Use the in-browser `Edit Site` drawer for local content editing

Replace the sample values with your real:

- start year
- competitions
- rewards and results
- history timeline
- projects and experiments
- support organizations
- talarhal messages

## Browser editor

The page now includes an `Edit Site` button.

- Text edits are stored in your browser automatically
- Localized content fields support both English and Mongolian
- Uploaded images are compressed and stored locally in the browser
- `Export JSON` downloads your edited content
- `Import JSON` restores a previous export

Important:

- Browser edits do not automatically commit back into the Git repository
- Large or many images can exceed browser storage limits
- For permanent publishing, keep important images in the repo or another stable URL and then push the code

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
