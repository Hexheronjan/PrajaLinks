"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  MapPin,
  Sparkles,
  ShieldCheck,
  Code2,
  Globe,
  Smartphone,
  Terminal,
  Zap,
  TrendingUp,
  Bell,
  Star,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

const trust = [
  "Pengerjaan terstruktur & bergaransi",
  "Penjelasan kode sampai paham",
  "Pendampingan pasca selesai",
];

const simulations = [
  {
    id: "coding",
    label: "Tugas Coding",
    icon: Code2,
    badgeText: "Solusi Tugas Coding",
    tagline: "Kode rapi, bergaransi jalan, dan dijelaskan sampai paham.",
  },
  {
    id: "website",
    label: "Pembuatan Website",
    icon: Globe,
    badgeText: "Website Bisnis & Desa",
    tagline: "Mudah ditemukan di Google, cepat, dan tampil mewah di HP.",
  },
  {
    id: "app",
    label: "Pembuatan Aplikasi",
    icon: Smartphone,
    badgeText: "Aplikasi Mobile & Web",
    tagline: "Otomasi pesanan, kasir, dan laporan operasional bisnis.",
  },
];

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Mulai auto-switch setelah halaman stabil (8 detik) agar tidak mengganggu Speed Index
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % simulations.length);
      }, 4500);
    }, 8000);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, []);

  const current = simulations[activeTab];

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-28 pb-16 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#FAF9F6] dark:bg-[#0B1120]"
    >
      {/* -------------------------------------------------------------
          Latar Belakang Arsitektural Halus (Ambient Glow & Smooth Curved SVG)
      -------------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#1D5BD8]/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-[#C88A23]/5 blur-3xl pointer-events-none"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        fill="none"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.35] dark:opacity-[0.15]"
        preserveAspectRatio="none"
      >
        <path
          d="M -100,120 C 320,40 680,260 1100,100 C 1280,30 1420,120 1560,90"
          stroke="url(#hero-curve-gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M -50,220 C 380,140 760,340 1200,200 C 1360,150 1480,210 1600,180"
          stroke="url(#hero-curve-gradient)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="hero-curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D5BD8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#C88A23" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D5BD8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* -----------------------------------------------------------
              Kolom Kiri: Pill Badge, Judul Lengkung, CTA, Poin
              (Render langsung tanpa JS animation wrapper agar FCP/LCP/SI instan)
          ------------------------------------------------------------ */}
          <div className="lg:col-span-7">
            {/* Pill Badge Lengkung Premium */}
            <div className="mb-5 inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-[#1D5BD8]/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D5BD8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D5BD8]" />
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-[#111827] dark:text-white">
                Rekayasa Digital &amp; Jasa Coding
              </span>
              <span className="hidden sm:inline-block h-3 w-px bg-slate-300 dark:bg-white/20" />
              <span className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold text-[#C88A23]">
                <Sparkles className="w-3 h-3 text-[#C88A23]" />
                Melayani Seluruh Indonesia
              </span>
            </div>

            {/* Judul Utama dengan Lengkungan Aksen Emas */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.12] text-[#111827] dark:text-white tracking-tight">
              <span>Jasa Pembuatan </span>
              <span className="text-[#1D5BD8] dark:text-[#60A5FA]">Website</span>
              <span>, </span>
              <span className="text-[#1D5BD8] dark:text-[#60A5FA]">Aplikasi</span>
              <span> &amp; </span>
              <span className="relative inline-block text-[#1D5BD8] dark:text-[#60A5FA]">
                Tugas Coding.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 14"
                  fill="none"
                  className="absolute -bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#C88A23] pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 4,8 C 70,1 170,1 254,9 C 190,4 90,4 20,11"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-[1.125rem] leading-relaxed text-[#374151] dark:text-slate-200 font-medium">
              Mitra rekayasa digital untuk pembuatan <strong className="font-bold text-[#111827] dark:text-white">Website Profesional</strong>, <strong className="font-bold text-[#111827] dark:text-white">Aplikasi Mobile &amp; Web Custom</strong>, serta <strong className="font-bold text-[#111827] dark:text-white">Jasa Pembuatan Tugas Coding</strong>. Melayani klien dari seluruh kota di Indonesia secara online dengan pengerjaan cepat, kode bersih, dan bergaransi.
            </p>

            {/* Tombol Aksi Lengkung */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi awal mengenai layanan website, aplikasi, atau tugas coding.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#portofolio"
                className="btn-secondary text-base hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                Lihat Portofolio
              </a>
            </div>

            {/* Poin Kepercayaan Pill Lengkung */}
            <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 border-t border-[#E5E7EB] dark:border-white/10 pt-5">
              {trust.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 text-xs sm:text-sm font-semibold text-[#111827] dark:text-slate-200 shadow-xs"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1D5BD8] text-white shrink-0">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* -----------------------------------------------------------
              Kolom Kanan: Card Showcase Studio Modern (Clean White, Royal Blue & Gold)
          ------------------------------------------------------------ */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Halo Biru-Emas Halus di Belakang Kartu */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 bg-gradient-to-tr from-[#1D5BD8]/20 via-[#38BDF8]/15 to-[#C88A23]/25 rounded-[32px] blur-2xl pointer-events-none opacity-45"
            />

            {/* Kontainer Kartu Studio: Clean White dengan Border Biru-Emas Halus */}
            <div className="relative w-full max-w-[430px] rounded-[24px] border border-slate-200/90 dark:border-white/15 bg-white dark:bg-[#0F172A] shadow-xl overflow-hidden">
              {/* Header macOS Bersih & Modern */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#F8FAFC] dark:bg-[#1E293B] border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="h-3 w-px bg-slate-300 dark:bg-white/20 mx-1" />
                  <span className="text-xs font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#C88A23] fill-[#C88A23]" />
                    PrajaLinks Studio
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#16A34A] bg-[#DCFCE7] dark:bg-emerald-950/60 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span>Aktif 24 Jam</span>
                </div>
              </div>

              {/* Tab Switcher Bersih (Clean Pill Theme) */}
              <div className="p-2 bg-[#F1F5F9] dark:bg-[#141E33] border-b border-slate-200/80 dark:border-white/10">
                <div className="grid grid-cols-3 gap-1 bg-white/70 dark:bg-[#0B1324] p-1 rounded-xl border border-slate-200/80 dark:border-white/10">
                  {simulations.map((sim, idx) => {
                    const Icon = sim.icon;
                    const isActive = activeTab === idx;
                    return (
                      <button
                        key={sim.id}
                        onClick={() => setActiveTab(idx)}
                        className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                          isActive
                            ? "bg-[#1D5BD8] text-white shadow-sm"
                            : "text-[#4B5563] dark:text-slate-300 hover:text-[#111827] dark:hover:text-white"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="truncate">{sim.id === "coding" ? "Coding" : sim.id === "website" ? "Website" : "Aplikasi"}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Visual Area: Robot Maskot 3D Berpadu Mulus dengan Latar Terang */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-white to-[#FAF9F6] dark:from-[#0B1528] dark:to-[#0F172A] flex items-center justify-center p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-200/70 dark:border-white/10 shadow-xs">
                  <Image
                    src="/robot-mascot.jpg"
                    alt="PrajaLinks Studio Engineering Mascot"
                    fill
                    sizes="(max-width: 640px) 260px, 400px"
                    quality={65}
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradien halus agar menyatu dengan badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Badge Status di Sudut Kanan */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-[#111827]/95 border border-[#1D5BD8]/30 shadow-md text-[#1D5BD8] dark:text-[#60A5FA] text-[11px] font-bold backdrop-blur-sm transition-all duration-300">
                  <Star className="w-3 h-3 text-[#C88A23] fill-[#C88A23]" />
                  <span>{current.badgeText}</span>
                </div>
              </div>

              {/* Box Dinamis Sesuai Tab Layanan (Warna Bersih & Elegan) */}
              <div className="p-3.5 space-y-3 bg-white dark:bg-[#0F172A] border-t border-slate-200 dark:border-white/10">
                {/* 1. TUGAS CODING */}
                {activeTab === 0 && (
                  <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-[#1E1E1E] text-white p-3 font-mono text-[10.5px] leading-relaxed shadow-xs">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1.5 border-b border-white/10">
                      <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                        <Terminal className="w-3.5 h-3.5 text-sky-400" />
                        <span>tugas_coding.py</span>
                      </span>
                      <span className="text-emerald-400 font-bold">Python 3.11</span>
                    </div>
                    <div className="pt-2 space-y-1">
                      <p className="text-slate-400"># PrajaLinks — Jasa Pembuatan Tugas Coding</p>
                      <p>
                        <span className="text-[#C586C0]">def</span>{" "}
                        <span className="text-[#DCDCAA]">selesaikan_tugas</span>():
                      </p>
                      <p className="pl-3 text-[#9CDCFE]">
                        return <span className="text-[#CE9178]">&quot;100% Berjalan Tanpa Error&quot;</span> <Check className="w-3 h-3 inline-block text-emerald-400" />
                      </p>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-emerald-400 font-bold">
                      <span>$ python run_test.py</span>
                      <span>[10/10 PASS • GARANSI JALAN]</span>
                    </div>
                  </div>
                )}

                {/* 2. PEMBUATAN WEBSITE */}
                {activeTab === 1 && (
                  <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-[#EFF6FF] dark:bg-blue-950/40 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1D5BD8] text-white">
                          <Globe className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold text-[#111827] dark:text-white">
                            Website Bisnis &amp; Profil Desa
                          </p>
                          <p className="text-[9.5px] text-[#4B5563] dark:text-slate-300">
                            https://usahaanda.com
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#DCFCE7] text-[#16A34A]">
                        Online
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="rounded-lg bg-white dark:bg-[#1E293B] p-2 border border-slate-200/70 dark:border-white/10">
                        <p className="text-[9px] text-[#6B7280] dark:text-slate-400">Kecepatan Loading</p>
                        <p className="text-[11px] font-bold text-[#1D5BD8] dark:text-[#60A5FA] flex items-center gap-1">
                          <Zap className="w-3 h-3 text-[#C88A23]" /> 99/100 PageSpeed
                        </p>
                      </div>
                      <div className="rounded-lg bg-white dark:bg-[#1E293B] p-2 border border-slate-200/70 dark:border-white/10">
                        <p className="text-[9px] text-[#6B7280] dark:text-slate-400">Pencarian Google</p>
                        <p className="text-[11px] font-bold text-[#16A34A] flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Terindeks &amp; Muncul
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. PEMBUATAN APLIKASI */}
                {activeTab === 2 && (
                  <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-[#FFFBEB] dark:bg-amber-950/30 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#C88A23] text-white">
                          <Smartphone className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold text-[#111827] dark:text-white">
                            Aplikasi Mobile &amp; Kasir Web
                          </p>
                          <p className="text-[9.5px] text-[#4B5563] dark:text-slate-300">
                            Android, iOS &amp; Dashboard Admin
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#DCFCE7] text-[#16A34A]">
                        Sinkron
                      </span>
                    </div>

                    <div className="rounded-lg bg-white dark:bg-[#1E293B] p-2 border border-amber-200 dark:border-amber-900/50 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5 text-[#C88A23]" />
                        <span className="text-[10px] font-bold text-[#111827] dark:text-white">
                          Pesanan Baru #1042 Masuk
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-[#1D5BD8] bg-blue-50 dark:bg-blue-900/40 px-1.5 py-0.5 rounded">
                        Rp 350.000
                      </span>
                    </div>
                  </div>
                )}

                {/* Accent Line Halus Berwarna Biru & Emas */}
                <div className="h-1 w-full rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-[#1D5BD8] via-[#38BDF8] to-[#C88A23]" />
                </div>

                {/* Footer Status Terintegrasi */}
                <div className="pt-1 flex items-center justify-between text-xs font-semibold text-[#4B5563] dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C88A23]" />
                    <span className="font-bold text-[#111827] dark:text-white">100+ Proyek Selesai</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-xs text-[#1D5BD8] dark:text-[#60A5FA]">
                    <MapPin className="w-3.5 h-3.5 text-[#1D5BD8]" />
                    <span className="font-bold">Online Se-Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          Lengkungan Bawah Halus (Curved Bottom Arc Transition)
      -------------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-4 sm:h-6 overflow-hidden pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full text-[#E5E7EB] dark:text-white/10"
        >
          <path
            d="M0,0 C360,20 1080,20 1440,0 L1440,24 L0,24 Z"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
};
