import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generates the social-share image used for both Open Graph and Twitter cards.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(900px circle at 15% 10%, rgba(124,92,255,0.45), transparent 45%), radial-gradient(800px circle at 90% 90%, rgba(34,211,238,0.4), transparent 45%), #06060a",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
              color: "#06060a",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            CK
          </div>
          <div style={{ fontSize: 30, color: "#9a9aae" }}>
            {profile.socials.github.replace("https://", "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              background: "linear-gradient(120deg, #f0abfc, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {`${profile.role} · React · Next.js · Vue.js`}
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#9a9aae", maxWidth: 900 }}>
          {profile.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
