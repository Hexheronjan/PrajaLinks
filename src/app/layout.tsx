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
  description: `${siteData.brand.name} melayani Jasa Pembuatan Website (Company Profile, Toko Online UMKM, Website Desa), Jasa Pembuatan Aplikasi (Android, iOS & Web App Custom), serta Jasa Pembuatan Tugas Coding & Skripsi IT online untuk seluruh Indonesia. Layanan responsif 24 jam.`,
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "jasa pembuatan tugas coding",
    "jasa pembuatan website profesional",
    "jasa pembuatan aplikasi android",
    "jasa tugas coding online",
    "jasa pembuatan website umkm",
    "jasa pembuatan website company profile",
    "jasa pembuatan website desa",
    "sistem informasi desa",
    "bantuan tugas informatika",
    "jasa skripsi informatika",
    "jasa tugas pemrograman",
    "jasa pembuatan aplikasi web custom",
    "web developer indonesia",
    "prajalinks",
    "fauzan bagus prasetyo",
    "fauzan bagus prasetyo prajalinks",
    "owner prajalinks",
    "pemilik prajalinks",
    "founder prajalinks",
    "pemilik usaha prajalinks",
  ],
  authors: [
    { name: "Fauzan Bagus Prasetyo", url: "https://www.prajalinks.my.id" },
    { name: "PrajaLinks Studio" },
  ],
  creator: "Fauzan Bagus Prasetyo",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.prajalinks.my.id/#founder",
        name: "Fauzan Bagus Prasetyo",
        jobTitle: "Founder, Owner & Lead Software Engineer",
        worksFor: {
          "@id": "https://www.prajalinks.my.id/#organization",
        },
        url: "https://www.prajalinks.my.id",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.prajalinks.my.id/#organization",
        name: siteData.brand.name,
        founder: {
          "@type": "Person",
          name: "Fauzan Bagus Prasetyo",
          jobTitle: "Owner & Lead Software Engineer",
        },
        employee: [
          {
            "@type": "Person",
            name: "Fauzan Bagus Prasetyo",
            jobTitle: "Founder & Owner",
          },
        ],
        description:
          "Studio penyedia Jasa Pembuatan Website, Jasa Pembuatan Aplikasi Android/Web, dan Jasa Pembuatan Tugas Coding Online didirikan oleh Fauzan Bagus Prasetyo melayani seluruh Indonesia.",
        logo: "https://www.prajalinks.my.id/icon.png",
        image: "https://www.prajalinks.my.id/logo-full.png",
        url: "https://www.prajalinks.my.id",
        telephone: `+${siteData.brand.waNumber}`,
        priceRange: "Rp 750.000 - Rp 5.000.000+",
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Katalog Layanan Digital PrajaLinks",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Website Profesional, Company Profile & UMKM",
                description:
                  "Pembuatan website company profile perusahaan, toko online katalog WhatsApp UMKM, landing page promosi, dan portal sekolah.",
                url: "https://www.prajalinks.my.id/layanan/jasa-pembuatan-website",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Aplikasi Android, iOS & Sistem Aplikasi Web Custom",
                description:
                  "Pembuatan aplikasi mobile Android/iOS, aplikasi kasir POS, manajemen stok gudang, dan sistem informasi manajemen berbasis web.",
                url: "https://www.prajalinks.my.id/layanan/jasa-pembuatan-aplikasi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Tugas Coding, Pemrograman Kuliah & Skripsi IT",
                description:
                  "Bantuan pengerjaan tugas pemrograman kuliah, Python, PHP Laravel, React, Java, C++, perbaikan bug, dan pembuatan sistem aplikasi Skripsi IT.",
                url: "https://www.prajalinks.my.id/layanan/jasa-pembuatan-tugas-coding",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Website Desa & Sistem Informasi Desa (SID)",
                description:
                  "Pembuatan portal resmi desa (.desa.id), modul pelayanan surat online warga, dan infografis transparansi APBDes lengkap dengan dokumen SPJ.",
                url: "https://www.prajalinks.my.id/layanan/jasa-website-desa",
              },
            },
          ],
        },
        sameAs: [siteData.brand.instagram, siteData.brand.tiktok].filter((u) =>
          u.startsWith("http")
        ),
      },
      {
        "@type": "WebSite",
        "@id": "https://www.prajalinks.my.id/#website",
        url: "https://www.prajalinks.my.id",
        name: siteData.brand.name,
        publisher: {
          "@id": "https://www.prajalinks.my.id/#organization",
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.prajalinks.my.id/#faqpage",
        mainEntity: siteData.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
