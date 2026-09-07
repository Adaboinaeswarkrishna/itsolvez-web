import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Quote, Target, Wrench } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";
import { getCaseStudy, getCaseStudies } from "@/lib/wagtail";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

const SERVICE_LABELS: Record<string, string> = {
  "cyber-security": "Cybersecurity",
  "system-integration": "System Integration",
  "cloud-computing": "Cloud Computing",
  "managed-it": "Managed IT",
  "custom-software": "Custom Software",
  "web-development": "Web Development",
  "app-development": "App Development",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug).catch(() => null);
  if (!cs) return {};
  return buildMetadata({
    title: (cs as any).meta?.seo_title || `${cs.title} | ITSolvez Case Study`,
    description: cs.excerpt,
    keywords: [cs.industry, SERVICE_LABELS[cs.service] ?? cs.service, "case study", "ITSolvez"].filter(Boolean) as string[],
    slug: `case-studies/${slug}`,
    ogImage: cs.featured_image?.url || "/og-image.png",
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug).catch(() => null);
  if (!cs) notFound();

  let more: { slug: string; title: string; industry: string; excerpt: string }[] = [];
  try {
    const data = await getCaseStudies();
    more = (data.items ?? [])
      .map((c: any) => ({ slug: c.meta?.slug ?? c.slug, title: c.title, industry: c.industry, excerpt: c.excerpt }))
      .filter((c) => c.slug && c.slug !== slug)
      .slice(0, 2);
  } catch {}

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Case Studies", url: "https://itsolvez.com/case-studies/" },
        { name: cs.title, url: `https://itsolvez.com/case-studies/${slug}/` },
      ])} />

      <PageHero
        tag={`${cs.industry} · ${SERVICE_LABELS[cs.service] ?? cs.service}`}
        title={cs.title}
        subtitle={cs.excerpt}
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: cs.title }]}
      />

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          {/* Client + metrics summary */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-[#E5E9F2]">
            <div className="flex items-center gap-2.5 text-sm text-[#5A6380]">
              <Building2 size={16} className="text-[#1878F0]" />
              {cs.client_name}
            </div>
            {cs.key_metrics && (
              <div className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                {cs.key_metrics}
              </div>
            )}
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Target size={18} className="text-[#F04830]" />
                <h2 className="font-display text-xl font-bold text-[#0B1233]">The Challenge</h2>
              </div>
              <p className="text-[#5A6380] leading-relaxed">{cs.challenge}</p>
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Wrench size={18} className="text-[#1878F0]" />
                <h2 className="font-display text-xl font-bold text-[#0B1233]">The Solution</h2>
              </div>
              <p className="text-[#5A6380] leading-relaxed">{cs.solution}</p>
            </div>

            <div className="bg-[#060B24] rounded-2xl p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <h2 className="font-display text-xl font-bold text-white">The Results</h2>
              </div>
              <p className="text-[#EAF0FA]/75 leading-relaxed">{cs.results}</p>
            </div>

            {cs.testimonial_quote && (
              <div className="border-l-4 border-[#1878F0] pl-6 py-2">
                <Quote size={22} className="text-[#1878F0]/40 mb-3" />
                <p className="text-lg text-[#0B1233] font-medium leading-relaxed mb-3">&ldquo;{cs.testimonial_quote}&rdquo;</p>
                {cs.testimonial_author && (
                  <p className="text-sm text-[#5A6380]">, {cs.testimonial_author}</p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-[#E5E9F2]">
            <Link href="/contact" className="btn-primary" prefetch={false}>Get Results Like These <ArrowRight size={16} /></Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-[#5A6380] hover:text-[#0B1233] transition-colors" prefetch={false}>
              <ArrowLeft size={14} /> All case studies
            </Link>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section-py bg-[#F4F7FC]">
          <div className="container-custom max-w-4xl">
            <span className="section-tag mb-5">More Results</span>
            <h2 className="section-heading mb-8">Other client outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {more.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`}
                  className="bg-white rounded-xl border border-[#E5E9F2] p-6 hover:border-[#1878F0] hover:shadow-md transition-all group" prefetch={false}>
                  <span className="text-xs font-mono font-semibold text-[#1878F0] uppercase tracking-wider">{c.industry}</span>
                  <h3 className="font-semibold text-[#0B1233] mt-2 leading-snug group-hover:text-[#1878F0] transition-colors">{c.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-[#1878F0] font-semibold mt-3">
                    Read case study <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <InquirySection source={`Case Study: ${cs.title}`} />
    </>
  );
}
