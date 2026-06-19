import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Blog & IT Insights — ITSolvez",
  description:
    "Practical IT intelligence for Indian businesses. Guides on managed IT, cloud, cybersecurity, AI-search SEO, and digital transformation.",
  alternates: { canonical: "https://itsolvez.com/blog" },
};

const posts = [
  {
    slug: "managed-it-vs-break-fix-india",
    category: "Managed IT",
    title: "Managed IT vs break-fix support: what actually costs more for Indian SMEs?",
    excerpt:
      "Most SMEs think break-fix is cheaper because you only pay when something breaks. The numbers tell a different story — and the hidden cost is your team&apos;s productivity.",
    author: "ITSolvez Team",
    date: "June 12, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cloud-cost-optimisation-india-2026",
    category: "Cloud",
    title: "How Indian businesses can cut their cloud bill by 30–40% in 2026",
    excerpt:
      "Most cloud overspend comes from three sources: over-provisioned instances, unused storage, and orphaned snapshots. Here&apos;s a practical audit checklist.",
    author: "ITSolvez Cloud Team",
    date: "June 5, 2026",
    readTime: "9 min read",
  },
  {
    slug: "ransomware-india-2026-what-businesses-need-to-know",
    category: "Cybersecurity",
    title: "Ransomware in India 2026: what every business needs to know",
    excerpt:
      "India is now one of the top 5 most-targeted geographies for ransomware. Here&apos;s what&apos;s changed, what the real attack vectors are, and what actually stops them.",
    author: "ITSolvez Security Team",
    date: "May 28, 2026",
    readTime: "11 min read",
  },
  {
    slug: "dpdpa-2023-it-obligations-india",
    category: "Compliance",
    title: "DPDPA 2023: what India's new data protection law means for your IT team",
    excerpt:
      "The Digital Personal Data Protection Act 2023 introduces real obligations for how you store, process and protect personal data. Here&apos;s the practical IT checklist.",
    author: "ITSolvez Compliance Team",
    date: "May 20, 2026",
    readTime: "8 min read",
  },
  {
    slug: "aeo-answer-engine-optimisation-india-2026",
    category: "Digital Marketing",
    title: "AEO in 2026: how to get cited by ChatGPT and Gemini for IT-service queries",
    excerpt:
      "AI Overviews and chat assistants now answer most informational queries before the user clicks. Answer Engine Optimisation is how you get cited — not just ranked.",
    author: "ITSolvez Digital Team",
    date: "May 14, 2026",
    readTime: "10 min read",
  },
  {
    slug: "choosing-cloud-provider-india-aws-azure-gcp",
    category: "Cloud",
    title: "AWS vs Azure vs Google Cloud for Indian businesses: a practical comparison",
    excerpt:
      "The &apos;best&apos; cloud provider depends on your workload, compliance requirements and existing toolstack. Here&apos;s the framework we use with clients to make the right call.",
    author: "ITSolvez Cloud Team",
    date: "May 6, 2026",
    readTime: "12 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        tag="Blog & Insights"
        title="IT intelligence for"
        titleAccent="Indian businesses."
        subtitle="Practical guides on managed IT, cloud, cybersecurity, digital marketing and technology strategy — written by practitioners, not marketers."
        bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="card-service bg-white group flex flex-col cursor-pointer">
                <div className="mb-3">
                  <span className="text-xs font-mono font-semibold text-[#1878F0] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-semibold text-[#0B1233] mb-3 leading-snug group-hover:text-[#1878F0] transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-[#5A6380] leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E9F2]">
                  <div className="flex items-center gap-3 text-xs text-[#5A6380]">
                    <span className="flex items-center gap-1"><User size={11} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <span className="text-xs text-[#5A6380]">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
