"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, IndianRupee, Clock, ChevronDown } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { nameError, emailError, phoneError, requiredError, sanitizePhoneInput } from "@/lib/validation";

const PRICE_TIERS = [
  {
    label: "Business Website",
    range: "₹35,000 – ₹1,50,000",
    description: "5–10 pages, responsive, CMS, contact form, basic SEO setup.",
    includes: ["Custom design (not template)", "Mobile-first responsive", "CMS for easy editing", "Google Analytics + GTM", "Basic on-page SEO", "3 months post-launch support"],
  },
  {
    label: "E-commerce Website",
    range: "₹80,000 – ₹3,50,000",
    description: "Product catalogue, cart, payments (Razorpay/Stripe), inventory, order management.",
    includes: ["Custom storefront design", "Razorpay / Stripe / UPI integration", "Product and inventory management", "Order tracking + email notifications", "GST-compliant invoicing", "Admin dashboard"],
  },
  {
    label: "Mobile App (iOS + Android)",
    range: "₹1,50,000 – ₹12,00,000",
    description: "Cross-platform React Native app with backend API.",
    includes: ["iOS + Android from one codebase", "Backend API (Django / Node.js)", "Push notifications", "Payment gateway integration", "Admin panel", "Play Store + App Store publishing"],
  },
  {
    label: "Web Application / Portal",
    range: "₹3,00,000 – ₹25,00,000",
    description: "Multi-user portal, dashboards, workflows, complex business logic.",
    includes: ["Role-based access control", "Real-time dashboards", "REST API / webhooks", "File upload and document management", "Third-party integrations", "Scalable cloud deployment"],
  },
  {
    label: "ERP / CRM / HRMS",
    range: "₹3,00,000 – ₹20,00,000",
    description: "Custom enterprise software with modules, reporting and automation.",
    includes: ["Modules scoped to your business", "Custom reporting and analytics", "Workflow automation", "Role-based permissions", "Data migration from existing system", "Staff training and onboarding"],
  },
  {
    label: "IT Managed Services",
    range: "₹15,000 – ₹75,000 / month",
    description: "Server management, security monitoring, backups, helpdesk.",
    includes: ["24/7 server and uptime monitoring", "Security patching and updates", "Daily/weekly backups", "Helpdesk (email + WhatsApp)", "Monthly performance report", "Dedicated account manager"],
  },
];

const SERVICES = PRICE_TIERS.map((t) => t.label);
const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "₹5,00,000 – ₹15,00,000", "₹15,00,000+", "Not sure yet"];
const TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "6+ months", "Just exploring"];

export default function GetQuotePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "", timeline: "", requirements: "" });
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
    service: requiredError(form.service, "Service"),
    requirements: requiredError(form.requirements, "Requirements"),
  };
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.service && !errors.requirements;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, service: true, requirements: true });
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type: "quote", name: form.name, email: form.email, phone: form.phone,
          company: form.company, service_interest: "other",
          message: `Service: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nRequirements:\n${form.requirements}`,
          source_page: "/get-quote",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <PageHero
        tag="Get a Quote"
        title="Transparent pricing."
        titleAccent="No surprises."
        subtitle="We publish our price ranges openly, because our clients deserve to know what they're paying for before they talk to us. Get a detailed, itemised quote for your project within 48 hours."
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start max-w-6xl mx-auto">

            {/* ── LEFT: Content ── */}
            <div className="space-y-8">

              <div>
                <h2 className="font-display text-2xl font-black text-[#0B1233] mb-2">What things typically cost</h2>
                <p className="text-sm text-[#5A6380] mb-6 leading-relaxed">
                  These are honest ranges based on what we actually charge clients. Final cost depends on features, complexity and timeline.
                  You&apos;ll get an itemised quote, not a vague number.
                </p>

                <div className="space-y-3">
                  {PRICE_TIERS.map((tier, i) => (
                    <div key={tier.label} className="bg-white rounded-2xl border border-[#E5E9F2] overflow-hidden">
                      <button onClick={() => setExpanded(expanded === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F4F7FC] transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#EAF2FF] flex items-center justify-center flex-shrink-0">
                            <IndianRupee size={14} className="text-[#1878F0]" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#0B1233] text-sm">{tier.label}</div>
                            <div className="text-xs text-[#F04830] font-bold mt-0.5">{tier.range}</div>
                          </div>
                        </div>
                        <ChevronDown size={16} className={`text-[#5A6380] flex-shrink-0 transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                      </button>
                      {expanded === i && (
                        <div className="px-5 pb-5 border-t border-[#F4F7FC]">
                          <p className="text-sm text-[#5A6380] my-3 leading-relaxed">{tier.description}</p>
                          <div className="grid sm:grid-cols-2 gap-1.5">
                            {tier.includes.map((item) => (
                              <div key={item} className="flex items-start gap-2 text-xs text-[#5A6380]">
                                <CheckCircle2 size={12} className="text-green-500 flex-shrink-0 mt-0.5" /> {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What's in every quote */}
              <div className="bg-white rounded-2xl border border-[#E5E9F2] p-6">
                <h3 className="font-bold text-[#0B1233] mb-4">Every ITSolvez quote includes</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Itemised feature-by-feature breakdown",
                    "Milestone-based payment schedule",
                    "Realistic development timeline",
                    "Tech stack recommendation with reasoning",
                    "Post-launch support terms",
                    "What's out of scope (so there are no surprises)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-[#5A6380]">
                      <CheckCircle2 size={14} className="text-[#1878F0] flex-shrink-0 mt-0.5" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Credibility */}
              <div className="bg-gradient-to-br from-[#060B24] to-[#1261CC] rounded-2xl p-6">
                <p className="text-[#EAF0FA]/60 text-xs mb-1">Why clients trust us</p>
                <p className="text-white font-bold mb-3">We build our own products with the same standards</p>
                <p className="text-[#EAF0FA]/70 text-sm mb-4 leading-relaxed">
                  OnlyOnTrip, JourneyXpress, ITSolvez HRMS and Factor Email are products we own and run ourselves.
                  When we price something, we know exactly what it takes to deliver.
                </p>
                <div className="flex gap-2">
                  <Link href="/portfolio" className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-xl transition-colors" prefetch={false}>
                    View portfolio <ArrowRight size={12} />
                  </Link>
                  <Link href="/start-a-project" className="flex items-center gap-1.5 text-xs font-semibold bg-[#F04830] hover:bg-[#D93920] text-white px-3 py-2 rounded-xl transition-colors" prefetch={false}>
                    Start a project <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Timeline expectations */}
              <div className="flex items-start gap-3 text-sm text-[#5A6380] bg-white rounded-2xl p-5 border border-[#E5E9F2]">
                <Clock size={16} className="text-[#F04830] flex-shrink-0 mt-0.5" />
                <p><strong className="text-[#0B1233]">Quote turnaround: 48 hours.</strong> We review your requirements, sometimes ask a few clarifying questions, then send a detailed breakdown. No vague &quot;let&apos;s hop on a call to discuss budget&quot;, we respect your time.</p>
              </div>
            </div>

            {/* ── RIGHT: Sticky Form ── */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E9F2]">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-black text-[#0B1233] mb-2">Quote request received!</h3>
                    <p className="text-sm text-[#5A6380] mb-5">We&apos;ll send an itemised quote within 48 hours. We may ask a few quick questions first.</p>
                    <Link href="/portfolio" className="btn-primary inline-flex text-sm" prefetch={false}>See what we&apos;ve built <ArrowRight size={14} /></Link>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-xl font-black text-[#0B1233] mb-1">Request a Quote</h3>
                    <p className="text-xs text-[#5A6380] mb-6">Itemised estimate within 48 hours.</p>
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
                          <input value={form.company} onChange={set("company")} placeholder="Company name"
                            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1233] mb-1">What do you need? *</label>
                        <select value={form.service} onChange={set("service")} onBlur={blur("service")}
                          className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-white ${touched.service && errors.service ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`}>
                          <option value="">Select a service…</option>
                          {SERVICES.map((s) => <option key={s}>{s}</option>)}
                          <option>Not sure, need advice</option>
                        </select>
                        {touched.service && errors.service && <p className="text-xs text-[#F04830] mt-1">{errors.service}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Budget range</label>
                          <select value={form.budget} onChange={set("budget")}
                            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0] bg-white">
                            <option value="">Select…</option>
                            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Timeline</label>
                          <select value={form.timeline} onChange={set("timeline")}
                            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0] bg-white">
                            <option value="">Select…</option>
                            {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1233] mb-1">Describe your requirements *</label>
                        <textarea value={form.requirements} onChange={set("requirements")} onBlur={blur("requirements")} rows={4}
                          placeholder="Key features you need, existing system (if any), number of users, integrations (payment, SMS, etc.)…"
                          className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none resize-none ${touched.requirements && errors.requirements ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
                        {touched.requirements && errors.requirements && <p className="text-xs text-[#F04830] mt-1">{errors.requirements}</p>}
                      </div>
                      {status === "error" && <p className="text-red-500 text-xs">Something went wrong. Email info@itsolvez.com directly.</p>}
                      <button type="submit" disabled={status === "loading"}
                        className="btn-primary w-full justify-center text-sm disabled:opacity-60">
                        {status === "loading" ? "Sending…" : "Get My Quote"} {status !== "loading" && <ArrowRight size={14} />}
                      </button>
                      <p className="text-xs text-[#5A6380] text-center">
                        Prefer to call?{" "}
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
