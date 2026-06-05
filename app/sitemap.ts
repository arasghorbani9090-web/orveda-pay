import type { MetadataRoute } from "next";

const base = "https://www.orvedapay.com";

const routes = [
  "",
  "/solutions",
  "/multi-currency-accounts",
  "/international-payments",
  "/compliance-security",
  "/pricing",
  "/about",
  "/contact",
  "/register",
  "/dashboard",
  "/legal/privacy",
  "/legal/terms",
  "/legal/aml",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
