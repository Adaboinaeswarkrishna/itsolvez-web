import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://itsolvez.com/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://itsolvez.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "ITSolvez Pvt Ltd",
      url: "https://itsolvez.com",
    },
    areaServed: ["India", "Global"],
    url: `https://itsolvez.com/services/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://itsolvez.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://itsolvez.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://itsolvez.com/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <PageHero
        tag="IT Services"
        title={service.h1}
        subtitle={service.description}
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      >
        <Link href="/contact" className="btn-primary">
          {service.cta} <ArrowRight size={16} />
        </Link>
        <a href={`tel:${siteConfig.phone}`} className="btn-ghost">
          <Phone size={14} /> {siteConfig.phone}
        </a>
      </PageHero>

      {/* Intro */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {service.intro.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#5A6380] leading-relaxed text-base mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              {service.keywords.slice(0, 5).map((kw) => (
                <div key={kw} className="flex items-center gap-2 text-sm text-[#5A6380]">
                  <CheckCircle2 size={14} className="text-[#1878F0] flex-shrink-0" />
                  {kw.charAt(0).toUpperCase() + kw.slice(1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-tag mb-5">What&apos;s Included</span>
              <h2 className="section-heading mb-8">Everything you get</h2>
              <ul className="space-y-4">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1878F0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={11} className="text-[#1878F0]" />
                    </div>
                    <span className="text-sm text-[#0B1233] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="section-tag mb-5">Why It Matters</span>
              <h2 className="section-heading mb-8">The business case</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0B1233] leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="section-tag mb-4">FAQ</span>
              <h2 className="section-heading">Frequently asked questions</h2>
            </div>
            <div className="space-y-3">
              {service.faq.map((item) => (
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
            Ready to get started?
          </h2>
          <p className="text-[#EAF0FA]/65 max-w-lg mx-auto mb-8">
            Book a free assessment and we&apos;ll give you a clear picture of
            how {service.shortTitle.toLowerCase()} can work for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            {service.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
