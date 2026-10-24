import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Globe,
  Smartphone,
  Terminal,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { jatimCities, type JatimCity } from "@/data/jatimCities";

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

  const title = `Jasa Pembuatan Website, Aplikasi & Tugas Coding di ${city.fullName} | PrajaLinks`;
  const description = `PrajaLinks melayani Jasa Pembuatan Website, Jasa Pembuatan Aplikasi Android/iOS/Web, dan Jasa Pembuatan Tugas Coding online untuk UMKM, bisnis, dan mahasiswa di ${city.fullName}, Jawa Timur. Cepat, bergaransi & harga terjangkau.`;
  const canonicalUrl = `https://www.prajalinks.my.id/wilayah/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `jasa pembuatan website ${city.shortName.toLowerCase()}`,
      `jasa pembuatan website di ${city.fullName.toLowerCase()}`,
      `jasa pembuatan aplikasi ${city.shortName.toLowerCase()}`,
      `jasa aplikasi android ${city.shortName.toLowerCase()}`,
      `jasa pembuatan tugas coding ${city.shortName.toLowerCase()}`,
      `jasa tugas coding mahasiswa ${city.shortName.toLowerCase()}`,
      `jasa skripsi informatika ${city.shortName.toLowerCase()}`,
      `web developer ${city.shortName.toLowerCase()}`,
      `software house ${city.shortName.toLowerCase()}`,
      `jasa website desa ${city.shortName.toLowerCase()}`,
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

  // Get up to 6 other Jatim cities for internal linking
  const otherCities = jatimCities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 8);

  const localJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `https://www.prajalinks.my.id/wilayah/${city.slug}#service`,
        name: `PrajaLinks - Jasa Website, Aplikasi & Tugas Coding ${city.fullName}`,
        description: `Layanan rekayasa software pembuatan website, aplikasi Android/iOS, dan tugas coding untuk wilayah ${city.fullName}, Jawa Timur.`,
        url: `https://www.prajalinks.my.id/wilayah/${city.slug}`,
        telephone: `+${siteData.brand.waNumber}`,
        areaServed: {
          "@type": "AdministrativeArea",
          name: city.fullName,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: city.shortName,
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
        },
        priceRange: "Rp 750.000 - Rp 5.000.000+",
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
            name: `Layanan di ${city.fullName}`,
            item: `https://www.prajalinks.my.id/wilayah/${city.slug}`,
          },
        ],
      },
    ],
  };

  const servicesPillars = [
    {
      id: "website",
      icon: Globe,
      badge: "Layanan Website",
      title: `Jasa Pembuatan Website di ${city.fullName}`,
      desc: `Solusi pembuatan website company profile, toko online katalog WhatsApp untuk UMKM, website portal desa, dan landing page promosi dengan loading super cepat serta ramah tampilan HP.`,
      features: [
        "Company profile bisnis & profil UMKM lokal",
        "Toko online katalog WhatsApp langsung order",
        "Website resmi desa & sistem informasi desa (SID)",
        "Struktur SEO siap muncul di Google pencarian lokal",
      ],
      price: "Mulai Rp 750.000",
      ctaSlug: "/layanan/jasa-pembuatan-website",
      waText: `Halo PrajaLinks, saya tertarik dengan Jasa Pembuatan Website untuk wilayah ${city.fullName}.`,
    },
    {
      id: "aplikasi",
      icon: Smartphone,
      badge: "Layanan Aplikasi",
      title: `Jasa Pembuatan Aplikasi di ${city.fullName}`,
      desc: `Pengembangan aplikasi mobile Android/iOS dan aplikasi web kustom untuk manajemen kasir (POS), stok inventaris gudang, serta otomatisasi operasional bisnis Anda.`,
      features: [
        "Aplikasi kasir (Point of Sale) & struk printer",
        "Manajemen stok barang & laporan penjualan real-time",
        "Aplikasi Android & iOS (React Native)",
        "Dashboard admin berbasis web terpusat",
      ],
      price: "Konsultasi Sesuai Fitur",
      ctaSlug: "/layanan/jasa-pembuatan-aplikasi",
      waText: `Halo PrajaLinks, saya tertarik dengan Jasa Pembuatan Aplikasi untuk wilayah ${city.fullName}.`,
    },
    {
      id: "tugas-coding",
      icon: Terminal,
      badge: "Layanan Tugas Coding",
      title: `Jasa Pembuatan Tugas Coding di ${city.fullName}`,
      desc: `Bantuan pengerjaan tugas pemrograman kuliah, praktikum IT, perbaikan error koding (bug fixing), hingga pembuatan program aplikasi Skripsi/Tugas Akhir mahasiswa.`,
      features: [
        "Python, PHP Laravel, React, Next.js, Java, C++",
        "Kode bersih disertai penjelasan baris per baris",
        "Dibantu instalasi & run di laptop sampai jalan",
        "Privasi & kerahasiaan identitas aman 100%",
      ],
      price: "Tarif Mahasiswa Terjangkau",
      ctaSlug: "/layanan/jasa-pembuatan-tugas-coding",
      waText: `Halo PrajaLinks, saya ingin tanya Jasa Pembuatan Tugas Coding untuk mahasiswa di ${city.fullName}.`,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF9F6] dark:bg-[#0B1120] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-[#4B5563] dark:text-slate-300 mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#1D5BD8] dark:text-[#60A5FA] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Beranda PrajaLinks</span>
          </Link>
          <span>/</span>
          <span className="text-[#111827] dark:text-white truncate max-w-xs sm:max-w-md">
            Layanan di {city.fullName}
          </span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-[32px] bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(29,91,216,0.08)] overflow-hidden mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] dark:bg-[#1D5BD8]/20 text-[#1D5BD8] dark:text-[#60A5FA] text-xs sm:text-sm font-bold mb-5">
            <MapPin className="w-4 h-4 text-[#C88A23]" />
            <span>Layanan Digital Area {city.fullName}, Jawa Timur</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#111827] dark:text-white leading-[1.25] tracking-tight mb-5">
            Jasa Pembuatan Website, Aplikasi & Tugas Coding di {city.fullName}
          </h1>

          <p className="text-base sm:text-lg text-[#374151] dark:text-slate-200 font-medium leading-relaxed max-w-3xl mb-8">
            Butuh website profesional untuk usaha Anda, aplikasi kasir dan operasional bisnis, atau butuh bantuan pengerjaan tugas pemrograman kuliah di <strong>{city.fullName}</strong>? Studio PrajaLinks melayani secara online dengan respons cepat 24 jam dan hasil bergaransi.
          </p>

          {/* Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C88A23]" />
                <span>Kualitas & Garansi</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                Garansi Teknis & Clean Code
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-1">
                <Clock className="w-4 h-4 text-[#C88A23]" />
                <span>Pengerjaan Cepat</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                3 Hari Selesai / Siap Deadline
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-1">
                <Sparkles className="w-4 h-4 text-[#C88A23]" />
                <span>Konsultasi Ramah</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                Online 24 Jam Nonstop
              </p>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={getWhatsAppLink(
                `Halo PrajaLinks, saya dari ${city.fullName} ingin konsultasi mengenai pembuatan website / aplikasi / tugas coding.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#1D5BD8] hover:bg-[#1648B0] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1D5BD8]/25 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi Langsung via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#harga"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/15 text-[#111827] dark:text-white font-bold text-sm sm:text-base transition-all"
            >
              <span>Lihat Daftar Harga Paket</span>
            </Link>
          </div>
        </div>

        {/* 3 Core Services in this City */}
        <section className="mb-14">
          <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-[#111827] dark:text-white mb-3">
            3 Layanan Utama PrajaLinks untuk Wilayah {city.fullName}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] dark:text-slate-300 font-medium mb-8">
            Dikerjakan langsung dengan arsitektur modern berstandar industri oleh tim software engineer berpengalaman.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {servicesPillars.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="rounded-[28px] bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6 sm:p-7 shadow-sm hover:border-[#1D5BD8] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#EBF2FF] dark:bg-[#1D5BD8]/20 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F1F5F9] dark:bg-white/10 text-[#4B5563] dark:text-slate-300">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#111827] dark:text-white mb-3">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-[#4B5563] dark:text-slate-300 font-medium leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {srv.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs sm:text-[13px] font-bold text-[#1F2937] dark:text-slate-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#E2E8F0] dark:border-white/10">
                    <p className="text-xs text-[#6B7280] dark:text-slate-400 font-bold mb-1">
                      Estimasi Biaya:
                    </p>
                    <p className="text-base font-extrabold text-[#111827] dark:text-white mb-4">
                      {srv.price}
                    </p>

                    <div className="flex flex-col gap-2">
                      <a
                        href={getWhatsAppLink(srv.waText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1D5BD8] hover:bg-[#1648B0] text-white font-bold text-xs sm:text-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Pesan via WhatsApp</span>
                      </a>
                      <Link
                        href={srv.ctaSlug}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-white/5 hover:bg-[#E2E8F0] dark:hover:bg-white/10 text-[#111827] dark:text-white font-bold text-xs transition-all"
                      >
                        <span>Pelajari Fitur Lengkap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cross-linking to Other Jatim Cities */}
        <section className="pt-8 border-t border-[#E2E8F0] dark:border-white/10">
          <h2 className="font-heading text-lg sm:text-xl font-extrabold text-[#111827] dark:text-white mb-2">
            Wilayah Kabupaten & Kota Lainnya di Jawa Timur
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 font-medium mb-5">
            PrajaLinks melayani pembuatan website, aplikasi, dan tugas coding secara online untuk seluruh daerah:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherCities.map((other) => (
              <Link
                key={other.slug}
                href={`/wilayah/${other.slug}`}
                className="p-3.5 rounded-xl bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 hover:border-[#1D5BD8] text-xs sm:text-sm font-bold text-[#111827] dark:text-white transition-all flex items-center justify-between group"
              >
                <span>{other.fullName}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1D5BD8] dark:text-[#60A5FA] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1D5BD8] dark:text-[#60A5FA] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Halaman Utama PrajaLinks</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
