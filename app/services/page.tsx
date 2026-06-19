import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Monitor, Cloud, Shield, Code2, Globe, Smartphone,
  TrendingUp, Users, Server, GitMerge, Lightbulb, Zap,
} from "lucide-react";
import { services } from "@/lib/data/services";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "IT Services — Managed IT, Cloud, Cybersecurity & More",
  description:
    "ITSolvez delivers 12 IT services: managed IT, cloud computing, cybersecurity, custom software, web and app development, digital marketing, IT consultancy and more. India-based, globally serving.",
  alternates: { canonical: "https://itsolvez.com/services" },
};

const iconMap: Record<string, React.ElementType> = {
  Monitor, Cloud, Shield, Code2, Globe, Smartphone,
  TrendingUp, Users, Server, GitMerge, Lightbulb, HeadphonesIcon: Smartphone,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://itsolvez.com" },
    { "@type": "ListItem", position: 2, name: "IT Services", item: "https://itsolvez.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <PageHero
        tag="IT Services"
        title="Every IT challenge,"
        titleAccent="one accountable partner."
        subtitle="Twelve specialist service lines, one team that knows your environment. From the infrastructure your business runs on to the software your customers use."
        bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Services grid */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Zap;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-service group flex flex-col bg-white"
                >
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

      {/* CTA */}
      <section className="section-py bg-[#060B24] grid-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-[#EAF0FA]/60 max-w-xl mx-auto mb-8">
            Book a free IT assessment and we&apos;ll tell you exactly what would
            make the biggest difference for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
