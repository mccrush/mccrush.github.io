# Copilot instructions for mccrush.github.io

## Build, test, and validation commands

This repo is a Vite + Vue 3 static website. The checked-in package manager is pnpm, so prefer pnpm commands unless the environment only has npm available.

- Install dependencies: `pnpm install`
- Start the local dev server: `pnpm dev`
- Production build: `pnpm build`
- Preview the built site: `pnpm preview`
- Run the test runner: `pnpm test`

There is no dedicated lint script in `package.json`. The repo currently relies on the Vite build and Vitest directly for validation. If a test file is added, run one file directly with:

- `pnpm vitest run path/to/file.test.js`
- or `pnpm test -- --run path/to/file.test.js`

This project does not currently appear to have an established automated test suite in the repository, so `pnpm build` is the most relevant baseline check for changes until tests are added.

## High-level architecture

- The app is a single-page portfolio/site built with Vue 3 and Vite.
- The app entrypoint is `index.html`, which loads `/src/main.js`.
- `src/main.js` bootstraps the Vue app and mounts `App.vue` to `#app`.
- `src/App.vue` is the page-level composition root; it assembles the top-level sections such as the main hero, services, apps, and contacts.
- Feature blocks are organized under `src/modules/<area>/`, with nested component trees for each section (for example `main`, `services`, `apps`, and `contacts`).
- Static website content and lists are kept in `src/data/*.js` (for example app catalog data and service data). These are plain exported arrays/objects, not API-driven data sources.
- Styling is primarily Bootstrap 5 alongside SCSS files under `src/scss`. Global styles and theme tokens are centralized there, while component-specific styling stays close to each feature.
- The build output is directed to `docs/` via `vite.config.js`, because this repository is published through GitHub Pages. Do not hand-edit generated assets under `docs/`; regenerate them with `pnpm build`.

## Key conventions

- Keep feature composition in `src/modules/*` and shared metadata in `src/data/*`; do not scatter section data across components.
- Prefer Bootstrap utility classes and the existing dark-theme styling when adding UI; the site is heavily styled with Bootstrap rather than a custom component system.
- The codebase is content-driven and localized to Russian; preserve the existing terminology and copy style when modifying site text.
- Use the existing pattern of small, presentation-focused Vue components rather than introducing a centralized store or API layer for static content.
- When adding imports in Vue files, the project already configures the `@` alias in `vite.config.js` to point at `./src`; prefer that alias for new source imports.
- If a new section is intentionally disabled, follow the existing pattern in `App.vue` (for example commented-out imports and feature toggles rather than broad refactors).

## Project specifics

- This repository is a static marketing/portfolio website rather than a standard full-stack application; there is no backend or database layer to integrate.
- Most user-visible content is declarative data, so changes usually involve updating one of the `src/data/*.js` sets or a section component rather than creating complex state management.
- The root `docs/` directory is a generated deployment artifact and should stay aligned with the Vite build output.
