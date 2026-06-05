import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  ArrowRight,
  Bolt,
  Check,
  Globe,
  Pulse,
  ShieldCheck,
  Transfer,
} from "@/components/Icons";

export const metadata = buildMetadata({
  title: "International Payments",
  description:
    "Send and receive international payments with Orveda Pay — SWIFT payments, cross-border settlements, supplier payments and global collections through secure banking networks.",
  path: "/international-payments",
});

const features = [
  {
    Icon: Transfer,
    title: "SWIFT Payments",
    desc: "Send and trace payments through the global SWIFT network with end-to-end visibility.",
  },
  {
    Icon: Globe,
    title: "Cross-border settlements",
    desc: "Settle internationally via SWIFT and local rails with predictable timelines.",
  },
  {
    Icon: Pulse,
    title: "Supplier payments",
    desc: "Pay vendors and suppliers worldwide individually or in batches.",
  },
  {
    Icon: ShieldCheck,
    title: "Corporate transfers",
    desc: "Move funds between entities and accounts with approval controls.",
  },
];

const flow = [
  { t: "Initiate", d: "Create a payment with beneficiary and currency details." },
  { t: "Screen", d: "Automated AML and sanctions screening runs in real time." },
  { t: "Route", d: "We route via the optimal network — SWIFT or local rails." },
  { t: "Settle", d: "Funds are delivered and you receive confirmation." },
];

const collections = [
  "Global collections",
  "Invoice payments",
  "International receivables",
  "Structured payment references",
  "Automated reconciliation",
  "Multi-currency receiving",
];

export default function InternationalPaymentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="International Payments"
        title="Send and receive funds worldwide, securely"
        description="Move money across borders through trusted banking networks. Pay suppliers, settle corporate transfers, and collect international receivables with confidence."
      />

      <section className="section-pad">
        <div className="container-xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="card flex h-full flex-col gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-royal-500 to-emerald-500 text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="text-sm text-navy-500">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-mist/60">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">How a payment flows</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Compliant by design, fast by default
            </h2>
            <p className="mt-4 text-navy-500">
              Every payment passes through automated compliance screening before
              it is routed through the most efficient network available.
            </p>
            <div className="mt-8 space-y-4">
              {flow.map((step, i) => (
                <div key={step.t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-royal-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-800">
                      {step.t}
                    </span>
                    <span className="text-sm text-navy-500">{step.d}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="card p-7">
              <div className="flex items-center justify-between border-b border-cloud pb-4">
                <span className="font-display font-bold text-navy-900">
                  New SWIFT transfer
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  <Bolt className="h-3.5 w-3.5" /> Screened
                </span>
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ["Beneficiary", "Meridian Trading Ltd"],
                  ["Bank / SWIFT", "HSBCGB2L"],
                  ["Amount", "$84,200.00 USD"],
                  ["Network", "SWIFT · Priority"],
                  ["Est. settlement", "Within 1 business day"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt className="text-navy-400">{k}</dt>
                    <dd className="font-semibold text-navy-800">{v}</dd>
                  </div>
                ))}
              </dl>
              <button className="btn-primary mt-6 w-full">
                Confirm transfer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <Reveal y={30}>
            <div className="card overflow-hidden">
              <div className="bg-radial-navy p-8 text-white">
                <h3 className="font-display text-2xl font-bold">
                  Global collections & receivables
                </h3>
                <p className="mt-3 text-sm text-navy-200">
                  Collect from clients across markets and reconcile receivables
                  automatically with structured references.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 p-6">
                {collections.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-2 text-sm text-navy-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Business payments</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Get paid by clients anywhere in the world
            </h2>
            <p className="mt-4 text-navy-500">
              Share local and international receiving details, send professional
              invoices, and watch incoming payments reconcile automatically
              against your records — all from one platform.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Receive in 8 currencies with local details",
                "Match incoming payments to invoices",
                "Full audit trail for every transaction",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-navy-700">
                  <Check className="h-5 w-5 shrink-0 text-emerald-500" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Move money worldwide with confidence"
        description="Open a business account and start sending and receiving international payments today."
      />
    </>
  );
}
