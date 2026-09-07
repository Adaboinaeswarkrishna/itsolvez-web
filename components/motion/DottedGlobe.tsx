"use client";

import { useEffect, useRef } from "react";

interface Marker {
  name: string;
  lat: number;
  lng: number;
}

interface DottedGlobeProps {
  className?: string;
  size?: number;
  markers?: Marker[];
  dotColor?: string; // "r, g, b"
  markerColor?: string; // "r, g, b"
}

// Real, approximate coordinates for the countries ITSolvez actually serves —
// used only to place markers on the globe, not as claims about anything else.
export const SERVED_COUNTRY_MARKERS: Marker[] = [
  { name: "India", lat: 19.0, lng: 72.8 },
  { name: "UAE", lat: 25.2, lng: 55.3 },
  { name: "UK", lat: 51.5, lng: -0.1 },
  { name: "USA", lat: 40.7, lng: -74.0 },
  { name: "Australia", lat: -33.9, lng: 151.2 },
  { name: "Canada", lat: 43.7, lng: -79.4 },
  { name: "Germany", lat: 52.5, lng: 13.4 },
  { name: "Saudi Arabia", lat: 24.7, lng: 46.7 },
  { name: "South Africa", lat: -26.2, lng: 28.0 },
  { name: "Qatar", lat: 25.3, lng: 51.5 },
  { name: "Singapore", lat: 1.35, lng: 103.8 },
];

// A slowly auto-rotating wireframe dot-sphere, hand-rolled with basic 3D
// projection math — no three.js. Decorative rather than drag-to-rotate, with
// a handful of highlighted markers for real served locations.
export default function DottedGlobe({
  className = "",
  size = 420,
  markers = SERVED_COUNTRY_MARKERS,
  dotColor = "96, 165, 250",
  markerColor = "240, 72, 48",
}: DottedGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const radius = size * 0.42;
    const cx = size / 2;
    const cy = size / 2;

    const gridPoints: { lat: number; lng: number }[] = [];
    for (let lat = -80; lat <= 80; lat += 10) {
      const step = Math.max(10, 10 / Math.max(0.2, Math.cos((lat * Math.PI) / 180)));
      for (let lng = -180; lng < 180; lng += step) {
        gridPoints.push({ lat, lng });
      }
    }

    function project(lat: number, lng: number, rotation: number) {
      const phi = (lat * Math.PI) / 180;
      const theta = (lng * Math.PI) / 180 + rotation;
      const x = Math.cos(phi) * Math.sin(theta);
      const y = Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(theta);
      return { x: x * radius, y: -y * radius, z };
    }

    let rotation = 0;
    let raf = 0;
    let running = true;

    const io = new IntersectionObserver(([entry]) => { running = entry.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      if (!prefersReduced) rotation += 0.0022;

      ctx!.clearRect(0, 0, size, size);

      ctx!.strokeStyle = `rgba(${dotColor}, 0.18)`;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx!.stroke();

      for (const gp of gridPoints) {
        const p = project(gp.lat, gp.lng, rotation);
        if (p.z < -0.15) continue;
        const alpha = Math.max(0, Math.min(1, (p.z + 0.15) / 1.15)) * 0.55;
        ctx!.fillStyle = `rgba(${dotColor}, ${alpha})`;
        const r = 0.9 + p.z * 0.5;
        ctx!.beginPath();
        ctx!.arc(cx + p.x, cy + p.y, Math.max(0.4, r), 0, Math.PI * 2);
        ctx!.fill();
      }

      for (const m of markers) {
        const p = project(m.lat, m.lng, rotation);
        if (p.z < -0.1) continue;
        const alpha = Math.max(0.15, Math.min(1, (p.z + 0.3) / 1.3));
        ctx!.fillStyle = `rgba(${markerColor}, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(cx + p.x, cy + p.y, 3.2, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.strokeStyle = `rgba(${markerColor}, ${alpha * 0.4})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx + p.x, cy + p.y, 6, 0, Math.PI * 2);
        ctx!.stroke();
      }
    }

    frame();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [size, markers, dotColor, markerColor]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" style={{ width: size, height: size }} />;
}
