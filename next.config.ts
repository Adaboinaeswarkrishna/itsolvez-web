import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      // Company pages
      { source: "/company/about", destination: "/about", permanent: true },
      { source: "/company/about-us", destination: "/about", permanent: true },
      { source: "/company/why-choose-us", destination: "/about", permanent: true },
      { source: "/company/leadership", destination: "/about", permanent: true },
      { source: "/company/mission-vision-values", destination: "/about", permanent: true },
      { source: "/company/faq", destination: "/faq", permanent: true },
      { source: "/company/careers", destination: "/careers", permanent: true },
      { source: "/company/pricing", destination: "/pricing", permanent: true },
      { source: "/company/locations", destination: "/locations", permanent: true },
      // Old service URLs
      { source: "/it-solutions/managed-it-services", destination: "/services/managed-it", permanent: true },
      { source: "/it-solutions/cloud-computing", destination: "/services/cloud-computing", permanent: true },
      { source: "/it-solutions/cybersecurity", destination: "/services/cyber-security", permanent: true },
      { source: "/it-solutions/cyber-security", destination: "/services/cyber-security", permanent: true },
      { source: "/it-solutions/custom-software-development", destination: "/services/custom-software", permanent: true },
      { source: "/it-solutions/web-development", destination: "/services/web-development", permanent: true },
      { source: "/it-solutions/app-development", destination: "/services/app-development", permanent: true },
      { source: "/it-solutions/digital-marketing", destination: "/services/digital-marketing", permanent: true },
      { source: "/it-solutions/it-consulting", destination: "/services/it-consultancy", permanent: true },
      { source: "/it-solutions/it-staff-augmentation", destination: "/services/it-staff-augmentation", permanent: true },
      { source: "/it-solutions/it-infrastructure-management", destination: "/services/it-infrastructure-management", permanent: true },
      { source: "/it-solutions/system-integration", destination: "/services/system-integration", permanent: true },
      { source: "/it-solutions/backup-and-recovery", destination: "/services/managed-it", permanent: true },
      { source: "/services/it-consulting", destination: "/services/it-consultancy", permanent: true },
      { source: "/services/cybersecurity", destination: "/services/cyber-security", permanent: true },
      // Old industry URLs
      { source: "/it-solutions/banking", destination: "/industries/banking", permanent: true },
      { source: "/it-solutions/capital-markets", destination: "/industries/capital-markets", permanent: true },
      { source: "/it-solutions/manufacturing", destination: "/industries/manufacturing", permanent: true },
      { source: "/it-solutions/healthcare", destination: "/industries/healthcare", permanent: true },
      { source: "/it-solutions/higher-education", destination: "/industries/higher-education", permanent: true },
      { source: "/it-solutions/logistics", destination: "/industries/logistics", permanent: true },
      { source: "/it-solutions/enterprise-technology", destination: "/industries/enterprise-technology", permanent: true },
      // Other aliases
      { source: "/services-overview", destination: "/services", permanent: true },
      { source: "/portfolio", destination: "/case-studies", permanent: true },
    ];
  },
};

export default nextConfig;
