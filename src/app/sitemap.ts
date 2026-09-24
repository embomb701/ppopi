import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products", "/order", "/services", "/gallery", "/about", "/faq", "/disclaimer", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
