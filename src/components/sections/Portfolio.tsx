"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Lock, Sparkles, MessageCircle, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { portfolio } = siteData;

  return (
    <section
      id="portofolio"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          index="04"
          eyebrow={"REKAYASA SISTEM & ARSIP PORTOFOLIO"}
          title={"Karya Nyata & Portofolio Rekayasa Terpilih"}
          desc={"Dokumentasi arsitektur website dan aplikasi yang telah kami bangun untuk berbagai sektor. Seluruh sistem operasional dan hak akses internal dilindungi komitmen privasi klien."}
        />

        {/* Clean Responsive 3-Column Studio Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolio.map((item) => (
            <motion.div
              key={item.id}
              variants={slideUp}
              className="rounded-2xl bg-white dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Mockup with Screenshot */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-white/10">
                  {/* Browser Chrome Header with Privacy Lock */}
                  <div className="relative z-20 flex items-center justify-between px-3.5 py-2.5 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <div className="ml-2 flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-300">
                        <Lock className="w-2.5 h-2.5 text-amber-400" />
                        <span className="truncate max-w-[170px] font-semibold">
                          Akses Klien Terproteksi
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      {item.year}
                    </span>
                  </div>

                  {/* Screenshot Image with Hover Zoom */}
                  <div className="relative w-full h-[calc(100%-37px)] overflow-hidden">
                    <Image
                      src={item.featuredImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider uppercase bg-[#1D5BD8] text-white shadow-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Verified Release Tag */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Rilis Resmi</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h4 className="text-xl font-extrabold font-heading text-slate-950 dark:text-white group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-blue-700 dark:text-blue-400 font-bold mt-1 mb-3">
                    {item.metrics}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-[#B9C6E2] leading-relaxed mb-5 font-body">
                    {item.description}
                  </p>

                  {/* Deliverable Highlights */}
                  <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-slate-50 dark:bg-[#0A1228] border border-slate-200/70 dark:border-white/5 text-xs">
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Arsitektur Koding Rapi & Cepat</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Desain Responsif Mobile-First</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Sistem Terintegrasi & Bergaransi</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Confidential Notice & CTA to build similar */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-between gap-3">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-500" />
                  <span>Akses Internal Klien</span>
                </span>

                <a
                  href={getWhatsAppLink(`Halo PrajaLinks, saya tertarik dengan portofolio ${item.title}. Bisa konsultasi pembuatan website atau aplikasi serupa?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1D5BD8] hover:bg-blue-700 text-white shadow-md transition-all group-hover:scale-105"
                >
                  <span>Pesan Serupa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
