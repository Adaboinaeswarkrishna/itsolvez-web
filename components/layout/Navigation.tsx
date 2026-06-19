"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why ITSolvez", href: "/about#why-us" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Locations", href: "/locations" },
      { label: "Careers", href: "/careers" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "IT Solutions",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Managed IT Services", href: "/services/managed-it" },
      { label: "IT Support & Service Desk", href: "/services/it-support" },
      { label: "Cloud Computing", href: "/services/cloud-computing" },
      { label: "Cybersecurity", href: "/services/cyber-security" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "IT Consultancy", href: "/services/it-consultancy" },
      { label: "Staff Augmentation", href: "/services/it-staff-augmentation" },
      { label: "Infrastructure", href: "/services/it-infrastructure-management" },
      { label: "System Integration", href: "/services/system-integration" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "All Industries", href: "/industries" },
      { label: "Banking & Finance", href: "/industries/banking" },
      { label: "Capital Markets", href: "/industries/capital-markets" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Higher Education", href: "/industries/higher-education" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Enterprise", href: "/industries/enterprise-technology" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
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
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="ITSolvez"
              width={160}
              height={44}
              className="h-9 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      scrolled
                        ? "text-[#334155] hover:text-[#1878F0] hover:bg-[#EEF6FF]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-2xl shadow-black/12 border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[#475569] hover:text-[#1878F0] hover:bg-[#EEF6FF] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    scrolled
                      ? "text-[#334155] hover:text-[#1878F0] hover:bg-[#EEF6FF]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA — always Coral Red, always visible */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F04830] hover:bg-[#D63820] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-[#F04830]/25 hover:shadow-[#F04830]/40 hover:-translate-y-px"
            >
              Get a Free Assessment
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-[#0F172A] rounded-lg hover:bg-gray-50"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`text-[#94A3B8] transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 py-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2.5 text-sm text-[#64748B] hover:text-[#1878F0] hover:bg-[#EEF6FF] rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-[#0F172A] rounded-lg hover:bg-gray-50 hover:text-[#1878F0] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#F04830] hover:bg-[#D63820] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
