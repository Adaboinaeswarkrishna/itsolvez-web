"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Bot, Zap, BarChart3, FileSearch, Eye, Workflow,
  CheckCircle2, ChevronDown, MessageSquare, Database, Cpu,
  Building2, ShoppingCart, HeartPulse, Truck, GraduationCap, Landmark,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { nameError, emailError, phoneError, requiredError, sanitizePhoneInput } from "@/lib/validation";

/* ─── What we build ─── */
const CAPABILITIES = [
  {
    icon: Bot,
    title: "AI Chatbots and Virtual Assistants",
    body: "Custom-trained assistants for sales, support and internal teams. Integrated into your website, WhatsApp, Slack or mobile app. Not generic — trained on your products, FAQs and processes.",
    tags: ["OpenAI GPT-4", "Claude API", "WhatsApp Business", "Custom RAG"],
    color: "#1878F0",
    bg: "#EAF2FF",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    body: "Automate repetitive back-office work — document processing, data extraction, invoice matching, email triage, approval chains. Reduces manual effort by 60–80% on routine tasks.",
    tags: ["n8n", "LangChain", "Python", "Webhooks"],
    color: "#F04830",
    bg: "#FFF0EC",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics and ML",
    body: "Demand forecasting, churn prediction, fraud detection, dynamic pricing — models trained on your own data, deployed as APIs your existing systems can call.",
    tags: ["scikit-learn", "TensorFlow", "AWS SageMaker", "FastAPI"],
    color: "#0B8A3E",
    bg: "#EDFAF3",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence and NLP",
    body: "Extract structured data from invoices, contracts, medical reports, KYC documents. Summarise, classify and route documents automatically — no manual data entry.",
    tags: ["Claude API", "OCR", "LangChain", "PostgreSQL"],
    color: "#7C3AED",
    bg: "#F5F0FF",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    body: "Quality inspection, object detection, face recognition, number plate reading — real-time vision processing for manufacturing, security and logistics.",
    tags: ["OpenCV", "YOLO", "TensorFlow", "RTSP Streams"],
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: MessageSquare,
    title: "Custom LLM Integration",
    body: "Embed GPT-4, Claude, Gemini or open-source models (Llama, Mistral) into your existing products — ERP, CRM, HRMS, mobile apps. Add AI features without rebuilding from scratch.",
    tags: ["OpenAI", "Anthropic Claude", "Google Gemini", "Ollama / Llama"],
    color: "#1878F0",
    bg: "#EAF2FF",
  },
];

/* ─── Industry use cases ─── */
const INDUSTRIES = [
  {
    icon: Landmark,
    label: "Banking and Finance",
    cases: ["AI underwriting and loan eligibility scoring", "Fraud detection on transactions", "Customer support chatbot for account queries", "Automated KYC document verification"],
  },
  {
    icon: ShoppingCart,
    label: "Retail and E-Commerce",
    cases: ["AI-powered product recommendations", "Demand forecasting and inventory optimisation", "Chatbot for order tracking and returns", "Dynamic pricing based on demand signals"],
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    cases: ["Appointment scheduling via WhatsApp bot", "Medical report summarisation for doctors", "Patient triage and symptom checker", "Automated insurance pre-auth processing"],
  },
  {
    icon: Truck,
    label: "Logistics",
    cases: ["Route optimisation using ML", "Predictive maintenance for fleet", "Automated POD (proof of delivery) extraction", "AI-powered ETA prediction"],
  },
  {
    icon: GraduationCap,
    label: "Education",
    cases: ["AI tutoring and doubt-clearing assistant", "Automated assignment grading", "Student performance prediction and early alerts", "Content generation for course materials"],
  },
  {
    icon: Building2,
    label: "Real Estate",
    cases: ["Lead qualification chatbot (WhatsApp/website)", "AI-powered property matching", "Automated site visit scheduling", "Document extraction from agreements"],
  },
];

/* ─── Process ─── */
const PROCESS = [
  { n: "01", title: "Discovery and Data Audit", body: "We review your business problem, existing data sources and where AI can realistically reduce cost or increase revenue." },
  { n: "02", title: "Proof of Concept", body: "A working prototype — not a slide deck. Built in 2–4 weeks so you can see and test the model before committing to full development." },
  { n: "03", title: "Build and Integrate", body: "Production deployment integrated into your existing systems. API-first so your team can call it from any app, ERP or mobile platform." },
  { n: "04", title: "Monitor and Improve", body: "AI models drift over time. We monitor outputs, retrain on new data and improve accuracy continuously under a managed service contract." },
];

/* ─── Tech stack ─── */
const TECH = [
  "OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Llama 3 / Mistral",
  "LangChain", "LlamaIndex", "Python", "FastAPI",
  "TensorFlow / PyTorch", "scikit-learn", "AWS SageMaker", "Pinecone / pgvector",
  "n8n / Zapier", "Docker / Kubernetes", "PostgreSQL", "Redis",
];

/* ─── FAQ ─── */
const FAQS = [
  { q: "Do we need a huge dataset to start?", a: "Not always. Modern LLMs (GPT-4, Claude) can work with small datasets via fine-tuning or retrieval-augmented generation (RAG). We'll tell you honestly whether you have enough data at the discovery stage." },
  { q: "Can you integrate AI into our existing ERP or CRM?", a: "Yes. We build API layers that your existing systems can call. No need to rebuild your core platform — we add AI as a module or microservice alongside what you already have." },
  { q: "How long does a typical AI project take?", a: "A chatbot or document automation project typically takes 4–8 weeks from kick-off to deployment. More complex ML projects (predictive models, computer vision) take 8–16 weeks depending on data readiness." },
  { q: "What's the cost of an AI project?", a: "Small automation or chatbot projects: ₹1,50,000 – ₹5,00,000. Custom ML models or full AI product integrations: ₹5,00,000 – ₹25,00,000+. We give fixed-price quotes after the discovery call." },
  { q: "Is the data we share with you kept private?", a: "Yes. We sign NDAs before any data sharing. We do not use your data to train public models. We can deploy models within your own cloud environment (AWS, Azure, GCP) if data sovereignty is a concern." },
];

/* ─── Contact form ─── */
function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", requirement: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, phone: sanitizePhoneInput(e.target.value) }));
  const blur = (k: keyof typeof form) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = {
    name: nameError(form.name),
    email: emailError(form.email),
    phone: phoneError(form.phone, false),
    requirement: requiredError(form.requirement, "This field"),
  };
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.requirement;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, requirement: true });
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type: "contact", name: form.name, email: form.email,
          phone: form.phone, company: form.company, service_interest: "other",
          message: `AI Solutions Enquiry:\n${form.requirement}`,
          source_page: "/services/ai-powered-solutions",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="text-center py-8">
      <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
      <h3 className="font-display text-xl font-black text-white mb-2">Enquiry received!</h3>
      <p className="text-[#EAF0FA]/70 text-sm">We&apos;ll come back within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-[#EAF0FA]/70 mb-1">Name *</label>
          <input value={form.name} onChange={set("name")} onBlur={blur("name")} placeholder="Your name"
            className={`w-full bg-white/10 border rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none ${touched.name && errors.name ? "border-[#F87171] focus:border-[#F87171]" : "border-white/20 focus:border-white/50"}`} />
          {touched.name && errors.name && <p className="text-xs text-[#F87171] mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#EAF0FA]/70 mb-1">Email *</label>
          <input type="email" value={form.email} onChange={set("email")} onBlur={blur("email")} placeholder="you@company.com"
            className={`w-full bg-white/10 border rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none ${touched.email && errors.email ? "border-[#F87171] focus:border-[#F87171]" : "border-white/20 focus:border-white/50"}`} />
          {touched.email && errors.email && <p className="text-xs text-[#F87171] mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-[#EAF0FA]/70 mb-1">Phone</label>
          <input value={form.phone} onChange={setPhone} onBlur={blur("phone")} placeholder="+91 98765 43210" type="tel" inputMode="tel"
            className={`w-full bg-white/10 border rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none ${touched.phone && errors.phone ? "border-[#F87171] focus:border-[#F87171]" : "border-white/20 focus:border-white/50"}`} />
          {touched.phone && errors.phone && <p className="text-xs text-[#F87171] mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#EAF0FA]/70 mb-1">Company</label>
          <input value={form.company} onChange={set("company")} placeholder="Company name"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/50" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#EAF0FA]/70 mb-1">What do you want to automate or build? *</label>
        <textarea value={form.requirement} onChange={set("requirement")} onBlur={blur("requirement")} rows={4}
          placeholder="Describe the process or problem you want AI to solve — even a rough idea is fine."
          className={`w-full bg-white/10 border rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none resize-none ${touched.requirement && errors.requirement ? "border-[#F87171] focus:border-[#F87171]" : "border-white/20 focus:border-white/50"}`} />
        {touched.requirement && errors.requirement && <p className="text-xs text-[#F87171] mt-1">{errors.requirement}</p>}
      </div>
      {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Email info@itsolvez.com</p>}
      <button type="submit" disabled={status === "loading"}
        className="w-full bg-[#F04830] hover:bg-[#D93920] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60">
        {status === "loading" ? "Sending…" : <><Cpu size={14} /> Discuss My AI Project</>}
      </button>
      <p className="text-xs text-[#EAF0FA]/50 text-center">
        Or call:{" "}
        <a href="tel:+919967470207" className="text-[#EAF0FA]/80 underline">+91 99674 70207</a>
      </p>
    </form>
  );
}

/* ─── FAQ item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E5E9F2] rounded-2xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#F4F7FC] transition-colors">
        <span className="font-semibold text-[#0B1233] text-sm pr-4">{q}</span>
        <ChevronDown size={16} className={`text-[#5A6380] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-[#5A6380] leading-relaxed border-t border-[#F4F7FC]">{a}</div>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ PAGE ═══ */
export default function AIPoweredSolutionsPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      <PageHero
        tag="AI-Powered Solutions"
        title="Build smarter systems"
        titleAccent="powered by AI."
        subtitle="From intelligent chatbots to predictive analytics — ITSolvez builds custom AI solutions that integrate with your existing business, reduce manual work and create measurable outcomes."
        bgImage="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "IT Solutions", href: "/services" }, { label: "AI-Powered Solutions" }]}
        waveFill="#060B24"
      />

      {/* ── CAPABILITIES ── */}
      <section className="section-py bg-[#060B24] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">What we build</span>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-white mt-2 mb-3">
              Six AI capabilities,<br />one accountable partner
            </h2>
            <p className="text-[#EAF0FA]/60 text-sm leading-relaxed">
              Every solution is custom-built for your processes — not an off-the-shelf SaaS with your logo on it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ background: cap.bg + "22" }}>
                  <cap.icon size={22} style={{ color: cap.color }} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{cap.title}</h3>
                <p className="text-[#EAF0FA]/60 text-sm leading-relaxed mb-4">{cap.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/10 text-[#EAF0FA]/70 px-2 py-0.5 rounded-md font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY USE CASES ── */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">By industry</span>
            <h2 className="font-display text-3xl font-black text-[#0B1233] mt-2 mb-3">Real use cases across sectors</h2>
            <p className="text-[#5A6380] text-sm">Select your industry to see what AI can do for your specific context.</p>
          </div>

          {/* Tab row */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {INDUSTRIES.map((ind, i) => (
              <button key={ind.label} onClick={() => setActiveIndustry(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeIndustry === i
                    ? "bg-[#1878F0] text-white shadow-sm"
                    : "bg-white text-[#5A6380] border border-[#E5E9F2] hover:border-[#1878F0] hover:text-[#1878F0]"
                }`}>
                <ind.icon size={14} /> {ind.label}
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E5E9F2] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] flex items-center justify-center">
                {(() => { const Icon = INDUSTRIES[activeIndustry].icon; return <Icon size={18} className="text-[#1878F0]" />; })()}
              </div>
              <h3 className="font-display font-bold text-[#0B1233] text-lg">AI use cases for {INDUSTRIES[activeIndustry].label}</h3>
            </div>
            <ul className="space-y-3">
              {INDUSTRIES[activeIndustry].cases.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[#5A6380]">
                  <CheckCircle2 size={14} className="text-[#1878F0] flex-shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#F4F7FC]">
              <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold text-[#1878F0] hover:underline" prefetch={false}>
                Discuss this for my business <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-py bg-white border-y border-[#E5E9F2]">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">Our process</span>
            <h2 className="font-display text-3xl font-black text-[#0B1233] mt-2">From idea to production AI</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {PROCESS.map((s, i) => (
              <div key={s.n} className="relative">
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#E5E9F2] to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1878F0] to-[#0B3894] flex items-center justify-center mb-4">
                    <span className="font-display font-black text-white text-lg">{s.n}</span>
                  </div>
                  <h3 className="font-bold text-[#0B1233] text-sm mb-2">{s.title}</h3>
                  <p className="text-xs text-[#5A6380] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom text-center">
          <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">Technologies we work with</span>
          <h2 className="font-display text-2xl font-black text-[#0B1233] mt-2 mb-8">The AI tech stack behind our solutions</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {TECH.map((t) => (
              <span key={t} className="bg-white border border-[#E5E9F2] text-[#0B1233] font-mono text-sm px-4 py-2 rounded-xl shadow-sm font-semibold hover:border-[#1878F0] hover:text-[#1878F0] transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALREADY RUNNING AI ── */}
      <section className="section-py bg-white border-y border-[#E5E9F2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">We eat our own cooking</span>
              <h2 className="font-display text-3xl font-black text-[#0B1233] mt-2 mb-4">
                We already run AI in our own products
              </h2>
              <p className="text-[#5A6380] text-sm leading-relaxed mb-6">
                ITSolvez doesn&apos;t just sell AI strategy — we run AI in our own business. Our blog auto-generates weekly posts
                using Claude, our leads system uses ML to score and prioritise enquiries, and our HRMS product has an AI-powered
                payroll anomaly detector. When we build AI for you, we bring real operational experience, not just theory.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "AI blog generator running in production on this website",
                  "Lead scoring on enquiries using ML",
                  "Payroll anomaly detection in ITSolvez HRMS",
                  "AI-powered document extraction for client onboarding",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A6380]">
                    <Zap size={13} className="text-[#F04830] flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/portfolio" className="btn-primary text-sm" prefetch={false}>See our portfolio <ArrowRight size={14} /></Link>
                <a href="https://hrmsitsolvez.com" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  ITSolvez HRMS <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=800&q=80"
                alt="AI technology in production"
                fill className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#060B24]/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-xs font-bold bg-[#F04830] text-white px-3 py-1.5 rounded-full">Running in production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guide ── */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">Guide</span>
          <h2 className="section-heading mb-10">Choosing an AI development company</h2>
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1233] mb-3">There are a lot of AI companies right now. Most of them are wrapping one API call.</h3>
              <p className="text-[#5A6380] leading-relaxed text-base">
                Since ChatGPT became widely known, a huge number of companies have added the word AI to their homepage. Many of them are simply calling the OpenAI API from a basic script and charging a markup. That can be fine for a simple chatbot, but it falls apart for anything that needs to work with your real data or fit into how your business actually runs. When you are comparing AI companies in India, find out directly whether they are building something specific to your business, or reselling a generic tool with your logo on it. The answer usually becomes clear within the first conversation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1233] mb-3">What separates a real AI development company from the rest</h3>
              <p className="text-[#5A6380] leading-relaxed text-base">
                A real AI development company can explain, in plain terms, what data your project needs, why a particular model was chosen over another, and what happens when the AI gets something wrong. If a company cannot answer those questions clearly, they likely have not built much beyond a demo. We start every AI project by checking whether you actually have the data needed to make it work, because that is the part most projects get stuck on, not the model itself.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1233] mb-3">Why this matters more for AI than for regular software</h3>
              <p className="text-[#5A6380] leading-relaxed text-base">
                Regular software either works or it does not, and bugs are usually easy to spot. AI systems can look like they are working while quietly giving wrong answers, which is a real risk if the AI is talking to your customers or making decisions inside your business. That is why we test AI systems against real cases before they go live, and keep a way for your team to review and correct what the AI does, rather than leaving it to run unchecked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">Common questions</span>
            <h2 className="font-display text-3xl font-black text-[#0B1233] mt-2">Frequently asked</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA + FORM ── */}
      <section className="section-py bg-gradient-to-br from-[#060B24] via-[#0B1E4A] to-[#1261CC] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-[1fr_440px] gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-bold text-[#F04830] uppercase tracking-widest">Start here</span>
              <h2 className="font-display text-3xl lg:text-4xl font-black text-white mt-2 mb-4">
                Tell us the problem.<br />We&apos;ll show you the AI.
              </h2>
              <p className="text-[#EAF0FA]/60 text-sm leading-relaxed mb-8">
                No sales pitch. We start with an honest conversation about whether AI is actually the right solution for
                your specific problem — and what it would realistically deliver.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Database, text: "We sign an NDA before reviewing any of your data or systems" },
                  { icon: Bot, text: "Proof of concept built in 2–4 weeks — see before you commit" },
                  { icon: BarChart3, text: "Fixed-price quotes — no open-ended AI consulting retainers" },
                  { icon: CheckCircle2, text: "You own all code, models and data — no vendor lock-in" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[#EAF0FA]/70">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#EAF0FA]" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-display text-xl font-black text-white mb-1">AI Solutions Enquiry</h3>
              <p className="text-xs text-[#EAF0FA]/50 mb-6">We respond within 24 hours.</p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <InquirySection source="Service: AI-Powered Solutions" />

    </>
  );
}
