"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown, type LucideIcon,
  Info, Package, Award, MapPin, Briefcase, Tag, HelpCircle,
  Bot, Server, Headset, Cloud, Shield, Code2, Globe, Smartphone,
  Megaphone, Lightbulb, Users, Network, Boxes, BarChart3,
  Landmark, TrendingUp, HeartPulse, ShoppingCart, GraduationCap,
  Factory, Building2, Truck, Plane, Building, Layers,
} from "lucide-react";

export interface NavSubItem {
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  url: string;
  sub_items: NavSubItem[];
}

export interface NavData {
  items: NavItem[];
  cta_label: string;
  cta_url: string;
}

// Keyword → icon, checked against each sub-item's label (case-insensitive).
// Falls back to a generic icon for anything unmatched, so this stays
// correct even if the CMS nav content changes without a code update.
const ICON_RULES: [string, LucideIcon][] = [
  ["about", Info],
  ["product", Package],
  ["certif", Award],
  ["location", MapPin],
  ["career", Briefcase],
  ["pricing", Tag],
  ["faq", HelpCircle],
  ["ai-powered", Bot],
  ["ai ", Bot],
  ["managed it", Server],
  ["support", Headset],
  ["service desk", Headset],
  ["cloud", Cloud],
  ["cyber", Shield],
  ["security", Shield],
  ["custom software", Code2],
  ["web development", Globe],
  ["app development", Smartphone],
  ["digital marketing", Megaphone],
  ["consultancy", Lightbulb],
  ["staff augmentation", Users],
  ["infrastructure", Network],
  ["system integration", Boxes],
  ["data and analytics", BarChart3],
  ["analytics", BarChart3],
  ["banking", Landmark],
  ["finance", Landmark],
  ["capital markets", TrendingUp],
  ["healthcare", HeartPulse],
  ["retail", ShoppingCart],
  ["e-commerce", ShoppingCart],
  ["higher education", GraduationCap],
  ["education", GraduationCap],
  ["manufacturing", Factory],
  ["real estate", Building2],
  ["logistics", Truck],
  ["travel", Plane],
  ["hospitality", Plane],
  ["enterprise technology", Building],
];

function iconFor(label: string): LucideIcon {
  const l = label.toLowerCase();
  for (const [key, Icon] of ICON_RULES) {
    if (l.includes(key)) return Icon;
  }
  return Layers;
}

export default function NavigationClient({ nav }: { nav: NavData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" prefetch={false}>
            <Image
              src="/logo.png"
              alt="ITSolvez"
              width={160}
              height={44}
              className="h-9 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.items.map((item) =>
              item.sub_items && item.sub_items.length > 0 ? (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-2.5 py-2.5 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                      scrolled
                        ? "text-[#334155] hover:text-[#1878F0] hover:bg-[#EEF6FF]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-all duration-200 ${
                        openDropdown === item.label ? "rotate-180 text-[#F04830]" : "group-hover:text-[#F04830]"
                      }`}
                    />
                  </button>

                  {/* Always mounted, visibility toggled via CSS — conditionally mounting/unmounting
                      this panel on hover caused a Next.js router crash when switching directly
                      between two open dropdowns (rapid Link mount/unmount race). */}
                  <div
                    className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl shadow-black/12 border border-gray-100 p-2 z-50 ${
                      item.sub_items.length > 8 ? "w-[520px] grid grid-cols-2 gap-0.5" : "w-72"
                    } ${openDropdown === item.label ? "block" : "hidden"}`}
                  >
                    {item.sub_items.map((child) => {
                      const Icon = iconFor(child.label);
                      return (
                        <Link
                          key={child.url}
                          href={child.url}
                          prefetch={false}
                          className="group/item flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-[#475569] hover:bg-[#EEF6FF] hover:text-[#1878F0] transition-colors"
                        >
                          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#1878F0] transition-colors group-hover/item:bg-[#1878F0] group-hover/item:text-white">
                            <Icon size={15} />
                          </span>
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.url || "/"}
                  prefetch={false}
                  className={`px-2.5 py-2.5 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                    scrolled
                      ? "text-[#334155] hover:text-[#1878F0] hover:bg-[#EEF6FF]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={nav.cta_url}
              prefetch={false}
              className="inline-flex items-center gap-2 bg-[#F04830] hover:bg-[#D63820] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-[#F04830]/25 hover:shadow-[#F04830]/40 hover:-translate-y-px"
            >
              {nav.cta_label}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-colors ${
              scrolled ? "text-[#334155] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 space-y-0.5">
            {nav.items.map((item) =>
              item.sub_items && item.sub_items.length > 0 ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-[#0F172A] rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180 text-[#F04830]" : "text-[#94A3B8]"}`}
                    />
                  </button>
                  <div className={`grid grid-cols-1 gap-0.5 pl-4 py-1 ${openDropdown === item.label ? "block" : "hidden"}`}>
                      {item.sub_items.map((child) => {
                        const Icon = iconFor(child.label);
                        return (
                          <Link
                            key={child.url}
                            href={child.url}
                            prefetch={false}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#64748B] hover:text-[#1878F0] hover:bg-[#EEF6FF] transition-colors"
                          >
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[#EAF2FF] text-[#1878F0]">
                              <Icon size={13} />
                            </span>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.url || "/"}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-[#0F172A] rounded-lg hover:bg-gray-50 hover:text-[#1878F0] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-1">
              <Link
                href={nav.cta_url}
                prefetch={false}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#F04830] hover:bg-[#D63820] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {nav.cta_label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
