"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Landmark,
  Globe,
  Layers,
  Smartphone,
  ShieldCheck,
  Compass,
  Server,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

const iconMap: Record<string, any> = {
  Code2,
  Landmark,
  Globe,
  Layers,
  Smartphone,
  ShieldCheck,
  Compass,
  Server,
  GraduationCap,
};

const BentoCard = ({ service }: { service: any }) => {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <motion.div
      variants={slideUp}
      className={`rounded-[8px] p-6 sm:p-7 flex flex-col justify-between border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#111827] shadow-sm hover:border-[#1D5BD8] dark:hover:border-[#60A5FA] transition-colors duration-200 ${
        service.colSpan || "col-span-1"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-[6px] bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-white/5 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
            <IconComponent className="w-5 h-5" />
          </div>

          <span className="px-2.5 py-0.5 rounded-[4px] text-xs font-bold bg-[#FAF9F6] dark:bg-white/5 text-[#374151] dark:text-slate-200 border border-[#E5E7EB] dark:border-white/10">
            {service.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white mb-2 leading-snug">
          {service.title}
        </h3>

        <p className="text-sm sm:text-[15px] leading-relaxed text-[#374151] dark:text-slate-200 font-medium mb-5">
          {service.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E5E7EB] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs font-mono font-medium px-2 py-0.5 rounded-[4px] bg-[#FAF9F6] dark:bg-white/5 text-[#4B5563] dark:text-slate-300 border border-[#E5E7EB] dark:border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Tautan teks kecil "Tanya detail" */}
        <a
          href={getWhatsAppLink(`Halo PrajaLinks, saya tertarik dengan layanan ${service.title}. Boleh minta info detail dan biayanya?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-bold text-[#1D5BD8] dark:text-[#60A5FA] hover:underline inline-flex items-center gap-1 transition-opacity"
        >
          <span>Tanya detail</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="layanan"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="02"
          eyebrow="Layanan Komprehensif"
          title="Solusi Rekayasa Web & Aplikasi Sesuai Skala Kebutuhan"
          desc="Mulai dari landing page cepat, portal desa berstandar regulasi, hingga sistem informasi internal perusahaan yang aman dan teruji."
        />

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.08)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteData.services.map((service) => (
            <BentoCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
