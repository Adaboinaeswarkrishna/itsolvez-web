import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { telHref } from "@/lib/validation";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata } from "@/components/SEO";
import { getLocationsPage, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("locations");
  return buildMetadata({
    title: seo?.meta_title || "ITSolvez Locations — Mumbai HQ, Global Software Delivery",
    description: seo?.meta_description || "Mumbai-based software company serving UAE, UK, USA, Singapore, Australia and global clients.",
    keywords: seo?.meta_keywords || ["ITSolvez Mumbai office", "software company Mira Road", "IT company Mumbai", "global software delivery"],
    slug: "locations",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default async function LocationsPage() {
  const page = await getLocationsPage().catch(() => null);

  const heroSubtitle = page?.hero_subtitle ?? "Our primary office is in Mira Road East, Mumbai. We serve clients across India remotely and provide on-site support in Mumbai and beyond.";
  const officeLabel = page?.office_label ?? "Registered Office";
  const officeAddress = page?.office_address ?? `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} — ${siteConfig.address.postal}, India`;
  const officePhone = page?.office_phone ?? siteConfig.phone;
  const officeEmail = page?.office_email ?? siteConfig.email;
  const officeHours = page?.office_hours ?? "Monday – Saturday, 9:00 AM – 6:00 PM IST";
  const office247Note = page?.office_24x7_note ?? "24/7 support available on managed-IT plans";
  const coverageAreas = page?.coverage_areas?.map(a => a.value) ?? [
    { region: "Mumbai (HQ)", coverage: "On-site + remote support. Full managed IT, cloud, cybersecurity, and project delivery." },
    { region: "Pune", coverage: "On-site support for managed IT clients. Remote delivery for all services." },
    { region: "Pan-India", coverage: "Remote-first IT support, cloud management, cybersecurity and digital services across India." },
    { region: "International", coverage: "Remote delivery for clients in the UK, UAE, USA, Singapore and other markets." },
  ];

  const localBizSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ITSolvez",
    url: "https://itsolvez.com",
    telephone: officePhone,
    email: officeEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postal,
      addressCountry: "IN",
    },
    areaServed: ["Mumbai", "India", "Global"],
  };

  return (
    <>
      <JsonLd data={localBizSchema} />

      <PageHero
        tag="Our Locations"
        title="Headquartered in Mumbai."
        titleAccent="Serving India and beyond."
        subtitle={heroSubtitle}
        bgImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading mb-8">Our office</h2>
              <div className="card-service bg-white space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0B1233] text-sm mb-1">{officeLabel}</div>
                    <div className="text-sm text-[#5A6380] leading-relaxed whitespace-pre-line">{officeAddress}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1878F0] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#0B1233] text-sm mb-0.5">Phone</div>
                    <a href={telHref(officePhone)} className="text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors">{officePhone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#1878F0] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#0B1233] text-sm mb-0.5">Email</div>
                    <a href={`mailto:${officeEmail}`} className="text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors">{officeEmail}</a>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-xs text-[#5A6380] font-mono uppercase tracking-wider mb-2">Business hours</div>
                  <div className="text-sm text-[#0B1233]">{officeHours}</div>
                  {office247Note && <div className="text-sm text-[#5A6380] mt-1">{office247Note}</div>}
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary" prefetch={false}>Get in Touch <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div>
              <h2 className="section-heading mb-8">Service coverage</h2>
              <div className="space-y-4">
                {coverageAreas.map((item) => (
                  <div key={item.region} className="card-service bg-white flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1878F0] flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-semibold text-[#0B1233] text-sm mb-1">{item.region}</div>
                      <div className="text-sm text-[#5A6380] leading-relaxed">{item.coverage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InquirySection source="Page: Locations" />

    </>
  );
}
