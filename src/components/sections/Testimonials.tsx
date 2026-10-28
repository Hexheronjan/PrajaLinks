import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteData } from "@/data/site";
import { staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Testimonials = () => {
  const containerRef = undefined;
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const { testimonialsPlaceholder } = siteData;

  return (
    <section
      id="testimoni"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="08"
          eyebrow="Ulasan & Kemitraan"
          title="Apa Kata Klien yang Telah Bekerja Sama dengan PrajaLinks"
          desc="Ulasan pengalaman nyata dari mitra desa, pelaku usaha, dan pengelola institusi yang telah menggunakan layanan pembuatan website dan aplikasi kami."
        />

        {/* 3 Testimonial Cards */}
        <motion.div
          variants={staggerContainer(0.08, 0.08)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonialsPlaceholder.slots.map((slot) => (
            <motion.div
              key={slot.id}
              variants={slideUp}
              className="p-6 sm:p-8 rounded-[8px] bg-[#FAF9F6] dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars in Elegant Gold (Sesuai Aksen Emas Logo) */}
                <div className="flex items-center gap-1.5 text-[#C88A23] dark:text-[#F59E0B] mb-4">
                  {[...Array(slot.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="mb-3 text-[#1D5BD8] dark:text-[#60A5FA] opacity-30">
                  <Quote className="w-7 h-7 rotate-180" />
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-[17px] font-semibold text-[#111827] dark:text-slate-100 leading-relaxed mb-6 font-body">
                  &ldquo;{slot.placeholderText}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E5E7EB] dark:border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[6px] bg-[#1D5BD8]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center font-heading font-bold text-base shrink-0">
                  {slot.name ? slot.name.charAt(0) : "P"}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white leading-snug">
                    {slot.name || slot.clientRole}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 mt-0.5 font-medium">
                    {slot.clientRole}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
