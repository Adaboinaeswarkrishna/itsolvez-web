export interface Industry {
  slug: string;
  heroImage: string;
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
    slug: "banking-finance",
    heroImage: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f",
    title: "Banking and Financial Services",
    shortTitle: "Banking and Finance",
    description: "Secure, compliant, always-on IT for banking and fintech — storage, security, DR and enablement.",
    icon: "Landmark",
    metaTitle: "IT Services for Banking and Finance India | ITSolvez",
    metaDescription:
      "Secure, RBI-compliant IT for banks, NBFCs and fintech. Cybersecurity, managed IT, cloud and custom software. Get a free assessment.",
    h1: "Secure, compliant IT for banking — always on, always protected.",
    intro:
      "Banking and financial services run on trust — and trust runs on uptime, data integrity and regulatory compliance. ITSolvez delivers IT infrastructure, cybersecurity and digital services specifically designed for the demands of regulated financial institutions: banks, NBFCs, cooperative banks, insurance companies and fintech startups.\n\nWe understand the RBI IT Framework, DPDPA 2023, and the operational requirements that come with handling financial data at scale. Our engagements are built around one principle: your systems never go down when your customers need them.\n\nBeyond infrastructure and security, we also build the digital front end banking and fintech businesses need: bank and NBFC websites designed for trust and RBI-ready disclosure, customer and investor self-service portals, CRM systems for relationship managers and loan officers, and compliance-reviewed WordPress/CMS sites for financial literacy content and marketing. If a deposit calculator, a loan-eligibility portal or a distributor CRM needs building, that's custom software work we do alongside the infrastructure.",
    challenges: [
      "RBI IT governance and audit requirements",
      "DPDPA 2023 personal data protection obligations",
      "Core banking system reliability and disaster recovery",
      "Real-time fraud detection and cyber threat response",
      "Branch network connectivity and uptime",
      "Digital channel performance (mobile banking, internet banking)",
      "A trustworthy web presence and self-service portals for customers and investors",
    ],
    solutions: [
      "Managed IT for 24/7 core-banking availability with tested failover",
      "Cybersecurity and MDR aligned to RBI IT framework requirements",
      "Disaster recovery and business continuity planning for financial data",
      "DPDPA-compliant data management and breach-response procedures",
      "Custom software for fintech products, portals and back-office automation",
      "Cloud strategy for regulated environments — AWS GovCloud / Azure for Finance",
      "Bank and NBFC websites built compliance-first — RBI-ready disclosures, accessibility, fast load times",
      "Customer self-service and investor-relations portals with secure login and document access",
      "CRM for relationship managers and loan officers — lead tracking, KYC status, cross-sell workflows",
      "Compliance-reviewed WordPress/CMS sites for financial literacy blogs and marketing microsites",
      "Digital lending and loan-origination portals with e-KYC and document upload integration",
    ],
    services: ["managed-it", "cyber-security", "cloud-computing", "custom-software", "system-integration", "web-development"],
    keywords: [
      "IT services for banks India", "banking cybersecurity", "fintech IT solutions",
      "RBI compliance IT", "NBFC IT services", "financial services IT India",
      "banking website development", "loan origination portal", "banking CRM software",
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
      {
        q: "Do you build websites for banks, NBFCs and fintech companies?",
        a: "Yes — we design and build corporate and marketing websites for financial institutions with RBI-appropriate disclosures, fast performance and accessibility built in, plus a CMS your compliance team can review before publishing.",
      },
      {
        q: "Can you build a CRM for our relationship managers or loan officers?",
        a: "Yes — we build custom CRM systems that track leads, KYC status, cross-sell opportunities and follow-ups, integrated with your core banking or loan-origination system so RMs work from one screen instead of five.",
      },
      {
        q: "Do you build customer or investor self-service portals?",
        a: "Yes — secure portals for account statements, investor documents, loan applications and support tickets, with role-based access and audit logging appropriate for regulated financial data.",
      },
    ],
  },
  {
    slug: "capital-markets",
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    title: "Capital Markets",
    shortTitle: "Capital Markets",
    description: "Automation, data and integration that streamline transactions and reporting.",
    icon: "BarChart2",
    metaTitle: "IT Services for Capital Markets India — ITSolvez",
    metaDescription:
      "Trading system support, market data integration and automation for brokerages, AMCs and capital markets firms. Get a consultation.",
    h1: "Capital markets technology that keeps pace with the market.",
    intro:
      "In capital markets, milliseconds matter and data integrity is non-negotiable. ITSolvez supports brokerages, asset management companies, depository participants and exchanges with technology that handles the speed, complexity and regulatory load of modern capital markets operations.\n\nFrom trading system support and market data integration to back-office automation and SEBI compliance reporting, we align our delivery with the operating rhythm of your business.\n\nWe also build the client-facing and internal software layer on top of that infrastructure: broker and AMC websites, client reporting and statement portals, CRM for relationship managers and dealers, and CMS-driven research or market-commentary publishing — all built by the same team maintaining your trading and back-office systems, so nothing is disconnected from your compliance and data requirements.",
    challenges: [
      "Low-latency trading infrastructure and system performance",
      "Market data feed integration and normalisation",
      "SEBI compliance reporting and audit readiness",
      "Back-office automation and settlement workflows",
      "Business continuity for mission-critical trading systems",
      "Cybersecurity for high-value transactional environments",
      "A professional website and client portal that matches the trust the business needs",
    ],
    solutions: [
      "Infrastructure management for low-latency trading environments",
      "Market data integration — FIX protocol, Bloomberg, Reuters feeds",
      "Custom back-office and reporting tools for SEBI compliance",
      "Cybersecurity for trading systems and client-data environments",
      "Business continuity planning for exchange-connected systems",
      "Cloud migration for analytics and non-latency-sensitive workloads",
      "Brokerage and AMC websites with account-opening and KYC lead capture",
      "Client reporting portals — statements, contract notes, portfolio dashboards",
      "CRM for relationship managers and dealers — client activity, AUM tracking, renewals",
      "CMS/WordPress-based publishing for research notes and market commentary",
    ],
    services: ["managed-it", "system-integration", "custom-software", "cyber-security", "cloud-computing", "web-development"],
    keywords: [
      "capital markets technology India", "trading systems support",
      "market data integration", "SEBI compliance IT", "brokerage IT services",
      "brokerage website development", "capital markets CRM", "client reporting portal",
    ],
    faq: [
      {
        q: "Can you support FIX protocol integration?",
        a: "Yes — we have experience building and maintaining FIX protocol adaptors for order management systems, market data feeds and execution venues.",
      },
      {
        q: "Do you build websites and client portals for brokerages and AMCs?",
        a: "Yes — we build brokerage and AMC websites with account-opening and lead capture, plus secure client portals for statements, contract notes and portfolio reporting.",
      },
      {
        q: "Can you build a CRM for our dealers or relationship managers?",
        a: "Yes — we build CRM systems tracking client activity, AUM, renewals and follow-ups, integrated with your trading or back-office platform.",
      },
    ],
  },
  {
    slug: "manufacturing",
    heroImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940",
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    description: "Automation, IoT, ERP and analytics for efficient, secure production environments.",
    icon: "Factory",
    metaTitle: "IT Services for Manufacturing Industry India — ITSolvez",
    metaDescription:
      "ERP integration, IoT connectivity, OT security and IT infrastructure for manufacturing businesses. Improve efficiency and protect your production floor.",
    h1: "Manufacturing IT that connects the factory floor to the boardroom.",
    intro:
      "Modern manufacturing is as much a technology challenge as an operational one. From IoT-connected production lines to ERP systems that span procurement, inventory and finance, the complexity is real — and so is the exposure when something goes wrong.\n\nITSolvez supports manufacturers with ERP integration, OT (operational technology) security, IoT infrastructure, and the IT backbone that connects your factory floor to your management systems. We understand both the IT and OT environments — and how to secure the intersection between them.\n\nWe also build the software your commercial side runs on: corporate and product websites with technical spec sheets and catalogues, dealer and distributor portals for order placement and stock visibility, CRM for B2B sales pipelines, and a WordPress/CMS-managed product catalogue your marketing team can update without waiting on IT.",
    challenges: [
      "ERP implementation and integration across procurement, production and finance",
      "OT/IT network segmentation and security (protecting PLCs, SCADA systems)",
      "IoT device connectivity and data pipelines from production equipment",
      "Production data analytics and real-time dashboards",
      "Supply chain system integration and visibility",
      "Disaster recovery for production-critical systems",
      "An outdated website and no digital portal for dealers or distributors",
    ],
    solutions: [
      "ERP integration — SAP, Oracle, Microsoft Dynamics, Odoo for manufacturing",
      "OT security — network segmentation, ICS/SCADA monitoring, anomaly detection",
      "IoT infrastructure — device management, edge computing, data pipelines",
      "Custom manufacturing dashboards and analytics",
      "Supply chain integration — ERP to 3PL, logistics and supplier portals",
      "Managed IT for plant and corporate office environments",
      "Corporate and product websites with spec sheets, catalogues and enquiry forms",
      "Dealer and distributor portals — order placement, stock visibility, credit status",
      "CRM for B2B sales teams — enquiry-to-order pipeline, quote tracking, account history",
      "WordPress/CMS-managed product catalogue and content, editable without developer support",
    ],
    services: ["system-integration", "cyber-security", "custom-software", "managed-it", "it-infrastructure-management", "web-development"],
    keywords: [
      "IT for manufacturing India", "ERP integration manufacturing",
      "IoT manufacturing", "OT security", "manufacturing IT services India",
      "manufacturing website development", "dealer portal development", "B2B manufacturing CRM",
    ],
    faq: [
      {
        q: "Can you help secure our OT environment?",
        a: "Yes — OT (operational technology) security requires a different approach to IT security. We design network segmentation between IT and OT zones, implement ICS-aware monitoring, and help you apply the IEC 62443 framework to your production environment.",
      },
      {
        q: "Do you build websites and dealer portals for manufacturers?",
        a: "Yes — we build corporate and product websites with technical catalogues, plus dealer/distributor portals for order placement, stock checks and credit status, integrated with your ERP.",
      },
      {
        q: "Can you build a CRM for our B2B sales team?",
        a: "Yes — we build CRMs tailored to manufacturing sales cycles: enquiry-to-quote-to-order pipelines, account history and renewal tracking, integrated with your ERP for real-time order status.",
      },
    ],
  },
  {
    slug: "healthcare",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    title: "Healthcare",
    shortTitle: "Healthcare",
    description: "Secure, compliant IT for patient data, EHR systems and telemedicine platforms.",
    icon: "HeartPulse",
    metaTitle: "Healthcare IT Services India — ITSolvez",
    metaDescription:
      "Secure, DPDPA-compliant IT for hospitals, clinics and healthtech companies. EHR support, telemedicine infrastructure, data security.",
    h1: "Healthcare IT that protects patient data and keeps systems running.",
    intro:
      "Patient data is among the most sensitive there is — and healthcare systems are among the most heavily targeted by cybercriminals. ITSolvez delivers IT infrastructure, security and software specifically designed for the healthcare sector: hospitals, diagnostic chains, clinics, pharmaceutical companies and healthtech startups.\n\nWe build healthcare IT environments that are secure by design, compliant with DPDPA 2023, and operationally resilient — because in healthcare, downtime has consequences beyond a business metric.\n\nWe also build the patient-facing and administrative software hospitals and clinics run on: hospital and clinic websites with doctor listings and department information, patient portals for appointment booking and records access, CRM for patient relationship management and follow-up/recall campaigns, and WordPress/CMS-driven health content and blogs — all designed with the same DPDPA-conscious approach we bring to infrastructure.",
    challenges: [
      "EHR/EMR system reliability and interoperability",
      "DPDPA 2023 compliance for patient health records",
      "Telemedicine infrastructure and video consultation reliability",
      "Medical IoT device connectivity and data security",
      "Hospital network uptime for critical care systems",
      "Ransomware defence for healthcare environments",
      "No online appointment booking or patient portal, driving calls and no-shows",
    ],
    solutions: [
      "Managed IT for hospital and clinic networks with 24/7 uptime monitoring",
      "EHR/EMR integration and support — HL7, FHIR standard compliance",
      "DPDPA-compliant patient data management and consent workflows",
      "Telemedicine platform development and hosting",
      "Medical IoT security — device inventory, monitoring, segmentation",
      "Cybersecurity and ransomware defence tailored for healthcare",
      "Hospital and clinic websites with doctor profiles, departments and online enquiry",
      "Patient portals — appointment booking, reports/records access, prescription refills",
      "CRM for patient relationship management — recall reminders, follow-up campaigns, referrals",
      "WordPress/CMS-managed health content and blog, editable by your marketing team",
    ],
    services: ["managed-it", "cyber-security", "custom-software", "cloud-computing", "system-integration", "web-development"],
    keywords: [
      "healthcare IT services India", "EHR support India", "hospital IT management",
      "DPDPA healthcare compliance", "telemedicine infrastructure", "healthtech IT",
      "hospital website development", "patient portal development", "healthcare CRM software",
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
      {
        q: "Do you build websites and patient portals for hospitals and clinics?",
        a: "Yes — we build hospital and clinic websites with doctor listings and department pages, plus patient portals for appointment booking, report access and prescription refills, integrated with your EHR where needed.",
      },
      {
        q: "Can you build a CRM for patient follow-up and recall campaigns?",
        a: "Yes — we build CRM systems for patient relationship management: appointment reminders, recall campaigns for chronic-care patients, and referral tracking, all DPDPA-conscious in how patient data is stored and used.",
      },
    ],
  },
  {
    slug: "higher-education",
    heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    title: "Higher Education",
    shortTitle: "Higher Education",
    description: "Reliable campus networks, secure data and edtech support at scale.",
    icon: "GraduationCap",
    metaTitle: "IT Services for Higher Education India — ITSolvez",
    metaDescription:
      "Campus network management, student information systems, LMS integration and cybersecurity for universities and colleges.",
    h1: "Campus IT that supports learning — at any scale.",
    intro:
      "Universities and colleges run complex IT environments: multi-site campus networks, student information systems, learning management platforms, research data, and an ever-changing population of devices. ITSolvez delivers IT infrastructure, support and software that keeps the academic environment running — for students, faculty and administration.\n\nWe understand the budget pressures and procurement cycles of higher education, and we build solutions that scale with enrolment without requiring constant re-investment.\n\nWe also build the recruitment and community software universities depend on: university and college websites, student/parent and alumni portals, a CRM for admissions counsellors to manage the enquiry-to-enrolment funnel, and a WordPress/CMS-driven site for news, events and department pages that faculty can update without IT tickets.",
    challenges: [
      "Campus-wide Wi-Fi and network reliability at scale",
      "Student information system (SIS) management and integration",
      "LMS (Learning Management System) hosting and support",
      "Cybersecurity for research data and student records",
      "Device management for BYOD student populations",
      "Exam and assessment platform reliability",
      "A dated website and no CRM to manage the admissions enquiry pipeline",
    ],
    solutions: [
      "Campus network design, deployment and managed services",
      "Student information system integration and support",
      "LMS hosting, integration and helpdesk",
      "Cybersecurity for student records and research data",
      "Microsoft 365 / Google Workspace deployment and management",
      "IT helpdesk for students and faculty — multi-channel support",
      "University and college websites with programme pages, faculty profiles and enquiry forms",
      "Student, parent and alumni portals — admissions status, fee payment, results, alumni network",
      "Admissions CRM — enquiry tracking, counsellor follow-up, application and offer management",
      "WordPress/CMS-managed news, events and department pages for faculty self-editing",
    ],
    services: ["managed-it", "it-infrastructure-management", "cyber-security", "custom-software", "it-support", "web-development"],
    keywords: [
      "IT services for universities India", "campus network management",
      "edtech support", "higher education IT", "LMS support India",
      "university IT services", "university website development", "admissions CRM software", "student portal development",
    ],
    faq: [
      {
        q: "Can you support a multi-campus environment?",
        a: "Yes — we manage multi-campus networks via SD-WAN and centralised monitoring, giving your IT team visibility across all sites from a single dashboard.",
      },
      {
        q: "Do you build websites and student portals for universities and colleges?",
        a: "Yes — we build university and college websites with programme and faculty pages, plus student/parent/alumni portals for admissions status, fee payment, results and alumni engagement.",
      },
      {
        q: "Can you build a CRM for our admissions team?",
        a: "Yes — we build admissions CRMs that track enquiries from every source, automate counsellor follow-up, and manage applications through to enrolment, with reporting for your admissions leadership.",
      },
    ],
  },
  {
    slug: "logistics",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
    title: "Logistics and Supply Chain",
    shortTitle: "Logistics",
    description: "Visibility, integration and uptime across the supply chain.",
    icon: "Truck",
    metaTitle: "IT Services for Logistics and Supply Chain India — ITSolvez",
    metaDescription:
      "Supply chain software, fleet and warehouse management systems, and IT infrastructure for logistics companies across India.",
    h1: "Logistics IT that gives you visibility — from warehouse to last mile.",
    intro:
      "Logistics businesses run on visibility: where is the shipment, when will it arrive, and is the warehouse system keeping up? ITSolvez delivers the IT infrastructure, integrations and custom software that give logistics companies real-time visibility across their operations — from warehouse management to last-mile delivery tracking.\n\nWe support 3PLs, freight forwarders, e-commerce logistics providers and courier networks with technology that scales with volume and doesn't go down when shipments peak.\n\nWe also build the full commercial and customer-facing layer logistics companies need to grow: a corporate website that wins enterprise contracts, a customer-facing shipment tracking portal, CRM for key-account and sales management, a WordPress/CMS-driven site for company news and service pages, and vendor/carrier portals — all integrated with the WMS, fleet and ERP systems we build alongside them, so nothing is a disconnected silo.",
    challenges: [
      "Warehouse management system (WMS) reliability and integration",
      "Last-mile delivery tracking and driver app development",
      "E-commerce platform and 3PL integration",
      "Fleet management and GPS tracking",
      "IT infrastructure for warehouse and distribution centres",
      "Data integration across carrier, customs and client systems",
      "No professional website or self-service portal for enterprise clients to track shipments",
    ],
    solutions: [
      "Custom WMS development and ERP integration",
      "Last-mile delivery tracking apps (Android/iOS/web)",
      "E-commerce platform integration — Shopify, Amazon, Flipkart",
      "Fleet management platform development",
      "IT infrastructure for warehouse environments — rugged devices, Wi-Fi, servers",
      "Carrier and customs API integration",
      "Logistics company websites built to win enterprise and RFP business",
      "Customer-facing shipment tracking portals with real-time status and POD access",
      "CRM for key-account management and sales — quote-to-contract pipeline, SLA tracking",
      "WordPress/CMS-managed company news, service pages and blog",
      "Vendor and carrier portals for rate management and capacity coordination",
    ],
    services: ["custom-software", "system-integration", "app-development", "managed-it", "it-infrastructure-management", "web-development"],
    keywords: [
      "IT for logistics India", "supply chain software India",
      "fleet management system", "warehouse management IT", "logistics IT services",
      "3PL IT services India", "logistics website development", "shipment tracking portal", "logistics CRM software",
    ],
    faq: [
      {
        q: "Can you build a custom delivery tracking app?",
        a: "Yes — we build driver apps (Android/iOS) and customer-facing tracking portals with real-time GPS, proof-of-delivery capture, and integration with your WMS or ERP.",
      },
      {
        q: "Do you build websites for logistics and 3PL companies?",
        a: "Yes — we build corporate websites and customer portals built to win and support enterprise contracts, with service pages, capability content and shipment-tracking self-service.",
      },
      {
        q: "Can you build a CRM for our sales and key-account teams?",
        a: "Yes — we build CRMs for logistics sales cycles: quote-to-contract pipelines, SLA and volume tracking, renewal reminders, integrated with your WMS or TMS for account-level visibility.",
      },
    ],
  },
  {
    slug: "enterprise-technology",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "Enterprise Technology",
    shortTitle: "Enterprise",
    description: "Scalable, secure IT operations for complex enterprise environments.",
    icon: "Building2",
    metaTitle: "Enterprise IT Services India — ITSolvez",
    metaDescription:
      "Scalable managed IT, cloud, cybersecurity and digital transformation for enterprise organisations across India.",
    h1: "Enterprise IT that runs at the pace your business demands.",
    intro:
      "Enterprise technology environments are complex by definition: multi-cloud infrastructure, hundreds or thousands of endpoints, layered security requirements, compliance obligations, and the expectations of a demanding user base. ITSolvez delivers managed IT, cybersecurity, cloud operations and custom software at enterprise scale — with the governance, reporting and SLAs that large organisations require.\n\nWe act as an extension of your IT team — not a vendor you have to manage — and we measure ourselves by business outcomes, not ticket counts.\n\nWe also build the digital properties and internal tools large organisations run on: corporate and product websites, client and partner self-service portals, CRM for enterprise sales pipelines, and CMS/WordPress-driven sites for thought-leadership content and investor relations — delivered with the same governance and SLAs as our infrastructure work.",
    challenges: [
      "Multi-cloud environment management and cost control",
      "Enterprise endpoint management at scale",
      "Zero-trust security architecture implementation",
      "Large-scale Microsoft 365 / Azure AD management",
      "IT compliance, audit readiness and risk management",
      "Digital transformation programme execution",
      "Legacy corporate website and no self-service portal for enterprise clients",
    ],
    solutions: [
      "Enterprise managed IT with dedicated account management",
      "Multi-cloud management — AWS, Azure, GCP cost optimisation",
      "Zero-trust security architecture and implementation",
      "Enterprise endpoint management (Microsoft Intune, Jamf)",
      "IT compliance and audit support — ISO 27001, SOC 2, DPDPA",
      "Digital transformation consulting and delivery",
      "Corporate and product websites built for enterprise credibility and scale",
      "Client and partner self-service portals with SSO and role-based access",
      "CRM for enterprise sales pipelines — account mapping, deal stages, forecasting",
      "CMS/WordPress-managed thought-leadership, newsroom and investor-relations content",
    ],
    services: ["managed-it", "cloud-computing", "cyber-security", "it-consultancy", "custom-software", "web-development"],
    keywords: [
      "enterprise IT services India", "enterprise cloud management",
      "digital transformation enterprise", "enterprise managed IT India",
      "large enterprise IT support", "enterprise website development", "enterprise CRM software", "client portal development",
    ],
    faq: [
      {
        q: "Do you offer dedicated account management for enterprise clients?",
        a: "Yes — enterprise clients get a named account manager, a dedicated technical lead, and quarterly business reviews with performance reporting against SLAs.",
      },
      {
        q: "Do you build enterprise websites and client portals?",
        a: "Yes — we build corporate and product websites at enterprise scale, plus client/partner self-service portals with SSO, role-based access and integration into your CRM or ERP.",
      },
      {
        q: "Can you build a CRM for our enterprise sales team?",
        a: "Yes — we build CRMs for complex enterprise sales: account mapping, multi-stakeholder deal tracking, forecasting and integration with your existing sales stack.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    title: "Retail and E-Commerce",
    shortTitle: "Retail",
    description: "Scalable e-commerce platforms, inventory systems and digital marketing for retail businesses.",
    icon: "ShoppingBag",
    metaTitle: "Retail and E-Commerce IT Solutions India | ITSolvez",
    metaDescription:
      "Custom e-commerce platforms, POS integrations, inventory management software and digital marketing for Indian retail businesses. Get a free consultation.",
    h1: "Retail and e-commerce technology that converts browsers into buyers.",
    intro:
      "Retail success in 2026 depends on seamless omnichannel experiences — a fast website, real-time inventory visibility, smooth checkout and post-purchase engagement. ITSolvez delivers the technology stack that powers retail and e-commerce businesses: custom online stores, ERP and POS integration, inventory management, order management systems and the digital marketing that drives traffic.\n\nWhether you're a D2C brand launching your first store or an established retailer scaling to hundreds of SKUs and multiple channels, we build the systems that keep your operations running — even at peak.\n\nBeyond the storefront, we build the customer-relationship layer that turns one-time buyers into repeat customers: CRM for loyalty and win-back campaigns, customer self-service account portals, and WordPress/CMS-managed blog and content marketing that drives organic traffic without a developer in the loop for every update.",
    challenges: [
      "High-performance e-commerce platform development and maintenance",
      "Inventory and order management across multiple channels",
      "POS integration with online store and ERP",
      "Peak-traffic scalability (sales, festival seasons)",
      "Cart abandonment and conversion rate optimisation",
      "Marketplace integration — Amazon, Flipkart, Meesho",
      "No CRM to turn one-time buyers into repeat customers",
    ],
    solutions: [
      "Custom e-commerce platform development — Next.js, Shopify, WooCommerce",
      "OMS and inventory management system development and integration",
      "POS + ERP integration for unified retail operations",
      "Marketplace API integration — Amazon, Flipkart, Meesho",
      "Digital marketing — Google Shopping, Meta Ads, email marketing",
      "Performance optimisation and CDN setup for peak traffic",
      "CRM for customer loyalty, win-back and repeat-purchase campaigns",
      "Customer self-service account portals — order history, returns, loyalty points",
      "WordPress/CMS-managed blog and content marketing for organic traffic",
    ],
    services: ["custom-software", "web-development", "system-integration", "digital-marketing", "app-development"],
    keywords: [
      "e-commerce development India", "retail software India", "online store development",
      "inventory management software India", "POS integration India", "retail IT solutions India",
      "retail CRM software", "e-commerce WordPress development",
    ],
    faq: [
      {
        q: "Can you build a custom e-commerce platform?",
        a: "Yes — we build custom e-commerce platforms with Next.js, React and Node.js, or configure and extend Shopify and WooCommerce depending on your business requirements. All platforms include payment gateway integration (Razorpay, PayU, Stripe).",
      },
      {
        q: "Can you integrate our online store with our existing ERP?",
        a: "Yes — we integrate e-commerce platforms with ERPs including Tally, SAP, Odoo, Microsoft Dynamics and custom ERPs via APIs and middleware.",
      },
      {
        q: "Do you build CRM systems for retail and D2C brands?",
        a: "Yes — we build CRM and loyalty systems that segment customers by purchase behaviour, automate win-back and re-order campaigns, and integrate directly with your e-commerce platform and order data.",
      },
    ],
  },
  {
    slug: "education",
    heroImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    title: "Education",
    shortTitle: "Education",
    description: "ERP, LMS, mobile apps and digital infrastructure for schools, colleges and edtech companies.",
    icon: "GraduationCap",
    metaTitle: "Education Software and IT Solutions India — ITSolvez",
    metaDescription:
      "School ERP, LMS development, student apps and e-learning platforms for K-12 schools, colleges and edtech companies in India. Free consultation.",
    h1: "Education technology that makes learning accessible and administration effortless.",
    intro:
      "India's education sector is undergoing a digital transformation — from school management systems and digital classrooms to edtech platforms and student apps. ITSolvez delivers the software and IT infrastructure that powers this transformation: school ERP, learning management systems, student and parent apps, online assessment platforms and the IT backbone that keeps campuses connected.\n\nWe work with K-12 schools, coaching institutes, colleges, universities and edtech startups — delivering technology that improves learning outcomes, streamlines administration and scales with your institution.\n\nWe also build the school's public-facing and admissions software: school websites that showcase results and facilities, parent/student portals for fees and progress, an admissions CRM to manage enquiry-to-enrolment for every academic year, and a WordPress/CMS-managed site for news, events and circulars that staff can update directly.",
    challenges: [
      "School and college ERP — admissions, fees, attendance, results",
      "Learning Management System (LMS) development and integration",
      "Student and parent mobile app development",
      "Online assessment and examination platform development",
      "Campus network reliability and Wi-Fi coverage",
      "Data security for student records under DPDPA 2023",
      "An outdated website and no CRM to manage the annual admissions cycle",
    ],
    solutions: [
      "Custom school/college ERP development",
      "LMS development — course management, assignments, live classes",
      "Student and parent mobile apps (Android + iOS)",
      "Online examination platforms with proctoring",
      "Campus network infrastructure and managed IT",
      "DPDPA-compliant student data management",
      "School and coaching-institute websites with results, facilities and admissions info",
      "Parent and student portals — fee payment, attendance, homework, report cards",
      "Admissions CRM — enquiry tracking, follow-up automation, seat allocation by academic year",
      "WordPress/CMS-managed news, events and circulars for non-technical staff to update",
    ],
    services: ["custom-software", "app-development", "web-development", "managed-it", "it-infrastructure-management"],
    keywords: [
      "school ERP India", "education software India", "LMS development India",
      "student app development India", "edtech software India", "e-learning platform India",
      "school website development", "school admissions CRM", "parent portal development",
    ],
    faq: [
      {
        q: "Can you build a custom school ERP?",
        a: "Yes — we build school and college ERPs covering admissions, fee management, attendance tracking, timetable, results, library and parent communication — all accessible via web and mobile.",
      },
      {
        q: "Do you work with edtech startups?",
        a: "Yes — we work with edtech startups from MVP stage through to scale, building LMS platforms, live class infrastructure, assessment tools and mobile apps.",
      },
      {
        q: "Do you build websites and parent portals for schools?",
        a: "Yes — we build school websites showcasing results, facilities and admissions information, plus parent/student portals for fee payment, attendance and report cards.",
      },
      {
        q: "Can you build a CRM to manage our annual admissions cycle?",
        a: "Yes — we build admissions CRMs that track every enquiry by source, automate follow-up, and manage seat allocation and waitlists across academic years.",
      },
    ],
  },
  {
    slug: "real-estate",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    title: "Real Estate",
    shortTitle: "Real Estate",
    description: "CRM, property portals, booking systems and digital marketing for real estate businesses.",
    icon: "Building2",
    metaTitle: "Real Estate Software and IT Solutions India — ITSolvez",
    metaDescription:
      "Custom real estate CRM, property listing portals, booking systems and digital marketing for real estate developers and agents in India. Free consultation.",
    h1: "Real estate technology that helps you sell more, manage smarter.",
    intro:
      "Real estate is a relationship business, but the best relationships are built on the best tools. ITSolvez delivers the CRM, property portals, booking platforms and digital marketing systems that help real estate developers, brokers and property managers work more efficiently and close more deals.\n\nFrom a lead management CRM that tracks every enquiry to a fully custom property portal with virtual tours and online booking — we build the digital infrastructure that supports your sales and operations from first contact to possession.\n\nWe also build the project website and content layer that feeds your CRM: WordPress/CMS-managed project microsites and listing pages your marketing team can launch fast for every new project, broker/channel-partner portals, and post-sale buyer portals — all wired into the same CRM so no lead or update falls through the cracks.",
    challenges: [
      "Lead management and CRM for large sales teams",
      "Property listing portal development and maintenance",
      "Online booking and payment collection for pre-launch projects",
      "Virtual tour and 3D walkthrough integration",
      "Digital marketing for project launches",
      "Post-sale customer communication and document management",
      "Slow-to-launch project microsites that can't keep up with new project launches",
    ],
    solutions: [
      "Custom real estate CRM — lead tracking, follow-up automation, deal pipeline",
      "Property listing portal development with search, filters and map integration",
      "Online booking and payment systems for project launches",
      "Virtual tour integration and 3D render hosting",
      "Digital marketing — Google Ads, Meta Ads, WhatsApp campaigns for launches",
      "Post-sale portal for buyers — document sharing, construction updates",
      "WordPress/CMS-managed project microsites your team can launch without a developer",
      "Broker and channel-partner portals — inventory, commission tracking, co-branded collateral",
    ],
    services: ["custom-software", "web-development", "digital-marketing", "app-development", "system-integration"],
    keywords: [
      "real estate CRM India", "property portal development India", "real estate software India",
      "real estate digital marketing India", "real estate app development India", "property management software India",
      "real estate website development", "broker portal development",
    ],
    faq: [
      {
        q: "Can you build a real estate CRM for our sales team?",
        a: "Yes — we build real estate CRMs with lead capture from portals (99acres, MagicBricks, Housing), automated follow-up sequences, deal pipeline tracking, site visit scheduling and reporting dashboards.",
      },
      {
        q: "Can you run digital marketing for our project launch?",
        a: "Yes — we run integrated launch campaigns: Google Search and Display Ads, Meta Ads targeting buyers by location and income, WhatsApp broadcast campaigns and email marketing — all with conversion tracking.",
      },
      {
        q: "Can you build project microsites quickly for each new launch?",
        a: "Yes — we build WordPress/CMS-managed project microsite templates so your marketing team can spin up a new project website with listings, floor plans and enquiry forms without waiting on a developer each time.",
      },
    ],
  },
  {
    slug: "travel-hospitality",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    title: "Travel and Hospitality",
    shortTitle: "Travel and Hospitality",
    description: "Travel booking platforms, cab and ride-hailing systems built by a team that runs its own travel products.",
    icon: "Plane",
    metaTitle: "Travel and Cab Booking Software India | ITSolvez",
    metaDescription:
      "Travel booking platforms, cab and ride-hailing apps, hotel/OTA integration — built by the team behind OnlyOnTrip and JourneyXpress.",
    h1: "Travel technology built by a company that runs its own travel platforms.",
    intro:
      "Travel and hospitality software has to handle real-time inventory, payment retries, cancellations and last-minute itinerary changes without breaking — and most agencies building it have never operated one themselves. ITSolvez has: we built and still run OnlyOnTrip, a consumer flight, hotel and holiday booking platform, and JourneyXpress, a corporate travel and expense management platform. The booking-flow edge cases, payment failures and inventory-sync problems in a typical travel software brief aren't theoretical for us — we've fixed them in production, on our own products.\n\nWe build travel booking portals, cab and ride-hailing booking systems, hotel and OTA integrations, and corporate travel management platforms for travel agencies, tour operators, cab and fleet operators, and corporate travel desks — from the customer-facing booking website to the driver/dispatch app and the back-office reporting that ties it together, plus WordPress/CMS-managed sites for travel content and offers.",
    challenges: [
      "Real-time inventory and pricing sync across flights, hotels and packages",
      "Cab and ride-hailing dispatch, driver app and live GPS tracking reliability",
      "Payment gateway integration with retry handling and refund/cancellation workflows",
      "OTA and supplier API integration — GDS, hotel channel managers, cab aggregators",
      "Corporate travel policy enforcement and expense reconciliation",
      "Peak-season traffic scalability during holiday and festival travel surges",
    ],
    solutions: [
      "Travel booking platform development — flight, hotel and holiday package search and checkout",
      "Cab and ride-hailing booking apps — customer app, driver app, live dispatch and GPS tracking",
      "Payment gateway integration with transparent pricing, automated retries and refunds",
      "GDS, hotel channel manager and cab aggregator API integration",
      "Corporate travel and expense management portals — policy enforcement, multi-level approvals, GST-compliant invoicing",
      "Hotel, resort and travel agency websites with booking widgets and WordPress/CMS-managed content",
      "Fleet and driver management dashboards for cab and transport operators",
      "Customer support and booking-management portals — cancellations, rebooking, itinerary changes",
    ],
    services: ["custom-software", "app-development", "web-development", "system-integration", "digital-marketing"],
    keywords: [
      "travel booking software India", "cab booking app development India", "ride-hailing app development India",
      "travel portal development India", "corporate travel software India", "hotel booking system development",
      "OTA integration India", "travel website development",
    ],
    faq: [
      {
        q: "Do you build travel booking websites and portals?",
        a: "Yes — we build travel booking platforms covering flight, hotel and holiday package search and checkout. We've built and operate our own consumer travel platform, OnlyOnTrip, so we understand the real operational edge cases, not just the feature list.",
      },
      {
        q: "Can you build a cab or ride-hailing booking app?",
        a: "Yes — we build cab and ride-hailing systems: customer booking app, driver app, live GPS dispatch, fare calculation and trip history, for both aggregator-style platforms and single-fleet operators.",
      },
      {
        q: "Do you build corporate travel management software?",
        a: "Yes — we built and run JourneyXpress, our own corporate travel and expense platform, so we bring real experience with travel-policy enforcement, multi-level approvals and GST-compliant invoicing to every corporate travel project.",
      },
      {
        q: "Can you integrate with GDS, hotel channel managers or cab aggregator APIs?",
        a: "Yes — we integrate travel and hospitality platforms with GDS systems, hotel channel managers, and mapping/aggregator APIs (Google Maps, Mapbox) for live availability and routing.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
