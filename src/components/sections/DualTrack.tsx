"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Landmark,
  Store,
  CheckCircle,
  ArrowRight,
  FileCheck2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const DualTrack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [hoveredTrack, setHoveredTrack] = useState<"village" | "business" | null>(null);

  const { village, business } = siteData.dualTrack;

  return (
    <section
      id="jalur"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="01"
          eyebrow={"Segmentasi Khusus"}
          title={"Dua Jalur Spesialisasi, Satu Standar Kualitas Tinggi"}
          desc={"Kami memahami bahwa kebutuhan tata kelola aparatur desa sangat berbeda dengan kebutuhan akselerasi omzet para pelaku bisnis. Pilih jalur yang sesuai dengan misi Anda."}
        />

        {/* Dual Panels: Left enters from LEFT, Right enters from RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Panel 1: Pemerintahan Desa (Enters from LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: smoothEase }}
            onMouseEnter={() => setHoveredTrack("village")}
            onMouseLeave={() => setHoveredTrack(null)}
            className={`relative rounded-xl p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between border ${
              hoveredTrack === "village"
                ? "bg-[#FFFFFF] dark:bg-[#0F1B3A] border-emerald-500/50 shadow-md scale-[1.01]"
                : hoveredTrack === "business"
                ? "bg-slate-100/60 dark:bg-[#0C1631] border-slate-200 dark:border-white/5 opacity-85"
                : "bg-[#FFFFFF] dark:bg-[#0F1B3A] border-slate-200 dark:border-white/10 shadow-sm"
            }`}
          >
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                      {village.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      Desa & Kelurahan
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                  {village.badge}
                </span>
              </div>

              <p className="text-slate-600 dark:text-[#B9C6E2] text-sm sm:text-base leading-relaxed mb-6">
                {village.description}
              </p>

              {/* Sample Output Highlight */}
              <div className="mb-6 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Hasil Proyek Nyata:</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  {village.sampleOutput}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-4 mb-8">
                {village.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-[#B9C6E2] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-[#B9C6E2]">
                Kuitansi & SPJ Resmi Desa Siap Diterbitkan
              </span>
              <a
                href={getWhatsAppLink("Halo PrajaLinks, kami dari pihak Pemerintahan Desa ingin berkonsultasi mengenai pembuatan website desa dan sistem pelayanan surat.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105"
              >
                <span>Konsultasi Web Desa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Panel 2: Bisnis & UMKM (Enters from RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: smoothEase }}
            onMouseEnter={() => setHoveredTrack("business")}
            onMouseLeave={() => setHoveredTrack(null)}
            className={`relative rounded-xl p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between border ${
              hoveredTrack === "business"
                ? "bg-[#FFFFFF] dark:bg-[#0F1B3A] border-blue-500/50 shadow-md scale-[1.01]"
                : hoveredTrack === "village"
                ? "bg-slate-100/60 dark:bg-[#0C1631] border-slate-200 dark:border-white/5 opacity-85"
                : "bg-[#FFFFFF] dark:bg-[#0F1B3A] border-slate-200 dark:border-white/10 shadow-sm"
            }`}
          >
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/15 text-[#1D5BD8] dark:text-[#8DB8FF] flex items-center justify-center">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1D5BD8] dark:text-[#8DB8FF] uppercase tracking-wider block">
                      {business.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      Bisnis, UMKM & Sekolah
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-[#1D5BD8] dark:text-[#8DB8FF] border border-blue-500/20">
                  {business.badge}
                </span>
              </div>

              <p className="text-slate-600 dark:text-[#B9C6E2] text-sm sm:text-base leading-relaxed mb-6">
                {business.description}
              </p>

              {/* Sample Output Highlight */}
              <div className="mb-6 p-4 rounded-lg bg-blue-500/5 border border-blue-500/15">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1D5BD8] dark:text-[#8DB8FF] mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Hasil Proyek Nyata:</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  {business.sampleOutput}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-4 mb-8">
                {business.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-[#1D5BD8] dark:text-[#8DB8FF] flex items-center justify-center shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-[#B9C6E2] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-[#B9C6E2]">
                Konversi Penjualan & Kredibilitas Usaha
              </span>
              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi mengenai pembuatan website bisnis / company profile / toko online.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D5BD8] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-105"
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
