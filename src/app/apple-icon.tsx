import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Generates /apple-icon.png and adds <link rel="apple-touch-icon">.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)",
          color: "#06060a",
          fontSize: 96,
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: 40,
        }}
      >
        CK
      </div>
    ),
    { ...size }
  );
}
