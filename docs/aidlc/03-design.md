# Design

## Narrative Structure

- Hero: state what Robocon changed
- Timeline: show how the journey evolved over time
- Turning Points: explain the moments that shifted skills or mindset
- Builds: highlight notable machines or subsystems
- Lessons: summarize what remained after the competitions
- Publish Section: make the site feel ready for a public URL

## Visual Direction

- Large compressed display type for headlines
- Technical sans-serif for body copy
- Warm orange and steel-blue palette instead of generic purple gradients
- Layered backgrounds with grids, glows, and panel borders
- Cards that resemble workshop dashboards rather than standard blog tiles

## Technical Design

- `index.html` provides the page shell and semantic sections
- `data/site-data.js` stores editable content
- `app.js` renders repeated sections and handles reveal animation
- `styles.css` contains theme, layout, motion, and responsive rules

## Rationale

Plain static files are the most reliable path for GitHub Pages, especially when the repo is starting from empty and the content will likely change often.
