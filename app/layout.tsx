import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
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
    template: "%s | ITSolvez",
    default: "ITSolvez — Managed IT, Cloud & Cybersecurity Services India",
  },
  description:
    "ITSolvez delivers managed IT, cloud, cybersecurity, custom software, and digital services to clients across India and 5+ countries. Pune-headquartered, serving globally.",
  keywords: [
    "managed IT services India",
    "IT support Pune",
    "cloud computing services",
    "cybersecurity India",
    "custom software development India",
    "digital marketing Pune",
    "IT services company India",
    "MSP India",
  ],
  authors: [{ name: "ITSolvez Pvt Ltd", url: "https://itsolvez.com" }],
  creator: "ITSolvez Pvt Ltd",
  publisher: "ITSolvez Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://itsolvez.com",
    siteName: "ITSolvez",
    title: "ITSolvez — Managed IT, Cloud & Cybersecurity Services India",
    description:
      "Proactive managed IT, cloud, cybersecurity, software and digital services for businesses across India and globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ITSolvez — Innovate. Solve. Evolve.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itsolvez",
    creator: "@itsolvez",
    title: "ITSolvez — Managed IT, Cloud & Cybersecurity Services India",
    description:
      "Proactive managed IT, cloud, cybersecurity, software and digital services for businesses across India and globally.",
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
  alternates: { canonical: "https://itsolvez.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F7FC] text-[#0B1233]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
