"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { siteData } from "@/data/site";
import { staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { testimonialsPlaceholder } = siteData;

  return (
    <section
      id="testimoni"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="08"
          eyebrow={"KEPERCAYAAN & KEPUASAN KLIEN"}
          title={"Apa Kata Klien yang Telah Bekerja Sama dengan PrajaLinks"}
          desc={"Ulasan pengalaman nyata dari mitra desa, pelaku usaha, dan pengelola institusi yang telah menggunakan layanan pembuatan website dan aplikasi kami."}
        />

        {/* 3 Real Testimonial Cards */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {testimonialsPlaceholder.slots.map((slot, idx) => (
            <motion.div
              key={slot.id}
              variants={slideUp}
              className="p-8 rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header card: 5 Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(slot.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Terverifikasi</span>
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="mb-4 text-blue-600 dark:text-blue-400 opacity-60">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>

                {/* Testimonial Text (Tebal, Tajam & Berbobot Tinggi) */}
                <p className="text-[15px] font-extrabold text-slate-950 dark:text-white leading-relaxed mb-6 font-body tracking-tight">
                  &ldquo;{slot.placeholderText}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-slate-100 dark:border-white/10 flex items-center gap-3.5">
                {/* Avatar with dynamic initial */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1D5BD8] to-[#14235F] text-white flex items-center justify-center font-heading font-extrabold text-base shrink-0 shadow-md">
                  {slot.name ? slot.name.charAt(0) : "P"}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-950 dark:text-white leading-snug">
                    {slot.name || slot.clientRole}
                  </h4>
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mt-0.5">
                    {slot.clientRole}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
