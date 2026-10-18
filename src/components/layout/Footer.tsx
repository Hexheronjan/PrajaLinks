import { ArrowUp } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { Logo } from "@/components/common/Logo";

const footerNav = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#layanan" },
  { name: "Demo Website Desa", href: "#demo-desa" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Harga", href: "#harga" },
  { name: "Proses Kerja", href: "#proses" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#kontak" },
];

const footerServices = [
  "Website Desa & Sistem Informasi",
  "Company Profile & UMKM",
  "Website Sekolah",
  "Toko Online",
  "Aplikasi Web & Mobile",
  "Pemeliharaan & Keamanan",
];

export const Footer = () => {
  const { brand } = siteData;
  const isReal = (v: string) => !v.startsWith("[");

  return (
    <footer className="bg-slate-50 dark:bg-[#0C1631] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/15">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600 dark:text-[#B9C6E2] max-w-md">
              {brand.tagline} Studio pembuatan website, sistem informasi, serta aplikasi web dan mobile dari Ponorogo, Jawa Timur.
            </p>

            <ul className="mt-6 space-y-1.5 text-sm font-semibold text-slate-900 dark:text-white">
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-300">
                  WhatsApp {brand.waDisplay}
                </a>
              </li>
              {isReal(brand.email) && (
                <li>
                  <a href={`mailto:${brand.email}`} className="hover:text-blue-700 dark:hover:text-blue-300">
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
                    className="hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4 text-pink-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram: prajaLinks ({brand.instagramDisplay || "@prajalinks"})</span>
                  </a>
                </li>
              )}
              {isReal(brand.tiktok) && (
                <li>
                  <a href={brand.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-300">
                    TikTok
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300 mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-900 dark:text-white">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300 mb-4">Layanan</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-900 dark:text-white">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#layanan" className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300 mb-4">Studio</h4>
            <div className="space-y-4 text-sm text-slate-900 dark:text-white">
              <p>
                <span className="block text-xs font-bold text-slate-500 dark:text-[#B9C6E2] mb-0.5">Alamat</span>
                <span className="font-semibold leading-relaxed">{brand.address}</span>
              </p>
              <p>
                <span className="block text-xs font-bold text-slate-500 dark:text-[#B9C6E2] mb-0.5">Jam layanan</span>
                <span className="font-semibold">{brand.workingHours}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-[#B9C6E2]">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900 dark:text-white">
              &copy; {new Date().getFullYear()} {brand.name}. Hak cipta dilindungi.
            </p>
            <p>PrajaLinks adalah studio swasta dan tidak berafiliasi dengan instansi pemerintah mana pun.</p>
          </div>
          <a href="#beranda" className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
