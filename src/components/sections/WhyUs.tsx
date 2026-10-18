"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Zap,
  ShieldAlert,
  FileCheck,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { siteData } from "@/data/site";
import { smoothEase, staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

const icons: Record<string, any> = {
  Code,
  Zap,
  ShieldAlert,
  FileCheck,
  MapPin,
};

export const WhyUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { whyUs } = siteData;

  return (
    <section
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="07"
          eyebrow={"Bukan Sekadar Janji"}
          title={"5 Alasan Jujur Memilih PrajaLinks"}
          desc={"Kami tidak mengklaim menjadi agensi terbesar, tetapi kami menjamin setiap baris kode dan desain dibuat dengan integritas yang bisa Anda uji."}
        />

        {/* 5 Pillars Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUs.map((item, idx) => {
            const IconComp = icons[item.icon] || Code;
            return (
              <motion.div
                key={item.id}
                variants={slideUp}
                className="p-8 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 text-[#1D5BD8] dark:text-[#8DB8FF] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-[#B9C6E2] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Verifiable Proof Line */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-start gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.proof}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
