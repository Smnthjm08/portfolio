import { ImageResponse } from "next/og";

export const alt = "Sumanth JM — Backend Engineer, Solana / Rust Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: "-0.02em" }}>
          Sumanth JM
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 20 }}>
          Backend Engineer · Solana / Rust Developer
        </div>
        <div style={{ display: "flex", marginTop: 48, gap: 12 }}>
          {["Rust", "Solana", "Python", "TypeScript"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 22,
                color: "#a1a1aa",
                border: "1px solid #27272a",
                borderRadius: 8,
                padding: "8px 16px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
