"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { techStack, type Tech } from "@/lib/data/techstack";

function iconUrl(t: Tech): string | null {
  if (!t.icon) return null;
  const variant = t.variant ?? "original";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t.icon}/${t.icon}-${variant}.svg`;
}

function monogram(name: string): string {
  const words = name.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function TechTile({ t, accent }: { t: Tech; accent: string }) {
  const [failed, setFailed] = useState(false);
  const url = iconUrl(t);
  return (
    <div className="bg-white rounded-xl border border-[#E5E9F2] px-4 py-4 flex flex-col items-center justify-center gap-2.5 text-center hover:border-[#1878F0] hover:shadow-md hover:-translate-y-0.5 transition-all">
      {url && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={`${t.name} logo`} width={36} height={36} loading="lazy"
          className="w-9 h-9 object-contain" onError={() => setFailed(true)} />
      ) : (
        <span
          className="w-9 h-9 rounded-lg flex items-center justify-center text-[13px] font-black"
          style={{ backgroundColor: `${accent}14`, color: accent }}
          aria-hidden
        >
          {monogram(t.name)}
        </span>
      )}
      <span className="text-[13px] font-semibold text-[#0B1233] leading-tight">{t.name}</span>
    </div>
  );
}

export default function TechStack({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(techStack[0].id);
  const cat = techStack.find((c) => c.id === active) ?? techStack[0];
  const items = compact ? cat.items.slice(0, 14) : cat.items;

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white rounded-2xl border border-[#E5E9F2] p-2 max-w-fit mx-auto">
        {techStack.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              c.id === active
                ? "bg-[#1878F0] text-white"
                : "text-[#39415C] hover:bg-[#F4F7FC]"
            }`}
            aria-pressed={c.id === active}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3.5">
        {items.map((t) => (
          <TechTile key={`${cat.id}-${t.name}`} t={t} accent={cat.accent} />
        ))}
      </div>

      {compact && cat.items.length > items.length && (
        <p className="text-center mt-5">
          <Link href="/technologies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1878F0] hover:underline" prefetch={false}>
            +{cat.items.length - items.length} more {cat.label} technologies <ArrowRight size={14} />
          </Link>
        </p>
      )}
    </div>
  );
}
