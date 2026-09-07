// Real photographic fallback images for blog posts that have no Wagtail-uploaded
// featured_image, keyed by category (lowercased, exact match). Used on the blog
// listing cards, the blog detail page hero, and when generating social images
// (LinkedIn, etc.) for posts that only have category data to go on.
//
// This is separate from the dynamic OG card generator (app/og/route.tsx) — that
// one renders a branded text card and is used for the <meta property="og:image">
// tag specifically. This map is for on-page and off-site real photo placement.
export const CATEGORY_IMAGES: Record<string, string> = {
  "managed it":        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "it services":       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "cloud":             "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  "cloud computing":   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  "cybersecurity":     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  "compliance":        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  "digital marketing": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
  "web development":   "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  "ai":                "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  "ai & automation":   "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  "erp":               "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "custom software":   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "mobile app":        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  "app development":   "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  "it insights":       "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  "data & analytics":  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  "iot & data":        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
  "emerging tech":     "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "default":           "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
};

export function getCategoryImage(category: string | undefined | null, width = 800): string {
  const cat = (category ?? "").toLowerCase().trim();
  const base = CATEGORY_IMAGES[cat] ?? CATEGORY_IMAGES["default"];
  return base.replace(/w=\d+/, `w=${width}`);
}
