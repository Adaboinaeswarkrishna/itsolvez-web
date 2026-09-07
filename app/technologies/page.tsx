import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import TechStack from "@/components/TechStack";
import CertTrustStrip from "@/components/CertTrustStrip";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/components/SEO";
import { techStack } from "@/lib/data/techstack";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Our Tech Stack — AI, Web, Mobile and Cloud | ITSolvez",
    description: "The technologies ITSolvez builds with: AI/ML (TensorFlow, PyTorch, LangChain), Flutter and React Native, Next.js, Node.js, AWS/Azure/GCP and major databases.",
    keywords: ["ITSolvez tech stack", "AI development technologies", "react development company India", "nextjs development company", "flutter development stack", "node.js development company India"],
    slug: "technologies",
    ogImage: "/og-image.png",
  });
}

const HOW_WE_CHOOSE = [
  { title: "Fit over fashion", desc: "The stack is chosen in discovery, per project — your team, your budget, your scale targets. We don't force one framework on every client." },
  { title: "Production-proven only", desc: "Every technology here has shipped in real client systems we maintain today. No résumé-driven experiments on your budget." },
  { title: "Exit-friendly by design", desc: "Mainstream, well-documented technologies mean any competent team can maintain what we build. No lock-in by obscurity." },
  { title: "AI-ready foundations", desc: "Data models and APIs are structured so AI features — chat, RAG, analytics — can be added without a rebuild." },
];

export default function TechnologiesPage() {
  const total = techStack.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Technologies", url: "https://itsolvez.com/technologies/" },
      ])} />

      <PageHero
        tag="Our Tech Stack"
        title="The technologies behind"
        titleAccent="every build."
        subtitle={`${total}+ production-proven technologies across AI and machine learning, mobile, web, backend, cloud and databases — chosen per project in discovery, and maintained by the ISO 9001-certified team that ships with them daily.`}
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technologies" }]}
        waveFill="#F4F7FC"
      />

      {/* Full stack browser */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <TechStack />
        </div>
      </section>

      {/* How we choose */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-tag mb-5">How we choose</span>
            <h2 className="section-heading mb-4">A stack decision is a business decision</h2>
            <p className="text-[#5A6380] leading-relaxed">
              The wrong technology choice costs you twice — once to build, once to escape.
              Four rules govern every recommendation we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {HOW_WE_CHOOSE.map((h, i) => (
              <div key={h.title} className="bg-[#F4F7FC] rounded-2xl p-7 border border-[#E5E9F2]">
                <div className="w-9 h-9 rounded-lg bg-[#1878F0]/10 text-[#1878F0] font-display font-black flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-[#0B1233] text-lg mb-2">{h.title}</h3>
                <p className="text-sm text-[#5A6380] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/blog/flutter-vs-react-native-cross-platform-2026"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1878F0] hover:underline" prefetch={false}>
              See how we compare frameworks: Flutter vs React Native <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      <CertTrustStrip heading="Technology choices backed by certified process" />

      <InquirySection
        source="Page: Technologies"
        heading="Not sure which stack fits your project?"
        subheading="Tell us what you're building — we'll recommend the right technologies in a free consultation, with honest reasoning you can challenge."
      />
    </>
  );
}
