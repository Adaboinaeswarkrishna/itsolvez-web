import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";
import { industries, getIndustryBySlug } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import PageHero from "@/components/layout/PageHero";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: `https://itsolvez.com/industries/${slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = services.filter((s) => industry.services.includes(s.slug));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://itsolvez.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://itsolvez.com/industries" },
      { "@type": "ListItem", position: 3, name: industry.title, item: `https://itsolvez.com/industries/${slug}` },
    ],
  };

  const faqSchema = industry.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: industry.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <PageHero
        tag="Industry Solutions"
        title={industry.h1}
        subtitle={industry.description}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.shortTitle },
        ]}
      >
        <Link href="/contact" className="btn-primary">
          Get a Free Assessment <ArrowRight size={16} />
        </Link>
      </PageHero>

      {/* Intro */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          {industry.intro.split("\n\n").map((para, i) => (
            <p key={i} className="text-[#5A6380] leading-relaxed text-base mb-5 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-tag mb-5">Industry Challenges</span>
              <h2 className="section-heading mb-8">What your sector faces</h2>
              <ul className="space-y-4">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F04830]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={11} className="text-[#F04830]" />
                    </div>
                    <span className="text-sm text-[#0B1233] leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="section-tag mb-5">Our Solutions</span>
              <h2 className="section-heading mb-8">How we address them</h2>
              <ul className="space-y-4">
                {industry.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0B1233] leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="section-tag mb-4">Related Services</span>
              <h2 className="section-heading">Services we deliver for {industry.shortTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card-service group flex flex-col"
                >
                  <h3 className="font-semibold text-[#0B1233] mb-2 group-hover:text-[#1878F0] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#5A6380] flex-1">{s.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[#1878F0] opacity-0 group-hover:opacity-100 transition-opacity">
                    View service <ChevronRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {industry.faq.length > 0 && (
        <section className="section-py bg-[#F4F7FC]">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="section-tag mb-4">FAQ</span>
              <h2 className="section-heading">Common questions</h2>
            </div>
            <div className="space-y-3">
              {industry.faq.map((item) => (
                <details key={item.q} className="faq-item group">
                  <summary className="font-semibold text-[#0B1233]">
                    {item.q}
                    <ChevronDown size={16} className="text-[#5A6380] flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="faq-body">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-py gradient-hero grid-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">
            Let&apos;s build your {industry.shortTitle} IT strategy
          </h2>
          <p className="text-[#EAF0FA]/65 max-w-lg mx-auto mb-8">
            Book a free assessment and we&apos;ll map your current state to where
            you need to be — on your terms and timeline.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
