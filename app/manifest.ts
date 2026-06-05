import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orveda Pay — Global Financial Infrastructure",
    short_name: "Orveda Pay",
    description:
      "Open multi-currency business accounts, receive international payments, and send funds worldwide through secure, compliant banking networks.",
    start_url: "/",
    display: "standalone",
    background_color: "#071A35",
    theme_color: "#071A35",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
