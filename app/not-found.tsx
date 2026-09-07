import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen gradient-hero grid-bg flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="font-mono text-8xl font-bold text-[#1878F0]/30 mb-6">404</div>
        <h1 className="font-display text-3xl font-black text-white mb-4">
          Page not found
        </h1>
        <p className="text-[#EAF0FA]/60 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary" prefetch={false}>
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-ghost" prefetch={false}>
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
