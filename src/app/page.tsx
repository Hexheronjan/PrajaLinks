import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { DualTrack } from "@/components/sections/DualTrack";
import { Services } from "@/components/sections/Services";

const VillageDemo = dynamic(() =>
  import("@/components/sections/VillageDemo").then((m) => m.VillageDemo)
);
const VideoSection = dynamic(() =>
  import("@/components/sections/VideoSection").then((m) => m.VideoSection)
);
const Portfolio = dynamic(() =>
  import("@/components/sections/Portfolio").then((m) => m.Portfolio)
);
const Pricing = dynamic(() =>
  import("@/components/sections/Pricing").then((m) => m.Pricing)
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process)
);
const WhyUs = dynamic(() =>
  import("@/components/sections/WhyUs").then((m) => m.WhyUs)
);
const Founder = dynamic(() =>
  import("@/components/sections/Founder").then((m) => m.Founder)
);
const Stats = dynamic(() =>
  import("@/components/sections/Stats").then((m) => m.Stats)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials)
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => m.FAQ)
);
const CTA = dynamic(() =>
  import("@/components/sections/CTA").then((m) => m.CTA)
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact)
);

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
