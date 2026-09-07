"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Send, ShieldCheck } from "lucide-react";
import { nameError, emailError, phoneError, requiredError, sanitizePhoneInput } from "@/lib/validation";

const SERVICES = [
  "Website Development",
  "Mobile App Development",
  "Custom Software / ERP / CRM",
  "Managed IT / AMC",
  "Cloud Services",
  "Digital Marketing / SEO",
  "Hire Developers (Staff Augmentation)",
  "AI / Chatbot Development",
  "Other",
];

interface Props {
  /** Where the lead came from, e.g. "City: Thane" or "Service: Web Development" */
  source?: string;
  heading?: string;
  subheading?: string;
}

export default function InquiryForm({
  source = "",
  heading = "Get a free consultation",
  subheading = "Tell us what you need, we reply within one business day with clear next steps and honest pricing.",
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, phone: sanitizePhoneInput(e.target.value) });
  const blur = (k: string) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = {
    name: nameError(form.name),
    phone: phoneError(form.phone),
    email: emailError(form.email),
    service: requiredError(form.service, "Service"),
  };
  const isValid = !errors.name && !errors.phone && !errors.email && !errors.service;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, service: true });
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: `${source ? `[${source}] ` : ""}${form.message || "Inquiry via page form"}`,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#060B24] rounded-2xl p-8 text-center">
        <CheckCircle2 size={40} className="text-[#10b981] mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-white mb-2">Inquiry received!</h3>
        <p className="text-sm text-[#EAF0FA]/60 max-w-sm mx-auto">
          Thank you, our team will call or email you within one business day. Need us sooner?{" "}
          <a href="tel:+919967470207" className="text-[#1878F0] font-semibold">+91 9967470207</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#060B24] rounded-2xl p-6 sm:p-8">
      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">{heading}</h3>
      <p className="text-sm text-[#EAF0FA]/55 mb-6">{subheading}</p>
      <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <input value={form.name} onChange={set("name")} onBlur={blur("name")} placeholder="Your name *"
            className={`w-full rounded-lg bg-white/[0.06] border px-4 py-3 text-sm text-white placeholder:text-[#EAF0FA]/35 focus:outline-none ${touched.name && errors.name ? "border-[#F04830] focus:border-[#F04830]" : "border-white/10 focus:border-[#1878F0]"}`} />
          {touched.name && errors.name && <p className="text-xs text-[#F04830] mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <input value={form.phone} onChange={setPhone} onBlur={blur("phone")} placeholder="Phone / WhatsApp *" type="tel" inputMode="tel"
            className={`w-full rounded-lg bg-white/[0.06] border px-4 py-3 text-sm text-white placeholder:text-[#EAF0FA]/35 focus:outline-none ${touched.phone && errors.phone ? "border-[#F04830] focus:border-[#F04830]" : "border-white/10 focus:border-[#1878F0]"}`} />
          {touched.phone && errors.phone && <p className="text-xs text-[#F04830] mt-1.5">{errors.phone}</p>}
        </div>
        <div>
          <input value={form.email} onChange={set("email")} onBlur={blur("email")} placeholder="Email *" type="email"
            className={`w-full rounded-lg bg-white/[0.06] border px-4 py-3 text-sm text-white placeholder:text-[#EAF0FA]/35 focus:outline-none ${touched.email && errors.email ? "border-[#F04830] focus:border-[#F04830]" : "border-white/10 focus:border-[#1878F0]"}`} />
          {touched.email && errors.email && <p className="text-xs text-[#F04830] mt-1.5">{errors.email}</p>}
        </div>
        <div>
          <select value={form.service} onChange={set("service")} onBlur={blur("service")}
            className={`w-full rounded-lg bg-white/[0.06] border px-4 py-3 text-sm text-white focus:outline-none [&>option]:text-[#0B1233] ${touched.service && errors.service ? "border-[#F04830] focus:border-[#F04830]" : "border-white/10 focus:border-[#1878F0]"}`}>
            <option value="" disabled>Service needed *</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {touched.service && errors.service && <p className="text-xs text-[#F04830] mt-1.5">{errors.service}</p>}
        </div>
        <textarea value={form.message} onChange={set("message")} placeholder="Briefly describe your requirement (optional)" rows={3}
          className="sm:col-span-2 rounded-lg bg-white/[0.06] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-[#EAF0FA]/35 focus:border-[#1878F0] focus:outline-none resize-none" />
        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <button type="submit" disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 bg-[#F04830] hover:bg-[#D63A24] disabled:opacity-60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
            {status === "loading" ? "Sending..." : <>Send inquiry <Send size={15} /></>}
          </button>
          <a href="tel:+919967470207" className="inline-flex items-center gap-2 text-sm text-[#EAF0FA]/60 hover:text-white transition-colors">
            <Phone size={14} className="text-[#1878F0]" /> or call +91 9967470207
          </a>
        </div>
        {status === "error" && (
          <p className="sm:col-span-2 text-sm text-[#F04830]">
            Something went wrong, please try again or email info@itsolvez.com directly.
          </p>
        )}
        <p className="sm:col-span-2 text-[11px] text-[#EAF0FA]/35 flex items-center gap-1.5">
          <ShieldCheck size={12} className="text-[#10b981]" />
          ISO 27001 certified, your details are handled securely and never shared.
        </p>
      </form>
    </div>
  );
}

/** Full-width inquiry section wrapper for page bottoms. */
export function InquirySection({ source, heading, subheading }: Props) {
  return (
    <section className="section-py bg-[#F4F7FC]" id="inquiry">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-8">
          <span className="section-tag mb-4">Start Your Project</span>
          <h2 className="section-heading flex items-center justify-center gap-2">
            Ready to talk? <ArrowRight size={22} className="text-[#1878F0]" />
          </h2>
        </div>
        <InquiryForm source={source} heading={heading} subheading={subheading} />
      </div>
    </section>
  );
}
