import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — ITSolvez",
  description: "How ITSolvez uses cookies and similar tracking technologies on itsolvez.com.",
  alternates: { canonical: "https://itsolvez.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="gradient-hero grid-bg pt-32 pb-12">
        <div className="container-custom">
          <h1 className="font-display text-3xl lg:text-4xl font-black text-white mb-3">Cookie Policy</h1>
          <p className="text-[#EAF0FA]/60 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="section-py bg-white">
        <div className="container-custom max-w-3xl space-y-8 text-[#5A6380] text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">What are cookies?</h2>
            <p>Cookies are small text files stored on your device by your browser when you visit a website. They allow the website to remember your actions and preferences over time.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">Cookies we use</h2>
            <div className="space-y-4">
              {[
                { type: "Essential cookies", desc: "Required for the website to function. These cannot be disabled. They include session cookies that keep you logged in to any portal features." },
                { type: "Analytics cookies", desc: "Google Analytics 4 and Microsoft Clarity set cookies to help us understand how visitors use the site — which pages are visited, how long users stay, and where they navigate to. This data is anonymised and aggregated." },
                { type: "Performance cookies", desc: "Used to measure site performance (Core Web Vitals) and improve load times." },
              ].map((c) => (
                <div key={c.type} className="p-4 bg-[#F4F7FC] rounded-xl">
                  <h3 className="font-semibold text-[#0B1233] mb-1">{c.type}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">Managing cookies</h2>
            <p>You can disable cookies in your browser settings at any time. Note that disabling cookies may affect the functionality of some parts of the site. Most browsers allow you to refuse cookies in their settings menu.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0B1233] mb-3">More information</h2>
            <p>For more information on how we handle your personal data, see our <Link href="/privacy-policy" className="text-[#1878F0] hover:underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
