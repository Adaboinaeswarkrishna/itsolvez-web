import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import CertTrustStrip from "@/components/CertTrustStrip";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";
import { hireRoles } from "@/lib/data/hire-roles";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Hire Dedicated Developers in India | ITSolvez",
    description: "Hire vetted, dedicated developers from India, React, Node.js, Flutter, Python, full-stack, UI/UX and WordPress. Interview before you commit.",
    keywords: ["hire dedicated developers india", "hire developers india", "it staff augmentation india", "offshore development team india", "remote developers for hire india"],
    slug: "hire",
    ogImage: "/og-image.png",
  });
}

export default function HireIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Hire Developers", url: "https://itsolvez.com/hire/" },
      ])} />

      <PageHero
        tag="IT Staff Augmentation"
        title="Hire dedicated developers"
        titleAccent="in India."
        subtitle="Vetted developers embedded in your team on flexible monthly terms, you interview before you commit, direct access from day one, no recruitment overhead. ISO 9001-certified delivery process."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hire Developers" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-tag mb-5">Choose a Role</span>
            <h2 className="section-heading mb-4">Which stack are you hiring for?</h2>
            <p className="text-[#5A6380] leading-relaxed">
              Every role below is a real, distinct skillset, matched to your project, not a generic
              "developer" swap. Rates, use cases and FAQs are specific to each.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hireRoles.map((r) => (
              <Link key={r.slug} href={`/hire/${r.slug}`}
                className="bg-[#F4F7FC] rounded-2xl border border-[#E5E9F2] p-6 hover:border-[#1878F0] hover:shadow-lg hover:-translate-y-0.5 transition-all group" prefetch={false}>
                <Users size={20} className="text-[#1878F0] mb-3" />
                <h3 className="font-semibold text-[#0B1233] mb-2 group-hover:text-[#1878F0] transition-colors">{r.role}</h3>
                <p className="text-xs text-[#5A6380] mb-4 line-clamp-2">{r.intro}</p>
                <span className="text-sm text-[#1878F0] font-semibold flex items-center gap-1">
                  View rates and FAQs <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CertTrustStrip heading="Certified process, not just a résumé match" />

      <InquirySection source="Page: Hire Developers Index"
        heading="Not sure which role fits your project?"
        subheading="Tell us what you're building, we'll recommend the right role and rate in a free consultation." />
    </>
  );
}
