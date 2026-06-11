import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowRight, Facebook, LinkedIn, Mail, XSocial } from "./Icons";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Multi-Currency Accounts", href: "/multi-currency-accounts" },
      { label: "International Payments", href: "/international-payments" },
      { label: "Client Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Compliance & Security", href: "/compliance-security" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
      { label: "AML Policy", href: "/legal/aml" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedIn },
  { label: "X", href: "https://x.com", Icon: XSocial },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-radial-navy text-navy-100">
      {/* Demo notice — this is a mockup, not a real financial service */}
      <div className="border-b border-gold/20 bg-gold/10">
        <div className="container-xl flex flex-col items-center justify-center gap-2 py-3 text-center sm:flex-row">
          <span
            aria-hidden
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold-light"
          >
            !
          </span>
          <p className="text-sm font-semibold text-gold-light">
            Demo only — not a real financial service.
          </p>
          <span className="text-sm text-navy-200">
            This site is a design mockup; no accounts, payments, or transfers
            are real.
          </span>
        </div>
      </div>

      <div className="container-xl py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              Global financial infrastructure for modern businesses. Hold
              multiple currencies, receive international payments, and settle
              cross-border through secure, compliant banking networks.
            </p>

            <div className="mt-8 max-w-sm">
              <h4 className="font-display text-sm font-semibold text-white">
                Join Orveda Pay Updates
              </h4>
              <form className="mt-3 flex gap-2" aria-label="Newsletter signup">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
                  <input
                    type="email"
                    required
                    placeholder="Work email address"
                    aria-label="Email address"
                    className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-navy-300 focus:border-royal-400 focus:outline-none focus:ring-2 focus:ring-royal-500/40"
                  />
                </div>
                <button type="submit" className="btn-primary shrink-0">
                  <span className="hidden sm:inline">Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-xs text-navy-300">
                Product news and compliance updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-white">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-navy-200 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-navy-300">
          <strong className="font-semibold text-navy-100">
            Legal Disclaimer:
          </strong>{" "}
          Orveda Pay provides business payment and financial administration
          services subject to applicable regulatory requirements and compliance
          procedures. Account approval is subject to successful verification and
          due diligence review.
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-300">
            © {new Date().getFullYear()} Orveda Pay. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-navy-200 transition-colors hover:border-royal-400 hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
