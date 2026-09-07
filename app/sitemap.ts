import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { cities } from "@/lib/data/cities";
import { intlCities } from "@/lib/data/intl-cities";
import { hireRoles } from "@/lib/data/hire-roles";
import { slugifyJobTitle } from "@/lib/careersUtils";

// Render on the server per-request (build machine can't reach the CMS);
// the inner fetches still cache for an hour via next.revalidate.
export const dynamic = "force-dynamic";

const BASE_URL = "https://itsolvez.com";
const API_BASE = process.env.WAGTAIL_API_URL ?? process.env.NEXT_PUBLIC_WAGTAIL_API_URL ?? "http://localhost:8000";

interface PageItem {
  slug: string;
  last_published_at?: string;
}

interface WagtailListItem {
  meta?: { slug?: string; first_published_at?: string };
}

async function fetchSlugs(type: string): Promise<PageItem[]> {
  try {
    const res = await fetch(
      `${API_BASE}/api/v2/pages/?type=${type}&limit=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return ((data.items ?? []) as WagtailListItem[])
      .map((i) => ({ slug: i.meta?.slug ?? "", last_published_at: i.meta?.first_published_at }))
      .filter((i) => i.slug);
  } catch {
    return [];
  }
}

async function fetchJobSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v2/job-openings/`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return ((data.results ?? []) as { title: string }[]).map((j) => slugifyJobTitle(j.title));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogItems, caseStudyItems, jobSlugs] = await Promise.all([
    fetchSlugs("blog.BlogPage"),
    fetchSlugs("case_studies.CaseStudyPage"),
    fetchJobSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    // Trailing slash on purpose — every real internal link to the homepage uses
    // href="/", which resolves to "https://itsolvez.com/". A bare BASE_URL here
    // (no slash) is a different string to crawlers, so it shows up as an
    // "orphaned sitemap page" with 0 incoming internal links even though the
    // homepage is linked from every single page on the site.
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/certifications`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services/ai-powered-solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/it-roi-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/technologies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/locations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...["uae", "uk", "usa", "singapore", "australia", "canada", "germany", "saudi-arabia", "qatar", "south-africa"].map((c) => ({
      url: `${BASE_URL}/${c}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.75,
    })),
    { url: `${BASE_URL}/hire`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
  ];

  const hireRoutes: MetadataRoute.Sitemap = hireRoles.map((r) => ({
    url: `${BASE_URL}/hire/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/locations/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const intlCityRoutes: MetadataRoute.Sitemap = intlCities.map((c) => ({
    url: `${BASE_URL}/${c.countrySlug}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogItems.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.last_published_at ? new Date(p.last_published_at) : new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudyItems.map((p) => ({
    url: `${BASE_URL}/case-studies/${p.slug}`,
    lastModified: p.last_published_at ? new Date(p.last_published_at) : new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const careerRoutes: MetadataRoute.Sitemap = jobSlugs.map((slug) => ({
    url: `${BASE_URL}/careers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...cityRoutes, ...intlCityRoutes, ...hireRoutes, ...blogRoutes, ...caseStudyRoutes, ...careerRoutes];
}
