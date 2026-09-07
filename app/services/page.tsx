import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Monitor, Cloud, Shield, Code2, Globe, Smartphone,
  TrendingUp, Users, Server, GitMerge, Lightbulb, Zap,
} from "lucide-react";
import { services as fallbackServices } from "@/lib/data/services";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema, serviceSchema } from "@/components/SEO";
import { getServices, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("services");
  return buildMetadata({
    title: seo?.meta_title || "IT Services, Managed IT, Cloud and Software | ITSolvez",
    description: seo?.meta_description || "ITSolvez delivers custom software development, mobile app development, web development, ERP, CRM, HRMS and digital marketing worldwide.",
    keywords: seo?.meta_keywords || ["custom software development services", "mobile app development services", "ERP development services", "CRM software development", "HRMS software development"],
    slug: "services",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const iconMap: Record<string, React.ElementType> = {
  Monitor, Cloud, Shield, Code2, Globe, Smartphone,
  TrendingUp, Users, Server, GitMerge, Lightbulb, HeadphonesIcon: Smartphone,
};

export default async function ServicesPage() {
  let serviceList: { slug: string; title: string; icon?: string; description?: string; tagline?: string }[] = fallbackServices.map(s => ({
    slug: s.slug, title: s.title, icon: s.icon, description: s.description,
  }));

  try {
    const data = await getServices();
    if (data?.length) {
      serviceList = data.map((s) => ({
        slug: s.slug, title: s.title, icon: s.icon,
        description: s.tagline || s.overview?.slice(0, 160),
      }));
    }
  } catch {}

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://itsolvez.com/" },
      { name: "IT Services", url: "https://itsolvez.com/services/" },
    ]),
    ...serviceList.map((s) => serviceSchema(s.title, s.description ?? "", s.slug)),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <PageHero
        tag="IT Services"
        title="Every IT challenge,"
        titleAccent="one accountable partner."
        subtitle="Twelve specialist service lines, one team that knows your environment. From the infrastructure your business runs on to the software your customers use."
        bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service) => {
              const Icon = iconMap[service.icon ?? ""] ?? Zap;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-service group flex flex-col bg-white"
                 prefetch={false}>
                  <div className="service-icon mb-4">
                    <Icon size={22} />
                  </div>
                  <h2 className="font-semibold text-lg text-[#0B1233] mb-2 group-hover:text-[#1878F0] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#5A6380] leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#1878F0]">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#060B24] grid-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-[#EAF0FA]/60 max-w-xl mx-auto mb-8">
            Book a free IT assessment and we&apos;ll tell you exactly what would make the biggest difference for your business.
          </p>
          <Link href="/contact" className="btn-primary" prefetch={false}>
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <InquirySection source="Page: Services Index" />

    </>
  );
}
