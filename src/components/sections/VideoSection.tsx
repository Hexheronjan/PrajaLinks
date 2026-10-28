import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Check,
  ArrowRight,
  MessageCircle,
  Bell,
  TrendingUp,
  Home,
  Search,
  User,
  ShoppingBag,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

/* ------------------------------------------------------------------
   Gelombang animasi (SVG berulang, bergeser pelan tanpa putus)
------------------------------------------------------------------- */
const WAVE_PATH =
  "M0,40 C240,90 480,90 720,40 C960,-10 1200,-10 1440,40 L1440,100 L0,100 Z";

const Wave = ({ position }: { position: "top" | "bottom" }) => (
  <div
    aria-hidden="true"
    className={`absolute left-0 right-0 h-16 sm:h-24 overflow-hidden pointer-events-none ${
      position === "top" ? "top-0 rotate-180" : "bottom-0"
    }`}
  >
    {/* Lapisan belakang (lebih transparan, arah berlawanan) */}
    <motion.div
      className="absolute inset-0 flex w-[200%] opacity-40"
      animate={{ x: ["-50%", "0%"] }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
    >
      {[0, 1].map((i) => (
        <svg key={i} viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-1/2 h-full">
          <path d={WAVE_PATH} className="fill-[#FAF9F6] dark:fill-[#0B1120]" />
        </svg>
      ))}
    </motion.div>
    {/* Lapisan depan */}
    <motion.div
      className="absolute inset-0 flex w-[200%] translate-y-2"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      {[0, 1].map((i) => (
        <svg key={i} viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-1/2 h-full">
          <path d={WAVE_PATH} className="fill-[#FAF9F6] dark:fill-[#0B1120]" />
        </svg>
      ))}
    </motion.div>
  </div>
);

/* ------------------------------------------------------------------
   Visual 1: mockup website (dibuat dengan kode, bukan screenshot)
------------------------------------------------------------------- */
const WebsiteVisual = () => (
  <div className="relative">
    <div className="rounded-lg border border-[#E5E7EB] bg-white overflow-hidden shadow-sm">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F3F4F6] border-b border-[#E5E7EB]">
        <span className="w-2 h-2 rounded-full bg-[#F87171]" />
        <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
        <span className="w-2 h-2 rounded-full bg-[#34D399]" />
        <span className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[9px] font-mono text-[#6B7280] truncate">
          https://usahaanda.com
        </span>
      </div>

      <div className="p-3 space-y-3">
        {/* Navbar mini */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-[#1D5BD8]" />
            <span className="w-10 h-1.5 rounded bg-[#111827]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-1 rounded bg-[#D1D5DB]" />
            <span className="w-5 h-1 rounded bg-[#D1D5DB]" />
            <span className="w-8 h-3 rounded-sm bg-[#C88A23]" />
          </div>
        </div>

        {/* Hero mini */}
        <div className="rounded-md bg-[#EFF6FF] p-3 space-y-1.5">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block h-2 rounded bg-[#111827]"
          />
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "55%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="block h-2 rounded bg-[#111827]"
          />
          <span className="block w-3/4 h-1 rounded bg-[#93C5FD]" />
          <span className="inline-block mt-1 w-14 h-3.5 rounded-sm bg-[#1D5BD8]" />
        </div>

        {/* Katalog produk mini */}
        <div className="grid grid-cols-3 gap-1.5">
          {["bg-[#DBEAFE]", "bg-[#FEF3C7]", "bg-[#E0E7FF]"].map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
              className="rounded border border-[#E5E7EB] p-1"
            >
              <div className={`h-8 rounded-sm ${c}`} />
              <span className="block mt-1 w-3/4 h-1 rounded bg-[#9CA3AF]" />
              <span className="block mt-0.5 w-1/2 h-1 rounded bg-[#1D5BD8]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Badge melayang */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-2 -bottom-3 flex items-center gap-1.5 rounded-md bg-white border border-[#E5E7EB] px-2.5 py-1.5 shadow-md"
    >
      <TrendingUp className="w-3.5 h-3.5 text-[#16A34A]" />
      <span className="text-[10px] font-bold text-[#111827]">Muncul di Google</span>
    </motion.div>
  </div>
);

/* ------------------------------------------------------------------
   Visual 2: mockup aplikasi di HP (dibuat dengan kode)
------------------------------------------------------------------- */
const AppVisual = () => (
  <div className="relative flex justify-center py-1">
    <div className="relative w-[148px] h-[250px] rounded-[24px] border-[5px] border-[#111827] bg-white overflow-hidden shadow-md">
      {/* Notch */}
      <span className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-[#111827] z-10" />

      {/* Header aplikasi */}
      <div className="bg-[#1D5BD8] px-3 pt-5 pb-3 text-white">
        <p className="text-[8px] opacity-80 text-white">Selamat datang,</p>
        <p className="text-[11px] font-bold text-white">Toko Berkah Jaya</p>
        <div className="mt-2 rounded-md bg-white/15 px-2 py-1.5">
          <p className="text-[7px] opacity-80 text-white">Omzet hari ini</p>
          <p className="text-[12px] font-bold text-white">Rp 2.450.000</p>
        </div>
      </div>

      {/* Daftar pesanan */}
      <div className="p-2 space-y-1.5">
        {[
          { n: "Pesanan #1024", s: "Dikirim", c: "text-[#16A34A] bg-[#DCFCE7]" },
          { n: "Pesanan #1023", s: "Diproses", c: "text-[#B45309] bg-[#FEF3C7]" },
          { n: "Pesanan #1022", s: "Selesai", c: "text-[#1D5BD8] bg-[#DBEAFE]" },
        ].map((o, i) => (
          <motion.div
            key={o.n}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.12 }}
            className="flex items-center justify-between rounded border border-[#E5E7EB] px-1.5 py-1"
          >
            <div className="flex items-center gap-1">
              <ShoppingBag className="w-2.5 h-2.5 text-[#6B7280]" />
              <span className="text-[8px] font-semibold text-[#111827]">{o.n}</span>
            </div>
            <span className={`text-[7px] font-bold px-1 rounded ${o.c}`}>{o.s}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-around border-t border-[#E5E7EB] bg-white py-1.5">
        <Home className="w-3 h-3 text-[#1D5BD8]" />
        <Search className="w-3 h-3 text-[#9CA3AF]" />
        <ShoppingBag className="w-3 h-3 text-[#9CA3AF]" />
        <User className="w-3 h-3 text-[#9CA3AF]" />
      </div>
    </div>

    {/* Notifikasi melayang */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-1 top-8 flex items-center gap-1.5 rounded-md bg-white border border-[#E5E7EB] px-2 py-1.5 shadow-md"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C88A23]/15">
        <Bell className="w-3 h-3 text-[#C88A23]" />
      </span>
      <div>
        <p className="text-[9px] font-bold text-[#111827] leading-tight">Pesanan baru!</p>
        <p className="text-[8px] text-[#6B7280] leading-tight">baru saja</p>
      </div>
    </motion.div>
  </div>
);

/* ------------------------------------------------------------------
   Visual 3: editor kode tugas (diketik baris demi baris)
------------------------------------------------------------------- */
const codeLines: React.ReactNode[] = [
  <span key="1" className="text-[#6A9955]"># prediksi_nilai.py — Tugas Machine Learning</span>,
  <span key="2"><span className="text-[#C586C0]">import</span> pandas <span className="text-[#C586C0]">as</span> pd</span>,
  <span key="3"><span className="text-[#C586C0]">from</span> sklearn.linear_model <span className="text-[#C586C0]">import</span> LinearRegression</span>,
  <span key="4">&nbsp;</span>,
  <span key="5">df = pd.read_csv(<span className="text-[#CE9178]">&quot;nilai_mahasiswa.csv&quot;</span>)</span>,
  <span key="6">X = df[[<span className="text-[#CE9178]">&quot;jam_belajar&quot;</span>, <span className="text-[#CE9178]">&quot;kehadiran&quot;</span>]]</span>,
  <span key="7">y = df[<span className="text-[#CE9178]">&quot;nilai_akhir&quot;</span>]</span>,
  <span key="8">&nbsp;</span>,
  <span key="9">model = LinearRegression().fit(X, y)</span>,
  <span key="10"><span className="text-[#DCDCAA]">print</span>(<span className="text-[#CE9178]">f&quot;Skor R²: </span>{"{"}model.score(X, y):.2f{"}"}<span className="text-[#CE9178]">&quot;</span>)</span>,
];

const CodeVisual = () => {
  const shownCode = codeLines.length;
  const showRun = true;
  const showResult = true;

  return (
    <div className="rounded-lg overflow-hidden border border-[#1F2937] bg-[#1E1E1E] shadow-sm">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#252526] border-b border-black/40">
        <span className="text-[10px] font-mono text-[#D4D4D4]">prediksi_nilai.py</span>
        <span className="text-[9px] font-mono text-[#858585]">Python 3.11</span>
      </div>
      <div className="px-3 py-2 font-mono text-[9.5px] leading-[1.55] text-[#D4D4D4] h-[150px] overflow-hidden">
        {codeLines.slice(0, shownCode).map((line, i) => (
          <div key={i} className="flex gap-2 whitespace-nowrap">
            <span className="w-3 text-right text-[#5A5A5A] select-none">{i + 1}</span>
            {line}
          </div>
        ))}
        {shownCode < codeLines.length && (
          <span className="inline-block ml-5 w-1.5 h-3 bg-[#D4D4D4] animate-pulse align-middle" />
        )}
      </div>
      <div className="px-3 py-2 bg-[#181818] border-t border-black/40 font-mono text-[9.5px] h-[44px]">
        {showRun && <p className="text-[#9CDCFE]">$ python prediksi_nilai.py</p>}
        {showResult && <p className="text-[#4EC9B0]">Skor R²: 0.87</p>}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   Data 3 layanan
------------------------------------------------------------------- */
const services = [
  {
    no: "01",
    icon: Globe,
    title: "Pembuatan Website",
    desc: "Biar usaha Anda mudah ditemukan di Google dan terlihat profesional di mata calon pelanggan.",
    points: ["Company profile & toko online", "Tampil rapi di HP dan laptop", "Domain, hosting & SSL disiapkan"],
    visual: <WebsiteVisual />,
    wa: "Halo PrajaLinks, saya ingin konsultasi pembuatan website untuk usaha saya.",
  },
  {
    no: "02",
    icon: Smartphone,
    title: "Pembuatan Aplikasi",
    desc: "Kelola pesanan, stok, pelanggan, dan laporan dalam satu aplikasi yang dibuat khusus untuk Anda.",
    points: ["Aplikasi Android & iOS", "Sistem informasi berbasis web", "Dashboard admin & laporan"],
    visual: <AppVisual />,
    wa: "Halo PrajaLinks, saya ingin konsultasi pembuatan aplikasi mobile / sistem informasi.",
  },
  {
    no: "03",
    icon: Code2,
    title: "Jasa Tugas Coding",
    desc: "Tugas pemrograman dikerjakan rapi, bisa dijalankan, dan dijelaskan sampai Anda paham alurnya.",
    points: ["Python, PHP, Java, C++, JavaScript", "Disertai penjelasan kode", "Melayani online seluruh Indonesia"],
    visual: <CodeVisual />,
    wa: "Halo PrajaLinks, saya ingin konsultasi pengerjaan tugas coding.",
  },
];

/* ------------------------------------------------------------------
   Section utama
------------------------------------------------------------------- */
export const VideoSection = () => {
  return (
    <section
      id="go-digital"
      className="relative overflow-hidden bg-[#0F1E3C] dark:bg-[#0A152E] pt-28 pb-32 sm:pt-36 sm:pb-40"
    >
      <Wave position="top" />

      {/* Pola titik halus sebagai tekstur latar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#F2C46D]"
          >
            <span className="h-px w-6 bg-[#F2C46D]/60" />
            Era Digital
            <span className="h-px w-6 bg-[#F2C46D]/60" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-3 text-2xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] text-white tracking-tight"
          >
            Sudah Saatnya Usaha &amp; Ide Anda <span className="text-[#F2C46D]">Go Digital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-[#CBD5E1] font-medium"
          >
            Pelanggan sekarang mencari lewat Google dan smartphone. Kami bantu wujudkan website,
            aplikasi, dan tugas coding Anda, dikerjakan rapi dan bisa dipesan dari kota mana pun di Indonesia.
          </motion.p>
        </div>

        {/* 3 kartu layanan, muncul bergantian saat discroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.no}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col rounded-xl bg-white dark:bg-[#111827] border border-white/10 p-5 sm:p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1.5 ${
                  idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Visual */}
                <div className="rounded-lg bg-[#F8FAFC] dark:bg-[#0B1120] border border-[#E5E7EB] dark:border-white/10 p-4 min-h-[250px] flex items-center justify-center">
                  <div className="w-full max-w-[300px]">{s.visual}</div>
                </div>

                {/* Teks */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA]">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="block font-mono text-[11px] font-bold text-[#C88A23]">{s.no}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#374151] dark:text-slate-300 font-medium">
                  {s.desc}
                </p>

                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-[#111827] dark:text-slate-100">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1D5BD8] text-white shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink(s.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#1D5BD8] dark:text-[#60A5FA]"
                >
                  <span className="border-b-2 border-transparent group-hover:border-current transition-colors">
                    Mulai konsultasi
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Ajakan bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <p className="text-sm sm:text-base font-semibold text-[#E2E8F0]">
            Belum yakin butuh yang mana? Ceritakan kebutuhan Anda, kami bantu pilihkan.
          </p>
          <a
            href={getWhatsAppLink("Halo PrajaLinks, saya ingin go digital tapi masih bingung butuh website, aplikasi, atau yang lain. Boleh dibantu?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#C88A23] hover:bg-[#B47818] px-5 py-2.5 text-sm font-bold text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Tanya Gratis
          </a>
        </motion.div>
      </div>

      <Wave position="bottom" />
    </section>
  );
};
