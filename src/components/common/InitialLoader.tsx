"use client";

import { useEffect } from "react";

/** Event yang dikirim setelah halaman siap (dipakai MobileBottomNav). */
export const LOADER_DONE_EVENT = "prajalinks:loaded";

const markLoaderDone = () => {
  if (typeof window === "undefined") return;
  (window as unknown as { __plLoaded?: boolean }).__plLoaded = true;
  window.dispatchEvent(new Event(LOADER_DONE_EVENT));
};

/**
 * Non-blocking initial loader state marker agar halaman utama (Hero & LCP)
 * langsung tampil instan tanpa tertahan overlay 2.5 detik di perangkat mobile.
 */
export const InitialLoader = () => {
  useEffect(() => {
    markLoaderDone();
  }, []);

  return null;
};
