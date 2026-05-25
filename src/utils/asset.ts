const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix any root-relative path with Astro's base URL (needed for GitHub Pages project sites) */
export const asset = (path: string): string =>
  path.startsWith("http") || path.startsWith("//") || path.startsWith("mailto:")
    ? path
    : `${base}${path}`;
