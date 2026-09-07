"use client";

import { useEffect, useRef } from "react";
import { WORLD_MAP_DOTS, WORLD_MAP_MARKERS, WORLD_MAP_WIDTH, WORLD_MAP_HEIGHT } from "@/lib/data/world-map-dots";

interface WorldMapDotsProps {
  className?: string;
}

// A flat, geographically real dotted world map (land-mass dots precomputed
// once at authoring time — see lib/data/world-map-dots.ts — no map library
// ships in the app) on a dark card, so continents actually read as a map
// instead of an abstract rotating sphere. The served-country locations are
// real DOM markers: always-visible pulsing dots, with the country name
// shown as an accessible tooltip on hover or keyboard focus.
export default function WorldMapDots({ className = "" }: WorldMapDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Static land-mass mesh — no per-frame animation needed, so this only
    // redraws on resize rather than running a continuous RAF loop.
    function draw() {
      const width = wrap!.clientWidth;
      if (width <= 0) return;
      const height = width * (WORLD_MAP_HEIGHT / WORLD_MAP_WIDTH);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas!.width = Math.max(1, Math.round(width * dpr));
      canvas!.height = Math.max(1, Math.round(height * dpr));
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, width, height);

      const scale = width / WORLD_MAP_WIDTH;
      const r = Math.max(0.8, scale * 0.55);
      ctx!.fillStyle = "rgba(148, 163, 220, 0.45)";
      for (const [x, y] of WORLD_MAP_DOTS) {
        ctx!.beginPath();
        ctx!.arc(x * scale, y * scale, r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    draw();
    window.addEventListener("resize", draw);
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    return () => {
      window.removeEventListener("resize", draw);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30 ${className}`}
      style={{ backgroundColor: "#060B24" }}
    >
      <canvas ref={canvasRef} className="block w-full" aria-hidden="true" />

      {WORLD_MAP_MARKERS.map((m) => (
        <div
          key={m.name}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(m.x / WORLD_MAP_WIDTH) * 100}%`, top: `${(m.y / WORLD_MAP_HEIGHT) * 100}%` }}
        >
          <span className="pointer-events-none absolute -inset-2 rounded-full bg-[#F04830]/50 animate-ping" aria-hidden="true" />
          <button
            type="button"
            className="relative block h-2.5 w-2.5 rounded-full bg-[#F04830] ring-2 ring-white/25 transition-transform duration-200 group-hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ boxShadow: "0 0 10px rgba(240,72,48,0.9)" }}
            aria-label={m.name}
          />
          <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/15 bg-[#0B1220] px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
            {m.name}
          </div>
        </div>
      ))}
    </div>
  );
}
