"use client";

import { siteData } from "@/data/site";

export const Marquee = () => {
  const { marqueeTech, marqueeServices } = siteData;
  const combinedItems = [...marqueeTech, ...marqueeServices];
  // Duplikasi 2x agar animasi loop translateX(-50%) berjalan mulus tanpa jeda
  const items = [...combinedItems, ...combinedItems];

  return (
    <div
      aria-label="Teknologi dan Solusi Layanan PrajaLinks"
      className="py-3.5 border-y border-[#E5E7EB] dark:border-white/10 bg-[#FAF9F6] dark:bg-[#0B1120] overflow-hidden select-none relative"
    >
      {/* Efek pudar halus di tepi kiri dan kanan agar masuk/keluar mulus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF9F6] dark:from-[#0B1120] to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF9F6] dark:from-[#0B1120] to-transparent z-10"
      />

      <div className="flex overflow-hidden">
        <div
          className="flex shrink-0 gap-6 sm:gap-8 animate-marquee items-center"
          style={{ willChange: "transform" }}
        >
          {items.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center gap-3 sm:gap-4 text-xs sm:text-[13px] font-bold text-[#111827] dark:text-slate-200 whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D5BD8] opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
