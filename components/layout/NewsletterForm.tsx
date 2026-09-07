"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { emailError } from "@/lib/validation";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const error = emailError(email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (error) return;
    setStatus("loading");
    try {
      const res = await fetch(`/api/leads/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead_type: "newsletter", email: email.trim(), source_page: "/footer" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald-400">
        <CheckCircle2 size={16} />
        <span>Subscribed! You&apos;ll hear from us soon.</span>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="your@email.com"
          disabled={status === "loading"}
          className={`flex-1 min-w-0 bg-white/5 border rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none disabled:opacity-50 ${touched && error ? "border-[#F87171] focus:border-[#F87171]" : "border-white/10 focus:border-[#1878F0]"}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-3 py-2 bg-[#1878F0] text-white rounded-lg text-sm font-medium hover:bg-[#1060cc] transition-colors flex-shrink-0 disabled:opacity-60 flex items-center justify-center"
          aria-label="Subscribe"
        >
          {status === "loading" ? "…" : <ArrowRight size={16} />}
        </button>
      </form>
      {touched && error && <p className="text-xs text-[#F87171] mt-1.5">{error}</p>}
    </div>
  );
}
