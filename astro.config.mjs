import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  compressHTML: true,

  build: {
    inlineStylesheets: "auto",
  },

  image: {
    domains: [],
    remotePatterns: [],
  },

  adapter: cloudflare()
});