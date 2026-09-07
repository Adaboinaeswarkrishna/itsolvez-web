import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { telHref } from "@/lib/validation";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import CertTrustStrip from "@/components/CertTrustStrip";
import {buildMetadata, JsonLd, breadcrumbSchema } from "@/components/SEO";
import { getPricingPage, getPageSEO, type PricingPlan } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("pricing");
  return buildMetadata({
    title: seo?.meta_title || "IT Services Pricing — Transparent Costs | ITSolvez",
    description: seo?.meta_description || "Transparent pricing for custom software development, mobile app development, ERP and CRM implementation. Competitive offshore rates. Free quote.",
    keywords: seo?.meta_keywords || ["software development pricing", "mobile app development cost", "ERP implementation cost", "custom software quote India"],
    slug: "pricing",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const FALLBACK_PLANS: PricingPlan[] = [
  { name: "Essentials", price: "₹999", unit: "per user/month", description: "For small businesses that need reliable IT support and monitoring without the overhead of an in-house team.", features: ["Business-hours IT helpdesk (9am–6pm, Mon–Sat)", "Remote support for software and connectivity issues", "Monthly patch management", "Endpoint antivirus and security monitoring", "Monthly IT health report", "Up to 25 users"], cta_text: "Get a Quote", highlighted: false },
  { name: "Professional", price: "₹1,499", unit: "per user/month", description: "For growing businesses that need 24/7 monitoring, proactive security and on-site support.", features: ["24/7 monitoring and alerting", "Remote + on-site support with SLA", "Proactive patch and maintenance cycles", "Managed endpoint detection and response (EDR)", "Cloud and server management", "Asset and vendor management", "Virtual CIO quarterly review", "25–100 users"], cta_text: "Get a Quote", highlighted: true },
  { name: "Enterprise", price: "Custom", unit: "tailored to your environment", description: "For organisations with complex environments, multiple sites, or specific compliance requirements.", features: ["Dedicated account manager and named engineers", "24/7 NOC monitoring with sub-15-minute response", "Full managed security (MDR) included", "Multi-site and hybrid-cloud management", "Compliance support (DPDPA, ISO 27001, RBI IT)", "Monthly executive reporting", "Annual technology roadmap and vCIO", "100+ users"], cta_text: "Talk to Sales", highlighted: false },
];

export default async function PricingPage() {
  const page = await getPricingPage().catch(() => null);
  const plans: PricingPlan[] = page?.plans?.map(p => p.value) ?? FALLBACK_PLANS;
  const heroSubtitle = page?.hero_subtitle ?? "Fixed monthly fees based on your users and environment. All plans include a free IT assessment before commitment.";
  const projectIntro = page?.project_pricing_intro ?? "Custom software development, web development, app development, cloud migration and digital marketing campaigns are priced per project. We provide a fixed-scope quote after the discovery phase — so you know exactly what you're paying before development begins.";
  const disclaimer = page?.disclaimer ?? "All pricing is indicative. Final pricing is agreed after the free IT assessment based on your specific environment and requirements. GST applicable.";

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Pricing", url: "https://itsolvez.com/pricing/" },
      ])} />

      <PageHero
        tag="Pricing and Plans"
        title="Predictable IT costs,"
        titleAccent="zero surprises."
        subtitle={heroSubtitle}
        bgImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col border ${
                  plan.highlighted
                    ? "bg-[#1878F0] border-[#1878F0] shadow-2xl shadow-[#1878F0]/30 scale-[1.02]"
                    : "bg-white border-[#E5E9F2]"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-flex items-center px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full mb-4 w-fit">
                    Most Popular
                  </div>
                )}
                <h2 className={`font-display text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-[#0B1233]"}`}>
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-display text-3xl font-black ${plan.highlighted ? "text-white" : "text-[#0B1233]"}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className={`text-xs ${plan.highlighted ? "text-white/70" : "text-[#5A6380]"}`}>
                      {plan.unit}
                    </span>
                  )}
                </div>
                {plan.price === "Custom" && (
                  <span className={`text-xs ${plan.highlighted ? "text-white/70" : "text-[#5A6380]"} mb-1`}>{plan.unit}</span>
                )}
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? "text-white/80" : "text-[#5A6380]"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-[#1878F0]"}`} />
                      <span className={`text-sm ${plan.highlighted ? "text-white/85" : "text-[#0B1233]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={plan.highlighted ? "bg-white text-[#1878F0] font-semibold text-sm py-3 px-5 rounded-lg text-center hover:bg-[#EAF0FA] transition-colors flex items-center justify-center gap-2" : "btn-primary justify-center"} prefetch={false}>
                  {plan.cta_text} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#5A6380] mt-8">{disclaimer}</p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="section-heading mb-4">Project-based services</h2>
          <p className="text-[#5A6380] leading-relaxed mb-8">{projectIntro}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary" prefetch={false}>Get a Project Quote <ArrowRight size={16} /></Link>
            <a href={telHref(siteConfig.phone)} className="btn-secondary"><Phone size={15} /> Talk to us</a>
          </div>
        </div>
      </section>

      <CertTrustStrip heading="Certified quality behind every plan" />

      <InquirySection source="Page: Pricing" />

    </>
  );
}
