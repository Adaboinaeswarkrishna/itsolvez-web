import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata } from "@/components/SEO";
import { getCaseStudies, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("case-studies");
  return buildMetadata({
    title: seo?.meta_title || "Case Studies — Client Success Stories | ITSolvez",
    description: seo?.meta_description || "Real results: ERP, CRM, mobile app and web development projects delivering measurable ROI for global clients.",
    keywords: seo?.meta_keywords || ["software development case studies", "ERP implementation success", "mobile app case study", "CRM development results"],
    slug: "case-studies",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const SERVICE_LABEL: Record<string, string> = {
  "managed-it": "Managed IT",
  "cyber-security": "Cybersecurity",
  "cloud-computing": "Cloud Migration",
  "custom-software": "Custom Software",
  "web-development": "Web Development",
  "app-development": "App Development",
  "system-integration": "System Integration",
  "digital-marketing": "Digital Marketing",
};

const FALLBACK_CASES = [
  { slug: "fintech-mdr-banking", tag: "Cybersecurity", industry: "Banking", title: "How a Mumbai fintech cut breach risk by 90% with 24/7 MDR", excerpt: "A fast-growing Mumbai fintech with 200 users had no real-time threat monitoring. Ransomware hit. We deployed MDR in 48 hours and contained the damage.", key_metrics: "6-hour containment, 100% data recovery, 18 months incident-free" },
  { slug: "manufacturing-erp-integration", tag: "System Integration", industry: "Manufacturing", title: "Connecting SAP to production line: ERP integration for a Pune manufacturer", excerpt: "A 500-person manufacturer had SAP for finance and a separate production system. Daily manual data re-entry was taking 4 hours and causing errors.", key_metrics: "4 hrs/day saved, real-time reporting, 99.8% data accuracy" },
  { slug: "cloud-migration-logistics", tag: "Cloud Migration", industry: "Logistics", title: "Cloud migration for a 3PL logistics company: 40% cost reduction", excerpt: "A 3PL logistics company was running ageing on-premise servers. Capacity was regularly maxed out during peak seasons. We migrated to AWS in 8 weeks.", key_metrics: "40% cost reduction, zero peak-season downtime, auto-scaling" },
];

interface CaseItem { slug: string; tag: string; industry: string; title: string; excerpt: string; key_metrics: string; }

export default async function CaseStudiesPage() {
  let caseStudies: CaseItem[] = FALLBACK_CASES;

  try {
    const data = await getCaseStudies();
    if (data.items?.length) {
      caseStudies = data.items.map((cs) => ({
        slug: (cs as any).meta?.slug ?? cs.slug,
        tag: SERVICE_LABEL[cs.service] ?? cs.service,
        industry: cs.industry,
        title: cs.title,
        excerpt: cs.excerpt,
        key_metrics: cs.key_metrics,
      }));
    }
  } catch {}

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ITSolvez Case Studies",
    url: "https://itsolvez.com/case-studies/",
    publisher: { "@type": "Organization", name: "ITSolvez" },
  };

  return (
    <>
      <JsonLd data={orgSchema} />

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
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card-service bg-white group flex flex-col" prefetch={false}>
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
                <p className="text-sm text-[#5A6380] leading-relaxed flex-1">{cs.excerpt}</p>
                {cs.key_metrics && (
                  <div className="mt-5 pt-4 border-t border-[#E5E9F2]">
                    <div className="text-sm font-semibold text-emerald-600">{cs.key_metrics}</div>
                  </div>
                )}
                <span className="inline-flex items-center gap-1 text-sm text-[#1878F0] font-semibold mt-4">
                  Read case study <ArrowRight size={13} />
                </span>
              </Link>
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
          <Link href="/contact" className="btn-primary" prefetch={false}>
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <InquirySection source="Page: Case Studies" />

    </>
  );
}
