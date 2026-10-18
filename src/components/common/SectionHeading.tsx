"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { smoothEase } from "@/utils/animations";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  desc?: string;
}

/**
 * Judul section: rata kiri dengan nomor, garis, dan deskripsi di kolom kanan.
 * Dipakai di semua section supaya ritme halaman konsisten.
 */
export const SectionHeading = ({ index, eyebrow, title, desc }: SectionHeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="mb-12 sm:mb-14 grid gap-6 lg:grid-cols-12 lg:items-end border-b border-slate-200 dark:border-white/15 pb-8"
    >
      <div className="lg:col-span-7">
        {/* Animasi: label naik, judul masuk dari kiri */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300"
        >
          <span className="font-heading text-sm">{index}</span>
          <span className="h-px w-10 bg-blue-600 dark:bg-blue-300" />
          <span>{eyebrow}</span>
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: smoothEase }}
          className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.12] text-slate-950 dark:text-white"
        >
          {title}
        </motion.h2>
      </div>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18, ease: smoothEase }}
          className="lg:col-span-5 text-[15px] sm:text-base leading-relaxed text-slate-600 dark:text-[#B9C6E2]"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
};
