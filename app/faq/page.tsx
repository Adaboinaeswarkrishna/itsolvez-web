import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, faqSchema as buildFaqSchema } from "@/components/SEO";
import { getFAQItems, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("faq");
  return buildMetadata({
    title: seo?.meta_title || "IT Services FAQ — Your Questions Answered | ITSolvez",
    description: seo?.meta_description || "Answers to common questions about custom software development, mobile app development, ERP/CRM implementation, project timelines and pricing.",
    keywords: seo?.meta_keywords || ["software development FAQ", "custom software cost", "mobile app development time", "ERP implementation questions"],
    slug: "faq",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const FALLBACK_FAQS = [
  { category: "Certifications and Trust", items: [
    { q: "Is ITSolvez ISO certified?", a: "Yes. ITSolvez holds three ISO certifications issued by Anglia Compliance Group, UK: ISO 9001:2015 (Quality Management), ISO 27001:2022 (Information Security Management) and ISO 20000-1:2018 (IT Service Management). All three are valid until 9 July 2029 and can be viewed and verified on our Certifications page." },
    { q: "What do your ISO certifications mean for my business?", a: "ISO 9001 means our project delivery follows audited, repeatable quality processes. ISO 27001 means your data, credentials and source code are protected by an independently audited security management system. ISO 20000-1 means our managed IT and support services — SLAs, change management, service continuity — meet the international standard for IT service management." },
    { q: "How can I verify your ISO certificates?", a: "Every certificate is registered with Anglia Compliance Group and verifiable online at angliacompliance.uk/verify-certificate using the certificate numbers 25-07-21156543 (ISO 9001), 25-07-21156544 (ISO 27001) and 25-07-21156545 (ISO 20000-1). Each certificate PDF on our Certifications page also carries a QR code linking to the verification portal." },
  ]},
  { category: "Managed IT and Support", items: [
    { q: "What does a managed IT service include?", a: "A managed IT service covers 24/7 monitoring, proactive maintenance, patch management, remote and on-site support, security management, and vendor coordination — all for a fixed monthly fee. You get a named engineer who knows your environment, not a generic helpdesk." },
    { q: "What size businesses do you work with?", a: "We work with businesses from 10 users up to mid-size enterprises of 500+ users. Our packages scale with headcount and complexity, and we have specific offerings for SMEs, mid-market, and enterprise clients." },
    { q: "What is your response time for IT issues?", a: "Critical issues receive a response within 15 minutes. Standard issues are resolved within 4 hours. On-site visits for issues that cannot be resolved remotely are scheduled within one business day." },
    { q: "Do you support businesses outside Mumbai?", a: "Yes. We support clients across India with remote-first delivery and on-site coverage in Mumbai. For international clients, we deliver remotely across multiple time zones." },
  ]},
  { category: "Cloud and Infrastructure", items: [
    { q: "Which cloud providers do you work with?", a: "AWS, Microsoft Azure, and Google Cloud. We also support multi-cloud and hybrid environments where part of the workload stays on-premise." },
    { q: "How long does a cloud migration take?", a: "A straightforward lift-and-shift for a small business typically takes 4–8 weeks. Complex re-architecture for larger environments can take 3–6 months. We always start with a readiness assessment that gives you a realistic timeline before any commitment." },
    { q: "Can you reduce our existing cloud bill?", a: "Yes — cloud cost optimisation is one of our most common engagements. We audit your spend, identify wasted resources, and implement right-sizing and reserved-capacity plans." },
  ]},
  { category: "Cybersecurity", items: [
    { q: "What is managed detection and response (MDR)?", a: "MDR is a continuous security service where our analysts monitor your environment for threats 24/7, investigate alerts, and respond to incidents on your behalf — rather than just sending you an alert and leaving you to handle it." },
    { q: "Do you cover DPDPA 2023 compliance?", a: "Yes. We help businesses align with India's Digital Personal Data Protection Act 2023, including data mapping, consent management, breach-response procedures, and documentation for the Data Protection Board." },
    { q: "How quickly do you respond to a security incident?", a: "Our MDR service targets detection-to-containment of under 1 hour for critical incidents. For confirmed breaches, our incident-response team initiates containment and forensic investigation immediately." },
  ]},
  { category: "Software, Web and App Development", items: [
    { q: "How do you estimate project cost and timeline?", a: "We run a paid discovery phase (1–2 weeks) where we define requirements, user stories, architecture and a phased delivery plan. This gives you a fixed-scope quote with a clear timeline — before any development begins." },
    { q: "What technologies do you use?", a: "React / Next.js for frontend, Node.js / Python / .NET for backend, PostgreSQL / MongoDB for data, and AWS / Azure for hosting. We choose the right tool for the project." },
    { q: "How long does a website take to build?", a: "A marketing site with 5–10 pages takes 4–6 weeks. An e-commerce site takes 8–16 weeks. A complex web application takes longer depending on scope." },
  ]},
  { category: "Pricing and Engagement", items: [
    { q: "How is managed IT priced?", a: "Managed IT is priced on a per-user or per-device basis, giving you one predictable monthly cost. We provide a tailored quote after the free assessment." },
    { q: "Do you offer a free assessment?", a: "Yes — all new enquiries begin with a free IT assessment. We review your current environment, identify the biggest risks and opportunities, and give you a clear picture before any cost is incurred." },
    { q: "What contract terms do you offer?", a: "Managed IT services run on 12-month contracts with monthly billing. Project-based work is priced per project. We also offer month-to-month contracts for smaller engagements." },
  ]},
];

export default async function FAQPage() {
  let categories = FALLBACK_FAQS;

  try {
    const data = await getFAQItems();
    if (data.results?.length) {
      const grouped: Record<string, { q: string; a: string }[]> = {};
      for (const item of data.results) {
        if (!grouped[item.category]) grouped[item.category] = [];
        grouped[item.category].push({ q: item.question, a: item.answer });
      }
      categories = Object.entries(grouped).map(([category, items]) => ({ category, items }));
    }
  } catch {}

  const allItems = categories.flatMap((c) => c.items.map((i) => ({ question: i.q, answer: i.a })));

  return (
    <>
      <JsonLd data={buildFaqSchema(allItems)} />

      <PageHero
        tag="FAQ"
        title="Your questions about ITSolvez,"
        titleAccent="answered."
        subtitle="Common questions about our services, pricing and how we work."
        bgImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-lg font-bold text-[#0B1233] mb-4 pb-3 border-b border-[#E5E9F2]">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <details key={item.q} className="faq-item group bg-white">
                      <summary className="font-semibold text-[#0B1233]">
                        {item.q}
                        <ChevronDown size={16} className="text-[#5A6380] flex-shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="faq-body">{item.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-[#060B24] grid-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-black text-white mb-4">Still have questions?</h2>
          <p className="text-[#EAF0FA]/60 max-w-md mx-auto mb-8">Book a free assessment and we&apos;ll answer every question about how ITSolvez can work for your business.</p>
          <Link href="/contact" className="btn-primary" prefetch={false}>Contact us <ArrowRight size={16} /></Link>
        </div>
      </section>

      <InquirySection source="Page: FAQ" />

    </>
  );
}
