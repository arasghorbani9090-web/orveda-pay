import type { Metadata } from "next";

export const siteConfig = {
  name: "Orveda Pay",
  url: "https://www.orvedapay.com",
  description:
    "Orveda Pay provides global financial infrastructure for modern businesses. Open multi-currency business accounts, receive international payments, and send funds worldwide through secure, compliant banking networks.",
};

/**
 * Build per-page metadata with a unique title + description, canonical URL,
 * and matching Open Graph / Twitter card tags.
 *
 * @param title          Page-specific title (e.g. "Solutions"). The browser tab
 *                       title gets " · Orveda Pay" appended via the layout
 *                       template; pass `absoluteTitle` to opt out (used on Home).
 * @param description    Unique meta description for the page.
 * @param path           Route path beginning with "/" (e.g. "/solutions").
 * @param absoluteTitle  When true, the title is used verbatim (no brand suffix).
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogTitle = absoluteTitle ? title : `${title} · ${siteConfig.name}`;
  const ogImage = {
    url: "/og",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — Global financial infrastructure for modern businesses`,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url,
      title: ogTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og"],
    },
  };
}
