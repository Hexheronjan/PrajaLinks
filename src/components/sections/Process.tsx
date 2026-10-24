"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { siteData } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const { processSteps } = siteData;

  return (
    <section
      id="proses"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#0B1120]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="06"
          eyebrow="Alur Pengerjaan Transparan"
          title="5 Langkah Terukur dari Ide Hingga Rilis"
          desc="Setiap tahap memiliki target keluaran yang konkret sehingga Anda selalu mengetahui progres perkembangan website Anda."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track line */}
          <div className="absolute left-3.5 sm:left-1/2 top-4 bottom-4 w-[1px] bg-[#E5E7EB] dark:bg-white/10 -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const entersFromLeft = !isEven;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Badge in the middle */}
                  <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#111827] border-2 border-[#1D5BD8] flex items-center justify-center text-xs sm:text-sm font-mono font-bold text-[#111827] dark:text-white shadow-sm">
                    {step.step}
                  </div>

                  {/* Step Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: entersFromLeft ? -16 : 16,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: smoothEase }}
                    className={`pl-8 sm:pl-0 sm:w-1/2 ${
                      isEven ? "sm:pl-10" : "sm:pr-10"
                    } w-full min-w-0`}
                  >
                    <div className="p-5 sm:p-7 rounded-[8px] bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 shadow-sm">
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <span className="text-xs sm:text-[13px] font-bold text-[#1D5BD8] dark:text-[#60A5FA] uppercase tracking-wider">
                          Langkah {step.step}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#5F6978] dark:text-slate-400">
                          <Clock className="w-4 h-4" />
                          <span>{step.timeline}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#111827] dark:text-white mb-2 leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-[#374151] dark:text-slate-200 leading-relaxed mb-4 font-medium">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-3.5 border-t border-[#E5E7EB] dark:border-white/10 space-y-2">
                        <span className="text-xs font-bold text-[#5F6978] dark:text-slate-400 block mb-1">
                          Output Tahap Ini:
                        </span>
                        {step.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111827] dark:text-slate-100 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
