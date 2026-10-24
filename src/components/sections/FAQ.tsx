"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const [openItems, setOpenItems] = useState<number[]>([0]);

  const { faqs } = siteData;

  const toggleAccordion = (idx: number) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleExpandAll = () => {
    if (openItems.length === faqs.length) {
      setOpenItems([]);
    } else {
      setOpenItems(faqs.map((_, i) => i));
    }
  };

  return (
    <section
      id="faq"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#0B1120]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="09"
          eyebrow="Tanya Jawab & Regulasi"
          title="Segala Hal yang Perlu Anda Ketahui"
          desc="Jawaban transparan seputar durasi pengerjaan, hak revisi, invoice SPJ desa, kepemilikan kode sumber, dan masa garansi teknis."
        />

        {/* Tombol Buka/Tutup Semua */}
        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={handleExpandAll}
            className="text-xs sm:text-sm font-bold text-[#1D5BD8] dark:text-[#60A5FA] hover:underline"
          >
            {openItems.length === faqs.length ? "Tutup Semua Jawaban" : "Buka Semua Jawaban"}
          </button>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openItems.includes(idx);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: smoothEase }}
                className={`rounded-[8px] border transition-colors duration-200 overflow-hidden bg-white dark:bg-[#111827] ${
                  isOpen
                    ? "border-[#1D5BD8] dark:border-[#60A5FA] shadow-sm"
                    : "border-[#E5E7EB] dark:border-white/10 hover:border-[#1D5BD8]/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5BD8]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#5F6978] dark:text-slate-400 shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#1D5BD8] text-white"
                        : "bg-[#F8FAFC] dark:bg-white/10 text-[#5F6978] dark:text-slate-300"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.25, ease: smoothEase },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2, ease: smoothEase },
                          opacity: { duration: 0.15 },
                        },
                      }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#374151] dark:text-slate-200 leading-relaxed border-t border-[#E5E7EB] dark:border-white/5 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Prompt Bantuan Konsultasi */}
        <div className="mt-10 p-6 sm:p-7 rounded-[8px] bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#111827] dark:text-white">
              Punya pertanyaan khusus yang belum tercantum?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 mt-0.5 font-medium">
              Konsultasikan spesifikasi teknis dan rincian proyek Anda langsung bersama developer kami.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Halo PrajaLinks, saya ingin menanyakan hal teknis seputar pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2.5 px-4 font-bold shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
