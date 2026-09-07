import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("free-website-audit");
  return buildMetadata({
    title: seo?.meta_title || "Free Website Audit — Speed, SEO, Mobile and Conversion Review | ITSolvez",
    description: seo?.meta_description || "Get a free 30-minute expert review of your business website. We check speed, mobile experience, SEO, conversion signals and security — and tell you exactly what to fix.",
    keywords: seo?.meta_keywords || ["free website audit India", "website review India", "website speed check India", "website SEO audit India", "website conversion audit"],
    slug: "free-website-audit",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default function FreeWebsiteAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
