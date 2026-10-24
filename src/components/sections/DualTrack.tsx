"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Landmark,
  Store,
  CheckCircle,
  ArrowRight,
  FileCheck2,
  TrendingUp,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const DualTrack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const { village, business } = siteData.dualTrack;

  return (
    <section
      id="jalur"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="01"
          eyebrow="Segmentasi Khusus"
          title="Dua Jalur Spesialisasi, Satu Standar Kualitas Tinggi"
          desc="Kami memahami bahwa kebutuhan tata kelola aparatur desa sangat berbeda dengan kebutuhan akselerasi omzet para pelaku bisnis. Pilih jalur yang sesuai dengan misi Anda."
        />

        {/* Dual Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Panel 1: Pemerintahan Desa (Aksen Biru Resmi) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="rounded-[8px] p-7 sm:p-9 flex flex-col justify-between border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#111827] shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-[6px] bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA] uppercase tracking-wider block">
                      {village.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white">
                      Desa &amp; Kelurahan
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-[6px] text-xs font-bold bg-[#FAF9F6] dark:bg-white/5 text-[#374151] dark:text-slate-200 border border-[#E5E7EB] dark:border-white/10">
                  {village.badge}
                </span>
              </div>

              <p className="text-[#374151] dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6 font-medium">
                {village.description}
              </p>

              {/* Sample Output Highlight */}
              <div className="mb-6 p-4.5 rounded-[6px] bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-white/5">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#1D5BD8] dark:text-[#60A5FA] mb-1.5">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Hasil Proyek Nyata:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#111827] dark:text-slate-100 font-semibold leading-relaxed">
                  {village.sampleOutput}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3.5 mb-6">
                {village.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#111827] dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 mt-0.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-[#E5E7EB] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs sm:text-[13px] font-medium text-[#4B5563] dark:text-slate-300">
                Kuitansi &amp; SPJ Resmi Desa Siap Diterbitkan
              </span>
              <a
                href={getWhatsAppLink("Halo PrajaLinks, kami dari pihak Pemerintahan Desa ingin berkonsultasi mengenai pembuatan website desa dan sistem pelayanan surat.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-4 font-bold"
              >
                <span>Konsultasi Web Desa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Panel 2: Bisnis & UMKM (Aksen Emas Elegan) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            className="rounded-[8px] p-7 sm:p-9 flex flex-col justify-between border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#111827] shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-[6px] bg-[#C88A23]/10 text-[#C88A23] dark:text-[#F59E0B] flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C88A23] dark:text-[#F59E0B] uppercase tracking-wider block">
                      {business.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white">
                      Bisnis, UMKM &amp; Coding
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-[6px] text-xs font-bold bg-[#FAF9F6] dark:bg-white/5 text-[#374151] dark:text-slate-200 border border-[#E5E7EB] dark:border-white/10">
                  {business.badge}
                </span>
              </div>

              <p className="text-[#374151] dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6 font-medium">
                {business.description}
              </p>

              {/* Sample Output Highlight */}
              <div className="mb-6 p-4.5 rounded-[6px] bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-white/5">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#C88A23] dark:text-[#F59E0B] mb-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>Hasil Proyek Nyata:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#111827] dark:text-slate-100 font-semibold leading-relaxed">
                  {business.sampleOutput}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3.5 mb-6">
                {business.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C88A23] dark:text-[#F59E0B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#111827] dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 mt-0.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-[#E5E7EB] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs sm:text-[13px] font-medium text-[#4B5563] dark:text-slate-300">
                Konversi Penjualan &amp; Kredibilitas Usaha
              </span>
              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi mengenai pembuatan website bisnis / company profile / tugas coding.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-4 font-bold"
              >
                <span>Konsultasi Web Bisnis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
