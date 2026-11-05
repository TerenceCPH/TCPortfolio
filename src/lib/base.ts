/** Site root, always with a trailing slash. `/` locally, `/TCPortfolio/` on GitHub Pages. */
export const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
