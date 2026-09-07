import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2, BarChart2, Zap, ShoppingBag, Plane } from "lucide-react";
import { industries as fallbackIndustries } from "@/lib/data/industries";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";
import { getIndustries, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("industries");
  return buildMetadata({
    title: seo?.meta_title || "Industries We Serve — IT Solutions by Sector | ITSolvez",
    description: seo?.meta_description || "Custom software for healthcare, retail, education, travel, finance, logistics and more — industry-specific ERP, CRM and mobile app solutions.",
    keywords: seo?.meta_keywords || ["software development industries", "healthcare software", "retail ERP", "education management software", "travel software", "fintech software"],
    slug: "industries",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const iconMap: Record<string, React.ElementType> = {
  Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2, BarChart2, ShoppingBag, Plane,
};

export default async function IndustriesPage() {
  let industryList: { slug: string; title: string; icon?: string; description?: string; tagline?: string }[] = fallbackIndustries.map(i => ({
    slug: i.slug, title: i.title, icon: i.icon, description: i.description,
  }));

  try {
    const data = await getIndustries();
    if (data?.length) {
      industryList = data.map((i) => ({
        slug: i.slug, title: i.title, icon: i.icon, description: i.tagline || i.overview?.slice(0, 160),
      }));
    }
  } catch {}

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Industries", url: "https://itsolvez.com/industries/" },
      ])} />

      <PageHero
        tag="Industries We Serve"
        title="IT built for"
        titleAccent="your industry."
        subtitle="Every vertical has its own compliance obligations, infrastructure demands and risk profile. We know yours — and we design every engagement around it."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryList.map((industry) => {
              const Icon = iconMap[industry.icon ?? ""] ?? Zap;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="card-service group flex flex-col bg-white"
                 prefetch={false}>
                  <div className="service-icon mb-4">
                    <Icon size={22} />
                  </div>
                  <h2 className="font-semibold text-lg text-[#0B1233] mb-2 group-hover:text-[#1878F0] transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-[#5A6380] leading-relaxed flex-1">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#1878F0]">
                    Our approach <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            Don&apos;t see your industry?
          </h2>
          <p className="text-[#EAF0FA]/60 max-w-xl mx-auto mb-8">
            We work across all verticals. If your sector isn&apos;t listed, we&apos;ve almost certainly served a business like yours.
          </p>
          <Link href="/contact" className="btn-primary" prefetch={false}>
            Talk to an expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <InquirySection source="Page: Industries Index" />

    </>
  );
}
