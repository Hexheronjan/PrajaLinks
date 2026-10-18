"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Phone,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

// Directional slide variants
const tabVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  }),
};

export const VillageDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [selectedLetter, setSelectedLetter] = useState("sku");

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
      className="py-24 relative overflow-hidden bg-white dark:bg-[#070F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <SectionHeading
          index="03"
          eyebrow={"SIMULASI NYATA INTERAKTIF"}
          title={"Purwarupa Website & Sistem Informasi Desa"}
          desc={"Uji coba langsung antarmuka portal desa modern berstandar Permendagri. Ganti tab untuk menjelajahi transparansi anggaran APBDes, publikasi berita desa, dan modul permohonan surat kilat."}
        />

        {/* Controls: Tabs & Viewport Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Tab buttons */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0E1A33] border border-slate-200 dark:border-white/10 overflow-x-auto max-w-full">
            {tabs.map((tab, idx) => {
              const IconComp = tabIcons[tab.icon] || Home;
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#1D5BD8] text-white shadow-md shadow-blue-600/30"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-white/5"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Viewport Mode Toggle (Desktop vs Mobile) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0E1A33] border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setViewMode("desktop")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === "desktop"
                  ? "bg-white dark:bg-slate-800 text-[#1D5BD8] dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewMode("mobile")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                viewMode === "mobile"
                  ? "bg-white dark:bg-slate-800 text-[#1D5BD8] dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Ponsel</span>
            </button>
          </div>
        </div>

        {/* Interactive Browser Frame with Authentic Government Styling */}
        <motion.div
          layout
          className={`mx-auto rounded-2xl overflow-hidden border border-slate-300 dark:border-white/15 bg-white dark:bg-[#0B1528] shadow-2xl transition-all duration-500 ${
            viewMode === "mobile" ? "max-w-[420px]" : "w-full"
          }`}
        >
          {/* Top Browser Chrome Bar */}
          <div className="px-5 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs text-slate-200 max-w-md w-full mx-4 justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="truncate font-mono">
                https://desa-prajajaya.ponorogo.desa.id/{currentTab.id}
              </span>
            </div>

            <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-emerald-400">
              SSL Verified
            </span>
          </div>

          {/* Authentic Public Portal Header Inside Simulator */}
          <div className="bg-gradient-to-r from-[#14235F] to-[#1D5BD8] text-white px-5 sm:px-7 py-4 border-b border-blue-900">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-200">
                      Pemerintah Kabupaten Ponorogo
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-400 text-slate-950">
                      Portal Resmi
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black font-heading tracking-tight leading-tight">
                    Desa Praja Jaya • Kecamatan Sukorejo
                  </h2>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-blue-100">
                  <Phone className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Pelayanan Desa: 0823-3868-9711 (24 Jam)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Screen Content with AnimatePresence & Light/Dark Theme Support */}
          <div className="min-h-[460px] p-6 sm:p-8 bg-slate-50/70 dark:bg-[#0B1528] text-slate-900 dark:text-white relative">
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
                {/* Tab Header Breadcrumb */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div>
                    <span className="text-xs font-extrabold text-[#1D5BD8] dark:text-blue-400 uppercase tracking-wider block mb-1">
                      {currentTab.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-950 dark:text-white">
                      {currentTab.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400 max-w-sm text-right hidden sm:block font-medium">
                    {currentTab.description}
                  </span>
                </div>

                {/* 1. Tab: Beranda */}
                {currentTab.id === "beranda" && (
                  <div className="space-y-6">
                    {/* Hero Banner */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#1D5BD8] to-[#14235F] text-white shadow-xl relative overflow-hidden">
                      <div className="relative z-10 max-w-xl">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold mb-3 border border-white/20">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          <span>Pusat Keterbukaan Informasi Publik Desa</span>
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black font-heading leading-snug mb-2">
                          {currentTab.content.headline}
                        </h4>
                        <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-5">
                          Pelayanan administrasi kependudukan cepat, transparansi anggaran APBDes, dan publikasi potensi desa secara akuntabel.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          <button
                            onClick={() => handleTabChange(4)}
                            className="px-4 py-2 rounded-xl bg-white text-[#14235F] font-extrabold text-xs shadow-md hover:bg-slate-100 transition-colors"
                          >
                            Ajukan Surat Mandiri &rarr;
                          </button>
                          <button
                            onClick={() => handleTabChange(3)}
                            className="px-4 py-2 rounded-xl bg-blue-800/80 text-white font-bold text-xs border border-white/20 hover:bg-blue-800 transition-colors"
                          >
                            Cek APBDes Interaktif
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 4 Stat Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {currentTab.content.stats?.map((stat, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm"
                        >
                          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                            {stat.label}
                          </span>
                          <span className="text-lg sm:text-xl font-black font-heading text-[#1D5BD8] dark:text-blue-400">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Action Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div
                        onClick={() => handleTabChange(4)}
                        className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-500 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2 font-extrabold text-xs text-slate-950 dark:text-white mb-1">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span>Layanan Surat 24 Jam</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          SKU, SKTM, dan Domisili siap kirim via WhatsApp.
                        </p>
                      </div>

                      <div
                        onClick={() => handleTabChange(3)}
                        className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-500 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2 font-extrabold text-xs text-slate-950 dark:text-white mb-1">
                          <PieChart className="w-4 h-4 text-emerald-600" />
                          <span>Grafik APBDes Real-time</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Transparansi serapan anggaran dana desa akuntabel.
                        </p>
                      </div>

                      <div
                        onClick={() => handleTabChange(1)}
                        className="p-4 rounded-xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-500 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2 font-extrabold text-xs text-slate-950 dark:text-white mb-1">
                          <Newspaper className="w-4 h-4 text-amber-600" />
                          <span>Kabar & Agenda Warga</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Publikasi kegiatan dan potensi wisata desa.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Tab: Berita & Agenda */}
                {currentTab.id === "berita" && (
                  <div className="space-y-4">
                    {currentTab.content.items?.map((news, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-blue-500 transition-all"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-[#1D5BD8] dark:text-blue-400 font-extrabold">
                              {news.status}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                              {news.date}
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-white leading-snug">
                            {news.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                            {news.subtitle}
                          </p>
                        </div>
                        <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-bold text-[#1D5BD8] dark:text-blue-400 shrink-0 flex items-center gap-1">
                          <span>Baca Detail</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Tab: Profil & Perangkat */}
                {currentTab.id === "profil" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {currentTab.content.items?.map((person, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D5BD8] to-[#14235F] text-white flex items-center justify-center font-black font-heading text-base mb-3.5 shadow-md">
                            {person.title.substring(0, 2)}
                          </div>
                          <h4 className="text-base font-black font-heading text-slate-950 dark:text-white">
                            {person.title}
                          </h4>
                          <span className="text-xs font-extrabold text-blue-700 dark:text-blue-400 block mt-0.5">
                            {person.status}
                          </span>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-medium">
                            {person.subtitle}
                          </p>
                        </div>
                        <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-500">
                          <span>Aparatur Resmi Desa</span>
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Aktif</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. Tab: Transparansi APBDes */}
                {currentTab.id === "apbdes" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentTab.content.items?.map((budget, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm"
                        >
                          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block">
                            Pos Anggaran Desa
                          </span>
                          <h4 className="text-sm font-black text-slate-950 dark:text-white mt-1">
                            {budget.title}
                          </h4>
                          <div className="mt-3 text-xl font-black text-[#1D5BD8] dark:text-blue-400 font-heading">
                            {budget.amount}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                            {budget.subtitle}
                          </p>
                          <div className="mt-3.5 flex items-center justify-between">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              {budget.status}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400">Audit BPD Selesai</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Progress Infographic Callout */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className="font-extrabold text-sm">Transparansi UU Desa No. 6 Tahun 2014</span>
                        </div>
                        <p className="text-xs text-slate-200">
                          Format laporan infografis interaktif APBDes siap diekspor ke format baliho cetak maupun unduhan PDF publik.
                        </p>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-1.5 shrink-0 hover:bg-slate-100 transition-colors shadow-md">
                        <Download className="w-3.5 h-3.5 text-blue-600" />
                        <span>Unduh APBDes PDF</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 5. Tab: Layanan Surat Mandiri Interaktif */}
                {currentTab.id === "surat" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Letter Selector */}
                    <div className="md:col-span-5 space-y-3">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Pilih Jenis Surat yang Diinginkan:
                      </p>
                      {[
                        { id: "sku", title: "Surat Keterangan Usaha (SKU)", time: "1 Hari Kerja", desc: "Syarat pengajuan modal usaha perbankan atau KUR." },
                        { id: "sktm", title: "Surat Keterangan Tidak Mampu (SKTM)", time: "Verifikasi Otomatis", desc: "Keperluan beasiswa sekolah dan keringanan biaya kesehatan." },
                        { id: "domisili", title: "Surat Keterangan Domisili Warga", time: "Format Kemendagri", desc: "Bukti tempat tinggal sementara atau kepindahan warga." },
                      ].map((doc) => (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedLetter(doc.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                            selectedLetter === doc.id
                              ? "bg-[#1D5BD8] text-white border-[#1D5BD8] shadow-md"
                              : "bg-white dark:bg-[#0F1B3A] border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:border-blue-400"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-xs sm:text-sm font-extrabold">
                              {doc.title}
                            </h4>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              selectedLetter === doc.id ? "bg-white/20 text-white" : "bg-blue-500/10 text-[#1D5BD8] dark:text-blue-400"
                            }`}>
                              {doc.time}
                            </span>
                          </div>
                          <p className={`text-xs ${selectedLetter === doc.id ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                            {doc.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Live Letter Document Simulator */}
                    <div className="md:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-lg flex flex-col justify-between">
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
                            {selectedLetter === "sktm" && "SURAT KETERANGAN TIDAK MAMPU (SKTM)"}
                            {selectedLetter === "domisili" && "SURAT KETERANGAN DOMISILI"}
                          </span>
                          <p className="text-[10px] font-mono text-slate-500">
                            Nomor: 470 / 142 / 405.24.08 / 2026
                          </p>
                        </div>

                        {/* Simulated Body Data */}
                        <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium mb-5 bg-slate-50 dark:bg-[#0A1228] p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500">Nama Pemohon</span>
                            <span className="col-span-2 font-bold text-slate-950 dark:text-white">: Warga Desa Praja Jaya</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500">NIK Terdaftar</span>
                            <span className="col-span-2 font-mono">: 3502************ (Terverifikasi)</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500">Status Permohonan</span>
                            <span className="col-span-2 font-bold text-emerald-600 dark:text-emerald-400">: Siap Tanda Tangan Digital</span>
                          </div>
                        </div>
                      </div>

                      {/* Letter Footer: Stamp & QR Code */}
                      <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-mono text-[9px] font-extrabold text-[#1D5BD8]">
                            [QR-VERIF]
                          </div>
                          <span className="text-[10px] text-slate-400">
                            Tanda Tangan Elektronik (TTE) & Cap Basah Resmi
                          </span>
                        </div>

                        <a
                          href={getWhatsAppLink("Halo PrajaLinks, saya tertarik dengan Modul Pelayanan Surat Mandiri dan Website Desa.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#1D5BD8] hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all"
                        >
                          Coba Demo Surat
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Callout */}
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <Clock className="w-4 h-4 text-[#1D5BD8]" />
                <span>Format modul teruji sesuai regulasi Permendagri & UU Desa. SPJ resmi siap diterbitkan.</span>
              </div>
              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi pembuatan Website Desa & Sistem Informasi Desa lengkap.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-extrabold text-[#1D5BD8] hover:underline flex items-center gap-1.5"
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
