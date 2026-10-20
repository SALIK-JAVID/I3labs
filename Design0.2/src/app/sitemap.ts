import type { MetadataRoute } from "next";
import { programs } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programs", "/labs", "/innovation", "/shop", "/about", "/contact"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.8 })),
    ...programs.map((p) => ({ url: `${site.url}/programs/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
