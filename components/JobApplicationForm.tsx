"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Upload, X } from "lucide-react";
import { nameError, emailError, phoneError, sanitizePhoneInput } from "@/lib/validation";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export default function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", skills: "", message: "" });
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, phone: sanitizePhoneInput(e.target.value) }));
  const blur = (k: keyof typeof form) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = {
    name: nameError(form.name),
    email: emailError(form.email),
    phone: phoneError(form.phone, false),
  };
  const isValid = !errors.name && !errors.email && !errors.phone && !resumeError;

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setResume(null);
      setResumeError(null);
      return;
    }
    const ext = "." + (file.name.split(".").pop() ?? "").toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setResumeError("Resume must be a PDF, DOC or DOCX file");
      setResume(null);
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResumeError("Resume must be under 5MB");
      setResume(null);
      return;
    }
    setResumeError(null);
    setResume(file);
  }

  function clearFile() {
    setResume(null);
    setResumeError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (!isValid) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const body = new FormData();
      body.append("lead_type", "job_application");
      body.append("job_title", jobTitle);
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("phone", form.phone);
      body.append("experience", form.experience);
      body.append("skills", form.skills);
      body.append("message", form.message);
      body.append("source_page", `/careers/${jobTitle}`);
      if (resume) body.append("resume", resume);

      const res = await fetch("/api/leads/", { method: "POST", body });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E9F2] text-center">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-xl font-black text-[#0B1233] mb-2">Application received!</h3>
        <p className="text-sm text-[#5A6380]">
          Thanks for applying for {jobTitle}. Our team will review your application and get back to you within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E9F2]">
      <h3 className="font-display text-xl font-black text-[#0B1233] mb-1">Apply for this role</h3>
      <p className="text-xs text-[#5A6380] mb-6">We reply to every application within 5 business days.</p>
      <form onSubmit={submit} noValidate className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Full name *</label>
          <input value={form.name} onChange={set("name")} onBlur={blur("name")} placeholder="Your name"
            className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.name && errors.name ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
          {touched.name && errors.name && <p className="text-xs text-[#F04830] mt-1">{errors.name}</p>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#0B1233] mb-1">Email ID *</label>
            <input type="email" value={form.email} onChange={set("email")} onBlur={blur("email")} placeholder="you@email.com"
              className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.email && errors.email ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
            {touched.email && errors.email && <p className="text-xs text-[#F04830] mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#0B1233] mb-1">Phone number *</label>
            <input value={form.phone} onChange={setPhone} onBlur={blur("phone")} placeholder="+91 98765 43210" type="tel" inputMode="tel"
              className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none ${touched.phone && errors.phone ? "border-[#F04830] focus:border-[#F04830]" : "border-[#E5E9F2] focus:border-[#1878F0]"}`} />
            {touched.phone && errors.phone && <p className="text-xs text-[#F04830] mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#0B1233] mb-1">Years of experience</label>
            <input value={form.experience} onChange={set("experience")} placeholder="e.g. 3 years"
              className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#0B1233] mb-1">Key skills</label>
            <input value={form.skills} onChange={set("skills")} placeholder="e.g. React, Node.js"
              className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0]" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Resume / CV</label>
          {resume ? (
            <div className="flex items-center justify-between border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm">
              <span className="truncate text-[#0B1233]">{resume.name}</span>
              <button type="button" onClick={clearFile} className="text-[#5A6380] hover:text-[#F04830] flex-shrink-0 ml-2" aria-label="Remove file">
                <X size={15} />
              </button>
            </div>
          ) : (
            <label className="flex items-center gap-2 border border-dashed border-[#D7E0F0] rounded-xl px-3 py-2.5 text-sm text-[#5A6380] cursor-pointer hover:border-[#1878F0] hover:text-[#1878F0] transition-colors">
              <Upload size={15} />
              Upload PDF, DOC or DOCX (max 5MB)
              <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" />
            </label>
          )}
          {resumeError && <p className="text-xs text-[#F04830] mt-1">{resumeError}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0B1233] mb-1">Anything else you&apos;d like to add?</label>
          <textarea value={form.message} onChange={set("message")} rows={3}
            placeholder="Optional — cover note, portfolio link, notice period, etc."
            className="w-full border border-[#E5E9F2] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1878F0] resize-none" />
        </div>
        {status === "error" && <p className="text-xs text-[#F04830]">{errorMsg}</p>}
        <button type="submit" disabled={status === "loading"}
          className="btn-primary w-full justify-center text-sm disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Submit Application"} {status !== "loading" && <ArrowRight size={14} />}
        </button>
        <p className="text-xs text-[#5A6380] text-center">
          Or email your resume directly:{" "}
          <a href="mailto:info@itsolvez.com" className="text-[#1878F0] font-semibold hover:underline">info@itsolvez.com</a>
        </p>
      </form>
    </div>
  );
}
