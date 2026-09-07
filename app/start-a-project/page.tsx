"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Shield, Users, Code2, Smartphone, Globe, Server } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { nameError, emailError, phoneError, requiredError, sanitizePhoneInput } from "@/lib/validation";

const PROJECT_TYPES = [
  "Business Website", "E-commerce Website", "Mobile App (iOS and Android)",
  "Web Application / Portal", "ERP / CRM System", "HRMS Software",
  "SaaS Product", "IT Managed Services", "Digital Marketing / SEO",
  "Not sure — I need advice",
];
const BUDGET_RANGES = ["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "₹5,00,000 – ₹15,00,000", "₹15,00,000 – ₹50,00,000", "₹50,00,000+"];
const TIMELINES = ["As soon as possible", "Within 1 month", "1–3 months", "3–6 months", "6+ months", "Not decided yet"];

const WHAT_WE_BUILD = [
  { icon: Globe, label: "Business Websites", sub: "₹35,000 – ₹1,50,000" },
  { icon: Code2, label: "Web Applications and Portals", sub: "₹3,00,000 – ₹25,00,000" },
  { icon: Smartphone, label: "Mobile Apps (iOS + Android)", sub: "₹1,50,000 – ₹12,00,000" },
  { icon: Server, label: "ERP, CRM and HRMS", sub: "₹3,00,000 – ₹20,00,000" },
];

const PROCESS = [
  { n: "1", title: "We review your brief", body: "Within 24 hours. We may ask a few clarifying questions to understand your requirements properly." },
  { n: "2", title: "30-min discovery call", body: "We talk through your project to make sure we've understood everything correctly before scoping." },
  { n: "3", title: "Scope + cost estimate", body: "A detailed scope document with itemised costs and timeline — within 48 hours of the call." },
  { n: "4", title: "You decide", body: "No pressure. If we're the right fit, we start. If not, we'll say so. No retainer needed to get a quote." },
];

export default function StartAProjectPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", project_type: "", budget: "", timeline: "", description: "" });
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
    project_type: requiredError(form.project_type, "Project type"),
    description: requiredError(form.description, "Project description"),
  };
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.project_type && !errors.description;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, project_type: true, description: true });
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type: "quote", name: form.name, email: form.email, phone: form.phone,
          company: form.company, service_interest: "other",
          message: `Project type: ${form.project_type}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nDescription:\n${form.description}`,
          source_page: "/start-a-project",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <PageHero
        tag="Start a Project"
        title="Tell us what you"
        titleAccent="want to build."
        subtitle="We'll come back with an honest scope, realistic timeline and itemised cost estimate — within 48 hours. No retainer, no obligation."
        bgImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Start a Project" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start max-w-6xl mx-auto">

            {/* ── LEFT: Content ── */}
            <div className="space-y-10">

              {/* What we build */}
              <div>
                <h2 className="font-display text-2xl font-black text-[#0B1233] mb-2">What we build</h2>
                <p className="text-[#5A6380] text-sm mb-6 leading-relaxed">
                  ITSolvez has delivered 300+ projects across websites, mobile apps, web applications and enterprise software.
                  We also run our own products — OnlyOnTrip,{" "}
                  JourneyXpress,{" "}
                  <a href="https://hrmsitsolvez.com" target="_blank" rel="noopener noreferrer" className="text-[#1878F0] hover:underline">ITSolvez HRMS</a> and{" "}
                  <a href="https://factoremail.com" target="_blank" rel="noopener noreferrer" className="text-[#1878F0] hover:underline">Factor Email</a> — so when we say we can build something, we've already built it for ourselves.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {WHAT_WE_BUILD.map((item) => (
                    <div key={item.label} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-[#E5E9F2]">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-[#1878F0]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0B1233] text-sm">{item.label}</div>
                        <div className="text-xs text-[#5A6380] mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-display text-2xl font-black text-[#0B1233] mb-6">What happens after you submit</h2>
                <ol className="space-y-5">
                  {PROCESS.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#1878F0] text-white text-sm font-bold flex-shrink-0 flex items-center justify-center">{s.n}</span>
                      <div>
                        <div className="font-semibold text-[#0B1233] text-sm">{s.title}</div>
                        <div className="text-sm text-[#5A6380] mt-0.5 leading-relaxed">{s.body}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Guarantees */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E9F2] space-y-3">
                <h3 className="font-bold text-[#0B1233] mb-4">Our commitments to every client</h3>
                {[
                  { icon: Clock, text: "Response within 48 hours, guaranteed" },
                  { icon: Shield, text: "NDA available before scope discussion" },
                  { icon: Users, text: "You own all code — no lock-in, ever" },
                  { icon: CheckCircle2, text: "Milestone-based payments — pay as we build" },
                  { icon: CheckCircle2, text: "Fixed-price contracts available for defined scopes" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-[#5A6380]">
                    <Icon size={14} className="text-[#F04830] flex-shrink-0" /> {text}
                  </div>
                ))}
              </div>

              {/* Portfolio teaser */}
              <div className="bg-gradient-to-br from-[#060B24] to-[#1261CC] rounded-2xl p-6">
                <p className="text-[#EAF0FA]/60 text-xs mb-1">See what we've built</p>
                <p className="text-white font-bold mb-4">Browse our portfolio — real projects, real results</p>
                <Link href="/portfolio" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors w-max" prefetch={false}>
                  View portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Sticky Form ── */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E9F2]">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-black text-[#0B1233] mb-2">Brief received!</h3>
                    <p className="text-sm text-[#5A6380] mb-5">We'll review it and come back within 48 hours. We may email a few questions first.</p>
                    <Link href="/portfolio" className="btn-primary inline-flex text-sm" prefetch={false}>View our work <ArrowRight size={14} /></Link>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-xl font-black text-[#0B1233] mb-1">Project Brief</h3>
                    <p className="text-xs text-[#5A6380] mb-6">More detail = more accurate estimate.</p>
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Name *</label>
                          <input value={form.name} onChange={set("name")} onBlur={blur("name")} placeholder="Rajesh Sharma"
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
                          <input value={form.company} onChange={set("company")} placeholder="Your company"
                            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0B1233] mb-1">What do you need? *</label>
                        <select value={form.project_type} onChange={set("project_type")} onBlur={blur("project_type")}
                          className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-white ${touched.project_type && errors.project_type ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`}>
                          <option value="">Select type…</option>
                          {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                        {touched.project_type && errors.project_type && <p className="text-xs text-[#F04830] mt-1">{errors.project_type}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Budget range</label>
                          <select value={form.budget} onChange={set("budget")}
                            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0] bg-white">
                            <option value="">Select…</option>
                            {BUDGET_RANGES.map((b) => <option key={b}>{b}</option>)}
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
                        <label className="block text-xs font-semibold text-[#0B1233] mb-1">Describe your project *</label>
                        <textarea value={form.description} onChange={set("description")} onBlur={blur("description")} rows={4}
                          placeholder="What does your business do, what are you trying to build, who will use it, and any specific features you have in mind?"
                          className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none resize-none ${touched.description && errors.description ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
                        {touched.description && errors.description && <p className="text-xs text-[#F04830] mt-1">{errors.description}</p>}
                      </div>
                      {status === "error" && <p className="text-red-500 text-xs">Something went wrong. Email info@itsolvez.com</p>}
                      <button type="submit" disabled={status === "loading"}
                        className="btn-primary w-full justify-center text-sm disabled:opacity-60">
                        {status === "loading" ? "Sending…" : "Submit Project Brief"} {status !== "loading" && <ArrowRight size={14} />}
                      </button>
                      <p className="text-xs text-[#5A6380] text-center">Or call us directly:{" "}
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
