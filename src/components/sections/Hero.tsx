"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Code2,
  Activity,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { getWhatsAppLink } from "@/data/site";
import { smoothEase } from "@/utils/animations";

// Judul tampil per kata, masuk dari KIRI dengan penekanan jasa website & aplikasi
const headline = [
  { w: "Jasa", tone: "" },
  { w: "Pembuatan", tone: "" },
  { w: "Website,", tone: "blue" },
  { w: "Aplikasi", tone: "blue" },
  { w: "&", tone: "" },
  { w: "Tugas", tone: "blue" },
  { w: "Coding.", tone: "blue" },
];

const trust = [
  "Pengerjaan terstruktur",
  "Pelatihan operator",
  "Pendampingan setelah rilis",
];

// Jaringan node + garis di latar (koordinat dalam persen)
const nodes = [
  { x: 8, y: 18 }, { x: 34, y: 30 }, { x: 58, y: 14 },
  { x: 82, y: 26 }, { x: 92, y: 62 }, { x: 66, y: 84 },
  { x: 38, y: 78 }, { x: 14, y: 66 },
];
const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [1, 6], [2, 5],
];

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  // Parallax mengikuti kursor (transform saja, tanpa re-render)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-6, 6]);
  const rotateX = useTransform(sy, [-1, 1], [5, -5]);
  const phoneX = useTransform(sx, [-1, 1], [-18, 18]);
  const phoneY = useTransform(sy, [-1, 1], [-12, 12]);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section
      id="beranda"
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white dark:bg-[#0A1228]"
    >
      {/* Grid tipis + jaringan node yang bergerak pelan */}
      <div className="absolute inset-0 bg-grid-fine [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {links.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="#1D5BD8"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 6, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
        {nodes.map((n, i) => (
          <motion.span
            key={i}
            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/70"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* Kiri: judul, subjudul, CTA, baris kepercayaan */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
              <span>Hubungkan Desa &amp; Bisnismu ke Dunia Digital</span>
            </motion.p>

            <h1 className="font-heading text-[2.5rem] sm:text-5xl lg:text-[4.2rem] font-extrabold leading-[1.08] text-slate-950 dark:text-white">
              {headline.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.09, ease: smoothEase }}
                  className={`inline-block mr-[0.28em] ${
                    h.tone === "blue" ? "text-blue-600 dark:text-blue-300" : ""
                  }`}
                >
                  {h.w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.85, ease: smoothEase }}
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-800 dark:text-[#D3DCF0] font-medium"
            >
              Mitra rekayasa digital di Ponorogo untuk pembuatan <strong>Website Profesional</strong>, <strong>Aplikasi Mobile &amp; Web Custom</strong>, serta <strong>Bimbingan &amp; Jasa Tugas Coding IT Mahasiswa</strong>. Dikerjakan cepat, kode bersih, dan bergaransi.
            </motion.p>

            {/* CTA naik dari bawah */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.0, ease: smoothEase }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi awal mengenai pembuatan website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#portofolio"
                className="inline-flex items-center rounded-md border-2 border-slate-900 dark:border-white px-6 py-3 text-sm font-bold text-slate-950 dark:text-white transition-colors hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950"
              >
                Lihat Portofolio
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.15, ease: smoothEase }}
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 dark:border-white/15 pt-6"
            >
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Kanan: Maskot Robot 3D Unik & Interaktif */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Interactive Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-[#0E1A33] border border-blue-200 dark:border-blue-500/20 shadow-md text-slate-900 dark:text-white text-xs font-bold mb-4 z-20"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Halo! Mau buat website, aplikasi, atau tugas coding hari ini?</span>
            </motion.div>

            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1100 }}
              className="relative mx-auto w-full max-w-[460px] pb-6"
            >
              {/* Floating Robot Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1A33] shadow-[0_30px_70px_-25px_rgba(29,91,216,0.35)] p-2 group"
              >
                {/* Robot Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-50 dark:bg-[#0A1228]">
                  <Image
                    src="/robot-mascot.jpg"
                    alt="Maskot Robot Pembuatan Website, Aplikasi & Tugas Coding PrajaLinks"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Ambient glow effect on hover */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>

              {/* Floating Chip 1: Top-Left (Status Aktif) */}
              <motion.div
                style={{ x: phoneX, y: phoneY }}
                className="absolute -top-3 -left-2 z-30"
              >
                <div className="px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0E1A33]/95 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                    Asisten Digital Aktif
                  </span>
                </div>
              </motion.div>

              {/* Floating Chip 2: Top-Right (Tugas Coding IT) */}
              <div className="absolute -top-3 -right-2 z-30">
                <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg flex items-center gap-1.5 border border-white/20">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">
                    Tugas Coding IT
                  </span>
                </div>
              </div>

              {/* Floating Chip 3: Bottom-Left (Website Custom) */}
              <div className="absolute -bottom-1 -left-2 z-30">
                <div className="px-3.5 py-2 rounded-xl bg-[#1D5BD8] text-white shadow-xl flex items-center gap-2 border border-white/20">
                  <Globe className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider">
                    Website Custom
                  </span>
                </div>
              </div>

              {/* Floating Chip 4: Bottom-Right (Aplikasi Mobile) */}
              <div className="absolute -bottom-1 -right-2 z-30">
                <div className="px-3.5 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl flex items-center gap-2 border border-white/10">
                  <Smartphone className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider">
                    Aplikasi Mobile
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
