import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";

const DualTrack = dynamic(() =>
  import("@/components/sections/DualTrack").then((m) => m.DualTrack)
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services)
);
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
      <Suspense>
        <DualTrack />
      </Suspense>

      {/* 5. Layanan Bento Grid */}
      <Suspense>
        <Services />
      </Suspense>

      {/* 6. Demo Website Desa Interaktif */}
      <Suspense>
        <VillageDemo />
      </Suspense>

      {/* 7. Video Section (Lihat Cara Kerjanya) */}
      <Suspense>
        <VideoSection />
      </Suspense>

      {/* 8. Portofolio (Pinned Horizontal Desktop / Drag Mobile) */}
      <Suspense>
        <Portfolio />
      </Suspense>

      {/* 9. Paket Harga (4 Kartu & WA pre-filled) */}
      <Suspense>
        <Pricing />
      </Suspense>

      {/* 10. Proses Kerja 5 Langkah */}
      <Suspense>
        <Process />
      </Suspense>

      {/* 11. Kenapa PrajaLinks (Poin Jujur & Terbukti) */}
      <Suspense>
        <WhyUs />
      </Suspense>

      {/* 12. Di Balik PrajaLinks (Founder & Dedikasi) */}
      <Suspense>
        <Founder />
      </Suspense>

      {/* 13. Statistik (Count-up Angka Nyata) */}
      <Suspense>
        <Stats />
      </Suspense>

      {/* 14. Testimoni (Explicit Placeholder Transparan) */}
      <Suspense>
        <Testimonials />
      </Suspense>

      {/* 15. FAQ Accordion */}
      <Suspense>
        <FAQ />
      </Suspense>

      {/* 16. CTA Penutup (Teks Besar Bergerak & Magnetic WA Button) */}
      <Suspense>
        <CTA />
      </Suspense>

      {/* 17. Formulir Kontak & Info Studio */}
      <Suspense>
        <Contact />
      </Suspense>
    </>
  );
}
