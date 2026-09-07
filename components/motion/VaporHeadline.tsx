"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

interface VaporHeadlineProps {
  headline: string;
  accent: string;
  className?: string; // wrapper (margins etc.)
  fontClassName?: string; // classes controlling font-family/weight/tracking/leading on the real <h1>
  fontStyle?: CSSProperties; // e.g. clamp() font-size
  headlineColor?: string;
  accentColor?: string;
  accentGlow?: string; // text-shadow on the real (fallback) accent span
}

type Particle = {
  x: number; y: number;
  tx: number; ty: number; // idle/target position
  sx: number; sy: number; // start position, used while entering
  vx: number; vy: number; // velocity, used while dispersing
  alpha: number;
  color: string; // "r,g,b"
  size: number;
  mode: "idle" | "in" | "out";
  born: number; // performance.now() timestamp
};

// Greedy word-wrap matching the browser's own line-breaking closely enough
// for a silhouette mask — doesn't need to be pixel-exact, just consistent
// between what we measure and what we sample.
function wrapWords(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(test).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

// Renders headline + accent to an offscreen canvas at the real measured font,
// then samples the pixel mask into a sparse grid of coloured particle targets.
function sampleText(
  headline: string,
  accent: string,
  fontSpec: string,
  letterSpacing: string,
  maxWidth: number,
  lineHeightPx: number,
  headlineColor: string,
  accentColor: string,
  step: number
): { targets: { x: number; y: number; color: string }[]; height: number } {
  const off = document.createElement("canvas");
  const octx = off.getContext("2d");
  if (!octx || maxWidth <= 0) return { targets: [], height: lineHeightPx * 2 };

  octx.font = fontSpec;
  const headlineLines = wrapWords(octx, headline, maxWidth);
  const accentLines = wrapWords(octx, accent, maxWidth);
  const lines = [
    ...headlineLines.map((t) => ({ text: t, color: headlineColor })),
    ...accentLines.map((t) => ({ text: t, color: accentColor })),
  ];

  const height = Math.max(1, Math.ceil(lineHeightPx * lines.length + lineHeightPx * 0.25));
  off.width = Math.max(1, Math.ceil(maxWidth));
  off.height = height; // resizing clears the canvas + resets context state

  octx.font = fontSpec;
  octx.textBaseline = "alphabetic";
  const spacedCtx = octx as CanvasRenderingContext2D & { letterSpacing?: string };
  if (letterSpacing && letterSpacing !== "normal" && "letterSpacing" in octx) {
    try { spacedCtx.letterSpacing = letterSpacing; } catch { /* unsupported, ignore */ }
  }
  lines.forEach((ln, i) => {
    octx.fillStyle = ln.color;
    octx.fillText(ln.text, 0, i * lineHeightPx + lineHeightPx * 0.78);
  });

  const { data } = octx.getImageData(0, 0, off.width, off.height);
  const targets: { x: number; y: number; color: string }[] = [];
  // x/y must be whole pixel indices — a typed array returns undefined (not
  // a rounded neighbour) for a fractional index, so a float step here would
  // silently drop most samples instead of just spacing them out.
  for (let y = 0; y < off.height; y += step) {
    const yi = Math.round(y);
    for (let x = 0; x < off.width; x += step) {
      const xi = Math.round(x);
      const idx = (yi * off.width + xi) * 4;
      if (data[idx + 3] > 120) {
        targets.push({ x: xi, y: yi, color: `${data[idx]},${data[idx + 1]},${data[idx + 2]}` });
      }
    }
  }

  // Thin uniformly across the whole shape rather than truncating in scan
  // order — a hard slice would silently drop entire lines from the bottom.
  const CAP = 2400;
  const thinned =
    targets.length > CAP
      ? targets.filter((_, i) => i % Math.max(1, Math.round(targets.length / CAP)) === 0)
      : targets;

  return { targets: thinned, height };
}

// Cycles a two-line headline through a "vapour" dissolve: the outgoing text's
// dots drift up and fade while the incoming text's dots condense into place
// from a scattered start. Falls back to the real, fully visible <h1> text
// until the first frame is ready (zero-JS and pre-hydration both just show
// plain text — no blank flash), and swaps to it permanently under
// prefers-reduced-motion.
export default function VaporHeadline({
  headline,
  accent,
  className = "",
  fontClassName = "",
  fontStyle,
  headlineColor = "#FFFFFF",
  accentColor = "#F04830",
  accentGlow = "0 0 40px rgba(240,72,48,0.35)",
}: VaporHeadlineProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rebuildRef = useRef<((animate: boolean) => void) | null>(null);
  const textRef = useRef({ headline, accent });
  const isFirst = useRef(true);

  const [box, setBox] = useState({ ready: false, w: 0, h: 0 });

  // Keep the latest text available to the mount-time closure below.
  useEffect(() => {
    textRef.current = { headline, accent };
  }, [headline, accent]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const h1 = h1Ref.current;
    const canvas = canvasRef.current;
    if (!wrap || !h1 || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let particles: Particle[] = [];
    let raf = 0;
    let running = true;
    let logicalW = 0;
    let logicalH = 0;
    let lastWidth = -1;

    function measureFontSpec() {
      const cs = getComputedStyle(h1!);
      const fontSizePx = parseFloat(cs.fontSize) || 40;
      let lineHeightPx = parseFloat(cs.lineHeight);
      if (!lineHeightPx || cs.lineHeight === "normal") lineHeightPx = fontSizePx * 1.15;
      return {
        fontSpec: `${cs.fontWeight || "900"} ${fontSizePx}px ${cs.fontFamily}`,
        fontSizePx,
        lineHeightPx,
        letterSpacing: cs.letterSpacing,
      };
    }

    function rebuild(animate: boolean) {
      const containerWidth = wrap!.clientWidth;
      if (containerWidth <= 0) return;
      const { fontSpec, fontSizePx, lineHeightPx, letterSpacing } = measureFontSpec();
      const step = Math.min(5, Math.max(2.4, fontSizePx / 22));
      const { targets, height } = sampleText(
        textRef.current.headline,
        textRef.current.accent,
        fontSpec,
        letterSpacing,
        containerWidth,
        lineHeightPx,
        headlineColor,
        accentColor,
        step
      );

      logicalW = containerWidth;
      logicalH = height;
      canvas!.width = Math.max(1, Math.round(logicalW * dpr));
      canvas!.height = Math.max(1, Math.round(logicalH * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const now = performance.now();
      const dotSize = step * 0.42;

      if (!animate || prefersReduced || particles.length === 0) {
        particles = targets.map((t) => ({
          x: t.x, y: t.y, tx: t.x, ty: t.y, sx: t.x, sy: t.y, vx: 0, vy: 0,
          alpha: 1, color: t.color, size: dotSize, mode: "idle", born: now,
        }));
      } else {
        const outgoing: Particle[] = particles.map((p) => ({
          ...p,
          mode: "out",
          vx: (Math.random() - 0.5) * 90,
          vy: -30 - Math.random() * 70,
          born: now,
        }));
        const incoming: Particle[] = targets.map((t) => {
          const ang = Math.random() * Math.PI * 2;
          const dist = 26 + Math.random() * 60;
          return {
            x: t.x, y: t.y,
            tx: t.x, ty: t.y,
            sx: t.x + Math.cos(ang) * dist,
            sy: t.y + Math.sin(ang) * dist,
            vx: 0, vy: 0, alpha: 0, color: t.color, size: dotSize,
            mode: "in", born: now + 80 + Math.random() * 180,
          };
        });
        particles = [...outgoing, ...incoming];
      }

      setBox({ ready: true, w: logicalW, h: logicalH });
    }

    rebuildRef.current = rebuild;
    rebuild(false);

    function handleResize() {
      const w = wrap!.clientWidth;
      if (Math.abs(w - lastWidth) < 2) return;
      lastWidth = w;
      rebuild(false);
    }
    lastWidth = wrap.clientWidth;
    window.addEventListener("resize", handleResize);
    const ro = new ResizeObserver(handleResize);
    ro.observe(wrap);

    // Re-snap once the real font finishes loading, in case the first
    // measurement happened against a fallback font's metrics.
    (document as Document & { fonts?: FontFaceSet }).fonts?.ready?.then(() => rebuild(false));

    const io = new IntersectionObserver(([entry]) => { running = entry.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      ctx!.clearRect(0, 0, logicalW, logicalH);

      if (prefersReduced) {
        for (const p of particles) {
          ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx!.fill();
        }
        return;
      }

      const next: Particle[] = [];
      for (const p of particles) {
        if (p.mode === "idle") {
          const t = now * 0.0015 + p.tx * 0.05 + p.ty * 0.05;
          p.x = p.tx + Math.sin(t) * 0.5;
          p.y = p.ty + Math.cos(t * 1.3) * 0.5;
          ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx!.fill();
          next.push(p);
        } else if (p.mode === "out") {
          p.x += p.vx * (1 / 60);
          p.y += p.vy * (1 / 60);
          p.vy -= 40 * (1 / 60);
          p.alpha -= 0.045;
          if (p.alpha > 0.01) {
            ctx!.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;
            ctx!.beginPath();
            ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx!.fill();
            next.push(p);
          }
        } else {
          if (now < p.born) { next.push(p); continue; }
          const t = Math.min(1, (now - p.born) / 620);
          const eased = 1 - Math.pow(1 - t, 3);
          p.x = p.sx + (p.tx - p.sx) * eased;
          p.y = p.sy + (p.ty - p.sy) * eased;
          p.alpha = t;
          ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx!.fill();
          if (t >= 1) p.mode = "idle";
          next.push(p);
        }
      }
      particles = next;
    }

    frame(performance.now());

    return () => {
      running = false;
      rebuildRef.current = null;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      io.disconnect();
    };
    // headlineColor/accentColor/fontClassName/fontStyle are stable per call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Trigger the dissolve/reform transition whenever the slide's text changes.
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    rebuildRef.current?.(true);
  }, [headline, accent]);

  return (
    <div ref={wrapRef} className={`relative ${className}`} style={box.ready ? { height: box.h } : undefined}>
      {/* fontClassName/fontStyle stay applied even once visually hidden — the
          canvas re-measures this element's computed font on every resize,
          font-load settle and slide change, so its real size/family/weight
          must never be lost, only clipped from view via sr-only. */}
      <h1
        ref={h1Ref}
        className={`${fontClassName} ${box.ready ? "sr-only" : ""}`.trim()}
        style={{ ...fontStyle, color: headlineColor }}
      >
        {headline}
        <br />
        <span style={{ color: accentColor, textShadow: accentGlow }}>{accent}</span>
      </h1>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: box.w || undefined,
          height: box.h || undefined,
          opacity: box.ready ? 1 : 0,
          filter: "drop-shadow(0 0 18px rgba(240,72,48,0.18))",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
