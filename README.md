# TCPortfolio

Personal portfolio for Terence Chan, built with [Astro](https://astro.build) and published as a static site on GitHub Pages.

**Live:** [https://terencecph.github.io/TCPortfolio/](https://terencecph.github.io/TCPortfolio/)

## Tech stack

- Astro (static output)
- MDX via Astro Content Collections
- TypeScript
- Vanilla CSS

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

## Commands

| Command        | Action                               |
| :------------- | :----------------------------------- |
| `pnpm dev`     | Start the dev server                 |
| `pnpm build`   | Build the static site into `./dist/` |
| `pnpm preview` | Preview the production build         |

Profile copy lives in `src/content/profile.ts`. Email and GitHub stay hidden until those fields are set there. A push to `main` builds the site and publishes it to GitHub Pages.
