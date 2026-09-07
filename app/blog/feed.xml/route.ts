import { getBlogPosts } from "@/lib/wagtail";
import { NextResponse } from "next/server";

export const revalidate = 3600; // refresh RSS every hour

const SITE = "https://itsolvez.com";

const FALLBACK_POSTS = [
  {
    slug: "managed-it-vs-break-fix-india",
    title: "Managed IT vs Break-Fix Support: What Actually Costs More for Indian SMEs?",
    excerpt: "Most SMEs think break-fix is cheaper because you only pay when something breaks. The numbers tell a different story.",
    category: "Managed IT",
    author_name: "ITSolvez Team",
    published_date: "2026-06-12",
  },
  {
    slug: "cloud-cost-optimisation-india-2026",
    title: "How Indian Businesses Can Cut Their Cloud Bill by 30–40% in 2026",
    excerpt: "Most cloud overspend comes from three sources: over-provisioned instances, unused storage, and orphaned snapshots.",
    category: "Cloud",
    author_name: "ITSolvez Cloud Team",
    published_date: "2026-06-05",
  },
  {
    slug: "ransomware-india-2026-what-businesses-need-to-know",
    title: "Ransomware in India 2026: What Every Business Needs to Know",
    excerpt: "India is now one of the top 5 most-targeted geographies for ransomware. Here's what's changed and what actually stops them.",
    category: "Cybersecurity",
    author_name: "ITSolvez Security Team",
    published_date: "2026-05-28",
  },
  {
    slug: "dpdpa-2023-it-obligations-india",
    title: "DPDPA 2023: What India's New Data Protection Law Means for Your IT Team",
    excerpt: "The Digital Personal Data Protection Act 2023 introduces real obligations for how you store, process and protect personal data.",
    category: "Compliance",
    author_name: "ITSolvez Compliance Team",
    published_date: "2026-05-20",
  },
  {
    slug: "aeo-answer-engine-optimisation-india-2026",
    title: "AEO in 2026: How to Get Cited by ChatGPT and Gemini for IT-Service Queries",
    excerpt: "AI Overviews and chat assistants now answer most informational queries before the user clicks.",
    category: "Digital Marketing",
    author_name: "ITSolvez Digital Team",
    published_date: "2026-05-14",
  },
  {
    slug: "choosing-cloud-provider-india-aws-azure-gcp",
    title: "AWS vs Azure vs Google Cloud for Indian Businesses: A Practical Comparison",
    excerpt: "The best cloud provider depends on your workload, compliance requirements and existing toolstack.",
    category: "Cloud",
    author_name: "ITSolvez Cloud Team",
    published_date: "2026-05-06",
  },
];

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  let posts: { slug: string; title: string; excerpt: string; category: string; author_name: string; published_date: string }[] = FALLBACK_POSTS;

  try {
    const data = await getBlogPosts(1, 20);
    if (data.items?.length) {
      posts = data.items.map((p) => ({
        slug: p.meta?.slug ?? p.slug,
        title: p.title,
        excerpt: p.excerpt ?? "",
        category: p.category ?? "IT Insights",
        author_name: p.author_name ?? "ITSolvez Team",
        published_date: p.published_date ?? "",
      }));
    }
  } catch {}

  const items = posts
    .map((post) => {
      const url = `${SITE}/blog/${post.slug}/`;
      const pubDate = post.published_date ? new Date(post.published_date).toUTCString() : new Date().toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <author>info@itsolvez.com (${escapeXml(post.author_name)})</author>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ITSolvez Blog, IT Insights for Indian Businesses</title>
    <link>${SITE}/blog/</link>
    <description>Practical guides on managed IT, cloud, cybersecurity, digital marketing and ERP for Indian businesses.</description>
    <language>en-IN</language>
    <managingEditor>info@itsolvez.com (ITSolvez Team)</managingEditor>
    <webMaster>info@itsolvez.com (ITSolvez)</webMaster>
    <image>
      <url>${SITE}/og-image.png</url>
      <title>ITSolvez Blog</title>
      <link>${SITE}/blog/</link>
    </image>
    <atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
