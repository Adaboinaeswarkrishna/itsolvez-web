import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "FAQ — ITSolvez IT Services",
  description:
    "Answers to common questions about ITSolvez managed IT, cloud, cybersecurity, custom software and digital marketing services.",
  alternates: { canonical: "https://itsolvez.com/faq" },
};

const faqs = [
  {
    category: "Managed IT & Support",
    items: [
      { q: "What does a managed IT service include?", a: "A managed IT service covers 24/7 monitoring, proactive maintenance, patch management, remote and on-site support, security management, and vendor coordination — all for a fixed monthly fee. You get a named engineer who knows your environment, not a generic helpdesk." },
      { q: "What size businesses do you work with?", a: "We work with businesses from 10 users up to mid-size enterprises of 500+ users. Our packages scale with headcount and complexity, and we have specific offerings for SMEs, mid-market, and enterprise clients." },
      { q: "What is your response time for IT issues?", a: "Critical issues receive a response within 15 minutes. Standard issues are resolved within 4 hours. On-site visits for issues that cannot be resolved remotely are scheduled within one business day." },
      { q: "Do you support businesses outside Pune?", a: "Yes. We support clients across India with remote-first delivery and on-site coverage in Pune and Mumbai. For international clients, we deliver remotely across multiple time zones." },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { q: "Which cloud providers do you work with?", a: "AWS, Microsoft Azure, and Google Cloud. We also support multi-cloud and hybrid environments where part of the workload stays on-premise." },
      { q: "How long does a cloud migration take?", a: "A straightforward lift-and-shift for a small business typically takes 4–8 weeks. Complex re-architecture for larger environments can take 3–6 months. We always start with a readiness assessment that gives you a realistic timeline before any commitment." },
      { q: "Can you reduce our existing cloud bill?", a: "Yes — cloud cost optimisation is one of our most common engagements. We audit your spend, identify wasted resources, and implement right-sizing and reserved-capacity plans." },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { q: "What is managed detection and response (MDR)?", a: "MDR is a continuous security service where our analysts monitor your environment for threats 24/7, investigate alerts, and respond to incidents on your behalf — rather than just sending you an alert and leaving you to handle it." },
      { q: "Do you cover DPDPA 2023 compliance?", a: "Yes. We help businesses align with India's Digital Personal Data Protection Act 2023, including data mapping, consent management, breach-response procedures, and documentation for the Data Protection Board." },
      { q: "How quickly do you respond to a security incident?", a: "Our MDR service targets detection-to-containment of under 1 hour for critical incidents. For confirmed breaches, our incident-response team initiates containment and forensic investigation immediately." },
    ],
  },
  {
    category: "Software, Web & App Development",
    items: [
      { q: "How do you estimate project cost and timeline?", a: "We run a paid discovery phase (1–2 weeks) where we define requirements, user stories, architecture and a phased delivery plan. This gives you a fixed-scope quote with a clear timeline — before any development begins." },
      { q: "What technologies do you use?", a: "React / Next.js for frontend, Node.js / Python / .NET for backend, PostgreSQL / MongoDB for data, and AWS / Azure for hosting. We choose the right tool for the project." },
      { q: "Do you support legacy modernisation?", a: "Yes — moving business-critical applications from ageing stacks to modern, secure, cloud-native architecture is one of our most common engagements. We do this in phases to minimise risk." },
      { q: "How long does a website take to build?", a: "A marketing site with 5–10 pages takes 4–6 weeks. An e-commerce site takes 8–16 weeks. A complex web application takes longer depending on scope." },
    ],
  },
  {
    category: "Pricing & Engagement",
    items: [
      { q: "How is managed IT priced?", a: "Managed IT is priced on a per-user or per-device basis, giving you one predictable monthly cost. Pricing depends on scope, coverage hours, and number of users or devices. We provide a tailored quote after the free assessment." },
      { q: "Do you offer a free assessment?", a: "Yes — all new enquiries begin with a free IT assessment. We review your current environment, identify the biggest risks and opportunities, and give you a clear picture of what an engagement would look like before any cost is incurred." },
      { q: "What contract terms do you offer?", a: "Managed IT services run on 12-month contracts with monthly billing. Project-based work (software, web, app development) is priced per project. We also offer month-to-month contracts for smaller engagements." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            {faqs.map((cat) => (
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
          <h2 className="font-display text-3xl font-black text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-[#EAF0FA]/60 max-w-md mx-auto mb-8">
            Book a free assessment and we&apos;ll answer every question about
            how ITSolvez can work for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
