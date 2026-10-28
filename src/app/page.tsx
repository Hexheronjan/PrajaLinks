import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { DualTrack } from "@/components/sections/DualTrack";
import { Services } from "@/components/sections/Services";
import { VillageDemo } from "@/components/sections/VillageDemo";
import { VideoSection } from "@/components/sections/VideoSection";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Founder } from "@/components/sections/Founder";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Dual Marquee (Tech & Services) */}
      <Marquee />

      {/* 4. Dua Jalur (Pemerintahan Desa vs Bisnis/UMKM) */}
      <DualTrack />

      {/* 5. Layanan Bento Grid */}
      <Services />

      {/* 6. Demo Website Desa Interaktif */}
      <VillageDemo />

      {/* 7. Video Section (Lihat Cara Kerjanya) */}
      <VideoSection />

      {/* 8. Portofolio (Pinned Horizontal Desktop / Drag Mobile) */}
      <Portfolio />

      {/* 8. Paket Harga (4 Kartu & WA pre-filled) */}
      <Pricing />

      {/* 9. Proses Kerja 5 Langkah */}
      <Process />

      {/* 10. Kenapa PrajaLinks (Poin Jujur & Terbukti) */}
      <WhyUs />

      {/* 11. Di Balik PrajaLinks (Founder & Dedikasi) */}
      <Founder />

      {/* 11. Statistik (Count-up Angka Nyata) */}
      <Stats />

      {/* 12. Testimoni (Explicit Placeholder Transparan) */}
      <Testimonials />

      {/* 13. FAQ Accordion */}
      <FAQ />

      {/* 14. CTA Penutup (Teks Besar Bergerak & Magnetic WA Button) */}
      <CTA />

      {/* 15. Formulir Kontak & Info Studio */}
      <Contact />
    </>
  );
}
