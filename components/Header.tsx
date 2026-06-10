"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { ArrowRight, Close, Menu } from "./Icons";

const nav = [
  { label: "Home", short: "Home", href: "/" },
  { label: "Solutions", short: "Solutions", href: "/solutions" },
  { label: "Multi-Currency Accounts", short: "Accounts", href: "/multi-currency-accounts" },
  { label: "International Payments", short: "Payments", href: "/international-payments" },
  { label: "Compliance & Security", short: "Compliance", href: "/compliance-security" },
  { label: "Pricing", short: "Pricing", href: "/pricing" },
  { label: "About Us", short: "About", href: "/about" },
  { label: "Contact", short: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // These routes provide their own page chrome.
  const bareRoutes = ["/signin", "/register"];
  if (bareRoutes.some((r) => pathname === r || pathname.startsWith(`${r}/`))) {
    return null;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-cloud shadow-soft"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between gap-4 lg:h-18">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[13.5px] font-medium tracking-tight transition-colors xl:px-3.5 xl:text-sm ${
                  active
                    ? "text-royal-600"
                    : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                }`}
              >
                {item.short}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-royal-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/signin" className="btn-ghost">
            Sign In
          </Link>
          <Link href="/register" className="btn-primary">
            Register
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-cloud text-navy-700 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass border-t border-cloud lg:hidden"
          >
            <div className="container-xl flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-navy-700 hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link href="/signin" className="btn-secondary">
                  Sign In
                </Link>
                <Link href="/register" className="btn-primary">
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
