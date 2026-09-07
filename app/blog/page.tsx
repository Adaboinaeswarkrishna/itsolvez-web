import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { JsonLd, buildMetadata } from "@/components/SEO";
import { getBlogPosts, getPageSEO, fixMediaUrl } from "@/lib/wagtail";
import { getCategoryImage } from "@/lib/blogImages";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("blog");
  return buildMetadata({
    title: seo?.meta_title || "IT and Software Development Blog - ITSolvez",
    description: seo?.meta_description || "Expert insights on software development, mobile app development, ERP, CRM and digital transformation from the ITSolvez team.",
    keywords: seo?.meta_keywords || ["software development blog", "mobile app development tips", "ERP implementation guide", "CRM software insights"],
    slug: "blog",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const FALLBACK_POSTS = [
  {
    slug: "managed-it-vs-break-fix-india",
    category: "Managed IT",
    title: "Managed IT vs break-fix support: what actually costs more for Indian SMEs?",
    excerpt: "Most SMEs think break-fix is cheaper because you only pay when something breaks. The numbers tell a different story.",
    author_name: "ITSolvez Team",
    published_date: "2026-06-12",
    read_time: 7,
    featured_image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "cloud-cost-optimisation-india-2026",
    category: "Cloud",
    title: "How Indian businesses can cut their cloud bill by 30–40% in 2026",
    excerpt: "Most cloud overspend comes from three sources: over-provisioned instances, unused storage, and orphaned snapshots.",
    author_name: "ITSolvez Cloud Team",
    published_date: "2026-06-05",
    read_time: 9,
    featured_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "ransomware-india-2026-what-businesses-need-to-know",
    category: "Cybersecurity",
    title: "Ransomware in India 2026: what every business needs to know",
    excerpt: "India is now one of the top 5 most-targeted geographies for ransomware. Here's what's changed and what actually stops them.",
    author_name: "ITSolvez Security Team",
    published_date: "2026-05-28",
    read_time: 11,
    featured_image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "dpdpa-2023-it-obligations-india",
    category: "Compliance",
    title: "DPDPA 2023: what India's new data protection law means for your IT team",
    excerpt: "The Digital Personal Data Protection Act 2023 introduces real obligations for how you store, process and protect personal data.",
    author_name: "ITSolvez Compliance Team",
    published_date: "2026-05-20",
    read_time: 8,
    featured_image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "aeo-answer-engine-optimisation-india-2026",
    category: "Digital Marketing",
    title: "AEO in 2026: how to get cited by ChatGPT and Gemini for IT-service queries",
    excerpt: "AI Overviews and chat assistants now answer most informational queries before the user clicks.",
    author_name: "ITSolvez Digital Team",
    published_date: "2026-05-14",
    read_time: 10,
    featured_image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "choosing-cloud-provider-india-aws-azure-gcp",
    category: "Cloud",
    title: "AWS vs Azure vs Google Cloud for Indian businesses: a practical comparison",
    excerpt: "The best cloud provider depends on your workload, compliance requirements and existing toolstack.",
    author_name: "ITSolvez Cloud Team",
    published_date: "2026-05-06",
    read_time: 12,
    featured_image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
];

function getPostImage(post: any): string {
  // 1. Wagtail uploaded featured_image (ImageRenditionField returns {url, width, height})
  if (post.featured_image?.url) return fixMediaUrl(post.featured_image.url);
  // 2. Plain URL string (fallback posts)
  if (typeof post.featured_image === "string" && post.featured_image) return post.featured_image;
  // 3. og_image_url field
  if (post.og_image_url) return post.og_image_url;
  // 4. Category-based default (shared with the blog detail page and off-site sharing)
  return getCategoryImage(post.category);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  let posts = FALLBACK_POSTS as any[];
  try {
    const data = await getBlogPosts(1, 100);
    if (data.items?.length) posts = data.items;
  } catch {}

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ITSolvez IT Insights",
    url: "https://itsolvez.com/blog/",
    publisher: { "@type": "Organization", name: "ITSolvez" },
  };

  return (
    <>
      <JsonLd data={blogListSchema} />
      <PageHero
        tag="Blog and Insights"
        title="IT intelligence for"
        titleAccent="Indian businesses."
        subtitle="Practical guides on managed IT, cloud, cybersecurity, digital marketing and technology strategy, written by practitioners, not marketers."
        bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-[#5A6380]">
              <p className="text-lg font-medium mb-2">No posts yet</p>
              <p className="text-sm">Blog posts added in the CMS will appear here.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const slug = post.meta?.slug ?? post.slug;
                const imageUrl = getPostImage(post);
                return (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="card-service bg-white group flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
                   prefetch={false}>
                    <div className="relative w-full h-44 overflow-hidden rounded-xl mb-4 flex-shrink-0">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="mb-3">
                      <span className="text-xs font-mono font-semibold text-[#1878F0] uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="font-semibold text-[#0B1233] mb-3 leading-snug group-hover:text-[#1878F0] transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#5A6380] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E9F2]">
                      <div className="flex items-center gap-3 text-xs text-[#5A6380]">
                        <span className="flex items-center gap-1"><User size={11} /> {post.author_name}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.read_time} min read</span>
                      </div>
                      <span className="text-xs text-[#5A6380]">{formatDate(post.published_date)}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
