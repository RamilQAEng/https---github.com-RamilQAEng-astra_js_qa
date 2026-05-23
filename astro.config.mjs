import { defineConfig } from "astro/config";

const site = process.env.SITE_URL || "https://qa-ai.example";

export default defineConfig({
  site,
  output: "static",
});
