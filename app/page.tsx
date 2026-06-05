import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { DashboardMockup } from "@/components/DashboardMockup";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const metadata = buildMetadata({
  title: "Orveda Pay — Global Financial Infrastructure for Modern Businesses",
  description:
    "Open multi-currency business accounts, receive international payments, and send funds worldwide through secure, compliant banking networks. Orveda Pay is global financial infrastructure for modern businesses.",
  path: "/",
  absoluteTitle: true,
});
import {
  ArrowRight,
  Building,
  Check,
  Doc,
  Fingerprint,
  Globe,
  Lock,
  Pulse,
  Scale,
  ShieldCheck,
  Transfer,
  Users,
  Wallet,
} from "@/components/Icons";

const trustItems = [
  { Icon: Building, label: "Business Verification" },
  { Icon: Scale, label: "AML Compliance" },
  { Icon: Fingerprint, label: "KYC Verification" },
  { Icon: Transfer, label: "Secure International Transfers" },
  { Icon: Globe, label: "Global Business Support" },
  { Icon: ShieldCheck, label: "Enterprise Security" },
];

const currencies = ["USD", "EUR", "GBP", "AED", "CAD", "AUD", "CHF", "SGD"];

const services = [
  {
    Icon: Wallet,
    title: "Multi-Currency Accounts",
    desc: "Receive and hold balances across eight major currencies from a single business account.",
    points: currencies,
    isCurrency: true,
    href: "/multi-currency-accounts",
  },
  {
    Icon: Transfer,
    title: "International Transfers",
    desc: "Move money worldwide through trusted banking networks with transparent, predictable settlement.",
    points: [
      "SWIFT Payments",
      "Cross-border settlements",
      "Supplier payments",
      "Corporate transfers",
    ],
    href: "/international-payments",
  },
  {
    Icon: Pulse,
    title: "Business Payments",
    desc: "Collect from clients globally and reconcile receivables with built-in payment intelligence.",
    points: [
      "Global collections",
      "Invoice payments",
      "International receivables",
    ],
    href: "/solutions",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance Services",
    desc: "Onboard with confidence through regulated verification and continuous monitoring.",
    points: [
      "KYC verification",
      "KYB verification",
      "AML screening",
      "Business onboarding",
    ],
    href: "/compliance-security",
  },
];

const steps = [
  {
    n: "01",
    title: "Create an Account",
    desc: "Register your business in minutes and set up your secure Orveda Pay workspace.",
  },
  {
    n: "02",
    title: "Submit Verification Documents",
    desc: "Provide your incorporation and identity documents through our encrypted portal.",
    docs: [
      "Passport",
      "National ID",
      "Company Registration Certificate",
      "Trade License",
      "Proof of Address",
    ],
  },
  {
    n: "03",
    title: "Compliance Review",
    desc: "Our compliance team performs KYC, KYB and AML checks against global standards.",
  },
  {
    n: "04",
    title: "Account Approval",
    desc: "Once due diligence is complete, your multi-currency account is activated.",
  },
  {
    n: "05",
    title: "Start Receiving & Sending Payments",
    desc: "Hold currencies, collect receivables and settle internationally from day one.",
  },
];

const stats = [
  { value: "190+", label: "Countries served" },
  { value: "8", label: "Currencies supported" },
  { value: "$4.2B+", label: "Processed annually" },
  { value: "99.99%", label: "Platform uptime" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 85% -10%, rgba(21,101,255,0.10) 0%, transparent 60%), radial-gradient(40% 40% at 0% 10%, rgba(0,196,140,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="container-xl grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Global financial infrastructure
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                Global Financial Infrastructure For{" "}
                <span className="text-gradient">Modern Businesses</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-500">
                Open multi-currency business accounts, receive international
                payments, and send funds worldwide through secure banking
                networks.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="btn-primary">
                  Open Business Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-500">
                {["KYC & KYB verified", "AML screening", "Bank-grade encryption"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={36}>
            <DashboardMockup />
          </Reveal>
        </div>

        {/* Currency marquee */}
        <div className="border-y border-cloud bg-mist/60 py-6">
          <div className="container-xl flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm font-medium text-navy-500">
              Hold and settle in the world&apos;s major currencies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {currencies.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-cloud bg-white px-3.5 py-1.5 text-sm font-semibold text-navy-700 shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-pad">
        <div className="container-xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Trust & Compliance</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Built on a foundation of trust and regulation
            </h2>
            <p className="mt-4 text-navy-500">
              Every account is protected by institutional-grade controls and
              continuous compliance monitoring.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustItems.map(({ Icon, label }) => (
              <StaggerItem key={label}>
                <div className="card flex h-full flex-col items-center gap-3 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-50 text-royal-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-800">
                    {label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-cloud bg-mist/50 p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-navy-500">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-mist/60">
        <div className="container-xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Solutions</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Everything your business needs to move money globally
            </h2>
            <p className="mt-4 text-navy-500">
              One platform for multi-currency accounts, international transfers,
              business payments, and compliance.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(({ Icon, title, desc, points, href, isCurrency }) => (
              <StaggerItem key={title}>
                <div className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-royal-500 to-emerald-500 text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {desc}
                  </p>
                  <div
                    className={
                      isCurrency
                        ? "mt-5 flex flex-wrap gap-2"
                        : "mt-5 grid grid-cols-2 gap-2.5"
                    }
                  >
                    {points.map((p) =>
                      isCurrency ? (
                        <span
                          key={p}
                          className="rounded-lg border border-cloud bg-mist px-2.5 py-1 text-xs font-semibold text-navy-700"
                        >
                          {p}
                        </span>
                      ) : (
                        <span
                          key={p}
                          className="flex items-center gap-2 text-sm text-navy-600"
                        >
                          <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                          {p}
                        </span>
                      )
                    )}
                  </div>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 transition-colors hover:text-royal-700"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad">
        <div className="container-xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              From application to your first payment
            </h2>
            <p className="mt-4 text-navy-500">
              A clear, compliant onboarding journey designed for global
              businesses.
            </p>
          </Reveal>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-royal-200 via-royal-200 to-emerald-200 lg:block"
            />
            <Stagger className="space-y-6">
              {steps.map((step) => (
                <StaggerItem key={step.n}>
                  <div className="relative flex flex-col gap-5 rounded-3xl border border-cloud bg-white p-6 shadow-soft sm:flex-row sm:items-start lg:pl-20">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-radial-navy font-display text-lg font-extrabold text-white shadow-glow lg:absolute lg:left-0 lg:top-6">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                        {step.desc}
                      </p>
                      {step.docs && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {step.docs.map((d) => (
                            <span
                              key={d}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-cloud bg-mist px-2.5 py-1.5 text-xs font-medium text-navy-700"
                            >
                              <Doc className="h-3.5 w-3.5 text-royal-500" />
                              {d}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* SECURITY HIGHLIGHT */}
      <section className="section-pad bg-mist/60">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Security first</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Institutional-grade security on every transaction
            </h2>
            <p className="mt-4 text-navy-500">
              Orveda Pay safeguards your funds and data with layered controls,
              continuous monitoring, and a compliance team aligned to global
              regulatory standards.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                {
                  Icon: Lock,
                  t: "End-to-end data encryption",
                  d: "All sensitive data is encrypted in transit and at rest.",
                },
                {
                  Icon: Users,
                  t: "Dedicated business support",
                  d: "Specialist onboarding and account management teams.",
                },
                {
                  Icon: ShieldCheck,
                  t: "Continuous risk monitoring",
                  d: "Real-time fraud detection and transaction screening.",
                },
              ].map(({ Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-royal-600 shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-800">
                      {t}
                    </span>
                    <span className="text-sm text-navy-500">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/compliance-security"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:text-royal-700"
            >
              Explore compliance & security
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="card overflow-hidden p-8">
              <div className="rounded-2xl bg-radial-navy p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-navy-200">
                    Compliance status
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                    <Check className="h-3.5 w-3.5" /> Active
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { l: "KYC Verification", v: 100 },
                    { l: "KYB Verification", v: 100 },
                    { l: "AML Screening", v: 100 },
                    { l: "Risk Monitoring", v: 92 },
                  ].map((row) => (
                    <div key={row.l}>
                      <div className="flex justify-between text-xs text-navy-200">
                        <span>{row.l}</span>
                        <span>{row.v}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-royal-400 to-emerald-400"
                          style={{ width: `${row.v}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  { l: "ISO 27001", s: "Aligned" },
                  { l: "PCI DSS", s: "Level 1" },
                  { l: "SOC 2", s: "Type II" },
                ].map((b) => (
                  <div
                    key={b.l}
                    className="rounded-xl border border-cloud bg-mist p-3"
                  >
                    <p className="text-sm font-bold text-navy-800">{b.l}</p>
                    <p className="text-[11px] text-navy-500">{b.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
