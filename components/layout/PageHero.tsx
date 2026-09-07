import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import ParticleField from "@/components/motion/ParticleField";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  tag?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  waveFill?: string;
  children?: ReactNode;
}

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80";

export default function PageHero({
  tag,
  title,
  titleAccent,
  subtitle,
  bgImage = DEFAULT_BG,
  breadcrumbs,
  waveFill = "#ffffff",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden flex items-end" style={{ minHeight: "380px" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={`${title} - ITSolvez`}
          fill
          className="object-cover object-center"
          priority
          quality={60}
          sizes="100vw"
        />
      </div>

      {/* Dark cinematic overlay — heavier than homepage since less real estate */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(4,9,26,0.97) 0%, rgba(4,9,26,0.92) 50%, rgba(4,9,26,0.80) 75%, rgba(4,9,26,0.62) 100%)",
        }}
      />

      {/* Blue radial glow — bottom-left brand accent */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 0% 100%, rgba(24,120,240,0.20) 0%, transparent 60%)",
        }}
      />

      {/* Coral accent — top-left */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 40% at 0% 0%, rgba(240,72,48,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Faint drifting particle backdrop — subtle enough to sit behind any bgImage */}
      <ParticleField className="absolute inset-0 z-[2]" density={22} color="96, 165, 250" opacity={0.28} />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-16 w-full">
        <Reveal>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm mb-5 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <ArrowRight size={12} className="text-white/25 flex-shrink-0" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-white/45 hover:text-white/70 transition-colors"
                   prefetch={false}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/65">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Tag */}
        {tag && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#60A5FA] border border-[#1878F0]/35 bg-[#1878F0]/10 px-3 py-1.5 rounded-full font-mono">
              {tag}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-display font-black text-white leading-tight mb-4 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
          {title}
          {titleAccent && (
            <>
              {" "}
              <span
                className="text-[#F04830]"
                style={{ textShadow: "0 0 28px rgba(240,72,48,0.30)" }}
              >
                {titleAccent}
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/58 text-lg leading-relaxed max-w-2xl mb-6">
            {subtitle}
          </p>
        )}

        {/* Optional CTA slot */}
        {children && <div className="flex flex-wrap gap-3 mt-2">{children}</div>}
        </Reveal>
      </div>

      {/* Bottom wave — colour matches first section below hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-none overflow-hidden">
        <svg
          viewBox="0 0 1440 44"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 lg:h-11 block"
          style={{ fill: waveFill }}
        >
          <path d="M0,44 C360,4 1080,4 1440,44 L1440,44 L0,44 Z" />
        </svg>
      </div>
    </section>
  );
}
