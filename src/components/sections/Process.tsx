"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { siteData } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { processSteps } = siteData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="proses"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-[#FFFFFF] dark:bg-[#0A1228]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="06"
          eyebrow={"Alur Pengerjaan Transparan"}
          title={"5 Langkah Terukur dari Ide Hingga Rilis"}
          desc={"Setiap tahap memiliki target keluaran yang konkret sehingga Anda selalu mengetahui progres perkembangan website Anda."}
        />

        {/* Timeline with Center Progress Line */}
        <div className="relative">
          {/* Background vertical track line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

          {/* Filling vertical progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-1/2 top-4 w-[3px] bg-[#1D5BD8] -translate-x-1/2 origin-top"
          />

          <div className="space-y-12 sm:space-y-16">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 1; // 0 is odd in 1-based (Step 1), 1 is even (Step 2)
              const entersFromLeft = !isEven;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Badge in the middle */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3A] border-2 border-blue-500 shadow-md flex items-center justify-center text-xs font-bold font-heading text-slate-900 dark:text-white">
                    {step.step}
                  </div>

                  {/* Step Card: Odd enters from LEFT, Even from RIGHT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: entersFromLeft ? -50 : 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.75, ease: smoothEase }}
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pl-12" : "sm:pr-12"
                    } w-full`}
                  >
                    <div className="p-7 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          Langkah {step.step}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#B9C6E2]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{step.timeline}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-[#B9C6E2] leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-3 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                        <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                          Output Tahap Ini:
                        </span>
                        {step.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
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
