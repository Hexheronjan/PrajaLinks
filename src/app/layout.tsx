import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { InitialLoader } from "@/components/common/InitialLoader";
import { GlobalElements } from "@/components/common/GlobalElements";
import { Navbar } from "@/components/layout/Navbar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { siteData } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteData.brand.name} | Jasa Pembuatan Website & Aplikasi Profesional Ponorogo`,
  description: `${siteData.brand.name} melayani jasa pembuatan website desa, company profile bisnis, toko online, sistem informasi, dan aplikasi mobile profesional di Ponorogo, Jawa Timur. Layanan 24 jam nonstop.`,
  keywords: [
    "jasa pembuatan website ponorogo",
    "jasa pembuatan aplikasi ponorogo",
    "jasa tugas coding ponorogo",
    "joki tugas coding",
    "jasa pembuatan skripsi informatika",
    "jasa bimbingan coding mahasiswa",
    "pembuatan website desa ponorogo",
    "sistem informasi desa ponorogo",
    "web developer ponorogo",
    "jasa company profile madiun ponorogo",
    "web desa jawa timur",
    "prajalinks",
    "toko online ponorogo",
    "aplikasi web custom ponorogo",
  ],
  authors: [{ name: "PrajaLinks Studio" }],
  creator: "PrajaLinks",
  publisher: "PrajaLinks",
  metadataBase: new URL("https://prajalinks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteData.brand.name} - Jasa Pembuatan Website & Aplikasi Ponorogo`,
    description:
      "Jasa pembuatan website desa, company profile bisnis, toko online, sistem informasi, dan aplikasi mobile kustom di Ponorogo, Jawa Timur. Responsif 24 jam nonstop.",
    url: "https://prajalinks.com",
    siteName: siteData.brand.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteData.brand.name} - Studio Digital Ponorogo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.brand.name} - Studio Digital Ponorogo`,
    description: siteData.brand.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteData.brand.name,
    image: "https://prajalinks.com/logo-full.png",
    "@id": "https://prajalinks.com",
    url: "https://prajalinks.com",
    telephone: `+${siteData.brand.waNumber}`,
    priceRange: "Rp 750.000 - Rp 5.000.000+",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.brand.address,
      addressLocality: "Ponorogo",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [siteData.brand.instagram, siteData.brand.tiktok].filter((u) => u.startsWith("http")),
  };

  return (
    <html lang="id" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${plusJakartaSans.variable} font-body bg-[#FFFFFF] dark:bg-[#0A1228] text-[#0A0F1E] dark:text-[#EAF1FF] antialiased selection:bg-blue-600 selection:text-white min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <InitialLoader />
            <GlobalElements />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <MobileBottomNav />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



