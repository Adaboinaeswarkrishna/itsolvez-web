"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface LeadershipPerson {
  name: string;
  role: string;
  bio?: string;
}

const LEADER_COLORS = ["#1878F0", "#F04830", "#5B3FC8", "#0E9384", "#D97706", "#DB2777"];

function getInitials(name: string): string {
  if (name.includes("&")) {
    return name.split("&").map((n) => n.trim().split(/\s+/)[0]?.[0] ?? "").join("").toUpperCase();
  }
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function LeadershipSlider({ people }: { people: LeadershipPerson[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  if (people.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {people.map((person, i) => {
          const color = LEADER_COLORS[i % LEADER_COLORS.length];
          return (
            <div
              key={person.name}
              data-card
              className="card-service bg-white text-center relative overflow-hidden flex-shrink-0 snap-start w-[260px] sm:w-[280px]"
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg text-white"
                style={{ backgroundColor: color }}
              >
                {getInitials(person.name)}
              </div>
              <h3 className="font-semibold text-[#0B1233]">{person.name}</h3>
              <span
                className="inline-block text-xs font-semibold mt-2 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${color}15`, color }}
              >
                {person.role}
              </span>
              {person.bio && <p className="text-xs text-[#5A6380] mt-3 leading-relaxed">{person.bio}</p>}
            </div>
          );
        })}
      </div>

      {people.length > 3 && (
        <div className="flex justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous team members"
            className="w-10 h-10 rounded-full border border-[#D7E0F0] flex items-center justify-center text-[#39415C] hover:border-[#1878F0] hover:text-[#1878F0] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next team members"
            className="w-10 h-10 rounded-full border border-[#D7E0F0] flex items-center justify-center text-[#39415C] hover:border-[#1878F0] hover:text-[#1878F0] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
