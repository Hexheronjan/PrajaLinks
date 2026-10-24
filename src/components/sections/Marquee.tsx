"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteData } from "@/data/site";

export const Marquee = () => {
  const { marqueeTech, marqueeServices } = siteData;

  // Duplikasi 2x agar animasi loop translateX(-50%) berjalan mulus tanpa jeda
  const techRow = [...marqueeTech, ...marqueeTech];
  const servicesRow = [...marqueeServices, ...marqueeServices];

  return (
    <div
      aria-label="Teknologi dan Solusi Layanan PrajaLinks"
      className="py-4 sm:py-5 border-y border-[#E2E8F0] dark:border-white/10 bg-[#EEF4FF]/80 dark:bg-[#0B1426] overflow-hidden select-none space-y-2.5 sm:space-y-3 relative"
    >
      {/* Efek gradasi pudar halus di ujung kiri dan kanan (Edge Fade) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#EEF4FF] dark:from-[#0B1426] to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#EEF4FF] dark:from-[#0B1426] to-transparent z-10"
      />

      {/* Baris 1: Teknologi Stack (Jalan Otomatis ke Kiri) */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-2.5 sm:gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 34,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {techRow.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#DCE4F0] dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] whitespace-nowrap transition-transform hover:scale-105"
            >
              <span className="font-mono text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA] select-none">
                &gt;_
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-[#111827] dark:text-slate-100">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Baris 2: Layanan & Solusi (Jalan Otomatis Berlawanan Arah / ke Kanan) */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-2.5 sm:gap-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 38,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {servicesRow.map((service, idx) => (
            <div
              key={`${service}-${idx}`}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1E293B] border border-[#DCE4F0] dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] whitespace-nowrap transition-transform hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold text-[#111827] dark:text-slate-100">
                {service}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
