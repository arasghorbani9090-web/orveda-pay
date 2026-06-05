"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

// Routes that have their own full-screen chrome and shouldn't show the
// marketing footer.
const hideOn = ["/signin", "/register", "/dashboard"];

export function SiteFooter() {
  const pathname = usePathname();
  if (hideOn.some((r) => pathname === r || pathname.startsWith(`${r}/`))) {
    return null;
  }
  return <Footer />;
}
