import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-pages";
import { retreats } from "@/lib/data";

const baseUrl = "https://yogaretreatbali.com";

const filters = ["luxury", "affordable", "detox", "meditation", "beginner"];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = Array.from(new Set(retreats.map((retreat) => retreat.location.toLowerCase()))).map((location) => ({
    url: `${baseUrl}/retreats/location/${location}`,
    lastModified: new Date(),
  }));

  const filterPages = filters.map((filter) => ({
    url: `${baseUrl}/retreats/filter/${filter}`,
    lastModified: new Date(),
  }));

  const seoLandingPages = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...seoLandingPages,
    ...locationPages,
    ...filterPages,
  ];
}
