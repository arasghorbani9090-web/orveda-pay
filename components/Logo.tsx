import Link from "next/link";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-white" : "text-navy-800";
  return (
    <Link
      href="/"
      aria-label="Orveda Pay home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-royal-500 to-emerald-500 shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2.5 4 6.2v6.1c0 4.6 3.2 7.8 8 9.2 4.8-1.4 8-4.6 8-9.2V6.2L12 2.5Z"
            fill="rgba(255,255,255,0.16)"
          />
          <path
            d="M8.5 12.2 11 14.7l4.8-5.2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${wordColor}`}>
        Orveda<span className="text-royal-500"> Pay</span>
      </span>
    </Link>
  );
}
