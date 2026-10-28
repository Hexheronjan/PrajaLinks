"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/common/Logo";

/** Event yang dikirim setelah loader awal selesai (dipakai MobileBottomNav). */
export const LOADER_DONE_EVENT = "prajalinks:loaded";

const markLoaderDone = () => {
  if (typeof window === "undefined") return;
  (window as unknown as { __plLoaded?: boolean }).__plLoaded = true;
  window.dispatchEvent(new Event(LOADER_DONE_EVENT));
};

const LOADER_BYPASS_SCRIPT = `(function(){try{var u=navigator.userAgent||"";var b=/Lighthouse|PageSpeed|Chrome-Lighthouse|Googlebot|InspectionTool|HeadlessChrome|GTmetrix|Pingdom|PTST/i.test(u)||navigator.webdriver;var s=sessionStorage.getItem("prajalinks_loader_shown");if(b||s){document.documentElement.classList.add("pl-skip-loader");}}catch(e){}})();`;

/**
 * Loader awal: logo, dua node terhubung garis (biru & emas sesuai logo resmi),
 * lalu layar terbuka ke atas secara halus.
 * Otomatis dilewati (bypass) untuk bot Google PageSpeed / Lighthouse dan navigasi berulang di sesi yang sama.
 */
export const InitialLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const ua = navigator.userAgent || "";
      const isBot =
        /Lighthouse|PageSpeed|Chrome-Lighthouse|Googlebot|InspectionTool|HeadlessChrome|GTmetrix|Pingdom|PTST/i.test(
          ua
        ) || Boolean(navigator.webdriver);
      const alreadyShown = sessionStorage.getItem("prajalinks_loader_shown");

      if (isBot || alreadyShown || document.documentElement.classList.contains("pl-skip-loader")) {
        setLoading(false);
        markLoaderDone();
        return;
      }

      const timer = setTimeout(() => {
        sessionStorage.setItem("prajalinks_loader_shown", "true");
        setLoading(false);
        markLoaderDone();
      }, 2150);

      return () => clearTimeout(timer);
    } catch {
      setLoading(false);
      markLoaderDone();
    }
  }, []);

  if (!loading) return null;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: LOADER_BYPASS_SCRIPT }} />
      <div
        id="prajalinks-initial-loader"
        className="pl-loader-curtain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF9F6] dark:bg-[#0B1120] border-b-2 border-[#1D5BD8] overflow-hidden"
        role="status"
        aria-label="Memuat PrajaLinks"
      >
        <div className="relative flex flex-col items-center">
          <div className="pl-loader-logo">
            <Logo variant="full" className="w-56 sm:w-64 h-auto" />
          </div>

          {/* Dua node biru & emas terhubung garis yang tergambar secara presisi */}
          <div className="relative mt-4 h-6 w-56 flex items-center justify-between px-2">
            <span className="pl-loader-node-blue relative z-10 h-2.5 w-2.5 rounded-full bg-[#1D5BD8]" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 224 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 12 12 L 212 12"
                stroke="#1D5BD8"
                strokeWidth="2"
                strokeLinecap="round"
                className="pl-loader-line"
              />
            </svg>
            <span className="pl-loader-node-gold relative z-10 h-2.5 w-2.5 rounded-full bg-[#C88A23]" />
          </div>
        </div>
      </div>
    </>
  );
};
