"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/site";
import { smoothEase } from "@/utils/animations";

const StatNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(ease * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, isInView]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { stats } = siteData;

  return (
    <section
      ref={containerRef}
      className="py-16 relative bg-[#FFFFFF] dark:bg-[#0F1B3A] border-y border-slate-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: smoothEase }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-2">
                <span className="text-[#1D5BD8] dark:text-[#8DB8FF]">
                  <StatNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 dark:text-[#B9C6E2]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
