import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown, IndianRupee } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import CertTrustStrip from "@/components/CertTrustStrip";
import { JsonLd, buildMetadata, breadcrumbSchema, faqSchema } from "@/components/SEO";
import { hireRoles, getHireRoleBySlug } from "@/lib/data/hire-roles";

export const revalidate = 3600;

export function generateStaticParams() {
  return hireRoles.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  const data = getHireRoleBySlug(role);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle, description: data.metaDescription, keywords: data.keywords,
    slug: `hire/${data.slug}`, ogImage: "/og-image.png",
  });
}

export default async function HireRolePage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const data = getHireRoleBySlug(role);
  if (!data) notFound();

  // Rotate rather than always slicing the first 4 — a fixed slice(0, 4) means roles past
  // index 4 never get linked to from any other role page (0 inbound internal links).
  const idx = hireRoles.findIndex((r) => r.slug === data.slug);
  const total = hireRoles.length;
  const others = Array.from({ length: 4 }, (_, i) => hireRoles[(idx + 1 + i) % total]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Hire Developers", url: "https://itsolvez.com/hire/" },
        { name: data.role, url: `https://itsolvez.com/hire/${data.slug}/` },
      ])} />
      <JsonLd data={faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <PageHero
        tag="IT Staff Augmentation"
        title={data.h1}
        titleAccent={data.h1Accent}
        subtitle={data.intro}
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hire Developers", href: "/hire" }, { label: data.role }]}
        waveFill="#F4F7FC"
      />

      {/* Use cases */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">Where {data.roleShort} developers fit</span>
          <h2 className="section-heading mb-8">What you'd hire a {data.roleShort} developer for</h2>
          <ul className="space-y-3 mb-12">
            {data.useCases.map((u) => (
              <li key={u} className="flex items-start gap-3 text-[#39415C]">
                <CheckCircle2 size={18} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                {u}
              </li>
            ))}
          </ul>

          <span className="section-tag mb-5">What you get</span>
          <h2 className="section-heading mb-8">A developer, not a black box</h2>
          <ul className="space-y-3">
            {data.whatYouGet.map((w) => (
              <li key={w} className="flex items-start gap-3 text-[#39415C]">
                <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">Pricing</span>
          <h2 className="section-heading mb-8">Monthly rates by seniority</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Junior (1–2 yrs)", rate: data.rateJunior },
              { label: "Mid-level (3–5 yrs)", rate: data.rateMid },
              { label: "Senior (6+ yrs)", rate: data.rateSenior },
            ].map((t) => (
              <div key={t.label} className="bg-white rounded-2xl border border-[#E5E9F2] p-6 text-center">
                <IndianRupee size={20} className="text-[#1878F0] mx-auto mb-3" />
                <div className="font-display text-lg font-black text-[#0B1233] mb-1">{t.rate}</div>
                <div className="text-sm text-[#5A6380]">{t.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5A6380] mt-5 text-center">Indicative monthly rates, fixed for the engagement — no hourly tracking overhead. Final rate depends on specific skill requirements.</p>
        </div>
      </section>

      <CertTrustStrip heading={`${data.roleShort} developers, delivered under certified process`} />

      {/* FAQs */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <span className="section-tag mb-5">FAQ</span>
          <h2 className="section-heading mb-8">Common questions</h2>
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <details key={f.q} className="bg-[#F4F7FC] rounded-xl border border-[#E5E9F2] p-5 group">
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

      {/* Other roles */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-4xl">
          <span className="section-tag mb-5">Other Roles</span>
          <h2 className="section-heading mb-8">Also hiring for another stack?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((r) => (
              <Link key={r.slug} href={`/hire/${r.slug}`}
                className="bg-white rounded-xl border border-[#E5E9F2] p-5 hover:border-[#1878F0] hover:shadow-md transition-all flex items-center justify-between group" prefetch={false}>
                <span className="font-semibold text-[#0B1233] group-hover:text-[#1878F0] transition-colors">{r.role}</span>
                <ArrowRight size={16} className="text-[#1878F0]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquirySection source={`Hire: ${data.role}`}
        heading={`Hire a ${data.roleShort} developer`}
        subheading="Tell us your requirement — we short-list a matching developer for you to interview within days." />
    </>
  );
}
