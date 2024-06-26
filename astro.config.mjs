import { defineConfig } from "astro/config";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
});
