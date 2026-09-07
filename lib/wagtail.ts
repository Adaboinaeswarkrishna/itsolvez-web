// WAGTAIL_API_URL is a server-only runtime var (set in .env.local on the server).
// Falls back to NEXT_PUBLIC_ for local dev, then to port 8000.
export const API_BASE =
  process.env.WAGTAIL_API_URL ??
  process.env.NEXT_PUBLIC_WAGTAIL_API_URL ??
  "http://localhost:8000";

// Converts internal Django media URLs to relative paths so the browser
// fetches them through the Next.js /media/ proxy instead of the internal port.
// e.g. http://127.0.0.1:8095/media/foo.png → /media/foo.png
export function fixMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  const rel = url.replace(/^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?/, "");
  // Absolute public URL so next/image fetches media with the correct Host header
  // (internal rewrite proxying sends Host localhost → Django DisallowedHost → 400)
  return rel.startsWith("/media/") || rel.startsWith("/documents/")
    ? `https://itsolvez.com${rel}`
    : rel;
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    next: { revalidate: 60 }, // ISR: refresh every 60s
    ...options,
  });
  if (!res.ok) throw new Error(`Wagtail API error: ${res.status} ${path}`);
  return res.json();
}

// ── Pages ────────────────────────────────────────────────────────────────────

export async function getPages(type?: string) {
  const q = type ? `?type=${type}&fields=*` : "?fields=*";
  return apiFetch<{ items: WagtailPage[] }>(`/api/v2/pages/${q}`);
}

export async function getPage(slug: string) {
  const data = await apiFetch<{ items: WagtailPage[] }>(
    `/api/v2/pages/?slug=${slug}&fields=*`
  );
  return data.items[0] ?? null;
}

export async function getPageById(id: number) {
  return apiFetch<WagtailPage>(`/api/v2/pages/${id}/?fields=*`);
}

// ── Services ─────────────────────────────────────────────────────────────────

export async function getServices() {
  const data = await apiFetch<{ items: ServicePage[] }>(
    "/api/v2/pages/?type=services.ServicePage&fields=*&order=order"
  );
  return data.items;
}

export async function getService(slug: string) {
  const data = await apiFetch<{ items: ServicePage[] }>(
    `/api/v2/pages/?type=services.ServicePage&slug=${slug}&fields=*`
  );
  return data.items[0] ?? null;
}

// ── Industries ───────────────────────────────────────────────────────────────

export async function getIndustries() {
  const data = await apiFetch<{ items: IndustryPage[] }>(
    "/api/v2/pages/?type=industries.IndustryPage&fields=*&order=order"
  );
  return data.items;
}

export async function getIndustry(slug: string) {
  const data = await apiFetch<{ items: IndustryPage[] }>(
    `/api/v2/pages/?type=industries.IndustryPage&slug=${slug}&fields=*`
  );
  return data.items[0] ?? null;
}

// ── Blog ─────────────────────────────────────────────────────────────────────

export async function getBlogPosts(page = 1, limit = 12) {
  const offset = (page - 1) * limit;
  return apiFetch<{ meta: { total_count: number }; items: BlogPost[] }>(
    `/api/v2/pages/?type=blog.BlogPage&fields=*&order=-published_date&limit=${limit}&offset=${offset}`
  );
}

export async function getBlogPost(slug: string) {
  const data = await apiFetch<{ items: BlogPost[] }>(
    `/api/v2/pages/?type=blog.BlogPage&slug=${slug}&fields=*`
  );
  return data.items[0] ?? null;
}

// ── Case Studies ─────────────────────────────────────────────────────────────

export async function getCaseStudies(filters?: { industry?: string; service?: string }) {
  let q = "/api/v2/pages/?type=case_studies.CaseStudyPage&fields=*&order=-published_date";
  if (filters?.industry) q += `&industry=${filters.industry}`;
  if (filters?.service) q += `&service=${filters.service}`;
  return apiFetch<{ items: CaseStudy[] }>(q);
}

export async function getCaseStudy(slug: string) {
  const data = await apiFetch<{ items: CaseStudy[] }>(
    `/api/v2/pages/?type=case_studies.CaseStudyPage&slug=${slug}&fields=*`
  );
  return data.items[0] ?? null;
}

// ── Snippets ─────────────────────────────────────────────────────────────────

export async function getTeamMembers() {
  return apiFetch<{ results: TeamMember[] }>("/api/v2/team-members/");
}

export async function getTestimonials(featuredOnly = false) {
  const q = featuredOnly ? "?featured=true" : "";
  return apiFetch<{ results: Testimonial[] }>(`/api/v2/testimonials/${q}`);
}

export async function getJobOpenings() {
  return apiFetch<{ results: JobOpening[] }>("/api/v2/job-openings/");
}

export async function getFAQItems(category?: string) {
  const q = category ? `?category=${category}` : "";
  return apiFetch<{ results: FAQItem[] }>(`/api/v2/faq/${q}`);
}

export async function getPageSEO(slug: string): Promise<PageSEOData | null> {
  try {
    const data = await apiFetch<PageSEOData & { not_found?: boolean }>(
      `/api/v2/page-seo/?slug=${slug}`
    );
    if (data.not_found) return null;
    return data;
  } catch {
    return null;
  }
}

export async function getSiteSettings() {
  return apiFetch<SiteSettings>("/api/v2/site-settings/");
}

// ── Content Pages ─────────────────────────────────────────────────────────────

export async function getAboutPage() {
  const data = await apiFetch<{ items: AboutPage[] }>(
    "/api/v2/pages/?type=about.AboutPage&fields=*"
  );
  return data.items[0] ?? null;
}

export async function getPricingPage() {
  const data = await apiFetch<{ items: PricingPage[] }>(
    "/api/v2/pages/?type=pricing.PricingPage&fields=*"
  );
  return data.items[0] ?? null;
}

export async function getLocationsPage() {
  const data = await apiFetch<{ items: LocationsPage[] }>(
    "/api/v2/pages/?type=locations.LocationsPage&fields=*"
  );
  return data.items[0] ?? null;
}

export async function getContactPage() {
  const data = await apiFetch<{ items: ContactPageData[] }>(
    "/api/v2/pages/?type=contact.ContactPage&fields=*"
  );
  return data.items[0] ?? null;
}

export async function getGenericPage(slug: string) {
  const data = await apiFetch<{ items: GenericPageData[] }>(
    `/api/v2/pages/?type=legal.LegalPage&slug=${slug}&fields=*`
  );
  return data.items[0] ?? null;
}

// ── Leads / Contact Form ──────────────────────────────────────────────────────

export async function submitLead(data: LeadPayload) {
  const res = await fetch(`${API_BASE}/api/leads/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// ── Types ─────────────────────────────────────────────────────────────────────

export interface WagtailPage {
  id: number;
  title: string;
  slug: string; // may be undefined in API — slug lives in meta.slug
  meta: { type: string; html_url: string; first_published_at: string; slug: string };
  seo_title?: string;
  search_description?: string;
}

export interface ServicePage extends WagtailPage {
  tagline: string;
  icon: string;
  overview: string;
  key_benefits: { type: string; value: { icon: string; title: string; description: string } }[];
  our_process: { type: string; value: { step_number: number; title: string; description: string } }[];
  technologies: string;
  cta_text: string;
  cta_url: string;
  featured: boolean;
  order: number;
  hero_image: { url: string; width: number; height: number } | null;
}

export interface IndustryPage extends WagtailPage {
  tagline: string;
  icon: string;
  overview: string;
  challenges: { type: string; value: { title: string; description: string } }[];
  our_solutions: string;
  key_stats: string;
  featured: boolean;
  order: number;
  hero_image: { url: string; width: number; height: number } | null;
}

export interface BlogPost extends WagtailPage {
  category: string;
  author_name: string;
  excerpt: string;
  body: string;
  read_time: number;
  published_date: string;
  featured: boolean;
  featured_image: { url: string; width: number; height: number } | null;
}

export interface CaseStudy extends WagtailPage {
  client_name: string;
  industry: string;
  service: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string;
  key_metrics: string;
  testimonial_quote: string;
  testimonial_author: string;
  published_date: string;
  featured: boolean;
  featured_image: { url: string; width: number; height: number } | null;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  linkedin_url: string;
  twitter_url: string;
  order: number;
  photo: { url: string } | null;
}

export interface Testimonial {
  id: number;
  client_name: string;
  client_role: string;
  company: string;
  quote: string;
  rating: number;
  featured: boolean;
}

export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  location_type: string;
  employment_type: string;
  experience: string;
  description: string;
  salary_range: string;
  posted_date: string;
  apply_url: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  linkedin_url: string;
  twitter_url: string;
  facebook_url: string;
  instagram_url: string;
  udyam_number: string;
}

// ── Content page types ────────────────────────────────────────────────────────

export interface AboutPage extends WagtailPage {
  hero_subtitle: string;
  story: string;
  mission: string;
  vision: string;
  values: { type: string; value: { icon: string; title: string; description: string } }[];
  milestones: { type: string; value: { year: string; event: string } }[];
  certifications: string;
  stats_years: string;
  stats_clients: string;
  stats_projects: string;
  stats_countries: string;
  founder_name: string;
  founder_role: string;
  founder_bio: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta_text: string;
  highlighted: boolean;
}

export interface PricingPage extends WagtailPage {
  hero_subtitle: string;
  plans: { type: string; value: PricingPlan }[];
  project_pricing_intro: string;
  disclaimer: string;
}

export interface LocationsPage extends WagtailPage {
  hero_subtitle: string;
  office_label: string;
  office_address: string;
  office_phone: string;
  office_email: string;
  office_hours: string;
  office_24x7_note: string;
  coverage_areas: { type: string; value: { region: string; coverage: string } }[];
}

export interface ContactPageData extends WagtailPage {
  hero_subtitle: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  response_time_enquiry: string;
  response_time_critical: string;
}

export interface GenericPageData extends WagtailPage {
  subtitle: string;
  last_updated: string;
  body: string;
}

export interface LeadPayload {
  lead_type: "contact" | "quote" | "newsletter";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message?: string;
}

export interface PageSEOData {
  slug: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  og_title: string;
  og_description: string;
  og_image: string | null;
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  category_display: string;
  client_industry: string;
  tagline: string;
  description: string;
  tech_stack: string[];
  results: { label: string; value: string }[];
  image_url: string;
  featured: boolean;
  order: number;
}

export async function getPortfolioProjects(category?: string): Promise<PortfolioProject[]> {
  try {
    const q = category ? `?category=${category}` : "";
    const res = await fetch(`${API_BASE}/api/portfolio/${q}`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results ?? [];
  } catch {
    return [];
  }
}
