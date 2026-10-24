"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
    name: "Beranda",
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
    name: "Portofolio",
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
    id: "tentang",
    name: "Tentang",
    href: "#tentang",
    icon: Info,
  },
];

export const MobileBottomNav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("beranda");
  const [ready, setReady] = useState(false);

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
    if (pathname?.startsWith("/layanan")) return;

    const sectionIds = ["beranda", "layanan", "portofolio", "harga", "tentang"];

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
  }, [pathname]);

  if (pathname?.startsWith("/layanan")) {
    return null;
  }

  return (
    <nav
      aria-label="Navigasi Bawah Mobile"
      aria-hidden={!ready}
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-t border-[#E5E7EB] dark:border-white/10 px-3 py-2 shadow-sm transition-all duration-300 ease-out ${
        ready ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          if (item.isCenter) {
            return (
              <a
                key={item.id}
                href={item.href}
                className="relative -my-1"
                aria-label={item.name}
              >
                <div
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-xs transition-colors duration-150 ${
                    isActive
                      ? "bg-[#1D5BD8] text-white"
                      : "bg-[#1D5BD8] text-white hover:bg-[#1748B5]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors duration-150 ${
                isActive
                  ? "text-[#1D5BD8] dark:text-[#60A5FA] font-semibold"
                  : "text-[#5F6978] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white"
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
