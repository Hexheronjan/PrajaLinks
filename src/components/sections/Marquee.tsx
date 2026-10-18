"use client";

import { siteData } from "@/data/site";
import { Sparkles, Terminal } from "lucide-react";

export const Marquee = () => {
  const { marqueeTech, marqueeServices } = siteData;

  // Duplicate arrays for seamless infinite loop
  const techItems = [...marqueeTech, ...marqueeTech, ...marqueeTech];
  const serviceItems = [...marqueeServices, ...marqueeServices, ...marqueeServices];

  return (
    <section className="py-10 border-y border-slate-200 dark:border-white/10 bg-[#EAF1FF] dark:bg-[#0C1631] overflow-hidden relative">
      {/* Fade tepi kiri dan kanan agar teks masuk/keluar halus */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#EAF1FF] dark:from-[#0C1631] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#EAF1FF] dark:from-[#0C1631] to-transparent z-10 pointer-events-none" />

      <div className="space-y-4">
        {/* Row 1: Left-to-Right movement, pauses on hover (Tech Stack) */}
        <div className="group flex overflow-hidden select-none">
          <div className="flex shrink-0 gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused] items-center">
            {techItems.map((tech, idx) => (
              <div
                key={`tech-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:border-blue-500/50 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#1D5BD8] dark:text-[#8DB8FF]" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right-to-Left movement, pauses on hover (Services & Solutions) */}
        <div className="group flex overflow-hidden select-none">
          <div className="flex shrink-0 gap-4 animate-marquee group-hover:[animation-play-state:paused] items-center">
            {serviceItems.map((service, idx) => (
              <div
                key={`service-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:border-emerald-500/50 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
