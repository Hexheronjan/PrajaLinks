"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

export const GlobalElements = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Thin Scroll Progress Bar at the Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#1D5BD8] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. Desktop Cursor Glow (hidden on touch devices) */}
      {!isTouchDevice && (
        <div
          className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          {/* Cincin tipis pengikut kursor, menggantikan glow blur */}
          <div className="w-9 h-9 rounded-full border border-[#1D5BD8]/70" />
        </div>
      )}

      {/* 3. Floating WhatsApp CTA with Subtle Pulse */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Back to top button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-11 h-11 rounded-full bg-slate-900/80 dark:bg-slate-800/80 hover:bg-slate-800 text-white border border-white/10 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}

        {/* WhatsApp Pill Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp PrajaLinks"
          className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0EA5E9] hover:bg-[#0EA5E9] text-white font-medium shadow-md transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFFFF] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFFFFF]" />
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-sm font-semibold tracking-wide pr-1 hidden sm:inline">
            Tanya via WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};
