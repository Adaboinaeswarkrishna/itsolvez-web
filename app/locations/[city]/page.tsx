import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import CertTrustStrip from "@/components/CertTrustStrip";
import { JsonLd, buildMetadata, breadcrumbSchema, faqSchema } from "@/components/SEO";
import { cities, getCityBySlug } from "@/lib/data/cities";
import { pickCityHeroImage } from "@/lib/heroImagePool";

export const revalidate = 3600;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    slug: `locations/${data.slug}`,
    ogImage: "/og-image.png",
  });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Locations", url: "https://itsolvez.com/locations/" },
        { name: data.city, url: `https://itsolvez.com/locations/${data.slug}/` },
      ])} />
      <JsonLd data={faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <PageHero
        tag={`${data.city} · ${data.region}`}
        title={data.h1}
        titleAccent={data.h1Accent}
        subtitle={data.intro}
        bgImage={pickCityHeroImage(data.slug)}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: data.city }]}
        waveFill="#F4F7FC"
      />

      {/* Services */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">What we do in {data.city}</span>
            <h2 className="section-heading">Full-stack IT services, one accountable team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <Link key={s.title} href={s.href}
                className="bg-white rounded-2xl p-7 border border-[#E5E9F2] hover:shadow-lg hover:-translate-y-0.5 transition-all group" prefetch={false}>
                <CheckCircle2 size={22} className="text-[#1878F0] mb-4" />
                <h3 className="font-semibold text-[#0B1233] text-lg mb-2 group-hover:text-[#1878F0] transition-colors">{s.title}</h3>
                <p className="text-sm text-[#5A6380] mb-4">{s.desc}</p>
                <span className="text-sm text-[#1878F0] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local angle */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">Why {data.city} businesses choose ITSolvez</span>
          <h2 className="section-heading mb-5">Built for how {data.city} does business</h2>
          <p className="text-[#5A6380] leading-relaxed mb-8">{data.localAngle}</p>
          {data.digitalMarketingAngle && (
            <>
              <h3 className="font-semibold text-[#0B1233] text-lg mb-3">Digital marketing and SEO for {data.city} businesses</h3>
              <p className="text-[#5A6380] leading-relaxed mb-8">{data.digitalMarketingAngle}</p>
            </>
          )}
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary" prefetch={false}>Get a Free Consultation <ArrowRight size={16} /></Link>
            <a href="tel:+919967470207"
              className="inline-flex items-center gap-2 border border-[#D7E0F0] hover:border-[#1878F0] hover:text-[#1878F0] text-[#39415C] text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
              <Phone size={15} /> +91 9967470207
            </a>
          </div>
        </div>
      </section>

      <CertTrustStrip heading={`${data.city} businesses work with an ISO certified partner`} />

      {/* FAQs */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">FAQ</span>
          <h2 className="section-heading mb-8">Common questions from {data.city}</h2>
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-[#E5E9F2] p-5 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#0B1233] list-none">
                  {f.q}
                  <ChevronDown size={18} className="text-[#5A6380] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="text-sm text-[#5A6380] leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#5A6380] flex items-start gap-2">
            <MapPin size={15} className="text-[#1878F0] mt-0.5 flex-shrink-0" />
            Also serving: {cities.filter((c) => c.slug !== data.slug).slice(0, 6).map((c, i, arr) => (
              <span key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="text-[#1878F0] hover:underline" prefetch={false}>{c.city}</Link>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      <InquirySection source={`City: ${data.city}`} />

    </>
  );
}
