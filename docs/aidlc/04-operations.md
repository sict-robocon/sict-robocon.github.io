# Operations

## Publish Path

The site is prepared for GitHub Pages using a repository workflow in `.github/workflows/deploy.yml`.

## Update Flow

1. Edit `data/site-data.js` with real years, team names, builds, and lessons.
2. Commit and push to the repository.
3. GitHub Actions deploys the latest static site to Pages.

## Optional Custom Domain

When ready, add a `CNAME` file at the repository root with the desired domain and configure DNS in GitHub Pages settings.

## Risks

- Sample content must be replaced with real personal history before final publication.
- Photos are not yet included, so the first published version depends on typography and layout more than media.
- If the repository uses a non-`main` default branch, the workflow trigger should be adjusted.
