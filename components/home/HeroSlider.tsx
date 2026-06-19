"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Users,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/data/site";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80",
    tag: "Managed IT · Cloud · Cybersecurity",
    headline: "IT that keeps your",
    accent: "business moving.",
    sub: `Managed IT, cloud, cybersecurity, custom software and digital services for businesses across India and ${siteConfig.stats.countriesServed}+ countries. Proactive, accountable, built around your outcomes.`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    tag: "Cloud Computing · AWS · Azure · GCP",
    headline: "Cloud solutions that",
    accent: "scale with you.",
    sub: "AWS, Azure and Google Cloud migrations, architecture and ongoing management for enterprises ready to modernise. Zero downtime. Real savings.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    tag: "Cybersecurity · MDR · Zero Trust",
    headline: "Cybersecurity that",
    accent: "never sleeps.",
    sub: "24/7 managed detection and response, endpoint protection and compliance frameworks. Your data stays safe while your business keeps moving.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setVisible(false);
      setTimeout(() => {
        setActive(idx);
        setVisible(true);
      }, 300);
    },
    [active]
  );

  const next = useCallback(
    () => goTo((active + 1) % slides.length),
    [active, goTo]
  );
  const prev = useCallback(
    () => goTo((active - 1 + slides.length) % slides.length),
    [active, goTo]
  );

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[active];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images — all layered, crossfade via opacity */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark cinematic overlay — heavy left, fades right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(4,9,26,0.97) 0%, rgba(4,9,26,0.93) 38%, rgba(4,9,26,0.72) 58%, rgba(4,9,26,0.35) 78%, rgba(4,9,26,0.15) 100%)",
        }}
      />

      {/* Blue radial glow — bottom-left */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 5% 80%, rgba(24,120,240,0.20) 0%, transparent 65%)",
        }}
      />

      {/* Coral accent — top-left */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 0% 0%, rgba(240,72,48,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Content grid */}
      <div className="container-custom relative z-10 pt-32 pb-24 lg:pt-36 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 xl:gap-20 items-center">

          {/* ── Left: sliding text ── */}
          <div
            className="transition-all ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(14px)",
              transitionDuration: visible ? "400ms" : "250ms",
            }}
          >
            {/* Live status */}
            <div className="status-pill mb-5 w-fit">
              Systems Operational · {siteConfig.stats.uptime} uptime
            </div>

            {/* Slide category label */}
            <p className="text-white/38 text-xs font-mono tracking-widest uppercase mb-6">
              {slide.tag}
            </p>

            {/* Headline */}
            <h1
              className="font-display font-black leading-[1.02] tracking-tight text-white mb-7"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
            >
              {slide.headline}
              <br />
              <span
                className="text-[#F04830]"
                style={{ textShadow: "0 0 40px rgba(240,72,48,0.35)" }}
              >
                {slide.accent}
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg text-white/65 max-w-lg leading-relaxed mb-10">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#F04830] hover:bg-[#D63820] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#F04830]/30 hover:shadow-[#F04830]/50 hover:-translate-y-0.5"
              >
                Get a Free Assessment <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2.5 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                <span className="w-9 h-9 bg-white/12 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={15} />
                </span>
                <span>
                  <span className="block text-[10px] text-white/45 uppercase tracking-widest font-semibold mb-0.5">
                    Need help?
                  </span>
                  {siteConfig.phone}
                </span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {[
                "Microsoft Partner",
                "AWS Certified",
                "Google Cloud Partner",
                "ISO 27001 Aligned",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/60 border border-white/12 bg-white/5"
                >
                  <CheckCircle2
                    size={11}
                    className="text-emerald-400 flex-shrink-0"
                  />
                  {badge}
                </span>
              ))}
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full flex-shrink-0 ${
                    i === active
                      ? "w-8 h-2.5 bg-[#F04830]"
                      : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
              <div className="flex-1" />
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 hover:border-white/40 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 hover:border-white/40 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* ── Right: frosted glass stat panels (static) ── */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Happy Clients */}
            <div className="w-64 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Users size={19} className="text-emerald-400" />
                </div>
                <span className="text-white/55 text-sm font-medium">
                  Happy Clients
                </span>
              </div>
              <div className="font-display text-4xl font-black text-white leading-none">
                {siteConfig.stats.clientsServed}+
              </div>
              <div className="h-0.5 w-12 bg-emerald-400/40 rounded-full mt-3" />
            </div>

            {/* Uptime SLA */}
            <div className="w-64 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1878F0]/25 flex items-center justify-center flex-shrink-0">
                  <Shield size={19} className="text-[#60A5FA]" />
                </div>
                <span className="text-white/55 text-sm font-medium">
                  Uptime SLA
                </span>
              </div>
              <div className="font-display text-4xl font-black text-white leading-none">
                99.9%
              </div>
              <div className="h-0.5 w-12 bg-[#1878F0]/50 rounded-full mt-3" />
            </div>

            {/* Years Experience */}
            <div className="w-64 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F04830]/20 flex items-center justify-center flex-shrink-0">
                  <Award size={19} className="text-[#FB8070]" />
                </div>
                <span className="text-white/55 text-sm font-medium">
                  Years Experience
                </span>
              </div>
              <div className="font-display text-4xl font-black text-white leading-none">
                {siteConfig.stats.yearsInBusiness}+
              </div>
              <div className="h-0.5 w-12 bg-[#F04830]/50 rounded-full mt-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave into dark navy stats strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="w-full h-10 lg:h-14"
          style={{ fill: "#060B24" }}
        >
          <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  );
}
