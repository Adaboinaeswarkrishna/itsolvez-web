import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";
import IntlCountryContent from "@/components/international/IntlCountryContent";
import { getCountryBySlug } from "@/lib/data/countries";
import { getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("usa");
  const data = getCountryBySlug("usa")!;
  return buildMetadata({
    title: seo?.meta_title || data.metaTitle,
    description: seo?.meta_description || data.metaDescription,
    keywords: seo?.meta_keywords || data.keywords,
    slug: "usa",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

export default function Page() {
  const data = getCountryBySlug("usa")!;
  return <IntlCountryContent data={data} />;
}
