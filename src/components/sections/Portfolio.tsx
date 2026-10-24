"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Lock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const { portfolio } = siteData;

  return (
    <section
      id="portofolio"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          index="04"
          eyebrow="Arsip Portofolio & Rekayasa"
          title="Karya Nyata & Portofolio Rekayasa Terpilih"
          desc="Dokumentasi arsitektur website dan aplikasi yang telah kami bangun untuk berbagai sektor. Seluruh sistem operasional dan hak akses internal dilindungi komitmen privasi klien."
        />

        {/* 3-Column Studio Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.08)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolio.map((item) => {
            const isPurwarupa = item.isPlaceholder || item.title.includes("Showcase");
            const cleanTitle = item.title.replace(/\s*\[Showcase\]/i, "");

            return (
              <motion.div
                key={item.id}
                variants={slideUp}
                className="rounded-[8px] bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 shadow-sm hover:border-[#1D5BD8] dark:hover:border-[#60A5FA] transition-colors duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Mockup with Screenshot */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#F8FAFC] dark:bg-[#1E293B] border-b border-[#E5E7EB] dark:border-white/10">
                    {/* Browser Chrome Header with Year & Status */}
                    <div className="relative z-20 flex items-center justify-between px-4 py-2 bg-[#FAF9F6] dark:bg-[#182234] border-b border-[#E5E7EB] dark:border-white/10 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E5E7EB] dark:bg-white/20" />
                        <span className="w-2 h-2 rounded-full bg-[#E5E7EB] dark:bg-white/20" />
                        <span className="w-2 h-2 rounded-full bg-[#E5E7EB] dark:bg-white/20" />
                        <span className="ml-2 font-mono text-xs font-semibold text-[#4B5563] dark:text-slate-300">
                          {item.year}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#4B5563] dark:text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    {/* Screenshot Image */}
                    <div className="relative w-full h-[calc(100%-35px)] overflow-hidden">
                      <Image
                        src={item.featuredImage}
                        alt={`Tangkapan layar portofolio ${cleanTitle}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top"
                      />

                      {/* Status Tag: "Rilis Resmi" hanya untuk live, "Purwarupa" untuk showcase */}
                      <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] bg-white/95 dark:bg-[#111827]/95 text-xs font-bold border border-[#E5E7EB] dark:border-white/15">
                        {isPurwarupa ? (
                          <span className="text-[#4B5563] dark:text-slate-300">
                            Purwarupa
                          </span>
                        ) : (
                          <span className="text-[#1D5BD8] dark:text-[#60A5FA] flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Rilis Resmi
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white mb-1.5 leading-snug">
                      {cleanTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1D5BD8] dark:text-[#60A5FA] font-bold mb-3">
                      {item.metrics}
                    </p>
                    <p className="text-sm sm:text-[15px] text-[#374151] dark:text-slate-200 leading-relaxed mb-5 font-medium">
                      {item.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono font-medium px-2 py-0.5 rounded-[4px] bg-[#FAF9F6] dark:bg-white/5 text-[#4B5563] dark:text-slate-300 border border-[#E5E7EB] dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Akses & CTA */}
                <div className="px-6 py-4 border-t border-[#E5E7EB] dark:border-white/10 bg-[#FAF9F6] dark:bg-[#182234] flex items-center justify-between gap-3">
                  <span className="text-xs sm:text-[13px] font-medium text-[#4B5563] dark:text-slate-300 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Akses Dilindungi</span>
                  </span>

                  <a
                    href={getWhatsAppLink(`Halo PrajaLinks, saya tertarik dengan portofolio ${cleanTitle}. Bisa konsultasi pembuatan website atau aplikasi serupa?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-[#1D5BD8] dark:text-[#60A5FA] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Pesan serupa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
