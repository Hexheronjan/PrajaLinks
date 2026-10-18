"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";
import { useTheme } from "@/context/ThemeContext";
import { smoothEase } from "@/utils/animations";
import { Logo } from "@/components/common/Logo";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#layanan" },
  { name: "Demo", href: "#demo-desa" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Harga", href: "#harga" },
  { name: "Proses", href: "#proses" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#kontak" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Menu aktif mengikuti section yang sedang terlihat
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <>
      {/* Animasi: navbar turun dari atas saat load, lalu mengecil saat scroll */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-2.5 glass-nav shadow-sm" : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <a href="#beranda" className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded" aria-label="PrajaLinks, kembali ke beranda">
              <Logo priority />
            </a>

            {/* Navigasi desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-[13px] font-bold transition-colors ${
                      isActive
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-slate-900 dark:text-slate-100 hover:text-blue-700 dark:hover:text-blue-300"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-blue-600 dark:bg-blue-300"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Ganti mode terang atau gelap"
                className="w-9 h-9 rounded-md flex items-center justify-center border border-slate-300 dark:border-white/20 text-slate-900 dark:text-slate-100 hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <ThemeIcon className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi gratis mengenai pembuatan website / sistem digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-[13px] font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Tombol mobile */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Ganti mode terang atau gelap"
                className="w-10 h-10 rounded-md flex items-center justify-center border border-slate-300 dark:border-white/20 text-slate-900 dark:text-slate-100"
              >
                <ThemeIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Buka menu navigasi"
                aria-expanded={mobileMenuOpen}
                className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-600 text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="fixed inset-x-0 top-[64px] z-30 p-3 sm:hidden"
          >
            <div className="bg-white dark:bg-[#0F1B3A] rounded-lg p-5 shadow-xl border border-slate-200 dark:border-white/15">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-[15px] font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </a>
                ))}
              </div>
              <a
                href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi gratis mengenai website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
