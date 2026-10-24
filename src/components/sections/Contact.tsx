"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    needCategory: "Pemerintahan Desa (Website Desa / SID / Surat)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Halo PrajaLinks, perkenalkan nama saya ${formState.name}.
Kebutuhan: ${formState.needCategory}
Pesan: ${formState.message}`;

    const waUrl = getWhatsAppLink(formattedMessage);
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="kontak"
      ref={containerRef}
      className="scroll-mt-20 py-14 sm:py-20 pb-28 sm:pb-32 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#0B1120] border-t border-[#E5E7EB] dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Kolom Kiri: Informasi Kontak Terstruktur & Rapi */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: smoothEase }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] text-xs font-bold uppercase tracking-wider mb-3.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hubungi Kami</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#111827] dark:text-white tracking-tight mb-3 leading-snug">
                Mari Diskusikan Proyek Website &amp; Aplikasi Anda
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] dark:text-slate-300 leading-relaxed mb-6 font-medium max-w-xl">
                Kirim pesan melalui formulir konsultasi cepat atau hubungi kami langsung via WhatsApp dan email. Kami siap melayani konsultasi online 24 jam nonstop untuk seluruh kota di Indonesia maupun temu langsung di Ponorogo dan sekitarnya.
              </p>

              {/* Grid 2x2 Kontak Rapi & Compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                {/* WhatsApp */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 hover:border-[#1D5BD8] transition-colors group flex items-start gap-3 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-md bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0 group-hover:bg-[#1D5BD8] group-hover:text-white transition-colors">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[#6B7280] dark:text-slate-400 uppercase tracking-wider block">
                      WhatsApp Resmi
                    </span>
                    <span className="text-sm font-bold text-[#111827] dark:text-white group-hover:text-[#1D5BD8] transition-colors truncate block">
                      {siteData.brand.waDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteData.brand.email}`}
                  className="p-3.5 rounded-lg bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 hover:border-[#1D5BD8] transition-colors group flex items-start gap-3 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-md bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0 group-hover:bg-[#1D5BD8] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[#6B7280] dark:text-slate-400 uppercase tracking-wider block">
                      Alamat Email
                    </span>
                    <span className="text-sm font-bold text-[#111827] dark:text-white group-hover:text-[#1D5BD8] transition-colors truncate block">
                      {siteData.brand.email}
                    </span>
                  </div>
                </a>

                {/* Lokasi Studio */}
                <div className="p-3.5 rounded-lg bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 flex items-start gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-md bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[#6B7280] dark:text-slate-400 uppercase tracking-wider block">
                      Lokasi Studio
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111827] dark:text-white leading-snug block">
                      {siteData.brand.address}
                    </span>
                  </div>
                </div>

                {/* Jam Layanan */}
                <div className="p-3.5 rounded-lg bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 flex items-start gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-md bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[#6B7280] dark:text-slate-400 uppercase tracking-wider block">
                      Jam Layanan
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111827] dark:text-white leading-snug block">
                      {siteData.brand.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram Row */}
              <a
                href={siteData.brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 hover:border-[#1D5BD8] transition-colors flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#111827] dark:text-white shadow-sm group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#C88A23]/10 text-[#C88A23] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <span>Instagram: <strong>prajaLinks ({siteData.brand.instagramDisplay})</strong></span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#1D5BD8] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan: Formulir Konsultasi Cepat (Rapi & Proporsional) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1, ease: smoothEase }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-7 rounded-lg bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E5E7EB] dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C88A23]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-white">
                    Formulir Konsultasi Cepat
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-[#1D5BD8] dark:text-[#60A5FA] bg-[#1D5BD8]/10 px-2 py-0.5 rounded">
                  Respons Cepat
                </span>
              </div>

              {submitted && (
                <div className="mb-4 p-3 rounded-md bg-[#1D5BD8]/10 border border-[#1D5BD8]/20 text-[#1D5BD8] dark:text-[#60A5FA] text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Formulir berhasil diteruskan ke WhatsApp! Jendela chat telah dibuka.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1"
                  >
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Contoh: Pak Budi (Desa Praja) / Bu Ratna"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F9FAFB] dark:bg-[#0B1120] border border-[#D1D5DB] dark:border-white/15 text-[#111827] dark:text-white text-sm font-medium focus:outline-none focus:border-[#1D5BD8] focus:bg-white focus:ring-1 focus:ring-[#1D5BD8] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1"
                  >
                    Kategori Kebutuhan
                  </label>
                  <select
                    id="contact-category"
                    value={formState.needCategory}
                    onChange={(e) =>
                      setFormState({ ...formState, needCategory: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F9FAFB] dark:bg-[#0B1120] border border-[#D1D5DB] dark:border-white/15 text-[#111827] dark:text-white text-sm font-medium focus:outline-none focus:border-[#1D5BD8] focus:bg-white focus:ring-1 focus:ring-[#1D5BD8] transition-all"
                  >
                    <option value="Pemerintahan Desa (Website Desa / SID / Surat)">
                      Pemerintahan Desa (Website Desa / SID / Surat)
                    </option>
                    <option value="Bisnis / UMKM / Company Profile">
                      Bisnis / UMKM / Company Profile
                    </option>
                    <option value="Toko Online Katalog WhatsApp">
                      Toko Online Katalog WhatsApp
                    </option>
                    <option value="Jasa Pembuatan Tugas Coding (Mahasiswa / Siswa Online)">
                      Jasa Pembuatan Tugas Coding (Mahasiswa / Siswa Online)
                    </option>
                    <option value="Website Sekolah / Yayasan">
                      Website Sekolah / Yayasan
                    </option>
                    <option value="Aplikasi Web & Sistem Informasi Kustom">
                      Aplikasi Web & Sistem Informasi Kustom
                    </option>
                    <option value="Aplikasi Mobile (Android & iOS)">
                      Aplikasi Mobile (Android & iOS)
                    </option>
                    <option value="Pemeliharaan / Perbaikan Web">
                      Pemeliharaan / Perbaikan Web
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-[#374151] dark:text-slate-200 mb-1"
                  >
                    Catatan Kebutuhan / Pertanyaan
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Tuliskan gambaran fitur yang diinginkan atau jadwal konsultasi yang diharapkan..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#F9FAFB] dark:bg-[#0B1120] border border-[#D1D5DB] dark:border-white/15 text-[#111827] dark:text-white text-sm font-medium focus:outline-none focus:border-[#1D5BD8] focus:bg-white focus:ring-1 focus:ring-[#1D5BD8] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#1D5BD8] hover:bg-[#1748B5] text-white font-bold text-sm transition-colors duration-150 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke WhatsApp Studio</span>
                </button>

                <p className="text-[11px] text-[#6B7280] dark:text-slate-400 text-center font-medium pt-0.5">
                  Formulir ini secara otomatis menyusun draf pesan WhatsApp yang siap Anda kirim dalam 1 klik.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
