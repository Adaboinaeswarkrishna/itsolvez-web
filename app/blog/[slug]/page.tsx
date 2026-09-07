import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { InquirySection } from "@/components/InquiryForm";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Tag } from "lucide-react";
import { buildMetadata, JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/SEO";
import { getBlogPost, getBlogPosts, fixMediaUrl } from "@/lib/wagtail";
import { getCategoryImage } from "@/lib/blogImages";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

const FALLBACK_SLUGS = [
  "managed-it-vs-break-fix-india",
  "cloud-cost-optimisation-india-2026",
  "ransomware-india-2026-what-businesses-need-to-know",
  "dpdpa-2023-it-obligations-india",
  "aeo-answer-engine-optimisation-india-2026",
  "choosing-cloud-provider-india-aws-azure-gcp",
];

export async function generateStaticParams() {
  try {
    const data = await getBlogPosts(1, 50);
    const wagtailSlugs = (data.items ?? []).map((p) => ({ slug: p.meta?.slug ?? p.slug })).filter((s) => s.slug);
    const fallbackSlugs = FALLBACK_SLUGS.map((s) => ({ slug: s }));
    const seen = new Set(wagtailSlugs.map((s) => s.slug));
    return [...wagtailSlugs, ...fallbackSlugs.filter((s) => !seen.has(s.slug))];
  } catch {
    return FALLBACK_SLUGS.map((s) => ({ slug: s }));
  }
}

const FALLBACK_META: Record<string, { title: string; description: string }> = {
  "managed-it-vs-break-fix-india": {
    title: "Managed IT vs Break-Fix Support: What Costs More for Indian SMEs?",
    description: "A detailed cost comparison of managed IT services vs break-fix IT support for Indian SMEs. Discover why managed IT almost always costs less in total.",
  },
  "cloud-cost-optimisation-india-2026": {
    title: "How Indian Businesses Can Cut Their Cloud Bill by 30–40% in 2026",
    description: "Practical cloud cost optimisation strategies for Indian businesses, right-sizing, unused storage cleanup, dev environment scheduling and Reserved Instances.",
  },
  "ransomware-india-2026-what-businesses-need-to-know": {
    title: "Ransomware in India 2026: What Every Business Needs to Know",
    description: "India is a top ransomware target in 2026. Learn what's changed, what actually stops ransomware attacks, and your DPDPA breach notification obligations.",
  },
  "dpdpa-2023-it-obligations-india": {
    title: "DPDPA 2023: What India's Data Protection Law Means for Your IT Team",
    description: "Key IT obligations under India's Digital Personal Data Protection Act 2023, data minimisation, retention limits, breach notification and security safeguards.",
  },
  "aeo-answer-engine-optimisation-india-2026": {
    title: "AEO in 2026: How to Get Cited by ChatGPT and Gemini for IT Queries",
    description: "Answer Engine Optimisation for Indian IT service businesses, how to structure content so AI tools like ChatGPT and Gemini cite your business.",
  },
  "choosing-cloud-provider-india-aws-azure-gcp": {
    title: "AWS vs Azure vs Google Cloud for Indian Businesses: A Practical Comparison",
    description: "How to choose between AWS, Azure and GCP for your Indian business, workload fit, compliance, Microsoft integration and cost considerations.",
  },
};

const FALLBACK_TITLES: Record<string, string> = {
  "managed-it-vs-break-fix-india": "Managed IT vs Break-Fix Support: What Actually Costs More for Indian SMEs?",
  "cloud-cost-optimisation-india-2026": "How Indian Businesses Can Cut Their Cloud Bill by 30–40% in 2026",
  "ransomware-india-2026-what-businesses-need-to-know": "Ransomware in India 2026: What Every Business Needs to Know",
  "dpdpa-2023-it-obligations-india": "DPDPA 2023: What India's New Data Protection Law Means for Your IT Team",
  "aeo-answer-engine-optimisation-india-2026": "AEO in 2026: How to Get Cited by ChatGPT and Gemini for IT-Service Queries",
  "choosing-cloud-provider-india-aws-azure-gcp": "AWS vs Azure vs Google Cloud for Indian Businesses: A Practical Comparison",
};

const FALLBACK_IMAGES: Record<string, string> = {
  "managed-it-vs-break-fix-india": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  "cloud-cost-optimisation-india-2026": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  "ransomware-india-2026-what-businesses-need-to-know": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  "dpdpa-2023-it-obligations-india": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  "aeo-answer-engine-optimisation-india-2026": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
  "choosing-cloud-provider-india-aws-azure-gcp": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);
  const fallback = FALLBACK_META[slug];
  const rawTitle: string = (post as any)?.meta?.seo_title || post?.seo_title || post?.title || fallback?.title || "";
  // The on-page H1 always renders the plain post title. If the browser title tag
  // ends up byte-for-byte identical to that (common when seo_title is unset or
  // just a copy of the title), site audits flag it as a duplicate H1/title tag —
  // so make sure the tag always carries the brand suffix, regardless of length.
  const title = rawTitle && !rawTitle.includes("ITSolvez") ? `${rawTitle} - ITSolvez` : rawTitle;
  return buildMetadata({
    title,
    description: (post as any)?.meta?.search_description || post?.search_description || post?.excerpt || fallback?.description || "",
    slug: `blog/${slug}`,
  });
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

// Pulls FAQ Q&A pairs out of the post body for FAQPage schema. Convention: an
// <h2>...FAQ...</h2> (or "Frequently Asked Questions") heading followed by
// <h3>question</h3><p>answer</p> pairs, ending at the next <h2> or end of body.
function extractFaqsFromBody(body: string): { question: string; answer: string }[] {
  if (!body) return [];
  const stripTags = (s: string) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();
  const faqSectionMatch = body.match(/<h2[^>]*>\s*(?:frequently asked questions|faqs?)\s*<\/h2>([\s\S]*?)(?=<h2|$)/i);
  if (!faqSectionMatch) return [];
  const section = faqSectionMatch[1];
  const pairs: { question: string; answer: string }[] = [];
  const pairRe = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = pairRe.exec(section)) !== null) {
    const question = stripTags(m[1]);
    const answer = stripTags(m[2]);
    if (question && answer) pairs.push({ question, answer });
  }
  return pairs;
}

const FALLBACK_CONTENT: Record<string, string> = {
  "managed-it-vs-break-fix-india": `<p>Most Indian SMEs believe break-fix IT support is cheaper because you only pay when something breaks. But when you actually measure the full cost, downtime, lost productivity, emergency call-out rates and expedited hardware replacement, the numbers tell a very different story.</p>

<h2>What break-fix actually costs</h2>
<p>The hidden cost of break-fix is downtime. When a server fails and you're waiting for a technician to be dispatched, diagnosed, and repaired, your team sits idle. For a 50-person business at an average salary of ₹40,000/month, every hour of downtime costs roughly ₹12,500 in lost productivity alone, before factoring in client impact, missed deadlines or emergency IT charges.</p>

<p>Break-fix providers also charge premium rates for emergency work. A server that costs ₹5,000 to maintain proactively can cost ₹25,000–₹50,000 to fix reactively, plus the downtime while you wait.</p>

<h2>What managed IT actually costs</h2>
<p>A managed IT service at ₹999–₹1,499 per user per month for a 50-person business runs ₹50,000–₹75,000/month. That includes 24/7 monitoring, proactive maintenance, patch management, remote support with SLAs, and security management.</p>

<p>A single avoided downtime event, even a half-day, typically covers the entire month's managed IT cost. And because managed IT is proactive, major incidents are dramatically rarer.</p>

<h2>The verdict</h2>
<p>For businesses with more than 10 employees, managed IT almost always costs less in total than break-fix when you account for the full picture. The predictable monthly fee also makes budgeting straightforward, which has its own value for growing businesses.</p>

<p>If you're currently on a break-fix model, the right question isn't "can we afford managed IT?", it's "how much is break-fix actually costing us?"</p>`,

  "cloud-cost-optimisation-india-2026": `<p>India's cloud computing market is growing at 13.35% CAGR, but most businesses are paying 30–40% more than they need to. The waste comes from three consistent sources: over-provisioned instances, unused storage, and orphaned snapshots.</p>

<h2>The three biggest sources of cloud waste</h2>
<h3>1. Over-provisioned instances</h3>
<p>When businesses migrate to the cloud, they typically lift-and-shift their on-premise server specs without right-sizing. A server that was running at 15% utilisation on-premise gets migrated as-is, and you pay for 100% of the capacity, 24/7. Right-sizing alone typically reduces compute costs by 20–35%.</p>

<h3>2. Unused storage</h3>
<p>Orphaned EBS volumes, unattached persistent disks, and forgotten backup buckets accumulate silently. Cloud storage seems cheap until you have 50TB of it and realise 20TB is data you no longer need.</p>

<h3>3. Unmanaged development environments</h3>
<p>Dev and staging environments that run 24/7 when they're only needed 8 hours a day, 5 days a week, waste roughly 75% of their cost. Scheduling automatic shutdowns for non-production resources is one of the fastest wins available.</p>

<h2>Practical steps for 2026</h2>
<ul><li>Run a cloud cost audit, most providers offer native tools (AWS Cost Explorer, Azure Cost Analysis)</li><li>Implement rightsizing recommendations from your provider's advisor tools</li><li>Tag all resources so you can attribute costs by team or project</li><li>Set up budget alerts so overspend doesn't go unnoticed for a month</li><li>Consider Reserved Instances for predictable workloads (typically 30–40% cheaper than on-demand)</li></ul>

<p>The businesses achieving 30–40% cloud cost reductions aren't doing anything exotic, they're just actively managing their cloud the way they'd manage any other cost centre.</p>`,

  "ransomware-india-2026-what-businesses-need-to-know": `<p>India ranked among the top five most-targeted countries for ransomware in 2025, and 2026 is on track to be worse. Attacks are no longer just encrypting files; they're exfiltrating data first and threatening to publish it. For Indian businesses, this means two separate consequences: downtime and regulatory exposure under DPDPA 2023.</p>

<h2>What's changed in 2026</h2>
<p>The ransomware landscape has shifted in three important ways. First, attackers are targeting mid-market Indian businesses directly, not just as collateral damage in global campaigns. Second, they've moved to double-extortion, steal the data, then encrypt it. Third, initial access brokers now sell access to Indian networks on dark-web forums for as little as $500, meaning any reasonably sized business is a potential target.</p>

<h2>What actually stops ransomware</h2>
<h3>Endpoint Detection and Response (EDR)</h3>
<p>Traditional antivirus misses the behavioural patterns that mark ransomware activity. EDR tools monitor process behaviour in real time and can terminate a ransomware process before it encrypts more than a handful of files. This is now table-stakes for any business above 10 employees.</p>

<h3>Immutable backups</h3>
<p>Air-gapped or object-locked backups mean you can recover without paying ransom. The critical word is immutable, backups that can be deleted or encrypted by the attacker are not effective protection. Test your recovery process at least annually.</p>

<h3>Privilege limitation</h3>
<p>Ransomware spreads laterally using the permissions of the account it first compromises. Limiting admin rights, enforcing least-privilege access and separating service accounts limits blast radius dramatically.</p>

<h3>Email security</h3>
<p>Over 80% of ransomware still enters via phishing. DMARC, DKIM, SPF and a sandboxing email gateway together eliminate most of the attack surface.</p>

<h2>DPDPA exposure</h2>
<p>Under India's Digital Personal Data Protection Act 2023, a ransomware attack that results in data breach must be reported to the Data Protection Board. Failure to notify can result in penalties up to ₹250 crore. This is a new and significant reason to take ransomware preparedness seriously beyond just the immediate operational disruption.</p>

<p>If you're unsure about your current ransomware exposure, a free IT security assessment from ITSolvez takes about 90 minutes and gives you a clear picture of where you stand.</p>`,

  "dpdpa-2023-it-obligations-india": `<p>India's Digital Personal Data Protection Act 2023 became law in August 2023 and brings significant new IT obligations for businesses that collect, store or process personal data of Indian citizens. This is not a future requirement, it is current law, with rules and penalties that apply now.</p>

<h2>Who it applies to</h2>
<p>DPDPA applies to any organisation that processes "digital personal data" in India, or processes personal data outside India in connection with offering goods or services to Indian residents. This is broad, if you collect names, email addresses, phone numbers or any other identifying information from Indian customers, employees or vendors, DPDPA applies to you.</p>

<h2>Key obligations for IT teams</h2>
<h3>Data minimisation</h3>
<p>You may only collect personal data that is necessary for the specified purpose. Collecting fields "just in case" is no longer compliant. Audit your forms, databases and CRM entries for unnecessary personal data collection.</p>

<h3>Purpose limitation</h3>
<p>Data collected for one purpose cannot be used for another without fresh consent. If you're using a customer's email for marketing when they signed up for support notifications, that needs to change.</p>

<h3>Data retention limits</h3>
<p>Personal data must be erased once the purpose for which it was collected is fulfilled. You need a documented retention policy and a technical mechanism to enforce it, this is not something most Indian businesses currently have.</p>

<h3>Breach notification</h3>
<p>Any personal data breach must be reported to the Data Protection Board and to the affected data principals "in the prescribed manner." Penalties for failure to notify can reach ₹200 crore.</p>

<h3>Security safeguards</h3>
<p>DPDPA requires "reasonable security safeguards" to protect personal data. While this is principles-based rather than prescriptive, it effectively mandates encryption, access controls, audit logging and incident response capabilities.</p>

<h2>Practical first steps</h2>
<ul><li>Map where you store personal data across all systems (CRM, ERP, email, support tickets, backups)</li><li>Identify data flows, who collects it, who processes it, who has access</li><li>Review consent mechanisms on all forms and touchpoints</li><li>Implement a data retention policy with automated enforcement</li><li>Establish a breach detection and notification process</li></ul>

<p>ITSolvez can help your team conduct a DPDPA readiness assessment and implement the technical controls required for compliance.</p>`,

  "aeo-answer-engine-optimisation-india-2026": `<p>Answer Engine Optimisation (AEO) is the practice of structuring your content so that AI tools, ChatGPT, Google Gemini, Perplexity, Claude, cite your business when users ask relevant questions. As AI Overviews now appear in over 50% of Google searches, being cited by AI has become as valuable as ranking in traditional search results.</p>

<h2>Why AEO matters for IT service businesses in 2026</h2>
<p>When a business owner in Mumbai asks ChatGPT "which managed IT company should I contact in India?" or "what does IT outsourcing cost in India?", the AI synthesises an answer from sources it deems credible. Businesses that create genuinely useful, well-structured content on these questions get cited. Businesses that don't, don't appear at all, regardless of how good their services are.</p>

<h2>What makes content AI-citation-worthy</h2>
<h3>Specific, factual answers</h3>
<p>AI models prefer content that directly answers the question being asked. A page titled "IT Support Pricing India" that contains actual price ranges, not vague "contact us for pricing", is far more likely to be cited than a generic services page.</p>

<h3>Structured format</h3>
<p>Headers, bullet points, numbered lists and tables are easier for AI to parse and extract. Write in the format of an answer, not a sales pitch. The question-answer format (like this article) is particularly effective.</p>

<h3>Entity authority</h3>
<p>AI tools assess authority partly through the consistency of your business information across the web. Your business name, address, phone number, and description should be consistent across your website, Google Business Profile, LinkedIn, Justdial, Clutch and any other directory listings.</p>

<h3>Schema markup</h3>
<p>Structured data (JSON-LD schema) helps AI understand what your page is about. FAQ schema, LocalBusiness schema, Service schema and Article schema all improve discoverability by AI crawlers.</p>

<h2>Practical AEO actions for Indian IT firms</h2>
<ul><li>Create FAQ pages for every service that directly answer "how much does X cost in India?", "how long does X take?", "what does X include?"</li><li>Write blog posts that definitively answer specific questions your prospects ask</li><li>Ensure consistent NAP (Name, Address, Phone) across all directories</li><li>Add FAQ and Service schema markup to all service pages</li><li>Get cited on third-party sites (guest posts, press, industry directories)</li></ul>

<p>The businesses that invest in AEO now will have a significant advantage as AI-mediated search becomes the default way buyers find service providers.</p>`,

  "choosing-cloud-provider-india-aws-azure-gcp": `<p>AWS, Azure and Google Cloud all run production workloads for Indian businesses, and all three have data centres in India (AWS and Azure in Mumbai and Hyderabad; GCP in Mumbai and Delhi). The choice between them is not about which is "best" in the abstract, but which is the best fit for your specific workload, team and compliance requirements.</p>

<h2>AWS (Amazon Web Services)</h2>
<p>AWS is the most mature cloud platform with the widest range of services. It has the largest ecosystem of third-party tools, the deepest set of managed services, and the most extensive documentation and community support. AWS is typically the right choice when:</p>
<ul><li>You need the widest service catalogue (particularly ML, data analytics, IoT)</li><li>Your team already has AWS experience or certifications</li><li>You're building greenfield applications and want the most options</li><li>You need mature DevOps and CI/CD tooling (CodePipeline, CodeBuild)</li></ul>
<p>Trade-off: AWS pricing is complex and cost management requires active attention. The console can be overwhelming for teams new to cloud.</p>

<h2>Microsoft Azure</h2>
<p>Azure is the natural fit for organisations already running Microsoft workloads. If you're using Microsoft 365, Active Directory, SQL Server or Visual Studio, Azure integrations are seamless and licensing can be consolidated. Azure is typically the right choice when:</p>
<ul><li>You're a Microsoft shop (Windows Server, SQL Server, .NET, Microsoft 365)</li><li>You need strong hybrid cloud support (Azure Arc, Azure Stack)</li><li>Compliance with Indian financial sector regulations is critical (Azure has the most RBI-compliant services)</li><li>Your team has existing Microsoft certifications</li></ul>
<p>Trade-off: Azure's non-Microsoft managed services are generally less mature than AWS equivalents.</p>

<h2>Google Cloud Platform (GCP)</h2>
<p>GCP is strongest in data analytics, machine learning and Kubernetes. Google's internal infrastructure expertise translates directly into GCP's networking performance and its BigQuery, Vertex AI and GKE offerings. GCP is typically the right choice when:</p>
<ul><li>Data analytics and ML/AI are core to your workload</li><li>You're running containerised workloads at scale (GKE is the most mature managed Kubernetes)</li><li>Network performance is critical, Google's global network is exceptional</li><li>You're already using Google Workspace</li></ul>
<p>Trade-off: GCP has fewer India-specific managed services and a smaller local partner ecosystem compared to AWS and Azure.</p>

<h2>What most Indian businesses should do</h2>
<p>For most Indian SMEs and mid-market companies, the decision comes down to: existing Microsoft investment → Azure; greenfield with no strong preference → AWS; data/AI-heavy workloads → GCP. Multi-cloud adds operational complexity that most teams aren't staffed to manage well, pick one and do it properly.</p>

<p>If you'd like a cloud assessment to determine which platform fits your workload, ITSolvez offers a free 90-minute cloud readiness review.</p>`,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);

  if (!post) {
    if (!FALLBACK_CONTENT[slug]) notFound();
  }

  const title = post?.title || FALLBACK_TITLES[slug] || slug.replace(/-/g, " ");
  const excerpt = post?.excerpt ?? "";
  const category = post?.category ?? "IT Insights";
  const authorName = post?.author_name ?? "ITSolvez Team";
  const publishedDate = post?.published_date ?? "";
  const readTime = post?.read_time ?? 7;
  const body = post?.body || FALLBACK_CONTENT[slug] || "";

  const featuredImageUrl = post?.featured_image?.url
    ? fixMediaUrl(post.featured_image.url)
    : FALLBACK_IMAGES[slug] || getCategoryImage(category, 1200);

  const faqs = extractFaqsFromBody(body);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://itsolvez.com/" },
      { name: "Blog", url: "https://itsolvez.com/blog/" },
      { name: title, url: `https://itsolvez.com/blog/${slug}/` },
    ]),
    articleSchema({ title, excerpt, slug, published_date: publishedDate, author_name: authorName }),
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      {/* Hero — featured image as background */}
      <section className="relative pt-44 pb-20 overflow-hidden min-h-[480px] flex items-end">
        {/* Background: featured image or gradient fallback */}
        {featuredImageUrl ? (
          <Image
            src={featuredImageUrl}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="absolute inset-0 gradient-hero" />
        )}

        {/* Dark gradient overlay so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B24]/95 via-[#060B24]/70 to-[#060B24]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B24]/60 to-transparent" />

        {/* Grid texture */}
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative z-10 container-custom max-w-4xl w-full pb-2">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#EAF0FA]/40 mb-6 font-mono tracking-wide uppercase">
            <Link href="/" className="hover:text-[#EAF0FA]/70 transition-colors" prefetch={false}>Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#EAF0FA]/70 transition-colors" prefetch={false}>Blog</Link>
            <span>/</span>
            <span className="text-[#EAF0FA]/60">{category}</span>
          </nav>

          {/* Category pill */}
          <span className="inline-block text-xs font-semibold text-[#F04830] bg-[#F04830]/20 border border-[#F04830]/40 px-3 py-1 rounded-full mb-5">
            {category}
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-6 max-w-3xl">
            {title}
          </h1>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-lg text-[#EAF0FA]/70 leading-relaxed mb-8 max-w-2xl">
              {excerpt}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#EAF0FA]/55">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-[#F04830]" />
              {authorName}
            </span>
            {publishedDate && (
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#F04830]" />
                {formatDate(publishedDate)}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#F04830]" />
              {readTime} min read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} className="text-[#F04830]" />
              {category}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 xl:gap-16 max-w-5xl mx-auto">

            {/* Main content */}
            <article>
              {body ? (
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              ) : (
                <p className="text-[#5A6380]">Full article content coming soon.</p>
              )}

              {/* Back to blog */}
              <div className="mt-12 pt-8 border-t border-[#E5E9F2]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#5A6380] hover:text-[#0B1233] transition-colors"
                 prefetch={false}>
                  <ArrowLeft size={16} />
                  Back to Blog and Insights
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* Article info card */}
              <div className="bg-[#F4F7FC] rounded-2xl p-6 space-y-4">
                <h3 className="text-xs font-bold text-[#0B1233] uppercase tracking-widest">About this article</h3>
                <div className="space-y-3 text-sm text-[#5A6380]">
                  <div className="flex items-start gap-2">
                    <User size={14} className="text-[#F04830] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1233]">{authorName}</div>
                      <div className="text-xs">Author</div>
                    </div>
                  </div>
                  {publishedDate && (
                    <div className="flex items-start gap-2">
                      <Calendar size={14} className="text-[#F04830] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-[#0B1233]">{formatDate(publishedDate)}</div>
                        <div className="text-xs">Published</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <Clock size={14} className="text-[#F04830] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1233]">{readTime} minutes</div>
                      <div className="text-xs">Read time</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Tag size={14} className="text-[#F04830] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0B1233]">{category}</div>
                      <div className="text-xs">Category</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-gradient-to-br from-[#0B1233] to-[#1261CC] rounded-2xl p-6 space-y-4">
                <div className="w-8 h-8 rounded-lg bg-[#F04830]/20 flex items-center justify-center">
                  <span className="text-[#F04830] text-base font-black">!</span>
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">Need IT help now?</h3>
                <p className="text-sm text-[#EAF0FA]/60 leading-relaxed">
                  Book a free IT assessment. We&apos;ll review your current environment and identify quick wins.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 w-full justify-center bg-[#F04830] hover:bg-[#D63820] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                 prefetch={false}>
                  Book a Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* More from blog */}
              <div className="bg-[#F4F7FC] rounded-2xl p-6">
                <h3 className="text-xs font-bold text-[#0B1233] uppercase tracking-widest mb-4">More insights</h3>
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-sm font-medium text-[#1878F0] hover:underline"
                 prefetch={false}>
                  All blog posts <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="font-display text-2xl lg:text-3xl font-black text-[#0B1233] mb-4">
            Put this into practice for your business
          </h2>
          <p className="text-[#5A6380] mb-8">
            ITSolvez works with businesses across India to implement exactly what you&apos;ve just read, with the expertise to do it right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary" prefetch={false}>
              Talk to an expert <ArrowRight size={16} />
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#5A6380] hover:text-[#0B1233] transition-colors" prefetch={false}>
              <ArrowLeft size={14} />
              More articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles — internal linking across the blog */}
      <RelatedArticles currentSlug={slug} category={category} />

      <InquirySection source={`Blog: ${title}`} />

    </>
  );
}

async function RelatedArticles({ currentSlug, category }: { currentSlug: string; category: string }) {
  let items: { slug: string; title: string; category: string }[] = [];
  try {
    const data = await getBlogPosts(1, 100);
    const all = (data.items ?? [])
      .map((p: any) => ({ slug: p.meta?.slug ?? p.slug, title: p.title, category: p.category ?? "" }))
      .filter((p: any) => p.slug);
    // Rotate the candidate order starting just after the current post (wrapping around) before
    // picking same-category-first — a fixed same-then-rest slice(0, 4) means a post whose category
    // has no other members (or that sits late in the CMS's default order) never gets linked to from
    // any other post's "related articles" (see the identical bug fixed in hire/[role]/page.tsx).
    const total = all.length;
    const selfIdx = all.findIndex((p) => p.slug === currentSlug);
    const rotated = selfIdx === -1
      ? all
      : Array.from({ length: total }, (_, i) => all[(selfIdx + 1 + i) % total]);
    const ordered = rotated.filter((p) => p.slug !== currentSlug);
    const same = ordered.filter((p) => p.category === category);
    const rest = ordered.filter((p) => p.category !== category);
    items = [...same, ...rest].slice(0, 4);
  } catch {}
  if (items.length === 0) return null;

  return (
    <section className="section-py bg-white">
      <div className="container-custom max-w-4xl">
        <span className="section-tag mb-5">Keep Reading</span>
        <h2 className="section-heading mb-8">Related articles</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}
              className="bg-[#F4F7FC] rounded-xl border border-[#E5E9F2] p-6 hover:border-[#1878F0] hover:shadow-md transition-all group" prefetch={false}>
              <span className="text-xs font-mono font-semibold text-[#1878F0] uppercase tracking-wider">{p.category}</span>
              <h3 className="font-semibold text-[#0B1233] mt-2 leading-snug group-hover:text-[#1878F0] transition-colors">{p.title}</h3>
              <span className="inline-flex items-center gap-1 text-sm text-[#1878F0] font-semibold mt-3">
                Read article <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
