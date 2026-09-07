import {
  Bot, Workflow, BarChart3, FileSearch, Eye, MessageSquare, type LucideIcon,
} from "lucide-react";

export interface AICapability {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
  color: string;
  bg: string;
}

// Real AI capabilities ITSolvez builds, shared verbatim between the dedicated
// /services/ai-powered-solutions page and the homepage's summary section, so
// there is one source of truth for this content.
export const CAPABILITIES: AICapability[] = [
  {
    icon: Bot,
    title: "AI Chatbots and Virtual Assistants",
    body: "Custom-trained assistants for sales, support and internal teams. Integrated into your website, WhatsApp, Slack or mobile app. Not generic, trained on your products, FAQs and processes.",
    tags: ["OpenAI GPT-4", "Claude API", "WhatsApp Business", "Custom RAG"],
    color: "#1878F0",
    bg: "#EAF2FF",
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    body: "Automate repetitive back-office work, document processing, data extraction, invoice matching, email triage, approval chains. Reduces manual effort by 60–80% on routine tasks.",
    tags: ["n8n", "LangChain", "Python", "Webhooks"],
    color: "#F04830",
    bg: "#FFF0EC",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics and ML",
    body: "Demand forecasting, churn prediction, fraud detection, dynamic pricing, models trained on your own data, deployed as APIs your existing systems can call.",
    tags: ["scikit-learn", "TensorFlow", "AWS SageMaker", "FastAPI"],
    color: "#0B8A3E",
    bg: "#EDFAF3",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence and NLP",
    body: "Extract structured data from invoices, contracts, medical reports, KYC documents. Summarise, classify and route documents automatically, no manual data entry.",
    tags: ["Claude API", "OCR", "LangChain", "PostgreSQL"],
    color: "#7C3AED",
    bg: "#F5F0FF",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    body: "Quality inspection, object detection, face recognition, number plate reading, real-time vision processing for manufacturing, security and logistics.",
    tags: ["OpenCV", "YOLO", "TensorFlow", "RTSP Streams"],
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: MessageSquare,
    title: "Custom LLM Integration",
    body: "Embed GPT-4, Claude, Gemini or open-source models (Llama, Mistral) into your existing products, ERP, CRM, HRMS, mobile apps. Add AI features without rebuilding from scratch.",
    tags: ["OpenAI", "Anthropic Claude", "Google Gemini", "Ollama / Llama"],
    color: "#1878F0",
    bg: "#EAF2FF",
  },
];
