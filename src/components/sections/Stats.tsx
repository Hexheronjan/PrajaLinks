import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/site";
import { smoothEase } from "@/utils/animations";

export const Stats = () => {
  const containerRef = undefined;
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  const { stats } = siteData;

  return (
    <section
      ref={containerRef}
      className="py-14 sm:py-18 relative bg-[#FAF9F6] dark:bg-[#0B1120] border-y border-[#E5E7EB] dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: smoothEase }}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/60 dark:hover:bg-white/5 transition-colors"
            >
              {/* Nilai final: 1 baris utuh, tidak akan terpotong ke bawah */}
              <div className="flex items-baseline justify-center whitespace-nowrap text-3xl sm:text-4xl lg:text-[3rem] font-bold text-[#1D5BD8] dark:text-[#60A5FA] tracking-tight leading-none mb-2.5">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="text-xl sm:text-2xl lg:text-[2.1rem] font-bold ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <h3 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white mb-1.5 leading-snug">
                {stat.label}
              </h3>

              {/* Deskripsi */}
              <p className="text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 font-medium leading-relaxed max-w-[220px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
