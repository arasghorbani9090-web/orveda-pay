import { ImageResponse } from "next/og";

export const runtime = "edge";

// Branded social-share image served at /og and referenced from metadata
// (og:image / twitter:image) on every page. ASCII-only text and Satori-safe
// CSS keep this renderable on the Edge runtime without dynamic font fetches.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#071A35",
          backgroundImage:
            "linear-gradient(135deg, rgba(21,101,255,0.55) 0%, rgba(7,26,53,0) 45%), linear-gradient(315deg, rgba(0,196,140,0.45) 0%, rgba(7,26,53,0) 45%)",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 66,
              height: 66,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1565FF",
              backgroundImage: "linear-gradient(135deg, #1565FF, #00C48C)",
              fontSize: 32,
              fontWeight: 800,
              color: "white",
            }}
          >
            OP
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            <span>Orveda</span>
            <span style={{ color: "#5E9CFF" }}>Pay</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Global Financial Infrastructure for Modern Businesses
          </div>
          <div style={{ fontSize: 30, color: "#94AECF", maxWidth: 900 }}>
            Multi-currency accounts / International payments / Compliance &amp;
            security
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#94AECF",
          }}
        >
          <span>www.orvedapay.com</span>
          <span
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: "rgba(201,162,75,0.18)",
              color: "#E6CB86",
              fontWeight: 700,
            }}
          >
            Demo / mockup - not a real financial service
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
