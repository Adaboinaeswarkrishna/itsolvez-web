import NavigationClient, { NavData } from "./NavigationClient";
import { API_BASE } from "@/lib/wagtail";

const FALLBACK: NavData = {
  cta_label: "Book a Free Consultation",
  cta_url: "/contact",
  items: [
    { label: "Home", url: "/", sub_items: [] },
    {
      label: "Company", url: "", sub_items: [
        { label: "About Us", url: "/about" },
        { label: "Our Products", url: "/products" },
        { label: "Certifications", url: "/certifications" },
        { label: "Locations", url: "/locations" },
        { label: "Careers", url: "/careers" },
        { label: "Pricing", url: "/pricing" },
        { label: "FAQ", url: "/faq" },
      ],
    },
    {
      label: "IT Solutions", url: "", sub_items: [
        { label: "AI-Powered Solutions", url: "/services/ai-powered-solutions" },
        { label: "Managed IT Services", url: "/services/managed-it" },
        { label: "IT Support and Service Desk", url: "/services/it-support" },
        { label: "Cloud Computing", url: "/services/cloud-computing" },
        { label: "Cybersecurity", url: "/services/cyber-security" },
        { label: "Custom Software", url: "/services/custom-software" },
        { label: "Web Development", url: "/services/web-development" },
        { label: "App Development", url: "/services/app-development" },
        { label: "Digital Marketing", url: "/services/digital-marketing" },
        { label: "IT Consultancy", url: "/services/it-consultancy" },
        { label: "Staff Augmentation", url: "/services/it-staff-augmentation" },
        { label: "IT Infrastructure", url: "/services/it-infrastructure-management" },
        { label: "System Integration", url: "/services/system-integration" },
        { label: "Data and Analytics", url: "/services/data-analytics" },
      ],
    },
    {
      label: "Industries", url: "", sub_items: [
        { label: "Banking and Finance", url: "/industries/banking-finance" },
        { label: "Capital Markets", url: "/industries/capital-markets" },
        { label: "Healthcare", url: "/industries/healthcare" },
        { label: "Retail and E-Commerce", url: "/industries/retail-ecommerce" },
        { label: "Education", url: "/industries/education" },
        { label: "Higher Education", url: "/industries/higher-education" },
        { label: "Manufacturing", url: "/industries/manufacturing" },
        { label: "Real Estate", url: "/industries/real-estate" },
        { label: "Logistics", url: "/industries/logistics" },
        { label: "Travel and Hospitality", url: "/industries/travel-hospitality" },
        { label: "Enterprise Technology", url: "/industries/enterprise-technology" },
      ],
    },
    { label: "ROI Calculator", url: "/tools/it-roi-calculator", sub_items: [] },
    { label: "Case Studies", url: "/case-studies", sub_items: [] },
    { label: "Blog", url: "/blog", sub_items: [] },
    { label: "Contact", url: "/contact", sub_items: [] },
  ],
};

async function getNav(): Promise<NavData> {
  try {
    const res = await fetch(
      `${API_BASE}/api/navigation/`,
      { next: { revalidate: 30 } }
    );
    if (!res.ok) return FALLBACK;
    return res.json();
  } catch {
    return FALLBACK;
  }
}

export default async function Navigation() {
  const nav = await getNav();
  return <NavigationClient nav={nav} />;
}
