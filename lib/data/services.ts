export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  included: string[];
  benefits: string[];
  cta: string;
  ctaLink: string;
  keywords: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT Services",
    shortTitle: "Managed IT",
    description: "24/7 proactive monitoring, maintenance and support for one fixed monthly fee.",
    icon: "Monitor",
    metaTitle: "Managed IT Services in India | 24/7 Support — ITSolvez",
    metaDescription:
      "Proactive, fully managed IT for one fixed monthly fee. 24/7 monitoring, security and support that keeps your business running. Get a free assessment.",
    h1: "Managed IT services that keep you up, running and protected.",
    intro:
      "Your team shouldn't lose hours to a server that won't boot, a patch that never got applied, or a help-desk ticket that sits for two days. ITSolvez takes your entire IT operation off your plate and runs it as a managed service — proactively, around the clock, for one predictable monthly fee.\n\nWe monitor every device, server and connection 24/7, apply security patches before they become vulnerabilities, and resolve issues remotely before most of your people notice. When something does need hands-on attention, you reach a named engineer who already knows your environment — not a queue.",
    included: [
      "24/7 monitoring and alerting across endpoints, servers, networks and cloud workloads",
      "Proactive maintenance and patch management to close security gaps and prevent downtime",
      "Remote and on-site support with clear, measurable response-time SLAs",
      "Asset and vendor management — we handle hardware, software and supplier coordination",
      "Security management — antivirus, endpoint protection, backup and monitoring as standard",
      "Virtual CIO (vCIO) guidance and quarterly IT roadmap reviews",
    ],
    benefits: [
      "Predictable costs — fixed monthly fee turns unpredictable IT spend into a budget line",
      "Less downtime — proactive monitoring catches failures before they stop work",
      "Scales with you — add or remove users with a conversation, not a hiring cycle",
      "Enterprise-grade, SME-friendly — Microsoft Partner, AWS and Google Cloud expertise",
    ],
    cta: "Book a free IT assessment",
    ctaLink: "/contact",
    keywords: [
      "managed IT services", "managed IT services India", "managed service provider MSP",
      "IT infrastructure management", "24/7 IT monitoring", "proactive IT support",
      "managed IT services Pune", "IT support company in India",
    ],
    faq: [
      {
        q: "What is included in a managed IT service?",
        a: "A managed IT service covers 24/7 monitoring, proactive maintenance, patch management, remote and on-site support, security management, and vendor coordination — all for a fixed monthly fee.",
      },
      {
        q: "How quickly do you respond to IT issues?",
        a: "Our SLAs are defined per client. Critical issues receive a response within 15–30 minutes; standard issues within 4 hours. On-site visits are scheduled within one business day for issues that cannot be resolved remotely.",
      },
      {
        q: "What is the difference between managed IT and break-fix support?",
        a: "Break-fix support is reactive — you call when something breaks and pay per incident. Managed IT is proactive — we monitor continuously, fix problems before they affect your team, and charge a predictable monthly fee.",
      },
      {
        q: "Do you support businesses outside Pune?",
        a: "Yes. We support clients across India with remote-first delivery and on-site coverage in Pune and Mumbai. For international clients we work remotely across multiple time zones.",
      },
      {
        q: "What size businesses do you serve?",
        a: "We work with SMEs from 10 users up to mid-size enterprises of 500+ users. Our packages scale with headcount and complexity.",
      },
    ],
  },
  {
    slug: "it-support",
    title: "IT Support & Service Desk",
    shortTitle: "IT Support",
    description: "Fast, expert helpdesk support for your team — remote and on-site.",
    icon: "HeadphonesIcon",
    metaTitle: "IT Support & Helpdesk Services India — ITSolvez",
    metaDescription:
      "Fast, expert IT helpdesk for your team. Remote and on-site support with SLA-backed response times. Free trial consultation available.",
    h1: "IT support your team can actually rely on.",
    intro:
      "When your team hits an IT problem, the last thing they need is a long queue or a call centre that doesn't know your setup. ITSolvez provides helpdesk and on-site IT support with named engineers, clear SLAs, and the institutional knowledge of your environment built in from day one.\n\nWe handle everything from password resets to complex troubleshooting — so your people stay productive and your IT team (if you have one) focuses on higher-value work.",
    included: [
      "Single point of contact helpdesk via phone, email and ticketing portal",
      "Remote support for software, connectivity and user-access issues",
      "On-site visits for hardware, network and physical-infrastructure issues",
      "New user onboarding — device setup, accounts, software and access provisioning",
      "Software licensing, updates and patch management",
      "Escalation to specialist engineers for complex or infrastructure-level issues",
    ],
    benefits: [
      "SLA-backed response times — you know exactly what to expect",
      "Named engineers — no explaining your setup from scratch every call",
      "Flexible coverage — business-hours or 24/7 support tiers",
      "Reduces internal IT burden — your team focuses on what matters",
    ],
    cta: "Get support now",
    ctaLink: "/contact",
    keywords: [
      "IT support India", "IT helpdesk services", "on-site IT support",
      "remote IT support", "IT support company Pune",
    ],
    faq: [
      {
        q: "Do you offer 24/7 IT support?",
        a: "Yes, our 24/7 support tier covers critical issues around the clock. Business-hours tiers are also available for teams that only need coverage during working hours.",
      },
      {
        q: "Can you support Microsoft 365 and Google Workspace?",
        a: "Yes. We support M365, Google Workspace, and most major business platforms including Teams, SharePoint, OneDrive, and Gmail.",
      },
      {
        q: "How do users log support tickets?",
        a: "Via phone, email, or a self-service portal — whichever your team prefers. All tickets are tracked, prioritised and reported monthly.",
      },
    ],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy & Digital Transformation",
    shortTitle: "IT Consultancy",
    description: "Practical IT strategy and digital transformation guidance tied to business outcomes.",
    icon: "Lightbulb",
    metaTitle: "IT Consultancy & Digital Transformation — ITSolvez India",
    metaDescription:
      "Practical IT strategy and digital-transformation guidance that ties technology to business outcomes. Book a consultation.",
    h1: "Technology strategy that's tied to business outcomes.",
    intro:
      "Technology decisions are business decisions. ITSolvez helps you cut through the noise — what to adopt, what to retire, what to secure first — with consulting that's grounded in your goals and your budget, not the latest trend. We bring a vendor-honest view (Microsoft, AWS, Google Cloud certified) and translate it into a clear, sequenced roadmap.\n\nWhether you need a one-off technology audit or an ongoing virtual CIO, we meet you where you are and build a plan you can execute.",
    included: [
      "IT strategy and roadmaps — a costed plan aligned to where the business is going",
      "Digital transformation — modernising processes, infrastructure and data",
      "Cloud and infrastructure strategy — what to move, when, and how",
      "IT audits and assessments — security, infrastructure, and spend reviews",
      "Virtual CIO (vCIO) — ongoing senior guidance without a full-time hire",
      "Vendor evaluation and procurement support",
    ],
    benefits: [
      "Vendor-honest advice — we recommend the best tool for you, not a favoured partner",
      "Sequenced, costed roadmaps — no ambiguity about what comes first or what it costs",
      "Senior expertise on demand — CIO-level thinking without a CIO salary",
      "Bridges business and IT — we translate strategy into technical decisions your team can execute",
    ],
    cta: "Book a strategy consultation",
    ctaLink: "/contact",
    keywords: [
      "IT consultancy India", "IT consulting services", "digital transformation consulting",
      "IT strategy", "vCIO services", "technology roadmap India",
    ],
    faq: [
      {
        q: "What does an IT consultancy engagement look like?",
        a: "Engagements range from a one-day technology audit to an ongoing monthly vCIO retainer. We start with a discovery session to understand your business goals, current tech stack, and biggest pain points, then propose a scope that matches your needs and budget.",
      },
      {
        q: "Are you tied to any particular vendor?",
        a: "No. We hold certifications with Microsoft, AWS, and Google Cloud, which gives us the expertise to evaluate each objectively. Our recommendation is always what's best for your business — not what generates the most partner commission.",
      },
      {
        q: "What is a virtual CIO (vCIO)?",
        a: "A vCIO gives you access to senior IT leadership — strategy, planning, vendor negotiation, board-level reporting — as a monthly service. You get CIO-level thinking without the cost of a full-time hire.",
      },
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing & Cloud Migration",
    shortTitle: "Cloud Services",
    description: "Design, migrate and manage AWS, Azure and Google Cloud environments without surprise bills.",
    icon: "Cloud",
    metaTitle: "Cloud Computing & Migration Services | AWS · Azure — ITSolvez",
    metaDescription:
      "Migrate, secure and optimise your cloud with certified engineers. Lower costs, higher uptime, zero-drama migrations. Talk to a cloud specialist.",
    h1: "Move to the cloud without the downtime — or the surprise bills.",
    intro:
      "Cloud should make your business faster and cheaper to run — not harder to manage. ITSolvez designs, migrates and manages cloud environments on AWS, Azure and Google Cloud so you get the scalability and resilience of the cloud with none of the guesswork.\n\nWe start with what you actually run today, map a migration that avoids disruption, and move you over in controlled stages. After go-live we keep optimising — right-sizing resources, automating backups, tightening security — so you only pay for what you use.",
    included: [
      "Cloud strategy and readiness assessment — a clear, costed migration plan",
      "Migration and modernisation — lift-and-shift or re-architecture, staged to avoid downtime",
      "Managed cloud operations — monitoring, scaling, patching and 24/7 support",
      "Cost optimisation — right-sizing and reserved-capacity planning to cut waste",
      "Backup and disaster recovery — encrypted, automated, with virtualised recovery",
      "Cloud security and compliance — identity, access and data protection by design",
    ],
    benefits: [
      "India's cloud managed-services market is on a 13.35% CAGR — get ahead of it now",
      "Most cloud overspend comes from unmanaged environments — we treat yours as a living system",
      "Staged migrations mean no big-bang cutover risk",
      "Certified on AWS, Azure and Google Cloud — vendor-agnostic recommendations",
    ],
    cta: "Get a free cloud readiness assessment",
    ctaLink: "/contact",
    keywords: [
      "cloud computing services India", "cloud migration services", "managed cloud services",
      "AWS migration India", "Azure migration", "cloud cost optimisation",
      "cloud computing company Pune",
    ],
    faq: [
      {
        q: "How long does a cloud migration take?",
        a: "A straightforward lift-and-shift for a small business typically takes 4–8 weeks. Complex re-architecture projects for larger environments can take 3–6 months. We always start with a readiness assessment that gives you a realistic timeline before any commitment.",
      },
      {
        q: "Will there be downtime during migration?",
        a: "We design migrations to minimise or eliminate downtime. Critical workloads are migrated in parallel before cutover, and cutovers are scheduled for low-traffic windows with a tested rollback plan in place.",
      },
      {
        q: "Which cloud providers do you work with?",
        a: "AWS, Microsoft Azure, and Google Cloud. We also support multi-cloud and hybrid cloud environments where part of the workload stays on-premise.",
      },
      {
        q: "Can you help reduce our existing cloud bill?",
        a: "Yes — cloud cost optimisation is one of our most requested services. We audit your current spend, identify wasted resources (over-provisioned instances, unused storage, orphaned snapshots), and implement right-sizing and reserved-capacity plans.",
      },
    ],
  },
  {
    slug: "cyber-security",
    title: "Cybersecurity & Managed Security",
    shortTitle: "Cybersecurity",
    description: "24/7 managed threat detection, endpoint security, and compliance for Indian businesses.",
    icon: "Shield",
    metaTitle: "Cybersecurity & Managed Security Services India — ITSolvez",
    metaDescription:
      "Stop ransomware, phishing and data loss with 24/7 managed security. Threat detection, response and compliance. Book a free security assessment.",
    h1: "Security delivered as a managed outcome — not a one-off tool.",
    intro:
      "A firewall and an antivirus licence are no longer security — they're a checkbox. In 2026, India is one of the most heavily targeted geographies in the world, attacks are AI-driven, and in-house security talent is scarce. That is why security has shifted from a tool you buy to an outcome you outsource — and why managed security is the fastest-growing part of India's cybersecurity market.\n\nITSolvez protects your business the way an attacker would test it: continuously. We monitor for threats around the clock, detect and contain incidents before they spread, and keep you aligned with the compliance obligations your industry and customers demand.",
    included: [
      "24/7 threat monitoring and managed detection and response (MDR)",
      "Endpoint, network and email protection against malware, phishing and intrusion",
      "Ransomware defence and rapid incident response with tested recovery",
      "Vulnerability assessment and security audits — find the gaps before attackers do",
      "Backup and business continuity — encrypted, automated, recoverable",
      "Compliance support — DPDPA 2023, ISO 27001, sector-specific mandates",
      "Security-awareness training — turn your workforce into the first line of defence",
    ],
    benefits: [
      "The most common breach still starts with a single email — we stop it before it spreads",
      "India 2026 information-security spend projected at USD 3.4B (+11.7% YoY) — the threat is real",
      "Continuous monitoring, fast response, and an aware team are what separate a contained event from a business-stopping one",
      "DPDPA 2023 and ISO 27001 compliance built into your security posture",
    ],
    cta: "Book a free security assessment",
    ctaLink: "/contact",
    keywords: [
      "cybersecurity services India", "managed security services", "cyber security company India",
      "managed detection and response", "ransomware protection India", "DPDPA compliance",
      "cybersecurity company Pune", "MSSP India",
    ],
    faq: [
      {
        q: "What is managed detection and response (MDR)?",
        a: "MDR is a continuous security service where our analysts monitor your environment for threats 24/7, investigate alerts, and respond to incidents on your behalf — rather than just sending you an alert and leaving you to handle it.",
      },
      {
        q: "Does your service cover DPDPA 2023 compliance?",
        a: "Yes. We help businesses align with India's Digital Personal Data Protection Act 2023, including data mapping, consent management, breach response procedures, and documentation for the Data Protection Board.",
      },
      {
        q: "How quickly do you respond to a security incident?",
        a: "Our MDR service has a target detection-to-containment time of under 1 hour for critical incidents. For confirmed breaches, our incident-response team initiates containment and forensic investigation immediately.",
      },
      {
        q: "Do we need to install software on every device?",
        a: "Yes — our endpoint detection and response (EDR) agent is lightweight and installs on Windows, macOS and Linux devices. For servers and cloud workloads we use agentless monitoring where possible.",
      },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description: "Bespoke web apps, SaaS products and enterprise systems built to fit how you work.",
    icon: "Code2",
    metaTitle: "Custom Software Development Company in India — ITSolvez",
    metaDescription:
      "Bespoke web, SaaS and enterprise software built for performance and scale. From MVP to maintenance. Get a fixed-scope quote.",
    h1: "Custom software built for performance, scale and the long run.",
    intro:
      "Off-the-shelf tools force your business to bend to the software. Custom software does the opposite — it fits how you actually work, removes manual steps, and gives you something competitors can't simply buy. ITSolvez designs, builds, maintains and supports software end-to-end across modern web, cloud and mobile stacks.\n\nWe're a delivery partner, not just a code shop. We start from the outcome you need, ship in working increments you can see and test, and stay on after launch to maintain, secure and evolve what we've built.",
    included: [
      "Web applications and internal platforms — portals, dashboards, workflow tools",
      "SaaS products — multi-tenant, subscription-ready, built to scale",
      "Enterprise systems — ERP, CRM, bespoke line-of-business applications",
      "API and system integration — connect the tools you already run",
      "Legacy modernisation — move ageing systems onto a secure, maintainable stack",
      "Ongoing maintenance and support — updates, monitoring, enhancements",
    ],
    benefits: [
      "Discovery and fixed-scope estimates up front — no surprise invoices",
      "Agile delivery in sprints — you see working software every two weeks",
      "Senior engineers, clean handover, documented code — not a black box",
      "Maintenance plan from day one — we don't disappear after launch",
    ],
    cta: "Get a custom software quote",
    ctaLink: "/contact",
    keywords: [
      "custom software development India", "software development company India",
      "bespoke software development", "SaaS development", "enterprise software development",
      "software development company Pune", "hire software development team India",
    ],
    faq: [
      {
        q: "How do you estimate project cost and timeline?",
        a: "We run a paid discovery phase (typically 1–2 weeks) where we define requirements, user stories, architecture and a phased delivery plan. This gives you a fixed-scope quote with a clear timeline — before any development begins.",
      },
      {
        q: "What technologies do you use?",
        a: "We use modern, maintainable stacks: React / Next.js for frontend, Node.js / Python / .NET for backend, PostgreSQL / MongoDB for data, and AWS / Azure for hosting. We choose the right tool for the project, not the one we're most comfortable with.",
      },
      {
        q: "Do you take on legacy modernisation projects?",
        a: "Yes. Legacy modernisation is one of our most common engagements — moving a business-critical application from an ageing stack to a modern, secure, cloud-native architecture. We do this in phases to minimise risk.",
      },
      {
        q: "What happens after launch?",
        a: "We offer ongoing maintenance and support plans that cover security updates, bug fixes, performance monitoring, and feature enhancements. We treat post-launch as the start of the project, not the end.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development & Web Design",
    shortTitle: "Web Development",
    description: "Fast, responsive, SEO-ready websites and e-commerce built to convert.",
    icon: "Globe",
    metaTitle: "Web Development & Web Design Company India — ITSolvez",
    metaDescription:
      "Fast, responsive, SEO-ready websites and e-commerce. Custom design, modern stack, real conversion focus. Start your project.",
    h1: "Websites that load fast, look like you, and convert.",
    intro:
      "Your website is where most customers meet your business first. It should load in under two seconds, work flawlessly on every device, and turn visitors into enquiries. ITSolvez designs and develops responsive marketing sites, landing pages, and e-commerce platforms that combine clean design with solid engineering.\n\nEvery site we build is engineered for Core Web Vitals, structured for SEO and AEO from day one, and handed over with a CMS your marketing team can actually run.",
    included: [
      "Responsive marketing sites and landing pages — speed and SEO-engineered",
      "E-commerce platforms with secure payments (Razorpay, Stripe) and inventory",
      "Headless CMS builds (Sanity, Strapi) for non-technical content editing",
      "Conversion-rate optimisation and A/B testing post-launch",
      "Maintenance, hosting, security and performance tuning",
      "Core Web Vitals optimisation — LCP < 2.0s, CLS near 0, INP < 200ms",
    ],
    benefits: [
      "Core Web Vitals optimised — Google's page-experience signals built in, not bolted on",
      "SEO and AEO architecture from day one — not a last-minute checklist",
      "CMS handover — your marketing team can publish without a developer",
      "Conversion focus — we design and measure against leads, not just aesthetics",
    ],
    cta: "Start your project",
    ctaLink: "/contact",
    keywords: [
      "web development company India", "website development services", "web design company India",
      "e-commerce development India", "responsive web design", "best web designing company India",
      "web development company Pune", "web design agency India",
    ],
    faq: [
      {
        q: "How long does a website take to build?",
        a: "A marketing site with 5–10 pages takes 4–6 weeks. An e-commerce site or complex web application takes 8–16 weeks depending on scope. We provide a detailed timeline in the discovery phase before any work begins.",
      },
      {
        q: "Will my website rank on Google?",
        a: "We build technical SEO in from day one — semantic HTML, structured data (JSON-LD), Core Web Vitals optimisation, meta tags, and sitemaps. This gives you the strongest possible technical foundation. Ongoing SEO depends on content quality and link building, which we can also support.",
      },
      {
        q: "Can I update the website myself after launch?",
        a: "Yes. All sites we build include a CMS handover with a non-technical-friendly admin panel. You can edit page content, publish blog posts, add team members, and update services without touching code.",
      },
      {
        q: "Do you build e-commerce websites?",
        a: "Yes — we build custom e-commerce platforms with Razorpay, Stripe and UPI payment integration, product catalogues, inventory management, and order tracking. We recommend custom builds for businesses that need flexibility beyond what Shopify or WooCommerce provide.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "Mobile App Development",
    shortTitle: "App Development",
    description: "Android, iOS and cross-platform apps from concept to launch — and supported after.",
    icon: "Smartphone",
    metaTitle: "Mobile App Development Company India — ITSolvez",
    metaDescription:
      "Native Android, iOS, and cross-platform apps from concept to launch. Built for performance, secured for production. Talk to our app team.",
    h1: "Apps that perform like native — without the cost of building twice.",
    intro:
      "From a single Android build to a cross-platform app for iOS and Android, ITSolvez takes you from concept to deployment — and keeps it running afterwards. We make pragmatic stack choices (native when performance demands it, React Native or Flutter when reach matters more) and ship apps that pass app-store review the first time.\n\nEvery app we build is designed for real users on real devices — tested across screen sizes, OS versions, and network conditions.",
    included: [
      "Android (Kotlin) and iOS (Swift) native development",
      "Cross-platform (React Native, Flutter) for shared codebase and faster ship",
      "Progressive Web Apps (PWA) for app-like experiences without the app store",
      "Backend, APIs, push notifications, analytics, in-app payments",
      "App-store submission, review handling, and post-launch support",
      "UI/UX design optimised for mobile-first interactions",
    ],
    benefits: [
      "Pragmatic stack choices — native where performance demands it, cross-platform where reach matters",
      "App-store submission expertise — we handle review cycles and compliance",
      "Post-launch support — monitoring, updates, and feature releases",
      "Performance and battery-efficiency testing across real devices",
    ],
    cta: "Talk to our app team",
    ctaLink: "/contact",
    keywords: [
      "mobile app development India", "app development company India",
      "Android app development", "iOS app development", "React Native development",
      "Flutter development", "mobile app development company Pune",
      "hire app developers India",
    ],
    faq: [
      {
        q: "Should I build native or cross-platform?",
        a: "Native (Kotlin/Swift) gives you the best performance and access to device-specific features — ideal for complex, performance-critical apps. Cross-platform (React Native/Flutter) shares code across iOS and Android, reducing cost and time-to-market by 30–50%. We recommend based on your specific performance needs and budget.",
      },
      {
        q: "How long does it take to build a mobile app?",
        a: "An MVP with core features takes 8–16 weeks. A full-featured app with backend, integrations and admin panel takes 4–8 months. We scope and timeline in discovery before any development begins.",
      },
      {
        q: "Do you handle app store submission?",
        a: "Yes — we handle Google Play and Apple App Store submission, including metadata, screenshots, privacy policy, and review-cycle management. App Store review can take 1–3 days; Play Store typically 24–48 hours.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortTitle: "Digital Marketing",
    description: "SEO, PPC, social and content that grow visibility and turn reach into real leads.",
    icon: "TrendingUp",
    metaTitle: "Digital Marketing & SEO Services in India — ITSolvez",
    metaDescription:
      "SEO, PPC, social and content that grow visibility and generate real leads. Data-driven campaigns, measurable ROI. Get a free marketing audit.",
    h1: "Marketing that grows visibility — and turns reach into revenue.",
    intro:
      "Being good at what you do isn't enough if buyers can't find you. ITSolvez combines technical SEO, paid search, social and content into one accountable strategy — built around the high-intent searches your future customers actually make, and measured by leads, not vanity metrics.\n\nWe start with a free audit of where you stand and where the gaps are, then build a roadmap focused on the queries closest to a buying decision. In an AI-search world, we also structure your content so assistants like ChatGPT and Gemini surface you when buyers ask them for recommendations.",
    included: [
      "Technical and on-page SEO — site health, speed, structure, keyword targeting",
      "Local SEO — Google Business Profile, Map Pack visibility, 'near me' capture",
      "PPC and Google Ads — high-intent campaigns managed for cost-per-lead, not clicks",
      "Social media and content — assets that build authority and feed the funnel",
      "AEO (Answer Engine Optimisation) — structured for AI assistant citations",
      "Reporting — transparent dashboards tied to leads and pipeline, not vanity metrics",
    ],
    benefits: [
      "AI-search ready — content structured so ChatGPT, Gemini and Perplexity cite you",
      "Local SEO included — Google Business Profile, Map Pack and 'near me' queries",
      "Cost-per-lead focus — we optimise for pipeline, not impressions",
      "One team, full funnel — SEO, PPC and content working from the same strategy",
    ],
    cta: "Get a free marketing audit",
    ctaLink: "/contact",
    keywords: [
      "digital marketing services India", "SEO services India", "digital marketing agency",
      "SEO company Pune", "Google Ads management India", "local SEO India",
      "digital marketing company India",
    ],
    faq: [
      {
        q: "How long does SEO take to show results?",
        a: "Technical SEO improvements (speed, structure) take effect within weeks. Keyword rankings for competitive terms typically improve materially within 3–6 months of consistent, quality content and link building. We set realistic expectations in the audit and track progress monthly.",
      },
      {
        q: "Do you run Google Ads campaigns?",
        a: "Yes — we manage Google Ads, Performance Max, and YouTube campaigns. We focus on cost-per-lead (CPL) as the primary metric, not clicks or impressions, and provide transparent monthly reporting.",
      },
      {
        q: "What is AEO and why does it matter?",
        a: "Answer Engine Optimisation (AEO) is the practice of structuring content so AI assistants (ChatGPT, Gemini, Perplexity) cite your pages when users ask relevant questions. As AI-mediated search grows, being cited by an AI assistant is as valuable as ranking on page 1 of Google.",
      },
    ],
  },
  {
    slug: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    shortTitle: "Staff Augmentation",
    description: "Skilled IT professionals embedded in your team — on demand, no overhead.",
    icon: "Users",
    metaTitle: "IT Staff Augmentation Services India — ITSolvez",
    metaDescription:
      "Hire vetted IT professionals — developers, engineers, analysts — on a flexible basis. Scale your team without the hiring overhead.",
    h1: "Skilled IT talent, embedded in your team, on your terms.",
    intro:
      "Hiring takes months and comes with overhead. ITSolvez places vetted IT professionals — developers, engineers, analysts, project managers — directly into your team on a flexible engagement model. You get the skills you need, when you need them, without the recruitment cycle or permanent headcount.\n\nOur talent pool spans modern development stacks, infrastructure and cloud, data and analytics, and digital marketing. Every professional we place has been technically screened and is managed for quality throughout the engagement.",
    included: [
      "Individual contributor placement — developers, engineers, analysts, PMs",
      "Dedicated remote or hybrid teams for project-based work",
      "Technical screening and reference checking by our team",
      "Flexible engagement terms — weekly, monthly or project-based",
      "Replacement guarantee within the first 30 days if the fit isn't right",
      "Ongoing account management and performance oversight",
    ],
    benefits: [
      "Faster than hiring — placements typically within 1–2 weeks of requirement sign-off",
      "No overhead — no recruitment fees, benefits, equipment or HR administration",
      "Flexible and reversible — scale up or down without notice periods",
      "Technical vetting done — you interview from a qualified shortlist, not a CV pile",
    ],
    cta: "Tell us what you need",
    ctaLink: "/contact",
    keywords: [
      "IT staff augmentation India", "hire developers India", "dedicated development team India",
      "remote IT professionals", "outsource IT team India", "IT staff augmentation Pune",
    ],
    faq: [
      {
        q: "How quickly can you place a resource?",
        a: "For roles with clear requirements, we typically present a shortlist within 3–5 business days. Client interviews and onboarding can complete within 1–2 weeks of sign-off.",
      },
      {
        q: "What roles do you place?",
        a: "Full-stack developers, frontend and backend engineers, DevOps and cloud engineers, QA/test engineers, data analysts, project managers, business analysts, and digital marketing specialists.",
      },
      {
        q: "What if the placed resource isn't a good fit?",
        a: "We offer a 30-day replacement guarantee. If the fit isn't right within the first month, we replace the resource at no additional cost.",
      },
    ],
  },
  {
    slug: "it-infrastructure-management",
    title: "IT Infrastructure Management",
    shortTitle: "Infrastructure",
    description: "End-to-end management of servers, networks, storage and cloud infrastructure.",
    icon: "Server",
    metaTitle: "IT Infrastructure Management Services India — ITSolvez",
    metaDescription:
      "End-to-end management of on-premise and cloud infrastructure. 24/7 monitoring, proactive maintenance, and SLA-backed uptime.",
    h1: "Infrastructure that runs reliably — and never surprises you.",
    intro:
      "Your IT infrastructure is the foundation everything else runs on. When it's managed proactively — monitored continuously, patched promptly, sized correctly — it's invisible to your business in the best possible way. When it's neglected, everything stops.\n\nITSolvez manages on-premise, cloud and hybrid infrastructure end-to-end: servers, networks, storage, backup, and the connections between them. We treat your infrastructure as a living system — continuously tuned for performance, security and cost.",
    included: [
      "Server management — physical and virtual, Windows Server and Linux",
      "Network management — LAN/WAN, firewalls, VPNs, SD-WAN",
      "Storage and backup — structured, automated, tested recovery",
      "Cloud infrastructure — AWS, Azure, Google Cloud management and optimisation",
      "Capacity planning — right-size before you hit limits, not after",
      "Hardware procurement and lifecycle management",
    ],
    benefits: [
      "24/7 monitoring with automated alerting — issues caught before they cause downtime",
      "Proactive patching and maintenance — your infrastructure is always current",
      "CapEx to OpEx — predictable monthly cost for infrastructure management",
      "Expertise across on-premise, cloud and hybrid — one team, one point of contact",
    ],
    cta: "Get an infrastructure review",
    ctaLink: "/contact",
    keywords: [
      "IT infrastructure management India", "server management India",
      "network management services", "cloud infrastructure management",
      "managed infrastructure services Pune",
    ],
    faq: [
      {
        q: "Do you manage on-premise and cloud infrastructure?",
        a: "Yes — we manage on-premise (physical and virtual servers, switches, firewalls), cloud (AWS, Azure, GCP), and hybrid environments. Most clients have a mix, and we manage it as a single, unified environment.",
      },
      {
        q: "What is your uptime SLA?",
        a: "We target 99.9% uptime for managed infrastructure. Specific SLAs are defined per client based on criticality — business-critical systems get tighter SLAs with faster response and escalation paths.",
      },
    ],
  },
  {
    slug: "system-integration",
    title: "System Integration",
    shortTitle: "System Integration",
    description: "Connect your business systems so data flows freely — no manual re-entry, no silos.",
    icon: "GitMerge",
    metaTitle: "System Integration Services India — ITSolvez",
    metaDescription:
      "Connect ERP, CRM, accounting, logistics and cloud systems with secure, reliable integrations. No more data silos or manual re-entry.",
    h1: "Systems that talk to each other — so your team doesn't have to.",
    intro:
      "Businesses run on multiple systems — ERP, CRM, accounting, logistics, e-commerce, communication platforms. When they don't talk to each other, data gets re-entered manually, reports are wrong, and decisions get made on stale information.\n\nITSolvez designs and builds the integrations that connect your systems cleanly: real-time data flows, automated workflows, single sources of truth, and secure APIs that scale as your business does.",
    included: [
      "API design and development — RESTful and GraphQL APIs that connect any system",
      "ERP integration — SAP, Oracle, Microsoft Dynamics, Odoo",
      "CRM integration — Salesforce, HubSpot, Zoho",
      "E-commerce and payment integration — Razorpay, Stripe, Shopify, WooCommerce",
      "Data pipeline and ETL — clean, transform and load data between systems",
      "Monitoring and alerting — integration health dashboards with auto-failover",
    ],
    benefits: [
      "Eliminate manual data entry — automated flows reduce errors and free your team",
      "Real-time data across systems — single source of truth for decisions",
      "Scalable API architecture — built to handle growth without rework",
      "Security by design — encrypted data transfer, role-based access, audit logs",
    ],
    cta: "Discuss your integration needs",
    ctaLink: "/contact",
    keywords: [
      "system integration services India", "API integration India",
      "ERP integration", "CRM integration", "data integration services",
      "enterprise integration India",
    ],
    faq: [
      {
        q: "What systems can you integrate?",
        a: "Any system with an API — ERP (SAP, Oracle, Dynamics, Odoo), CRM (Salesforce, HubSpot, Zoho), accounting (Tally, QuickBooks, Xero), logistics and supply-chain platforms, e-commerce, and custom in-house applications. For legacy systems without an API, we build adapters.",
      },
      {
        q: "How do you handle data security during integration?",
        a: "All data in transit is encrypted (TLS 1.3). We use OAuth 2.0 and API key management for authentication. Access is role-based and logged. We follow OWASP API Security Top 10 guidelines on every integration we build.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
