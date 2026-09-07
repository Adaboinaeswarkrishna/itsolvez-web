import type { NextConfig } from "next";

const DJANGO = "http://127.0.0.1:8095";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  compress: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "http", hostname: "localhost", port: "8000", pathname: "/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/**" },
      { protocol: "https", hostname: "itsolvez.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 75],
    // Cap hero images at 1920px — no 4K variants, halves LCP image weight
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      // Strip trailing slashes (duplicate-content fix) — except Django-proxied paths,
      // which require them (skipTrailingSlashRedirect exists for those).
      {
        source: "/:path((?!admin|django-admin|api|static|media|documents|_next).+)/",
        destination: "/:path",
        permanent: true,
      },
      // Suburb pages consolidated into the flagship /locations/mumbai page (July 2026)
      // Thane un-consolidated 2026-07-28 — confirmed real, distinct keyword demand ("software development company in thane")
      // and Thane is administratively its own city (separate municipal corporation), not just a Mumbai suburb.
      { source: "/locations/mira-road", destination: "/locations/mumbai", permanent: true },
      { source: "/locations/borivali", destination: "/locations/mumbai", permanent: true },
      { source: "/locations/andheri", destination: "/locations/mumbai", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/(badges|certificates)/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Wagtail admin UI
      { source: "/admin/:path*", destination: `${DJANGO}/admin/:path*` },
      // Django admin
      { source: "/django-admin/:path*", destination: `${DJANGO}/django-admin/:path*` },
      // Wagtail API
      { source: "/api/v2/:path*", destination: `${DJANGO}/api/v2/:path*/` },
      // Custom Django API endpoints
      { source: "/api/leads/", destination: `${DJANGO}/api/leads/` },
      { source: "/api/portfolio/", destination: `${DJANGO}/api/portfolio/` },
      { source: "/api/navigation/", destination: `${DJANGO}/api/navigation/` },
      { source: "/api/footer/", destination: `${DJANGO}/api/footer/` },
      { source: "/api/home/", destination: `${DJANGO}/api/home/` },
      { source: "/api/v2/job-openings/", destination: `${DJANGO}/api/v2/job-openings/` },
      { source: "/api/v2/faq/", destination: `${DJANGO}/api/v2/faq/` },
      { source: "/api/v2/team-members/", destination: `${DJANGO}/api/v2/team-members/` },
      // Django static & media files (for Wagtail admin assets)
      { source: "/static/:path*", destination: `${DJANGO}/static/:path*` },
      { source: "/media/:path*", destination: `${DJANGO}/media/:path*` },
      { source: "/documents/:path*", destination: `${DJANGO}/documents/:path*` },
    ];
  },
};

export default nextConfig;
