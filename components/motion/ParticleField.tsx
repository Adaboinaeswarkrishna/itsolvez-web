"use client";

import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  className?: string;
  density?: number; // baseline particle count, scales with area
  color?: string; // "r, g, b" triplet
  opacity?: number;
}

// A slow-drifting node/line network — a decorative canvas backdrop for dark
// sections. No dependency, capped device-pixel-ratio, pauses when off-screen
// or when the visitor has reduced motion set, so it never costs anything
// it doesn't have to.
export default function ParticleField({
  className = "",
  density = 50,
  color = "96, 165, 250",
  opacity = 0.5,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    let raf = 0;
    let running = true;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.max(1, width * dpr);
      canvas!.height = Math.max(1, height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(16, Math.round(((width * height) / 22000) * (density / 50)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!running || prefersReduced || width === 0) return;

      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      const linkDist = Math.min(140, width / 6);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx!.strokeStyle = `rgba(${color}, ${opacity * (1 - dist / linkDist) * 0.6})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx!.fillStyle = `rgba(${color}, ${opacity})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    resize();
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(([entry]) => { running = entry.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    if (!prefersReduced) frame();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [density, color, opacity]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
