import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, Download, ExternalLink, FileCheck2, ShieldCheck, Stamp } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema, orgSchema } from "@/components/SEO";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("certifications");
  return buildMetadata({
    title: seo?.meta_title || "ISO 9001, 27001 and 20000-1 Certified IT Company | ITSolvez",
    description: seo?.meta_description || "Independently certified to ISO 9001:2015, ISO 27001:2022 and ISO 20000-1:2018 by Anglia Compliance Group, view and verify our certificates.",
    keywords: seo?.meta_keywords || ["ISO certified IT company India", "ISO 27001 certified IT services", "ISO 9001 software company", "ISO 20000-1 managed IT services", "certified IT company Mumbai"],
    slug: "certifications",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const CERTS = [
  {
    standard: "ISO 9001:2015",
    scheme: "Quality Management System (QMS)",
    badge: "/badges/iso-9001.svg",
    preview: "/certificates/iso-9001-2015-preview.webp",
    pdf: "/certificates/iso-9001-2015.pdf",
    number: "25-07-21156543",
    color: "#1878F0",
    meaning: "Our delivery processes, from requirement gathering to deployment and support, are documented, measured and continually improved. Every project follows the same audited quality framework.",
    covers: ["Consistent, repeatable project delivery", "Documented processes and accountability", "Continuous improvement cycles", "Customer-satisfaction driven"],
  },
  {
    standard: "ISO 27001:2022",
    scheme: "Information Security Management System (ISMS)",
    badge: "/badges/iso-27001.svg",
    preview: "/certificates/iso-27001-2022-preview.webp",
    pdf: "/certificates/iso-27001-2022.pdf",
    number: "25-07-21156544",
    color: "#F04830",
    meaning: "Your data, source code and infrastructure credentials are protected by an audited security management system, risk assessments, access controls, incident response and staff security training.",
    covers: ["Audited data and access controls", "Risk assessment and treatment", "Incident response procedures", "Client confidentiality by design"],
  },
  {
    standard: "ISO 20000-1:2018",
    scheme: "IT Service Management System (ITSMS)",
    badge: "/badges/iso-20000.svg",
    preview: "/certificates/iso-20000-1-2018-preview.webp",
    pdf: "/certificates/iso-20000-1-2018.pdf",
    number: "25-07-21156545",
    color: "#5B3FC8",
    meaning: "Our managed IT and support services run on the international standard for IT service management, SLA governance, change management, and service continuity are independently audited.",
    covers: ["SLA-governed service delivery", "Change and release management", "Service continuity and availability", "Measurable service quality"],
  },
];

const DETAILS = [
  { label: "Issued by", value: "Anglia Compliance Group, UK" },
  { label: "Date of certification", value: "9 July 2026" },
  { label: "1st surveillance audit", value: "on or before 9 July 2027" },
  { label: "2nd surveillance audit", value: "on or before 9 July 2028" },
  { label: "Valid until", value: "9 July 2029" },
];

const VERIFY_URL = "https://www.angliacompliance.uk/verify-certificate";

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Certifications", url: "https://itsolvez.com/certifications/" },
      ])} />

      <PageHero
        tag="Certified and Accredited"
        title="Independently audited."
        titleAccent="Internationally certified."
        subtitle="ITSolvez holds three internationally recognised ISO certifications covering quality, information security and IT service management, assessed and issued by Anglia Compliance Group, UK. Every certificate below is public and independently verifiable."
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Certifications" }]}
      />

      {/* Badge strip */}
      <section className="bg-[#060B24] border-b border-white/5">
        <div className="container-custom py-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {CERTS.map((c) => (
            <a key={c.standard} href={`#${c.number}`} className="flex items-center gap-4 group">
              <Image src={c.badge} alt={`${c.standard} certified seal`} width={72} height={72} className="w-16 h-16 sm:w-[72px] sm:h-[72px] drop-shadow-[0_0_18px_rgba(212,166,67,0.35)] group-hover:scale-105 transition-transform" />
              <span className="text-left">
                <span className="block font-display font-bold text-white group-hover:text-[#F5D06F] transition-colors">{c.standard}</span>
                <span className="block text-xs text-[#EAF0FA]/50">{c.scheme.split(" (")[0]}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag mb-5">Our Certificates</span>
            <h2 className="section-heading mb-4">Three standards. One accountable IT partner.</h2>
            <p className="text-[#5A6380] leading-relaxed">
              Certification isn&apos;t a logo on a slide, it&apos;s a recurring, independent audit of how we actually work.
              Click any certificate to view the original PDF, or verify it directly with the certification body.
            </p>
          </div>

          <div className="space-y-16">
            {CERTS.map((c, i) => (
              <div key={c.standard} id={c.number} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28">
                {/* Certificate preview */}
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View the original ${c.standard} certificate (PDF)`}
                  className={`relative block rounded-2xl overflow-hidden border border-[#E3EAF6] shadow-[0_20px_60px_-20px_rgba(6,11,36,0.25)] hover:shadow-[0_28px_70px_-18px_rgba(24,120,240,0.35)] hover:-translate-y-1 transition-all group ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={c.preview}
                    alt={`${c.standard} certificate of registration issued to ITSolvez by Anglia Compliance Group`}
                    width={800}
                    height={1132}
                    className="w-full h-auto"
                  />
                  <span className="absolute inset-0 bg-[#060B24]/0 group-hover:bg-[#060B24]/40 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white text-[#060B24] text-sm font-semibold px-5 py-2.5 rounded-full">
                      <FileCheck2 size={16} /> View original PDF
                    </span>
                  </span>
                </a>

                {/* Details */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <Image src={c.badge} alt={`${c.standard} certification seal`} width={64} height={64} className="w-16 h-16 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-[#060B24]">{c.standard}</h3>
                      <p className="text-sm font-semibold" style={{ color: c.color }}>{c.scheme}</p>
                    </div>
                  </div>

                  <p className="text-[#5A6380] leading-relaxed mb-6">{c.meaning}</p>

                  <ul className="grid sm:grid-cols-2 gap-2.5 mb-7">
                    {c.covers.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[#39415C]">
                        <BadgeCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color: c.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl bg-[#F4F7FC] border border-[#E3EAF6] p-5 mb-7">
                    <div className="flex items-center justify-between gap-4 text-sm py-1.5 border-b border-[#E3EAF6]">
                      <span className="text-[#5A6380]">Certificate number</span>
                      <span className="font-mono font-semibold text-[#060B24]">{c.number}</span>
                    </div>
                    {DETAILS.map((d) => (
                      <div key={d.label} className="flex items-center justify-between gap-4 text-sm py-1.5 border-b border-[#E3EAF6] last:border-0">
                        <span className="text-[#5A6380]">{d.label}</span>
                        <span className="font-semibold text-[#060B24] text-right">{d.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href={c.pdf} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1878F0] hover:bg-[#0F5FC7] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
                      <Download size={16} /> Download certificate
                    </a>
                    <a href={VERIFY_URL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#D7E0F0] hover:border-[#1878F0] hover:text-[#1878F0] text-[#39415C] text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
                      <ShieldCheck size={16} /> Verify with Anglia Compliance <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to verify */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag mb-5">Independent Verification</span>
              <h2 className="section-heading mb-5">Don&apos;t take our word for it, verify it.</h2>
              <p className="text-[#5A6380] leading-relaxed mb-6">
                Every ITSolvez certificate is registered with Anglia Compliance Group and can be verified online in under a minute.
                Each certificate also carries a QR code that links straight to the verification portal.
              </p>
              <ol className="space-y-4 mb-8">
                {[
                  { icon: ExternalLink, text: <>Open the Anglia Compliance verification portal at <a href={VERIFY_URL} target="_blank" rel="noopener noreferrer" className="text-[#1878F0] font-semibold hover:underline">angliacompliance.uk/verify-certificate</a></> },
                  { icon: Stamp, text: <>Enter the certificate number, e.g. <span className="font-mono font-semibold text-[#060B24]">25-07-21156543</span> for ISO 9001:2015</> },
                  { icon: CalendarCheck, text: <>Confirm the certificate is issued to <strong className="text-[#060B24]">ITSOLVEZ</strong>, Mira Road East, Mumbai and valid until 9 July 2029</> },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#1878F0]/10 text-[#1878F0] flex items-center justify-center flex-shrink-0">
                      <step.icon size={16} />
                    </span>
                    <span className="text-sm text-[#39415C] leading-relaxed pt-2">{step.text}</span>
                  </li>
                ))}
              </ol>
              <a href={VERIFY_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#060B24] hover:bg-[#101736] text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors">
                Verify our certificates <ArrowRight size={16} />
              </a>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-[#D4A643]/15 blur-2xl" aria-hidden />
                <Image
                  src="/certificates/anglia-compliance-seal.png"
                  alt="Anglia Compliance Group, Global Trust, Certified seal"
                  width={280}
                  height={280}
                  className="relative w-56 h-56 sm:w-72 sm:h-72 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-[#060B24]">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-5 mb-8">
            {CERTS.map((c) => (
              <Image key={c.standard} src={c.badge} alt={`${c.standard} seal`} width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-4">
            Work with a certified IT partner
          </h2>
          <p className="text-[#EAF0FA]/60 leading-relaxed mb-8">
            Quality, security and service management, audited to international standards, so you don&apos;t have to hope for the best.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-[#1878F0] hover:bg-[#0F5FC7] text-white font-semibold px-8 py-4 rounded-lg transition-colors" prefetch={false}>
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <InquirySection source="Page: Certifications" />

    </>
  );
}
