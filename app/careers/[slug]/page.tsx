import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, MapPin, Clock, IndianRupee } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import JobApplicationForm from "@/components/JobApplicationForm";
import { JsonLd, buildMetadata, breadcrumbSchema, jobSchema } from "@/components/SEO";
import { getJobOpenings, type JobOpening } from "@/lib/wagtail";
import { slugifyJobTitle } from "@/lib/careersUtils";
import { FALLBACK_ROLES } from "@/lib/data/careers-fallback";

export const revalidate = 60;

const locationLabel: Record<string, string> = { onsite: "On-site", remote: "Remote", hybrid: "Hybrid" };
const employmentLabel: Record<string, string> = { FULL_TIME: "Full-time", PART_TIME: "Part-time", CONTRACT: "Contract", INTERNSHIP: "Internship" };

async function getAllJobs(): Promise<JobOpening[]> {
  try {
    const data = await getJobOpenings();
    if (data.results?.length) return data.results;
  } catch {}
  return FALLBACK_ROLES;
}

async function findJob(slug: string): Promise<JobOpening | null> {
  const jobs = await getAllJobs();
  return jobs.find((j) => slugifyJobTitle(j.title) === slug) ?? null;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await findJob(slug);
  if (!job) return {};
  return buildMetadata({
    title: `${job.title} | ITSolvez`,
    description: `${job.title}, ${job.department}, ${job.location}. ${job.experience ? `${job.experience} experience. ` : ""}Apply now at ITSolvez.`,
    keywords: [job.title, "ITSolvez careers", "IT jobs Mumbai", job.department],
    slug: `careers/${slug}`,
    ogImage: "/og-image.png",
  });
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await findJob(slug);
  if (!job) notFound();

  const m = job.salary_range?.match(/(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)\s*LPA/i);

  // Rotate through open roles so every listing gets linked from a few others,
  // instead of always the same fixed subset (see hire/[role]/page.tsx for the same pattern).
  const allJobs = await getAllJobs();
  const jobSlug = (j: JobOpening) => slugifyJobTitle(j.title);
  const idx = allJobs.findIndex((j) => jobSlug(j) === slug);
  const otherJobs = idx === -1
    ? allJobs.filter((j) => jobSlug(j) !== slug).slice(0, 3)
    : Array.from({ length: Math.min(3, allJobs.length - 1) }, (_, i) => allJobs[(idx + 1 + i) % allJobs.length]);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://itsolvez.com/" },
        { name: "Careers", url: "https://itsolvez.com/careers/" },
        { name: job.title, url: `https://itsolvez.com/careers/${slug}/` },
      ])} />
      <JsonLd data={jobSchema({
        title: job.title, description: job.description, location: job.location,
        employment_type: job.employment_type, posted_date: job.posted_date,
        location_type: job.location_type,
        salary_min_lpa: m ? Number(m[1]) : undefined,
        salary_max_lpa: m ? Number(m[2]) : undefined,
      })} />

      <PageHero
        tag={job.department}
        title={job.title}
        subtitle={`${job.location} · ${locationLabel[job.location_type] ?? job.location_type} · ${employmentLabel[job.employment_type] ?? job.employment_type}`}
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: job.title }]}
        waveFill="#F4F7FC"
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start max-w-6xl mx-auto">
            {/* LEFT: Job description */}
            <div>
              <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors mb-6" prefetch={false}>
                <ArrowLeft size={14} /> All open roles
              </Link>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-mono font-semibold text-[#1878F0] bg-[#1878F0]/8 px-2.5 py-1.5 rounded-full flex items-center gap-1.5"><Briefcase size={11} /> {job.department}</span>
                <span className="text-xs text-[#5A6380] bg-white border border-[#E5E9F2] px-2.5 py-1.5 rounded-full flex items-center gap-1.5"><MapPin size={11} /> {job.location} · {locationLabel[job.location_type] ?? job.location_type}</span>
                {job.experience && <span className="text-xs text-[#5A6380] bg-white border border-[#E5E9F2] px-2.5 py-1.5 rounded-full flex items-center gap-1.5"><Clock size={11} /> {job.experience}</span>}
                {job.salary_range && <span className="text-xs text-[#5A6380] bg-white border border-[#E5E9F2] px-2.5 py-1.5 rounded-full flex items-center gap-1.5"><IndianRupee size={11} /> {job.salary_range}</span>}
              </div>

              <div
                className="bg-white rounded-2xl border border-[#E5E9F2] p-7 sm:p-8 blog-content"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />

              <div className="mt-6 bg-[#060B24] rounded-2xl p-6">
                <p className="text-sm text-[#EAF0FA]/70 mb-1">Not quite the right role?</p>
                <p className="text-white font-semibold mb-4">See all open positions at ITSolvez</p>
                <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1878F0] hover:text-[#60A5FA] transition-colors" prefetch={false}>
                  Browse all careers <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>

              {otherJobs.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-semibold text-[#0B1233] uppercase tracking-wider mb-3">Other open positions</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {otherJobs.map((j) => (
                      <Link key={j.title} href={`/careers/${jobSlug(j)}`}
                        className="bg-white rounded-xl border border-[#E5E9F2] p-4 hover:border-[#1878F0] hover:shadow-md transition-all flex items-center justify-between group" prefetch={false}>
                        <span className="font-semibold text-[#0B1233] text-sm group-hover:text-[#1878F0] transition-colors">{j.title}</span>
                        <ArrowRight size={15} className="text-[#1878F0] flex-shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: Sticky application form */}
            <div className="lg:sticky lg:top-24">
              <JobApplicationForm jobTitle={job.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
