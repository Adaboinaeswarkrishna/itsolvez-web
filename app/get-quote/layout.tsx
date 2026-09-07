import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("get-quote");
  return buildMetadata({
    title: seo?.meta_title || "Get a Quote — Transparent Pricing for Websites, Apps and IT Services | ITSolvez",
    description: seo?.meta_description || "Get a transparent, itemised quote for your website, mobile app, ERP or IT service. No vague ranges — real numbers based on your exact requirements.",
    keywords: seo?.meta_keywords || ["website development cost India", "app development quote India", "ERP development pricing India", "IT services quote India", "software development cost estimate"],
    slug: "get-quote",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default function GetQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
