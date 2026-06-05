import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ArrowRight, Check } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for Orveda Pay multi-currency business accounts and international payments. Flexible plans for startups, growing businesses and enterprises.",
  path: "/pricing",
});

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "For new businesses getting started with global payments.",
    features: [
      "Multi-currency account (8 currencies)",
      "Local & SWIFT receiving details",
      "KYC & KYB verification",
      "Standard SWIFT transfers",
      "Email support",
    ],
    cta: "Open account",
    highlight: false,
  },
  {
    name: "Business",
    price: "$49",
    period: "/month",
    desc: "For growing companies with regular cross-border activity.",
    features: [
      "Everything in Starter",
      "Priority SWIFT settlement",
      "Reduced FX conversion margins",
      "Batch & supplier payments",
      "Multi-user access & approvals",
      "Dedicated onboarding specialist",
    ],
    cta: "Start with Business",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For high-volume and regulated international operations.",
    features: [
      "Everything in Business",
      "Custom FX & transfer pricing",
      "Payments API & webhooks",
      "Dedicated account manager",
      "Enhanced compliance reporting",
      "Premium SLAs & support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Are there fees to open an account?",
    a: "Opening a Starter account is free. Account approval is subject to successful verification and due diligence review.",
  },
  {
    q: "How are FX conversions priced?",
    a: "We apply a transparent margin to the mid-market rate, which reduces on higher plans. You always see the rate before confirming.",
  },
  {
    q: "What does SWIFT transfer cost?",
    a: "Transfer fees depend on currency, destination and plan. Priority settlement is available on Business and Enterprise plans.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. Plans are flexible and can be changed as your business needs evolve.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent pricing for global businesses"
        description="No hidden fees. Choose a plan that fits your stage and scale — every plan includes a secure multi-currency account and compliant onboarding."
      />

      <section className="section-pad">
        <div className="container-xl">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                    plan.highlight
                      ? "border-royal-200 bg-white shadow-float lg:-translate-y-3"
                      : "border-cloud bg-white shadow-card hover:-translate-y-1 hover:shadow-float"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute right-6 top-6 rounded-full bg-royal-500 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold text-navy-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-navy-400">{plan.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/register"}
                    className={`mt-8 ${plan.highlight ? "btn-primary" : "btn-secondary"}`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 text-center text-xs text-navy-400">
            Fees shown are illustrative. Final pricing is confirmed during
            onboarding and subject to verification.
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist/60">
        <div className="container-xl max-w-3xl">
          <Reveal className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Stagger className="mt-10 space-y-4">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <details className="group card overflow-hidden p-0">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-display font-semibold text-navy-900 marker:content-['']">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mist text-navy-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-navy-500">
                    {f.a}
                  </p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
