ZOVU Website (Landing Page)

Project scaffolding for a static landing page to be built 1:1 from provided screenshots.

Structure
- `landingpage/index.html`: Landing page entry for deployment
- `landingpage/styles/main.css`: Styles used by the landing page
- `landingpage/js/main.js`: Small interactions (accordions, year)
- `landingpage/assets/images`: Place images here
- `src/` remains as working source if we iterate later

Usage
1. Open `public/index.html` in a browser.
2. Replace placeholder images in `public/assets/images` with your final assets using the same filenames used in the HTML.
3. Later we will add the hero background video by swapping the placeholder with a `<video>` element.

Deployment
- On Vercel, set the Project Root to the repository root and Framework to "Other".
- Set Output Directory to `landingpage` so Vercel serves `landingpage/index.html`.


