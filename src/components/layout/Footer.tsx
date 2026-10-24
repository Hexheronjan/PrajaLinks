import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { Logo } from "@/components/common/Logo";

const footerNav = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Layanan", href: "/#layanan" },
  { name: "Demo Interaktif", href: "/#demo-desa" },
  { name: "Portofolio", href: "/#portofolio" },
  { name: "Harga", href: "/#harga" },
  { name: "Proses Kerja", href: "/#proses" },
  { name: "Tentang", href: "/#tentang" },
  { name: "FAQ", href: "/#faq" },
  { name: "Kontak", href: "/#kontak" },
];

const footerServices = [
  {
    name: "Jasa Pembuatan Website",
    href: "/layanan/jasa-pembuatan-website",
  },
  {
    name: "Jasa Pembuatan Aplikasi",
    href: "/layanan/jasa-pembuatan-aplikasi",
  },
  {
    name: "Jasa Pembuatan Tugas Coding",
    href: "/layanan/jasa-pembuatan-tugas-coding",
  },
  {
    name: "Website Desa & Sistem Informasi",
    href: "/layanan/jasa-website-desa",
  },
  {
    name: "Company Profile & Toko Online",
    href: "/layanan/jasa-pembuatan-website",
  },
  {
    name: "Aplikasi Android, iOS & Kasir POS",
    href: "/layanan/jasa-pembuatan-aplikasi",
  },
];

export const Footer = () => {
  const { brand } = siteData;
  const isReal = (v: string) => !v.startsWith("[");

  return (
    <footer className="bg-[#FAF9F6] dark:bg-[#0B1120] text-[#111827] dark:text-white border-t border-[#E5E7EB] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5E7EB] dark:border-white/10">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#374151] dark:text-slate-200 max-w-md font-medium">
              {brand.tagline} Studio pembuatan website desa, aplikasi bisnis, serta jasa pembuatan tugas coding online melayani seluruh Indonesia dari Ponorogo, Jawa Timur.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm sm:text-[15px] font-bold text-[#111827] dark:text-white">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
                >
                  WhatsApp {brand.waDisplay}
                </a>
              </li>
              {isReal(brand.email) && (
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {brand.email}
                  </a>
                </li>
              )}
              {isReal(brand.instagram) && (
                <li>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-[#C88A23] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Instagram: prajaLinks ({brand.instagramDisplay || "@prajalinks"})</span>
                  </a>
                </li>
              )}
              {isReal(brand.tiktok) && (
                <li>
                  <a
                    href={brand.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-bold text-[#111827] dark:text-white">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-4">
              Layanan
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-bold text-[#111827] dark:text-white">
              {footerServices.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-4">
              Studio
            </h4>
            <div className="space-y-3.5 text-sm sm:text-[15px] text-[#111827] dark:text-white font-medium">
              <div>
                <span className="block text-xs font-bold text-[#5F6978] dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                  Alamat
                </span>
                <span className="font-bold leading-relaxed">{brand.address}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-[#5F6978] dark:text-slate-400 mb-0.5 uppercase tracking-wider">
                  Jam Layanan
                </span>
                <span className="font-bold">{brand.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#4B5563] dark:text-slate-300 font-medium">
          <div className="space-y-1">
            <p className="font-bold text-[#111827] dark:text-white">
              &copy; {new Date().getFullYear()} {brand.name}. Hak cipta dilindungi.
            </p>
            <p>PrajaLinks adalah studio swasta independen melayani seluruh Indonesia.</p>
          </div>
          <a
            href="#beranda"
            className="inline-flex items-center gap-1.5 font-bold text-[#111827] dark:text-white hover:text-[#1D5BD8] dark:hover:text-[#60A5FA] transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
