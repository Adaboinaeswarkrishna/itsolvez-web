import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Monitor, Cloud, Shield, Code2, Code,
  Globe, Smartphone, TrendingUp, Users, Server, GitMerge, Lightbulb,
  Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2,
  BarChart2, ChevronRight, Star, Zap, Award, Layers, Settings, Database, Headphones,
} from "lucide-react";
import HeroSlider, { HeroSlide, HeroStat } from "@/components/home/HeroSlider";
import TechStack from "@/components/TechStack";
import { JsonLd, buildMetadata, orgSchema } from "@/components/SEO";
import { API_BASE, fixMediaUrl, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("home");
  return buildMetadata({
    title: seo?.meta_title || "Software, Web and App Development Company India - ITSolvez",
    description: seo?.meta_description || "Custom software, web and mobile app development, managed IT and staff augmentation for growing businesses. 13+ years · 500+ projects delivered.",
    keywords: seo?.meta_keywords || ["software development company India", "web development company India", "mobile app development company India", "custom software development", "IT staff augmentation India", "managed IT services India", "website design company Mumbai", "ISO certified software company India"],
    slug: "",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const FALLBACK_SLIDES: HeroSlide[] = [
  { image_url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80", tag: "Software · Web · Mobile Apps", headline: "IT that keeps your", accent: "business moving.", subtitle: "Custom software, web and mobile app development, managed IT and digital services for businesses across India and 5+ countries.", cta_text: "Book a Free Consultation", cta_url: "/contact", phone_label: "NEED HELP", phone_number: "+91 9967470207", badges: ["ISO 9001:2015 Certified", "ISO 27001:2022 Certified", "ISO 20000-1:2018 Certified", "Microsoft Partner"] },
  { image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80", tag: "Cloud Computing · AWS · Azure · GCP", headline: "Cloud solutions that", accent: "scale with you.", subtitle: "AWS, Azure and Google Cloud migrations, architecture and ongoing management for enterprises ready to modernise.", cta_text: "Book a Free Consultation", cta_url: "/contact", phone_label: "NEED HELP", phone_number: "+91 9967470207", badges: ["ISO 9001:2015 Certified", "ISO 27001:2022 Certified", "ISO 20000-1:2018 Certified", "Microsoft Partner"] },
  { image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80", tag: "Web and App Development · UI/UX", headline: "Websites and apps that", accent: "win customers.", subtitle: "High-performance websites, e-commerce platforms and iOS/Android apps — designed, built and maintained by one accountable team.", cta_text: "Book a Free Consultation", cta_url: "/contact", phone_label: "NEED HELP", phone_number: "+91 9967470207", badges: ["ISO 9001:2015 Certified", "ISO 27001:2022 Certified", "ISO 20000-1:2018 Certified", "Microsoft Partner"] },
];
const FALLBACK_HERO_STATS: HeroStat[] = [
  { icon: "Users",  label: "Happy Clients",   value: "120+",  color: "emerald" },
  { icon: "Shield", label: "Uptime SLA",      value: "99.9%", color: "blue"    },
  { icon: "Award",  label: "Years Experience", value: "13+",    color: "red"     },
];

interface ServiceCard { icon: string; title: string; description: string; link_url: string; link_label: string; }
interface ServicesSection {
  tag: string; heading: string; heading_accent: string; subtitle: string;
  cards: ServiceCard[]; cta_text: string; cta_url: string;
}
interface AboutSection {
  tag: string; heading: string; heading_accent: string; description: string;
  features: string[]; cta_text: string; cta_url: string;
  image_url: string; years_value: string; years_label: string; years_sub: string;
}
interface ProcessStep { title: string; description: string; }
interface ProcessSection { tag: string; heading: string; subtitle: string; steps: ProcessStep[]; }

interface StatItem { icon: string; value: string; label: string; }
interface IndustryCard { icon: string; title: string; description: string; url: string; }
interface IndustriesSection { tag: string; heading: string; subtitle: string; cards: IndustryCard[]; cta_text: string; cta_url: string; }
interface WhyMetric { label: string; value: string; sub: string; color: string; }
interface WhyBar    { label: string; percentage: number; color: string; }
interface WhySection { tag: string; heading: string; heading_accent: string; description: string; points: string[]; cta_text: string; cta_url: string; metrics: WhyMetric[]; progress_bars: WhyBar[]; }
interface CaseStudyItem { tag: string; title: string; description: string; result: string; industry: string; tag_color: string; image_url: string; }
interface CaseStudiesSection { tag: string; heading: string; cta_text: string; cta_url: string; items: CaseStudyItem[]; }
interface TestimonialItem { quote: string; name: string; company: string; rating: number; initials: string; accent_color: string; }
interface TestimonialsSection { tag: string; heading: string; items: TestimonialItem[]; }
interface CtaSection { tag: string; heading: string; description: string; primary_text: string; primary_url: string; secondary_text: string; secondary_url: string; footnote: string; image_url: string; }

const FALLBACK_ABOUT: AboutSection = {
  tag: "About Us",
  heading: "We Are a",
  heading_accent: "Software, Web and App Development Company India",
  description: "ITSolvez is a Software, Web and App Development Company India trusts for practical, reliable technology work. Founded in Mumbai, ITSolvez has grown from a managed IT specialist into a full-spectrum technology partner serving businesses across India and globally. We combine deep technical expertise with business-first thinking to deliver IT that moves your organisation forward.",
  features: ["ISO 9001 / 27001 / 20000-1 Certified", "Best IT Solutions and Service", "Always Latest Technology", "24/7 Customer Support", "Transparent Reporting", "SLA-Backed Response Times"],
  cta_text: "Learn More About Us",
  cta_url: "/about",
  image_url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  years_value: "13+",
  years_label: "Years",
  years_sub: "of experience in this industry",
};

const COLOR_HEX: Record<string, string> = {
  blue:   "#1878F0",
  red:    "#F04830",
  purple: "#5B3FC8",
  green:  "#10b981",
};

const FALLBACK_STATSBAR: StatItem[] = [
  { icon: "Award",       value: "13+",  label: "Years in Business"   },
  { icon: "Users",       value: "120+", label: "Clients Served"      },
  { icon: "CheckCircle", value: "300+", label: "Projects Delivered"  },
  { icon: "Globe",       value: "5+",   label: "Countries Served"    },
];

const FALLBACK_INDUSTRIES: IndustriesSection = {
  tag: "Industries", heading: "Built for your sector",
  subtitle: "Every industry has different compliance obligations, infrastructure demands and risk profiles. We know yours.",
  cta_text: "All industries", cta_url: "/industries",
  cards: [
    { icon: "Landmark",      title: "Banking and Finance",     description: "BFSI-grade security and compliance.",      url: "/industries/banking-finance"      },
    { icon: "BarChart2",     title: "Capital Markets",       description: "Low-latency infrastructure and data.",     url: "/industries/capital-markets"      },
    { icon: "Factory",       title: "Manufacturing",         description: "IIoT, ERP integration and uptime.",       url: "/industries/manufacturing"        },
    { icon: "HeartPulse",    title: "Healthcare",            description: "DPDPA and HIPAA-aligned IT.",             url: "/industries/healthcare"           },
    { icon: "GraduationCap", title: "Higher Education",      description: "Scalable cloud and cybersecurity.",       url: "/industries/higher-education"     },
    { icon: "Truck",         title: "Logistics",             description: "Real-time tracking and WMS integration.", url: "/industries/logistics"            },
    { icon: "Building2",     title: "Enterprise Technology", description: "Digital transformation at scale.",        url: "/industries/enterprise-technology"},
  ],
};

const FALLBACK_WHY: WhySection = {
  tag: "Why ITSolvez", heading: "The difference between a vendor and a", heading_accent: "partner",
  description: "Most IT providers react. We prevent. Most measure themselves by tickets closed, we measure ourselves by your uptime, your delivery speed and your growth.",
  points: [
    "ISO 9001, ISO 27001 and ISO 20000-1 certified — quality, security and service management independently audited",
    "Named engineers who know your environment — not a faceless queue",
    "SLA-backed response times on every engagement",
    "Vendor-honest advice — Microsoft, AWS and Google Cloud certified",
    "AEO and SEO-optimised digital services built for 2026 AI-search",
    "DPDPA 2023 and sector compliance built into every solution",
    "Transparent monthly reporting tied to business outcomes, not ticket counts",
  ],
  cta_text: "About ITSolvez", cta_url: "/about",
  metrics: [
    { label: "Avg. Response Time", value: "< 15 min", sub: "critical incidents",     color: "red"   },
    { label: "Uptime SLA",         value: "99.9%",    sub: "managed infrastructure", color: "green" },
    { label: "Client NPS",         value: "72",       sub: "last quarter",           color: "blue"  },
    { label: "Security Incidents", value: "0",        sub: "breaches in 2025",       color: "green" },
  ],
  progress_bars: [
    { label: "Network health",   percentage: 98,  color: "green" },
    { label: "Patch compliance", percentage: 100, color: "blue"  },
    { label: "Backup integrity", percentage: 100, color: "red"   },
  ],
};

const FALLBACK_CASE_STUDIES: CaseStudiesSection = {
  tag: "Case Studies", heading: "Real outcomes, real clients", cta_text: "View all", cta_url: "/case-studies",
  items: [
    { tag: "Managed IT",     title: "Reducing IT downtime by 87% for a Pune manufacturer",  description: "After onboarding managed IT, a 200-person manufacturing firm saw incidents drop from 3+ per week to near zero within 90 days.", result: "87% reduction in downtime", industry: "Manufacturing",    tag_color: "blue",   image_url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
    { tag: "Cloud Migration",title: "Zero-downtime AWS migration for an NBFC",               description: "We migrated a 12-year-old on-premise core infrastructure to AWS in staged phases, with no customer-facing downtime during business hours.", result: "₹18L annual cost reduction", industry: "Banking and Finance", tag_color: "red",    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
    { tag: "Cybersecurity",  title: "MDR deployment stops ransomware attack in 9 minutes",  description: "Our 24/7 MDR service detected and contained a ransomware attempt at a healthcare client before a single file was encrypted.", result: "Attack contained in 9 minutes", industry: "Healthcare",       tag_color: "purple", image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" },
  ],
};

const FALLBACK_TESTIMONIALS: TestimonialsSection = {
  tag: "Client Testimonials", heading: "What our clients say",
  items: [
    { quote: "ITSolvez transformed our IT infrastructure from a cost centre into a competitive advantage. Downtime is down, our team is more productive, and the monthly reporting gives our board real visibility.", name: "Managing Director", company: "Mid-size Manufacturing Firm, Pune",    rating: 5, initials: "MD",  accent_color: "blue"   },
    { quote: "We needed a partner who understood both our technical requirements and the regulatory environment for financial services. ITSolvez delivered on both, on time and within budget.",                   name: "CTO",               company: "NBFC, Mumbai",                        rating: 5, initials: "CTO", accent_color: "red"    },
    { quote: "The web and app development team at ITSolvez built us a platform that we have scaled from 500 to 50,000 users without a single major incident. Engineering quality is exceptional.",               name: "Founder",           company: "Healthtech Startup, Bangalore",        rating: 5, initials: "FD",  accent_color: "purple" },
  ],
};

const FALLBACK_CTA: CtaSection = {
  tag: "Get Started Today", heading: "Subscribe To Our Newsletter",
  description: "Stay ahead with IT insights, security alerts and industry updates from the ITSolvez team — delivered to your inbox monthly.",
  primary_text: "Book a Free Consultation", primary_url: "/contact",
  secondary_text: "Read Our Blog", secondary_url: "/blog",
  footnote: "No spam. Unsubscribe at any time. DPDPA 2023 compliant.",
  image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
};

const FALLBACK_PROCESS: ProcessSection = {
  tag: "Our Process",
  heading: "How we work",
  subtitle: "A repeatable, transparent delivery model — whether you're onboarding managed IT or launching a custom software project.",
  steps: [
    { title: "Discover", description: "Structured assessment of your IT environment, goals and constraints — no assumptions, no generic playbooks." },
    { title: "Design",   description: "Engineers design a solution specific to your business — architecture, integrations, security posture, and a costed roadmap." },
    { title: "Build",    description: "We execute in clear, measurable phases. Onboarding is complete and documented before we take over operations." },
    { title: "Run",      description: "We manage, monitor, optimise and report — continuously. Quarterly reviews keep your technology aligned to your goals." },
  ],
};

const FALLBACK_SERVICES: ServicesSection = {
  tag: "What We Do",
  heading: "Every IT challenge,",
  heading_accent: "one accountable partner",
  subtitle: "From the infrastructure your business runs on to the software your customers use — we design, build and manage it all.",
  cta_text: "View all 12 services",
  cta_url: "/services",
  cards: [
    { icon: "Monitor",       title: "Managed IT Services",        description: "Proactive 24/7 monitoring, support, and management of your entire IT environment so your team stays focused.",           link_url: "/services/managed-it",               link_label: "Explore Service" },
    { icon: "Cloud",         title: "Cloud Computing",            description: "Design, migrate, and optimise your cloud infrastructure across AWS, Azure, and Google Cloud for maximum agility.",       link_url: "/services/cloud-computing",          link_label: "Explore Service" },
    { icon: "Shield",        title: "Cybersecurity",              description: "End-to-end protection — threat detection, vulnerability management, compliance auditing, and incident response.",        link_url: "/services/cyber-security",           link_label: "Explore Service" },
    { icon: "Code",          title: "Custom Software Development",description: "Bespoke web and enterprise applications built with modern stacks, delivered on time and on budget.",                    link_url: "/services/custom-software",          link_label: "Explore Service" },
    { icon: "Globe",         title: "Web Development",            description: "Performant, SEO-ready websites and portals — from landing pages to complex multi-tenant web platforms.",                link_url: "/services/web-development",          link_label: "Explore Service" },
    { icon: "Smartphone",    title: "App Development",            description: "Native and cross-platform mobile apps for iOS and Android that delight users and drive business outcomes.",              link_url: "/services/app-development",          link_label: "Explore Service" },
    { icon: "TrendingUp",    title: "Digital Marketing",          description: "Data-driven SEO, PPC, social media, and content strategies that turn visitors into qualified leads.",                   link_url: "/services/digital-marketing",        link_label: "Explore Service" },
    { icon: "Users",         title: "IT Consultancy",             description: "Strategic technology advisory — roadmaps, architecture reviews, vendor selection, and digital transformation.",         link_url: "/services/it-consultancy",           link_label: "Explore Service" },
    { icon: "Layers",        title: "System Integration",         description: "Connect disparate platforms, ERPs, CRMs, and APIs into a seamless, automated data ecosystem.",                         link_url: "/services/system-integration",       link_label: "Explore Service" },
    { icon: "Settings",      title: "IT Infrastructure Management",description:"Server, network, and data-centre management to keep your core infrastructure reliable and scalable.",                  link_url: "/services/it-infrastructure-management", link_label: "Explore Service" },
    { icon: "Database",      title: "Data and Analytics",           description: "Turn raw data into actionable intelligence with warehousing, BI dashboards, and predictive analytics.",                link_url: "/services/data-analytics",           link_label: "Explore Service" },
    { icon: "HeadphonesIcon",title: "IT Support and Helpdesk",      description: "Responsive Level 1–3 helpdesk for your employees — remote and on-site — with guaranteed SLA response times.",         link_url: "/services/it-support",               link_label: "Explore Service" },
  ],
};

const EMPTY = { slides: FALLBACK_SLIDES, heroStats: FALLBACK_HERO_STATS, services: FALLBACK_SERVICES, about: FALLBACK_ABOUT, process: FALLBACK_PROCESS, statsBar: FALLBACK_STATSBAR, industries: FALLBACK_INDUSTRIES, why: FALLBACK_WHY, caseStudies: FALLBACK_CASE_STUDIES, testimonials: FALLBACK_TESTIMONIALS, cta: FALLBACK_CTA };

async function getHomeData() {
  try {
    const res = await fetch(
      `${API_BASE}/api/home/`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return EMPTY;
    const d = await res.json();
    return {
      slides:     d.slides?.length      ? d.slides      : FALLBACK_SLIDES,
      heroStats:  d.stats?.length       ? d.stats       : FALLBACK_HERO_STATS,
      statsBar:   d.stats_items?.length ? d.stats_items : FALLBACK_STATSBAR,
      services: {
        tag: d.services_tag || FALLBACK_SERVICES.tag, heading: d.services_heading || FALLBACK_SERVICES.heading,
        heading_accent: d.services_heading_accent || FALLBACK_SERVICES.heading_accent,
        subtitle: d.services_subtitle || FALLBACK_SERVICES.subtitle,
        cards: d.services_cards?.length ? d.services_cards : FALLBACK_SERVICES.cards,
        cta_text: d.services_cta_text || FALLBACK_SERVICES.cta_text, cta_url: d.services_cta_url || FALLBACK_SERVICES.cta_url,
      } as ServicesSection,
      about: {
        tag: d.about_tag || FALLBACK_ABOUT.tag, heading: d.about_heading || FALLBACK_ABOUT.heading,
        heading_accent: d.about_heading_accent || FALLBACK_ABOUT.heading_accent,
        description: d.about_description || FALLBACK_ABOUT.description,
        features: d.about_features?.length ? d.about_features : FALLBACK_ABOUT.features,
        cta_text: d.about_cta_text || FALLBACK_ABOUT.cta_text, cta_url: d.about_cta_url || FALLBACK_ABOUT.cta_url,
        image_url: d.about_image_url || FALLBACK_ABOUT.image_url,
        years_value: d.about_years_value || FALLBACK_ABOUT.years_value,
        years_label: d.about_years_label || FALLBACK_ABOUT.years_label,
        years_sub: d.about_years_sub || FALLBACK_ABOUT.years_sub,
      } as AboutSection,
      process: {
        tag: d.process_tag || FALLBACK_PROCESS.tag, heading: d.process_heading || FALLBACK_PROCESS.heading,
        subtitle: d.process_subtitle || FALLBACK_PROCESS.subtitle,
        steps: d.process_steps?.length ? d.process_steps : FALLBACK_PROCESS.steps,
      } as ProcessSection,
      industries: {
        tag: d.industries_tag || FALLBACK_INDUSTRIES.tag, heading: d.industries_heading || FALLBACK_INDUSTRIES.heading,
        subtitle: d.industries_subtitle || FALLBACK_INDUSTRIES.subtitle,
        cards: d.industries_cards?.length ? d.industries_cards : FALLBACK_INDUSTRIES.cards,
        cta_text: d.industries_cta_text || FALLBACK_INDUSTRIES.cta_text, cta_url: d.industries_cta_url || FALLBACK_INDUSTRIES.cta_url,
      } as IndustriesSection,
      why: {
        tag: d.why_tag || FALLBACK_WHY.tag, heading: d.why_heading || FALLBACK_WHY.heading,
        heading_accent: d.why_heading_accent || FALLBACK_WHY.heading_accent,
        description: d.why_description || FALLBACK_WHY.description,
        points: d.why_points?.length ? d.why_points : FALLBACK_WHY.points,
        cta_text: d.why_cta_text || FALLBACK_WHY.cta_text, cta_url: d.why_cta_url || FALLBACK_WHY.cta_url,
        metrics: d.why_metrics?.length ? d.why_metrics : FALLBACK_WHY.metrics,
        progress_bars: d.why_progress_bars?.length ? d.why_progress_bars : FALLBACK_WHY.progress_bars,
      } as WhySection,
      caseStudies: {
        tag: d.case_studies_tag || FALLBACK_CASE_STUDIES.tag, heading: d.case_studies_heading || FALLBACK_CASE_STUDIES.heading,
        cta_text: d.case_studies_cta_text || FALLBACK_CASE_STUDIES.cta_text, cta_url: d.case_studies_cta_url || FALLBACK_CASE_STUDIES.cta_url,
        items: d.case_studies_items?.length ? d.case_studies_items : FALLBACK_CASE_STUDIES.items,
      } as CaseStudiesSection,
      testimonials: {
        tag: d.testimonials_tag || FALLBACK_TESTIMONIALS.tag, heading: d.testimonials_heading || FALLBACK_TESTIMONIALS.heading,
        items: d.testimonials_items?.length ? d.testimonials_items : FALLBACK_TESTIMONIALS.items,
      } as TestimonialsSection,
      cta: {
        tag: d.cta_tag || FALLBACK_CTA.tag, heading: d.cta_heading || FALLBACK_CTA.heading,
        description: d.cta_description || FALLBACK_CTA.description,
        primary_text: d.cta_primary_text || FALLBACK_CTA.primary_text, primary_url: d.cta_primary_url || FALLBACK_CTA.primary_url,
        secondary_text: d.cta_secondary_text || FALLBACK_CTA.secondary_text, secondary_url: d.cta_secondary_url || FALLBACK_CTA.secondary_url,
        footnote: d.cta_footnote || FALLBACK_CTA.footnote, image_url: d.cta_image_url || FALLBACK_CTA.image_url,
      } as CtaSection,
    };
  } catch {
    return EMPTY;
  }
}

const iconMap: Record<string, React.ElementType> = {
  Monitor, Cloud, Shield, Code, Code2, Globe, Smartphone, TrendingUp,
  Users, Server, GitMerge, Lightbulb, Layers, Settings, Database, Zap,
  HeadphonesIcon: Headphones,
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



export default async function Home() {
  const { slides, heroStats, statsBar, services: svc, about, process: proc, industries: ind, why, caseStudies: cs, testimonials: tms, cta } = await getHomeData();
  return (
    <>
      <JsonLd data={orgSchema} />

      {/* ━━━━ HERO — Sliding hero with crossfade ━━━━ */}
      <HeroSlider slides={slides} stats={heroStats} />

      {/* ━━━━ STATS BAR — Dynamic from Wagtail CMS ━━━━ */}
      <section style={{ background: "linear-gradient(180deg, #060B24 0%, #0A1540 60%, #0D1F6E 100%)" }}>
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {statsBar.map((stat: StatItem, idx: number) => {
              const Icon = iconMap[stat.icon] ?? Award;
              const palettes = [
                { iconBg: "rgba(24,120,240,0.15)", num: "#60A5FA"  },
                { iconBg: "rgba(240,72,48,0.15)",  num: "#FB8070"  },
                { iconBg: "rgba(91,63,200,0.15)",  num: "#A78BFA"  },
                { iconBg: "rgba(5,150,105,0.15)",  num: "#34D399"  },
              ];
              const p = palettes[idx % palettes.length];
              const iconColor = [COLOR_HEX.blue, COLOR_HEX.red, "#5B3FC8", "#059669"][idx % 4];
              return (
                <div key={stat.label} className="flex items-center gap-4 px-6 py-5 border-r border-white/8 last:border-r-0">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: p.iconBg }}>
                    <Icon size={20} style={{ color: iconColor }} />
                  </div>
                  <div>
                    <div className="font-display text-3xl lg:text-4xl font-black leading-none mb-0.5" style={{ color: p.num }}>{stat.value}</div>
                    <div className="text-xs text-white/50 font-medium tracking-wide">{stat.label}</div>
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

      {/* ━━━━ SERVICES — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py" style={{ background: "#F4F8FF" }}>
        <div className="container-custom">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="section-tag mb-4">{svc.tag}</span>
            <h2 className="section-heading mb-5">
              {svc.heading}{" "}
              <span className="text-[#1878F0]">{svc.heading_accent}</span>
            </h2>
            <p className="text-[#5A6380] max-w-2xl mx-auto text-lg leading-relaxed">
              {svc.subtitle}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {svc.cards.map((card, idx) => {
              const Icon = iconMap[card.icon] ?? Zap;
              const p = cardPalette[idx % cardPalette.length];
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Link
                  key={card.link_url}
                  href={card.link_url}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col border border-[#E8EDF8] transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_50px_rgba(6,11,36,0.13)]"
                  style={{ boxShadow: "0 2px 16px rgba(6,11,36,0.05)" }}
                 prefetch={false}>
                  {/* Gradient top strip */}
                  <div
                    className="h-1 w-full flex-shrink-0 transition-all duration-300 group-hover:h-[3px]"
                    style={{ background: p.gradient }}
                  />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon + number row */}
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
                      {card.title}
                    </h3>

                    {/* Accent line */}
                    <div
                      className="h-0.5 w-9 rounded-full mb-4 transition-all duration-300 group-hover:w-14"
                      style={{ background: p.gradient }}
                    />

                    {/* Description */}
                    <p className="text-sm text-[#5A6380] leading-relaxed flex-1 mb-6">
                      {card.description}
                    </p>

                    {/* CTA footer */}
                    <div className="pt-4 border-t border-[#F1F5FB]">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                        style={{ color: p.accent }}
                      >
                        {card.link_label}
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
              href={svc.cta_url}
              className="inline-flex items-center gap-2.5 border-2 border-[#1878F0] text-[#1878F0] hover:bg-[#1878F0] hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
             prefetch={false}>
              {svc.cta_text} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━ TECH STACK ━━━━ */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-tag mb-5">Our Tech Stack</span>
            <h2 className="section-heading mb-4">The technologies behind every build</h2>
            <p className="text-[#5A6380] leading-relaxed">
              From AI and machine learning to mobile, web, cloud and databases — a modern,
              production-proven stack chosen per project, not per fashion.
            </p>
          </div>
          <TechStack compact />
          <p className="text-center mt-8">
            <Link href="/technologies" className="btn-primary inline-flex" prefetch={false}>
              Explore our full tech stack <ArrowRight size={16} />
            </Link>
          </p>
        </div>
      </section>

      {/* ━━━━ ABOUT ITSOLVEZ — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py" style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #F5F9FF 50%, #EEF0FF 100%)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4">{about.tag}</span>
              <h2 className="section-heading mb-6">
                {about.heading}{" "}
                <span className="text-[#1878F0]">{about.heading_accent}</span>
              </h2>
              <p className="text-[#5A6380] leading-relaxed mb-8">{about.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {about.features.map((feat, i) => (
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
              <Link href={about.cta_url} className="btn-primary" prefetch={false}>
                {about.cta_text} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={fixMediaUrl(about.image_url)}
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
                  {about.years_value}
                </div>
                <div className="text-sm text-white/85 mt-1 font-semibold">{about.years_label}</div>
                <div className="text-xs text-white/60 mt-0.5">{about.years_sub}</div>
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

      {/* ━━━━ HOW WE WORK — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">{proc.tag}</span>
            <h2 className="section-heading mb-4">{proc.heading}</h2>
            <p className="text-[#5A6380] max-w-xl mx-auto">{proc.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {proc.steps.map((item, idx) => {
              const sc = stepColors[idx % stepColors.length];
              const stepNum = String(idx + 1).padStart(2, "0");
              return (
                <div key={item.title} className="relative flex flex-col items-center text-center group">
                  {/* Connecting line between circles (desktop) */}
                  {idx < proc.steps.length - 1 && (
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
                    {stepNum}
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

      {/* ━━━━ INDUSTRIES — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py gradient-blue-deep grid-bg">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-white/60 border border-white/20 bg-white/8 px-3 py-1 rounded-full mb-4">{ind.tag}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">{ind.heading}</h2>
            <p className="text-white/60 max-w-xl mx-auto">{ind.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ind.cards.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Building2;
              return (
                <Link key={industry.url} href={industry.url}
                  className="group p-5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/18 hover:border-white/40 hover:shadow-lg transition-all duration-200 backdrop-blur-sm" prefetch={false}>
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3 group-hover:bg-white/30 transition-colors"><Icon size={20} /></div>
                  <div className="text-sm font-semibold text-white mb-1">{industry.title}</div>
                  <div className="text-xs text-white/55 line-clamp-2 leading-relaxed">{industry.description}</div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href={ind.cta_url} className="btn-ghost" prefetch={false}>{ind.cta_text} <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ━━━━ WHY ITSOLVEZ — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py bg-[#F0F7FF]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4">{why.tag}</span>
              <h2 className="section-heading mb-6">
                {why.heading}{" "}
                <span className="text-[#1878F0]">{why.heading_accent}</span>
              </h2>
              <p className="text-[#5A6380] leading-relaxed mb-8">{why.description}</p>
              <ul className="space-y-3">
                {why.points.map((point, i) => {
                  const color = i % 2 === 0 ? COLOR_HEX.blue : COLOR_HEX.red;
                  return (
                    <li key={point} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" style={{ backgroundColor: color + "18" }}>
                        <CheckCircle2 size={14} style={{ color }} />
                      </div>
                      <span className="text-sm text-[#0B1233] leading-relaxed">{point}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <Link href={why.cta_url} className="btn-primary" prefetch={false}>{why.cta_text} <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="rounded-2xl p-8 shadow-2xl border border-white/8" style={{ background: "linear-gradient(135deg, #0B3894 0%, #1261CC 50%, #1878F0 100%)" }}>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-white">Operations Overview</span>
                <span className="status-pill text-xs">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {why.metrics.map((m) => {
                  const mColor = COLOR_HEX[m.color] ?? COLOR_HEX.blue;
                  return (
                    <div key={m.label} className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                      <div className="text-2xl font-black font-display mb-0.5" style={{ color: mColor }}>{m.value}</div>
                      <div className="text-xs font-medium text-white/70">{m.label}</div>
                      <div className="text-xs text-white/35 mt-0.5">{m.sub}</div>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3">
                {why.progress_bars.map((bar) => {
                  const bColor = COLOR_HEX[bar.color] ?? COLOR_HEX.green;
                  return (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/55">{bar.label}</span>
                        <span className="font-mono font-semibold" style={{ color: bColor }}>{bar.percentage}%</span>
                      </div>
                      <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${bar.percentage}%`, backgroundColor: bColor }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ CASE STUDIES — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="section-tag mb-4">{cs.tag}</span>
              <h2 className="section-heading">{cs.heading}</h2>
            </div>
            <Link href={cs.cta_url} className="btn-secondary flex-shrink-0" prefetch={false}>{cs.cta_text} <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cs.items.map((item) => {
              const tagColor = COLOR_HEX[item.tag_color] ?? COLOR_HEX.blue;
              return (
                <article key={item.title}
                  className="bg-white rounded-2xl border border-[#E5E9F2] overflow-hidden group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                  style={{ borderTop: `3px solid ${tagColor}` }}>
                  {item.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <Image src={fixMediaUrl(item.image_url)} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060B24]/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: tagColor }}>{item.tag}</span>
                        <span className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">{item.industry}</span>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-[#0B1233] mb-3 leading-snug group-hover:text-[#1878F0] transition-colors">{item.title}</h3>
                    <p className="text-sm text-[#5A6380] leading-relaxed flex-1">{item.description}</p>
                    <div className="mt-4 pt-4 border-t border-[#E5E9F2] flex items-center justify-between">
                      <span className="text-sm font-bold text-emerald-600">{item.result}</span>
                      <ChevronRight size={16} style={{ color: tagColor }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━ TESTIMONIALS — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py bg-[#FFF8F6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">{tms.tag}</span>
            <h2 className="section-heading mb-4">{tms.heading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tms.items.map((t) => {
              const ac = COLOR_HEX[t.accent_color] ?? COLOR_HEX.blue;
              return (
                <div key={t.name} className="bg-white rounded-2xl p-7 flex flex-col border border-[#E5E9F2] hover:shadow-lg transition-all overflow-hidden relative" style={{ borderTop: `3px solid ${ac}` }}>
                  <div className="text-7xl font-black leading-none mb-1 font-display select-none opacity-10" style={{ color: ac }}>&ldquo;</div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <blockquote className="text-sm text-[#5A6380] leading-relaxed flex-1">{t.quote}</blockquote>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#E5E9F2]">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: `linear-gradient(135deg, ${ac} 0%, ${ac}CC 100%)` }}>{t.initials}</div>
                    <div>
                      <div className="font-semibold text-sm text-[#0B1233]">{t.name}</div>
                      <div className="text-xs text-[#5A6380] mt-0.5">{t.company}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━ BOTTOM CTA — Dynamic from Wagtail CMS ━━━━ */}
      <section className="section-py bg-[#EBF4FF]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl min-h-[420px]">
            <div className="min-h-[280px] lg:min-h-0 bg-cover bg-center relative" style={{ backgroundImage: `url('${fixMediaUrl(cta.image_url)}')` }}>
              <div className="absolute inset-0 bg-[#1878F0]/15" />
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center" style={{ background: "linear-gradient(135deg, #1878F0 0%, #3A56D4 50%, #5B3FC8 100%)" }}>
              <span className="text-white/55 text-xs font-mono font-semibold uppercase tracking-widest mb-4">{cta.tag}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">{cta.heading}</h2>
              <p className="text-white/70 mb-8 leading-relaxed">{cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={cta.primary_url} className="inline-flex items-center justify-center gap-2 bg-[#F04830] hover:bg-[#D63820] text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#F04830]/30 hover:-translate-y-0.5" prefetch={false}>
                  {cta.primary_text} <ArrowRight size={16} />
                </Link>
                <Link href={cta.secondary_url} className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-7 py-3.5 rounded-xl transition-all" prefetch={false}>
                  {cta.secondary_text}
                </Link>
              </div>
              <p className="text-white/30 text-xs mt-6">{cta.footnote}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
