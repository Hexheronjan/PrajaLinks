import { motion, useInView } from "framer-motion";
import {
  Code,
  Zap,
  ShieldAlert,
  FileCheck,
  MapPin, CheckCircle2,
} from "lucide-react";
import { siteData } from "@/data/site";
import { staggerContainer, slideUp, smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

const icons: Record<string, any> = {
  Code,
  Zap,
  ShieldAlert,
  FileCheck,
  MapPin, CheckCircle2,
};

export const WhyUs = () => {
  const containerRef = undefined;
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const { whyUs } = siteData;

  return (
    <section
      id="tentang"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="07"
          eyebrow="Bukan Sekadar Janji"
          title="5 Alasan Jujur Memilih PrajaLinks"
          desc="Kami tidak mengklaim menjadi agensi terbesar, tetapi kami menjamin setiap baris kode dan desain dibuat dengan integritas yang bisa Anda uji."
        />

        {/* 5 Pillars Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.08)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUs.map((item, idx) => {
            const IconComp = icons[item.icon] || Code;
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -90 : 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: (idx % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 sm:p-7 rounded-[8px] bg-[#FAF9F6] dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-[6px] bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-white/5 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center mb-4 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#374151] dark:text-slate-200 leading-relaxed font-medium mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E5E7EB] dark:border-white/10">
                  <span className="text-xs sm:text-sm font-bold text-[#1D5BD8] dark:text-[#60A5FA]">
                    <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 shrink-0" /><span>{item.proof}</span></span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
