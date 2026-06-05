import { PageHeader } from "./PageHeader";

export type LegalSection = {
  heading: string;
  body: string[];
};

export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro} />
      <section className="section-pad">
        <div className="container-xl grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                On this page
              </p>
              <nav className="mt-4 space-y-2">
                {sections.map((s, i) => (
                  <a
                    key={s.heading}
                    href={`#section-${i}`}
                    className="block text-sm text-navy-500 transition-colors hover:text-royal-600"
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="max-w-3xl">
            <p className="text-sm text-navy-400">Last updated: {updated}</p>
            <div className="mt-8 space-y-10">
              {sections.map((s, i) => (
                <section key={s.heading} id={`section-${i}`} className="scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-navy-900">
                    {i + 1}. {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-sm leading-relaxed text-navy-600">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-cloud bg-mist/60 p-5 text-xs leading-relaxed text-navy-500">
              <strong className="text-navy-700">Disclaimer:</strong> Orveda Pay
              provides business payment and financial administration services
              subject to applicable regulatory requirements and compliance
              procedures. Account approval is subject to successful verification
              and due diligence review. This document is provided for
              informational purposes and does not constitute legal advice.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
