"use client";

import { useRef } from "react";
import {
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Landmark,
  Laptop,
  GraduationCap,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { RobotFigure, RobotStyles } from "@/components/ui/CtaRobots";

const quickChannels = [
  {
    id: "desa",
    title: "Website Desa & Sistem Informasi (SID)",
    subtitle: "Transparansi APBDes, layanan surat mandiri & dokumen SPJ resmi",
    icon: Landmark,
    badge: "Pemerintahan",
    waText:
      "Halo PrajaLinks, saya ingin konsultasi mengenai pembuatan Website Desa / Sistem Informasi Desa (SID).",
  },
  {
    id: "bisnis",
    title: "Website Bisnis, Toko Online & Aplikasi",
    subtitle: "Company profile korporat, katalog UMKM & aplikasi mobile Android/iOS",
    icon: Laptop,
    badge: "Bisnis & App",
    waText:
      "Halo PrajaLinks, saya ingin konsultasi pembuatan Website Bisnis / Aplikasi Custom.",
  },
  {
    id: "coding",
    title: "Jasa Tugas Coding & Bimbingan Skripsi IT",
    subtitle: "Bantuan tugas pemrograman, perbaikan bug & bimbingan logika 1-on-1",
    icon: GraduationCap,
    badge: "Mahasiswa & IT",
    waText:
      "Halo PrajaLinks, saya ingin konsultasi mengenai pengerjaan Tugas Coding / Proyek IT.",
  },
];

export const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 relative overflow-hidden bg-white dark:bg-[#0A1228]"
    >
      <RobotStyles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 relative z-10">
        {/* Robot kiri: Jasa Website & Aplikasi (desktop lebar) */}
        <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <RobotFigure variant="web" />
        </div>
        {/* Robot kanan: Jasa Tugas Coding (desktop lebar) */}
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <RobotFigure variant="code" delay={1.2} />
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-[#0A142D] via-[#0F1E42] to-[#142A5C] text-white border border-blue-500/25 shadow-[0_30px_80px_-20px_rgba(20,35,95,0.55)] overflow-hidden">
          {/* Architectural Fine Grid & Subtle Radial Accent */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#1D5BD8]/40 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-600/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 p-7 sm:p-12 lg:p-14 xl:px-20 items-center">
            {/* Kolom Kiri: Editorial Pitch & Direct CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* Robot ringkas untuk layar kecil/menengah */}
              <div className="xl:hidden flex items-end justify-between sm:justify-start sm:gap-8 pointer-events-none">
                <RobotFigure variant="web" compact />
                <RobotFigure variant="code" compact delay={1.2} />
              </div>

              {/* Live Status Bar */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="uppercase tracking-wider">
                  Slot Pengerjaan Tersedia • Konsultasi Teknis Gratis
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold font-heading tracking-tight leading-[1.15] text-white">
                Siap Mewujudkan{" "}
                <span className="text-sky-400">Website, Aplikasi,</span> atau{" "}
                <span className="text-amber-300">Proyek Coding</span> Anda?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-body">
                Konsultasikan langsung spesifikasi kebutuhan Anda bersama tim developer{" "}
                <strong className="text-white">PrajaLinks</strong>. Kami berikan rekomendasi arsitektur terbaik, rincian fitur, dan estimasi anggaran secara transparan tanpa biaya konsultasi.
              </p>

              {/* 3 Poin Jaminan */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Estimasi Jelas di Awal</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/15">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Respons Cepat 24 Jam</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Bergaransi Pasca-Rilis</span>
                </div>
              </div>

              {/* Tombol Aksi Utama */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href={getWhatsAppLink(
                    "Halo PrajaLinks, saya ingin konsultasi mengenai pembuatan website / aplikasi / tugas coding."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#1D5BD8] hover:bg-blue-600 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-blue-600/40 border border-blue-400/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat WhatsApp Sekarang</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <div className="flex flex-col text-xs text-slate-200">
                  <span className="font-extrabold text-white text-sm">
                    Hotline: {siteData.brand.waDisplay}
                  </span>
                  <span>Aktif {siteData.brand.workingHours} • Ponorogo</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Interactive Direct Dispatch Cards */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#070E20]/80 backdrop-blur-md border border-white/15 space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-300">
                    Pilih Jalur Konsultasi Cepat
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Tim Online
                  </span>
                </div>

                {quickChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={getWhatsAppLink(item.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-xl bg-[#112042] hover:bg-[#1D5BD8] border border-white/10 hover:border-blue-300 transition-all duration-300 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 group-hover:bg-white/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                            <Icon className="w-5 h-5 text-sky-300 group-hover:text-white" />
                          </div>
                          <div>
                            <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-sky-300 group-hover:text-blue-100 mb-0.5">
                              {item.badge}
                            </span>
                            <h3 className="text-sm font-extrabold text-white leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-300 group-hover:text-blue-100 mt-1 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
