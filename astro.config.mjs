// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({
// 	site: 'https://example.com',
// 	integrations: [mdx(), sitemap()],
// });

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

const tina = ({ directiveName = "tina" } = {}) => ({
  name: "tina-cms",
  hooks: {
    "astro:config:setup": ({ addClientDirective, opts }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: "./client-directives/tina.mjs",
      });
    },
  },
});

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tina(), mdx(), sitemap()],
});
