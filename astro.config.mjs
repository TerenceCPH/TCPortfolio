// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// GitHub Pages serves this repo at /TCPortfolio/. Local dev stays at /.
const base = process.env.GITHUB_PAGES ? "/TCPortfolio" : undefined;

// https://astro.build/config
export default defineConfig({
  site: "https://terencecph.github.io",
  base,
  output: "static",
  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
