"use client";

import { useEffect, useRef } from "react";

interface VortexFieldProps {
  className?: string;
  /** apex position as a fraction of width/height, e.g. 0.68 = 68% across */
  apexX?: number;
  apexY?: number;
  color?: string; // "r, g, b" — primary wireframe colour
  accentColor?: string; // "r, g, b" — brand accent used on a few rings/particles
}

// A slowly rotating wireframe funnel/vortex — many perspective rings twisted
// around a shared axis, joined by meridian lines, with a handful of glowing
// particles drifting along the surface. Hand-rolled canvas 2D (no three.js),
// same resize/visibility/reduced-motion handling as ParticleField and
// DottedGlobe. Meant to sit as a persistent full-bleed background behind
// the hero's sliding text, not per-slide artwork.
export default function VortexField({
  className = "",
  apexX = 0.68,
  apexY = 0.46,
  color = "96, 165, 250",
  accentColor = "240, 72, 48",
}: VortexFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let twist = 0;

    const RINGS = 18;
    const SEGMENTS = 64;
    const MERIDIANS = 24;
    const PARTICLES = 34;

    let particles: { depth: number; angle: number; speed: number }[] = [];

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.max(1, width * dpr);
      canvas!.height = Math.max(1, height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      particles = Array.from({ length: PARTICLES }, () => ({
        depth: Math.random(),
        angle: Math.random() * Math.PI * 2,
        speed: 0.0009 + Math.random() * 0.0014,
      }));
    }

    // Maps a ring depth (0 = nearest/largest, 1 = farthest/vanishing point)
    // plus an angle to a screen point, given the current twist offset.
    function project(depth: number, angle: number, cx: number, cy: number, maxR: number) {
      const eased = Math.pow(1 - depth, 1.15); // gentle falloff -> more of the funnel reads at mid-depth
      const radiusX = maxR * eased + maxR * 0.014;
      const radiusY = radiusX * 0.58;
      const spin = twist * (0.4 + depth * 0.9); // farther rings twist more -> spiral feel
      const a = angle + spin;
      const x = cx + Math.cos(a) * radiusX;
      const y = cy + Math.sin(a) * radiusY - depth * maxR * 0.16;
      return { x, y, radiusX };
    }

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!running || width === 0) return;
      if (!prefersReduced) twist += 0.0016;

      ctx!.clearRect(0, 0, width, height);

      const cx = width * apexX;
      const cy = height * apexY;
      const maxR = Math.min(width, height) * 0.8;

      // Soft glowing core at the vanishing point, like a light source the
      // whole funnel is converging on.
      const core = ctx!.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.34);
      core.addColorStop(0, `rgba(${color}, 0.5)`);
      core.addColorStop(0.45, `rgba(${color}, 0.14)`);
      core.addColorStop(1, `rgba(${color}, 0)`);
      ctx!.fillStyle = core;
      ctx!.fillRect(0, 0, width, height);

      // Rings, farthest first so the brighter near rings sit on top
      for (let i = RINGS - 1; i >= 0; i--) {
        const depth = i / (RINGS - 1);
        const isAccent = i % 5 === 0;
        const alpha = 0.07 + Math.pow(1 - depth, 0.85) * 0.55;
        ctx!.beginPath();
        for (let s = 0; s <= SEGMENTS; s++) {
          const angle = (s / SEGMENTS) * Math.PI * 2;
          const p = project(depth, angle, cx, cy, maxR);
          if (s === 0) ctx!.moveTo(p.x, p.y);
          else ctx!.lineTo(p.x, p.y);
        }
        ctx!.strokeStyle = `rgba(${isAccent ? accentColor : color}, ${alpha})`;
        ctx!.lineWidth = isAccent ? 1.4 : 1;
        ctx!.shadowColor = `rgba(${isAccent ? accentColor : color}, ${Math.min(1, alpha * 1.4)})`;
        ctx!.shadowBlur = isAccent ? 14 : 7;
        ctx!.stroke();
      }
      ctx!.shadowBlur = 0;

      // Meridians (surface lines running from near ring to the vanishing point)
      for (let m = 0; m < MERIDIANS; m++) {
        const baseAngle = (m / MERIDIANS) * Math.PI * 2;
        ctx!.beginPath();
        for (let i = 0; i < RINGS; i++) {
          const depth = i / (RINGS - 1);
          const p = project(depth, baseAngle, cx, cy, maxR);
          if (i === 0) ctx!.moveTo(p.x, p.y);
          else ctx!.lineTo(p.x, p.y);
        }
        ctx!.strokeStyle = `rgba(${color}, 0.14)`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
      }

      // Particles drifting from the apex outward along the funnel surface
      for (const pt of particles) {
        if (!prefersReduced) {
          pt.depth -= pt.speed;
          if (pt.depth < 0) pt.depth = 1;
        }
        const p = project(pt.depth, pt.angle, cx, cy, maxR);
        const alpha = (1 - pt.depth) * 0.9 + 0.1;
        ctx!.fillStyle = `rgba(${color}, ${alpha})`;
        ctx!.shadowColor = `rgba(${color}, ${alpha})`;
        ctx!.shadowBlur = 9;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;
    }

    resize();
    seedParticles();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(([entry]) => { running = entry.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    frame();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [apexX, apexY, color, accentColor]);

  // w-full h-full first: canvas is a replaced element and won't stretch to
  // fill an absolutely positioned parent from `inset-0` alone.
  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} aria-hidden="true" />;
}
