"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";

export const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Magnetic Button Physics
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull factor
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const marqueeText =
    "JASA PEMBUATAN WEBSITE & APLIKASI • PRAJALINKS STUDIO PONOROGO • LAYANAN 24 JAM NONSTOP • SISTEM INFORMASI DESA & BISNIS • ";

  return (
    <section
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-[#FFFFFF] dark:bg-[#0A1228]"
    >
      {/* 1. Large Moving Marquee Text in the background */}
      <div className="relative w-full overflow-hidden select-none py-4 opacity-15 dark:opacity-20 pointer-events-none mb-12">
        <div className="flex w-max animate-marquee">
          <span className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-slate-900 dark:text-white uppercase whitespace-nowrap">
            {marqueeText}
            {marqueeText}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="relative rounded-2xl p-8 sm:p-14 bg-[#1D5BD8] text-white shadow-2xl border border-white/15 overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Jasa Pembuatan Website & Aplikasi Ponorogo</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-6">
              Siap Membangun Website & Aplikasi Berkualitas Tinggi?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 mb-10 leading-relaxed font-body">
              Diskusikan kebutuhan pembuatan website desa, company profile, toko online, sistem informasi, atau aplikasi mobile bersama tim teknis PrajaLinks. Tanpa biaya awal konsultasi, responsif 24 jam nonstop.
            </p>

            {/* 2. Magnetic WhatsApp Button following cursor */}
            <motion.a
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi jasa pembuatan website dan aplikasi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#14235F] font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-xl transition-all cursor-pointer select-none"
            >
              <MessageCircle className="w-5 h-5 fill-[#1D5BD8] text-[#1D5BD8]" />
              <span>Konsultasi WhatsApp Sekarang</span>
              <ArrowUpRight className="w-5 h-5 text-[#1D5BD8]" />
            </motion.a>

            <span className="mt-5 text-xs text-blue-200">
              Konsultasi dibuka {siteData.brand.workingHours} • Dukuh Krajan, Desa Morosari, Ponorogo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
