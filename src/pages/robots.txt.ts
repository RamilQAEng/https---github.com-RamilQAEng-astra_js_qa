import { site } from "@/data/site";

export function GET() {
  const robots = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /thank-you/",
    "Disallow: /checkout/",
    "Disallow: /downloads/",
    "",
    `Sitemap: ${new URL("sitemap.xml", site.url).toString()}`,
    "",
  ].join("\n");

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
