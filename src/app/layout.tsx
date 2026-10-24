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
  title: `${siteData.brand.name} | Jasa Pembuatan Website, Aplikasi & Tugas Coding Online`,
  description: `${siteData.brand.name} melayani jasa pembuatan website desa, company profile bisnis, toko online WhatsApp, sistem informasi, dan jasa pembuatan tugas coding online untuk seluruh kota di Indonesia. Layanan responsif 24 jam nonstop.`,
  keywords: [
    "jasa pembuatan tugas coding",
    "jasa tugas coding online",
    "bantuan tugas informatika",
    "jasa skripsi informatika",
    "jasa tugas pemrograman",
    "jasa pembuatan website ponorogo",
    "jasa pembuatan website indonesia",
    "jasa website desa",
    "sistem informasi desa",
    "web developer indonesia",
    "jasa company profile",
    "prajalinks",
    "toko online katalog whatsapp",
    "aplikasi web custom",
  ],
  authors: [{ name: "PrajaLinks Studio" }],
  creator: "PrajaLinks",
  publisher: "PrajaLinks",
  metadataBase: new URL("https://www.prajalinks.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteData.brand.name} - Jasa Pembuatan Website, Aplikasi & Tugas Coding`,
    description:
      "Jasa pembuatan website desa, company profile, aplikasi web & mobile, serta jasa pembuatan tugas coding online melayani seluruh Indonesia. Responsif 24 jam.",
    url: "https://www.prajalinks.my.id",
    siteName: siteData.brand.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteData.brand.name} - Studio Digital`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.brand.name} - Studio Digital`,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteData.brand.name,
    image: "https://www.prajalinks.my.id/logo-full.png",
    "@id": "https://www.prajalinks.com",
    url: "https://www.prajalinks.my.id",
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
        className={`${sora.variable} ${plusJakartaSans.variable} font-body bg-[#FAF9F6] dark:bg-[#0B1120] text-[#111827] dark:text-[#EAF1FF] antialiased selection:bg-[#1D5BD8] selection:text-white min-h-screen flex flex-col`}
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
