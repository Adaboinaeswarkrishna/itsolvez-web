import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import NewsletterForm from "./NewsletterForm";

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

const serviceLinks = [
  { label: "Managed IT Services", href: "/services/managed-it" },
  { label: "Cloud Computing", href: "/services/cloud-computing" },
  { label: "Cybersecurity", href: "/services/cyber-security" },
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "IT Consultancy", href: "/services/it-consultancy" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const industryLinks = [
  { label: "Banking & Finance", href: "/industries/banking" },
  { label: "Capital Markets", href: "/industries/capital-markets" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Higher Education", href: "/industries/higher-education" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Enterprise Technology", href: "/industries/enterprise-technology" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060B24] text-[#EAF0FA]/70">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="ITSolvez"
                width={150}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Managed IT, cloud, cybersecurity, custom software and digital
              services for businesses across India and globally.
            </p>
            {/* Contact */}
            <div className="space-y-2.5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
              >
                <Phone size={14} className="text-[#1878F0] flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#1878F0] flex-shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state}, {siteConfig.address.country}
                </span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#1878F0] hover:text-[#1878F0] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-1.5 hover:text-white hover:translate-x-0.5 transition-all group"
                  >
                    <ArrowRight
                      size={11}
                      className="text-[#1878F0] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-1.5 hover:text-white hover:translate-x-0.5 transition-all group"
                  >
                    <ArrowRight
                      size={11}
                      className="text-[#1878F0] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                Company
              </h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm flex items-center gap-1.5 hover:text-white hover:translate-x-0.5 transition-all group"
                    >
                      <ArrowRight
                        size={11}
                        className="text-[#1878F0] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                IT Insights
              </h3>
              <p className="text-sm mb-3">
                Monthly IT intelligence for Indian businesses.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#EAF0FA]/40">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved. Registered in India.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-[#EAF0FA]/40 hover:text-[#EAF0FA]/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-[#EAF0FA]/40 hover:text-[#EAF0FA]/70 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#EAF0FA]/40 hover:text-[#EAF0FA]/70 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
