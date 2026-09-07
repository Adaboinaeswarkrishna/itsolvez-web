import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/components/SEO";
import IntlCityContent from "@/components/international/IntlCityContent";
import { getIntlCitiesByCountry, getIntlCityBySlug } from "@/lib/data/intl-cities";

export const revalidate = 3600;

export function generateStaticParams() {
  return getIntlCitiesByCountry("germany").map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = getIntlCityBySlug("germany", city);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle, description: data.metaDescription, keywords: data.keywords,
    slug: `germany/${data.slug}`, ogImage: "/og-image.png",
  });
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getIntlCityBySlug("germany", city);
  if (!data) notFound();
  return <IntlCityContent data={data} />;
}
