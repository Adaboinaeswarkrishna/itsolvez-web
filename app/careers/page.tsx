import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { InquirySection } from "@/components/InquiryForm";
import { JsonLd, buildMetadata, jobSchema } from "@/components/SEO";
import { getJobOpenings, getPageSEO } from "@/lib/wagtail";
import { slugifyJobTitle } from "@/lib/careersUtils";
import { FALLBACK_ROLES } from "@/lib/data/careers-fallback";

function firstParagraph(html: string): string {
  const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
  return (match ? match[1] : html).replace(/<[^>]+>/g, "");
}

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO("careers");
  return buildMetadata({
    title: seo?.meta_title || "Careers at ITSolvez — Developer Jobs Mumbai and Remote",
    description: seo?.meta_description || "Join ITSolvez — open roles for software developers, mobile app developers, UI/UX designers and more. Mumbai HQ + remote opportunities.",
    keywords: seo?.meta_keywords || ["software developer jobs Mumbai", "mobile app developer jobs", "IT careers India", "tech careers Mumbai"],
    slug: "careers",
    ogImage: seo?.og_image || "/og-image.png",
  });
}

const locationLabel: Record<string, string> = { onsite: "On-site", remote: "Remote", hybrid: "Hybrid" };
const employmentLabel: Record<string, string> = { FULL_TIME: "Full-time", PART_TIME: "Part-time", CONTRACT: "Contract", INTERNSHIP: "Internship" };

export default async function CareersPage() {
  let jobs = FALLBACK_ROLES;
  try {
    const data = await getJobOpenings();
    if (data.results?.length) jobs = data.results;
  } catch {}

  return (
    <>
      <JsonLd data={jobs.map((j) => {
        const m = j.salary_range?.match(/(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)\s*LPA/i);
        return jobSchema({
          title: j.title, description: j.description, location: j.location,
          employment_type: j.employment_type, posted_date: j.posted_date,
          location_type: j.location_type,
          salary_min_lpa: m ? Number(m[1]) : undefined,
          salary_max_lpa: m ? Number(m[2]) : undefined,
        });
      })} />

      <PageHero
        tag="Careers at ITSolvez"
        title="Build your IT career"
        titleAccent="with us."
        subtitle="Join a fast-growing IT services team working with real clients across India and globally. We invest in certifications, grow fast, and value people who take ownership."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

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

          {jobs.length === 0 ? (
            <div className="text-center py-16 text-[#5A6380]">
              <p className="text-lg font-medium mb-2">No open roles right now</p>
              <p className="text-sm mb-6">We&apos;re always interested in talented people — send us your CV.</p>
              <Link href="/contact" className="btn-primary" prefetch={false}>Send CV <ArrowRight size={15} /></Link>
            </div>
          ) : (
            <div className="space-y-5 max-w-4xl mx-auto">
              {jobs.map((job) => {
                const slug = slugifyJobTitle(job.title);
                return (
                  <div key={job.id} className="card-service bg-white group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <Link href={`/careers/${slug}`} className="flex-1" prefetch={false}>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs font-mono font-semibold text-[#1878F0] bg-[#1878F0]/8 px-2.5 py-1 rounded-full">{job.department}</span>
                          <span className="text-xs text-[#5A6380] bg-[#F4F7FC] px-2.5 py-1 rounded-full flex items-center gap-1"><Briefcase size={10} /> {employmentLabel[job.employment_type] ?? job.employment_type}</span>
                          <span className="text-xs text-[#5A6380] bg-[#F4F7FC] px-2.5 py-1 rounded-full flex items-center gap-1"><MapPin size={10} /> {job.location} · {locationLabel[job.location_type] ?? job.location_type}</span>
                          {job.experience && <span className="text-xs text-[#5A6380] bg-[#F4F7FC] px-2.5 py-1 rounded-full">{job.experience}</span>}
                        </div>
                        <h3 className="font-semibold text-lg text-[#0B1233] mb-2 group-hover:text-[#1878F0] transition-colors">{job.title}</h3>
                        <p className="text-sm text-[#5A6380] leading-relaxed">{firstParagraph(job.description)}</p>
                      </Link>
                      <div className="flex-shrink-0">
                        <Link href={`/careers/${slug}`} className="btn-primary text-sm" prefetch={false}>
                          View and Apply <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="text-center mt-10">
            <p className="text-sm text-[#5A6380] mb-4">Don&apos;t see your role? We&apos;re always interested in talented people.</p>
            <Link href="/contact" className="btn-secondary" prefetch={false}>Send us your CV <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <InquirySection source="Page: Careers" />

    </>
  );
}
