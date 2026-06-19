import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2, BarChart2 } from "lucide-react";
import { industries } from "@/lib/data/industries";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Industries We Serve — Banking, Manufacturing, Healthcare & More",
  description:
    "ITSolvez delivers industry-specific IT services for banking, capital markets, manufacturing, healthcare, higher education, logistics and enterprise technology.",
  alternates: { canonical: "https://itsolvez.com/industries" },
};

const iconMap: Record<string, React.ElementType> = {
  Landmark, Factory, HeartPulse, GraduationCap, Truck, Building2, BarChart2,
};

export default function IndustriesPage() {
  return (
    <>
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
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Building2;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="card-service group flex flex-col bg-white"
                >
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
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
