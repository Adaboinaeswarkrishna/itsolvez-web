import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, Globe, Zap, Target, Compass, ShieldCheck, Handshake } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";
import { getAboutPage, getPageSEO } from "@/lib/wagtail";
import LeadershipSlider from "@/components/LeadershipSlider";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("about");
  return buildMetadata({
    title: seo?.meta_title || "About ITSolvez - Mumbai IT Partner for Businesses",
    description: seo?.meta_description || "Mumbai-headquartered IT company delivering custom software, web and app development, managed IT and staff augmentation for businesses worldwide.",
    keywords: seo?.meta_keywords || ["about ITSolvez", "software company Mumbai", "custom software developers India", "IT staff augmentation India", "managed IT services Mumbai"],
    slug: "about",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const iconMap: Record<string, React.ElementType> = { Zap, CheckCircle2, Globe, Users };

export default async function AboutPage() {
  const page = await getAboutPage().catch(() => null);

  const heroSubtitle = page?.hero_subtitle ?? `ITSolvez is an ISO 9001, ISO 27001 and ISO 20000-1 certified, Mumbai-headquartered IT company delivering custom software, web and mobile app development, managed IT and digital services to businesses across India and ${siteConfig.stats.countriesServed}+ countries.`;
  const story = page?.story ?? "";
  const mission = page?.mission ?? "To make enterprise-grade IT accessible to every business, not just those with enterprise budgets.";
  const vision = page?.vision ?? "To be the most trusted IT partner for growing businesses across India, the team they call first, not last.";
  const certifications = page?.certifications?.split(",").map(s => s.trim()).filter(Boolean) ?? ["ISO 9001:2015 Certified", "ISO 27001:2022 Certified", "ISO 20000-1:2018 Certified", "Microsoft Partner", "AWS Certified", "Google Cloud Partner", "DPDPA 2023 Compliant"];
  const stats = {
    years: page?.stats_years ?? `${siteConfig.stats.yearsInBusiness}+`,
    clients: page?.stats_clients ?? `${siteConfig.stats.clientsServed}+`,
    projects: page?.stats_projects ?? `${siteConfig.stats.projectsDelivered}+`,
    countries: page?.stats_countries ?? `${siteConfig.stats.countriesServed}+`,
  };
  const values = page?.values?.length ? page.values.map(v => v.value) : [
    { icon: "Zap", title: "Proactive, not reactive", description: "We prevent problems, not just fix them. Continuous monitoring means your team rarely notices IT at all, because it just works." },
    { icon: "CheckCircle2", title: "Accountable by design", description: "SLAs, named engineers and monthly reporting you can take to the board. We measure ourselves by your outcomes, not our activity." },
    { icon: "Globe", title: "Vendor-honest", description: "Our recommendation is always what's right for your business, not what earns us the most partner revenue." },
    { icon: "Users", title: "One team, one point of contact", description: "Across every service, you deal with one team that knows your environment. No handoffs, no gaps." },
  ];
  const milestones = page?.milestones?.length ? page.milestones.map(m => m.value) : [
    { year: "2017", event: "ITSolvez incorporated in Mumbai" },
    { year: "2018", event: "Launched managed IT services, first 20 clients" },
    { year: "2020", event: "Expanded to cloud and cybersecurity services" },
    { year: "2022", event: "Reached 5 countries served, launched custom software division" },
    { year: "2024", event: "100+ clients, launched digital marketing and AEO practice" },
    { year: "2026", event: "Full-stack IT partner for 120+ businesses across India and globally" },
  ];
  const founderName = page?.founder_name ?? "Eswar Krishna Adaboina";
  const founderRole = page?.founder_role ?? "Founder and CEO";
  const founderBio = page?.founder_bio ?? "IT strategy, business development, and the vision behind ITSolvez.";
  const leadership = [
    { name: founderName, role: founderRole, bio: founderBio },
    { name: "Asha Yadav", role: "HR Head", bio: "Hiring, onboarding and people operations, building the team behind every engagement." },
    { name: "Yash", role: "Technical Head", bio: "Technical architecture and engineering standards across every client project." },
    { name: "Venkatesh", role: "Sales and Marketing Head", bio: "Owns the sales pipeline and go-to-market strategy for new and existing clients." },
    { name: "Krishna", role: "Financial Head", bio: "Financial planning, billing and compliance across every engagement." },
    { name: "Ritu Desai and Eshica", role: "Digital Marketing Heads", bio: "SEO, paid campaigns and content strategy across India and our international pages." },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "About", url: "https://itsolvez.com/about/" },
      ])} />

      <PageHero
        tag="About ITSolvez"
        title="The IT partner that"
        titleAccent="takes ownership."
        subtitle={heroSubtitle}
        bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <div className="flex flex-wrap gap-2.5">
          {certifications.slice(0, 3).map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 border border-white/15 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Award size={12} className="text-[#60A5FA]" /> {c}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag mb-5">Our Story</span>
              <h2 className="section-heading mb-6">Built to solve what generic IT can&apos;t</h2>
              {story ? (
                <div className="space-y-4 text-[#5A6380] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: story }} />
              ) : (
                <div className="space-y-4 text-[#5A6380] leading-relaxed text-sm">
                  <p>ITSolvez was founded with a simple observation: most businesses were either under-served by their IT provider or paying for complexity they didn&apos;t need.</p>
                  <p>Today we serve {siteConfig.stats.clientsServed}+ clients across banking, manufacturing, healthcare, logistics and technology, from Mumbai-based SMEs to organisations with operations across India and internationally.</p>
                </div>
              )}
              <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E5E9F2]">
                {[
                  { icon: ShieldCheck, label: "ISO-certified process", desc: "Not ad hoc delivery" },
                  { icon: Users, label: "Named engineers", desc: "Not ticket queues" },
                  { icon: Handshake, label: "Fixed-scope pricing", desc: "Milestone billed" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="w-9 h-9 rounded-lg bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] mb-3">
                      <item.icon size={18} />
                    </div>
                    <div className="text-sm font-semibold text-[#0B1233] mb-0.5">{item.label}</div>
                    <div className="text-xs text-[#5A6380]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#F4F7FC] rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: stats.years, label: "Years in Business" },
                    { value: stats.clients, label: "Clients Served" },
                    { value: stats.projects, label: "Projects Delivered" },
                    { value: stats.countries, label: "Countries" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display text-3xl font-black text-[#1878F0] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#5A6380]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#060B24] rounded-2xl p-8">
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5 text-sm text-[#EAF0FA]/70">
                      <Award size={14} className="text-[#1878F0] flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
                <Link href="/certifications" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1878F0] hover:text-[#F5D06F] transition-colors" prefetch={false}>
                  View and verify our ISO certificates <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#1878F0] rounded-2xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <Target size={22} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">{mission}</p>
            </div>
            <div className="bg-[#060B24] rounded-2xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Compass size={22} className="text-[#60A5FA]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-[#EAF0FA]/80 leading-relaxed">{vision}</p>
            </div>
          </div>
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Our Values</span>
            <h2 className="section-heading">How we show up</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = iconMap[v.icon] ?? Zap;
              return (
                <div key={v.title} className="card-service bg-white text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#1878F0]/10 flex items-center justify-center text-[#1878F0] mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-[#0B1233] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#5A6380] leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Our Journey</span>
            <h2 className="section-heading">How we got here</h2>
          </div>

          {/* Mobile: left-rail list */}
          <div className="lg:hidden max-w-lg mx-auto relative border-l-2 border-[#1878F0]/20 pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-[#1878F0] border-4 border-white shadow-sm" />
                <div className="font-mono text-sm font-semibold text-[#1878F0] mb-1">{m.year}</div>
                <p className="text-[#0B1233] text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>

          {/* Desktop: alternating timeline */}
          <div className="hidden lg:block relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-2 bottom-2 w-px bg-[#1878F0]/20 -translate-x-1/2" />
            <div>
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                const card = (
                  <div className="inline-block bg-[#F4F7FC] rounded-xl p-5 max-w-sm text-left">
                    <div className="font-mono text-sm font-bold text-[#1878F0] mb-1.5">{m.year}</div>
                    <p className="text-[#0B1233] text-sm leading-relaxed">{m.event}</p>
                  </div>
                );
                return (
                  <div key={m.year} className="grid grid-cols-[1fr_2.5rem_1fr] items-center">
                    <div className={isLeft ? "pr-10 text-right" : ""}>{isLeft && card}</div>
                    <div className="flex justify-center py-6">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1878F0] ring-4 ring-white shadow-md" />
                    </div>
                    <div className={!isLeft ? "pl-10" : ""}>{!isLeft && card}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="section-tag mb-4">Leadership</span>
            <h2 className="section-heading mb-4">The team behind ITSolvez</h2>
            <p className="text-[#5A6380] leading-relaxed">
              Our leadership spans engineering, sales, marketing, finance and HR, together they&apos;ve delivered {stats.projects} projects across {stats.countries} countries, with more roles opening up as we take on more of that work.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <LeadershipSlider people={leadership} />
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-[#5A6380] mb-4">We&apos;re actively hiring, see our current open roles.</p>
            <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1878F0] hover:text-[#0B54B8] transition-colors" prefetch={false}>
              View open roles <ArrowRight size={14} />
            </Link>
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
            <Link href="/contact" className="btn-primary" prefetch={false}>Book a Free Consultation <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-ghost" prefetch={false}>Our Services</Link>
          </div>
        </div>
      </section>

      <InquirySection source="Page: About" />

    </>
  );
}
