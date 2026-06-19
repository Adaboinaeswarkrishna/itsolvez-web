import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, Globe, Zap } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About ITSolvez — Pune-Based IT Services Company",
  description:
    "ITSolvez Pvt Ltd is a Pune-based IT services company delivering managed IT, cloud, cybersecurity, custom software and digital services globally. Learn our story.",
  alternates: { canonical: "https://itsolvez.com/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://itsolvez.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://itsolvez.com/about" },
  ],
};

const values = [
  {
    icon: Zap,
    title: "Proactive, not reactive",
    description:
      "We prevent problems, not just fix them. Continuous monitoring and anticipatory maintenance mean your team rarely notices IT at all — because it just works.",
  },
  {
    icon: CheckCircle2,
    title: "Accountable by design",
    description:
      "SLAs, named engineers and monthly reporting you can take to the board. We measure ourselves by your outcomes, not our activity.",
  },
  {
    icon: Globe,
    title: "Vendor-honest",
    description:
      "We hold certifications with Microsoft, AWS and Google Cloud. Our recommendation is always what&apos;s right for your business, not what earns us the most partner revenue.",
  },
  {
    icon: Users,
    title: "One team, one point of contact",
    description:
      "Across every service, you deal with one team that knows your environment. No handoffs, no gaps, no re-explaining your setup from scratch.",
  },
];

const milestones = [
  { year: siteConfig.founded, event: "ITSolvez Pvt Ltd incorporated in Pune" },
  { year: "2018", event: "Launched managed IT services, first 20 clients" },
  { year: "2020", event: "Expanded to cloud and cybersecurity services" },
  { year: "2022", event: "Reached 5 countries served, launched custom software division" },
  { year: "2024", event: "100+ clients, launched digital marketing & AEO practice" },
  { year: "2026", event: "Full-stack IT partner for 120+ businesses across India and globally" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <PageHero
        tag="About ITSolvez"
        title="The IT partner that"
        titleAccent="takes ownership."
        subtitle={`ITSolvez Pvt Ltd is a Pune-headquartered IT services company delivering managed IT, cloud, cybersecurity, custom software and digital services to businesses across India and ${siteConfig.stats.countriesServed}+ countries.`}
        bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag mb-5">Our Story</span>
              <h2 className="section-heading mb-6">Built to solve what generic IT can&apos;t</h2>
              <div className="space-y-4 text-[#5A6380] leading-relaxed">
                <p>
                  ITSolvez was founded in {siteConfig.founded} with a simple observation: most
                  businesses were either under-served by their IT provider or
                  paying for complexity they didn&apos;t need. We set out to build the
                  alternative — a firm that combines enterprise-grade expertise
                  with the accountability and responsiveness that SMEs actually
                  need.
                </p>
                <p>
                  Today we serve {siteConfig.stats.clientsServed}+ clients across banking,
                  manufacturing, healthcare, logistics and technology — from
                  Pune-based SMEs to organisations with operations across India
                  and internationally. Every engagement is built around
                  measurable outcomes, named engineers, and reporting that gives
                  your leadership team real visibility.
                </p>
                <p>
                  We deliver across the full IT stack — infrastructure,
                  security, cloud, custom software, web and app development,
                  digital marketing — so clients grow with us rather than
                  accumulating a roster of point vendors that don&apos;t talk to each
                  other.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F4F7FC] rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: `${siteConfig.stats.yearsInBusiness}+`, label: "Years in Business" },
                    { value: `${siteConfig.stats.clientsServed}+`, label: "Clients Served" },
                    { value: `${siteConfig.stats.projectsDelivered}+`, label: "Projects Delivered" },
                    { value: `${siteConfig.stats.countriesServed}+`, label: "Countries" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display text-3xl font-black text-[#1878F0] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#5A6380]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#060B24] rounded-2xl p-8">
                <div className="space-y-3">
                  {["Microsoft Partner", "AWS Certified", "Google Cloud Partner", "ISO 27001 Aligned", "DPDPA 2023 Compliant"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5 text-sm text-[#EAF0FA]/70">
                      <Award size={14} className="text-[#1878F0] flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-py bg-[#F4F7FC]" id="why-us">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#1878F0] rounded-2xl p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">
                To make enterprise-grade IT accessible to every business — not
                just those with enterprise budgets. Proactive, accountable,
                outcome-driven.
              </p>
            </div>
            <div className="bg-[#060B24] rounded-2xl p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-[#EAF0FA]/80 leading-relaxed">
                To be the most trusted IT partner for growing businesses across
                India — the team they call first, not last.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="section-tag mb-4">Our Values</span>
            <h2 className="section-heading">How we show up</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-service bg-white text-center">
                <div className="w-12 h-12 rounded-xl bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] mx-auto mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="font-semibold text-[#0B1233] mb-2">{v.title}</h3>
                <p className="text-sm text-[#5A6380] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Our Journey</span>
            <h2 className="section-heading">How we got here</h2>
          </div>
          <div className="relative border-l-2 border-[#1878F0]/20 pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-[#1878F0] border-4 border-white shadow-sm" />
                <div className="font-mono text-sm font-semibold text-[#1878F0] mb-1">{m.year}</div>
                <p className="text-[#0B1233] text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="section-py bg-[#F4F7FC]" id="leadership">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Leadership</span>
            <h2 className="section-heading">The team behind ITSolvez</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="card-service bg-white text-center">
              <div className="w-16 h-16 rounded-full bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="font-semibold text-[#0B1233]">Eswar Krishna Adaboina</h3>
              <p className="text-sm text-[#1878F0] mt-1">Founder & CEO</p>
              <p className="text-xs text-[#5A6380] mt-2 leading-relaxed">
                IT strategy, business development, and the vision behind ITSolvez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py gradient-hero grid-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to work with a partner who takes ownership?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-primary">
              Get a Free Assessment <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-ghost">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
