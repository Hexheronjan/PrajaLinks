"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

export const GlobalElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 400;
      setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp CTA with Subtle Pulse */}
      <div className="fixed bottom-[74px] sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 dark:bg-slate-800/80 hover:bg-slate-800 text-white border border-white/10 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* WhatsApp Pill Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp PrajaLinks"
          className="group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFFFF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#FFFFFF]" />
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide pr-1 hidden sm:inline">
            Tanya via WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};
