import type { JobOpening } from "@/lib/wagtail";

function fallbackDesc(overview: string, responsibilities: string[], requirements: string[]): string {
  const resp = responsibilities.map((r) => `<li>${r}</li>`).join("");
  const reqs = requirements.map((r) => `<li>${r}</li>`).join("");
  return `<p>${overview}</p><p><strong>What you'll do:</strong></p><ul>${resp}</ul><p><strong>What we're looking for:</strong></p><ul>${reqs}</ul>`;
}

export const FALLBACK_ROLES: JobOpening[] = [
  { id: 1, title: "Cloud Engineer (AWS / Azure)", department: "Cloud and Infrastructure", location: "Mira Road East, Mumbai", location_type: "hybrid", employment_type: "FULL_TIME", experience: "2+ years", description: fallbackDesc(
    "Design, deploy and manage cloud environments for our managed-IT clients — from migration planning to day-to-day operations.",
    ["Design and deploy cloud infrastructure on AWS and Azure for client environments", "Manage cost optimisation, security groups, IAM policies and backup strategies", "Monitor uptime and performance across client cloud environments", "Support cloud migration projects from on-premise to cloud", "Document infrastructure and maintain runbooks for the support team"],
    ["2+ years hands-on experience with AWS and/or Azure", "Familiarity with Terraform or CloudFormation is a plus", "Understanding of networking, security groups and IAM", "Relevant certification (AWS/Azure) preferred but not mandatory"]
  ), salary_range: "₹6–12 LPA", posted_date: "2026-06-01", apply_url: "/contact" },
  { id: 2, title: "Senior Full-Stack Developer (Next.js / Node)", department: "Software Development", location: "Mira Road East, Mumbai", location_type: "hybrid", employment_type: "FULL_TIME", experience: "4+ years", description: fallbackDesc(
    "Build production-grade web applications, SaaS platforms and APIs for clients across India and globally.",
    ["Build and maintain full-stack applications using Next.js, React and Node.js", "Design and implement REST/GraphQL APIs", "Write clean, tested, maintainable code and review peers' code", "Work directly with clients on requirements and technical decisions", "Mentor junior developers on the team"],
    ["4+ years professional experience with JavaScript/TypeScript", "Strong experience with React, Next.js and Node.js/Django backends", "Comfortable with PostgreSQL and REST API design", "Experience deploying to AWS or similar cloud platforms"]
  ), salary_range: "₹12–24 LPA", posted_date: "2026-06-01", apply_url: "/contact" },
  { id: 3, title: "Cybersecurity Analyst (SOC / MDR)", department: "Cybersecurity", location: "Mira Road East, Mumbai", location_type: "onsite", employment_type: "FULL_TIME", experience: "2+ years", description: fallbackDesc(
    "Monitor client environments for threats, investigate alerts and respond to incidents as part of our 24/7 MDR service.",
    ["Monitor security alerts across client environments in real time", "Investigate and triage potential security incidents", "Support incident response and remediation", "Maintain and tune SIEM/MDR tooling", "Produce clear incident reports for clients"],
    ["2+ years experience in a SOC/MDR or similar security operations role", "Familiarity with SIEM tools, endpoint detection and network monitoring", "Understanding of common attack patterns and the MITRE ATT&CK framework", "Security certification (CompTIA Security+, CEH) a plus"]
  ), salary_range: "₹5–10 LPA", posted_date: "2026-06-01", apply_url: "/contact" },
  { id: 4, title: "IT Support Engineer", department: "Managed IT", location: "Mira Road East, Mumbai", location_type: "onsite", employment_type: "FULL_TIME", experience: "1+ years", description: fallbackDesc(
    "Provide remote and on-site IT support to managed-IT clients.",
    ["Respond to and resolve client IT support tickets (remote and on-site)", "Maintain client workstations, servers and network equipment", "Escalate complex issues to the right specialist team", "Keep accurate ticket documentation and asset records", "Deliver on SLA response-time commitments"],
    ["1+ years experience in an IT support/helpdesk role", "Working knowledge of Windows Server, networking basics and common business software", "Strong communication skills — comfortable explaining technical issues to non-technical clients", "Based in or able to travel within Mumbai for on-site visits"]
  ), salary_range: "₹3–5 LPA", posted_date: "2026-06-01", apply_url: "/contact" },
  { id: 5, title: "Digital Marketing Specialist (SEO / PPC)", department: "Digital Marketing", location: "Mira Road East, Mumbai", location_type: "remote", employment_type: "FULL_TIME", experience: "2+ years", description: fallbackDesc(
    "Manage SEO, Google Ads and content campaigns for B2B clients.",
    ["Plan and execute SEO strategy across client and internal websites", "Manage Google Ads and Meta Ads campaigns with defined budgets", "Track and report on campaign performance and ROI", "Coordinate content creation with writers and designers", "Stay current on search engine algorithm changes and AEO practices"],
    ["2+ years experience in SEO and paid campaign management", "Familiarity with Google Analytics, Search Console and Google Ads", "Strong written communication for content strategy", "Experience with B2B or IT services marketing is a plus"]
  ), salary_range: "₹4–8 LPA", posted_date: "2026-06-01", apply_url: "/contact" },
  { id: 7, title: "Technical Director", department: "Engineering Leadership", location: "Mira Road East, Mumbai", location_type: "hybrid", employment_type: "FULL_TIME", experience: "10+ years", description: fallbackDesc(
    "Set technology strategy across the company — evaluate new practices and platforms, own our biggest client accounts technically, and build out the engineering organisation as we scale internationally.",
    ["Define and drive overall technology strategy across the company", "Own the technical relationship for our largest and most complex client accounts", "Evaluate and introduce new tools, frameworks and engineering practices", "Build and scale the engineering organisation as ITSolvez grows internationally", "Partner with leadership on technical hiring and team structure"],
    ["10+ years in software engineering with at least 3 years in a technical leadership role", "Track record of scaling engineering teams and technical delivery", "Strong architecture and systems design background", "Comfortable operating at both strategic and hands-on technical levels"]
  ), salary_range: "₹25–40 LPA", posted_date: "2026-07-21", apply_url: "/contact" },
  { id: 8, title: "Marketing and Sales Manager", department: "Marketing and Sales", location: "Mira Road East, Mumbai", location_type: "hybrid", employment_type: "FULL_TIME", experience: "5+ years", description: fallbackDesc(
    "Own ITSolvez's marketing and sales strategy end to end — from lead generation to closing deals — leading a small team of specialists and executives.",
    ["Own the marketing and sales pipeline from lead generation through to closed deals", "Set quarterly targets and track performance across marketing and sales activities", "Lead and mentor marketing and sales executives on the team", "Build and manage relationships with key accounts and partners", "Report on pipeline health, conversion rates and campaign ROI to leadership"],
    ["5+ years experience in B2B marketing and/or sales, ideally in IT services or SaaS", "Proven track record of managing a pipeline and closing deals", "Experience leading or mentoring a small team", "Strong communication and negotiation skills"]
  ), salary_range: "₹8–15 LPA", posted_date: "2026-07-22", apply_url: "/contact" },
  { id: 9, title: "Marketing and Sales Executive", department: "Marketing and Sales", location: "Mira Road East, Mumbai", location_type: "hybrid", employment_type: "FULL_TIME", experience: "0–2 years", description: fallbackDesc(
    "Support lead generation, campaign execution and client outreach as part of our growing marketing and sales team.",
    ["Execute marketing campaigns across digital channels (email, social, ads)", "Qualify inbound leads and support the sales pipeline", "Conduct outreach to prospective clients and partners", "Assist with proposal preparation and follow-up", "Maintain CRM records and reporting"],
    ["0–2 years experience in marketing, sales or business development", "Strong written and verbal communication skills", "Comfortable with cold outreach and follow-up", "Eagerness to learn — fresh graduates welcome to apply"]
  ), salary_range: "₹3–6 LPA", posted_date: "2026-07-22", apply_url: "/contact" },
];
