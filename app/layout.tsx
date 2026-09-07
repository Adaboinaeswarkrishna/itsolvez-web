import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsolvez.com"),
  title: {
    template: "%s - ITSolvez",
    default: "ITSolvez - Software, Web and App Development Company India",
  },
  description:
    "ITSolvez builds custom software, mobile apps, web platforms, ERP, CRM and HRMS products for businesses worldwide. Own products include OnlyOnTrip travel platform, ERP, CRM, HRMS. Software development company serving UAE, UK, USA, Singapore, Australia and globally.",
  keywords: [
    "custom software development company",
    "mobile app development company",
    "web development company",
    "ERP software development",
    "CRM software development",
    "HRMS software",
    "travel booking software development",
    "software product company",
    "enterprise software development",
    "software development company Dubai",
    "mobile app development Dubai UAE",
    "software development company UK",
    "software development company USA",
    "software development company Singapore",
    "custom software development globally",
    "IT services company worldwide",
    "email marketing software",
    "software outsourcing company",
    "digital marketing services",
    "IT solutions worldwide",
    "web application development",
    "Android iOS app development",
    "SaaS product development",
    "staff augmentation worldwide",
    "offshore software development",
    "IT consultancy worldwide",
    "cloud application development",
    "software development Mumbai",
    "app development company",
    "ITSolvez products",
  ],
  authors: [{ name: "ITSolvez", url: "https://itsolvez.com" }],
  creator: "ITSolvez",
  publisher: "ITSolvez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsolvez.com",
    siteName: "ITSolvez",
    title: "ITSolvez - Software, Web and App Development Company India",
    description:
      "Global software development company. Custom software, mobile apps, web platforms, ERP, CRM and HRMS. Own products: OnlyOnTrip, ERP, CRM, HRMS. Serving UAE, UK, USA, Singapore and worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ITSolvez - Custom Software, Mobile App and Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itsolvez",
    creator: "@itsolvez",
    title: "ITSolvez - Software, Web and App Development Company India",
    description:
      "Global software development company. Custom software, mobile apps, ERP, CRM, HRMS. Own products: OnlyOnTrip, ERP, CRM, HRMS. Serving UAE, UK, USA, Singapore and worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://itsolvez.com/" },
  verification: {
    google: "G-4DGY2KNMQP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WS36RH93');`}
        </Script>
        {/* Google Analytics (via GTM — kept for direct measurement fallback) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4DGY2KNMQP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4DGY2KNMQP');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F7FC] text-[#0B1233]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WS36RH93"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
