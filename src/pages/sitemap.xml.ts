import { site } from "@/data/site";

const pages = ["", "contacts/", "privacy/", "offer/", "refund/", "cookies/"];

export function GET() {
  const urls = pages
    .map((page) => {
      const loc = new URL(page, site.url).toString();
      return `<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${page ? "0.6" : "1.0"}</priority></url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
