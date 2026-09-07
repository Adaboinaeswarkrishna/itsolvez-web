import { Metadata } from "next";
import { fixMediaUrl } from "@/lib/wagtail";

const SITE_URL  = "https://itsolvez.com";
const SITE_NAME = "ITSolvez";
const DEFAULT_DESC = "Custom software, web and mobile app development, managed IT and staff augmentation for businesses across India and globally. 13+ years · 500+ projects.";
const DEFAULT_OG   = `${SITE_URL}/og-image.png`;

const TAG_LABELS: Record<string, string> = {
  services: "Services", industries: "Industries", blog: "Blog", careers: "Careers",
  "case-studies": "Case Study", locations: "Locations", hire: "Hire", tools: "Tools",
  uae: "UAE", uk: "UK", usa: "USA", singapore: "Singapore", australia: "Australia",
  canada: "Canada", germany: "Germany", "saudi-arabia": "Saudi Arabia", qatar: "Qatar",
  "south-africa": "South Africa",
};

// Builds a per-page share-image URL from the page's own title, rendered by app/og/route.tsx —
// used whenever a page has no CMS-specific og_image, so social shares stop reusing one static
// image across all 160+ pages (same fix already applied to hero images earlier in this project).
function dynamicOgUrl(pageTitle: string, slug: string): string {
  const firstSegment = slug.split("/")[0];
  const tag = TAG_LABELS[firstSegment] ?? "";
  const params = new URLSearchParams({ title: pageTitle });
  if (tag) params.set("tag", tag);
  return `${SITE_URL}/og?${params.toString()}`;
}

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  slug?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESC,
  keywords = [],
  slug = "",
  ogImage = DEFAULT_OG,
  noIndex = false,
}: SEOProps): Metadata {
  // Must match sitemap.xml URLs exactly (canonical consistency). Inner pages get no
  // trailing slash; the homepage gets one, since every real internal link to it
  // uses href="/", which resolves to "https://itsolvez.com/" — see app/sitemap.ts.
  const canonical = slug ? `${SITE_URL}/${slug}` : `${SITE_URL}/`;
  // Append brand only when it keeps the title ≤60 chars (SEO title-length limit)
  const fullTitle = title.includes("ITSolvez") || title.length > 49 ? title : `${title} - ITSolvez`;
  // Title text for the generated share image — brand suffix stripped, the logo already
  // carries it — trimmed off any " - ..." / " | ..." / " — ..." brand tail (all three
  // separators handled so older stored titles still strip correctly).
  const imageTitle = title.replace(/\s*[-|—]\s*ITSolvez.*$/i, "").trim() || fullTitle;
  // Strip any localhost/internal URL so social crawlers get the live absolute URL.
  // fixMediaUrl() already returns a fully-qualified https://itsolvez.com/... URL for
  // /media/ paths — do not prepend SITE_URL again here (that double-prefixes the domain).
  // A real CMS-set image always wins; anything falsy or the old static default falls
  // through to a per-page generated image instead of reusing one image everywhere.
  const isRealCustomImage = ogImage && ogImage !== "/og-image.png" && ogImage !== DEFAULT_OG;
  const resolvedOg = isRealCustomImage
    ? ogImage!.startsWith("http") && (ogImage!.includes("127.0.0.1") || ogImage!.includes("localhost"))
      ? fixMediaUrl(ogImage)
      : ogImage!
    : dynamicOgUrl(imageTitle, slug);

  return {
    title: { absolute: fullTitle },
    description,
    keywords: keywords.length ? keywords : undefined,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    robots: noIndex
      ? "noindex,nofollow"
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: resolvedOg, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@itsolvez",
      title: fullTitle,
      description,
      images: [resolvedOg],
    },
  };
}

// ── Schema.org JSON-LD helpers ────────────────────────────────────────────────

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: "ITSolvez",
  legalName: "ITSolvez (Proprietorship)",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 },
  image: `${SITE_URL}/og-image.png`,
  description: "ITSolvez is a global software development company specialising in custom software, mobile app development, web development, ERP, CRM and HRMS solutions. Own products include OnlyOnTrip (travel booking platform), ERP, CRM, HRMS and Email Marketing. Serving clients in UAE, UK, USA, Singapore, Australia and worldwide.",
  foundingDate: "2012",
  identifier: "UDYAM-MH-19-0440563",
  priceRange: "$$",
  areaServed: ["Worldwide", "India", "UAE", "UK", "USA", "Singapore", "Australia", "Canada", "Germany", "Saudi Arabia", "Qatar", "South Africa"],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 9001:2015 — Quality Management System",
      identifier: "25-07-21156543",
      url: `${SITE_URL}/certificates/iso-9001-2015.pdf`,
      validFrom: "2026-07-09",
      validUntil: "2029-07-09",
      recognizedBy: { "@type": "Organization", name: "Anglia Compliance Group", url: "https://www.angliacompliance.uk" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 27001:2022 — Information Security Management System",
      identifier: "25-07-21156544",
      url: `${SITE_URL}/certificates/iso-27001-2022.pdf`,
      validFrom: "2026-07-09",
      validUntil: "2029-07-09",
      recognizedBy: { "@type": "Organization", name: "Anglia Compliance Group", url: "https://www.angliacompliance.uk" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 20000-1:2018 — IT Service Management System",
      identifier: "25-07-21156545",
      url: `${SITE_URL}/certificates/iso-20000-1-2018.pdf`,
      validFrom: "2026-07-09",
      validUntil: "2029-07-09",
      recognizedBy: { "@type": "Organization", name: "Anglia Compliance Group", url: "https://www.angliacompliance.uk" },
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development and IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Software" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Software" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HRMS Software" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing and SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consultancy" } },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Keshav 206 Vasudev Sky High CHS Ltd, Kanakia Road",
    addressLocality: "Mira Road East",
    addressRegion: "Maharashtra",
    postalCode: "401107",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9967470207",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
    {
      "@type": "ContactPoint",
      email: "info@itsolvez.com",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/itsolvez",
    "https://www.facebook.com/itsolvez",
    "https://www.instagram.com/itsolvez",
  ],
};

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: "ITSolvez", url: SITE_URL },
    url: `${SITE_URL}/services/${slug}/`,
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  published_date: string;
  author_name: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}/`,
    datePublished: post.published_date,
    author: { "@type": "Person", name: post.author_name },
    publisher: {
      "@type": "Organization",
      name: "ITSolvez",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function jobSchema(job: {
  title: string;
  description: string;
  location: string;
  employment_type: string;
  posted_date: string;
  location_type?: string;
  salary_min_lpa?: number;
  salary_max_lpa?: number;
  valid_through?: string;
}) {
  const typeMap: Record<string, string> = {
    FULL_TIME: "FULL_TIME", PART_TIME: "PART_TIME",
    CONTRACT: "CONTRACTOR", INTERNSHIP: "INTERN",
  };
  // Postings stay valid 90 days from posting unless a date is provided
  const validThrough =
    job.valid_through ??
    new Date(new Date(job.posted_date).getTime() + 90 * 24 * 3600 * 1000)
      .toISOString()
      .slice(0, 10);
  const isRemote = job.location_type === "remote";

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.posted_date,
    validThrough,
    employmentType: typeMap[job.employment_type] ?? "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: "ITSolvez", sameAs: SITE_URL, logo: `${SITE_URL}/logo.png` },
    ...(isRemote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "India" },
        }
      : {}),
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building No. 2, Keshav 206 Vasudev Sky High CHS Ltd, Kanakia Road",
        addressLocality: job.location || "Mira Road East, Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "401107",
        addressCountry: "IN",
      },
    },
    ...(job.salary_min_lpa && job.salary_max_lpa
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              minValue: job.salary_min_lpa * 100000,
              maxValue: job.salary_max_lpa * 100000,
              unitText: "YEAR",
            },
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// ── JsonLd component ─────────────────────────────────────────────────────────

export function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
