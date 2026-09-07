import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("start-a-project");
  return buildMetadata({
    title: seo?.meta_title || "Start a Project, Website, App, ERP and Software Development | ITSolvez",
    description: seo?.meta_description || "Share your project brief with ITSolvez. We'll review it and send a detailed scope, timeline and transparent cost estimate within 48 hours.",
    keywords: seo?.meta_keywords || ["start a software project India", "hire app developer India", "website development quote India", "custom software development enquiry"],
    slug: "start-a-project",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default function StartAProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
