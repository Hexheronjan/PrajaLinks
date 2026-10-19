"use client";

import { useEffect, useState } from "react";
import { Home, Users, Briefcase, Package, Info } from "lucide-react";
import { LOADER_DONE_EVENT } from "@/components/common/InitialLoader";

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isCenter?: boolean;
}

const navItems: NavItem[] = [
  {
    id: "beranda",
    name: "Home",
    href: "#beranda",
    icon: Home,
  },
  {
    id: "layanan",
    name: "Layanan",
    href: "#layanan",
    icon: Users,
  },
  {
    id: "portofolio",
    name: "Portfolio",
    href: "#portofolio",
    icon: Briefcase,
    isCenter: true,
  },
  {
    id: "harga",
    name: "Paket",
    href: "#harga",
    icon: Package,
  },
  {
    id: "faq",
    name: "Tentang",
    href: "#faq",
    icon: Info,
  },
];

export const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState("beranda");
  const [ready, setReady] = useState(false);

  // Tunggu loader awal selesai sebelum navigasi muncul
  useEffect(() => {
    if ((window as unknown as { __plLoaded?: boolean }).__plLoaded) {
      setReady(true);
      return;
    }
    const onDone = () => setReady(true);
    window.addEventListener(LOADER_DONE_EVENT, onDone);
    return () => window.removeEventListener(LOADER_DONE_EVENT, onDone);
  }, []);

  useEffect(() => {
    const sectionIds = ["beranda", "layanan", "portofolio", "harga", "faq"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navigasi Bawah Mobile"
      aria-hidden={!ready}
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0A0D1A]/95 dark:bg-[#070B16]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out ${
        ready ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          if (item.isCenter) {
            // Pill button in the center (like the screenshot with royal blue/purple background)
            return (
              <a
                key={item.id}
                href={item.href}
                className="relative -my-1"
                aria-label={item.name}
              >
                <div
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-heading font-extrabold text-xs transition-all duration-300 shadow-lg ${
                    isActive
                      ? "bg-[#4338CA] text-white shadow-indigo-600/40 scale-105"
                      : "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </a>
            );
          }

          // Regular icon items
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                isActive
                  ? "text-blue-400 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              aria-label={item.name}
            >
              <Icon className="w-5 h-5 stroke-[1.8]" />
              <span className="sr-only">{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
