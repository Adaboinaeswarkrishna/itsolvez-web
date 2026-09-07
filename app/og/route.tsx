import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "ITSolvez").slice(0, 90);
  const tag = (searchParams.get("tag") || "").slice(0, 60);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0B1233",
          backgroundImage:
            "radial-gradient(ellipse 900px 600px at 88% 8%, rgba(24,120,240,0.35) 0%, rgba(11,18,51,0) 60%), radial-gradient(ellipse 700px 500px at 0% 100%, rgba(240,72,48,0.18) 0%, rgba(11,18,51,0) 60%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://itsolvez.com/logo.png" width={220} height={62} alt="" />
        </div>

        {/* Middle: tag + title */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
          {tag && (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#60A5FA",
                marginBottom: 20,
              }}
            >
              {tag}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 45 ? 56 : 68,
              fontWeight: 900,
              lineHeight: 1.08,
              color: "#FFFFFF",
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: trust bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 22, fontWeight: 800, color: "#F04830" }}>ISO</div>
              <div style={{ display: "flex", fontSize: 16, color: "rgba(234,240,250,0.55)" }}>9001·27001·20000-1</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 22, fontWeight: 800, color: "#F04830" }}>13+ Years</div>
              <div style={{ display: "flex", fontSize: 16, color: "rgba(234,240,250,0.55)" }}>In Business</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 22, fontWeight: 800, color: "#F04830" }}>300+ Projects</div>
              <div style={{ display: "flex", fontSize: 16, color: "rgba(234,240,250,0.55)" }}>Delivered</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", width: 12, height: 12, borderRadius: 6, backgroundColor: "#1878F0" }} />
            <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>itsolvez.com</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
