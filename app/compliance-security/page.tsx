import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  Building,
  Eye,
  Fingerprint,
  Lock,
  Pulse,
  Scale,
  Server,
  ShieldCheck,
} from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Compliance & Security",
  description:
    "Orveda Pay's compliance and security framework — KYC, KYB, AML procedures, data encryption, secure banking infrastructure, risk monitoring and fraud prevention.",
  path: "/compliance-security",
});

const pillars = [
  {
    Icon: Fingerprint,
    title: "KYC — Know Your Customer",
    desc: "Identity verification of individuals using government-issued documents and biometric checks where required.",
  },
  {
    Icon: Building,
    title: "KYB — Know Your Business",
    desc: "Verification of company structure, ownership, directors and beneficial owners against official registries.",
  },
  {
    Icon: Scale,
    title: "AML Procedures",
    desc: "Anti-money-laundering controls including sanctions screening, PEP checks and ongoing transaction monitoring.",
  },
  {
    Icon: Lock,
    title: "Data Encryption",
    desc: "Sensitive data is encrypted in transit (TLS) and at rest using industry-standard cryptography.",
  },
  {
    Icon: Server,
    title: "Secure Banking Infrastructure",
    desc: "Funds are held with regulated banking partners across resilient, redundant infrastructure.",
  },
  {
    Icon: Pulse,
    title: "Risk Monitoring",
    desc: "Continuous, automated monitoring of accounts and transactions to detect anomalous activity.",
  },
  {
    Icon: Eye,
    title: "Fraud Prevention",
    desc: "Real-time fraud detection, device intelligence and multi-factor authentication on every account.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance & Audit",
    desc: "Documented controls, audit trails and regular reviews aligned to recognised security standards.",
  },
];

const standards = [
  { l: "ISO 27001", s: "Information security aligned" },
  { l: "PCI DSS", s: "Level 1 controls" },
  { l: "SOC 2", s: "Type II principles" },
  { l: "GDPR", s: "Privacy by design" },
];

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance & Security"
        title="Trust engineered into every layer"
        description="Orveda Pay is built around regulated compliance processes and institutional-grade security — protecting your business, your funds, and your data at every step."
      />

      <section className="section-pad">
        <div className="container-xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="card flex h-full flex-col gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-50 text-royal-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-base font-bold leading-snug text-navy-900">
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
            <span className="eyebrow">Standards & alignment</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Held to the highest standards
            </h2>
            <p className="mt-4 text-navy-500">
              Our controls are designed in line with internationally recognised
              security and privacy frameworks, and reviewed regularly by our
              compliance and risk teams.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {standards.map((b) => (
                <div
                  key={b.l}
                  className="rounded-2xl border border-cloud bg-white p-5 shadow-soft"
                >
                  <p className="font-display text-lg font-extrabold text-navy-900">
                    {b.l}
                  </p>
                  <p className="text-sm text-navy-500">{b.s}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="relative overflow-hidden rounded-3xl bg-radial-navy p-8 text-white shadow-float">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:36px_36px] opacity-30"
              />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-7 w-7 text-emerald-300" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  Defence in depth
                </h3>
                <p className="mt-3 text-sm text-navy-200">
                  Layered safeguards protect every account — from onboarding
                  through to each individual transaction.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Multi-factor authentication",
                    "Role-based access controls",
                    "Real-time sanctions & PEP screening",
                    "Continuous transaction monitoring",
                    "Encrypted document storage",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
                        ✓
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Onboard with a compliance-first partner"
        description="Open a business account knowing your funds and data are protected by institutional-grade controls."
      />
    </>
  );
}
