import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";
import { industries, getIndustryBySlug } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema, faqSchema } from "@/components/SEO";
import { getIndustry, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [seo, wagtailIndustry] = await Promise.all([
    getPageSEO(`industries/${slug}`),
    getIndustry(slug).catch(() => null),
  ]);
  const staticIndustry = getIndustryBySlug(slug);
  if (!seo && !wagtailIndustry && !staticIndustry) return {};
  return buildMetadata({
    title: seo?.meta_title || wagtailIndustry?.seo_title || staticIndustry?.metaTitle || "",
    description: seo?.meta_description || wagtailIndustry?.search_description || staticIndustry?.metaDescription || "",
    keywords: seo?.meta_keywords,
    slug: `industries/${slug}`,
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const wagtailIndustry = await getIndustry(slug).catch(() => null);
  const staticIndustry = getIndustryBySlug(slug);

  if (!wagtailIndustry && !staticIndustry) notFound();

  // Compose display data — prefer Wagtail, fall back to static
  const title = wagtailIndustry?.title ?? staticIndustry!.title;
  const shortTitle = staticIndustry?.shortTitle ?? title;
  const h1 = staticIndustry?.h1 ?? wagtailIndustry?.title ?? title;
  const description = wagtailIndustry?.tagline ?? staticIndustry!.description;
  const intro = wagtailIndustry?.overview ?? staticIndustry!.intro;

  // Challenges: Wagtail has [{type, value: {title, description}}] or static has string[]
  const challenges: string[] = wagtailIndustry?.challenges?.length
    ? wagtailIndustry.challenges.map((c: { value: { title: string; description: string } }) =>
        `${c.value.title}: ${c.value.description}`)
    : (staticIndustry?.challenges ?? []);

  // Solutions: Wagtail has our_solutions as text, static has string[]
  const solutions: string[] = wagtailIndustry?.our_solutions
    ? wagtailIndustry.our_solutions.split("\n").filter(Boolean)
    : (staticIndustry?.solutions ?? []);

  // Related services from static data (services slugs)
  const relatedServices = services.filter((s) => (staticIndustry?.services ?? []).includes(s.slug));

  // FAQ from static data (Wagtail model doesn't have FAQ yet)
  const faqs = staticIndustry?.faq ?? [];

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://itsolvez.com/" },
      { name: "Industries", url: "https://itsolvez.com/industries/" },
      { name: title, url: `https://itsolvez.com/industries/${slug}/` },
    ]),
    ...(faqs.length ? [faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <PageHero
        tag="Industry Solutions"
        title={h1}
        subtitle={description}
        bgImage={`${staticIndustry?.heroImage ?? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"}?auto=format&fit=crop&w=1920&q=80`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: shortTitle },
        ]}
      >
        <Link href="/contact" className="btn-primary" prefetch={false}>
          Book a Free Consultation <ArrowRight size={16} />
        </Link>
      </PageHero>

      {/* Intro */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-4xl">
          {intro.split("\n\n").map((para, i) => (
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
            {challenges.length > 0 && (
              <div>
                <span className="section-tag mb-5">Industry Challenges</span>
                <h2 className="section-heading mb-8">What your sector faces</h2>
                <ul className="space-y-3">
                  {challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white border border-[#F04830]/15 rounded-xl p-4">
                      <div className="w-6 h-6 rounded-full bg-[#F04830]/10 flex items-center justify-center flex-shrink-0">
                        <ChevronRight size={13} className="text-[#F04830]" />
                      </div>
                      <span className="text-sm text-[#0B1233] leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {solutions.length > 0 && (
              <div>
                <span className="section-tag mb-5">Our Solutions</span>
                <h2 className="section-heading mb-8">How we address them</h2>
                <ul className="space-y-3">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white border border-[#1878F0]/15 rounded-xl p-4">
                      <CheckCircle2 size={20} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0B1233] leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="section-tag mb-4">Related Services</span>
              <h2 className="section-heading">Services we deliver for {shortTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card-service group flex flex-col"
                 prefetch={false}>
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
      {faqs.length > 0 && (
        <section className="section-py bg-[#F4F7FC]">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="section-tag mb-4">FAQ</span>
              <h2 className="section-heading">Common questions</h2>
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
            Let&apos;s build your {shortTitle} IT strategy
          </h2>
          <p className="text-[#EAF0FA]/65 max-w-lg mx-auto mb-8">
            Book a free assessment and we&apos;ll map your current state to where
            you need to be — on your terms and timeline.
          </p>
          <Link href="/contact" className="btn-primary" prefetch={false}>
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <InquirySection source={`Industry: ${title}`} />

    </>
  );
}
