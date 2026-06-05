import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ShieldCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
  </svg>
);

export const Wallet = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
    <path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3" />
    <path d="M21 12h-4a2 2 0 0 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
  </svg>
);

export const Transfer = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8h13l-3-3M20 16H7l3 3" />
  </svg>
);

export const Doc = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export const Lock = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1" />
  </svg>
);

export const Pulse = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 12h4l2-6 4 14 2-8h6" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-4-5.7" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-11" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Layers = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 18l9 5 9-5" opacity="0.5" />
  </svg>
);

export const Card = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 9h18M7 15h4" />
  </svg>
);

export const Building = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
    <path d="M14 9h4a2 2 0 0 1 2 2v10M4 21h18M8 7h2M8 11h2M8 15h2" />
  </svg>
);

export const Scale = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v18M6 21h12M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6ZM5 7l7-2 7 2" />
  </svg>
);

export const Fingerprint = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5a7 7 0 0 1 7 7v1M5 12a7 7 0 0 1 3-5.8M8.5 20a10 10 0 0 1-1-8.5M12 9a3 3 0 0 1 3 3c0 3-.5 5-1.5 7M12 13v3c0 1.5-.3 2.7-.8 4" />
  </svg>
);

export const Eye = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Server = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v4a1 1 0 0 1-1.1 1A17 17 0 0 1 4 5.1 1 1 0 0 1 5 4Z" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Upload = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 16V4m0 0L7 9m5-5 5 5" />
    <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Bell = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);

export const Chart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-7" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 17l-5.4 2.9 1.2-6L3.3 9.4l6.1-.8L12 3Z" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v6M8 7v.01M12 16v-4a2 2 0 0 1 4 0v4" />
  </svg>
);

export const XSocial = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4l16 16M20 4 4 20" />
  </svg>
);

export const Facebook = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V8a1 1 0 0 1 1-1Z" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
  </svg>
);
