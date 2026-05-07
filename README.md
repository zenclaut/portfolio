# Portfolio (React + Vite)

This project is configured for deployment to GitHub Pages.

## Stack detection

- Build tool: **Vite** (`vite` scripts and config present)
- Router: **Not used** (`react-router-dom` not found)

## Deployment setup

- `gh-pages` is used to publish static files.
- Vite base path is configured for GitHub Pages:
  - `base: "/portfolio/"` in `vite.config.js`
- Build output directory:
  - `dist/`
- Deploy command publishes `dist/` to `gh-pages` branch.

## Commands

```bash
npm install
npm run build
npm run deploy
```

## GitHub Pages settings

1. Go to your repository on GitHub.
2. Open **Settings > Pages**.
3. In **Build and deployment**, set source to:
   - **Deploy from a branch**
4. Select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Save.

## Notes

- Asset paths are configured to load correctly from `/portfolio/`.
- If React Router is added later, use:
  - `basename="/portfolio/"` on `BrowserRouter`.
