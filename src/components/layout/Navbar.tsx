"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight, ArrowLeft, MessageSquare, Home } from "lucide-react";
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
  const pathname = usePathname();
  const isSubPage =
    pathname?.startsWith("/layanan") || pathname === "/wilayah";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isSubPage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

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
  }, [isSubPage]);

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled || isSubPage
            ? "py-3 bg-white/96 dark:bg-[#111827]/96 backdrop-blur-md border-b border-[#E5E7EB] dark:border-white/10 shadow-sm"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5BD8] rounded-md"
              aria-label="PrajaLinks, kembali ke beranda"
            >
              <Logo priority />
            </Link>

            {/* Navigasi desktop */}
            {isSubPage ? (
              <nav className="hidden lg:flex items-center gap-2" aria-label="Navigasi landing page">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBF2FF] dark:bg-[#1D5BD8]/15 hover:bg-[#D9E6FF] dark:hover:bg-[#1D5BD8]/25 text-[#1D5BD8] dark:text-[#60A5FA] text-[14px] font-bold transition-all"
                >
                  <Home className="w-4 h-4" />
                  <span>Kembali ke Website Utama</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </nav>
            ) : (
              <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navigasi utama">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`relative px-3.5 py-2 text-[14px] font-bold transition-colors duration-150 ${
                        isActive
                          ? "text-[#1D5BD8] dark:text-[#60A5FA]"
                          : "text-[#111827] dark:text-white hover:text-[#1D5BD8] dark:hover:text-[#60A5FA]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2.5px] bg-[#1D5BD8] dark:bg-[#60A5FA] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </a>
                  );
                })}
              </nav>
            )}

            <div className="hidden sm:flex items-center gap-3.5">
              <button
                onClick={toggleTheme}
                aria-label="Ganti mode terang atau gelap"
                className="w-10 h-10 rounded-md flex items-center justify-center border border-[#E5E7EB] dark:border-white/15 text-[#111827] dark:text-white hover:border-[#1D5BD8] hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors duration-150"
              >
                <ThemeIcon className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink(
                  isSubPage
                    ? "Halo PrajaLinks, saya ingin konsultasi mengenai layanan ini."
                    : "Halo PrajaLinks, saya ingin konsultasi gratis mengenai pembuatan website / sistem digital."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[14px] font-bold bg-[#1D5BD8] hover:bg-[#1748B5] text-white transition-colors duration-150 shadow-sm"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Tombol mobile */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Ganti mode terang atau gelap"
                className="w-10 h-10 rounded-md flex items-center justify-center border border-[#E5E7EB] dark:border-white/15 text-[#111827] dark:text-white"
              >
                <ThemeIcon className="w-4 h-4" />
              </button>
              {isSubPage ? (
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1D5BD8] hover:bg-[#1648B0] text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Web Utama</span>
                </Link>
              ) : (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Buka menu navigasi"
                  aria-expanded={mobileMenuOpen}
                  className="w-10 h-10 rounded-md flex items-center justify-center bg-[#1D5BD8] text-white font-bold"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile (hanya di beranda utama) */}
      {!isSubPage && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: smoothEase }}
              className="fixed inset-x-0 top-[64px] z-30 p-3 sm:hidden"
            >
              <div className="bg-white dark:bg-[#111827] rounded-lg p-5 shadow-lg border border-[#E5E7EB] dark:border-white/15">
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3 text-[15px] font-bold text-[#111827] dark:text-white border-b border-[#E5E7EB] dark:border-white/10 hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </a>
                  ))}
                </div>
                <a
                  href={getWhatsAppLink("Halo PrajaLinks, saya ingin konsultasi gratis mengenai website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#1D5BD8] hover:bg-[#1748B5] text-white font-bold text-sm transition-colors duration-150"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
