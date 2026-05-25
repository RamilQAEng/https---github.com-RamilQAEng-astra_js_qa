import { defineConfig } from "astro/config";

const site = process.env.SITE_URL || "https://qa-ai.example";
const base = process.env.BASE_PATH || "";

export default defineConfig({
  site,
  base,
  output: "static",
});
