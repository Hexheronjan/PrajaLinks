import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowLeft, Globe } from "lucide-react";
import { jatimCities, type JatimCity } from "@/data/jatimCities";

export const metadata: Metadata = {
  title: "Jangkauan Layanan Jasa Pembuatan Website, Aplikasi & Tugas Coding 38 Provinsi Indonesia | PrajaLinks",
  description:
    "Daftar lengkap wilayah layanan PrajaLinks untuk Jasa Pembuatan Website, Jasa Pembuatan Aplikasi Android/iOS/Web, dan Jasa Tugas Coding di 482 Kabupaten & Kota seluruh 38 Provinsi Indonesia.",
  alternates: {
    canonical: "https://www.prajalinks.my.id/wilayah",
  },
};

export default function WilayahIndexPage() {
  // Group cities by province
  const groupedByProvince = jatimCities.reduce<Record<string, JatimCity[]>>(
    (acc, city) => {
      const prov = city.province || "Jawa Timur";
      if (!acc[prov]) acc[prov] = [];
      acc[prov].push(city);
      return acc;
    },
    {}
  );

  const provinces = Object.keys(groupedByProvince);

  return (
    <div className="pt-28 pb-20 bg-[#FAF9F6] dark:bg-[#0B1120] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#4B5563] dark:text-slate-300 mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#1D5BD8] dark:text-[#60A5FA] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Website Utama</span>
          </Link>
          <span>/</span>
          <span className="text-[#111827] dark:text-white">
            Seluruh Wilayah Indonesia (38 Provinsi)
          </span>
        </nav>

        <div className="rounded-[28px] bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6 sm:p-10 mb-10 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] dark:bg-[#1D5BD8]/20 text-[#1D5BD8] dark:text-[#60A5FA] text-xs font-bold mb-4">
            <Globe className="w-4 h-4 text-[#C88A23]" />
            <span>482 Kabupaten & Kota • 38 Provinsi Indonesia</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#111827] dark:text-white mb-3">
            Direktori Layanan Jasa Pembuatan Website, Aplikasi & Tugas Coding Se-Indonesia
          </h1>
          <p className="text-sm sm:text-base text-[#374151] dark:text-slate-200 font-medium max-w-3xl">
            Pilih wilayah Kabupaten atau Kota Anda di bawah ini untuk informasi layanan pembuatan website, aplikasi kasir/mobile, dan bantuan tugas pemrograman di daerah Anda.
          </p>
        </div>

        <div className="space-y-8">
          {provinces.map((prov) => (
            <section
              key={prov}
              className="rounded-2xl bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2E8F0] dark:border-white/10">
                <MapPin className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA]" />
                <h2 className="font-heading text-lg font-extrabold text-[#111827] dark:text-white">
                  Provinsi {prov}
                </h2>
                <span className="text-xs font-bold text-[#6B7280] dark:text-slate-400 ml-auto">
                  {groupedByProvince[prov].length} Wilayah
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {groupedByProvince[prov].map((city) => (
                  <Link
                    key={city.slug}
                    href={`/wilayah/${city.slug}`}
                    className="px-3 py-2 rounded-xl bg-[#F8FAFC] dark:bg-white/5 hover:bg-[#1D5BD8] hover:text-white dark:hover:bg-[#1D5BD8] text-xs sm:text-[13px] font-bold text-[#1F2937] dark:text-slate-200 transition-colors truncate"
                    title={`Jasa Pembuatan Website, Aplikasi & Tugas Coding di Kabupaten & Kota ${city.name}`}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
