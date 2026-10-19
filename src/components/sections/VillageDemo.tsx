"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Monitor,
  Smartphone,
  Home,
  Newspaper,
  Users,
  PieChart,
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  Building2,
  Search,
  ShieldCheck,
  ChevronRight,
  Phone,
  MapPin,
  Calendar,
  UserCheck,
  BadgeCheck,
  Eye,
  Bell,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

const tabVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 16 : -16,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -16 : 16,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: smoothEase,
    },
  }),
};

export const VillageDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [selectedLetter, setSelectedLetter] = useState("sku");
  const [nikQuery, setNikQuery] = useState("");

  const tabs = siteData.villageDemo.tabs;
  const currentTab = tabs[activeTabIdx];

  const handleTabChange = (newIdx: number) => {
    if (newIdx === activeTabIdx) return;
    setDirection(newIdx > activeTabIdx ? 1 : -1);
    setActiveTabIdx(newIdx);
  };

  const tabIcons: Record<string, any> = {
    Home,
    Newspaper,
    Users,
    PieChart,
    FileText,
  };

  return (
    <section
      id="demo-desa"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#070F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <SectionHeading
          index="03"
          eyebrow={"SIMULASI PORTAL DESA INTERAKTIF"}
          title={"Purwarupa Website & Sistem Informasi Desa"}
          desc={"Klik menu di dalam layar simulasi di bawah ini untuk mencoba langsung tampilan Beranda, Kabar Berita, Struktur Perangkat (SOTK), Grafik APBDes, dan Pembuatan Surat Mandiri."}
        />

        {/* Interactive Browser Frame */}
        <motion.div
          layout
          className={`mx-auto rounded-2xl overflow-hidden border border-slate-300 dark:border-white/15 bg-white dark:bg-[#0B1528] shadow-[0_25px_70px_-15px_rgba(15,23,42,0.18)] transition-all duration-500 ${
            viewMode === "mobile" ? "max-w-[430px]" : "w-full"
          }`}
        >
          {/* 1. Browser Top Chrome Bar + Desktop/Mobile Toggle */}
          <div className="px-4 sm:px-6 py-3 bg-[#0B1120] border-b border-white/10 flex items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            {/* URL Bar */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/90 border border-white/10 text-[11px] text-slate-300 max-w-md w-full justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate font-mono">
                https://prajajaya.desa.id/{currentTab.id}
              </span>
            </div>

            {/* Viewport Switcher Integrated in Browser Chrome */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-white/10 shrink-0">
              <button
                onClick={() => setViewMode("desktop")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                  viewMode === "desktop"
                    ? "bg-[#1D5BD8] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewMode("mobile")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                  viewMode === "mobile"
                    ? "bg-[#1D5BD8] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Layar HP</span>
              </button>
            </div>
          </div>

          {/* 2. Authentic Village Government Header & Integrated Navigation Bar */}
          <div className="bg-[#0F1E3C] text-white border-b border-slate-200 dark:border-white/10">
            {/* Top Identity Strip */}
            <div className="px-5 sm:px-7 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shrink-0 shadow-md font-black text-sm">
                  <Building2 className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                      PEMERINTAH KABUPATEN PONOROGO
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      SID Terpadu v4.2
                    </span>
                  </div>
                  <h2 className="text-base sm:text-xl font-extrabold font-heading tracking-tight text-white mt-0.5">
                    Pemerintah Desa Praja Jaya • Kec. Sukorejo
                  </h2>
                </div>
              </div>

              {/* Right Quick Contact Info */}
              {viewMode === "desktop" && (
                <div className="hidden lg:flex items-center gap-5 text-xs">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-slate-200">
                      Balai Desa: <strong>08.00 – 15.00 WIB</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/15 px-3 py-1.5 rounded-lg border border-emerald-400/30 text-emerald-200 font-bold">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Siaga Desa: {siteData.brand.waDisplay}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Integrated Portal Navigation Menu (Like a Real Website Navbar) */}
            <div className="px-4 sm:px-7 bg-[#14274E] flex items-center justify-between gap-2 overflow-x-auto">
              <div className="flex items-center gap-1 py-2">
                {tabs.map((tab, idx) => {
                  const IconComp = tabIcons[tab.icon] || Home;
                  const isActive = activeTabIdx === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(idx)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-[#1D5BD8] text-white shadow-sm border border-blue-400/40"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {viewMode === "desktop" && (
                <div className="hidden md:flex items-center gap-2 text-[11px] text-blue-200 font-medium shrink-0">
                  <Bell className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
                  <span>Update APBDes & Layanan Mandiri Aktif</span>
                </div>
              )}
            </div>
          </div>

          {/* 3. Main Interactive Portal Screen Content */}
          <div className="min-h-[500px] p-5 sm:p-7 bg-[#F8FAFC] dark:bg-[#0B1528] text-slate-900 dark:text-white relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentTab.id}
                custom={direction}
                variants={tabVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                {/* =========================================================
                    TAB 1: BERANDA (PORTAL UTAMA DESA)
                ========================================================= */}
                {currentTab.id === "beranda" && (
                  <div className="space-y-6">
                    {/* Top Grid: Photographic Village Hero + Sambutan Kepala Desa */}
                    <div
                      className={`grid grid-cols-1 ${
                        viewMode === "desktop" ? "lg:grid-cols-12" : ""
                      } gap-5`}
                    >
                      {/* Left: Real Village Landscape Hero Banner */}
                      <div
                        className={`${
                          viewMode === "desktop" ? "lg:col-span-8" : ""
                        } relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-between p-6 text-white shadow-lg border border-slate-200/20`}
                      >
                        <Image
                          src="/desa-landscape.jpg"
                          alt="Panorama Desa Praja Jaya"
                          fill
                          className="object-cover object-center brightness-[0.55]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#081024] via-[#081024]/50 to-transparent" />

                        {/* Top Ticker */}
                        <div className="relative z-10 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                            <MapPin className="w-3 h-3" />
                            Desa Mandiri & Digital
                          </span>
                          <span className="text-[11px] font-mono text-slate-200 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                            Kode Kemendagri: 35.02.14.2008
                          </span>
                        </div>

                        {/* Center Headline & Search / NIK Bar */}
                        <div className="relative z-10 my-4">
                          <h3 className="text-xl sm:text-2xl font-black font-heading leading-snug text-white mb-2">
                            Portal Pelayanan Publik & Transparansi Desa Praja Jaya
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed mb-4">
                            Akses pengajuan surat pengantar dari rumah, pantau realisasi Dana Desa (APBDes), dan ikuti kabar pembangunan dusun secara terbuka.
                          </p>

                          {/* Interactive Citizen Search / NIK Check Bar */}
                          <div className="flex flex-col sm:flex-row gap-2 max-w-lg bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20">
                            <div className="flex items-center gap-2 flex-1 px-3 py-1.5">
                              <Search className="w-4 h-4 text-amber-300 shrink-0" />
                              <input
                                type="text"
                                value={nikQuery}
                                onChange={(e) => setNikQuery(e.target.value)}
                                placeholder="Cari layanan surat atau cek status NIK warga..."
                                className="bg-transparent text-white placeholder-slate-300 text-xs w-full focus:outline-none"
                              />
                            </div>
                            <button
                              onClick={() => handleTabChange(4)}
                              className="px-4 py-2 rounded-lg bg-[#1D5BD8] hover:bg-blue-600 text-white font-extrabold text-xs shrink-0 transition-colors"
                            >
                              Urutkan Surat &rarr;
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right: Official Sambutan & Status Pelayanan Balai Desa */}
                      <div
                        className={`${
                          viewMode === "desktop" ? "lg:col-span-4" : ""
                        } p-5 rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1D5BD8] dark:text-blue-400">
                              Loket Pelayanan Desa
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                              Buka Melayani
                            </span>
                          </div>

                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15 flex items-center justify-center shrink-0">
                              <UserCheck className="w-5 h-5 text-[#1D5BD8] dark:text-blue-400" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-slate-950 dark:text-white">
                                Suryanto, S.Sos
                              </h4>
                              <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                                Kepala Desa Praja Jaya
                              </p>
                            </div>
                          </div>

                          <blockquote className="text-xs text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-[#0A1228] p-3 rounded-xl border border-slate-200/60 dark:border-white/5 leading-relaxed">
                            &ldquo;Melalui portal SID ini, kami berkomitmen menghadirkan pelayanan warga yang cepat tanpa birokrasi berbelit serta keterbukaan anggaran desa 100%.&rdquo;
                          </blockquote>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-500 dark:text-slate-400">
                            Antrean Loket Hari Ini:
                          </span>
                          <span className="font-black text-emerald-600 dark:text-emerald-400">
                            14 Surat Selesai
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Row: 4 Data Monografi & Demografi Desa */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                      {[
                        {
                          label: "Total Penduduk",
                          value: "3.420 Jiwa",
                          sub: "1.085 Kepala Keluarga",
                          color: "text-[#1D5BD8] dark:text-blue-400",
                        },
                        {
                          label: "Wilayah Administratif",
                          value: "4 Dusun",
                          sub: "12 RT • 4 RW Aktif",
                          color: "text-emerald-600 dark:text-emerald-400",
                        },
                        {
                          label: "Luas Wilayah Desa",
                          value: "482 Hektar",
                          sub: "68% Lahan Pertanian",
                          color: "text-amber-600 dark:text-amber-400",
                        },
                        {
                          label: "Serapan APBDes",
                          value: "98.4%",
                          sub: "Terserap Akuntabel",
                          color: "text-indigo-600 dark:text-indigo-400",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between"
                        >
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            {stat.label}
                          </span>
                          <span
                            className={`text-lg sm:text-xl font-black font-heading my-1 ${stat.color}`}
                          >
                            {stat.value}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400">
                            {stat.sub}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Row: 3 Interactive Citizen Modules */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <button
                        onClick={() => handleTabChange(4)}
                        className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 hover:border-[#1D5BD8] shadow-sm transition-all text-left flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-[#1D5BD8] dark:text-blue-400 flex items-center justify-center shrink-0 font-bold">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-extrabold text-slate-950 dark:text-white group-hover:text-[#1D5BD8]">
                              Permohonan Surat Online
                            </h5>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              SKU, SKTM, Domisili & Pengantar
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D5BD8] group-hover:translate-x-0.5 transition-all" />
                      </button>

                      <button
                        onClick={() => handleTabChange(3)}
                        className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 hover:border-emerald-500 shadow-sm transition-all text-left flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                            <PieChart className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-extrabold text-slate-950 dark:text-white group-hover:text-emerald-600">
                              Cek Rincian APBDes
                            </h5>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Laporan realisasi pendapatan & belanja
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                      </button>

                      <button
                        onClick={() => handleTabChange(2)}
                        className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 hover:border-amber-500 shadow-sm transition-all text-left flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-extrabold text-slate-950 dark:text-white group-hover:text-amber-600">
                              Daftar Perangkat & SOTK
                            </h5>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              Struktur pamong & jadwal piket balai
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    TAB 2: BERITA & AGENDA DESA (PORTAL REDAKSI WARGA)
                ========================================================= */}
                {currentTab.id === "berita" && (
                  <div
                    className={`grid grid-cols-1 ${
                      viewMode === "desktop" ? "lg:grid-cols-12" : ""
                    } gap-6`}
                  >
                    {/* Left Column (7 cols): Warta & Dokumentasi Kegiatan Desa */}
                    <div
                      className={`${
                        viewMode === "desktop" ? "lg:col-span-7" : ""
                      } space-y-4`}
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5BD8] dark:text-blue-400">
                            Jurnalistik & Dokumentasi PPID
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-slate-950 dark:text-white">
                            Kabar Pembangunan & Kegiatan Warga
                          </h3>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">
                          3 Berita Terbaru
                        </span>
                      </div>

                      {/* Featured News Card with Thumbnail */}
                      <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-5 relative min-h-[150px] bg-slate-900">
                          <Image
                            src="/desa-kegiatan.jpg"
                            alt="Penyaluran BLT Dana Desa"
                            fill
                            className="object-cover"
                          />
                          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-[#1D5BD8] text-white text-[10px] font-extrabold uppercase">
                            Kesejahteraan
                          </span>
                        </div>
                        <div className="sm:col-span-7 p-4 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-blue-600" />
                                14 Oktober 2025
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                342 dibaca
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-white leading-snug mb-1.5">
                              Penyaluran BLT Dana Desa Tahap III Tahun 2025 Berjalan Tertib & Transparan
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                              Sebanyak 75 Keluarga Penerima Manfaat (KPM) menerima bantuan langsung tunai di Pendopo Balai Desa disaksikan BPD dan Babinsa.
                            </p>
                          </div>
                          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px]">
                            <span className="font-bold text-slate-500">
                              Oleh: Tim Redaksi SID
                            </span>
                            <span className="font-extrabold text-[#1D5BD8] dark:text-blue-400 flex items-center gap-1">
                              Baca Selengkapnya <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Secondary News List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between text-[10px] font-bold mb-1.5">
                              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase">
                                Infrastruktur
                              </span>
                              <span className="text-slate-400">08 Okt 2025</span>
                            </div>
                            <h5 className="text-xs sm:text-sm font-extrabold text-slate-950 dark:text-white leading-snug">
                              Kerja Bakti Normalisasi Saluran Irigasi Pertanian Dusun Krajan
                            </h5>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                              Gotong royong warga bersama HIPPA mengantisipasi musim penghujan.
                            </p>
                          </div>
                          <span className="mt-3 text-[11px] font-bold text-[#1D5BD8] dark:text-blue-400 flex items-center gap-1">
                            Dokumentasi Foto (8) <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between text-[10px] font-bold mb-1.5">
                              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase">
                                UMKM & BUMDes
                              </span>
                              <span className="text-slate-400">02 Okt 2025</span>
                            </div>
                            <h5 className="text-xs sm:text-sm font-extrabold text-slate-950 dark:text-white leading-snug">
                              Pelatihan Kemasan & Pemasaran Digital Produk UMKM Desa
                            </h5>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                              Diikuti 40 pelaku usaha olahan pangan lokal di aula balai desa.
                            </p>
                          </div>
                          <span className="mt-3 text-[11px] font-bold text-[#1D5BD8] dark:text-blue-400 flex items-center gap-1">
                            Dokumentasi Foto (12) <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column (5 cols): Papan Agenda & Jadwal Kegiatan Desa */}
                    <div
                      className={`${
                        viewMode === "desktop" ? "lg:col-span-5" : ""
                      } space-y-4`}
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                            Kalender Masyarakat
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-slate-950 dark:text-white">
                            Jadwal Agenda Balai Desa
                          </h3>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-[#1D5BD8] dark:text-blue-400">
                          Oktober 2025
                        </span>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            day: "20",
                            month: "OKT",
                            title: "Pekan Imunisasi & Posyandu Balita Serentak",
                            time: "08.00 – 11.30 WIB",
                            loc: "4 Posyandu Dusun",
                            status: "Mendatang",
                          },
                          {
                            day: "24",
                            month: "OKT",
                            title: "Musyawarah Perencanaan Pembangunan (Musrenbangdes)",
                            time: "13.00 – 16.00 WIB",
                            loc: "Pendopo Balai Desa",
                            status: "Terjadwal",
                          },
                          {
                            day: "28",
                            month: "OKT",
                            title: "Layanan Mobil Keliling Pembayaran Pajak PBB & Administrasi",
                            time: "08.30 – 14.00 WIB",
                            loc: "Halaman Kantor Desa",
                            status: "Terbuka Umum",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-3.5"
                          >
                            {/* Date Calendar Box */}
                            <div className="w-12 h-14 rounded-lg bg-[#0F1E3C] text-white flex flex-col items-center justify-center shrink-0 border border-blue-500/30">
                              <span className="text-base font-black leading-none">
                                {item.day}
                              </span>
                              <span className="text-[9px] font-extrabold text-amber-300 uppercase mt-1">
                                {item.month}
                              </span>
                            </div>

                            <div className="flex-1 min-w-0">
                              <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-white/5 text-[#1D5BD8] dark:text-blue-300 mb-1">
                                {item.status}
                              </span>
                              <h5 className="text-xs font-extrabold text-slate-950 dark:text-white leading-snug">
                                {item.title}
                              </h5>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                <span>🕒 {item.time}</span>
                                <span>📍 {item.loc}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    TAB 3: PROFIL & PERANGKAT DESA (SOTK RESMI PEMDES)
                ========================================================= */}
                {currentTab.id === "profil" && (
                  <div className="space-y-5">
                    {/* Official SOTK Header Banner */}
                    <div className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D5BD8] dark:text-blue-400 block">
                          Struktur Organisasi & Tata Kerja (Permendagri No. 84/2015)
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-950 dark:text-white">
                          Daftar Pejabat & Pamong Pemerintah Desa Praja Jaya
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Presensi Hari Ini: 7 Perangkat Hadir di Kantor</span>
                      </div>
                    </div>

                    {/* 3 Main Officials Cards with Detailed Governance Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Suryanto, S.Sos",
                          role: "Kepala Desa",
                          nipd: "NIPD: 19780412 201911 1 001",
                          duty: "Penanggung jawab utama penyelenggaraan pemerintahan, pembangunan, dan kemasyarakatan desa.",
                          desk: "Ruang Pimpinan Balai Desa",
                          status: "Hadir di Balai Desa",
                          online: true,
                        },
                        {
                          name: "Bambang Wijaya, S.E.",
                          role: "Sekretaris Desa (Carik)",
                          nipd: "NIPD: 19850821 201604 1 002",
                          duty: "Koordinator tata usaha, perencanaan APBDes, ketatausahaan surat, dan verifikasi dokumen warga.",
                          desk: "Loket Sekretariat Utama",
                          status: "Hadir di Balai Desa",
                          online: true,
                        },
                        {
                          name: "Rina Kusuma, S.Kom",
                          role: "Kaur Perencanaan & Operator SID",
                          nipd: "NIPD: 19941105 202102 2 005",
                          duty: "Pengelola Sistem Informasi Desa (SID), pelayanan surat online mandiri, dan publikasi data desa.",
                          desk: "Loket Pelayanan Digital",
                          status: "Siaga Pelayanan Online",
                          online: true,
                        },
                      ].map((official, i) => (
                        <div
                          key={i}
                          className="rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col justify-between"
                        >
                          <div>
                            {/* Card Top Strip */}
                            <div className="px-4 py-3 bg-[#0F1E3C] text-white flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                                {official.role}
                              </span>
                              <BadgeCheck className="w-4 h-4 text-blue-400" />
                            </div>

                            <div className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-500/15 border-2 border-[#1D5BD8] flex items-center justify-center shrink-0 text-[#1D5BD8] dark:text-blue-400 font-black text-sm">
                                  <UserCheck className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-black text-slate-950 dark:text-white">
                                    {official.name}
                                  </h4>
                                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                                    {official.nipd}
                                  </p>
                                </div>
                              </div>

                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                                {official.duty}
                              </p>

                              <div className="text-[11px] bg-slate-50 dark:bg-[#0A1228] px-3 py-2 rounded-lg border border-slate-200/70 dark:border-white/5 text-slate-600 dark:text-slate-300 font-semibold">
                                📍 Pos Pelayanan: <strong>{official.desk}</strong>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-white/5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-slate-500">Status Kehadiran:</span>
                            <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {official.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Strip: Daftar Kepala Kewilayahan / Kepala Dusun (Kasun) */}
                    <div className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                        Pelaksana Kewilayahan (Kepala Dusun / Kamituwo)
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { dusun: "Dusun I Krajan", kasun: "Bp. Hendra Saputra", rtrw: "RW 01 (RT 01 - 03)" },
                          { dusun: "Dusun II Kidul", kasun: "Bp. Agus Setiawan", rtrw: "RW 02 (RT 04 - 06)" },
                          { dusun: "Dusun III Wetan", kasun: "Bp. Wahyu Hidayat", rtrw: "RW 03 (RT 07 - 09)" },
                          { dusun: "Dusun IV Mekarsari", kasun: "Bp. Joko Purnomo", rtrw: "RW 04 (RT 10 - 12)" },
                        ].map((d, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-slate-50 dark:bg-[#0A1228] border border-slate-200/70 dark:border-white/5"
                          >
                            <span className="text-[10px] font-extrabold text-[#1D5BD8] dark:text-blue-400 uppercase block">
                              {d.dusun}
                            </span>
                            <span className="text-xs font-black text-slate-900 dark:text-white block mt-0.5">
                              {d.kasun}
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">
                              {d.rtrw}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    TAB 4: TRANSPARANSI APBDES
                ========================================================= */}
                {currentTab.id === "apbdes" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          title: "Pendapatan Asli Desa (PADes)",
                          subtitle: "Hasil pengelolaan tanah kas desa & BUMDes",
                          amount: "Rp 125.000.000",
                          percent: 100,
                          status: "Realisasi 102%",
                        },
                        {
                          title: "Dana Desa (Transfer APBN)",
                          subtitle: "Infrastruktur padat karya & ketahanan pangan",
                          amount: "Rp 874.500.000",
                          percent: 98,
                          status: "Realisasi 98%",
                        },
                        {
                          title: "Belanja Pembangunan & Pemberdayaan",
                          subtitle: "Pavingisasi jalan, irigasi & pelatihan warga",
                          amount: "Rp 640.200.000",
                          percent: 96,
                          status: "Terserap 96%",
                        },
                      ].map((budget, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm"
                        >
                          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block">
                            Pos Anggaran Tahun Berjalan
                          </span>
                          <h4 className="text-sm font-black text-slate-950 dark:text-white mt-1">
                            {budget.title}
                          </h4>
                          <div className="mt-3 text-xl font-black text-[#1D5BD8] dark:text-blue-400 font-heading">
                            {budget.amount}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 mb-3">
                            {budget.subtitle}
                          </p>
                          {/* Visual Progress Bar */}
                          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden mb-2">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: `${budget.percent}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              {budget.status}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400">
                              Terverifikasi Siskeudes
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Progress Infographic Callout */}
                    <div className="p-5 rounded-xl bg-[#0F1E3C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md border border-blue-500/20">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className="font-extrabold text-sm">
                            Kepatuhan Transparansi UU Desa No. 6 Tahun 2014
                          </span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Laporan realisasi anggaran otomatis terformat menjadi infografis warga dan siap diekspor ke PDF maupun cetak baliho desa.
                        </p>
                      </div>
                      <button className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shrink-0 hover:bg-slate-100 transition-colors shadow">
                        <Download className="w-3.5 h-3.5 text-[#1D5BD8]" />
                        <span>Unduh Ringkasan PDF</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* =========================================================
                    TAB 5: LAYANAN SURAT MANDIRI INTERAKTIF
                ========================================================= */}
                {currentTab.id === "surat" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Letter Selector */}
                    <div className="md:col-span-5 space-y-3">
                      <p className="text-xs font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Pilih Jenis Surat Administrasi:
                      </p>
                      {[
                        {
                          id: "sku",
                          title: "Surat Keterangan Usaha (SKU)",
                          time: "1 Hari Kerja",
                          desc: "Syarat pengajuan modal usaha perbankan atau KUR.",
                        },
                        {
                          id: "sktm",
                          title: "Surat Keterangan Tidak Mampu (SKTM)",
                          time: "Verifikasi Otomatis",
                          desc: "Keperluan beasiswa sekolah dan keringanan biaya kesehatan.",
                        },
                        {
                          id: "domisili",
                          title: "Surat Keterangan Domisili Warga",
                          time: "Format Kemendagri",
                          desc: "Bukti tempat tinggal sementara atau kepindahan warga.",
                        },
                      ].map((doc) => (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedLetter(doc.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            selectedLetter === doc.id
                              ? "bg-[#1D5BD8] text-white border-[#1D5BD8] shadow-md"
                              : "bg-white dark:bg-[#0F1B3A] border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:border-blue-400"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-xs sm:text-sm font-extrabold">
                              {doc.title}
                            </h4>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                selectedLetter === doc.id
                                  ? "bg-white/20 text-white"
                                  : "bg-blue-500/10 text-[#1D5BD8] dark:text-blue-400"
                              }`}
                            >
                              {doc.time}
                            </span>
                          </div>
                          <p
                            className={`text-xs ${
                              selectedLetter === doc.id
                                ? "text-blue-100"
                                : "text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            {doc.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Live Letter Document Simulator */}
                    <div className="md:col-span-7 p-6 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-md flex flex-col justify-between">
                      <div>
                        {/* Letter Header Simulator */}
                        <div className="border-b-2 border-slate-900 dark:border-white pb-3 mb-4 text-center">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            PEMERINTAH KABUPATEN PONOROGO • KECAMATAN SUKOREJO
                          </p>
                          <h4 className="text-sm font-black uppercase text-slate-950 dark:text-white">
                            KANTOR KEPALA DESA PRAJA JAYA
                          </h4>
                          <p className="text-[9px] text-slate-400">
                            Jalan Raya Praja No. 01, Morosari, Ponorogo • Kode Pos 63453
                          </p>
                        </div>

                        {/* Letter Subject */}
                        <div className="text-center mb-4">
                          <span className="text-xs font-black uppercase underline decoration-2 decoration-blue-600 text-slate-950 dark:text-white">
                            {selectedLetter === "sku" && "SURAT KETERANGAN USAHA (SKU)"}
                            {selectedLetter === "sktm" &&
                              "SURAT KETERANGAN TIDAK MAMPU (SKTM)"}
                            {selectedLetter === "domisili" &&
                              "SURAT KETERANGAN DOMISILI"}
                          </span>
                          <p className="text-[10px] font-mono text-slate-500">
                            Nomor: 470 / 142 / 405.24.08 / 2026
                          </p>
                        </div>

                        {/* Simulated Body Data */}
                        <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium mb-5 bg-slate-50 dark:bg-[#0A1228] p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500">Nama Pemohon</span>
                            <span className="col-span-2 font-bold text-slate-950 dark:text-white">
                              : Warga Desa Praja Jaya
                            </span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500">NIK Terdaftar</span>
                            <span className="col-span-2 font-mono">
                              : 3502************ (Terverifikasi)
                            </span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500">Status Permohonan</span>
                            <span className="col-span-2 font-bold text-emerald-600 dark:text-emerald-400">
                              : Siap Tanda Tangan Digital
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Letter Footer: Stamp & QR Code */}
                      <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-mono text-[9px] font-extrabold text-[#1D5BD8]">
                            [QR-TTE]
                          </div>
                          <span className="text-[10px] text-slate-400">
                            Tanda Tangan Elektronik (TTE) & Cap Resmi
                          </span>
                        </div>

                        <a
                          href={getWhatsAppLink(
                            "Halo PrajaLinks, saya tertarik dengan Modul Pelayanan Surat Mandiri dan Website Desa."
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#1D5BD8] hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all"
                        >
                          Pesan Modul Ini
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Portal Footer Bar */}
            <div className="mt-7 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  Sesuai standar Permendagri & UU Keterbukaan Informasi Publik. Dokumen SPJ Desa lengkap.
                </span>
              </div>
              <a
                href={getWhatsAppLink(
                  "Halo PrajaLinks, saya ingin konsultasi pembuatan Website Desa & Sistem Informasi Desa lengkap."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extrabold text-[#1D5BD8] dark:text-blue-400 hover:underline flex items-center gap-1.5"
              >
                <span>Konsultasikan Pembuatan Web Desa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
