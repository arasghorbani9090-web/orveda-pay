import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ArrowRight, Check, Globe, Pulse, Transfer, Wallet } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Multi-Currency Accounts",
  description:
    "Open a multi-currency business account with Orveda Pay. Receive and hold USD, EUR, GBP, AED, CAD, AUD, CHF and SGD with local receiving details from one secure platform.",
  path: "/multi-currency-accounts",
});

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
];

const benefits = [
  {
    Icon: Wallet,
    title: "Hold eight currencies",
    desc: "Keep balances in the currencies you trade in and avoid unnecessary conversions.",
  },
  {
    Icon: Globe,
    title: "Local receiving details",
    desc: "Get account details to receive payments like a local business in key markets.",
  },
  {
    Icon: Transfer,
    title: "Convert at clear rates",
    desc: "Exchange between currencies with transparent, competitive pricing.",
  },
  {
    Icon: Pulse,
    title: "Real-time visibility",
    desc: "Track balances, incoming payments and conversions from one dashboard.",
  },
];

export default function MultiCurrencyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Multi-Currency Accounts"
        title="Receive and hold the world's major currencies"
        description="Open a single Orveda Pay business account and manage balances across eight major currencies — receive like a local, hold what you earn, and convert only when you choose."
      >
        <div className="flex flex-wrap gap-2">
          {currencies.map((c) => (
            <span
              key={c.code}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white"
            >
              <span aria-hidden>{c.flag}</span>
              {c.code}
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="section-pad">
        <div className="container-xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">Supported currencies</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Eight currencies, one account
            </h2>
            <p className="mt-4 text-navy-500">
              Receive payments, hold balances and pay suppliers in the
              currencies your business depends on — without juggling multiple
              banks.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {currencies.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center gap-3 rounded-2xl border border-cloud bg-white p-4 shadow-soft"
                >
                  <span className="text-2xl" aria-hidden>
                    {c.flag}
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-navy-900">
                      {c.code}
                    </span>
                    <span className="text-xs text-navy-500">{c.name}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="card p-7">
              <div className="rounded-2xl bg-radial-navy p-6 text-white">
                <p className="text-xs text-navy-200">Available balance</p>
                <p className="mt-1 font-display text-3xl font-extrabold">
                  $2,184,920.40
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    { c: "USD", a: "1,284,920.40", w: 80 },
                    { c: "EUR", a: "642,310.18", w: 55 },
                    { c: "GBP", a: "257,689.82", w: 32 },
                  ].map((r) => (
                    <div key={r.c}>
                      <div className="flex justify-between text-xs text-navy-200">
                        <span>{r.c}</span>
                        <span>{r.a}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-royal-400 to-emerald-400"
                          style={{ width: `${r.w}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <button className="btn-primary flex-1">Convert</button>
                <button className="btn-secondary flex-1">Send</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist/60">
        <div className="container-xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why businesses choose us</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Designed for international operations
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="card flex h-full flex-col gap-3 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal-50 text-royal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="text-sm text-navy-500">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 flex justify-center">
            <Link href="/register" className="btn-primary">
              Open your account <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Hold every currency your business needs"
        description="Open a multi-currency account and start receiving international payments in minutes."
      />
    </>
  );
}
