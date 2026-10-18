"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Landmark,
  Globe,
  Layers,
  Smartphone,
  ShieldCheck,
  Compass,
  Server,
  ArrowRight,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { smoothEase, staggerContainer, slideUp } from "@/utils/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

// Map icon strings to Lucide components
const iconMap: Record<string, any> = {
  Code2,
  Landmark,
  Globe,
  Layers,
  Smartphone,
  ShieldCheck,
  Compass,
  Server,
  GraduationCap,
};

// Bento Card with subtle 3D tilt and cursor-following glow
const BentoCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <motion.div
      variants={slideUp}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-xl p-7 transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-200 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#0F1B3A] hover:shadow-md dark:hover:shadow-md ${
        service.colSpan || "col-span-1"
      }`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${
              (mousePos.y / 200 - 0.5) * -5
            }deg) rotateY(${(mousePos.x / 200 - 0.5) * 5}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      }}
    >
      {/* Dynamic Cursor Glow inside Card */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 -z-0"
          style={{
            background: `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 91, 216, 0.08), transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 text-[#1D5BD8] dark:text-[#8DB8FF] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1D5BD8] group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            {service.featured && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Unggulan
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#B9C6E2] border border-slate-200 dark:border-white/5">
              {service.category}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-[#1D5BD8] dark:group-hover:text-[#8DB8FF] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-[#B9C6E2] leading-relaxed mb-6 font-body">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tech.map((t: string) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={getWhatsAppLink(`Halo PrajaLinks, saya tertarik dengan layanan ${service.title}. Boleh minta info detail dan biayanya?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#1D5BD8] dark:text-[#8DB8FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>Pesan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="layanan"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0A1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul section */}
        <SectionHeading
          index="02"
          eyebrow={"Layanan Komprehensif"}
          title={"Solusi Rekayasa Web & Aplikasi Sesuai Skala Kebutuhan"}
          desc={"Mulai dari landing page cepat, portal desa berstandar regulasi, hingga sistem informasi internal perusahaan yang aman dan teruji."}
        />

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteData.services.map((service, idx) => (
            <BentoCard key={service.id} service={service} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
