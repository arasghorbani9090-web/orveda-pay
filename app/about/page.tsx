import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ArrowRight, Bolt, Globe, ShieldCheck, Sparkle, Users } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Orveda Pay provides international financial infrastructure for global businesses — enabling companies to receive, hold and transfer funds across multiple currencies through secure, compliant networks.",
};

const values = [
  {
    Icon: ShieldCheck,
    title: "Trust",
    desc: "We hold ourselves to the highest standards of compliance, security and transparency.",
  },
  {
    Icon: Globe,
    title: "Global by design",
    desc: "Our infrastructure is built to move money across borders seamlessly.",
  },
  {
    Icon: Bolt,
    title: "Speed with control",
    desc: "Fast settlement without compromising on diligence and oversight.",
  },
  {
    Icon: Users,
    title: "Customer obsession",
    desc: "Every decision starts with the businesses we serve.",
  },
];

const stats = [
  { v: "190+", l: "Countries served" },
  { v: "8", l: "Currencies" },
  { v: "$4.2B+", l: "Processed annually" },
  { v: "24/7", l: "Risk monitoring" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Building the financial gateway for international commerce"
        description="Orveda Pay provides international financial infrastructure for global businesses, enabling companies to receive, hold, and transfer funds across multiple currencies through secure and compliant financial networks."
      />

      <section className="section-pad">
        <div className="container-xl grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-royal-50 text-royal-600">
                <Sparkle className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
                Our Mission
              </h2>
              <p className="mt-3 text-navy-500">
                Simplify global business payments — removing the friction,
                opacity and cost that hold international companies back.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Globe className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
                Our Vision
              </h2>
              <p className="mt-3 text-navy-500">
                Become the trusted financial gateway for international commerce —
                the default infrastructure for businesses that operate globally.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-radial-navy py-16 text-white">
        <div className="container-xl">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.l} className="text-center">
                <p className="font-display text-4xl font-extrabold">{s.v}</p>
                <p className="mt-1 text-sm text-navy-200">{s.l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Our values
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, desc }) => (
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
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="section-pad bg-mist/60 scroll-mt-24">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Careers</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Join us in building global financial infrastructure
            </h2>
            <p className="mt-4 text-navy-500">
              We&apos;re a team of engineers, compliance specialists and
              operators building the rails for international commerce. If you
              care about trust, craft and impact, we&apos;d love to hear from
              you.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} y={30}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Engineering",
                "Compliance & Risk",
                "Customer Success",
                "Operations",
              ].map((team) => (
                <div
                  key={team}
                  className="card flex items-center justify-between p-5"
                >
                  <span className="font-semibold text-navy-800">{team}</span>
                  <ArrowRight className="h-4 w-4 text-royal-500" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
