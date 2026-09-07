import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("contact");
  return buildMetadata({
    title: seo?.meta_title || "Contact ITSolvez — Free Software Development Consultation",
    description: seo?.meta_description || "Get a free consultation for custom software, mobile app, web development, ERP or CRM projects. Call +91 9967470207 or email info@itsolvez.com. Same-day response guaranteed.",
    keywords: seo?.meta_keywords || ["contact software company", "hire software developers", "free software consultation", "software development quote"],
    slug: "contact",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
