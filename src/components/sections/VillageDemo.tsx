"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Smartphone,
  Code2,
  Monitor,
  CheckCircle2,
  Play,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  FileText,
  PieChart,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Terminal,
  RefreshCw,
  Building2,
  Search,
  Bell,
  TrendingUp,
  Check,
  Receipt,
  QrCode,
  DollarSign,
  Star,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getWhatsAppLink } from "@/data/site";

/* ------------------------------------------------------------------
   Katalog Produk Simulasi Kasir
------------------------------------------------------------------- */
const posProducts = [
  { id: 1, name: "Kopi Robusta 250g", price: 35000, cat: "Minuman", stock: 24 },
  { id: 2, name: "Keripik Tempe Renyah", price: 18000, cat: "Camilan", stock: 15 },
  { id: 3, name: "Sambal Pecel 500g", price: 28000, cat: "Bumbu", stock: 40 },
  { id: 4, name: "Madu Hutan 300ml", price: 65000, cat: "Kesehatan", stock: 12 },
  { id: 5, name: "Beras Organik 5kg", price: 72000, cat: "Sembako", stock: 18 },
  { id: 6, name: "Gula Kelapa Asli 1kg", price: 24000, cat: "Bumbu", stock: 30 },
];

/* ------------------------------------------------------------------
   Snippet Kode untuk Lab Coding
------------------------------------------------------------------- */
const codingLabData = {
  python: {
    title: "Machine Learning (Python)",
    file: "prediksi_nilai.py",
    runtime: "Python 3.11 • scikit-learn",
    code: `# Algoritma Regresi — Prediksi Nilai Mahasiswa
import pandas as pd
from sklearn.linear_model import LinearRegression

# 1. Memuat dataset akademik
df = pd.read_csv("data_mahasiswa.csv")
X = df[["jam_belajar", "kehadiran"]]
y = df["nilai_akhir"]

# 2. Melatih model & menghitung akurasi
model = LinearRegression().fit(X, y)
akurasi = model.score(X, y)

print(f"Skor R²: {akurasi:.2f} (Sangat Baik)")
print("Status: 100% Selesai & Bergaransi Jalan ✓")`,
    terminal: [
      "$ python prediksi_nilai.py",
      "[INFO] Memuat 500 baris data mahasiswa...",
      "[INFO] Model fitting selesai dalam 0.08 detik",
      "✓ Skor R²: 0.89 (Sangat Baik)",
      "✓ Status: 100% Selesai & Bergaransi Jalan ✓",
      "✓ Uji coba fungsi: 10/10 test cases passed",
    ],
  },
  web: {
    title: "Backend API (Laravel)",
    file: "PesananApiController.php",
    runtime: "PHP 8.2 • Laravel 11",
    code: `<?php
namespace App\\Http\\Controllers\\Api;
use App\\Models\\Pesanan;
use Illuminate\\Http\\Request;

class PesananApiController extends Controller {
    public function buatTransaksi(Request $req) {
        $pesanan = Pesanan::create([
            'pelanggan' => $req->nama,
            'total'     => $req->subtotal,
            'status'    => 'LUNAS',
        ]);
        return response()->json([
            'pesan' => 'Transaksi Sukses',
            'nota'  => 'NOTA-' . $pesanan->id
        ], 201);
    }
}`,
    terminal: [
      "$ php artisan test --filter=PesananTest",
      "   PASS  Tests\\Feature\\PesananApiTest",
      "  ✓ api transaksi berhasil dibuat (201 Created)",
      "  ✓ validasi stok dan harga akurat",
      "Tests:    2 passed (6 assertions)",
      "Duration: 0.14s • 0 Error • Siap Digunakan",
    ],
  },
  frontend: {
    title: "Frontend Dashboard (React)",
    file: "DashboardOmzet.tsx",
    runtime: "TypeScript • React 19",
    code: `export const DashboardOmzet = ({ omzet }: Props) => {
  return (
    <div className="rounded-2xl p-4 bg-white shadow-md border">
      <p className="text-xs text-slate-500">Omzet Toko Hari Ini</p>
      <h3 className="text-2xl font-bold text-blue-600">
        Rp {omzet.toLocaleString("id-ID")}
      </h3>
      <span className="text-xs font-bold text-emerald-500">
        +18.4% vs Hari Kemarin
      </span>
    </div>
  );
};`,
    terminal: [
      "$ npm run build",
      "✓ Linting & Type checking passed with 0 errors",
      "✓ Production bundle optimized: 38.2 kB",
      "✓ Skor Lighthouse: 100 Performance, 100 SEO",
      "✓ Siap deploy ke server hosting",
    ],
  },
};

export const VillageDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pilar utama: 0: Website, 1: Aplikasi Kasir, 2: Lab Coding
  const [activePillar, setActivePillar] = useState<0 | 1 | 2>(0);

  // Toggle Viewport: Desktop vs Layar HP
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  // State Pilar 1: Website
  const [webTab, setWebTab] = useState<"beranda" | "surat" | "apbdes">("beranda");
  const [namaSurat, setNamaSurat] = useState("");
  const [nikSurat, setNikSurat] = useState("");
  const [suratResult, setSuratResult] = useState<string | null>(null);

  // State Pilar 2: Aplikasi Kasir POS
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; qty: number }[]>([
    { id: 1, name: "Kopi Robusta 250g", price: 35000, qty: 2 },
    { id: 2, name: "Keripik Tempe Renyah", price: 18000, qty: 1 },
  ]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [posFilter, setPosFilter] = useState("Semua");

  // State Pilar 3: Coding Lab
  const [selectedLang, setSelectedLang] = useState<"python" | "web" | "frontend">("python");
  const [isCompiling, setIsCompiling] = useState(false);

  // Handler Kasir
  const handleAddToCart = (p: typeof posProducts[0]) => {
    setCheckoutSuccess(false);
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === p.id);
      if (exist) {
        return prev.map((item) => (item.id === p.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, qty: 1 }];
    });
  };

  const handleUpdateQty = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalBelanja = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  // Handler Surat
  const handleKirimSurat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaSurat || !nikSurat) return;
    setSuratResult(`Surat Keterangan atas nama ${namaSurat} (NIK: ${nikSurat}) berhasil diterbitkan otomatis dengan QR Verifikasi resmi!`);
  };

  // Handler Run Code
  const handleRunCode = () => {
    setIsCompiling(true);
    setTimeout(() => {
      setIsCompiling(false);
    }, 600);
  };

  const filteredProducts =
    posFilter === "Semua" ? posProducts : posProducts.filter((p) => p.cat === posFilter);

  return (
    <section
      id="demo-desa"
      ref={containerRef}
      className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-[#070F1F]"
    >
      {/* Lengkungan Latar Belakang Halus */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1D5BD8]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C88A23]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Seksi */}
        <SectionHeading
          index="03"
          eyebrow="SIMULASI & PURWARUPA INTERAKTIF"
          title="Uji Coba Langsung Sistem Rekayasa Kami"
          desc="Coba interaktif simulator website portal bisnis & desa, aplikasi kasir cloud toko online, hingga lab eksekusi kode tugas pemrograman dari PrajaLinks."
        />

        {/* -------------------------------------------------------------
            Segmented Tabs 3 Pilar Lengkung (Curved Pill Selector)
        -------------------------------------------------------------- */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-white/10 shadow-md">
            {[
              { id: 0, label: "Website Interaktif", icon: Globe },
              { id: 1, label: "Aplikasi Kasir & Stok", icon: Smartphone },
              { id: 2, label: "Lab Tugas Coding", icon: Code2 },
            ].map((p) => {
              const Icon = p.icon;
              const isActive = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id as 0 | 1 | 2)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#1D5BD8] text-white shadow-md shadow-blue-600/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-[#111827] dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Stasiun Uji Coba dengan Lengkungan Modern
        -------------------------------------------------------------- */}
        <div className="mt-8">
          <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1426] shadow-2xl overflow-hidden">
            {/* Header Frame macOS & Viewport Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#F8FAFC] dark:bg-[#0F1B33] border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1A2744] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500">
                  <span className="text-[#16A34A]">🔒</span>
                  <span>
                    {activePillar === 0
                      ? "https://demo.prajalinks.com/portal-desa-bisnis"
                      : activePillar === 1
                      ? "https://kasir.prajalinks.com/pos-cloud"
                      : "https://code.prajalinks.com/sandbox-runner"}
                  </span>
                </div>
              </div>

              {/* Toggle Mode: Desktop vs Layar HP */}
              <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    viewMode === "desktop"
                      ? "bg-white dark:bg-[#0B1426] text-[#1D5BD8] dark:text-[#60A5FA] shadow-xs"
                      : "hover:text-[#111827]"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
                    viewMode === "mobile"
                      ? "bg-white dark:bg-[#0B1426] text-[#1D5BD8] dark:text-[#60A5FA] shadow-xs"
                      : "hover:text-[#111827]"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Layar HP</span>
                </button>
              </div>
            </div>

            {/* Container Konten Simulasi */}
            <div className="p-4 sm:p-7 min-h-[500px] bg-slate-50/60 dark:bg-[#081020] flex justify-center items-start">
              {/* Jika mode Mobile dipilih, render dalam bentuk Smartphone Mockup yang rapi */}
              <div
                className={`w-full transition-all duration-300 ${
                  viewMode === "mobile"
                    ? "max-w-[360px] sm:max-w-[380px] rounded-[36px] border-[8px] border-[#1E293B] bg-white dark:bg-[#0F172A] shadow-2xl p-3 sm:p-4 overflow-hidden"
                    : "w-full"
                }`}
              >
                {/* Dynamic Island / Notch untuk Layar HP */}
                {viewMode === "mobile" && (
                  <div className="flex justify-center mb-3">
                    <span className="w-20 h-4 rounded-full bg-[#1E293B]" />
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {/* =========================================================
                      PILAR 1: WEBSITE INTERAKTIF (PORTAL DESA & BISNIS)
                  ========================================================== */}
                  {activePillar === 0 && (
                    <motion.div
                      key="pillar-0"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {/* Navigasi Sub-Tab Website */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1D5BD8] text-white">
                            <Building2 className="w-4 h-4" />
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-[#111827] dark:text-white leading-tight">
                              Portal Resmi Desa &amp; Bisnis Digital
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              Kec. Sukorejo • Melayani Transparan 24 Jam
                            </p>
                          </div>
                        </div>

                        {/* Menu Sub-Tab */}
                        <div className="flex items-center gap-1 bg-white dark:bg-[#111827] p-1 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold">
                          <button
                            onClick={() => setWebTab("beranda")}
                            className={`px-3 py-1.5 rounded-lg transition-colors ${
                              webTab === "beranda" ? "bg-[#1D5BD8] text-white" : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            Beranda
                          </button>
                          <button
                            onClick={() => setWebTab("surat")}
                            className={`px-3 py-1.5 rounded-lg transition-colors ${
                              webTab === "surat" ? "bg-[#1D5BD8] text-white" : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            Surat Mandiri
                          </button>
                          <button
                            onClick={() => setWebTab("apbdes")}
                            className={`px-3 py-1.5 rounded-lg transition-colors ${
                              webTab === "apbdes" ? "bg-[#1D5BD8] text-white" : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            APBDes
                          </button>
                        </div>
                      </div>

                      {/* 1A. Beranda Website */}
                      {webTab === "beranda" && (
                        <div className="space-y-4">
                          {/* Banner Hero Portal dengan Background Foto & Gradasi Kontras Tinggi */}
                          <div className="relative rounded-2xl overflow-hidden p-5 sm:p-7 shadow-md min-h-[220px] flex flex-col justify-center">
                            {/* Foto Asli Desa Landscape */}
                            <Image
                              src="/desa-landscape.jpg"
                              alt="Desa Digital PrajaLinks"
                              fill
                              sizes="(max-width: 768px) 100vw, 900px"
                              className="object-cover object-center"
                              loading="lazy"
                            />

                            {/* Lapisan Gradasi Gelap Kontras Tinggi agar Teks Terbaca 100% */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 pointer-events-none" />

                            {/* Konten Teks Kontras Tinggi (Pure White) */}
                            <div className="relative z-10 max-w-xl space-y-2.5">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 !text-white text-white text-xs font-bold backdrop-blur-md border border-white/20">
                                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                <span>Desa Digital &amp; Profil Bisnis Mandiri</span>
                              </span>

                              <h3 className="text-xl sm:text-2xl font-bold leading-tight !text-white text-white drop-shadow-md">
                                Portal Pelayanan Publik &amp; Keterbukaan Informasi Warga
                              </h3>

                              <p className="text-xs sm:text-sm !text-slate-100 text-slate-100 leading-relaxed drop-shadow-xs max-w-lg">
                                Urus surat pengantar dari smartphone tanpa antre, pantau anggaran dana desa secara transparan, dan nikmati kemudahan informasi digital.
                              </p>

                              <div className="pt-2 flex flex-wrap gap-2.5">
                                <button
                                  onClick={() => setWebTab("surat")}
                                  className="px-4 py-2 rounded-xl bg-[#C88A23] hover:bg-[#B47818] text-xs sm:text-sm font-bold !text-white text-white transition-colors shadow-md"
                                >
                                  Coba Buat Surat Mandiri &rarr;
                                </button>
                                <button
                                  onClick={() => setWebTab("apbdes")}
                                  className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-xs sm:text-sm font-bold !text-white text-white transition-colors backdrop-blur-md"
                                >
                                  Buka Grafik APBDes
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* 3 Kartu Keunggulan Layanan */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-3.5 shadow-xs">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950 text-[#1D5BD8] mb-2">
                                <FileText className="w-4 h-4" />
                              </span>
                              <h5 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">Surat Instan 5 Menit</h5>
                              <p className="text-[11px] text-slate-500 mt-1">Pengajuan online dari rumah dengan verifikasi NIK otomatis.</p>
                            </div>

                            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-3.5 shadow-xs">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950 text-[#C88A23] mb-2">
                                <PieChart className="w-4 h-4" />
                              </span>
                              <h5 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">Transparansi Dana</h5>
                              <p className="text-[11px] text-slate-500 mt-1">Grafik realisasi dana desa dan anggaran terbuka untuk warga.</p>
                            </div>

                            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-3.5 shadow-xs">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950 text-[#16A34A] mb-2">
                                <ShieldCheck className="w-4 h-4" />
                              </span>
                              <h5 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">SPJ &amp; Arsip Rapi</h5>
                              <p className="text-[11px] text-slate-500 mt-1">Format siap audit sesuai standar regulasi dan kearsipan resmi.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 1B. Layanan Surat Mandiri */}
                      {webTab === "surat" && (
                        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-4 sm:p-6 space-y-4">
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white">
                              Formulir Simulasi Pengajuan Surat Online Mandiri
                            </h4>
                            <p className="text-xs text-slate-500">
                              Ketik nama dan NIK Anda untuk mencoba proses pembuatan surat otomatis.
                            </p>
                          </div>

                          <form onSubmit={handleKirimSurat} className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                  Nama Pemohon
                                </label>
                                <input
                                  type="text"
                                  placeholder="Contoh: Budi Santoso"
                                  value={namaSurat}
                                  onChange={(e) => setNamaSurat(e.target.value)}
                                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1D5BD8] bg-white dark:bg-[#1E293B]"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                                  Nomor Induk Kependudukan (NIK)
                                </label>
                                <input
                                  type="text"
                                  placeholder="Contoh: 350214xxxxxxxx"
                                  value={nikSurat}
                                  onChange={(e) => setNikSurat(e.target.value)}
                                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1D5BD8] bg-white dark:bg-[#1E293B]"
                                />
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1D5BD8] hover:bg-[#1748B5] text-white text-xs font-bold transition-colors shadow-sm"
                            >
                              Kirim Pengajuan Surat
                            </button>
                          </form>

                          {suratResult && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{suratResult}</span>
                            </motion.div>
                          )}
                        </div>
                      )}

                      {/* 1C. APBDes */}
                      {webTab === "apbdes" && (
                        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-4 sm:p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white">
                                Realisasi APBDes Desa Praja Jaya Tahun 2026
                              </h4>
                              <p className="text-xs text-slate-500">Keterbukaan Anggaran Berbasis Digital</p>
                            </div>
                            <span className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full">
                              Terverifikasi
                            </span>
                          </div>

                          <div className="space-y-3 pt-2">
                            <div>
                              <div className="flex justify-between text-xs font-bold mb-1">
                                <span>Pendapatan Transfer &amp; PADes</span>
                                <span className="text-[#1D5BD8]">Rp 1.450.000.000 (92%)</span>
                              </div>
                              <div className="h-2.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#1D5BD8] rounded-full" style={{ width: "92%" }} />
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-xs font-bold mb-1">
                                <span>Pembangunan Jalan &amp; Saluran Air</span>
                                <span className="text-[#C88A23]">Rp 620.000.000 (88%)</span>
                              </div>
                              <div className="h-2.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#C88A23] rounded-full" style={{ width: "88%" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* =========================================================
                      PILAR 2: APLIKASI KASIR & OPERASIONAL BISNIS (POS)
                  ========================================================== */}
                  {activePillar === 1 && (
                    <motion.div
                      key="pillar-1"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className={viewMode === "mobile" ? "space-y-4" : "grid grid-cols-1 md:grid-cols-12 gap-5"}
                    >
                      {/* Kolom Katalog Produk */}
                      <div className={viewMode === "mobile" ? "space-y-3" : "md:col-span-7 space-y-3"}>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                            Katalog Produk UMKM
                          </h4>
                          <span className="text-[10px] sm:text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
                            Kasir Cloud Online
                          </span>
                        </div>

                        {/* Filter Kategori */}
                        <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
                          {["Semua", "Minuman", "Camilan", "Bumbu", "Kesehatan"].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setPosFilter(cat)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-colors ${
                                posFilter === cat
                                  ? "bg-[#1D5BD8] text-white"
                                  : "bg-white dark:bg-[#1E293B] border border-slate-200 text-slate-600"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>

                        {/* Grid Produk */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {filteredProducts.map((p) => (
                            <div
                              key={p.id}
                              className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-2.5 sm:p-3 flex flex-col justify-between shadow-xs hover:border-[#1D5BD8] transition-colors"
                            >
                              <div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                  {p.cat}
                                </span>
                                <p className="text-xs font-bold text-[#111827] dark:text-white leading-tight mt-0.5">
                                  {p.name}
                                </p>
                              </div>

                              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA]">
                                  Rp {p.price.toLocaleString("id-ID")}
                                </span>
                                <button
                                  onClick={() => handleAddToCart(p)}
                                  className="px-2 py-1 rounded-md bg-[#1D5BD8] hover:bg-[#1748B5] text-white text-[10.5px] font-bold transition-colors shrink-0"
                                >
                                  + Tambah
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Kolom Keranjang Transaksi & Struk */}
                      <div className={viewMode === "mobile" ? "space-y-3" : "md:col-span-5 flex flex-col justify-between"}>
                        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] p-3.5 sm:p-4 shadow-sm space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-[#111827] dark:text-white">
                              <ShoppingCart className="w-4 h-4 text-[#1D5BD8]" />
                              Keranjang Kasir
                            </span>
                            <span className="text-[11px] font-bold text-slate-500">
                              {cartItems.length} Produk
                            </span>
                          </div>

                          {/* List Item Keranjang */}
                          <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                            {cartItems.length === 0 ? (
                              <p className="text-xs text-slate-400 text-center py-4">
                                Keranjang kosong. Klik &quot;+ Tambah&quot; pada produk.
                              </p>
                            ) : (
                              cartItems.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between gap-2 text-xs py-1 border-b border-slate-100 dark:border-white/5"
                                >
                                  <div className="truncate flex-1">
                                    <p className="font-bold text-[#111827] dark:text-white truncate">
                                      {item.name}
                                    </p>
                                    <p className="text-[10px] text-slate-500">
                                      Rp {item.price.toLocaleString("id-ID")}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                      onClick={() => handleUpdateQty(item.id, -1)}
                                      className="w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-700"
                                    >
                                      <Minus className="w-2.5 h-2.5" />
                                    </button>
                                    <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                                    <button
                                      onClick={() => handleUpdateQty(item.id, 1)}
                                      className="w-5 h-5 rounded flex items-center justify-center bg-slate-100 text-slate-700"
                                    >
                                      <Plus className="w-2.5 h-2.5" />
                                    </button>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>

                          {/* Ringkasan Pembayaran */}
                          <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-2">
                            <div className="flex items-center justify-between text-xs font-bold">
                              <span className="text-slate-600 dark:text-slate-300">Total Pembayaran</span>
                              <span className="text-base font-bold text-[#1D5BD8] dark:text-[#60A5FA]">
                                Rp {totalBelanja.toLocaleString("id-ID")}
                              </span>
                            </div>

                            <button
                              disabled={cartItems.length === 0}
                              onClick={() => setCheckoutSuccess(true)}
                              className="w-full py-2.5 rounded-xl bg-[#C88A23] hover:bg-[#B47818] disabled:opacity-50 text-white text-xs font-bold transition-colors shadow-sm"
                            >
                              Proses Transaksi &amp; Cetak Struk
                            </button>

                            {checkoutSuccess && (
                              <motion.div
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold text-center"
                              >
                                ✓ Transaksi Berhasil! Struk #INV-2026-84 telah diterbitkan.
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================
                      PILAR 3: LAB TUGAS CODING & ALGORITMA
                  ========================================================== */}
                  {activePillar === 2 && (
                    <motion.div
                      key="pillar-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {/* Sub-header Lab Coding */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white">
                            <Code2 className="w-4 h-4" />
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-[#111827] dark:text-white leading-tight">
                              Studio Eksekusi Kode Tugas &amp; Skripsi IT
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              Kode Rapi • Bebas Plagiasi • Ada Penjelasan Alur Lengkap
                            </p>
                          </div>
                        </div>

                        {/* Switcher Bahasa */}
                        <div className="flex items-center gap-1 bg-white dark:bg-[#111827] p-1 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold">
                          <button
                            onClick={() => setSelectedLang("python")}
                            className={`px-3 py-1.5 rounded-lg transition-colors ${
                              selectedLang === "python" ? "bg-[#1D5BD8] text-white" : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            Python (ML)
                          </button>
                          <button
                            onClick={() => setSelectedLang("web")}
                            className={`px-3 py-1.5 rounded-lg transition-colors ${
                              selectedLang === "web" ? "bg-[#1D5BD8] text-white" : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            PHP (Laravel)
                          </button>
                          <button
                            onClick={() => setSelectedLang("frontend")}
                            className={`px-3 py-1.5 rounded-lg transition-colors ${
                              selectedLang === "frontend" ? "bg-[#1D5BD8] text-white" : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            React (Frontend)
                          </button>
                        </div>
                      </div>

                      {/* Code Editor Frame */}
                      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#1E1E1E] text-white shadow-xl">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-black/40 text-xs font-mono">
                          <div className="flex items-center gap-2 text-slate-300">
                            <Terminal className="w-3.5 h-3.5 text-sky-400" />
                            <span>{codingLabData[selectedLang].file}</span>
                            <span className="text-[10px] text-slate-500">
                              ({codingLabData[selectedLang].runtime})
                            </span>
                          </div>

                          <button
                            disabled={isCompiling}
                            onClick={handleRunCode}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 text-white text-[11px] font-bold transition-all shadow-xs"
                          >
                            {isCompiling ? (
                              <RefreshCw className="w-3 h-3 animate-spin" />
                            ) : (
                              <Play className="w-3 h-3 fill-current" />
                            )}
                            <span>{isCompiling ? "Menjalankan..." : "Jalankan Kode"}</span>
                          </button>
                        </div>

                        {/* Teks Kode Program */}
                        <div className="p-4 font-mono text-[11px] leading-[1.65] text-slate-200 overflow-x-auto max-h-[170px]">
                          <pre>{codingLabData[selectedLang].code}</pre>
                        </div>

                        {/* Terminal Output */}
                        <div className="p-3 bg-[#181818] border-t border-black/50 font-mono text-[10.5px] leading-relaxed">
                          <div className="flex items-center justify-between text-slate-500 text-[9.5px] mb-1">
                            <span>TERMINAL OUTPUT</span>
                            <span className="text-emerald-400 font-bold">100% BEBAS ERROR</span>
                          </div>
                          <div className="space-y-0.5 text-sky-300">
                            {codingLabData[selectedLang].terminal.map((line, idx) => (
                              <p
                                key={idx}
                                className={idx >= 3 ? "text-emerald-400 font-bold" : "text-slate-300"}
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Bar: CTA Konsultasi WhatsApp */}
            <div className="px-5 sm:px-7 py-4 bg-white dark:bg-[#0B1426] border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex h-2 w-2 rounded-full bg-[#16A34A]" />
                <span>Semua simulasi di atas dibuat dengan standar kode asli PrajaLinks.</span>
              </div>

              <a
                href={getWhatsAppLink(
                  activePillar === 0
                    ? "Halo PrajaLinks, saya tertarik dengan pembuatan Website Portal Desa / Bisnis seperti di demo."
                    : activePillar === 1
                    ? "Halo PrajaLinks, saya tertarik dengan pembuatan Aplikasi Kasir & Sistem Toko seperti di demo."
                    : "Halo PrajaLinks, saya ingin konsultasi pengerjaan Tugas Coding / Skripsi IT."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D5BD8] hover:bg-[#1748B5] text-white text-xs font-bold transition-all shadow-md hover:scale-105"
              >
                <span>Konsultasikan Kebutuhan Anda</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
