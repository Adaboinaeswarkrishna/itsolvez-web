import type { Metadata } from "next";
import Link from "next/link";
import {buildMetadata, JsonLd, breadcrumbSchema } from "@/components/SEO";
import { getGenericPage, getPageSEO } from "@/lib/wagtail";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [seo, page] = await Promise.all([
    getPageSEO("cookie-policy"),
    getGenericPage("cookie-policy").catch(() => null),
  ]);
  return buildMetadata({
    title: seo?.meta_title || page?.seo_title || "Cookie Policy, ITSolvez",
    description: seo?.meta_description || page?.search_description || "How ITSolvez uses cookies and similar tracking technologies on itsolvez.com.",
    keywords: seo?.meta_keywords,
    slug: "cookie-policy",
  });
}

export default async function CookiePolicyPage() {
  const page = await getGenericPage("cookie-policy").catch(() => null);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Cookie Policy", url: "https://itsolvez.com/cookie-policy/" },
      ])} />

      <section className="gradient-hero grid-bg pt-32 pb-12">
        <div className="container-custom">
          <h1 className="font-display text-3xl lg:text-4xl font-black text-white mb-3">
            {page?.title ?? "Cookie Policy"}
          </h1>
          <p className="text-[#EAF0FA]/60 text-sm">Last updated: {page?.last_updated ?? "June 2026"}</p>
        </div>
      </section>
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          {page?.body ? (
            <div
              className="prose prose-slate prose-headings:text-[#0B1233] prose-headings:font-bold prose-a:text-[#1878F0] max-w-none text-[#5A6380] text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          ) : (
            <p className="text-[#5A6380]">Cookie policy content is being updated. Please check back soon.</p>
          )}
          <div className="mt-10 pt-6 border-t border-[#E5E9F2] flex gap-4 text-sm">
            <Link href="/privacy-policy" className="text-[#1878F0] hover:underline" prefetch={false}>Privacy Policy</Link>
            <Link href="/terms" className="text-[#1878F0] hover:underline" prefetch={false}>Terms of Use</Link>
          </div>
        </div>
      </section>
    </>
  );
}
