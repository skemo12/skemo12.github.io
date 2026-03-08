# About Me (Next.js Static Export)

A simple, single-page About Me site built with Next.js and exported as a static site for GitHub Pages.

## Customize

Update the content in `app/page.tsx` (name, bio, links, and stats).

## Development

```bash
npm install
npm run dev
```

## Static export

This project uses `output: "export"` in `next.config.js`.

```bash
npm run build
```

The static site is generated into the `out/` folder.

## GitHub Pages deployment

For a project site (not a user site), set `BASE_PATH` to your repo name when building.

```bash
# example: repo is https://github.com/you/about-me
BASE_PATH=/about-me npm run build
```

PowerShell:

```powershell
$env:BASE_PATH = "/about-me"
npm run build
```

Then deploy the `out/` folder to GitHub Pages.

The `public/.nojekyll` file is included so GitHub Pages serves the `_next` assets.
