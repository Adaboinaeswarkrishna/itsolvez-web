"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, Users, Shield, Award, Globe, Zap, TrendingUp, Server, ChevronLeft, ChevronRight } from "lucide-react";
import { telHref } from "@/lib/validation";
import VortexField from "@/components/motion/VortexField";

export interface HeroSlide {
  image_url: string;
  tag: string;
  headline: string;
  accent: string;
  subtitle: string;
  cta_text: string;
  cta_url: string;
  phone_label: string;
  phone_number: string;
  badges: string[];
}

export interface HeroStat {
  icon: string;
  label: string;
  value: string;
  color: "emerald" | "blue" | "red" | "purple";
}

const ICON_MAP: Record<string, React.ElementType> = {
  Users, Shield, Award, Globe, Zap, TrendingUp, Server, CheckCircle: CheckCircle2,
};

const COLOR_MAP = {
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", bar: "bg-emerald-400/40" },
  blue:    { bg: "bg-[#1878F0]/25",   text: "text-[#60A5FA]",   bar: "bg-[#1878F0]/50"  },
  red:     { bg: "bg-[#F04830]/20",   text: "text-[#FB8070]",   bar: "bg-[#F04830]/50"  },
  purple:  { bg: "bg-purple-500/20",  text: "text-purple-400",  bar: "bg-purple-400/40" },
};

export default function HeroSlider({ slides, stats }: { slides: HeroSlide[]; stats: HeroStat[] }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    if (idx === active) return;
    setVisible(false);
    setTimeout(() => { setActive(idx); setVisible(true); }, 300);
  }, [active]);

  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo, slides.length]);
  const prev = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo, slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (!slides.length) return null;
  const slide = slides[active];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark base — the vortex and text sit on this instead of a photo */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#060B24" }} />

      {/* AI-vortex wireframe background — persistent across slides; only the text changes */}
      <VortexField className="absolute inset-0 z-[1]" apexX={0.7} apexY={0.42} color="96, 165, 250" accentColor="240, 72, 48" />

      {/* Overlays */}
      <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(105deg, rgba(4,9,26,0.95) 0%, rgba(4,9,26,0.88) 38%, rgba(4,9,26,0.62) 58%, rgba(4,9,26,0.28) 78%, rgba(4,9,26,0.10) 100%)" }} />
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 5% 80%, rgba(24,120,240,0.20) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 40% at 0% 0%, rgba(240,72,48,0.12) 0%, transparent 60%)" }} />

      <div className="container-custom relative z-10 pt-32 pb-24 lg:pt-36 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 xl:gap-20 items-center">

          {/* Left: sliding text */}
          <div className="transition-all ease-out" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0px)" : "translateY(14px)", transitionDuration: visible ? "400ms" : "250ms" }}>

            {/* Status pill */}
            <div className="status-pill mb-5 w-fit">Systems Operational · 99.9% uptime</div>

            {/* Tag */}
            <p className="text-white/38 text-xs font-mono tracking-widest uppercase mb-6">{slide.tag}</p>

            {/* Headline — plain solid text (the vapour dot effect made it hard to read) */}
            <h1 className="font-display font-black leading-[1.02] tracking-tight text-white mb-7" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}>
              {slide.headline}
              <br />
              <span className="text-[#F04830]" style={{ textShadow: "0 0 40px rgba(240,72,48,0.35)" }}>{slide.accent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/65 max-w-lg leading-relaxed mb-10">{slide.subtitle}</p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href={slide.cta_url} className="inline-flex items-center gap-2.5 bg-[#F04830] hover:bg-[#D63820] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#F04830]/30 hover:shadow-[#F04830]/50 hover:-translate-y-0.5" prefetch={false}>
                {slide.cta_text} <ArrowRight size={18} />
              </Link>
              {slide.phone_number && (
                <a href={telHref(slide.phone_number)} className="inline-flex items-center gap-2.5 text-white/80 hover:text-white text-sm font-medium transition-colors">
                  <span className="w-9 h-9 bg-white/12 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0"><Phone size={15} /></span>
                  <span>
                    <span className="block text-[10px] text-white/45 uppercase tracking-widest font-semibold mb-0.5">{slide.phone_label}</span>
                    {slide.phone_number}
                  </span>
                </a>
              )}
            </div>

            {/* Badges */}
            {slide.badges?.length > 0 && (
              <div className="flex flex-wrap gap-2.5 mb-10">
                {slide.badges.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/60 border border-white/12 bg-white/5">
                    <CheckCircle2 size={11} className="text-emerald-400 flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Slider controls */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full flex-shrink-0 ${i === active ? "w-8 h-2.5 bg-[#F04830]" : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
              <div className="flex-1" />
              <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 hover:border-white/40 transition-all"><ChevronLeft size={18} /></button>
              <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 hover:border-white/40 transition-all"><ChevronRight size={18} /></button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {stats.map((stat) => {
              const Icon = ICON_MAP[stat.icon] ?? Users;
              const clr = COLOR_MAP[stat.color] ?? COLOR_MAP.blue;
              return (
                <div key={stat.label} className="w-64 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${clr.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={19} className={clr.text} />
                    </div>
                    <span className="text-white/55 text-sm font-medium">{stat.label}</span>
                  </div>
                  <div className="font-display text-4xl font-black text-white leading-none">{stat.value}</div>
                  <div className={`h-0.5 w-12 ${clr.bar} rounded-full mt-3`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 lg:h-14" style={{ fill: "#060B24" }}>
          <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  );
}
