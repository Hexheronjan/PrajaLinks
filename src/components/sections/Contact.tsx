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
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    needCategory: "Pemerintahan Desa",
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
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#1D5BD8] dark:text-[#8DB8FF] text-xs font-bold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hubungi Kami</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">
                Mari Diskusikan Proyek Website & Aplikasi Anda
              </h2>

              <p className="text-sm text-slate-600 dark:text-[#B9C6E2] leading-relaxed mb-8 font-body">
                Kirim pesan melalui formulir singkat di samping atau hubungi kami
                langsung via WhatsApp dan email. Kami siap melayani konsultasi
                online 24 jam nonstop maupun temu langsung di Ponorogo dan sekitarnya.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 text-[#1D5BD8] dark:text-[#8DB8FF] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      WhatsApp Resmi
                    </h4>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                    >
                      {siteData.brand.waDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-[#0EA5E9] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Alamat Email
                    </h4>
                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {siteData.brand.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 text-[#F28C00] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Lokasi Studio
                    </h4>
                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {siteData.brand.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Jam Kerja Operasional
                    </h4>
                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {siteData.brand.workingHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-500/15 text-pink-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Instagram Resmi
                    </h4>
                    <a
                      href={siteData.brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-pink-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>prajaLinks ({siteData.brand.instagramDisplay})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Form routing to WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  Formulir Konsultasi Cepat
                </h3>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Formulir berhasil diteruskan ke WhatsApp! Jendela chat telah dibuka.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A1228] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Kategori Kebutuhan
                  </label>
                  <select
                    id="contact-category"
                    value={formState.needCategory}
                    onChange={(e) =>
                      setFormState({ ...formState, needCategory: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A1228] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
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
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Catatan Kebutuhan / Pertanyaan
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tuliskan gambaran fitur yang diinginkan atau jadwal konsultasi yang diharapkan..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0A1228] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#1D5BD8] hover:bg-[#1748B5] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>Kirim Pesan ke WhatsApp Studio</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
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
