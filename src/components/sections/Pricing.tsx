import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, FileCheck2 } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Pricing = () => {
  const containerRef = undefined;
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const { pricing, pricingNotes } = siteData;

  return (
    <section
      id="harga"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="05"
          eyebrow="Investasi Transparan"
          title="Paket Harga Jelas, Tanpa Biaya Tersembunyi"
          desc="Pilih paket yang paling pas dengan skala kegiatan Anda. Seluruh paket dilengkapi dengan pendampingan teknis dan garansi sistem."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {pricing.map((plan, idx) => {
            const isPro = plan.isPopular;
            const xOffset = idx < 2 ? -90 + idx * 30 : 60 + (idx - 2) * 30;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, x: xOffset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-[8px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 border bg-white dark:bg-[#111827] ${
                  isPro
                    ? "border-[#1D5BD8] dark:border-[#60A5FA] shadow-md ring-2 ring-[#1D5BD8]/20"
                    : "border-[#E5E7EB] dark:border-white/10"
                }`}
              >
                <div>
                  {/* Header Paket */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-lg font-bold text-[#111827] dark:text-white">
                      {plan.name}
                    </span>
                    {isPro ? (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-[4px] bg-[#C88A23]/10 text-[#C88A23] dark:text-[#F59E0B] border border-[#C88A23]/30">
                        Paling Populer
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-[#5F6978] dark:text-slate-400">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Harga Langsung Terbaca (Memperbaiki Glitch Rp 0) */}
                  <div className="mb-4">
                    <div className="text-2xl sm:text-[1.85rem] font-bold text-[#111827] dark:text-white tracking-tight">
                      {plan.priceDisplay}
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#5F6978] dark:text-slate-400">
                      Sekali bayar / {plan.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#374151] dark:text-slate-200 leading-relaxed mb-6 font-medium">
                    {plan.targetAudience}
                  </p>

                  {/* Daftar Fitur */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-xs sm:text-[13px] text-[#111827] dark:text-slate-100 font-semibold leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tombol WhatsApp (Solid Aksen untuk Populer, Outline untuk Lainnya) */}
                <a
                  href={getWhatsAppLink(plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPro ? "btn-primary w-full text-sm font-bold" : "btn-secondary w-full text-sm font-bold"}
                >
                  <span>Pilih Paket {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Catatan Administrasi Bawah */}
        <div className="p-6 sm:p-7 rounded-[8px] bg-[#FAF9F6] dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10">
          <div className="flex items-center gap-2 mb-3.5 text-[#111827] dark:text-white font-bold text-sm sm:text-base">
            <FileCheck2 className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA]" />
            <span>Ketentuan Transaksi &amp; Administrasi Resmi:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {pricingNotes.map((note, nIdx) => (
              <div key={nIdx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#1D5BD8] shrink-0 mt-1.5" />
                <p className="text-xs sm:text-sm text-[#374151] dark:text-slate-200 leading-relaxed font-medium">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
