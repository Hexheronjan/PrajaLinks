"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothEase } from "@/utils/animations";
import { Logo } from "@/components/common/Logo";

/** Event yang dikirim setelah loader awal selesai (dipakai MobileBottomNav). */
export const LOADER_DONE_EVENT = "prajalinks:loaded";

const markLoaderDone = () => {
  (window as unknown as { __plLoaded?: boolean }).__plLoaded = true;
  window.dispatchEvent(new Event(LOADER_DONE_EVENT));
};

/**
 * Loader awal: logo, dua node terhubung garis yang tergambar (1 detik),
 * lalu layar terbuka ke atas.
 */
export const InitialLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hanya tampil sekali per sesi
    if (sessionStorage.getItem("prajalinks_loader_shown")) {
      setLoading(false);
      markLoaderDone();
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("prajalinks_loader_shown", "true");
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={markLoaderDone}>
      {loading && (
        <motion.div
          key="prajalinks-initial-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.85, ease: smoothEase } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white border-b-4 border-blue-600 overflow-hidden"
          role="status"
          aria-label="Memuat PrajaLinks"
        >
          <div className="absolute inset-0 bg-grid-fine opacity-70" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <Logo variant="full" priority className="w-56 sm:w-64 h-auto" />
            </motion.div>

            {/* Dua node dihubungkan garis yang tergambar selama 1 detik */}
            <div className="relative mt-4 h-8 w-64 flex items-center justify-between px-2">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="relative z-10 h-3.5 w-3.5 rounded-full bg-blue-600"
              />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 256 32" fill="none" aria-hidden="true">
                <motion.path
                  d="M 16 16 L 240 16"
                  stroke="#1D5BD8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
                />
              </svg>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2, ease: smoothEase }}
                className="relative z-10 h-3.5 w-3.5 rounded-full bg-amber-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
