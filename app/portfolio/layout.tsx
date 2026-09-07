import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("portfolio");
  return buildMetadata({
    title: seo?.meta_title || "Portfolio, Websites, Apps, ERP and IT Projects | ITSolvez",
    description: seo?.meta_description || "Real projects, real results, websites, mobile apps, ERP systems and managed IT delivered by ITSolvez across healthcare, manufacturing, retail and more.",
    keywords: seo?.meta_keywords || ["IT portfolio India", "website development portfolio", "mobile app projects India", "ERP development portfolio", "ITSolvez case studies"],
    slug: "portfolio",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
