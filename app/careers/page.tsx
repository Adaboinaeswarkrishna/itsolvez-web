import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Careers at ITSolvez — Join Our IT Team in Pune",
  description:
    "Join ITSolvez Pvt Ltd — a growing IT services company in Pune. Open roles in managed IT, cloud engineering, cybersecurity, software development and digital marketing.",
  alternates: { canonical: "https://itsolvez.com/careers" },
};

const openRoles = [
  {
    title: "Cloud Engineer (AWS / Azure)",
    type: "Full-time",
    location: "Pune / Remote",
    department: "Cloud & Infrastructure",
    description:
      "Design, deploy and manage cloud environments for our managed-IT clients. You'll be responsible for migrations, optimisation and 24/7 monitoring on AWS and Azure.",
    requirements: [
      "2+ years cloud engineering experience (AWS or Azure)",
      "AWS Solutions Architect or Azure Administrator certification preferred",
      "Experience with Terraform or Pulumi for IaC",
      "Strong understanding of networking, security and cost optimisation",
    ],
  },
  {
    title: "Senior Full-Stack Developer (Next.js / Node)",
    type: "Full-time",
    location: "Pune / Hybrid",
    department: "Software Development",
    description:
      "Build production-grade web applications, SaaS platforms and APIs for clients across India and globally. You&apos;ll own features end-to-end, from architecture to deployment.",
    requirements: [
      "4+ years full-stack development experience",
      "Expert in React / Next.js and Node.js",
      "PostgreSQL or MongoDB experience",
      "Experience deploying on AWS, Vercel or similar",
    ],
  },
  {
    title: "Cybersecurity Analyst (SOC / MDR)",
    type: "Full-time",
    location: "Pune",
    department: "Cybersecurity",
    description:
      "Monitor client environments for threats, investigate alerts and respond to incidents as part of our 24/7 MDR service. SIEM experience essential.",
    requirements: [
      "2+ years SOC or MSSP experience",
      "SIEM platform experience (Splunk, Sentinel, or similar)",
      "CompTIA Security+ or equivalent certification",
      "Strong understanding of MITRE ATT&CK framework",
    ],
  },
  {
    title: "IT Support Engineer",
    type: "Full-time",
    location: "Pune",
    department: "Managed IT",
    description:
      "Provide remote and on-site IT support to managed-IT clients. You&apos;ll own ticket resolution, user onboarding, and proactive maintenance tasks.",
    requirements: [
      "1+ years IT support experience",
      "Microsoft 365 and Windows Server administration",
      "Strong troubleshooting skills and customer communication",
      "CompTIA A+ or equivalent preferred",
    ],
  },
  {
    title: "Digital Marketing Specialist (SEO / PPC)",
    type: "Full-time",
    location: "Pune / Remote",
    department: "Digital Marketing",
    description:
      "Manage SEO, Google Ads and content campaigns for B2B clients. AEO (Answer Engine Optimisation) experience a strong plus.",
    requirements: [
      "2+ years digital marketing experience",
      "Google Ads and Google Analytics 4 certified",
      "Technical SEO knowledge (Core Web Vitals, structured data)",
      "B2B or technology sector experience preferred",
    ],
  },
];

const jobPostingSchemas = openRoles.map((role, idx) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: role.title,
  description: role.description,
  hiringOrganization: {
    "@type": "Organization",
    name: "ITSolvez Pvt Ltd",
    sameAs: "https://itsolvez.com",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "IN",
    },
  },
  employmentType: role.type.toUpperCase().replace("-", "_"),
  datePosted: "2026-06-01",
  validThrough: "2026-09-01",
  identifier: { "@type": "PropertyValue", name: "ITSolvez", value: `ITSOLVEZ-${idx + 1}` },
}));

export default function CareersPage() {
  return (
    <>
      {jobPostingSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <PageHero
        tag="Careers at ITSolvez"
        title="Build your IT career"
        titleAccent="with us."
        subtitle="Join a fast-growing IT services team working with real clients across India and globally. We invest in certifications, grow fast, and value people who take ownership."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Culture */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Grow fast", desc: "Certification budgets, conference allowances, and a clear promotion path." },
              { title: "Own your work", desc: "Engineers here have real responsibility — no micromanagement, no ticket factories." },
              { title: "Work that matters", desc: "Our work keeps hospitals running, fintechs secure, and manufacturers efficient." },
            ].map((item) => (
              <div key={item.title} className="card-service bg-[#F4F7FC]">
                <h3 className="font-semibold text-[#0B1233] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5A6380] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <span className="section-tag mb-4">Open Roles</span>
            <h2 className="section-heading">Current openings</h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {openRoles.map((role) => (
              <div key={role.title} className="card-service bg-white group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#1878F0] bg-[#1878F0]/8 px-2.5 py-1 rounded-full">
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#5A6380] bg-[#F4F7FC] px-2.5 py-1 rounded-full">
                        <Briefcase size={10} /> {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#5A6380] bg-[#F4F7FC] px-2.5 py-1 rounded-full">
                        <MapPin size={10} /> {role.location}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-[#0B1233] mb-2 group-hover:text-[#1878F0] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-[#5A6380] leading-relaxed mb-4">{role.description}</p>
                    <ul className="space-y-1.5">
                      {role.requirements.map((req) => (
                        <li key={req} className="text-xs text-[#5A6380] flex items-start gap-2">
                          <span className="text-[#1878F0] mt-0.5">·</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/contact?role=${encodeURIComponent(role.title)}`}
                      className="btn-primary text-sm"
                    >
                      Apply <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-[#5A6380] mb-4">
              Don&apos;t see your role? We&apos;re always interested in talented people.
            </p>
            <Link href="/contact" className="btn-secondary">
              Send us your CV <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
