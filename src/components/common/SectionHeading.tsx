import { motion, useInView } from "framer-motion";
import { smoothEase } from "@/utils/animations";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}

/**
 * Judul section bersih, tegas & terstruktur.
 * Tipografi sedikit ditebalkan dan dibesarkan untuk keterbacaan optimal.
 */
export const SectionHeading = ({ index, eyebrow, title, desc, align = "left" }: SectionHeadingProps) => {
  const ref = undefined;
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (align === "center") {
    return (
      <div ref={ref} className="mb-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="mb-2.5 inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#1D5BD8] dark:text-[#60A5FA]"
        >
          {index && (
            <>
              <span className="font-mono text-xs text-[#64748B] dark:text-slate-400 font-semibold">
                {index}
              </span>
              <span className="h-px w-4 bg-[#E5E7EB] dark:bg-white/20" />
            </>
          )}
          <span>{eyebrow}</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.05, ease: smoothEase }}
          className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.2] text-[#111827] dark:text-white tracking-tight"
        >
          {title}
        </motion.h2>
        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1, ease: smoothEase }}
            className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#374151] dark:text-slate-200 font-medium"
          >
            {desc}
          </motion.p>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mb-12 sm:mb-14 grid gap-6 lg:grid-cols-12 lg:items-end border-b border-[#E5E7EB] dark:border-white/10 pb-7"
    >
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="mb-3 flex items-center gap-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#1D5BD8] dark:text-[#60A5FA]"
        >
          {index && (
            <>
              <span className="font-mono text-xs text-[#64748B] dark:text-slate-400 font-semibold">
                {index}
              </span>
              <span className="h-px w-5 bg-[#E5E7EB] dark:bg-white/20" />
            </>
          )}
          <span>{eyebrow}</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.05, ease: smoothEase }}
          className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.18] text-[#111827] dark:text-white tracking-tight"
        >
          {title}
        </motion.h2>
      </div>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1, ease: smoothEase }}
          className="lg:col-span-5 text-base sm:text-[17px] leading-relaxed text-[#374151] dark:text-slate-200 font-medium"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
};
