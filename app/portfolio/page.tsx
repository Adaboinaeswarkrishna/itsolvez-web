"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import type { PortfolioProject } from "@/lib/wagtail";

const CATEGORIES = [
  { key: "", label: "All Projects" },
  { key: "web-app", label: "Web Applications" },
  { key: "mobile-app", label: "Mobile Apps" },
  { key: "erp-crm", label: "ERP / SaaS Products" },
  { key: "website", label: "Websites" },
];

const LIVE_URLS: Record<string, string> = {
  "NammaElectric — EV Cab Booking Platform": "https://nammaelectric.com",
  "ITSolvez HRMS — HR and Payroll SaaS Product": "https://hrmsitsolvez.com",
  "Factor Email — Email Marketing Platform": "https://factoremail.com",
  "Siri Group — Real Estate and Construction Portal": "https://siridemo.in",
};

const FALLBACK: PortfolioProject[] = [
  { id: 1, title: "OnlyOnTrip — Flight and Hotel Booking Platform", category: "web-app", category_display: "Web Application", client_industry: "Travel and Tourism", tagline: "Consumer travel booking platform: flights, hotels, holiday packages", description: "ITSolvez's own travel product — full-stack booking platform for flights, hotels and curated holiday packages.", tech_stack: ["Next.js", "Node.js", "PostgreSQL", "Razorpay", "AWS"], results: [{ label: "Live users", value: "Active" }, { label: "Integrations", value: "Airlines + Hotels" }, { label: "Platform", value: "Web + Mobile" }], image_url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80", featured: true, order: 1 },
  { id: 2, title: "JourneyXpress — Corporate Travel Management", category: "web-app", category_display: "Web Application", client_industry: "Corporate Travel", tagline: "India's corporate travel management platform", description: "Corporate travel management system with smart booking, dedicated managers, GST invoicing and policy enforcement.", tech_stack: ["React", "Django", "PostgreSQL", "AWS"], results: [{ label: "Type", value: "SaaS Platform" }, { label: "Audience", value: "Corporate India" }, { label: "Features", value: "Booking + Expense" }], image_url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", featured: true, order: 2 },
  { id: 3, title: "NammaElectric — EV Cab Booking Platform", category: "mobile-app", category_display: "Mobile App", client_industry: "Electric Mobility", tagline: "Premium electric cab booking for Bengaluru", description: "EV cab booking platform with real-time tracking, fleet management, driver app and customer booking portal.", tech_stack: ["React Native", "Node.js", "Google Maps", "Razorpay"], results: [{ label: "City", value: "Bengaluru" }, { label: "Fleet", value: "Electric only" }, { label: "Platform", value: "Web + Driver App" }], image_url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80", featured: true, order: 3 },
  { id: 4, title: "Siri Group — Real Estate and Construction Portal", category: "erp-crm", category_display: "ERP / SaaS", client_industry: "Real Estate", tagline: "Multi-project management portal for Bengaluru real estate group", description: "Internal management portal covering lead CRM, site progress, payment collection and customer self-service.", tech_stack: ["Django", "React", "PostgreSQL", "Razorpay"], results: [{ label: "Portals", value: "2 built" }, { label: "Modules", value: "CRM + Finance + Site" }, { label: "Client", value: "Siri Group" }], image_url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80", featured: true, order: 4 },
  { id: 5, title: "ITSolvez HRMS — HR and Payroll SaaS", category: "erp-crm", category_display: "ERP / SaaS", client_industry: "HR Technology", tagline: "Own-built HRMS: attendance, payroll, leave, appraisals", description: "Cloud HRMS product for Indian businesses — employee onboarding, payroll with PF/ESI/TDS, leave, appraisals.", tech_stack: ["Django", "React", "PostgreSQL", "AWS"], results: [{ label: "Type", value: "Own SaaS" }, { label: "Compliance", value: "PF, ESI, TDS" }, { label: "Modules", value: "HR + Payroll + Leave" }], image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", featured: true, order: 5 },
  { id: 6, title: "Factor Email — Email Marketing Platform", category: "web-app", category_display: "Web Application", client_industry: "Marketing Technology", tagline: "SaaS email marketing platform built by ITSolvez", description: "Email marketing SaaS with drag-and-drop builder, automation, list management, analytics and SMTP relay.", tech_stack: ["React", "Node.js", "AWS SES", "Redis"], results: [{ label: "Type", value: "Own SaaS" }, { label: "Category", value: "Email Marketing" }, { label: "Infra", value: "AWS + SMTP Relay" }], image_url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80", featured: false, order: 6 },
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>(FALLBACK);
  const [active, setActive] = useState("");

  useEffect(() => {
    fetch(`/api/portfolio/${active ? `?category=${active}` : ""}`)
      .then((r) => r.json())
      .then((d) => { if (d.results?.length) setProjects(d.results); })
      .catch(() => {});
  }, [active]);

  const filtered = active ? projects.filter((p) => p.category === active) : projects;

  return (
    <>
      <PageHero
        tag="Our Portfolio"
        title="Products and projects"
        titleAccent="built to last."
        subtitle="From our own SaaS products to client websites, mobile apps and enterprise systems — every project is delivered with full code ownership, transparent process and measurable outcomes."
        bgImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button key={cat.key} onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${active === cat.key ? "bg-[#1878F0] text-white" : "bg-white text-[#5A6380] border border-[#E5E9F2] hover:border-[#1878F0] hover:text-[#1878F0]"}`}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const liveUrl = LIVE_URLS[project.title];
              return (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-[#E5E9F2] flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    {project.image_url ? (
                      <Image src={project.image_url} alt={project.title} fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1878F0] to-[#0B3894]" />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold bg-white/90 text-[#1878F0] px-2.5 py-1 rounded-full">
                        {project.category_display}
                      </span>
                    </div>
                    {liveUrl && (
                      <div className="absolute top-3 right-3">
                        <span className="text-xs font-semibold bg-green-500 text-white px-2.5 py-1 rounded-full">● Live</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs text-[#F04830] font-semibold mb-1">{project.client_industry}</p>
                    <h3 className="font-display font-bold text-[#0B1233] text-lg mb-2 leading-snug">{project.title}</h3>
                    <p className="text-sm text-[#5A6380] leading-relaxed mb-4 flex-1">{project.tagline || project.description.slice(0, 120)}</p>

                    {project.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mb-4 bg-[#F4F7FC] rounded-xl p-3">
                        {project.results.map((r) => (
                          <div key={r.label} className="text-center">
                            <div className="font-bold text-[#1878F0] text-xs leading-tight">{r.value}</div>
                            <div className="text-xs text-[#5A6380] leading-tight mt-0.5">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.tech_stack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech_stack.slice(0, 4).map((t) => (
                          <span key={t} className="text-xs bg-[#EAF2FF] text-[#1878F0] px-2 py-0.5 rounded-md font-mono">{t}</span>
                        ))}
                      </div>
                    )}

                    {liveUrl && (
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#1878F0] hover:underline mt-auto">
                        <ExternalLink size={12} /> View live site
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Own products callout */}
      <section className="section-py bg-white border-y border-[#E5E9F2]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">Own products</span>
            <h2 className="font-display text-2xl font-black text-[#0B1233] mt-2">
              We don't just build for clients — we build for ourselves too
            </h2>
            <p className="text-[#5A6380] mt-3 text-sm leading-relaxed">
              OnlyOnTrip, JourneyXpress, ITSolvez HRMS and Factor Email are products we own, operate and improve every day.
              When we say we can build something, we've already built it for ourselves first.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "OnlyOnTrip", url: null as string | null, desc: "Travel booking" },
              { name: "JourneyXpress", url: null as string | null, desc: "Corporate travel" },
              { name: "ITSolvez HRMS", url: "https://hrmsitsolvez.com", desc: "HR and Payroll SaaS" },
              { name: "Factor Email", url: "https://factoremail.com", desc: "Email marketing" },
            ].map((p) => {
              const cardClass = "flex flex-col items-center bg-[#F4F7FC] hover:bg-[#EAF2FF] border border-[#E5E9F2] hover:border-[#1878F0] rounded-2xl px-6 py-4 transition-colors text-center min-w-[140px]";
              const inner = (
                <>
                  <div className="font-bold text-[#0B1233] text-sm">{p.name}</div>
                  <div className="text-xs text-[#5A6380] mt-0.5">{p.desc}</div>
                  {p.url && <div className="mt-2 flex items-center gap-1 text-xs text-[#1878F0]"><ExternalLink size={10} /> Live</div>}
                </>
              );
              return p.url ? (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {inner}
                </a>
              ) : (
                <div key={p.name} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-[#060B24] grid-bg text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">Ready to build something like this?</h2>
          <p className="text-[#EAF0FA]/60 mb-8">Tell us what you need. We'll give you a real scope, timeline and cost estimate within 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-a-project" className="btn-primary" prefetch={false}>Start a project <ArrowRight size={16} /></Link>
            <Link href="/get-quote" className="btn-secondary" prefetch={false}>Get a quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
