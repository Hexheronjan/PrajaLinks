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
 * Loader awal: logo, dua node terhubung garis (biru & emas sesuai logo resmi),
 * lalu layar terbuka ke atas secara halus.
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
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={markLoaderDone}>
      {loading && (
        <motion.div
          key="prajalinks-initial-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.7, ease: smoothEase } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF9F6] dark:bg-[#0B1120] border-b-2 border-[#1D5BD8] overflow-hidden"
          role="status"
          aria-label="Memuat PrajaLinks"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <Logo variant="full" priority className="w-56 sm:w-64 h-auto" />
            </motion.div>

            {/* Dua node biru & emas terhubung garis yang tergambar secara presisi */}
            <div className="relative mt-4 h-6 w-56 flex items-center justify-between px-2">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="relative z-10 h-2.5 w-2.5 rounded-full bg-[#1D5BD8]"
              />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 224 24" fill="none" aria-hidden="true">
                <motion.path
                  d="M 12 12 L 212 12"
                  stroke="#1D5BD8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: smoothEase }}
                />
              </svg>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0, ease: smoothEase }}
                className="relative z-10 h-2.5 w-2.5 rounded-full bg-[#C88A23]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
