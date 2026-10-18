"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { faqs } = siteData;

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-[#FFFFFF] dark:bg-[#0A1228]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="09"
          eyebrow={"Pertanyaan yang Sering Diajukan"}
          title={"Segala Hal yang Perlu Anda Ketahui"}
          desc={"Jawaban transparan seputar durasi, hak revisi, invoice desa, kepemilikan kode, dan masa garansi."}
        />

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: smoothEase }}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50 dark:bg-[#0F1B3A] border-blue-500/40 shadow-sm"
                    : "bg-[#FFFFFF] dark:bg-[#0F1B3A]/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-[#8DB8FF] shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: smoothEase },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: smoothEase },
                          opacity: { duration: 0.2 },
                        },
                      }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-[#B9C6E2] leading-relaxed border-t border-slate-200/50 dark:border-white/5 font-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: smoothEase }}
          className="mt-12 p-6 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Punya pertanyaan khusus yang belum terjawab?
            </h4>
            <p className="text-xs text-slate-600 dark:text-[#B9C6E2] mt-0.5">
              Konsultasikan langsung dengan developer kami tanpa biaya.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Halo PrajaLinks, saya ingin menanyakan hal teknis seputar pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
