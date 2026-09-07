import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BADGES = [
  { src: "/badges/iso-9001.svg", label: "ISO 9001:2015", sub: "Quality Management" },
  { src: "/badges/iso-27001.svg", label: "ISO 27001:2022", sub: "Information Security" },
  { src: "/badges/iso-20000.svg", label: "ISO 20000-1:2018", sub: "IT Service Management" },
];

/** Certification trust strip — dark band with the three ISO seals, links to /certifications. */
export default function CertTrustStrip({ heading = "An ISO certified IT partner you can verify" }: { heading?: string }) {
  return (
    <section className="bg-[#060B24]">
      <div className="container-custom py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold text-[#F5D06F] uppercase tracking-widest mb-2">Certified and Accredited</p>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">{heading}</h2>
          <p className="text-sm text-[#EAF0FA]/55 max-w-lg">
            Quality, information security and IT service management, independently audited and certified by Anglia Compliance Group, UK.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-6 sm:gap-8">
            {BADGES.map((b) => (
              <Link key={b.label} href="/certifications" className="flex flex-col items-center gap-2 group" title={`${b.label}, ${b.sub}`} prefetch={false}>
                <Image src={b.src} alt={`${b.label} certified seal`} width={64} height={64}
                  className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_16px_rgba(212,166,67,0.35)] group-hover:scale-105 transition-transform" />
                <span className="text-[11px] font-semibold text-white/80 group-hover:text-[#F5D06F] transition-colors whitespace-nowrap">{b.label}</span>
              </Link>
            ))}
          </div>
          <Link href="/certifications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1878F0] hover:text-[#F5D06F] transition-colors whitespace-nowrap" prefetch={false}>
            View and verify <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
