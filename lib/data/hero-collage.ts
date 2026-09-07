export interface HeroCollageItem {
  image: string;
  alt: string;
  tag?: string;
  result?: string; // real, already-published case study outcome — no new claims invented
}

// Real images and real case-study outcomes already used elsewhere on the
// site (app/page.tsx's case studies + about section) — reused here for the
// hero's visual column instead of the plain stat cards. No new content.
export const HERO_COLLAGE: HeroCollageItem[] = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
    alt: "Managed IT for a manufacturing client",
    tag: "Managed IT",
    result: "87% less downtime",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    alt: "24/7 MDR cybersecurity monitoring",
    tag: "Cybersecurity",
    result: "Threats stopped in 9 min",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    alt: "Zero-downtime AWS cloud migration",
    tag: "Cloud Migration",
    result: "₹18L saved annually",
  },
];
