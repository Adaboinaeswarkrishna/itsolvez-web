export interface IntlCityPage {
  slug: string;
  city: string;
  countrySlug: "uae" | "uk" | "usa" | "australia" | "canada" | "germany" | "saudi-arabia" | "south-africa";
  country: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  whyOutsource: string;
  overlap: string;
  faqs: { q: string; a: string }[];
  keywords: string[];
}

const SERVICES = [
  { title: "Custom Software Development", desc: "Bespoke software built for your business workflows — from MVPs to enterprise systems.", href: "/services/custom-software" },
  { title: "Web Development", desc: "Fast, SEO-architected websites and web applications built on modern stacks.", href: "/services/web-development" },
  { title: "Mobile App Development", desc: "iOS, Android, Flutter and React Native apps — from MVP to enterprise scale.", href: "/services/app-development" },
  { title: "IT Staff Augmentation", desc: "Vetted developers embedded in your team — React, Node.js, Flutter, Python and more.", href: "/services/it-staff-augmentation" },
  { title: "Managed IT and Server Maintenance", desc: "24/7 monitoring, IT AMC and server maintenance with real SLAs.", href: "/services/it-infrastructure-management" },
  { title: "Digital Marketing and SEO", desc: "SEO, AI-search optimisation (AEO) and Google Ads that bring qualified enquiries.", href: "/services/digital-marketing" },
];

export { SERVICES as INTL_CORE_SERVICES };

export const intlCities: IntlCityPage[] = [
  // ── UAE ──────────────────────────────────────────────────────────────────
  {
    slug: "dubai", city: "Dubai", countrySlug: "uae", country: "UAE",
    metaTitle: "Website Development Company in Dubai | ITSolvez",
    metaDescription: "Website, app and IT infrastructure for Dubai businesses — delivered from India with same-day overlap, transparent pricing.",
    h1: "Website development company", h1Accent: "for Dubai businesses.",
    intro: "Dubai's free zones — DMCC, JAFZA, Dubai Internet City — and its fast-moving fintech and e-commerce scene move at a pace few local dev teams can match at a sane cost. ITSolvez delivers website development, mobile apps and IT infrastructure to Dubai businesses from our ISO-certified team in India.",
    whyOutsource: "Dubai businesses hire ITSolvez for the same reason global companies outsource to India generally — 40–60% lower cost than UK/US/local Gulf agency rates for equivalent quality, backed by ISO 9001, ISO 27001 and ISO 20000-1 certified delivery, not just a cheaper freelancer. Dubai's Smart Dubai initiatives and DMCC free-zone startups need fast, compliant digital builds; our fixed-scope, milestone-billed process gives Dubai founders and CFOs the predictability procurement teams want.",
    overlap: "UAE is only 1.5 hours behind India (IST) — your entire working day overlaps with ours. Meetings, sprint demos and support calls happen in real time, not across a frustrating time-zone gap.",
    faqs: [
      { q: "Can an India-based team really deliver for a Dubai business?", a: "Yes — with only a 1.5-hour time difference, collaboration is effectively real-time. We run weekly sprint demos, a shared project board and direct engineer access, all within your working hours." },
      { q: "Do you understand DMCC/JAFZA free-zone compliance needs?", a: "We've built for free-zone startups and understand the documentation and audit-readiness these entities often need from their software vendors — we're ISO 9001 and ISO 27001 certified ourselves, which most free-zone compliance reviews recognise." },
      { q: "What does a website cost for a Dubai business?", a: "Typically 40–60% below UK/US or local Dubai agency rates for equivalent quality — a professional business website runs from $700–$2,500, e-commerce from $1,800. Fixed-scope, milestone-billed." },
    ],
    keywords: ["website development company dubai", "software development company dubai", "mobile app development company dubai", "web development company uae", "hire developers dubai", "offshore development company dubai", "it infrastructure company dubai"],
  },
  {
    slug: "abu-dhabi", city: "Abu Dhabi", countrySlug: "uae", country: "UAE",
    metaTitle: "Software Development Company in Abu Dhabi | ITSolvez",
    metaDescription: "Software, web and app development for Abu Dhabi government-adjacent and enterprise clients — audited, compliant process.",
    h1: "Software development company", h1Accent: "for Abu Dhabi enterprises.",
    intro: "Abu Dhabi's enterprise and government-adjacent businesses — ADGM fintech, oil and gas modernisation, large corporates — need vendors who can pass a procurement audit, not just write code. ITSolvez delivers exactly that, from an ISO-certified team in India.",
    whyOutsource: "Abu Dhabi's procurement culture is more formal than Dubai's startup scene — RFPs, compliance checklists, and a preference for vendors who can document their process. Our ISO 9001, ISO 27001 and ISO 20000-1 certifications (independently verifiable) are built for exactly this kind of scrutiny, at a fraction of the cost of a UK/US or local enterprise vendor.",
    overlap: "UAE is 1.5 hours behind India — real-time collaboration across your full working day, no overnight wait for responses.",
    faqs: [
      { q: "Can you support a formal procurement/RFP process?", a: "Yes — our ISO 9001-certified process produces the documentation, timelines and compliance evidence enterprise and government-adjacent procurement typically requires." },
      { q: "Do you work with ADGM-registered fintech companies?", a: "Yes — we've delivered compliance-aware software for regulated environments, with ISO 27001-certified data handling that fintech due diligence checks for." },
      { q: "How does pricing compare to a local Abu Dhabi vendor?", a: "Typically 40–60% lower for equivalent quality and certification level, since our delivery team is based in India rather than the UAE." },
    ],
    keywords: ["software development company abu dhabi", "web development company abu dhabi", "it infrastructure company abu dhabi", "erp software abu dhabi", "offshore software development uae"],
  },
  {
    slug: "sharjah", city: "Sharjah", countrySlug: "uae", country: "UAE",
    metaTitle: "Web Development Company in Sharjah | ITSolvez",
    metaDescription: "Website, app and IT services for Sharjah trading and SME businesses — delivered from India at 40-60% below local rates.",
    h1: "Web and software development", h1Accent: "for Sharjah SMEs.",
    intro: "Sharjah's trading houses and SME manufacturers run on tighter margins than Dubai's free-zone startups — and need software partners who respect that. ITSolvez delivers website development, custom software and IT support at rates built for SME budgets, without cutting corners on process.",
    whyOutsource: "Sharjah's trading and SME economy is cost-conscious by nature — the same 40–60% cost advantage that draws global enterprises to Indian outsourcing matters even more here. You get ISO 9001-certified delivery process at SME-friendly pricing, with the same fixed-scope, milestone-billed discipline we apply to enterprise clients.",
    overlap: "UAE is 1.5 hours behind India — your business day and ours overlap almost completely.",
    faqs: [
      { q: "Do you work with trading and distribution businesses?", a: "Yes — inventory management, billing and ERP software for trading SMEs is a core part of our work, informed by the same builds we do for India's trading hubs." },
      { q: "Is there a minimum project size?", a: "No — we scale from a simple business website (~$700) to full ERP builds. We phase larger projects so SMEs can start with what matters most first." },
      { q: "Can you maintain the software after launch?", a: "Yes — managed IT and application maintenance plans are available so a Sharjah business always has one accountable point of contact." },
    ],
    keywords: ["web development company sharjah", "software company sharjah", "erp software sharjah", "website design company sharjah", "it support sharjah"],
  },
  // ── UK ───────────────────────────────────────────────────────────────────
  {
    slug: "london", city: "London", countrySlug: "uk", country: "UK",
    metaTitle: "Website Development Company in London | ITSolvez",
    metaDescription: "Website, app development and dedicated developer teams for London businesses — delivered from India at UK-competitive rates.",
    h1: "Website development company", h1Accent: "for London businesses.",
    intro: "London runs the UK's fintech, professional services and startup economy — and pays London rates for it. ITSolvez gives London businesses an ISO-certified development team at a fraction of the cost, with the process discipline enterprise clients expect.",
    whyOutsource: "London day rates for senior developers routinely exceed £500–£800; the same seniority from ITSolvez runs £25–£50/hour, fully documented under ISO 9001-certified delivery. Fintech and professional-services clients get GDPR-aware data handling backed by our ISO 27001 certification — the same standard UK data-protection reviews look for.",
    overlap: "The UK is 4.5–5.5 hours behind India (varies with daylight saving). Your morning overlaps with our afternoon/evening — enough for daily standups and sprint demos, with async handling the rest for a full 24-hour development cycle.",
    faqs: [
      { q: "Are you GDPR-compliant for UK client data?", a: "Our ISO 27001:2022 certification covers the information security management GDPR-aware clients expect, and we sign data processing agreements as standard for UK engagements." },
      { q: "How do you handle the time difference with London?", a: "Daily overlap for standups and demos, plus async handoff — many UK clients find work actually completes faster because development continues while London sleeps." },
      { q: "What do London businesses typically save by outsourcing to you?", a: "Commonly 50–70% versus UK agency or in-house senior developer rates, for the same ISO 9001-certified delivery quality." },
    ],
    keywords: ["website development company london", "software development company london", "hire developers london", "offshore development team uk", "outsource web development to india", "app development company london"],
  },
  {
    slug: "manchester", city: "Manchester", countrySlug: "uk", country: "UK",
    metaTitle: "Software Development Company in Manchester | ITSolvez",
    metaDescription: "Software, web and app development for Manchester businesses — MediaCityUK digital and e-commerce specialists, UK-competitive rates.",
    h1: "Software development company", h1Accent: "for Manchester businesses.",
    intro: "Manchester's MediaCityUK digital scene and growing e-commerce sector need development partners who move fast without London's price tag. ITSolvez delivers exactly that from our ISO-certified team in India.",
    whyOutsource: "Manchester's tech economy is younger and more cost-sensitive than London's — outsourcing to India stretches budgets further without stepping down in quality. ISO 9001-certified process means Manchester clients get the same audited discipline as our enterprise engagements, at startup-friendly pricing.",
    overlap: "UK time is 4.5–5.5 hours behind India — daily standup overlap, with async development continuing through the UK evening.",
    faqs: [
      { q: "Do you build e-commerce platforms for Manchester retailers?", a: "Yes — Shopify, WooCommerce and custom e-commerce builds are a regular part of our UK client work, with UK payment gateway (Stripe, GoCardless) integration." },
      { q: "Can you work with a MediaCityUK production or digital agency as a white-label partner?", a: "Yes — several UK agencies use us as a delivery partner for client development work, under NDA and white-label terms." },
      { q: "What's the typical engagement model?", a: "Either fixed-scope projects or dedicated developers embedded in your team — most Manchester clients start with a fixed-scope MVP, then move to a dedicated developer for ongoing work." },
    ],
    keywords: ["software development company manchester", "web development company manchester", "app development company manchester", "hire developers manchester", "offshore development uk"],
  },
  {
    slug: "birmingham", city: "Birmingham", countrySlug: "uk", country: "UK",
    metaTitle: "Web Development Company in Birmingham | ITSolvez",
    metaDescription: "Web development, custom software and IT support for Birmingham and Midlands businesses — manufacturing and SME specialists.",
    h1: "Web and software development", h1Accent: "for Birmingham and the Midlands.",
    intro: "The Midlands' manufacturing and logistics economy needs software that integrates with real supply chains, not just a pretty storefront. ITSolvez builds ERP integrations, logistics software and business websites for Birmingham companies from our ISO-certified team in India.",
    whyOutsource: "Birmingham's manufacturing and logistics SMEs run on tighter IT budgets than London's fintech scene — the cost advantage of Indian delivery (typically 50–70% below UK rates) matters directly to the bottom line here, without compromising the ISO 9001-certified process discipline manufacturing clients expect from software vendors.",
    overlap: "UK time is 4.5–5.5 hours behind India — enough daily overlap for standups, with development continuing asynchronously.",
    faqs: [
      { q: "Do you build software that integrates with manufacturing/ERP systems?", a: "Yes — system integration between ERP, production and logistics platforms is one of our core specialisms, informed by similar work for India's manufacturing sector." },
      { q: "Can you support a Birmingham logistics business's tracking needs?", a: "Yes — shipment tracking, warehouse management and transporter integrations are a regular part of our work." },
      { q: "Do you offer ongoing IT support, not just one-off projects?", a: "Yes — managed IT and application support plans keep systems running after launch, with a named point of contact." },
    ],
    keywords: ["web development company birmingham", "software company birmingham", "erp integration birmingham", "logistics software uk", "it support birmingham"],
  },
  // ── USA ──────────────────────────────────────────────────────────────────
  {
    slug: "new-york", city: "New York", countrySlug: "usa", country: "USA",
    metaTitle: "Website Development Company for New York | ITSolvez",
    metaDescription: "Website, app development and dedicated developer teams for New York businesses — delivered at a fraction of NYC rates.",
    h1: "Website development company", h1Accent: "for New York businesses.",
    intro: "New York's fintech, enterprise and agency market pays some of the highest developer rates in the world. ITSolvez gives New York businesses and agencies an ISO-certified development team at a fraction of the cost — used as a delivery partner by agencies and directly by growing companies alike.",
    whyOutsource: "A senior NYC developer costs $150–$250/hour; the same seniority from ITSolvez runs $15–$30/hour under ISO 9001-certified delivery — a difference that funds entire product roadmaps. Agencies use us as a white-label delivery partner to protect their margins; direct clients use us to stretch runway further.",
    overlap: "New York (EST) is 9.5–10.5 hours behind India — minimal daytime overlap, but Indian evening hours align with the US morning, giving a real-time window plus a full async cycle where your team wakes up to completed work.",
    faqs: [
      { q: "How does the time difference actually work in practice?", a: "Our evening (India) overlaps with your morning (EST) — enough for a live standup or demo most days. The rest of the cycle runs async: you review completed work each morning rather than waiting on it." },
      { q: "Can agencies use you as a white-label delivery partner?", a: "Yes — several US agencies use ITSolvez under NDA to deliver client projects, keeping their margin while we handle development." },
      { q: "What's the real cost saving versus a US team?", a: "Typically 80–90% versus US in-house or agency rates for equivalent seniority, under the same ISO 9001-certified process." },
    ],
    keywords: ["website development company new york", "software development company nyc", "hire developers new york", "offshore development company usa", "outsource software development to india", "white label development agency usa"],
  },
  {
    slug: "austin", city: "Austin", countrySlug: "usa", country: "USA",
    metaTitle: "Software Development Company for Austin Startups | ITSolvez",
    metaDescription: "Software and app development for Austin startups — dedicated developers and fixed-scope MVPs to stretch seed runway.",
    h1: "Software development company", h1Accent: "for Austin startups.",
    intro: "Austin's startup scene runs on runway — every dollar spent on development is a dollar not spent on growth. ITSolvez builds MVPs and provides dedicated developers for Austin founders who need senior engineering without Silicon Valley or Austin-scale burn.",
    whyOutsource: "Seed and Series A founders in Austin choose India-based development to extend runway 2–3x versus hiring locally, without sacrificing quality — our ISO 9001-certified process and dedicated-developer model give founders predictable velocity, not a mystery black box.",
    overlap: "Austin (CST) is 10.5–11.5 hours behind India — largely async, with a workable overlap window in the Indian evening / Austin morning for critical syncs.",
    faqs: [
      { q: "Can you build our MVP fast enough to hit a fundraising deadline?", a: "Yes — discovery-first MVP builds typically ship in 8–12 weeks with a fixed scope, giving founders a demoable product for the next funding conversation." },
      { q: "Do you understand startup/seed-stage constraints?", a: "Yes — phased, fixed-scope delivery is built specifically to respect limited runway; we scope tightly and add features as funding allows." },
      { q: "Can we hire a dedicated developer instead of a project?", a: "Yes — many Austin startups start with an MVP project, then convert to a dedicated developer or small pod for ongoing product development." },
    ],
    keywords: ["software development company austin", "app development company austin", "hire developers austin", "mvp development company usa", "dedicated development team austin", "startup development agency india"],
  },
  {
    slug: "chicago", city: "Chicago", countrySlug: "usa", country: "USA",
    metaTitle: "Web Development Company for Chicago Businesses | ITSolvez",
    metaDescription: "Web development, custom software and system integration for Chicago enterprise and logistics businesses.",
    h1: "Web and software development", h1Accent: "for Chicago businesses.",
    intro: "Chicago's enterprise, logistics and manufacturing economy needs software that integrates with real operations — ERP, supply chain, and legacy systems — not just a modern front end. ITSolvez delivers exactly that from our ISO-certified team in India.",
    whyOutsource: "Chicago's Midwest enterprise culture values process discipline — our ISO 9001, ISO 27001 and ISO 20000-1 certifications give procurement teams the audited evidence they need, at 70–85% below US enterprise vendor rates.",
    overlap: "Chicago (CST) is 10.5–11.5 hours behind India — primarily async delivery with a usable overlap window for scheduled syncs.",
    faqs: [
      { q: "Do you handle integration with legacy enterprise systems?", a: "Yes — system integration between modern applications and legacy ERP/logistics platforms is a core part of our work for Midwest manufacturing and logistics clients." },
      { q: "Can you support a formal vendor evaluation process?", a: "Yes — our ISO-certified process produces the documentation most enterprise procurement evaluations require." },
      { q: "What industries do you have the most Chicago-relevant experience in?", a: "Manufacturing, logistics and supply chain — the same industry practices we've built deep experience in for India's manufacturing corridor." },
    ],
    keywords: ["web development company chicago", "software development company chicago", "system integration chicago", "enterprise software development usa", "offshore development chicago"],
  },
  {
    slug: "san-francisco", city: "San Francisco Bay Area", countrySlug: "usa", country: "USA",
    metaTitle: "Software Development Company for Bay Area | ITSolvez",
    metaDescription: "Software and app development for Bay Area startups — dedicated engineering at a fraction of Silicon Valley rates.",
    h1: "Software development company", h1Accent: "for Bay Area startups.",
    intro: "Silicon Valley has the highest developer costs on earth — which is exactly why the world's best-funded startups still outsource core engineering to India. ITSolvez provides dedicated developers and fixed-scope builds for Bay Area founders who need velocity their burn rate can sustain.",
    whyOutsource: "A Bay Area senior engineer costs $180–$300+/hour fully loaded; the same seniority from ITSolvez runs $15–$35/hour under ISO 9001-certified delivery. Product-market-fit-stage startups use this to build and iterate faster on the same funding, extending runway between raises.",
    overlap: "The Bay Area (PST) is 12.5–13.5 hours behind India — close to full async, functioning as a genuine 24-hour development cycle: your team reviews finished work each Bay Area morning.",
    faqs: [
      { q: "How do fast-moving startups manage a 12+ hour time difference?", a: "By treating it as an advantage, not a constraint — work continues while your Bay Area team sleeps, and you review completed features each morning. Critical syncs happen in the Indian-evening/Bay-Area-morning overlap window." },
      { q: "Can you move at startup speed, not agency speed?", a: "Yes — weekly sprint demos and a shared project board give founders visibility without slowing delivery down; most MVP builds ship in 8–12 weeks." },
      { q: "Do you sign NDAs and handle IP transfer properly?", a: "Yes — NDA and IP-assignment terms are standard in every contract; you own all code, designs and documentation from day one." },
    ],
    keywords: ["software development company san francisco", "app development company bay area", "hire developers silicon valley", "offshore engineering team usa", "startup development agency india", "dedicated developers san francisco"],
  },
  // ── Australia ────────────────────────────────────────────────────────────
  {
    slug: "sydney", city: "Sydney", countrySlug: "australia", country: "Australia",
    metaTitle: "Website Development Company for Sydney Businesses | ITSolvez",
    metaDescription: "Website, app development and dedicated developer teams for Sydney businesses — Australia-competitive rates.",
    h1: "Website development company", h1Accent: "for Sydney businesses.",
    intro: "Sydney's fintech and enterprise market pays premium local rates for development talent. ITSolvez gives Sydney businesses an ISO-certified team at a fraction of the cost, with the daytime-overlap advantage that Australia's location gives it over most outsourcing destinations.",
    whyOutsource: "Sydney developer rates run AU$120–$200+/hour; the same seniority from ITSolvez runs AU$20–$40/hour under ISO 9001-certified delivery. Because India and Australia are close in time zone (unlike US/UK outsourcing), Sydney clients get near-real-time collaboration most outsourcing destinations can't offer.",
    overlap: "Sydney is 4.5–5.5 hours ahead of India — your afternoon is our morning, giving a wide same-day overlap window most days, unlike the awkward overnight gaps of US/UK outsourcing.",
    faqs: [
      { q: "Is the time difference actually workable for daily collaboration?", a: "Yes — Sydney is ahead of India by less than half a working day, so most of the Indian working day overlaps with the Sydney afternoon. Standups, demos and reviews happen same-day, not overnight." },
      { q: "Do you understand Australian data and privacy expectations?", a: "Our ISO 27001:2022 certification covers the information security management Australian Privacy Principles-aware clients look for in a vendor." },
      { q: "What's the typical cost saving for a Sydney business?", a: "Commonly 70–85% versus Sydney agency or in-house senior developer rates, under the same certified delivery process." },
    ],
    keywords: ["website development company sydney", "software development company sydney", "hire developers sydney", "offshore development team australia", "outsource software development to india", "app development company sydney"],
  },
  {
    slug: "melbourne", city: "Melbourne", countrySlug: "australia", country: "Australia",
    metaTitle: "Software Development Company for Melbourne | ITSolvez",
    metaDescription: "Software, web and app development for Melbourne startups and retailers — near-real-time daytime overlap.",
    h1: "Software development company", h1Accent: "for Melbourne businesses.",
    intro: "Melbourne's startup and retail/e-commerce scene needs development speed without Sydney-level costs. ITSolvez delivers fixed-scope MVPs and e-commerce builds from our ISO-certified team in India, with a time-zone overlap most outsourcing partners can't match.",
    whyOutsource: "Melbourne founders and retailers get Sydney-grade development quality at India pricing — 70–85% below local rates — with same-day collaboration thanks to the close India-Australia time zone gap, a genuine advantage over outsourcing to the US or UK.",
    overlap: "Melbourne is 4.5–5.5 hours ahead of India — wide same-day working overlap, not an overnight wait for responses.",
    faqs: [
      { q: "Do you build e-commerce platforms for Melbourne retailers?", a: "Yes — Shopify, WooCommerce and custom e-commerce builds with Australian payment gateway integration (Stripe, Afterpay-compatible flows) are a regular part of our work." },
      { q: "Can Melbourne startups get a dedicated developer, not just a project?", a: "Yes — dedicated developer engagements let you scale a team member in or out monthly, with direct access and no recruitment overhead." },
      { q: "What does an MVP typically cost for a Melbourne startup?", a: "AU$8,000–$25,000 depending on scope, roughly a third of equivalent local agency pricing — fixed-scope after a short discovery phase." },
    ],
    keywords: ["software development company melbourne", "app development company melbourne", "ecommerce website melbourne", "hire developers melbourne", "startup development agency australia"],
  },
  {
    slug: "brisbane", city: "Brisbane", countrySlug: "australia", country: "Australia",
    metaTitle: "Web Development Company for Brisbane Businesses | ITSolvez",
    metaDescription: "Web development, custom software and IT support for Brisbane SMEs — cost-effective, same-day time zone overlap.",
    h1: "Web and software development", h1Accent: "for Brisbane businesses.",
    intro: "Brisbane's SME and resources-adjacent economy needs software partners who respect a tighter budget than Sydney or Melbourne without cutting quality. ITSolvez delivers website development, custom software and ongoing IT support from our ISO-certified team in India.",
    whyOutsource: "Brisbane SMEs get the same ISO 9001-certified delivery discipline as our enterprise clients, at pricing built for SME budgets — commonly 70%+ below Brisbane agency rates, with the Australia-India time-zone advantage keeping collaboration real-time.",
    overlap: "Brisbane is 4.5–5.5 hours ahead of India (no daylight saving in Queensland, so the gap is stable year-round) — consistent same-day overlap for meetings and reviews.",
    faqs: [
      { q: "Do you work with resources/mining-adjacent businesses?", a: "Yes — supply-chain, asset-tracking and reporting software for resources-adjacent Queensland businesses is part of our portfolio." },
      { q: "Is Brisbane's stable time zone (no daylight saving) actually helpful?", a: "Yes — the overlap window stays consistent year-round, unlike Sydney/Melbourne where daylight saving shifts it seasonally." },
      { q: "What's the smallest project you'll take on?", a: "We phase work so a small business can start with a core website or module first (~AU$1,200+) and expand as budget allows." },
    ],
    keywords: ["web development company brisbane", "software company brisbane", "it support brisbane", "app development company brisbane", "offshore development australia"],
  },
  {
    slug: "perth", city: "Perth", countrySlug: "australia", country: "Australia",
    metaTitle: "IT Infrastructure and Software Company for Perth | ITSolvez",
    metaDescription: "IT infrastructure and software development for Perth mining and resources businesses — workable time-zone overlap.",
    h1: "IT infrastructure and software", h1Accent: "for Perth businesses.",
    intro: "Perth's mining and resources sector runs remote-site operations that live or die on reliable IT infrastructure and connectivity — alongside the software that reports on it. ITSolvez delivers both server maintenance/IT infrastructure management and custom software from our ISO-certified team in India.",
    whyOutsource: "Perth sits closest to India of any major Australian city in time zone terms — a genuinely practical overlap for remote IT infrastructure monitoring and support, not just software delivery. ISO 20000-1-certified service management matters directly here: resources-sector IT can't tolerate unmonitored downtime.",
    overlap: "Perth is only 2.5–3.5 hours ahead of India — the closest time-zone match of any major Australian city, ideal for real-time infrastructure monitoring and support handoffs.",
    faqs: [
      { q: "Can you support remote-site IT infrastructure for mining operations?", a: "Yes — server maintenance, network monitoring and IT infrastructure management for remote/regional operations is aligned with our ISO 20000-1-certified managed IT service." },
      { q: "Why is Perth's time zone particularly useful for outsourcing?", a: "At only 2.5–3.5 hours ahead of India, Perth has the tightest overlap of any major Australian city — near-full-day real-time collaboration, useful for both software delivery and infrastructure support." },
      { q: "Do you build reporting/dashboard software for resources companies?", a: "Yes — asset tracking, remote monitoring dashboards and operational reporting software are part of our custom software practice." },
    ],
    keywords: ["it infrastructure company perth", "software development company perth", "server maintenance perth", "web development company perth", "offshore development australia"],
  },
  // ── Canada ───────────────────────────────────────────────────────────────
  {
    slug: "toronto", city: "Toronto", countrySlug: "canada", country: "Canada",
    metaTitle: "Software Development Company for Toronto | ITSolvez",
    metaDescription: "Software, web and app development for Toronto businesses — Canada-competitive rates, practical daily overlap.",
    h1: "Software development company", h1Accent: "for Toronto businesses.",
    intro: "Toronto's fintech, enterprise and startup economy pays North American rates for development talent. ITSolvez gives Toronto businesses an ISO-certified development team at a fraction of the cost, with the process discipline enterprise clients expect.",
    whyOutsource: "A senior Toronto developer costs CA$90–$160/hour; the same seniority from ITSolvez runs CA$20–$40/hour under ISO 9001-certified delivery. Canadian data-privacy expectations (PIPEDA-aware handling) are covered by our ISO 27001 certification — the same standard our UK and Australian clients rely on.",
    overlap: "Toronto (EST) is 9.5–10.5 hours behind India — similar to our New York engagements: a workable morning-overlap window plus a full async cycle where finished work is ready each Toronto morning.",
    faqs: [
      { q: "How does the time difference work for a Toronto team?", a: "Our evening overlaps with your morning (EST) for standups and demos; the rest of the cycle runs async, so you review completed work each morning rather than waiting on it." },
      { q: "Are you familiar with Canadian privacy requirements (PIPEDA)?", a: "Our ISO 27001:2022 certification covers the information security management PIPEDA-aware clients expect from a software vendor, and we sign data processing terms as standard." },
      { q: "What's the typical saving versus a Toronto agency?", a: "Commonly 70–80% versus Toronto agency or in-house senior developer rates, under the same ISO 9001-certified process." },
    ],
    keywords: ["software development company toronto", "web development company toronto", "hire developers toronto", "offshore development company canada", "outsource software development to india"],
  },
  {
    slug: "vancouver", city: "Vancouver", countrySlug: "canada", country: "Canada",
    metaTitle: "Web Development Company for Vancouver Startups | ITSolvez",
    metaDescription: "Web and app development for Vancouver startups — dedicated teams and fixed-scope MVPs at a fraction of local rates.",
    h1: "Web development company", h1Accent: "for Vancouver startups.",
    intro: "Vancouver's startup and tech scene competes with Toronto and Seattle for talent — and pays similarly high rates for it. ITSolvez builds MVPs and provides dedicated developers for Vancouver founders who need senior engineering without the West Coast burn rate.",
    whyOutsource: "Vancouver founders use India-based development to extend seed-stage runway significantly further without stepping down in quality — fixed-scope, milestone-billed delivery under ISO 9001 certification gives predictable velocity instead of a black box.",
    overlap: "Vancouver (PST) is 12.5–13.5 hours behind India — largely async, functioning as a genuine 24-hour development cycle with a workable evening-overlap window for critical syncs.",
    faqs: [
      { q: "Can you build our MVP on a startup timeline?", a: "Yes — discovery-first MVP builds typically ship in 8–12 weeks with a fixed scope." },
      { q: "Do you work with Vancouver's gaming/tech startups specifically?", a: "Yes — we've built for consumer and B2B SaaS startups; our team covers React/Next.js, Flutter/React Native and Node.js/Python backends most Vancouver startups need." },
      { q: "Can we start with a project and move to a dedicated developer later?", a: "Yes — many clients start with a fixed-scope MVP, then convert to a dedicated developer or small pod for ongoing development." },
    ],
    keywords: ["web development company vancouver", "app development company vancouver", "hire developers vancouver", "startup development agency canada", "dedicated development team vancouver"],
  },
  // ── Germany ──────────────────────────────────────────────────────────────
  {
    slug: "berlin", city: "Berlin", countrySlug: "germany", country: "Germany",
    metaTitle: "Software Development Company for Berlin Startups | ITSolvez",
    metaDescription: "Software and app development for Berlin startups — dedicated developer teams, GDPR-aware and cost-competitive.",
    h1: "Software development company", h1Accent: "for Berlin startups.",
    intro: "Berlin's startup scene is Europe's largest — and increasingly outsources core engineering to India to stretch funding further. ITSolvez provides dedicated developers and fixed-scope builds under ISO 9001-certified delivery.",
    whyOutsource: "Berlin developer costs run €70–€120/hour; the same seniority from ITSolvez runs €20–€40/hour. GDPR — the standard Berlin startups are built around from day one — is covered by our ISO 27001:2022 certification, independently verifiable rather than a self-declared claim.",
    overlap: "Germany is 3.5–4.5 hours behind India (varies with daylight saving) — a wide same-day overlap window, better than most outsourcing destinations offer European clients.",
    faqs: [
      { q: "Are you GDPR-compliant for German/EU client data?", a: "Our ISO 27001:2022 certification covers the information security management GDPR requires, and we sign EU-standard data processing agreements as part of every German engagement." },
      { q: "Can you work with an English-speaking German team?", a: "Yes — all delivery communication is in English as standard; documentation and code comments follow the same convention." },
      { q: "What's the typical cost saving for a Berlin startup?", a: "Commonly 60–75% versus Berlin agency or in-house senior developer rates, under the same certified process." },
    ],
    keywords: ["software development company berlin", "app development company berlin", "hire developers berlin", "offshore development germany", "outsource software development to india", "startup development agency germany"],
  },
  {
    slug: "munich", city: "Munich", countrySlug: "germany", country: "Germany",
    metaTitle: "Web Development Company for Munich Businesses | ITSolvez",
    metaDescription: "Web development, custom software and system integration for Munich engineering-driven businesses — GDPR-aware.",
    h1: "Web and software development", h1Accent: "for Munich businesses.",
    intro: "Munich's enterprise and precision-engineering economy — automotive, industrial, manufacturing-adjacent software — needs vendors who can document their process, not just write code. ITSolvez delivers exactly that under ISO 9001-certified delivery.",
    whyOutsource: "Munich's enterprise procurement culture values audited process — our ISO 9001, ISO 27001 and ISO 20000-1 certifications give German procurement teams the evidence they look for, at 60–75% below local enterprise vendor rates.",
    overlap: "Germany is 3.5–4.5 hours behind India — a wide same-day working overlap for daily collaboration.",
    faqs: [
      { q: "Do you handle system integration with industrial/ERP systems?", a: "Yes — system integration between modern applications and enterprise ERP/production platforms is a core part of our work for manufacturing-adjacent clients." },
      { q: "Can you support a formal German procurement/RFP process?", a: "Yes — our ISO 9001-certified process produces the documentation most enterprise procurement evaluations require." },
      { q: "Do you offer ongoing IT support after launch?", a: "Yes — managed IT, server maintenance and application support plans keep systems running post-launch, with a named point of contact." },
    ],
    keywords: ["web development company munich", "software development company munich", "system integration munich", "enterprise software development germany", "offshore development munich"],
  },
  // ── Saudi Arabia ─────────────────────────────────────────────────────────
  {
    slug: "riyadh", city: "Riyadh", countrySlug: "saudi-arabia", country: "Saudi Arabia",
    metaTitle: "Software Development Company in Riyadh | ITSolvez",
    metaDescription: "Software, web and app development for Riyadh businesses and Vision 2030-aligned projects — strong daytime overlap.",
    h1: "Software development company", h1Accent: "for Riyadh businesses.",
    intro: "Riyadh's Vision 2030-driven digitisation — government-adjacent projects, fintech, enterprise modernisation — needs development partners who can move fast and document their process. ITSolvez delivers both, from our ISO-certified team in India.",
    whyOutsource: "Riyadh's rapidly digitising economy needs delivery speed as much as cost efficiency — ITSolvez offers both: 40–60% below regional agency rates, under ISO 9001, ISO 27001 and ISO 20000-1 certified process that satisfies formal procurement requirements common in Vision 2030-aligned projects.",
    overlap: "Saudi Arabia is only 2.5 hours behind India — near-complete working-day overlap, real-time collaboration all day.",
    faqs: [
      { q: "Do you support Vision 2030-aligned digital transformation projects?", a: "Yes — our ISO 9001-certified delivery process and enterprise system integration experience align with the documentation and quality standards these projects typically require." },
      { q: "Can we collaborate in real time given the short time difference?", a: "Yes — at only 2.5 hours apart, your entire working day overlaps with ours. Standups, demos and reviews happen live." },
      { q: "Do you have experience with Arabic-language interfaces?", a: "Yes — Arabic-English bilingual websites and apps, including right-to-left (RTL) layout support, are part of our standard capability." },
    ],
    keywords: ["software development company riyadh", "web development company saudi arabia", "app development company riyadh", "it services company saudi arabia", "offshore development company ksa"],
  },
  {
    slug: "jeddah", city: "Jeddah", countrySlug: "saudi-arabia", country: "Saudi Arabia",
    metaTitle: "Web Development Company in Jeddah | ITSolvez",
    metaDescription: "Website development, e-commerce and IT services for Jeddah trading businesses — competitive rates, daytime overlap.",
    h1: "Web and software development", h1Accent: "for Jeddah businesses.",
    intro: "Jeddah's trading houses and growing e-commerce sector need development partners who understand commercial pace. ITSolvez delivers website development, e-commerce and custom software from our ISO-certified team in India.",
    whyOutsource: "Jeddah's commercial and trading economy benefits from the same cost and speed advantages driving Gulf-wide adoption of Indian outsourcing — 40–60% below regional rates, with ISO 9001-certified process discipline built in.",
    overlap: "Saudi Arabia is only 2.5 hours behind India — near-total working-day overlap for real-time collaboration.",
    faqs: [
      { q: "Do you build e-commerce platforms with local payment support?", a: "Yes — e-commerce builds with regional payment gateway integration (mada-compatible flows) and Arabic-English bilingual storefronts are part of our standard offering." },
      { q: "Can you support trading/distribution businesses with inventory software?", a: "Yes — inventory management, billing and ERP software for trading businesses is a core part of our work." },
      { q: "What does a business website cost for a Jeddah company?", a: "Typically 40–60% below regional agency rates for equivalent quality — fixed-scope and milestone-billed." },
    ],
    keywords: ["web development company jeddah", "software company jeddah", "ecommerce website saudi arabia", "erp software jeddah", "offshore development saudi arabia"],
  },
  // ── South Africa ─────────────────────────────────────────────────────────
  {
    slug: "johannesburg", city: "Johannesburg", countrySlug: "south-africa", country: "South Africa",
    metaTitle: "Software Development Company in Johannesburg | ITSolvez",
    metaDescription: "Software, web and app development for Johannesburg businesses — outstanding time-zone overlap, specialised capacity.",
    h1: "Software development company", h1Accent: "for Johannesburg businesses.",
    intro: "Johannesburg is South Africa's financial and business capital — fintech, mining-adjacent enterprise, and a fast-growing digital sector. ITSolvez partners with Johannesburg businesses as an ISO-certified extension of their team, from India.",
    whyOutsource: "The honest reason to work with ITSolvez from Johannesburg isn't a dramatic cost gap — South African rates are already reasonable by global standards. It's capacity and speed: ISO 9001-certified delivery process, a team that can scale up or down by the sprint, and specialised skills (React/Next.js, Flutter, cloud infrastructure) that can be harder to hire locally at pace. You get a near-real-time overlap window most outsourcing destinations can't offer.",
    overlap: "South Africa is only 3.5 hours behind India — one of the closest overlaps of any market we serve, similar to UAE. Nearly your entire working day overlaps with ours.",
    faqs: [
      { q: "Is it actually cheaper to outsource to India from Johannesburg?", a: "It's often comparable rather than dramatically cheaper — South African developer rates are reasonable by global standards. The real advantage is capacity: scaling a team quickly, accessing specialised skills, and near-real-time collaboration thanks to the small time-zone gap." },
      { q: "How close is the time-zone overlap really?", a: "South Africa is only 3.5 hours behind India — one of the tightest overlaps of any international market we serve. Standups, demos and reviews happen live, not overnight." },
      { q: "Do you have experience with South African fintech or POPIA compliance?", a: "Our ISO 27001:2022 certification covers the information security management POPIA-aware clients expect, and we've built fintech-adjacent systems requiring similar data-handling discipline." },
    ],
    keywords: ["software development company johannesburg", "web development company south africa", "app development company johannesburg", "hire developers south africa", "it services company johannesburg"],
  },
  {
    slug: "cape-town", city: "Cape Town", countrySlug: "south-africa", country: "South Africa",
    metaTitle: "Web Development Company in Cape Town | ITSolvez",
    metaDescription: "Web and app development for Cape Town startup and tech businesses — dedicated teams, near-real-time overlap.",
    h1: "Web development company", h1Accent: "for Cape Town startups.",
    intro: "Cape Town anchors South Africa's startup and tech ecosystem — and increasingly looks to India for specialised engineering capacity rather than just cost savings. ITSolvez provides dedicated developers and fixed-scope builds under ISO 9001-certified delivery.",
    whyOutsource: "Cape Town founders choose ITSolvez for speed and specialised skill access — Flutter, React Native, Next.js and cloud engineering capacity that can be hard to scale locally — backed by ISO-certified process, with one of the closest time-zone overlaps of any market outside Africa itself.",
    overlap: "Cape Town is only 3.5 hours behind India — near-complete working-day overlap, enabling genuinely real-time collaboration rather than async handoffs.",
    faqs: [
      { q: "Can Cape Town startups get a dedicated developer, not just a project?", a: "Yes — dedicated developer engagements let you scale a team member in or out monthly, with direct access and no local recruitment overhead." },
      { q: "What's the real advantage over hiring locally in Cape Town?", a: "Speed of scaling and access to specialised skills (Flutter, React Native, cloud infrastructure) — combined with a time-zone overlap close enough for real daily collaboration, not overnight waiting." },
      { q: "Do you build fintech or e-commerce products?", a: "Yes — fintech-adjacent and e-commerce builds are part of our portfolio, with ISO 27001-certified data handling for sensitive financial data." },
    ],
    keywords: ["web development company cape town", "app development company cape town", "hire developers cape town", "startup development agency south africa", "dedicated development team south africa"],
  },
  // ── USA (additional cities) ─────────────────────────────────────────────
  {
    slug: "dallas", city: "Dallas–Fort Worth", countrySlug: "usa", country: "USA",
    metaTitle: "Software Development Company for Dallas Businesses | ITSolvez",
    metaDescription: "Software development and managed IT for Dallas–Fort Worth enterprises — dedicated teams and 24/7 infrastructure support.",
    h1: "Software development company", h1Accent: "for Dallas–Fort Worth.",
    intro: "Dallas–Fort Worth carries one of the largest concentrations of corporate headquarters in the US — logistics, financial services and telecom firms that need software modernization and IT support at enterprise scale, not a solo freelancer. ITSolvez provides dedicated development teams and managed IT under ISO 9001/27001-certified process.",
    whyOutsource: "DFW enterprises use ITSolvez to modernize legacy systems and staff specialist roles (cloud, data, mobile) that are expensive to hire locally at the volume large organizations need — with 24/7 managed IT and infrastructure monitoring covering the gap between US business hours and after-hours incidents.",
    overlap: "Dallas (CST) is 10.5–11.5 hours behind India — largely async for development work, with 24/7 managed-IT coverage handling after-hours monitoring and incident response regardless of the time difference.",
    faqs: [
      { q: "Do you work with enterprise-scale legacy systems, not just startups?", a: "Yes — legacy modernization and staff augmentation for established DFW businesses is a regular part of our work, alongside startup MVP builds." },
      { q: "Can you cover after-hours IT support given the time difference?", a: "Yes — managed IT and infrastructure monitoring run 24/7 regardless of the time zone gap; incidents are triaged and handled around the clock." },
      { q: "Do you sign NDAs and handle data-security requirements for enterprise clients?", a: "Yes — NDA and data-handling terms are standard, backed by ISO 27001-certified information security process." },
    ],
    keywords: ["app development companies dallas", "mobile app development company dallas", "digital marketing agency dallas", "managed it services dallas", "software development company dallas", "hire developers dallas"],
  },
  {
    slug: "los-angeles", city: "Los Angeles", countrySlug: "usa", country: "USA",
    metaTitle: "App Development and Digital Marketing for LA Brands | ITSolvez",
    metaDescription: "App development and digital marketing for Los Angeles D2C and media brands — dedicated teams, SEO and paid growth that ties to revenue.",
    h1: "App development and digital marketing", h1Accent: "for LA brands.",
    intro: "Los Angeles runs on media, entertainment and direct-to-consumer brands that live or die by their app and digital presence — and local engineering and marketing talent both come at a premium. ITSolvez builds apps and runs SEO/paid campaigns for LA brands that need results tied to revenue, not vanity metrics.",
    whyOutsource: "D2C and media-adjacent LA brands use ITSolvez for app development and performance-driven digital marketing at a fraction of local agency retainers, with the same senior-level output — freeing budget for the paid media spend that actually drives growth.",
    overlap: "Los Angeles (PST) is 12.5–13.5 hours behind India — close to full async, functioning as a genuine 24-hour cycle where development continues overnight and is ready for review each LA morning.",
    faqs: [
      { q: "Do you work with D2C and media/entertainment brands specifically?", a: "Yes — consumer-facing app development and growth-focused SEO/paid campaigns for D2C and media-adjacent brands are a core part of our portfolio." },
      { q: "Can digital marketing and app development be handled by one team?", a: "Yes — many LA clients run both through ITSolvez, which keeps app analytics and marketing campaigns aligned instead of siloed across two vendors." },
      { q: "How is marketing ROI reported?", a: "Through a shared dashboard tracking cost-per-acquisition, conversion rate and revenue attribution, not just impressions or clicks." },
    ],
    keywords: ["seo company los angeles", "digital marketing agency los angeles", "it companies in los angeles ca", "app development company los angeles", "hire developers los angeles"],
  },
  {
    slug: "san-antonio", city: "San Antonio", countrySlug: "usa", country: "USA",
    metaTitle: "Web Design and Development Company for San Antonio | ITSolvez",
    metaDescription: "Web design and development for San Antonio businesses — modern, conversion-focused sites at small-business-friendly pricing.",
    h1: "Web design and development", h1Accent: "for San Antonio businesses.",
    intro: "San Antonio's small and mid-sized business base needs a modern, fast, conversion-focused web presence without big-agency pricing. ITSolvez builds and redesigns websites for San Antonio businesses — from local service companies to growing regional brands — under ISO 9001-certified delivery process.",
    whyOutsource: "San Antonio businesses use ITSolvez to get an agency-quality website redesign — mobile-first, fast-loading, SEO-structured from the ground up — at a fraction of local web design agency rates, with a dedicated point of contact instead of a rotating account team.",
    overlap: "San Antonio (CST) is 10.5–11.5 hours behind India — async for build work, with scheduled calls set during San Antonio morning / Indian evening overlap.",
    faqs: [
      { q: "Do you redesign an existing site or only build from scratch?", a: "Both — redesigning an outdated site to be mobile-first and SEO-structured is at least as common as new builds." },
      { q: "Will the new site actually rank better in local search?", a: "A properly structured, fast site is a prerequisite for local SEO — we build with clean semantic markup and page speed in mind from day one, then digital marketing services can build local visibility on top of that foundation." },
      { q: "What's included besides the design itself?", a: "Responsive development, basic on-page SEO setup, and a content-editable CMS so you're not dependent on a developer for every text change." },
    ],
    keywords: ["web design san antonio", "web design companies in san antonio", "website design san antonio tx", "web development company san antonio", "small business website san antonio"],
  },
  {
    slug: "miami", city: "Miami", countrySlug: "usa", country: "USA",
    metaTitle: "Digital Marketing Agency for Miami Businesses | ITSolvez",
    metaDescription: "Digital marketing and web development for Miami businesses — SEO, paid campaigns and bilingual-ready sites for a LatAm-facing market.",
    h1: "Digital marketing agency", h1Accent: "for Miami businesses.",
    intro: "Miami sits at the crossing point of US and Latin American commerce — a market where a business's digital presence often has to work across languages and time zones, not just one metro area. ITSolvez runs digital marketing and builds web platforms for Miami businesses reaching both US and LatAm audiences.",
    whyOutsource: "Miami businesses use ITSolvez for SEO and paid-campaign management priced for sustained monthly spend rather than one-off agency retainers, plus web development that supports bilingual (English/Spanish) content structures for LatAm-facing brands.",
    overlap: "Miami (EST) is 9.5–10.5 hours behind India — async for most work, with a workable call window in the Indian-evening / Miami-morning overlap.",
    faqs: [
      { q: "Can you build bilingual English/Spanish websites?", a: "Yes — bilingual content structures and locale-aware SEO are something we build for LatAm-facing Miami clients regularly." },
      { q: "Do you run paid campaigns as well as SEO?", a: "Yes — SEO and Google/Meta paid campaign management are run together so organic and paid growth reinforce each other instead of competing for the same keywords." },
      { q: "How is reporting handled given the time difference?", a: "Monthly and campaign-level reports are delivered on a fixed schedule, with async Slack/email access for questions in between." },
    ],
    keywords: ["digital marketing agency miami", "digital marketing companies in miami", "digital marketing company miami", "seo company miami", "web development company miami"],
  },
  {
    slug: "denver", city: "Denver", countrySlug: "usa", country: "USA",
    metaTitle: "SEO and Digital Marketing Agency for Denver Businesses | ITSolvez",
    metaDescription: "SEO and digital marketing for Denver and Boulder-area businesses — organic growth for a market with a strong remote-first, tech-forward business base.",
    h1: "SEO and digital marketing agency", h1Accent: "for Denver businesses.",
    intro: "Denver and the Boulder corridor carry a disproportionate share of remote-first and tech-forward small businesses for a metro of their size — companies that expect data-driven marketing, not guesswork. ITSolvez runs SEO and digital marketing campaigns for Denver-area businesses under transparent, metric-based reporting.",
    whyOutsource: "Denver businesses use ITSolvez for SEO and content-driven organic growth priced for ongoing monthly retainers rather than short-term agency contracts, with the technical depth (site architecture, page speed, structured data) that a tech-literate Denver client base expects to see explained, not just delivered as a black box.",
    overlap: "Denver (MST) is 11.5–12.5 hours behind India — largely async, with a workable call window in the Indian-evening / Denver-morning overlap.",
    faqs: [
      { q: "Do you handle technical SEO, not just content and backlinks?", a: "Yes — site architecture, Core Web Vitals, structured data and crawlability are addressed as part of the SEO engagement, not treated as a separate line item." },
      { q: "Can you work with a remote-first company that has no single office?", a: "Yes — our engagement model is built around async communication and shared dashboards, which fits a distributed team naturally." },
      { q: "How do you report on SEO progress?", a: "Monthly reporting on rankings, organic traffic and conversion-relevant metrics — not just keyword position screenshots." },
    ],
    keywords: ["denver seo agency", "denver seo company", "seo agency in denver", "digital marketing agency denver", "seo company denver"],
  },
  {
    slug: "houston", city: "Houston", countrySlug: "usa", country: "USA",
    metaTitle: "SEO and Software Development for Houston Businesses | ITSolvez",
    metaDescription: "SEO and software development for Houston businesses across energy, logistics and healthcare — practical results, not jargon.",
    h1: "SEO and software development", h1Accent: "for Houston businesses.",
    intro: "Houston's business base runs heavy on energy, logistics and healthcare, industries where a website or piece of software has to work reliably first and look good second. ITSolvez builds software and runs SEO for Houston companies that need results explained in plain terms, not marketing jargon.",
    whyOutsource: "Houston businesses use ITSolvez for software projects and SEO work priced for a sustained, ongoing engagement rather than a one-off contract, with clear monthly reporting on what was done and what it produced.",
    overlap: "Houston (CST) is 10.5–11.5 hours behind India — async for most work, with a call window in the Indian-evening / Houston-morning overlap.",
    faqs: [
      { q: "Do you work with energy or logistics sector businesses specifically?", a: "Yes — software and web projects for energy, logistics and healthcare-adjacent Houston businesses are part of our regular work." },
      { q: "How is SEO progress reported?", a: "Monthly reporting on rankings, organic traffic and the specific pages or keywords that moved, in plain language, not a wall of unexplained metrics." },
      { q: "Can I start with a smaller project before committing further?", a: "Yes — many engagements start with a single website or SEO audit, then expand once the working relationship is proven." },
    ],
    keywords: ["houston seo company", "seo agency houston", "software development company houston", "web design houston", "digital marketing agency houston"],
  },
  {
    slug: "seattle", city: "Seattle", countrySlug: "usa", country: "USA",
    metaTitle: "App Development Company for Seattle Businesses | ITSolvez",
    metaDescription: "App and software development for Seattle businesses — a cloud-literate market that expects engineering done properly.",
    h1: "App development company", h1Accent: "for Seattle businesses.",
    intro: "Seattle sits inside one of the world's biggest cloud and software ecosystems, home to Amazon and Microsoft, which means local businesses and startups tend to know exactly what good engineering looks like. ITSolvez builds apps and software for Seattle companies that expect real technical depth, not just a working demo.",
    whyOutsource: "Seattle businesses use ITSolvez to extend a small engineering team or build a full app without paying Seattle-level salaries for every role, while still working with developers comfortable on AWS and Azure, the two cloud platforms most Seattle companies already run on.",
    overlap: "Seattle (PST) is 12.5–13.5 hours behind India — close to full async, working as a genuine round-the-clock cycle where development continues overnight and is ready to review each Seattle morning.",
    faqs: [
      { q: "Do your developers work with AWS and Azure?", a: "Yes — most of our app and backend developers are comfortable deploying on both AWS and Azure, which covers what most Seattle-area companies already use." },
      { q: "Can we start with a dedicated developer instead of a full project?", a: "Yes — a dedicated developer joining your existing team is a common starting point for Seattle clients, with the option to scale up later." },
      { q: "How do you handle the time difference for a fast-moving product team?", a: "By treating it as a round-the-clock cycle rather than a delay — your team reviews finished work each morning, and critical syncs happen in the Indian-evening / Seattle-morning overlap window." },
    ],
    keywords: ["seattle app developers", "app development company seattle", "software development company seattle", "hire developers seattle"],
  },
];

export function getIntlCityBySlug(countrySlug: string, citySlug: string): IntlCityPage | undefined {
  return intlCities.find((c) => c.countrySlug === countrySlug && c.slug === citySlug);
}

export function getIntlCitiesByCountry(countrySlug: string): IntlCityPage[] {
  return intlCities.filter((c) => c.countrySlug === countrySlug);
}
