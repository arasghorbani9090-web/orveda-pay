import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-mist/40 px-6 pt-16">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">
          Page not found
        </h1>
        <p className="mt-2 max-w-md text-navy-500">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
