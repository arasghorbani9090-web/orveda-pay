import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://www.orvedapay.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orveda Pay — Global Financial Infrastructure for Modern Businesses",
    template: "%s · Orveda Pay",
  },
  description:
    "Orveda Pay provides global financial infrastructure for modern businesses. Open multi-currency business accounts, receive international payments, and send funds worldwide through secure, compliant banking networks.",
  keywords: [
    "Orveda Pay",
    "multi-currency business account",
    "international payments",
    "SWIFT payments",
    "cross-border settlements",
    "KYC",
    "KYB",
    "AML compliance",
    "fintech",
    "business banking",
  ],
  authors: [{ name: "Orveda Pay" }],
  creator: "Orveda Pay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Orveda Pay",
    title: "Orveda Pay — Global Financial Infrastructure for Modern Businesses",
    description:
      "Open multi-currency business accounts, receive international payments, and send funds worldwide through secure banking networks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orveda Pay — Global Financial Infrastructure",
    description:
      "Multi-currency business accounts, international payments, and compliant cross-border settlements.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#071A35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
