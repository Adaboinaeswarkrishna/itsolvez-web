"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Zap, Smartphone, Search, TrendingUp, Shield, Eye } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { nameError, emailError, phoneError, urlError, sanitizePhoneInput } from "@/lib/validation";

const AUDIT_ITEMS = [
  {
    icon: Zap,
    title: "Page Speed and Core Web Vitals",
    body: "We test your site on Google's actual metrics, LCP, FID, CLS. A slow site loses 53% of mobile visitors before the page loads.",
    color: "#F04830",
    bg: "#FFF0EC",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    body: "60%+ of Indian web traffic is mobile. We check tap targets, viewport scaling, font sizes and scroll behaviour on real device sizes.",
    color: "#1878F0",
    bg: "#EAF2FF",
  },
  {
    icon: Search,
    title: "On-Page SEO",
    body: "Title tags, meta descriptions, heading structure, image alt text, canonical tags, sitemap, robots.txt, we check all of it.",
    color: "#0B8A3E",
    bg: "#EDFAF3",
  },
  {
    icon: TrendingUp,
    title: "Conversion Signals",
    body: "Does your site tell visitors what to do next? We review CTAs, trust signals, form placement and enquiry flow, where leads fall off.",
    color: "#7C3AED",
    bg: "#F5F0FF",
  },
  {
    icon: Shield,
    title: "Security and SSL",
    body: "HTTPS, mixed content warnings, outdated plugins, admin panel exposure, common issues that hurt both trust and Google rankings.",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: Eye,
    title: "First Impressions Review",
    body: "We'll tell you honestly what a first-time visitor sees in the first 5 seconds, and whether it builds confidence or doubt.",
    color: "#1878F0",
    bg: "#EAF2FF",
  },
];

const WHO_IS_IT_FOR = [
  "You built a website 2+ years ago and aren't sure if it's still working",
  "Your site gets traffic but few enquiries or leads",
  "You're about to spend money on ads and want the site ready first",
  "You feel your competitors' sites look more professional",
  "You've had customer complaints about loading speed or mobile display",
  "You want an honest second opinion, no sales pitch attached",
];

export default function FreeWebsiteAuditPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", website_url: "", main_concern: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, phone: sanitizePhoneInput(e.target.value) }));
  const blur = (k: keyof typeof form) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = {
    name: nameError(form.name),
    email: emailError(form.email),
    phone: phoneError(form.phone, false),
    website_url: urlError(form.website_url),
  };
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.website_url;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, website_url: true });
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type: "contact", name: form.name, email: form.email, phone: form.phone,
          company: form.company, service_interest: "other",
          message: `Website URL: ${form.website_url}\n\nMain concern: ${form.main_concern}`,
          source_page: "/free-website-audit",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <PageHero
        tag="Free Website Audit"
        title="Find out what's holding"
        titleAccent="your website back."
        subtitle="A free, honest review of your existing website, speed, mobile, SEO, conversions, security and first impressions. No sales pitch. Just a real expert opinion."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Free Website Audit" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start max-w-6xl mx-auto">

            {/* ── LEFT: Content ── */}
            <div className="space-y-10">

              {/* What we check */}
              <div>
                <h2 className="font-display text-2xl font-black text-[#0B1233] mb-2">What we review</h2>
                <p className="text-sm text-[#5A6380] mb-6 leading-relaxed">
                  Our team reviews your website across 6 dimensions that directly affect how Google ranks it and how visitors convert.
                  You get a written report, not a vague &quot;your site needs improvement&quot; summary.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {AUDIT_ITEMS.map((item) => (
                    <div key={item.title} className="bg-white rounded-2xl p-5 border border-[#E5E9F2]">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 flex-shrink-0" style={{ background: item.bg }}>
                        <item.icon size={18} style={{ color: item.color }} />
                      </div>
                      <div className="font-semibold text-[#0B1233] text-sm mb-1">{item.title}</div>
                      <p className="text-xs text-[#5A6380] leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who it's for */}
              <div>
                <h2 className="font-display text-2xl font-black text-[#0B1233] mb-4">Who should book this?</h2>
                <div className="space-y-3">
                  {WHO_IS_IT_FOR.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-[#E5E9F2]">
                      <CheckCircle2 size={14} className="text-[#F04830] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#5A6380]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div className="bg-white rounded-2xl border border-[#E5E9F2] p-6">
                <h3 className="font-bold text-[#0B1233] mb-4">What you get from us</h3>
                <div className="space-y-3">
                  {[
                    { label: "Written audit report", desc: "A PDF/doc with findings per category, prioritised by impact." },
                    { label: "Priority issues list", desc: "What to fix first for the quickest improvement in rankings and conversions." },
                    { label: "30-minute review call", desc: "Optional, we walk through the findings and answer your questions." },
                    { label: "No strings attached", desc: "We'll never pressure you to hire us. If you want to act on the findings yourself, go for it." },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F04830] flex-shrink-0 mt-2" />
                      <div>
                        <span className="text-sm font-semibold text-[#0B1233]">{item.label}, </span>
                        <span className="text-sm text-[#5A6380]">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credibility note */}
              <div className="bg-gradient-to-br from-[#060B24] to-[#1261CC] rounded-2xl p-6">
                <p className="text-[#EAF0FA]/60 text-xs mb-1">Why trust our review?</p>
                <p className="text-white font-bold mb-2">We&apos;ve built and optimised 300+ live websites</p>
                <p className="text-[#EAF0FA]/70 text-sm leading-relaxed">
                  Including our own products, <span className="text-white font-semibold">OnlyOnTrip</span>, <span className="text-white font-semibold">JourneyXpress</span> and client sites in real estate, travel, EV, and enterprise, 
                  so our review comes from people who actively manage production websites, not consultants who just read checklists.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Sticky Form ── */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E9F2]">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-black text-[#0B1233] mb-2">Audit booked!</h3>
                    <p className="text-sm text-[#5A6380] mb-5">We&apos;ll review your website and send the report within 3–5 business days. You&apos;ll hear from us first if we have questions.</p>
                    <a href="tel:+919967470207" className="btn-primary inline-flex text-sm">Call us <ArrowRight size={14} /></a>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">Free</span>
                      <h3 className="font-display text-xl font-black text-[#0B1233]">Book Your Audit</h3>
                    </div>
                    <p className="text-xs text-[#5A6380] mb-6">Report delivered within 3–5 business days.</p>
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Name *</label>
                          <input value={form.name} onChange={set("name")} onBlur={blur("name")} placeholder="Your name"
                            className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.name && errors.name ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
                          {touched.name && errors.name && <p className="text-xs text-[#F04830] mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Email *</label>
                          <input type="email" value={form.email} onChange={set("email")} onBlur={blur("email")} placeholder="you@company.com"
                            className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.email && errors.email ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
                          {touched.email && errors.email && <p className="text-xs text-[#F04830] mt-1">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Phone / WhatsApp</label>
                          <input value={form.phone} onChange={setPhone} onBlur={blur("phone")} placeholder="+91 98765 43210" type="tel" inputMode="tel"
                            className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.phone && errors.phone ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
                          {touched.phone && errors.phone && <p className="text-xs text-[#F04830] mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Company</label>
                          <input value={form.company} onChange={set("company")} placeholder="Your business"
                            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1233] mb-1">Website URL *</label>
                        <input type="url" value={form.website_url} onChange={set("website_url")} onBlur={blur("website_url")} placeholder="https://yourwebsite.com"
                          className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.website_url && errors.website_url ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
                        {touched.website_url && errors.website_url && <p className="text-xs text-[#F04830] mt-1">{errors.website_url}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1233] mb-1">What concerns you most?</label>
                        <select value={form.main_concern} onChange={set("main_concern")}
                          className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0] bg-white">
                          <option value="">Select your main concern…</option>
                          <option>My site is slow</option>
                          <option>Not ranking on Google</option>
                          <option>Poor mobile experience</option>
                          <option>Not getting enough leads/enquiries</option>
                          <option>Site looks outdated</option>
                          <option>Security concerns</option>
                          <option>Not sure, want a full review</option>
                        </select>
                      </div>
                      {status === "error" && <p className="text-red-500 text-xs">Something went wrong. Email info@itsolvez.com directly.</p>}
                      <button type="submit" disabled={status === "loading"}
                        className="btn-primary w-full justify-center text-sm disabled:opacity-60">
                        {status === "loading" ? "Booking…" : "Book Free Audit"} {status !== "loading" && <ArrowRight size={14} />}
                      </button>
                      <p className="text-xs text-[#5A6380] text-center">
                        Or call us:{" "}
                        <a href="tel:+919967470207" className="text-[#1878F0] font-semibold hover:underline">+91 99674 70207</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
