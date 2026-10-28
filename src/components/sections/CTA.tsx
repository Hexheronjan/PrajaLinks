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
    title: "Jasa Pembuatan Tugas Coding",
    subtitle: "Tugas pemrograman kuliah, skripsi IT, perbaikan bug (seluruh Indonesia online)",
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
      className="py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[8px] bg-[#0F1E3C] text-white border border-[#1D5BD8]/30 shadow-md p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Kolom Kiri: Ringkasan Penawaran & Kontak WhatsApp */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-white/10 text-xs sm:text-[13px] font-bold text-slate-100">
                <span className="w-2 h-2 rounded-full bg-[#C88A23]" />
                <span className="uppercase tracking-wider">
                  Slot Tersedia • Melayani Seluruh Indonesia
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.18] text-white tracking-tight">
                Siap Mewujudkan Website, Aplikasi, atau Tugas Coding Anda?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                Konsultasikan langsung spesifikasi kebutuhan Anda bersama developer{" "}
                <strong className="text-white font-bold">PrajaLinks</strong>. Kami berikan rekomendasi arsitektur terbaik, rincian fitur, dan estimasi anggaran secara transparan.
              </p>

              {/* 3 Jaminan Singkat */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-100 bg-white/5 px-3.5 py-2.5 rounded-[6px] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C88A23] shrink-0" />
                  <span>Estimasi Jelas di Awal</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-100 bg-white/5 px-3.5 py-2.5 rounded-[6px] border border-white/10">
                  <Clock className="w-4 h-4 text-[#C88A23] shrink-0" />
                  <span>Respons Cepat 24 Jam</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-100 bg-white/5 px-3.5 py-2.5 rounded-[6px] border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#C88A23] shrink-0" />
                  <span>Bergaransi Pasca-Rilis</span>
                </div>
              </div>

              {/* Tombol Kontak Utama */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getWhatsAppLink(
                    "Halo PrajaLinks, saya ingin konsultasi mengenai pembuatan website / aplikasi / tugas coding."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[6px] bg-[#1D5BD8] hover:bg-[#1748B5] text-white font-bold text-sm sm:text-base transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat WhatsApp Sekarang</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex flex-col text-xs sm:text-[13px] text-slate-300">
                  <span className="font-bold text-white">
                    Hotline: {siteData.brand.waDisplay}
                  </span>
                  <span>Aktif {siteData.brand.workingHours} • Online Seluruh Kota</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Pilihan Spesifikasi Kebutuhan */}
            <div className="lg:col-span-5">
              <div className="rounded-[8px] bg-[#0A152E] border border-[#1D5BD8]/30 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-blue-200">
                    Pilih Kategori Layanan
                  </span>
                  <span className="text-xs font-bold text-[#C88A23]">
                    <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#C88A23] animate-pulse" /><span>Aktif Konsultasi</span></span>
                  </span>
                </div>

                <div className="space-y-2.5">
                  {quickChannels.map((item, i) => {
                    const isActive = item.id === selected;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelected(item.id)}
                        className={`w-full flex items-start gap-3.5 p-3.5 rounded-[6px] text-left transition-colors border ${
                          isActive
                            ? "bg-[#1D5BD8]/25 border-[#1D5BD8]"
                            : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5"
                        }`}
                      >
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-[#1D5BD8] border-[#1D5BD8] text-white"
                              : "border-slate-400"
                          }`}
                        >
                          {isActive && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm sm:text-base font-bold text-white">
                              {item.title}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              0{i + 1}
                            </span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed font-normal">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Pratinjau Pesan yang Dikirim */}
                <div className="p-3.5 rounded-[6px] bg-[#060D1E] border border-white/10 text-xs sm:text-[13px]">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Pratinjau Pesan WhatsApp:
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={active.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-slate-100 font-medium italic"
                    >
                      &ldquo;{active.waText}&rdquo;
                    </motion.p>
                  </AnimatePresence>
                </div>

                <a
                  href={getWhatsAppLink(active.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-[6px] bg-[#1D5BD8] hover:bg-[#1748B5] py-3 px-4 text-xs sm:text-sm font-bold text-white transition-colors"
                >
                  <span>Kirim Pesan WhatsApp Ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
