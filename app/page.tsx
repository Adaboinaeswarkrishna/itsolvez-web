import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Monitor, Cloud, Shield, Code2,
  Globe, Smartphone, TrendingUp, Users, Server, GitMerge, Lightbulb,
  Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2,
  BarChart2, ChevronRight, Star, Zap, Award,
} from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Managed IT Services, Cloud & Cybersecurity India — ITSolvez",
  description:
    "ITSolvez delivers managed IT, cloud, cybersecurity, custom software and digital services to businesses across India and 5+ countries. Pune-headquartered. Get a free assessment.",
  alternates: { canonical: "https://itsolvez.com" },
};

const iconMap: Record<string, React.ElementType> = {
  Monitor, Cloud, Shield, Code2, Globe, Smartphone, TrendingUp,
  Users, Server, GitMerge, Lightbulb,
  HeadphonesIcon: Smartphone,
  Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2, BarChart2,
};

/* Premium gradient palette for service cards */
const cardPalette = [
  { gradient: "linear-gradient(135deg,#1878F0 0%,#60A5FA 100%)", accent: "#1878F0",  shadow: "rgba(24,120,240,0.18)"  },
  { gradient: "linear-gradient(135deg,#F04830 0%,#FB923C 100%)", accent: "#E53E2C",  shadow: "rgba(240,72,48,0.18)"   },
  { gradient: "linear-gradient(135deg,#5B3FC8 0%,#818CF8 100%)", accent: "#5B3FC8",  shadow: "rgba(91,63,200,0.18)"   },
  { gradient: "linear-gradient(135deg,#059669 0%,#34D399 100%)", accent: "#059669",  shadow: "rgba(5,150,105,0.18)"   },
  { gradient: "linear-gradient(135deg,#D97706 0%,#FCD34D 100%)", accent: "#B45309",  shadow: "rgba(217,119,6,0.18)"   },
  { gradient: "linear-gradient(135deg,#DB2777 0%,#F472B6 100%)", accent: "#BE185D",  shadow: "rgba(219,39,119,0.18)"  },
];

/* Step colours for How We Work */
const stepColors = [
  { from: "#1878F0", to: "#4D9EF8", glow: "rgba(24,120,240,0.35)" },
  { from: "#F04830", to: "#F87060", glow: "rgba(240,72,48,0.35)" },
  { from: "#5B3FC8", to: "#8B69F8", glow: "rgba(91,63,200,0.35)" },
  { from: "#059669", to: "#34D399", glow: "rgba(5,150,105,0.35)" },
];

const stats = [
  { value: `${siteConfig.stats.yearsInBusiness}+`, label: "Years in Business", icon: Award },
  { value: `${siteConfig.stats.clientsServed}+`, label: "Clients Served", icon: Users },
  { value: `${siteConfig.stats.projectsDelivered}+`, label: "Projects Delivered", icon: CheckCircle2 },
  { value: `${siteConfig.stats.countriesServed}+`, label: "Countries Served", icon: Globe },
];

const howWeWork = [
  {
    step: "01",
    title: "Discover",
    description:
      "Structured assessment of your IT environment, goals and constraints — no assumptions, no generic playbooks.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Engineers design a solution specific to your business — architecture, integrations, security posture, and a costed roadmap.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We execute in clear, measurable phases. Onboarding is complete and documented before we take over operations.",
  },
  {
    step: "04",
    title: "Run",
    description:
      "We manage, monitor, optimise and report — continuously. Quarterly reviews keep your technology aligned to your goals.",
  },
];

const whyUs = [
  { text: "Named engineers who know your environment — not a faceless queue", color: "#1878F0" },
  { text: "SLA-backed response times on every engagement", color: "#F04830" },
  { text: "Vendor-honest advice — Microsoft, AWS and Google Cloud certified", color: "#1878F0" },
  { text: "AEO and SEO-optimised digital services built for 2026 AI-search", color: "#F04830" },
  { text: "DPDPA 2023 and sector compliance built into every solution", color: "#1878F0" },
  { text: "Transparent monthly reporting tied to business outcomes, not ticket counts", color: "#F04830" },
];

const testimonials = [
  {
    quote:
      "ITSolvez transformed our IT infrastructure from a cost centre into a competitive advantage. Downtime is down, our team is more productive, and the monthly reporting gives our board real visibility.",
    name: "Managing Director",
    company: "Mid-size Manufacturing Firm, Pune",
    rating: 5,
    initials: "MD",
    accentColor: "#1878F0",
  },
  {
    quote:
      "We needed a partner who understood both our technical requirements and the regulatory environment for financial services. ITSolvez delivered on both, on time and within budget.",
    name: "CTO",
    company: "NBFC, Mumbai",
    rating: 5,
    initials: "CTO",
    accentColor: "#F04830",
  },
  {
    quote:
      "The web and app development team at ITSolvez built us a platform that we have scaled from 500 to 50,000 users without a single major incident. Engineering quality is exceptional.",
    name: "Founder",
    company: "Healthtech Startup, Bangalore",
    rating: 5,
    initials: "FD",
    accentColor: "#5B3FC8",
  },
];

const caseStudies = [
  {
    tag: "Managed IT",
    title: "Reducing IT downtime by 87% for a Pune manufacturer",
    description:
      "After onboarding managed IT, a 200-person manufacturing firm saw incidents drop from 3+ per week to near zero within 90 days.",
    result: "87% reduction in downtime",
    industry: "Manufacturing",
    tagColor: "#1878F0",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Cloud Migration",
    title: "Zero-downtime AWS migration for an NBFC",
    description:
      "We migrated a 12-year-old on-premise core infrastructure to AWS in staged phases, with no customer-facing downtime during business hours.",
    result: "₹18L annual cost reduction",
    industry: "Banking & Finance",
    tagColor: "#F04830",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Cybersecurity",
    title: "MDR deployment stops ransomware attack in 9 minutes",
    description:
      "Our 24/7 MDR service detected and contained a ransomware attempt at a healthcare client before a single file was encrypted.",
    result: "Attack contained in 9 minutes",
    industry: "Healthcare",
    tagColor: "#5B3FC8",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "ITSolvez Pvt Ltd",
  alternateName: "ITSolvez",
  url: "https://itsolvez.com",
  logo: "https://itsolvez.com/logo.png",
  description: "Managed IT, cloud, cybersecurity, custom software and digital services for businesses across India and globally.",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: "IN",
    postalCode: siteConfig.address.postal,
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
  foundingDate: siteConfig.founded,
  areaServed: ["India", "Global"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ━━━━ HERO — Sliding hero with crossfade ━━━━ */}
      <HeroSlider />

      {/* ━━━━ STATS — Dark navy, compact, per-stat accent colours ━━━━ */}
      <section
        style={{
          background: "linear-gradient(180deg, #060B24 0%, #0A1540 60%, #0D1F6E 100%)",
        }}
      >
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colors = [
                { icon: "#1878F0", iconBg: "rgba(24,120,240,0.15)", num: "#60A5FA", bar: "#1878F0" },
                { icon: "#F04830", iconBg: "rgba(240,72,48,0.15)",  num: "#FB8070", bar: "#F04830" },
                { icon: "#5B3FC8", iconBg: "rgba(91,63,200,0.15)",  num: "#A78BFA", bar: "#5B3FC8" },
                { icon: "#059669", iconBg: "rgba(5,150,105,0.15)",  num: "#34D399", bar: "#059669" },
              ];
              const c = colors[idx % colors.length];
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 px-6 py-5 border-r border-white/8 last:border-r-0"
                >
                  {/* Coloured icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: c.iconBg }}
                  >
                    <Icon size={20} style={{ color: c.icon }} />
                  </div>
                  {/* Number + label */}
                  <div>
                    <div
                      className="font-display text-3xl lg:text-4xl font-black leading-none mb-0.5"
                      style={{ color: c.num }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Wave into white services section */}
        <div className="overflow-hidden leading-none">
          <svg viewBox="0 0 1440 36" preserveAspectRatio="none" className="w-full h-7 lg:h-9 fill-white block">
            <path d="M0,36 C480,0 960,0 1440,36 L1440,36 L0,36 Z" />
          </svg>
        </div>
      </section>

      {/* ━━━━ SERVICES — Premium redesign ━━━━ */}
      <section className="section-py" style={{ background: "#F4F8FF" }}>
        <div className="container-custom">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="section-tag mb-4">What We Do</span>
            <h2 className="section-heading mb-5">
              Every IT challenge,{" "}
              <span className="text-[#1878F0]">one accountable partner</span>
            </h2>
            <p className="text-[#5A6380] max-w-2xl mx-auto text-lg leading-relaxed">
              From the infrastructure your business runs on to the software your customers use — we design, build and manage it all.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] ?? Zap;
              const p = cardPalette[idx % cardPalette.length];
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col border border-[#E8EDF8] transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_50px_rgba(6,11,36,0.13)]"
                  style={{ boxShadow: "0 2px 16px rgba(6,11,36,0.05)" }}
                >
                  {/* Gradient top strip — thickens on hover */}
                  <div
                    className="h-1 w-full flex-shrink-0 transition-all duration-300 group-hover:h-[3px]"
                    style={{ background: p.gradient }}
                  />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon + service number row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{ background: p.gradient }}
                      >
                        <Icon size={26} className="text-white" />
                      </div>
                      <span
                        className="font-mono text-4xl font-black leading-none mt-0.5 transition-opacity duration-200 group-hover:opacity-60"
                        style={{ color: "#E8EDF8" }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-[#0B1233] text-xl leading-tight mb-2">
                      {service.shortTitle}
                    </h3>

                    {/* Gradient accent line */}
                    <div
                      className="h-0.5 w-9 rounded-full mb-4 transition-all duration-300 group-hover:w-14"
                      style={{ background: p.gradient }}
                    />

                    {/* Description */}
                    <p className="text-sm text-[#5A6380] leading-relaxed flex-1 mb-6">
                      {service.description}
                    </p>

                    {/* CTA footer */}
                    <div className="pt-4 border-t border-[#F1F5FB]">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                        style={{ color: p.accent }}
                      >
                        Explore Service
                        <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View all CTA */}
          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 border-2 border-[#1878F0] text-[#1878F0] hover:bg-[#1878F0] hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              View all 12 services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━ ABOUT ITSOLVEZ ━━━━ */}
      <section className="section-py" style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #F5F9FF 50%, #EEF0FF 100%)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4">About Us</span>
              <h2 className="section-heading mb-6">
                We&apos;re Leading The Power Of{" "}
                <span className="text-[#1878F0]">Technology</span>
              </h2>
              <p className="text-[#5A6380] leading-relaxed mb-8">
                Founded in Pune, ITSolvez has grown from a managed IT specialist into a
                full-spectrum technology partner serving businesses across India and globally.
                We combine deep technical expertise with business-first thinking to deliver
                IT that moves your organisation forward.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  "Best IT Solutions & Service",
                  "Always Latest Technology",
                  "24/7 Customer Support",
                  "Transparent Reporting",
                  "SLA-Backed Response Times",
                  "World-Class Engineering",
                ].map((feat, i) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: i % 2 === 0 ? "#EEF6FF" : "#FFF0EE" }}
                    >
                      <CheckCircle2 size={12} style={{ color: i % 2 === 0 ? "#1878F0" : "#F04830" }} />
                    </div>
                    <span className="text-sm text-[#0B1233] leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="ITSolvez team in a strategy session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 45vw, 580px"
                />
              </div>
              {/* Years badge */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl p-6 shadow-2xl min-w-[130px]"
                   style={{ background: "linear-gradient(135deg, #1878F0 0%, #5B3FC8 100%)" }}>
                <div className="font-display text-4xl font-black text-white leading-none">
                  {siteConfig.stats.yearsInBusiness}+
                </div>
                <div className="text-sm text-white/85 mt-1 font-semibold">Year&apos;s</div>
                <div className="text-xs text-white/60 mt-0.5">of experience<br />in this industry</div>
              </div>
              {/* Dot pattern */}
              <div className="absolute -top-6 -right-6 grid grid-cols-5 gap-2 opacity-40">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1878F0]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ HOW WE WORK — Coloured step circles ━━━━ */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Our Process</span>
            <h2 className="section-heading mb-4">How we work</h2>
            <p className="text-[#5A6380] max-w-xl mx-auto">
              A repeatable, transparent delivery model — whether you&apos;re onboarding managed IT or launching a custom software project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {howWeWork.map((item, idx) => {
              const sc = stepColors[idx];
              return (
                <div key={item.step} className="relative flex flex-col items-center text-center group">
                  {/* Connecting line between circles (desktop) */}
                  {idx < howWeWork.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-0.5 z-0"
                      style={{ background: `linear-gradient(to right, ${sc.from}50, transparent)` }}
                    />
                  )}

                  {/* Step circle */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${sc.from} 0%, ${sc.to} 100%)`,
                      boxShadow: `0 8px 24px ${sc.glow}`,
                    }}
                  >
                    {item.step}
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-2xl border border-[#E5E9F2] p-6 w-full hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-bold text-[#0B1233] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5A6380] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━ INDUSTRIES — White frosted cards on blue ━━━━ */}
      <section className="section-py gradient-blue-deep grid-bg">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-white/60 border border-white/20 bg-white/8 px-3 py-1 rounded-full mb-4">
              Industries
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">
              Built for your sector
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Every industry has different compliance obligations, infrastructure demands and risk profiles. We know yours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Building2;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group p-5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/18 hover:border-white/40 hover:shadow-lg transition-all duration-200 backdrop-blur-sm"
                >
                  {/* Icon — WHITE on translucent bg so it's clearly visible */}
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3 group-hover:bg-white/30 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {industry.shortTitle}
                  </div>
                  <div className="text-xs text-white/55 line-clamp-2 leading-relaxed">
                    {industry.description}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/industries" className="btn-ghost">
              All industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━ WHY ITSOLVEZ ━━━━ */}
      <section className="section-py bg-[#F0F7FF]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4">Why ITSolvez</span>
              <h2 className="section-heading mb-6">
                The difference between a vendor and a{" "}
                <span className="text-[#1878F0]">partner</span>
              </h2>
              <p className="text-[#5A6380] leading-relaxed mb-8">
                Most IT providers react. We prevent. Most measure themselves by tickets closed —
                we measure ourselves by your uptime, your security posture and your growth.
              </p>
              <ul className="space-y-3">
                {whyUs.map((point) => (
                  <li key={point.text} className="flex items-start gap-3 group">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: point.color + "18" }}
                    >
                      <CheckCircle2 size={14} style={{ color: point.color }} />
                    </div>
                    <span className="text-sm text-[#0B1233] leading-relaxed">{point.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  About ITSolvez <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Operations dashboard */}
            <div className="rounded-2xl p-8 shadow-2xl border border-white/8"
                 style={{ background: "linear-gradient(135deg, #0B3894 0%, #1261CC 50%, #1878F0 100%)" }}>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-white">Operations Overview</span>
                <span className="status-pill text-xs">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Avg. Response Time", value: "< 15 min", sub: "critical incidents", color: "#F04830" },
                  { label: "Uptime SLA", value: "99.9%", sub: "managed infrastructure", color: "#10b981" },
                  { label: "Client NPS", value: "72", sub: "last quarter", color: "#1878F0" },
                  { label: "Security Incidents", value: "0", sub: "breaches in 2025", color: "#10b981" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="text-2xl font-black text-white font-display mb-0.5"
                         style={{ color: item.color }}>
                      {item.value}
                    </div>
                    <div className="text-xs font-medium text-white/70">{item.label}</div>
                    <div className="text-xs text-white/35 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { label: "Network health", pct: 98, color: "#10b981" },
                  { label: "Patch compliance", pct: 100, color: "#1878F0" },
                  { label: "Backup integrity", pct: 100, color: "#F04830" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/55">{item.label}</span>
                      <span className="font-mono font-semibold" style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ CASE STUDIES ━━━━ */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="section-tag mb-4">Case Studies</span>
              <h2 className="section-heading">Real outcomes, real clients</h2>
            </div>
            <Link href="/case-studies" className="btn-secondary flex-shrink-0">
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <article
                key={cs.title}
                className="bg-white rounded-2xl border border-[#E5E9F2] overflow-hidden group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                style={{ borderTop: `3px solid ${cs.tagColor}` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B24]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span
                      className="text-xs font-semibold text-white px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: cs.tagColor }}
                    >
                      {cs.tag}
                    </span>
                    <span className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-[#0B1233] mb-3 leading-snug group-hover:text-[#1878F0] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-[#5A6380] leading-relaxed flex-1">{cs.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#E5E9F2] flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-600">{cs.result}</span>
                    <ChevronRight size={16} style={{ color: cs.tagColor }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ TESTIMONIALS ━━━━ */}
      <section className="section-py bg-[#FFF8F6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Client Testimonials</span>
            <h2 className="section-heading mb-4">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 flex flex-col border border-[#E5E9F2] hover:shadow-lg transition-all overflow-hidden relative"
                style={{ borderTop: `3px solid ${t.accentColor}` }}
              >
                {/* Decorative quote mark */}
                <div
                  className="text-7xl font-black leading-none mb-1 font-display select-none opacity-10"
                  style={{ color: t.accentColor }}
                >
                  &ldquo;
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-[#5A6380] leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#E5E9F2]">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.accentColor} 0%, ${t.accentColor}CC 100%)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0B1233]">{t.name}</div>
                    <div className="text-xs text-[#5A6380] mt-0.5">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ NEWSLETTER / CTA ━━━━ */}
      <section className="section-py bg-[#EBF4FF]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl min-h-[420px]">
            <div
              className="min-h-[280px] lg:min-h-0 bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-[#1878F0]/15" />
            </div>
            <div
              className="p-10 lg:p-14 flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg, #1878F0 0%, #3A56D4 50%, #5B3FC8 100%)" }}
            >
              <span className="text-white/55 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
                Get Started Today
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Subscribe To Our Newsletter
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Stay ahead with IT insights, security alerts and industry updates from
                the ITSolvez team — delivered to your inbox monthly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#F04830] hover:bg-[#D63820] text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#F04830]/30 hover:-translate-y-0.5"
                >
                  Book Free Assessment <ArrowRight size={16} />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-xl transition-all"
                >
                  Read Our Blog
                </Link>
              </div>
              <p className="text-white/30 text-xs mt-6">
                No spam. Unsubscribe at any time. DPDPA 2023 compliant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
