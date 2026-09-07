import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/components/SEO";
import IntlCityContent from "@/components/international/IntlCityContent";
import { getIntlCitiesByCountry, getIntlCityBySlug } from "@/lib/data/intl-cities";

export const revalidate = 3600;

export function generateStaticParams() {
  return getIntlCitiesByCountry("canada").map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = getIntlCityBySlug("canada", city);
  if (!data) return {};
  return buildMetadata({
    title: data.metaTitle, description: data.metaDescription, keywords: data.keywords,
    slug: `canada/${data.slug}`, ogImage: "/og-image.png",
  });
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getIntlCityBySlug("canada", city);
  if (!data) notFound();
  return <IntlCityContent data={data} />;
}
