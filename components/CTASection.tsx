import Link from "next/link";
import { Reveal } from "./Motion";
import { ArrowRight } from "./Icons";

export function CTASection({
  title = "Open your global business account today",
  description = "Join modern businesses using Orveda Pay to hold multiple currencies, receive international payments, and settle cross-border with confidence.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <Reveal className="relative overflow-hidden rounded-4xl bg-radial-navy px-6 py-14 text-center text-white sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px] opacity-30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-lg text-navy-200">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/register" className="btn-primary">
                Open Business Account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/20 text-white hover:bg-white/10"
              >
                Contact Sales
              </Link>
            </div>
            <p className="mt-6 text-xs text-navy-300">
              Account approval is subject to successful verification and due
              diligence review.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
