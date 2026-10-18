"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  HelpCircle,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

// Animated Count-Up component
const CountUpPrice = ({ endValue, isInView }: { endValue: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1400; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, isInView]);

  return <span>Rp {count.toLocaleString("id-ID")}</span>;
};

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { pricing, pricingNotes } = siteData;

  // Custom directional variants per card:
  // Card 0: from LEFT
  // Card 1: from BOTTOM
  // Card 2: from BOTTOM
  // Card 3: from RIGHT
  const getCardVariants = (index: number) => {
    switch (index) {
      case 0:
        return {
          hidden: { opacity: 0, x: -60 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: smoothEase },
          },
        };
      case 1:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.15, ease: smoothEase },
          },
        };
      case 2:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.25, ease: smoothEase },
          },
        };
      case 3:
      default:
        return {
          hidden: { opacity: 0, x: 60 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.35, ease: smoothEase },
          },
        };
    }
  };

  return (
    <section
      id="harga"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="05"
          eyebrow={"Investasi Transparan"}
          title={"Paket Harga Jelas, Tanpa Biaya Tersembunyi"}
          desc={"Pilih paket yang paling pas dengan skala kegiatan Anda. Seluruh paket dilengkapi dengan pendampingan teknis dan garansi sistem."}
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {pricing.map((plan, idx) => {
            const isPro = plan.isPopular;
            const variants = getCardVariants(idx);

            return (
              <motion.div
                key={plan.id}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative rounded-xl flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? "p-[2px] gradient-border-animated shadow-md lg:-translate-y-2"
                    : "p-7 bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Inner content box for Pro card to reveal animated gradient border */}
                <div
                  className={`w-full h-full flex flex-col justify-between rounded-[10px] ${
                    isPro ? "p-7 bg-[#FFFFFF] dark:bg-[#0F1B3A]" : ""
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                            isPro
                              ? "bg-[#1D5BD8] text-white shadow-sm flex items-center gap-1"
                              : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#B9C6E2]"
                          }`}
                        >
                          {isPro && <Sparkles className="w-3 h-3" />}
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Price display with Count-Up */}
                    <div className="mb-4">
                      <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                        {plan.id === "premium" ? (
                          <span>{plan.priceDisplay}</span>
                        ) : (
                          <CountUpPrice
                            endValue={plan.rawPrice}
                            isInView={isInView}
                          />
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-[#B9C6E2]">
                        Sekali bayar / {plan.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-[#B9C6E2] leading-relaxed mb-6 font-body">
                      {plan.targetAudience}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isPro
                                ? "bg-emerald-500/20 text-emerald-500"
                                : "bg-blue-500/15 text-[#1D5BD8] dark:text-[#8DB8FF]"
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button linked directly to WhatsApp with pre-filled message */}
                  <a
                    href={getWhatsAppLink(plan.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isPro
                        ? "bg-[#1D5BD8] hover:bg-[#1748B5] text-white shadow-lg hover:shadow-md hover:scale-[1.02]"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10"
                    }`}
                  >
                    <span>Pilih Paket {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Notes Underneath */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: smoothEase }}
          className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] dark:bg-[#0F1B3A] border border-slate-200 dark:border-white/10 shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-4 text-slate-900 dark:text-white font-bold text-sm">
            <FileCheck2 className="w-5 h-5 text-emerald-500" />
            <span>Ketentuan Transaksi & Administrasi Resmi:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingNotes.map((note, nIdx) => (
              <div key={nIdx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                <p className="text-xs text-slate-600 dark:text-[#B9C6E2] leading-relaxed">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
