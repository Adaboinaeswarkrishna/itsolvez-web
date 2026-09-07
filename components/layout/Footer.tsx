import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { API_BASE, fixMediaUrl } from "@/lib/wagtail";
import { cities } from "@/lib/data/cities";
import { telHref } from "@/lib/validation";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FooterLink { label: string; url: string }
interface FooterColumn { heading: string; links: FooterLink[] }
interface FooterData {
  logo_url: string | null;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  linkedin_url: string;
  twitter_url: string;
  instagram_url: string;
  facebook_url: string;
  columns: FooterColumn[];
  newsletter_heading: string;
  newsletter_description: string;
  copyright_text: string;
  bottom_links: FooterLink[];
}

// ── Fallback ──────────────────────────────────────────────────────────────────

const FALLBACK: FooterData = {
  logo_url: null,
  tagline: "Custom software, web and mobile app development, managed IT and digital services for businesses across India and globally.",
  phone: "+91 9967470207",
  email: "info@itsolvez.com",
  address: "Building No. 2, Keshav 206 Vasudev Sky High CHS Ltd, Kanakia Road, Mira Road East, Maharashtra, India",
  linkedin_url: "https://linkedin.com/company/itsolvez",
  twitter_url: "",
  instagram_url: "https://instagram.com/itsolvez",
  facebook_url: "https://www.facebook.com/itsolvez",
  columns: [
    { heading: "Services", links: [
      { label: "Managed IT Services", url: "/services/managed-it" },
      { label: "Cloud Computing", url: "/services/cloud-computing" },
      { label: "Cybersecurity", url: "/services/cyber-security" },
      { label: "Custom Software", url: "/services/custom-software" },
      { label: "Web Development", url: "/services/web-development" },
      { label: "App Development", url: "/services/app-development" },
      { label: "Digital Marketing", url: "/services/digital-marketing" },
      { label: "IT Consultancy", url: "/services/it-consultancy" },
    ]},
    { heading: "Industries", links: [
      { label: "Banking and Finance", url: "/industries/banking-finance" },
      { label: "Capital Markets", url: "/industries/capital-markets" },
      { label: "Manufacturing", url: "/industries/manufacturing" },
      { label: "Healthcare", url: "/industries/healthcare" },
      { label: "Higher Education", url: "/industries/higher-education" },
      { label: "Education", url: "/industries/education" },
      { label: "Retail and E-Commerce", url: "/industries/retail-ecommerce" },
      { label: "Real Estate", url: "/industries/real-estate" },
      { label: "Logistics", url: "/industries/logistics" },
      { label: "Travel and Hospitality", url: "/industries/travel-hospitality" },
      { label: "Enterprise Technology", url: "/industries/enterprise-technology" },
    ]},
    { heading: "Company", links: [
      { label: "About Us", url: "/about" },
      { label: "Our Products", url: "/products" },
      { label: "Certifications", url: "/certifications" },
      { label: "Technologies", url: "/technologies" },
      { label: "Case Studies", url: "/case-studies" },
      { label: "Blog and Insights", url: "/blog" },
      { label: "Careers", url: "/careers" },
      { label: "Pricing", url: "/pricing" },
      { label: "IT ROI Calculator", url: "/tools/it-roi-calculator" },
      { label: "Hire Developers", url: "/hire" },
      { label: "FAQ", url: "/faq" },
      { label: "Contact", url: "/contact" },
    ]},
  ],
  newsletter_heading: "IT Insights",
  newsletter_description: "Monthly IT intelligence for Indian businesses.",
  copyright_text: "ITSolvez (Proprietorship). All rights reserved. Registered in India.",
  bottom_links: [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Cookie Policy", url: "/cookie-policy" },
    { label: "Terms", url: "/terms" },
  ],
};

// ── Data fetch ────────────────────────────────────────────────────────────────

async function getFooter(): Promise<FooterData> {
  try {
    const res = await fetch(
      `${API_BASE}/api/footer/`,
      { next: { revalidate: 30 } }
    );
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    return { ...FALLBACK, ...data };
  } catch {
    return FALLBACK;
  }
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ── Footer (server component) ─────────────────────────────────────────────────

export default async function Footer() {
  const f = await getFooter();

  return (
    <footer className="bg-[#060B24] text-[#EAF0FA]/70">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" prefetch={false}>
              {f.logo_url ? (
                <Image
                  src={fixMediaUrl(f.logo_url)}
                  alt="ITSolvez"
                  width={150}
                  height={42}
                  className="h-9 w-auto brightness-0 invert"
                />
              ) : (
                <Image
                  src="/logo.png"
                  alt="ITSolvez"
                  width={150}
                  height={42}
                  className="h-9 w-auto brightness-0 invert"
                />
              )}
            </Link>

            <p className="text-sm leading-relaxed">{f.tagline}</p>

            <div className="space-y-2.5">
              {f.phone && (
                <a href={telHref(f.phone)} className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Phone size={14} className="text-[#1878F0] flex-shrink-0" />
                  {f.phone}
                </a>
              )}
              {f.email && (
                <a href={`mailto:${f.email}`} className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Mail size={14} className="text-[#1878F0] flex-shrink-0" />
                  {f.email}
                </a>
              )}
              {f.address && (
                <div className="flex items-start gap-2.5 text-sm">
                  <MapPin size={14} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                  <span>{f.address}</span>
                </div>
              )}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              {f.linkedin_url && (
                <a href={f.linkedin_url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              )}
              {f.twitter_url && (
                <a href={f.twitter_url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors" aria-label="X (Twitter)">
                  <XIcon />
                </a>
              )}
              {f.instagram_url && (
                <a href={f.instagram_url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              )}
              {f.facebook_url && (
                <a href={f.facebook_url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          {/* Link columns */}
          {f.columns.slice(0, 2).map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.url}>
                    <Link href={link.url}
                      className="text-sm flex items-center gap-1.5 hover:text-white hover:translate-x-0.5 transition-all group" prefetch={false}>
                      <span aria-hidden="true" className="text-[#1878F0] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 w-[11px] text-center leading-none">&rarr;</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Last column: Company links + Newsletter */}
          <div className="space-y-8">
            {f.columns.slice(2).map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.url}>
                      <Link href={link.url}
                        className="text-sm flex items-center gap-1.5 hover:text-white hover:translate-x-0.5 transition-all group" prefetch={false}>
                        <span aria-hidden="true" className="text-[#1878F0] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 w-[11px] text-center leading-none">&rarr;</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            {f.newsletter_heading && (
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                  {f.newsletter_heading}
                </h3>
                {f.newsletter_description && (
                  <p className="text-sm mb-3">{f.newsletter_description}</p>
                )}
                <NewsletterForm />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="border-t border-white/5 bg-gradient-to-r from-transparent via-[#D4A643]/[0.06] to-transparent">
        <div className="container-custom py-7 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          <Link href="/certifications" className="text-xs font-semibold text-[#F5D06F]/80 hover:text-[#F5D06F] uppercase tracking-widest transition-colors flex items-center gap-2" prefetch={false}>
            <ShieldCheck size={14} className="text-[#F5D06F]" />
            Certified and Accredited
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "ISO 9001:2015", sub: "Quality Management", badge: "/badges/iso-9001.svg", href: "/certificates/iso-9001-2015.pdf" },
              { label: "ISO 27001:2022", sub: "Information Security", badge: "/badges/iso-27001.svg", href: "/certificates/iso-27001-2022.pdf" },
              { label: "ISO 20000-1:2018", sub: "IT Service Management", badge: "/badges/iso-20000.svg", href: "/certificates/iso-20000-1-2018.pdf" },
            ].map((cert) => (
              <a
                key={cert.label}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${cert.label} certificate (PDF)`}
                className="flex items-center gap-3 rounded-xl border border-[#D4A643]/25 bg-white/[0.04] px-4 py-2.5 hover:border-[#F5D06F] hover:bg-[#D4A643]/10 hover:shadow-[0_0_20px_rgba(212,166,67,0.25)] transition-all group"
              >
                <Image src={cert.badge} alt={`${cert.label} certified seal`} width={38} height={38}
                  className="w-9 h-9 flex-shrink-0 drop-shadow-[0_0_10px_rgba(212,166,67,0.4)] group-hover:scale-110 transition-transform" />
                <span className="text-left leading-tight">
                  <span className="block text-xs font-bold text-white group-hover:text-[#F5D06F] transition-colors">{cert.label}</span>
                  <span className="block text-[10px] text-[#EAF0FA]/50">{cert.sub}</span>
                </span>
              </a>
            ))}
          </div>
          <Link href="/certifications" className="text-xs font-semibold text-[#1878F0] hover:text-[#F5D06F] transition-colors flex items-center gap-1" prefetch={false}>
            View and verify all
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Areas we serve */}
      <div className="border-t border-white/5">
        <div className="container-custom py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#EAF0FA]/40">
          <span className="font-semibold uppercase tracking-widest text-[#EAF0FA]/50">Areas we serve:</span>
          {cities.map((c) => (
            <Link key={c.slug} href={`/locations/${c.slug}`} className="hover:text-[#EAF0FA]/80 transition-colors" prefetch={false}>
              {c.city}
            </Link>
          ))}
        </div>
      </div>

      {/* Global delivery */}
      <div className="border-t border-white/5">
        <div className="container-custom py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#EAF0FA]/40">
          <span className="font-semibold uppercase tracking-widest text-[#EAF0FA]/50">Global delivery:</span>
          {[
            { label: "UAE", href: "/uae" }, { label: "UK", href: "/uk" }, { label: "USA", href: "/usa" },
            { label: "Singapore", href: "/singapore" }, { label: "Australia", href: "/australia" },
            { label: "Canada", href: "/canada" }, { label: "Germany", href: "/germany" },
            { label: "Saudi Arabia", href: "/saudi-arabia" }, { label: "Qatar", href: "/qatar" },
            { label: "South Africa", href: "/south-africa" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="hover:text-[#EAF0FA]/80 transition-colors" prefetch={false}>
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#EAF0FA]/40">
            © {new Date().getFullYear()} {f.copyright_text}
          </p>
          <div className="flex items-center gap-5">
            {f.bottom_links.map((link) => (
              <Link key={link.url} href={link.url}
                className="text-xs text-[#EAF0FA]/40 hover:text-[#EAF0FA]/70 transition-colors" prefetch={false}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
