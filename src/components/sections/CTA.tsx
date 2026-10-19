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

            {/* Kolom Kanan: Slip Konsultasi (pilih kebutuhan → pratinjau pesan WA) */}
            <div className="lg:col-span-5">
              <div className="relative lg:rotate-[1.2deg] transition-transform duration-500 hover:rotate-0">
                {/* Selotip */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-28 h-7 bg-amber-100/80 border border-amber-200/60 shadow-sm z-10"
                  aria-hidden="true"
                />

                <div className="relative rounded-md bg-[#FBFAF6] text-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.65)] overflow-hidden">
                  {/* Kepala slip */}
                  <div className="px-6 pt-7 pb-4">
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                      <span>Slip Konsultasi</span>
                      <span>No. PL/KNS/001</span>
                    </div>
                    <h3 className="mt-2 font-heading text-xl sm:text-[1.4rem] font-extrabold leading-tight text-slate-950">
                      Apa yang mau Anda bangun?
                    </h3>
                  </div>

                  {/* Pilihan bernomor */}
                  <div className="border-y border-slate-200 divide-y divide-slate-200">
                    {quickChannels.map((item, i) => {
                      const isActive = item.id === selected;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelected(item.id)}
                          aria-pressed={isActive}
                          className={`relative w-full grid grid-cols-[auto_1fr_auto] items-start gap-4 px-6 py-4 text-left transition-colors ${
                            isActive ? "bg-[#1D5BD8]/[0.07]" : "hover:bg-slate-100/70"
                          }`}
                        >
                          <span
                            className={`absolute left-0 top-0 bottom-0 w-[3px] transition-colors ${
                              isActive ? "bg-[#1D5BD8]" : "bg-transparent"
                            }`}
                          />
                          <span
                            className={`font-heading text-2xl font-black leading-none tabular-nums transition-colors ${
                              isActive ? "text-[#1D5BD8]" : "text-slate-300"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-slate-950 leading-snug">
                              {item.title}
                            </span>
                            <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">
                              {item.subtitle}
                            </span>
                          </span>
                          <span
                            className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isActive ? "bg-[#1D5BD8] border-[#1D5BD8]" : "border-slate-300"
                            }`}
                          >
                            {isActive && <Check className="w-3 h-3 text-white" strokeWidth={3.5} />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Garis sobek */}
                  <div className="relative h-0" aria-hidden="true">
                    <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#11214A]" />
                    <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#11214A]" />
                  </div>

                  {/* Pratinjau pesan WhatsApp */}
                  <div className="px-6 pt-5 pb-6 bg-[#EFEAE2]">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                      Pesan yang akan terkirim
                    </span>
                    <div className="mt-2.5 flex justify-end min-h-[76px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={active.id}
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="max-w-[92%] rounded-lg rounded-tr-none bg-[#D9FDD3] px-3 py-2 text-[13px] leading-snug text-slate-800 shadow-sm"
                        >
                          {active.waText}
                          <span className="block text-right text-[10px] text-slate-500 mt-1">
                            sekarang <span className="text-sky-500">✓✓</span>
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <a
                      href={getWhatsAppLink(active.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 flex items-center justify-between rounded-md bg-slate-950 hover:bg-[#1D5BD8] px-5 py-3.5 text-sm font-bold text-white transition-colors"
                    >
                      <span>Kirim lewat WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <p className="mt-3 text-center text-[11px] text-slate-500">
                      Dibalas langsung oleh developer, bukan chatbot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
