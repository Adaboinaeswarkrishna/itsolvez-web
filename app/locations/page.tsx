import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Locations — ITSolvez Pune & Pan-India IT Services",
  description:
    "ITSolvez is headquartered in Pune (Hadapsar), Maharashtra. We deliver IT services across India and internationally. Contact your nearest team.",
  alternates: { canonical: "https://itsolvez.com/locations" },
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ITSolvez Pvt Ltd",
  image: "https://itsolvez.com/logo.png",
  url: "https://itsolvez.com",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postal,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.5204, longitude: 73.8567 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },
  ],
  areaServed: ["Pune", "Mumbai", "India", "Global"],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      <PageHero
        tag="Our Locations"
        title="Headquartered in Pune."
        titleAccent="Serving India & beyond."
        subtitle="Our primary office is in Hadapsar, Pune. We serve clients across India remotely and provide on-site support in Pune and Mumbai. International clients are served remotely."
        bgImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      <section className="section-py bg-[#F4F7FC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading mb-8">Our office</h2>
              <div className="card-service bg-white space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#1878F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0B1233] text-sm mb-1">Registered Office</div>
                    <div className="text-sm text-[#5A6380] leading-relaxed">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state}<br />
                      {siteConfig.address.postal}, India
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1878F0] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#0B1233] text-sm mb-0.5">Phone</div>
                    <a href={`tel:${siteConfig.phone}`} className="text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#1878F0] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#0B1233] text-sm mb-0.5">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-[#5A6380] hover:text-[#1878F0] transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-xs text-[#5A6380] font-mono uppercase tracking-wider mb-2">Business hours</div>
                  <div className="text-sm text-[#0B1233]">Monday – Saturday, 9:00 AM – 6:00 PM IST</div>
                  <div className="text-sm text-[#5A6380] mt-1">24/7 support available on managed-IT plans</div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/contact" className="btn-primary">
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="section-heading mb-8">Service coverage</h2>
              <div className="space-y-4">
                {[
                  { region: "Pune (HQ)", coverage: "On-site + remote support. Full managed IT, cloud, cybersecurity, and project delivery." },
                  { region: "Mumbai", coverage: "On-site support for managed IT clients. Remote delivery for all services." },
                  { region: "Pan-India", coverage: "Remote-first IT support, cloud management, cybersecurity and digital services across India." },
                  { region: "International", coverage: "Remote delivery for clients in the UK, UAE, USA, Singapore and other markets." },
                ].map((item) => (
                  <div key={item.region} className="card-service bg-white flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1878F0] flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-semibold text-[#0B1233] text-sm mb-1">{item.region}</div>
                      <div className="text-sm text-[#5A6380] leading-relaxed">{item.coverage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
