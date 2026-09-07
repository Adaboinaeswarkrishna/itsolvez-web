import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Clock, Phone, Mail, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import CertTrustStrip from "@/components/CertTrustStrip";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/SEO";
import { INTL_CORE_SERVICES, getIntlCitiesByCountry } from "@/lib/data/intl-cities";
import type { CountryPage } from "@/lib/data/countries";

export default function IntlCountryContent({ data }: { data: CountryPage }) {
  const cities = data.hasCities ? getIntlCitiesByCountry(data.slug) : [];

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: data.country, url: `https://itsolvez.com/${data.slug}/` },
      ])} />
      <JsonLd data={faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <PageHero
        tag={data.country}
        title={data.h1}
        titleAccent={data.h1Accent}
        subtitle={data.intro}
        bgImage={`${data.heroImage}?auto=format&fit=crop&w=1920&q=80`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: data.country }]}
        waveFill="#F4F7FC"
      />

      {/* Services */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Our Services in {data.country}</span>
            <h2 className="section-heading">What We Build for {data.adjective} Clients</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTL_CORE_SERVICES.map((s) => (
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

      {/* Why this country + regulation + overlap */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">Why {data.country} businesses choose an India-based team</span>
          <h2 className="section-heading mb-5">Built for how {data.country} does business</h2>
          {data.whyCountry.split("\n\n").map((p, i) => (
            <p key={i} className="text-[#5A6380] leading-relaxed mb-6">{p}</p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F4F7FC] rounded-2xl p-6 flex items-start gap-4">
              <ShieldCheck size={22} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#0B1233] mb-1.5">{data.regulation.name}</h3>
                <p className="text-sm text-[#5A6380] leading-relaxed">{data.regulation.note}</p>
              </div>
            </div>
            <div className="bg-[#F4F7FC] rounded-2xl p-6 flex items-start gap-4">
              <Clock size={22} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#0B1233] mb-1.5">Time zone overlap</h3>
                <p className="text-sm text-[#5A6380] leading-relaxed">{data.overlap}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary" prefetch={false}>Get a Free Consultation <ArrowRight size={16} /></Link>
            <Link href="/certifications"
              className="inline-flex items-center gap-2 border border-[#D7E0F0] hover:border-[#1878F0] hover:text-[#1878F0] text-[#39415C] text-sm font-semibold px-5 py-3 rounded-lg transition-colors" prefetch={false}>
              View and verify our ISO certificates
            </Link>
          </div>
        </div>
      </section>

      <CertTrustStrip heading={`${data.adjective} businesses work with an ISO certified partner`} />

      {/* Cities we serve */}
      {cities.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-custom max-w-4xl text-center">
            <span className="section-tag mb-4">Cities We Serve</span>
            <h2 className="section-heading mb-8">Local pages for your city</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((c) => (
                <Link key={c.slug} href={`/${data.slug}/${c.slug}`}
                  className="inline-flex items-center gap-2 border border-[#D7E0F0] hover:border-[#1878F0] hover:text-[#1878F0] text-[#39415C] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors" prefetch={false}>
                  {c.city} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">FAQ</span>
          <h2 className="section-heading mb-8">Common questions from {data.country}</h2>
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
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#0B1233] mb-4">Ready to Start Your {data.country} Project?</h2>
          <p className="text-[#5A6380] mb-8">Talk to our team about your requirements. We respond within 1 business day and offer a free consultation for {data.adjective} clients.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary" prefetch={false}>Get a Free Quote <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#5A6380]">
            <a href="tel:+919967470207" className="flex items-center gap-2 hover:text-[#1878F0]"><Phone size={15} /> +91 9967470207</a>
            <a href="mailto:info@itsolvez.com" className="flex items-center gap-2 hover:text-[#1878F0]"><Mail size={15} /> info@itsolvez.com</a>
          </div>
        </div>
      </section>

      <InquirySection source={`Country: ${data.country}`} />
    </>
  );
}
