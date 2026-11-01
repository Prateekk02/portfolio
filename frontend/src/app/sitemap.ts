import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/profile";
import { projects } from "@/data/projects";

const STATIC_ROUTES = ["", "/projects", "/experience", "/blog", "/resources", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects.filter((p) => p.caseStudy).map((p) => `/projects/${p.slug}`);
  return [...STATIC_ROUTES, ...caseStudies].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
