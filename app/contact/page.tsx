"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";

const services = [
  "Managed IT Services",
  "IT Support & Service Desk",
  "Cloud Computing",
  "Cybersecurity",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Digital Marketing & SEO",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        tag="Get In Touch"
        title="Let's talk about"
        titleAccent="your IT challenges."
        subtitle="Book a free assessment, ask a question, or just tell us what's not working. We'll respond within one business day."
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
                  <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-3 text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors group">
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

              {/* WhatsApp */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span className="font-semibold text-[#0B1233] text-sm">WhatsApp</span>
                </div>
                <p className="text-xs text-[#5A6380] mb-3">
                  Prefer to chat? Message us directly on WhatsApp for a faster response.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20ITSolvez%2C%20I%27d%20like%20to%20discuss%20IT%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#1fad55] transition-colors"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
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
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display text-xl font-bold text-[#0B1233] mb-6">
                      Send us a message
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label" htmlFor="name">Full name *</label>
                        <input id="name" name="name" type="text" required placeholder="Rajesh Kumar" className="form-input" value={formData.name} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="email">Email address *</label>
                        <input id="email" name="email" type="email" required placeholder="rajesh@company.com" className="form-input" value={formData.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label" htmlFor="phone">Phone number</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91-XXXXX-XXXXX" className="form-input" value={formData.phone} onChange={handleChange} />
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
                        id="message" name="message" required rows={5}
                        placeholder="Tell us what you need help with, your company size, and any relevant context..."
                        className="form-input resize-none"
                        value={formData.message} onChange={handleChange}
                      />
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
                      <Link href="/privacy-policy" className="text-[#1878F0] hover:underline">Privacy Policy</Link>.
                      We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
