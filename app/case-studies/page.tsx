import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Case Studies — IT Services Outcomes by ITSolvez",
  description:
    "Real outcomes for real clients. See how ITSolvez has reduced downtime, cut cloud costs, stopped cyber attacks and delivered software that scales.",
  alternates: { canonical: "https://itsolvez.com/case-studies" },
};

const caseStudies = [
  {
    slug: "manufacturer-downtime-reduction",
    tag: "Managed IT",
    industry: "Manufacturing",
    title: "Reducing IT downtime by 87% for a 200-person Pune manufacturer",
    description:
      "A mid-size manufacturer was experiencing 3+ IT incidents per week — each costing 2–4 hours of production time. After onboarding ITSolvez managed IT, incidents dropped to near zero within 90 days.",
    result: "87% reduction in downtime incidents",
    timeframe: "90-day turnaround",
  },
  {
    slug: "nbfc-cloud-migration",
    tag: "Cloud Migration",
    industry: "Banking & Finance",
    title: "Zero-downtime AWS migration for a Pune-based NBFC",
    description:
      "We migrated 12 years of on-premise infrastructure to AWS in staged phases, with no customer-facing downtime during business hours. Annual infrastructure cost reduced by ₹18 lakhs.",
    result: "₹18L annual cost reduction",
    timeframe: "14-week migration",
  },
  {
    slug: "healthcare-ransomware-response",
    tag: "Cybersecurity",
    industry: "Healthcare",
    title: "MDR deployment stops ransomware attack before encryption begins",
    description:
      "Our 24/7 managed detection and response service detected lateral movement from a phishing-compromised endpoint and contained the threat in 9 minutes — before a single patient file was encrypted.",
    result: "Attack contained in 9 minutes",
    timeframe: "Real-time response",
  },
  {
    slug: "healthtech-platform-scale",
    tag: "Custom Software",
    industry: "Healthcare",
    title: "Scaling a healthtech platform from 500 to 50,000 users",
    description:
      "We rebuilt a Bangalore-based healthtech platform's backend architecture for horizontal scale, migrated to AWS with auto-scaling, and delivered a performance improvement of 4x at 100x the load.",
    result: "100x user growth, zero downtime",
    timeframe: "6-month engagement",
  },
  {
    slug: "logistics-delivery-app",
    tag: "App Development",
    industry: "Logistics",
    title: "Last-mile delivery tracking app for a 3PL with 2,000+ drivers",
    description:
      "Built a cross-platform driver app (React Native) and customer-facing tracking portal, integrated with the client's WMS and ERP. Delivery confirmation accuracy improved from 78% to 99.1%.",
    result: "Delivery accuracy: 78% → 99.1%",
    timeframe: "12-week delivery",
  },
  {
    slug: "manufacturing-ecommerce",
    tag: "Web Development",
    industry: "Manufacturing",
    title: "B2B e-commerce portal for a Pune industrial components manufacturer",
    description:
      "Replaced a manual order-taking process with a custom B2B e-commerce portal — integrated with Tally ERP and Razorpay. Online order value reached ₹1.2 Cr in the first quarter post-launch.",
    result: "₹1.2 Cr online order value, Q1",
    timeframe: "10-week build",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        tag="Client Success Stories"
        title="Real outcomes,"
        titleAccent="real clients."
        subtitle="Numbers, not promises. Here's what ITSolvez has actually delivered for businesses across India."
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <article key={cs.slug} className="card-service bg-white group flex flex-col cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-[#1878F0] uppercase tracking-wider">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-[#5A6380] bg-[#F4F7FC] px-2 py-0.5 rounded-full">
                    {cs.industry}
                  </span>
                </div>
                <h2 className="font-semibold text-[#0B1233] mb-3 leading-snug group-hover:text-[#1878F0] transition-colors">
                  {cs.title}
                </h2>
                <p className="text-sm text-[#5A6380] leading-relaxed flex-1">{cs.description}</p>
                <div className="mt-5 pt-4 border-t border-[#E5E9F2]">
                  <div className="text-sm font-semibold text-emerald-600 mb-1">{cs.result}</div>
                  <div className="text-xs text-[#5A6380]">{cs.timeframe}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#060B24] grid-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-black text-white mb-4">
            Want results like these?
          </h2>
          <p className="text-[#EAF0FA]/60 max-w-md mx-auto mb-8">
            Book a free IT assessment. We&apos;ll identify the highest-impact
            changes for your specific environment.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
