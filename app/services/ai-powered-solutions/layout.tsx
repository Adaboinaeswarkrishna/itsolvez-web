import type { Metadata } from "next";
import { buildMetadata } from "@/components/SEO";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "AI-Powered Solutions — Chatbots and Automation | ITSolvez",
    description: "ITSolvez builds real AI solutions for Indian businesses — chatbots, document intelligence, predictive analytics and workflow automation.",
    keywords: ["AI solutions India", "AI chatbot development India", "custom AI development", "machine learning India", "AI automation India", "LLM integration India", "AI for business India", "AI companies in India", "AI development company", "top AI companies in India", "AI companies", "artificial intelligence development company"],
    slug: "services/ai-powered-solutions",
    ogImage: "/og-image.png",
  });
}

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children;
}
