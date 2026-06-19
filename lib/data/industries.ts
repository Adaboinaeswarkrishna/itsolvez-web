export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  keywords: string[];
  faq: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    slug: "banking",
    title: "Banking & Financial Services",
    shortTitle: "Banking",
    description: "Secure, compliant, always-on IT for banking and fintech — storage, security, DR and enablement.",
    icon: "Landmark",
    metaTitle: "IT Services for Banking & Financial Services India — ITSolvez",
    metaDescription:
      "Secure, RBI-compliant IT for banks, NBFCs and fintech. Cybersecurity, managed IT, cloud and custom software. Get a free assessment.",
    h1: "Secure, compliant IT for banking — always on, always protected.",
    intro:
      "Banking and financial services run on trust — and trust runs on uptime, data integrity and regulatory compliance. ITSolvez delivers IT infrastructure, cybersecurity and digital services specifically designed for the demands of regulated financial institutions: banks, NBFCs, cooperative banks, insurance companies and fintech startups.\n\nWe understand the RBI IT Framework, DPDPA 2023, and the operational requirements that come with handling financial data at scale. Our engagements are built around one principle: your systems never go down when your customers need them.",
    challenges: [
      "RBI IT governance and audit requirements",
      "DPDPA 2023 personal data protection obligations",
      "Core banking system reliability and disaster recovery",
      "Real-time fraud detection and cyber threat response",
      "Branch network connectivity and uptime",
      "Digital channel performance (mobile banking, internet banking)",
    ],
    solutions: [
      "Managed IT for 24/7 core-banking availability with tested failover",
      "Cybersecurity and MDR aligned to RBI IT framework requirements",
      "Disaster recovery and business continuity planning for financial data",
      "DPDPA-compliant data management and breach-response procedures",
      "Custom software for fintech products, portals and back-office automation",
      "Cloud strategy for regulated environments — AWS GovCloud / Azure for Finance",
    ],
    services: ["managed-it", "cyber-security", "cloud-computing", "custom-software", "system-integration"],
    keywords: [
      "IT services for banks India", "banking cybersecurity", "fintech IT solutions",
      "RBI compliance IT", "NBFC IT services", "financial services IT India",
    ],
    faq: [
      {
        q: "Are you familiar with RBI IT governance requirements?",
        a: "Yes. We design IT environments for banking clients with RBI's Master Direction on IT Governance in mind — including business continuity, information security, audit trails and outsourcing risk management.",
      },
      {
        q: "Can you support core banking system integration?",
        a: "Yes — we have experience integrating with Finacle, Temenos, BankWare and custom core banking platforms through API and middleware layers.",
      },
    ],
  },
  {
    slug: "capital-markets",
    title: "Capital Markets",
    shortTitle: "Capital Markets",
    description: "Automation, data and integration that streamline transactions and reporting.",
    icon: "BarChart2",
    metaTitle: "IT Services for Capital Markets India — ITSolvez",
    metaDescription:
      "Trading system support, market data integration and automation for brokerages, AMCs and capital markets firms. Get a consultation.",
    h1: "Capital markets technology that keeps pace with the market.",
    intro:
      "In capital markets, milliseconds matter and data integrity is non-negotiable. ITSolvez supports brokerages, asset management companies, depository participants and exchanges with technology that handles the speed, complexity and regulatory load of modern capital markets operations.\n\nFrom trading system support and market data integration to back-office automation and SEBI compliance reporting, we align our delivery with the operating rhythm of your business.",
    challenges: [
      "Low-latency trading infrastructure and system performance",
      "Market data feed integration and normalisation",
      "SEBI compliance reporting and audit readiness",
      "Back-office automation and settlement workflows",
      "Business continuity for mission-critical trading systems",
      "Cybersecurity for high-value transactional environments",
    ],
    solutions: [
      "Infrastructure management for low-latency trading environments",
      "Market data integration — FIX protocol, Bloomberg, Reuters feeds",
      "Custom back-office and reporting tools for SEBI compliance",
      "Cybersecurity for trading systems and client-data environments",
      "Business continuity planning for exchange-connected systems",
      "Cloud migration for analytics and non-latency-sensitive workloads",
    ],
    services: ["managed-it", "system-integration", "custom-software", "cyber-security", "cloud-computing"],
    keywords: [
      "capital markets technology India", "trading systems support",
      "market data integration", "SEBI compliance IT", "brokerage IT services",
    ],
    faq: [
      {
        q: "Can you support FIX protocol integration?",
        a: "Yes — we have experience building and maintaining FIX protocol adaptors for order management systems, market data feeds and execution venues.",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    description: "Automation, IoT, ERP and analytics for efficient, secure production environments.",
    icon: "Factory",
    metaTitle: "IT Services for Manufacturing Industry India — ITSolvez",
    metaDescription:
      "ERP integration, IoT connectivity, OT security and IT infrastructure for manufacturing businesses. Improve efficiency and protect your production floor.",
    h1: "Manufacturing IT that connects the factory floor to the boardroom.",
    intro:
      "Modern manufacturing is as much a technology challenge as an operational one. From IoT-connected production lines to ERP systems that span procurement, inventory and finance, the complexity is real — and so is the exposure when something goes wrong.\n\nITSolvez supports manufacturers with ERP integration, OT (operational technology) security, IoT infrastructure, and the IT backbone that connects your factory floor to your management systems. We understand both the IT and OT environments — and how to secure the intersection between them.",
    challenges: [
      "ERP implementation and integration across procurement, production and finance",
      "OT/IT network segmentation and security (protecting PLCs, SCADA systems)",
      "IoT device connectivity and data pipelines from production equipment",
      "Production data analytics and real-time dashboards",
      "Supply chain system integration and visibility",
      "Disaster recovery for production-critical systems",
    ],
    solutions: [
      "ERP integration — SAP, Oracle, Microsoft Dynamics, Odoo for manufacturing",
      "OT security — network segmentation, ICS/SCADA monitoring, anomaly detection",
      "IoT infrastructure — device management, edge computing, data pipelines",
      "Custom manufacturing dashboards and analytics",
      "Supply chain integration — ERP to 3PL, logistics and supplier portals",
      "Managed IT for plant and corporate office environments",
    ],
    services: ["system-integration", "cyber-security", "custom-software", "managed-it", "it-infrastructure-management"],
    keywords: [
      "IT for manufacturing India", "ERP integration manufacturing",
      "IoT manufacturing", "OT security", "manufacturing IT services India",
    ],
    faq: [
      {
        q: "Can you help secure our OT environment?",
        a: "Yes — OT (operational technology) security requires a different approach to IT security. We design network segmentation between IT and OT zones, implement ICS-aware monitoring, and help you apply the IEC 62443 framework to your production environment.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    shortTitle: "Healthcare",
    description: "Secure, compliant IT for patient data, EHR systems and telemedicine platforms.",
    icon: "HeartPulse",
    metaTitle: "Healthcare IT Services India — ITSolvez",
    metaDescription:
      "Secure, DPDPA-compliant IT for hospitals, clinics and healthtech companies. EHR support, telemedicine infrastructure, data security.",
    h1: "Healthcare IT that protects patient data and keeps systems running.",
    intro:
      "Patient data is among the most sensitive there is — and healthcare systems are among the most heavily targeted by cybercriminals. ITSolvez delivers IT infrastructure, security and software specifically designed for the healthcare sector: hospitals, diagnostic chains, clinics, pharmaceutical companies and healthtech startups.\n\nWe build healthcare IT environments that are secure by design, compliant with DPDPA 2023, and operationally resilient — because in healthcare, downtime has consequences beyond a business metric.",
    challenges: [
      "EHR/EMR system reliability and interoperability",
      "DPDPA 2023 compliance for patient health records",
      "Telemedicine infrastructure and video consultation reliability",
      "Medical IoT device connectivity and data security",
      "Hospital network uptime for critical care systems",
      "Ransomware defence for healthcare environments",
    ],
    solutions: [
      "Managed IT for hospital and clinic networks with 24/7 uptime monitoring",
      "EHR/EMR integration and support — HL7, FHIR standard compliance",
      "DPDPA-compliant patient data management and consent workflows",
      "Telemedicine platform development and hosting",
      "Medical IoT security — device inventory, monitoring, segmentation",
      "Cybersecurity and ransomware defence tailored for healthcare",
    ],
    services: ["managed-it", "cyber-security", "custom-software", "cloud-computing", "system-integration"],
    keywords: [
      "healthcare IT services India", "EHR support India", "hospital IT management",
      "DPDPA healthcare compliance", "telemedicine infrastructure", "healthtech IT",
    ],
    faq: [
      {
        q: "Do you have experience with HL7 and FHIR standards?",
        a: "Yes — we build integrations using HL7 v2/v3 and FHIR R4 for EHR interoperability, lab result feeds, and telemedicine platform connections.",
      },
      {
        q: "How do you handle patient data under DPDPA 2023?",
        a: "We implement technical safeguards including encryption at rest and in transit, access controls and audit logs, consent management workflows, and breach-response procedures aligned with DPDPA obligations.",
      },
    ],
  },
  {
    slug: "higher-education",
    title: "Higher Education",
    shortTitle: "Higher Education",
    description: "Reliable campus networks, secure data and edtech support at scale.",
    icon: "GraduationCap",
    metaTitle: "IT Services for Higher Education India — ITSolvez",
    metaDescription:
      "Campus network management, student information systems, LMS integration and cybersecurity for universities and colleges.",
    h1: "Campus IT that supports learning — at any scale.",
    intro:
      "Universities and colleges run complex IT environments: multi-site campus networks, student information systems, learning management platforms, research data, and an ever-changing population of devices. ITSolvez delivers IT infrastructure, support and software that keeps the academic environment running — for students, faculty and administration.\n\nWe understand the budget pressures and procurement cycles of higher education, and we build solutions that scale with enrolment without requiring constant re-investment.",
    challenges: [
      "Campus-wide Wi-Fi and network reliability at scale",
      "Student information system (SIS) management and integration",
      "LMS (Learning Management System) hosting and support",
      "Cybersecurity for research data and student records",
      "Device management for BYOD student populations",
      "Exam and assessment platform reliability",
    ],
    solutions: [
      "Campus network design, deployment and managed services",
      "Student information system integration and support",
      "LMS hosting, integration and helpdesk",
      "Cybersecurity for student records and research data",
      "Microsoft 365 / Google Workspace deployment and management",
      "IT helpdesk for students and faculty — multi-channel support",
    ],
    services: ["managed-it", "it-infrastructure-management", "cyber-security", "custom-software", "it-support"],
    keywords: [
      "IT services for universities India", "campus network management",
      "edtech support", "higher education IT", "LMS support India",
      "university IT services",
    ],
    faq: [
      {
        q: "Can you support a multi-campus environment?",
        a: "Yes — we manage multi-campus networks via SD-WAN and centralised monitoring, giving your IT team visibility across all sites from a single dashboard.",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    shortTitle: "Logistics",
    description: "Visibility, integration and uptime across the supply chain.",
    icon: "Truck",
    metaTitle: "IT Services for Logistics & Supply Chain India — ITSolvez",
    metaDescription:
      "Supply chain software, fleet and warehouse management systems, and IT infrastructure for logistics companies across India.",
    h1: "Logistics IT that gives you visibility — from warehouse to last mile.",
    intro:
      "Logistics businesses run on visibility: where is the shipment, when will it arrive, and is the warehouse system keeping up? ITSolvez delivers the IT infrastructure, integrations and custom software that give logistics companies real-time visibility across their operations — from warehouse management to last-mile delivery tracking.\n\nWe support 3PLs, freight forwarders, e-commerce logistics providers and courier networks with technology that scales with volume and doesn't go down when shipments peak.",
    challenges: [
      "Warehouse management system (WMS) reliability and integration",
      "Last-mile delivery tracking and driver app development",
      "E-commerce platform and 3PL integration",
      "Fleet management and GPS tracking",
      "IT infrastructure for warehouse and distribution centres",
      "Data integration across carrier, customs and client systems",
    ],
    solutions: [
      "Custom WMS development and ERP integration",
      "Last-mile delivery tracking apps (Android/iOS/web)",
      "E-commerce platform integration — Shopify, Amazon, Flipkart",
      "Fleet management platform development",
      "IT infrastructure for warehouse environments — rugged devices, Wi-Fi, servers",
      "Carrier and customs API integration",
    ],
    services: ["custom-software", "system-integration", "app-development", "managed-it", "it-infrastructure-management"],
    keywords: [
      "IT for logistics India", "supply chain software India",
      "fleet management system", "warehouse management IT", "logistics IT services",
      "3PL IT services India",
    ],
    faq: [
      {
        q: "Can you build a custom delivery tracking app?",
        a: "Yes — we build driver apps (Android/iOS) and customer-facing tracking portals with real-time GPS, proof-of-delivery capture, and integration with your WMS or ERP.",
      },
    ],
  },
  {
    slug: "enterprise-technology",
    title: "Enterprise Technology",
    shortTitle: "Enterprise",
    description: "Scalable, secure IT operations for complex enterprise environments.",
    icon: "Building2",
    metaTitle: "Enterprise IT Services India — ITSolvez",
    metaDescription:
      "Scalable managed IT, cloud, cybersecurity and digital transformation for enterprise organisations across India.",
    h1: "Enterprise IT that runs at the pace your business demands.",
    intro:
      "Enterprise technology environments are complex by definition: multi-cloud infrastructure, hundreds or thousands of endpoints, layered security requirements, compliance obligations, and the expectations of a demanding user base. ITSolvez delivers managed IT, cybersecurity, cloud operations and custom software at enterprise scale — with the governance, reporting and SLAs that large organisations require.\n\nWe act as an extension of your IT team — not a vendor you have to manage — and we measure ourselves by business outcomes, not ticket counts.",
    challenges: [
      "Multi-cloud environment management and cost control",
      "Enterprise endpoint management at scale",
      "Zero-trust security architecture implementation",
      "Large-scale Microsoft 365 / Azure AD management",
      "IT compliance, audit readiness and risk management",
      "Digital transformation programme execution",
    ],
    solutions: [
      "Enterprise managed IT with dedicated account management",
      "Multi-cloud management — AWS, Azure, GCP cost optimisation",
      "Zero-trust security architecture and implementation",
      "Enterprise endpoint management (Microsoft Intune, Jamf)",
      "IT compliance and audit support — ISO 27001, SOC 2, DPDPA",
      "Digital transformation consulting and delivery",
    ],
    services: ["managed-it", "cloud-computing", "cyber-security", "it-consultancy", "custom-software"],
    keywords: [
      "enterprise IT services India", "enterprise cloud management",
      "digital transformation enterprise", "enterprise managed IT India",
      "large enterprise IT support",
    ],
    faq: [
      {
        q: "Do you offer dedicated account management for enterprise clients?",
        a: "Yes — enterprise clients get a named account manager, a dedicated technical lead, and quarterly business reviews with performance reporting against SLAs.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
