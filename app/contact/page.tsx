"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";
import { JsonLd, breadcrumbSchema } from "@/components/SEO";
import CertTrustStrip from "@/components/CertTrustStrip";
import { nameError, emailError, phoneError, requiredError, sanitizePhoneInput, telHref } from "@/lib/validation";


const services = [
  "Managed IT Services",
  "IT Support and Service Desk",
  "Cloud Computing",
  "Cybersecurity",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Digital Marketing and SEO",
  "IT Consultancy",
  "Staff Augmentation",
  "IT Infrastructure",
  "System Integration",
  "Not sure — I need advice",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, phone: sanitizePhoneInput(e.target.value) }));
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }));

  const errors = {
    name: nameError(formData.name),
    email: emailError(formData.email),
    phone: phoneError(formData.phone, false),
    message: requiredError(formData.message, "Message"),
  };
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch(`/api/leads/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_interest: formData.service,
          message: formData.message,
          source_page: "/contact",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Contact", url: "https://itsolvez.com/contact/" },
      ])} />

      {/* Hero */}
      <PageHero
        tag="Get In Touch"
        title="Let's talk about"
        titleAccent="your IT challenges."
        subtitle="Free 30-minute call about your website, app or IT setup — you'll get a written summary of recommendations, no obligation. Or just ask a question. We reply within one business day."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-[#0B1233] mb-6">
                  Contact details
                </h2>
                <div className="space-y-4">
                  <a href={telHref(siteConfig.phone)} className="flex items-start gap-3 text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] flex-shrink-0 mt-0.5 group-hover:bg-[#1878F0] group-hover:text-white transition-colors">
                      <Phone size={15} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1233] text-xs uppercase tracking-wider mb-0.5">Phone</div>
                      {siteConfig.phone}
                    </div>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] flex-shrink-0 mt-0.5 group-hover:bg-[#1878F0] group-hover:text-white transition-colors">
                      <Mail size={15} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1233] text-xs uppercase tracking-wider mb-0.5">Email</div>
                      {siteConfig.email}
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-[#5A6380]">
                    <div className="w-9 h-9 rounded-lg bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] flex-shrink-0 mt-0.5">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1233] text-xs uppercase tracking-wider mb-0.5">Office</div>
                      {siteConfig.address.street}, {siteConfig.address.city},<br />
                      {siteConfig.address.state} — {siteConfig.address.postal}
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-white border border-[#E5E9F2] rounded-xl p-5">
                <h3 className="font-semibold text-[#0B1233] text-sm mb-3">What to expect</h3>
                <div className="space-y-2.5">
                  {[
                    { time: "< 1 business day", label: "Response to enquiries" },
                    { time: "< 15 minutes", label: "Response to critical IT issues" },
                    { time: "Free", label: "IT assessment — no obligation" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-[#1878F0] flex-shrink-0" />
                      <span className="text-xs text-[#5A6380]">
                        <span className="font-semibold text-[#0B1233]">{item.time}</span> — {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E9F2]">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0B1233] mb-2">
                      Message received
                    </h3>
                    <p className="text-[#5A6380] text-sm">
                      We&apos;ll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h2 className="font-display text-xl font-bold text-[#0B1233] mb-6">
                      Send us a message
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label" htmlFor="name">Full name *</label>
                        <input id="name" name="name" type="text" placeholder="Rajesh Kumar" className={`form-input ${touched.name && errors.name ? "form-input-error" : ""}`} value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                        {touched.name && errors.name && <p className="form-error-text">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="form-label" htmlFor="email">Email address *</label>
                        <input id="email" name="email" type="email" placeholder="rajesh@company.com" className={`form-input ${touched.email && errors.email ? "form-input-error" : ""}`} value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                        {touched.email && errors.email && <p className="form-error-text">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label" htmlFor="phone">Phone number</label>
                        <input id="phone" name="phone" type="tel" inputMode="tel" placeholder="+91-XXXXX-XXXXX" className={`form-input ${touched.phone && errors.phone ? "form-input-error" : ""}`} value={formData.phone} onChange={handlePhoneChange} onBlur={handleBlur} />
                        {touched.phone && errors.phone && <p className="form-error-text">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="form-label" htmlFor="company">Company name</label>
                        <input id="company" name="company" type="text" placeholder="Your company" className="form-input" value={formData.company} onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="service">Service you&apos;re interested in</label>
                      <select id="service" name="service" className="form-input" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea
                        id="message" name="message" rows={5}
                        placeholder="Tell us what you need help with, your company size, and any relevant context..."
                        className={`form-input resize-none ${touched.message && errors.message ? "form-input-error" : ""}`}
                        value={formData.message} onChange={handleChange} onBlur={handleBlur}
                      />
                      {touched.message && errors.message && <p className="form-error-text">{errors.message}</p>}
                    </div>
                    {status === "error" && (
                      <p className="text-sm text-[#F04830]">
                        Something went wrong. Please try again or email us directly at {siteConfig.email}.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center"
                    >
                      {status === "loading" ? "Sending..." : (
                        <>Send message <Send size={16} /></>
                      )}
                    </button>
                    <p className="text-xs text-[#5A6380] text-center">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-[#1878F0] hover:underline" prefetch={false}>Privacy Policy</Link>.
                      We never share your data.
                    </p>
                    <p className="text-xs text-[#5A6380] text-center flex items-center justify-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#10b981]" />
                      ISO 27001:2022 certified — your information is handled under an audited security management system.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertTrustStrip heading="Talk to an ISO certified IT partner" />
    </>
  );
}
