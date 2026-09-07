import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Phone } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";
import { telHref } from "@/lib/validation";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/SEO";
import { getService, getPageSEO } from "@/lib/wagtail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [seo, wagtailService] = await Promise.all([
    getPageSEO(`services/${slug}`),
    getService(slug).catch(() => null),
  ]);
  const staticService = getServiceBySlug(slug);

  if (!seo && !wagtailService && !staticService) return {};

  return buildMetadata({
    title: seo?.meta_title || wagtailService?.seo_title || staticService?.metaTitle || "",
    description: seo?.meta_description || wagtailService?.search_description || staticService?.metaDescription || "",
    keywords: seo?.meta_keywords,
    slug: `services/${slug}`,
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export const revalidate = 60;

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const staticService = getServiceBySlug(slug);
  const wagtailService = await getService(slug).catch(() => null);

  if (!wagtailService && !staticService) notFound();

  // Compose the data — prefer Wagtail, fall back to static
  const title = wagtailService?.title ?? staticService!.title;
  const description = wagtailService?.tagline ?? staticService!.description;
  const overview = wagtailService?.overview ?? staticService!.intro;
  const ctaText = wagtailService?.cta_text ?? staticService!.cta;
  const shortTitle = staticService?.shortTitle ?? title;

  // Benefits from Wagtail StreamField or static data
  const benefits: string[] = wagtailService?.key_benefits?.map((b) => b.value.title + ": " + b.value.description) ?? staticService?.benefits ?? [];

  // Process steps from Wagtail or static included list
  const steps: string[] = wagtailService?.our_process?.map((s) => `${s.value.step_number}. ${s.value.title}: ${s.value.description}`) ?? staticService?.included ?? [];

  // FAQ from Wagtail API or static data
  const faqs: { q: string; a: string }[] = staticService?.faq ?? [];
  const deepDive: { heading: string; body: string }[] = staticService?.deepDive ?? [];

  const schemas = [
    serviceSchema(title, description, slug),
    breadcrumbSchema([
      { name: "Home", url: "https://itsolvez.com/" },
      { name: "Services", url: "https://itsolvez.com/services/" },
      { name: title, url: `https://itsolvez.com/services/${slug}/` },
    ]),
    ...(faqs.length ? [faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <PageHero
        tag="IT Services"
        title={staticService?.h1 ?? title}
        subtitle={description}
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: shortTitle },
        ]}
      >
        <Link href="/contact" className="btn-primary" prefetch={false}>
          {ctaText} <ArrowRight size={16} />
        </Link>
        <a href={telHref(siteConfig.phone)} className="btn-ghost">
          <Phone size={14} /> {siteConfig.phone}
        </a>
      </PageHero>

      {/* Overview */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {overview.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#5A6380] leading-relaxed text-base mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              {(staticService?.keywords ?? []).slice(0, 5).map((kw) => (
                <div key={kw} className="flex items-center gap-2 text-sm text-[#5A6380]">
                  <CheckCircle2 size={14} className="text-[#1878F0] flex-shrink-0" />
                  {kw.charAt(0).toUpperCase() + kw.slice(1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included / Benefits */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-tag mb-5">What&apos;s Included</span>
              <h2 className="section-heading mb-8">Everything you get</h2>
              <ol className="relative">
                {steps.map((item, i) => {
                  const match = item.match(/^(\d+)\.\s*([^:]+):\s*(.+)$/);
                  const isLast = i === steps.length - 1;
                  return (
                    <li key={item} className="relative flex items-start gap-4 pb-8 last:pb-0">
                      {!isLast && (
                        <span className="absolute left-[15px] top-8 bottom-0 w-px bg-[#D7E0F0]" aria-hidden />
                      )}
                      <div className="w-8 h-8 rounded-full bg-[#1878F0] text-white flex items-center justify-center flex-shrink-0 font-display font-bold text-sm">
                        {match ? match[1] : i + 1}
                      </div>
                      <div>
                        {match ? (
                          <>
                            <p className="font-semibold text-[#0B1233] mb-1">{match[2]}</p>
                            <p className="text-sm text-[#5A6380] leading-relaxed">{match[3]}</p>
                          </>
                        ) : (
                          <p className="text-sm text-[#0B1233] leading-relaxed pt-1.5">{item}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div>
              <span className="section-tag mb-5">Why It Matters</span>
              <h2 className="section-heading mb-8">The business case</h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
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

      {/* Deep dive */}
      {deepDive.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-custom max-w-3xl">
            <span className="section-tag mb-5">Guide</span>
            <h2 className="section-heading mb-10">A closer look at {shortTitle.toLowerCase()}</h2>
            <div className="space-y-10">
              {deepDive.map((d) => (
                <div key={d.heading}>
                  <h3 className="font-display text-lg font-bold text-[#0B1233] mb-3">{d.heading}</h3>
                  <p className="text-[#5A6380] leading-relaxed text-base">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="section-tag mb-4">FAQ</span>
              <h2 className="section-heading">Frequently asked questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((item) => (
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
            Book a free assessment and we&apos;ll give you a clear picture of how {shortTitle.toLowerCase()} can work for your business.
          </p>
          <Link href="/contact" className="btn-primary" prefetch={false}>
            {ctaText} <ArrowRight size={16} />
          </Link>
          {slug === "it-staff-augmentation" && (
            <Link href="/hire" className="inline-flex items-center gap-2 ml-4 text-sm font-semibold text-white/80 hover:text-white transition-colors" prefetch={false}>
              Browse roles and rates <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>

      <InquirySection source={`Service: ${shortTitle}`} />

    </>
  );
}
