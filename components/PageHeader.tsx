import { Reveal } from "./Motion";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-radial-navy pt-28 pb-20 text-white sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:44px_44px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-royal-500/20 blur-3xl"
      />
      <div className="container-xl relative">
        <Reveal>
          <span className="eyebrow border-white/15 bg-white/10 text-royal-100">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05} className="mt-5 max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.12} className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-navy-200">{description}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.18} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
