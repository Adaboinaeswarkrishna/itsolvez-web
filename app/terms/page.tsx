import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Use — ITSolvez",
  description: "Terms and conditions for use of the ITSolvez website and services.",
  alternates: { canonical: "https://itsolvez.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="gradient-hero grid-bg pt-32 pb-12">
        <div className="container-custom">
          <h1 className="font-display text-3xl lg:text-4xl font-black text-white mb-3">Terms of Use</h1>
          <p className="text-[#EAF0FA]/60 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl space-y-8 text-[#5A6380] text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">1. Acceptance of terms</h2>
            <p>By accessing and using {siteConfig.url}, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">2. Use of the website</h2>
            <p>You may use this website for lawful purposes only. You must not transmit any material that is offensive, unlawful, or in breach of any applicable regulation. You must not attempt to gain unauthorised access to any part of the website or its underlying systems.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">3. Intellectual property</h2>
            <p>All content on this website — including text, graphics, logos, and software — is the property of {siteConfig.legalName} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">4. Disclaimer of warranties</h2>
            <p>This website is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses. Specific service guarantees and SLAs are defined in individual client agreements.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">5. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, {siteConfig.legalName} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">6. Governing law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra, India.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">7. Contact</h2>
            <p>For questions about these terms, contact us at <a href={`mailto:${siteConfig.email}`} className="text-[#1878F0] hover:underline">{siteConfig.email}</a>.</p>
          </div>
          <div className="pt-6 border-t border-[#E5E9F2] flex gap-4">
            <Link href="/privacy-policy" className="text-[#1878F0] hover:underline">Privacy Policy</Link>
            <Link href="/cookie-policy" className="text-[#1878F0] hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
