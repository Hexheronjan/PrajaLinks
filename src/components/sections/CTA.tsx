"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Check,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { RobotFigure, RobotStyles } from "@/components/ui/CtaRobots";

const quickChannels = [
  {
    id: "desa",
    title: "Website Desa & Sistem Informasi (SID)",
    subtitle: "Transparansi APBDes, layanan surat mandiri & dokumen SPJ resmi",
    waText:
      "Halo PrajaLinks, saya ingin konsultasi mengenai pembuatan Website Desa / Sistem Informasi Desa (SID).",
  },
  {
    id: "bisnis",
    title: "Website Bisnis, Toko Online & Aplikasi",
    subtitle: "Company profile, katalog UMKM & aplikasi mobile Android/iOS",
    waText:
      "Halo PrajaLinks, saya ingin konsultasi pembuatan Website Bisnis / Aplikasi Custom.",
  },
  {
    id: "coding",
    title: "Jasa Tugas Coding & Bimbingan Skripsi IT",
    subtitle: "Tugas pemrograman, perbaikan bug & bimbingan logika 1-on-1",
    waText:
      "Halo PrajaLinks, saya ingin konsultasi mengenai pengerjaan Tugas Coding / Proyek IT.",
  },
];

export const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(quickChannels[0].id);
  const active = quickChannels.find((c) => c.id === selected) ?? quickChannels[0];

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

            {/* Kolom Kanan: Panel Form Spesifikasi Proyek & Konsultasi Langsung */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#091326]/90 backdrop-blur-xl border border-blue-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Header Panel */}
                <div className="px-6 py-5 border-b border-white/10 bg-white/[0.03] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold font-mono tracking-wider text-sky-400 uppercase block">
                      Spesifikasi Proyek
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white mt-0.5">
                      Pilih Jalur & Estimasi Kebutuhan
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Aktif 24 Jam</span>
                  </div>
                </div>

                {/* List Opsi Layanan */}
                <div className="p-4 space-y-2.5">
                  {quickChannels.map((item, i) => {
                    const isActive = item.id === selected;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelected(item.id)}
                        aria-pressed={isActive}
                        className={`group relative w-full flex items-start gap-3.5 p-3.5 rounded-xl text-left transition-all duration-200 border ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600/25 to-[#1D5BD8]/10 border-blue-400/50 shadow-[0_0_20px_rgba(29,91,216,0.25)]"
                            : "bg-white/[0.03] hover:bg-white/[0.06] border-white/5 hover:border-white/15"
                        }`}
                      >
                        {/* Radio Check Circle */}
                        <div
                          className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isActive
                              ? "bg-[#1D5BD8] border-blue-300 text-white shadow-md shadow-blue-500/50"
                              : "border-slate-500 group-hover:border-slate-400 bg-black/20"
                          }`}
                        >
                          {isActive && <Check className="w-3 h-3 text-white" strokeWidth={3.5} />}
                        </div>

                        {/* Text Detail */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`text-sm font-bold transition-colors ${
                                isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span
                              className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                                isActive
                                  ? "bg-blue-500/20 text-sky-300 border border-blue-400/30"
                                  : "text-slate-500"
                              }`}
                            >
                              0{i + 1}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Pratinjau Pesan yang Dikirim */}
                <div className="p-4 pt-3 bg-black/30 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="uppercase tracking-wider">Format Pesan WhatsApp</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✓ Siap Dikirim</span>
                    </span>
                  </div>

                  <div className="relative rounded-xl bg-[#0F1E3A]/80 border border-blue-500/20 p-3 text-xs leading-relaxed text-slate-200">
                    <div className="text-[11px] text-sky-400 font-mono mb-1">
                      // Pesan Otomatis Terhubung
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={active.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium text-slate-100"
                      >
                        &ldquo;{active.waText}&rdquo;
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Tombol CTA WhatsApp */}
                  <a
                    href={getWhatsAppLink(active.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3.5 w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#1D5BD8] to-blue-600 hover:from-blue-600 hover:to-blue-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all hover:shadow-blue-500/50"
                  >
                    <span>Lanjutkan Konsultasi Sekarang</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <p className="mt-2.5 text-center text-[11px] text-slate-400">
                    Tim teknis kami langsung merespons via WhatsApp resmi tanpa perantara.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
