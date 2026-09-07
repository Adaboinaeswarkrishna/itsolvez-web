import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import RoiCalculator from "@/components/tools/RoiCalculator";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "IT ROI Calculator — Managed IT Savings Estimate | ITSolvez",
    description: "Free interactive calculator: estimate what IT downtime costs your business and the annual impact of switching to managed IT services.",
    keywords: ["IT ROI calculator", "managed IT services cost calculator", "IT downtime cost calculator", "IT cost savings India"],
    slug: "tools/it-roi-calculator",
    ogImage: "/og-image.png",
  });
}

export default function RoiCalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "IT ROI Calculator", url: "https://itsolvez.com/tools/it-roi-calculator/" },
      ])} />

      <PageHero
        tag="Free Tool"
        title="What is IT downtime"
        titleAccent="really costing you?"
        subtitle="Estimate the cost of your current IT downtime and the net annual impact of switching to proactive managed IT — adjust the sliders to your business."
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "IT ROI Calculator" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-5xl">
          <RoiCalculator />
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">How to read the numbers</span>
          <h2 className="section-heading mb-5">Downtime is a cost you already pay</h2>
          <div className="space-y-4 text-[#5A6380] leading-relaxed text-sm">
            <p>
              Every hour your systems are down, you pay salaries for work that isn&apos;t happening — plus the orders,
              calls and deadlines lost in the gap. Most businesses never put a number on it, which is why reactive
              &quot;call someone when it breaks&quot; IT looks cheaper than it is.
            </p>
            <p>
              Proactive managed IT attacks the downtime itself: 24/7 monitoring catches failures before they stop work,
              patching closes the gaps that cause incidents, and SLA-backed response contains the ones that still happen.
              The calculator above uses conservative industry assumptions — a well-run managed service typically prevents
              around two-thirds of unplanned downtime.
            </p>
            <p>
              Want the real numbers for your environment instead of estimates? A free assessment maps your actual
              downtime sources, current spend and the exact package that fits — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact" className="btn-primary" prefetch={false}>Book a Free Consultation <ArrowRight size={16} /></Link>
            <Link href="/services/managed-it"
              className="inline-flex items-center gap-2 border border-[#D7E0F0] hover:border-[#1878F0] hover:text-[#1878F0] text-[#39415C] text-sm font-semibold px-5 py-3 rounded-lg transition-colors" prefetch={false}>
              Explore Managed IT Services
            </Link>
          </div>
        </div>
      </section>

      <InquirySection source="Tool: ROI Calculator" />

    </>
  );
}
