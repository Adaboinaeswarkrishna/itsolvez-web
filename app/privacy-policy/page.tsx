import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — ITSolvez",
  description: "ITSolvez Pvt Ltd Privacy Policy — how we collect, use and protect your personal data under DPDPA 2023.",
  alternates: { canonical: "https://itsolvez.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-hero grid-bg pt-32 pb-12">
        <div className="container-custom">
          <h1 className="font-display text-3xl lg:text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-[#EAF0FA]/60 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8 text-[#5A6380] leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">1. Who we are</h2>
              <p>
                {siteConfig.legalName} (&quot;ITSolvez&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates {siteConfig.url}. We are
                registered in India and subject to the Digital Personal Data Protection Act 2023 (DPDPA 2023).
                Our registered address is {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} — {siteConfig.address.postal}, India.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">2. What data we collect</h2>
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Contact information you provide via forms: name, email address, phone number, company name.</li>
                <li>Service enquiry details: the service you&apos;re interested in and your message.</li>
                <li>Technical data: IP address, browser type, device type, pages visited, and session duration (via analytics tools).</li>
                <li>Communication data: emails and messages you send us.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">3. How we use your data</h2>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>To respond to your enquiry and provide the services you&apos;ve requested.</li>
                <li>To send you relevant information about our services (with your consent).</li>
                <li>To improve our website and service quality.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">4. Legal basis for processing</h2>
              <p>
                We process your personal data on the basis of your consent (where you submit a contact form),
                our legitimate interests (improving our services and communicating with prospects), and
                legal obligations (compliance with applicable Indian and international law).
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">5. How long we keep your data</h2>
              <p>
                We retain contact-form data for 24 months from the date of submission, unless you ask us to
                delete it sooner or we enter into a client relationship with you (in which case data is retained
                for the duration of the relationship plus 5 years for legal and audit purposes).
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">6. Your rights under DPDPA 2023</h2>
              <p>Under India&apos;s Digital Personal Data Protection Act 2023, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate data.</li>
                <li>Withdraw consent at any time.</li>
                <li>Request erasure of your data (subject to legal obligations).</li>
                <li>Nominate a person to exercise your rights on your behalf.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[#1878F0] hover:underline">
                  {siteConfig.email}
                </a>.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">7. Third-party services</h2>
              <p>
                We use Google Analytics 4 (analytics), Microsoft Clarity (heatmaps), and Resend (email
                delivery). Each of these providers has their own privacy policy and data-processing terms.
                We do not sell your personal data to any third party.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1233] mb-3">8. Contact</h2>
              <p>
                For any privacy-related queries or to exercise your rights, contact our Data Protection
                Officer at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[#1878F0] hover:underline">
                  {siteConfig.email}
                </a>{" "}
                or write to us at the registered address above.
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#E5E9F2] flex gap-4 text-sm">
            <Link href="/cookie-policy" className="text-[#1878F0] hover:underline">Cookie Policy</Link>
            <Link href="/terms" className="text-[#1878F0] hover:underline">Terms of Use</Link>
          </div>
        </div>
      </section>
    </>
  );
}
