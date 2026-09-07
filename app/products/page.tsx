import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import CertTrustStrip from "@/components/CertTrustStrip";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Our Products, OnlyOnTrip, HRMS, JourneyXpress | ITSolvez",
    description: "ITSolvez builds and operates its own SaaS products, OnlyOnTrip travel booking, JourneyXpress corporate travel, HRMS payroll and Factor Email marketing.",
    keywords: ["ITSolvez products", "OnlyOnTrip travel booking", "ITSolvez HRMS payroll software", "JourneyXpress corporate travel", "Factor Email marketing software"],
    slug: "products",
    ogImage: "/og-image.png",
  });
}

const PRODUCTS = [
  {
    name: "OnlyOnTrip",
    tagline: "Consumer flight, hotel and holiday booking platform",
    url: null as string | null,
    color: "#1878F0",
    problem: "Most travel booking sites make you choose between a slick interface and honest pricing, bundled fees, confusing cancellation terms, and slow support when a flight gets rescheduled.",
    solution: "OnlyOnTrip is ITSolvez's own consumer travel platform: flight search and booking, hotel reservations, and curated holiday packages in one checkout, built on the same Next.js/Node.js stack we build for clients.",
    features: [
      "Real-time flight and hotel search across multiple suppliers",
      "Integrated payments via Razorpay with transparent pricing at checkout",
      "Holiday package curation for domestic and international travel",
      "Mobile-first booking flow, most bookings happen on a phone, so that's what we optimised for first",
    ],
    proof: "Running OnlyOnTrip ourselves means we've solved the unglamorous problems every travel platform hits, payment retries, inventory sync, cancellation edge cases, before we ever build one for a client.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay", "AWS"],
  },
  {
    name: "JourneyXpress",
    tagline: "Corporate travel booking and expense management",
    url: null as string | null,
    color: "#5B3FC8",
    problem: "Corporate travel isn't consumer travel, it needs approval workflows, policy enforcement, GST-compliant invoicing and expense reconciliation that consumer booking sites don't handle.",
    solution: "JourneyXpress is our B2B travel platform, purpose-built for company travel desks: booking within policy, multi-level approvals, and finance-ready reporting.",
    features: [
      "Travel policy enforcement at the point of booking, not after the fact",
      "Multi-level approval workflows matched to company hierarchy",
      "GST-compliant invoicing and expense reconciliation exports",
      "Centralised dashboard for travel managers to track spend and compliance",
    ],
    proof: "JourneyXpress exists because we needed it for our own operations first, corporate travel software built by a company that actually manages corporate travel.",
    tech: ["Django", "React", "PostgreSQL", "AWS"],
  },
  {
    name: "ITSolvez HRMS",
    tagline: "HR, payroll and compliance software for Indian businesses",
    url: "https://hrmsitsolvez.com",
    color: "#0E9384",
    problem: "Indian payroll means PF, ESI and TDS calculations that change with every budget, plus leave, attendance and appraisal tracking most generic HR tools handle poorly or charge enterprise prices for.",
    solution: "ITSolvez HRMS is our own cloud HR and payroll product, built specifically for Indian compliance, the same system we use to run payroll for our own team.",
    features: [
      "Payroll processing with PF, ESI and TDS calculated automatically",
      "Employee onboarding, attendance and leave management in one system",
      "Performance appraisal cycles with configurable review templates",
      "Self-service employee portal, payslips, leave requests, tax declarations",
    ],
    proof: "We run our own payroll on this product. Every compliance edge case we've hit as an Indian employer is already handled in the software, not theoretical, tested on ourselves first.",
    tech: ["Django", "React", "PostgreSQL", "AWS"],
  },
  {
    name: "Factor Email",
    tagline: "Email marketing and automation platform",
    url: "https://factoremail.com",
    color: "#F04830",
    problem: "Most email marketing tools are priced and built for the US/EU market, expensive per-contact pricing, poor India-specific deliverability, and support in the wrong time zone.",
    solution: "Factor Email is our own email marketing and automation platform, campaign building, list management and deliverability tooling, priced and supported for Indian and global SMB budgets.",
    features: [
      "Drag-and-drop campaign builder with reusable templates",
      "List segmentation and automation workflows (welcome series, re-engagement, abandoned actions)",
      "Deliverability monitoring and sender reputation tools",
      "Campaign analytics, opens, clicks, conversions in one dashboard",
    ],
    proof: "We use Factor Email for our own marketing campaigns, client and prospect communication runs through the same product we sell.",
    tech: ["Node.js", "React", "PostgreSQL", "AWS SES"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Products", url: "https://itsolvez.com/products/" },
      ])} />

      <PageHero
        tag="Our Products"
        title="We don't just build software."
        titleAccent="We run it ourselves."
        subtitle="ITSolvez operates four live SaaS products, travel booking, corporate travel, HR and payroll, and email marketing. Every one started as a problem we had ourselves, and every one is still running in production today."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag mb-5">Why It Matters</span>
            <h2 className="section-heading mb-4">Proof, not a pitch</h2>
            <p className="text-[#5A6380] leading-relaxed">
              Any software company can promise they can build your product. We can show you four we already
              built, launched, and still operate, with our own money and our own users on the line.
            </p>
          </div>

          <div className="space-y-16">
            {PRODUCTS.map((p, i) => (
              <div key={p.name} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 === 1 ? "" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#060B24]">{p.name}</h3>
                  </div>
                  <p className="text-sm font-semibold mb-5" style={{ color: p.color }}>{p.tagline}</p>

                  <p className="text-[#5A6380] leading-relaxed mb-4"><strong className="text-[#0B1233]">The problem: </strong>{p.problem}</p>
                  <p className="text-[#5A6380] leading-relaxed mb-6"><strong className="text-[#0B1233]">What we built: </strong>{p.solution}</p>

                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-lg text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: p.color }}>
                      Visit {p.name} <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-[#F4F7FC] rounded-2xl p-7 border border-[#E5E9F2]">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#5A6380] mb-4">Key features</h4>
                    <ul className="space-y-3 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#39415C]">
                          <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-[#5A6380] leading-relaxed italic border-t border-[#E5E9F2] pt-4">{p.proof}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-[#5A6380] bg-white border border-[#E5E9F2] px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertTrustStrip heading="Products built under the same certified process" />

      <section className="section-py bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="section-heading mb-4">Want something built like this for your business?</h2>
          <p className="text-[#5A6380] leading-relaxed mb-8">
            The same team, process and ISO-certified discipline behind these products is available for your project, 
            from a fixed-scope MVP to full product development.
          </p>
          <Link href="/services/custom-software" className="btn-primary inline-flex" prefetch={false}>
            Explore Custom Software Development <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <InquirySection source="Page: Products"
        heading="Have a product idea?"
        subheading="Tell us what you're building, we'll tell you honestly whether it's a fit, timeline and cost, in a free consultation." />
    </>
  );
}
