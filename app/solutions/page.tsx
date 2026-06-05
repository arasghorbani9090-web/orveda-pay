import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  ArrowRight,
  Building,
  Card,
  Check,
  Globe,
  Layers,
  Pulse,
  ShieldCheck,
  Transfer,
  Wallet,
} from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Explore Orveda Pay solutions for global businesses — multi-currency accounts, international transfers, business collections, spend management, and compliance services on one platform.",
  path: "/solutions",
});

const solutions = [
  {
    Icon: Wallet,
    title: "Multi-Currency Accounts",
    desc: "Hold, receive, and manage eight major currencies from a single business account with dedicated account details.",
    points: ["Local & international receiving details", "Real-time balances", "Currency conversion"],
    href: "/multi-currency-accounts",
  },
  {
    Icon: Transfer,
    title: "International Transfers",
    desc: "Send funds worldwide via SWIFT and local rails with transparent fees and predictable settlement times.",
    points: ["SWIFT & local payment rails", "Supplier & payroll payouts", "Batch transfers"],
    href: "/international-payments",
  },
  {
    Icon: Pulse,
    title: "Business Collections",
    desc: "Collect from clients across markets and reconcile receivables with structured payment references.",
    points: ["Global collections", "Invoice payments", "Automated reconciliation"],
    href: "/international-payments",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance & Onboarding",
    desc: "Regulated KYC, KYB and AML processes built into a streamlined onboarding experience.",
    points: ["KYC & KYB verification", "AML screening", "Ongoing monitoring"],
    href: "/compliance-security",
  },
  {
    Icon: Card,
    title: "Spend Management",
    desc: "Control company spending with multi-user access, approval flows and granular permissions.",
    points: ["Role-based access", "Approval workflows", "Audit trails"],
    href: "/pricing",
  },
  {
    Icon: Layers,
    title: "Payments API",
    desc: "Integrate Orveda Pay into your stack with a developer-friendly API and webhooks.",
    points: ["RESTful API", "Real-time webhooks", "Sandbox environment"],
    href: "/contact",
  },
];

const industries = [
  { Icon: Globe, name: "Import & Export", desc: "Settle with overseas suppliers and receive from global buyers." },
  { Icon: Building, name: "Professional Services", desc: "Invoice international clients and get paid in their currency." },
  { Icon: Layers, name: "Technology & SaaS", desc: "Collect recurring revenue across borders at scale." },
  { Icon: Transfer, name: "Marketplaces", desc: "Pay out sellers and partners worldwide efficiently." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="One platform to run global business payments"
        description="From multi-currency accounts to compliant cross-border settlement, Orveda Pay brings the financial infrastructure modern businesses need into a single, secure platform."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/register" className="btn-primary">
            Open Business Account <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn border border-white/20 text-white hover:bg-white/10">
            Talk to Sales
          </Link>
        </div>
      </PageHeader>

      <section className="section-pad">
        <div className="container-xl">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ Icon, title, desc, points, href }) => (
              <StaggerItem key={title}>
                <div className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-50 text-royal-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-navy-600">
                        <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:text-royal-700"
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

      <section className="section-pad bg-mist/60">
        <div className="container-xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Built for global trade</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Trusted across industries
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ Icon, name, desc }) => (
              <StaggerItem key={name}>
                <div className="card flex h-full flex-col gap-3 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {name}
                  </h3>
                  <p className="text-sm text-navy-500">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
