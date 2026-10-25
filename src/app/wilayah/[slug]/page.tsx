import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteData } from "@/data/site";
import { jatimCities, type JatimCity } from "@/data/jatimCities";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { DualTrack } from "@/components/sections/DualTrack";
import { Services } from "@/components/sections/Services";
import { VillageDemo } from "@/components/sections/VillageDemo";
import { VideoSection } from "@/components/sections/VideoSection";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

const citiesMap = new Map<string, JatimCity>(
  jatimCities.map((city) => [city.slug, city])
);

export async function generateStaticParams() {
  return jatimCities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = citiesMap.get(slug);

  if (!city) {
    return {
      title: "Wilayah Tidak Ditemukan | PrajaLinks",
    };
  }

  const province = city.province || "Jawa Timur";
  const title = `Jasa Pembuatan Website di ${city.name} (Kabupaten & Kota), Aplikasi & Tugas Coding | PrajaLinks`;
  const description = `PrajaLinks melayani Jasa Pembuatan Website, Jasa Pembuatan Aplikasi Android/iOS/Web, dan Tugas Coding untuk wilayah Kabupaten & Kota ${city.name}, ${province} dan sekitarnya. Cepat, bergaransi & harga terjangkau.`;
  const canonicalUrl = `https://www.prajalinks.my.id/wilayah/${city.slug}`;

  const cleanName = city.name.toLowerCase();

  return {
    title,
    description,
    keywords: [
      `jasa pembuatan website ${cleanName}`,
      `jasa pembuatan aplikasi ${cleanName}`,
      `jasa pembuatan tugas coding ${cleanName}`,
      `jasa pembuatan website & aplikasi ${cleanName}`,
      `jasa pembuatan website kota ${cleanName}`,
      `jasa pembuatan aplikasi kota ${cleanName}`,
      `jasa pembuatan tugas coding kota ${cleanName}`,
      `jasa pembuatan website kabupaten ${cleanName}`,
      `jasa pembuatan aplikasi kabupaten ${cleanName}`,
      `jasa pembuatan tugas coding kabupaten ${cleanName}`,
      `pembuatan website kabupaten ${cleanName}`,
      `pembuatan website kota ${cleanName}`,
      `jasa website ${cleanName}`,
      `jasa aplikasi ${cleanName}`,
      `jasa tugas coding ${cleanName}`,
      `jasa skripsi informatika ${cleanName}`,
      `web developer ${cleanName}`,
      `software house ${cleanName}`,
      "prajalinks",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteData.brand.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = citiesMap.get(slug);

  if (!city) {
    notFound();
  }

  const province = city.province || "Jawa Timur";

  const localJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `https://www.prajalinks.my.id/wilayah/${city.slug}#service`,
        name: `PrajaLinks - Jasa Website, Aplikasi & Tugas Coding ${city.name}`,
        description: `Layanan rekayasa software pembuatan website, aplikasi Android/iOS, dan tugas coding untuk seluruh wilayah Kota dan Kabupaten ${city.name}, ${province}.`,
        url: `https://www.prajalinks.my.id/wilayah/${city.slug}`,
        telephone: `+${siteData.brand.waNumber}`,
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: `${city.name}`,
          },
          {
            "@type": "AdministrativeArea",
            name: `Kota ${city.name}`,
          },
          {
            "@type": "AdministrativeArea",
            name: `Kabupaten ${city.name}`,
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: province,
          addressCountry: "ID",
        },
        priceRange: "Rp 750.000 - Rp 5.000.000+",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Layanan PrajaLinks di ${city.name}`,
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `Jasa Pembuatan Website ${city.name}`,
                description: `Jasa pembuatan website company profile, toko online WhatsApp, dan website bisnis di Kabupaten & Kota ${city.name}.`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `Jasa Pembuatan Aplikasi ${city.name}`,
                description: `Jasa pembuatan aplikasi Android, iOS, dan aplikasi kasir POS di Kabupaten & Kota ${city.name}.`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `Jasa Pembuatan Tugas Coding ${city.name}`,
                description: `Jasa pengerjaan tugas coding kuliah, Python, Laravel, React, dan skripsi IT di Kabupaten & Kota ${city.name}.`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `Jasa Pembuatan Website & Aplikasi ${city.name}`,
                description: `Paket lengkap integrasi website dan aplikasi mobile/web kustom untuk bisnis di Kabupaten & Kota ${city.name}.`,
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://www.prajalinks.my.id",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Semua Wilayah",
            item: "https://www.prajalinks.my.id/wilayah",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Layanan di ${city.name}`,
            item: `https://www.prajalinks.my.id/wilayah/${city.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }}
      />

      {/* Struktur SEO Lokal Terindeks Google (Tidak mengganggu tampilan visual utama) */}
      <div className="sr-only">
        <h2>
          Jasa Pembuatan Website, Aplikasi & Tugas Coding di Kabupaten dan Kota {city.name}, {province}
        </h2>
        <p>
          PrajaLinks melayani Jasa Pembuatan Website {city.name}, Jasa Pembuatan Aplikasi {city.name}, Jasa Pembuatan Tugas Coding {city.name}, serta Jasa Pembuatan Website & Aplikasi {city.name} untuk UMKM, perusahaan, desa, dan mahasiswa di seluruh wilayah Kabupaten {city.name} maupun Kota {city.name}, Provinsi {province}.
        </p>
        <Link href="/wilayah">Daftar Seluruh Wilayah Indonesia</Link>
      </div>

      {/* Tampilan 100% Identik dengan Website Utama */}
      <Hero />
      <Marquee />
      <DualTrack />
      <Services />
      <VillageDemo />
      <VideoSection />
      <Portfolio />
      <Pricing />
      <Process />
      <WhyUs />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
