"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  MapPin,
  Sparkles,
  MessageCircle,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Founder = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const { brand } = siteData;

  const founderSkills = [
    {
      title: "Arsitektur Web & Mobile Modern",
      desc: "Spesialisasi Next.js, React Native, Laravel, Tailwind CSS, dan sistem database terstruktur.",
      icon: Laptop,
    },
    {
      title: "Komunikasi Langsung Tanpa Perantara",
      desc: "Diskusi kebutuhan teknis langsung bersama technical lead, memangkas birokrasi dan salah paham.",
      icon: MessageCircle,
    },
    {
      title: "Komitmen Garansi & Full Source Code",
      desc: "Setiap baris kode diserahkan dengan transparansi penuh, bebas vendor lock-in, dan bergaransi.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="pendiri"
      ref={containerRef}
      className="py-20 lg:py-24 relative overflow-hidden bg-[#FAF9F6] dark:bg-[#080E1A] border-t border-[#E5E7EB] dark:border-white/10"
    >
      {/* Background glow subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D5BD8]/5 dark:bg-[#1D5BD8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          index="08"
          eyebrow="Kepemimpinan & Dedikasi"
          title="Di Balik PrajaLinks"
          desc="Setiap sistem, portal desa, dan aplikasi web dirancang dengan pengawasan teknis langsung demi memastikan keandalan jangka panjang."
          align="center"
        />

        {/* Profile Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-white/10 shadow-xl shadow-black/[0.03] dark:shadow-none overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Sisi Kiri: Profil Visual & Identitas */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-[#F3F4F6] to-white dark:from-[#0F172A] dark:to-[#111827] border-b lg:border-b-0 lg:border-r border-[#E5E7EB] dark:border-white/10 flex flex-col justify-between">
              <div>
                {/* Badge Status */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D5BD8]/10 dark:bg-[#60A5FA]/10 text-[#1D5BD8] dark:text-[#60A5FA] text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#1D5BD8] dark:bg-[#60A5FA] animate-pulse" />
                  Owner & Founder Profile
                </div>

                {/* Avatar Visual Modern */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#1D5BD8] via-[#2563EB] to-[#60A5FA] p-1 shadow-lg shadow-[#1D5BD8]/25 flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#0F172A] flex flex-col items-center justify-center text-white">
                      <Code2 className="w-10 h-10 text-[#60A5FA] mb-1" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">
                        PRAJALINKS
                      </span>
                    </div>
                  </div>
                  {/* Floating Verified Badge */}
                  <div className="absolute -bottom-2 -left-2 sm:left-20 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border-2 border-white dark:border-[#111827]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Founder
                  </div>
                </div>

                {/* Identitas Nama */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-snug">
                  {brand.founder}
                </h3>
                <p className="text-sm sm:text-[15px] font-bold text-[#1D5BD8] dark:text-[#60A5FA] mt-1 mb-4">
                  {brand.founderRole}
                </p>

                {/* Info Lokasi & Basis */}
                <div className="space-y-2 text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0" />
                    <span>{brand.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0" />
                    <span>Melayani Klien Seluruh Indonesia (100% Online)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E5E7EB] dark:border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(
                    `Halo ${brand.founder}, saya ingin berkonsultasi langsung mengenai pembuatan website / sistem aplikasi di PrajaLinks.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1D5BD8] hover:bg-[#194bb3] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Konsultasi Langsung
                </a>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-white/10 hover:border-[#1D5BD8] text-[#111827] dark:text-white text-xs sm:text-sm font-bold transition-all"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Visi & Prinsip Kerja */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-3">
                  <Sparkles className="w-4 h-4" />
                  Filosofi & Dedikasi Teknis
                </div>

                <blockquote className="text-base sm:text-lg text-[#1F2937] dark:text-slate-100 font-semibold leading-relaxed mb-6 italic border-l-4 border-[#1D5BD8] pl-4">
                  &ldquo;PrajaLinks dibangun dengan prinsip bahwa setiap bisnis UMKM dan instansi desa berhak memiliki sistem digital yang cepat, aman, dan mudah digunakan — tanpa biaya tersembunyi dan tanpa ketergantungan sepihak.&rdquo;
                </blockquote>

                <p className="text-sm text-[#4B5563] dark:text-slate-300 leading-relaxed font-medium mb-8">
                  Sebagai Owner sekaligus Software Engineer, saya bertanggung jawab penuh atas standarisasi penulisan kode, pemilihan arsitektur database, serta kecepatan muat website. Tidak ada perantara agensi yang berbelit; setiap diskusi teknis dirancang solutif dan tepat sasaran.
                </p>

                {/* 3 Skill Pillars */}
                <div className="space-y-4">
                  {founderSkills.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#0F172A] border border-[#E5E7EB] dark:border-white/5 flex items-start gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#1D5BD8]/10 dark:bg-[#60A5FA]/10 text-[#1D5BD8] dark:text-[#60A5FA] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#111827] dark:text-white leading-snug">
                            {skill.title}
                          </h4>
                          <p className="text-xs text-[#4B5563] dark:text-slate-300 font-medium leading-relaxed mt-0.5">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tagline footer card */}
              <div className="mt-8 pt-5 border-t border-[#E5E7EB] dark:border-white/10 flex items-center justify-between text-xs text-[#6B7280] dark:text-slate-400 font-medium">
                <span>PrajaLinks Studio Digital</span>
                <span>Didirikan & Dimiliki Langsung oleh {brand.founder}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
