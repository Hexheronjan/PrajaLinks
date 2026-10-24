import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Code2,
  Globe,
  Smartphone,
  Terminal,
  Landmark,
  MessageCircle,
  Zap,
  Star,
  Check,
  Lock,
} from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";

interface ServiceSEOData {
  slug: string;
  badge: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroSubtitle: string;
  priceStart: string;
  deliveryTime: string;
  waMessage: string;
  highlights: string[];
  features: {
    title: string;
    desc: string;
  }[];
  techStack: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

const serviceIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "jasa-pembuatan-website": Globe,
  "jasa-pembuatan-aplikasi": Smartphone,
  "jasa-pembuatan-tugas-coding": Terminal,
  "jasa-website-desa": Landmark,
};

const seoServices: Record<string, ServiceSEOData> = {
  "jasa-pembuatan-website": {
    slug: "jasa-pembuatan-website",
    badge: "Layanan Unggulan #1 — Website Profesional",
    title: "Jasa Pembuatan Website Profesional, Company Profile & Toko Online UMKM",
    seoTitle:
      "Jasa Pembuatan Website Profesional, Company Profile & UMKM | PrajaLinks",
    seoDescription:
      "Jasa pembuatan website profesional untuk perusahaan, UMKM, toko online katalog WhatsApp, sekolah, dan instansi. Desain eksklusif, cepat, SEO friendly, bergaransi. Melayani online seluruh Indonesia.",
    keywords: [
      "jasa pembuatan website",
      "jasa pembuatan website profesional",
      "jasa pembuatan website murah berkualitas",
      "jasa pembuatan website company profile",
      "jasa pembuatan website toko online",
      "jasa pembuatan website umkm",
      "jasa bikin website bisnis",
      "web developer indonesia",
      "jasa pembuatan website ponorogo",
      "prajalinks",
    ],
    heroSubtitle:
      "Tingkatkan kredibilitas bisnis dan omzet penjualan Anda dengan website modern berkecepatan tinggi, ramah tampilan HP (mobile-first), terintegrasi tombol order WhatsApp, dan mudah ditemukan di pencarian Google.",
    priceStart: "Mulai Rp 750.000",
    deliveryTime: "3 – 10 Hari Kerja",
    waMessage:
      "Halo PrajaLinks, saya ingin konsultasi mengenai Jasa Pembuatan Website (Company Profile / Bisnis / Toko Online).",
    highlights: [
      "Desain Kustom Eksklusif & Responsif di Semua Layar HP/Laptop",
      "Kecepatan Loading Tinggi (Skor Google PageSpeed 90+)",
      "Integrasi Katalog Produk & Checkout Langsung ke WhatsApp",
      "Optimasi Struktur SEO Dasar Agar Mudah Muncul di Google",
      "Hak Milik Penuh Source Code & Akses Dashboard Admin",
      "Garansi Perbaikan Bug & Panduan Pengelolaan Lengkap",
    ],
    features: [
      {
        title: "Company Profile Perusahaan & Instansi",
        desc: "Tampilkan profil perusahaan, visi-misi, layanan, legalitas, dan portofolio proyek dengan tata letak korporat yang meningkatkan kepercayaan klien.",
      },
      {
        title: "Toko Online & Katalog UMKM Direct WhatsApp",
        desc: "Pelanggan dapat memilih produk, melihat harga, dan menekan tombol pesan yang otomatis mengirim rincian belanja langsung ke nomor WhatsApp admin Anda.",
      },
      {
        title: "Landing Page Promosi & Iklan Konversi Tinggi",
        desc: "Halaman khusus yang dirancang terfokus untuk kampanye Google Ads, Meta Ads, atau TikTok Ads agar pengunjung langsung terdorong menghubungi bisnis Anda.",
      },
      {
        title: "Website Sekolah, Yayasan & Lembaga Pendidikan",
        desc: "Portal informasi akademik, berita kegiatan, profil pengajar, hingga formulir Pendaftaran Peserta Didik Baru (PPDB) online yang rapi.",
      },
      {
        title: "Arsitektur SEO-Friendly Siap Indeks Google",
        desc: "Dilengkapi peta situs (sitemap.xml), meta tag otomatis, struktur heading rapi, dan schema markup agar robot pencari Google mudah membaca bisnis Anda.",
      },
      {
        title: "Pendampingan Penuh & Bebas Biaya Tersembunyi",
        desc: "Tim kami membimbing Anda mulai dari pemilihan nama domain (.com / .id), pengaturan server, hingga cara mengupdate konten secara mandiri.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "WordPress Custom",
      "MySQL / PostgreSQL",
      "Cloud Hosting SSL",
    ],
    faqs: [
      {
        q: "Berapa biaya jasa pembuatan website di PrajaLinks?",
        a: "Biaya pembuatan website dimulai dari Rp 750.000 untuk Paket Starter (Landing Page UMKM), Rp 1.650.000 untuk Paket Bisnis (Company Profile / Katalog 5-7 halaman), hingga Rp 3.250.000+ untuk sistem kustom.",
      },
      {
        q: "Apakah saya perlu mengerti coding untuk mengelola website nantinya?",
        a: "Sama sekali tidak perlu. Kami menyediakan halaman admin yang mudah digunakan seperti mengetik di media sosial, lengkap dengan video panduan berbahasa Indonesia.",
      },
      {
        q: "Apakah melayani klien dari luar kota Ponorogo?",
        a: "Ya! Kami melayani pembuatan website secara full online untuk klien di Jakarta, Surabaya, Bandung, Medan, Makassar, Kalimantan, Bali, dan seluruh kota di Indonesia.",
      },
    ],
  },
  "jasa-pembuatan-aplikasi": {
    slug: "jasa-pembuatan-aplikasi",
    badge: "Layanan Unggulan #2 — Aplikasi Mobile & Web",
    title: "Jasa Pembuatan Aplikasi Android, iOS & Sistem Aplikasi Web Custom",
    seoTitle:
      "Jasa Pembuatan Aplikasi Android, iOS & Web App Custom | PrajaLinks",
    seoDescription:
      "Jasa pembuatan aplikasi Android, iOS, dan aplikasi web custom (Sistem Kasir POS, Inventaris Gudang, HRD, Sistem Informasi Manajemen). Kode bersih, aman, dan bergaransi untuk seluruh Indonesia.",
    keywords: [
      "jasa pembuatan aplikasi",
      "jasa pembuatan aplikasi android",
      "jasa pembuatan aplikasi mobile",
      "jasa pembuatan aplikasi web",
      "jasa bikin aplikasi",
      "jasa pembuatan sistem informasi",
      "jasa pembuatan aplikasi kasir pos",
      "jasa developer aplikasi indonesia",
      "software house indonesia",
      "prajalinks",
    ],
    heroSubtitle:
      "Otomatisasi operasional bisnis, pencatatan transaksi kasir, manajemen stok gudang, hingga aplikasi layanan pelanggan dalam genggaman smartphone Android, iOS, dan Dashboard Web Real-time.",
    priceStart: "Konsultasi Fleksibel Sesuai Fitur",
    deliveryTime: "7 – 21 Hari Kerja",
    waMessage:
      "Halo PrajaLinks, saya ingin konsultasi mengenai Jasa Pembuatan Aplikasi (Android / iOS / Aplikasi Web Sistem Informasi).",
    highlights: [
      "Pengembangan Aplikasi Mobile (Android & iOS) & Web App",
      "Database Terpusat Real-Time & Keamanan Akses Berlapis",
      "Dashboard Admin Interaktif Lengkap dengan Grafik Laporan",
      "Ekspor Laporan Otomatis ke Format PDF & Excel",
      "Desain UI/UX Modern yang Mudah Dipahami Staf & Pengguna",
      "Garansi Maintenance Teknis & Dukungan Pengembangan Fitur",
    ],
    features: [
      {
        title: "Aplikasi Kasir (POS) & Manajemen Stok Gudang",
        desc: "Catat penjualan harian, pantau stok barang masuk/keluar secara otomatis, cetak struk kasir, dan rekap laba rugi bulanan dari HP maupun komputer.",
      },
      {
        title: "Aplikasi Android & iOS (React Native / Hybrid)",
        desc: "Bangun aplikasi mobile untuk layanan booking, marketplace internal, kurir logistik, atau aplikasi keanggotaan pelanggan dengan performa mulus.",
      },
      {
        title: "Sistem Informasi Manajemen & ERP Kustom",
        desc: "Sistem internal perusahaan meliputi absensi pegawai, penggajian, manajemen proyek, CRM pelanggan, dan persetujuan dokumen digital.",
      },
      {
        title: "Integrasi Payment Gateway & WhatsApp Notifikasi",
        desc: "Hubungkan aplikasi Anda dengan pembayaran QRIS, Virtual Account bank, serta pengingat otomatis ke WhatsApp pengguna.",
      },
      {
        title: "REST API & Arsitektur Database Skala Besar",
        desc: "Dirancang menggunakan database PostgreSQL/MySQL terstruktur sehingga tetap cepat meskipun menampung puluhan ribu data transaksi.",
      },
      {
        title: "Serah Terima Source Code & Dokumentasi Lengkap",
        desc: "Anda mendapatkan hak milik penuh atas aplikasi beserta panduan instalasi dan pelatihan penggunaan untuk tim operasional Anda.",
      },
    ],
    techStack: [
      "React Native",
      "Next.js App Router",
      "Laravel",
      "Golang",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "REST API",
    ],
    faqs: [
      {
        q: "Apakah aplikasi bisa dibuka dari HP dan Laptop sekaligus?",
        a: "Sangat bisa. Kami merancang sistem berbasis Cloud sehingga data dari aplikasi Android/iOS langsung tersinkronisasi secara real-time dengan Dashboard Admin di Laptop.",
      },
      {
        q: "Bagaimana jika saya baru punya ide kasar dan belum punya desain aplikasi?",
        a: "Tidak masalah! Tim kami akan membantu menyusun alur fitur (flowchart) dan tampilan layar (UI/UX) terlebih dahulu sebelum proses koding dimulai.",
      },
      {
        q: "Apakah ada garansi jika ditemukan error setelah aplikasi selesai?",
        a: "Ya, setiap aplikasi mendapatkan masa garansi teknis penuh untuk perbaikan bug serta pendampingan saat aplikasi mulai digunakan oleh tim Anda.",
      },
    ],
  },
  "jasa-pembuatan-tugas-coding": {
    slug: "jasa-pembuatan-tugas-coding",
    badge: "Layanan Unggulan #3 — Coding & Akademik IT",
    title: "Jasa Pembuatan Tugas Coding, Pemrograman Kuliah & Sistem Skripsi IT",
    seoTitle:
      "Jasa Pembuatan Tugas Coding, Pemrograman & Skripsi IT Online | PrajaLinks",
    seoDescription:
      "Jasa pembuatan tugas coding kuliah, praktikum pemrograman, bug fixing, web PHP/Laravel/React, Python Machine Learning, Java, C++, dan pembuatan program Skripsi IT. Privasi aman 100%, kode rapi, dibimbing sampai paham.",
    keywords: [
      "jasa pembuatan tugas coding",
      "jasa tugas coding",
      "jasa joki tugas coding",
      "jasa tugas pemrograman",
      "jasa pembuatan program skripsi",
      "jasa coding python",
      "jasa coding php laravel",
      "jasa pembuatan tugas kuliah it",
      "bantuan tugas informatika",
      "jasa koding cepat",
    ],
    heroSubtitle:
      "Deadline tugas pemrograman mendesak atau bingung mengatasi error koding? Tim engineer PrajaLinks siap membantu pengerjaan tugas kuliah IT, project akhir mata kuliah, hingga sistem Skripsi/Tugas Akhir dengan kode bersih yang mudah Anda pelajari.",
    priceStart: "Harga Mahasiswa (Sesuai Tingkat Kesulitan)",
    deliveryTime: "Bisa Ekspres 24 Jam – Beberapa Hari",
    waMessage:
      "Halo PrajaLinks, saya ingin konsultasi mengenai Jasa Pembuatan Tugas Coding / Project Pemrograman.",
    highlights: [
      "Melayani Berbagai Bahasa: Python, PHP, JS, Java, C++, Golang",
      "Kode Bersih (Clean Code) Dilengkapi Komentar Penjelasan Baris",
      "Dibantu Setup & Install di Laptop Sampai Program Berjalan Lancar",
      "Bimbingan Penjelasan Alur Kode Agar Siap Presentasi / Sidang",
      "Privasi & Identitas Klien Dijamin Rahasia 100%",
      "Respons Cepat 24 Jam untuk Kebutuhan Deadline Mendesak",
    ],
    features: [
      {
        title: "Tugas Pemrograman Dasar & Struktur Data",
        desc: "Pengerjaan algoritma, OOP (Object-Oriented Programming), struktur data, dan aplikasi console/GUI menggunakan Python, C++, C#, atau Java.",
      },
      {
        title: "Project Mata Kuliah Pemrograman Web (CRUD & Fullstack)",
        desc: "Pembuatan project web kampus menggunakan HTML/CSS/JS, PHP Native, CodeIgniter, Laravel, React.js, atau Next.js lengkap dengan database MySQL.",
      },
      {
        title: "Python, Data Science & Machine Learning",
        desc: "Pengolahan dataset, klasifikasi, prediksi, clustering, pengolahan citra (OpenCV), hingga pembuatan dashboard Streamlit atau Flask.",
      },
      {
        title: "Pembuatan Sistem Aplikasi Skripsi / Tugas Akhir (TA)",
        desc: "Pembangunan aplikasi web atau mobile sesuai judul penelitian skripsi Anda, lengkap dengan pengujian fitur dan pendampingan revisi dosen penguji.",
      },
      {
        title: "Perbaikan Error (Bug Fixing) & Melanjutkan Kode Macet",
        desc: "Project Anda error saat dijalankan atau kurang beberapa fitur lagi? Kirimkan source code Anda, tim kami akan melacak dan memperbaikinya dengan cepat.",
      },
      {
        title: "Sesi Penjelasan & Panduan Run di Laptop Anda",
        desc: "Kami tidak sekadar mengirim file zip. Kami memastikan program berjalan di perangkat Anda via panduan langkah demi langkah atau remote AnyDesk/TeamViewer.",
      },
    ],
    techStack: [
      "Python",
      "PHP & Laravel",
      "JavaScript & React",
      "Next.js",
      "Java",
      "C / C++",
      "MySQL & PostgreSQL",
      "Flutter / React Native",
    ],
    faqs: [
      {
        q: "Bagaimana cara memesan jasa pembuatan tugas coding di PrajaLinks?",
        a: "Cukup klik tombol WhatsApp, kirimkan soal/modul tugas atau deskripsi project beserta batas waktu (deadline) pengumpulannya. Tim kami akan langsung memberikan estimasi biaya dan waktu selesai.",
      },
      {
        q: "Apakah nanti dijelaskan cara kerja kodenya supaya saya bisa presentasi?",
        a: "Pasti! Kami menyertakan komentar penjelasan di dalam kode dan Anda bebas bertanya mengenai alur logika program maupun cara menjalankannya di laptop Anda.",
      },
      {
        q: "Apakah privasi saya aman?",
        a: "Privasi Anda 100% aman dan dirahasiakan. Nama, kampus, maupun file project Anda tidak pernah kami publikasikan ke pihak mana pun.",
      },
    ],
  },
  "jasa-website-desa": {
    slug: "jasa-website-desa",
    badge: "Layanan Pemerintahan — Desa Digital & SID",
    title: "Jasa Pembuatan Website Desa & Sistem Informasi Desa (SID) Terintegrasi",
    seoTitle:
      "Jasa Pembuatan Website Desa & Sistem Informasi Desa (SID) | PrajaLinks",
    seoDescription:
      "Jasa pembuatan website desa resmi (.desa.id), Sistem Informasi Desa (SID), pelayanan surat online warga, dan transparansi APBDes. Lengkap dokumen SPJ, faktur, dan pelatihan perangkat desa.",
    keywords: [
      "jasa pembuatan website desa",
      "jasa website desa",
      "sistem informasi desa",
      "aplikasi pelayanan surat desa",
      "website desa transparansi apbdes",
      "pembuatan web desa spj lengkap",
      "portal desa digital",
      "prajalinks",
    ],
    heroSubtitle:
      "Wujudkan keterbukaan informasi publik, publikasi potensi UMKM desa, serta pelayanan administrasi surat warga secara mandiri dari HP. Dilengkapi dokumen administrasi SPJ Dana Desa yang sah dan lengkap.",
    priceStart: "Mulai Rp 1.650.000 – Rp 3.250.000",
    deliveryTime: "7 – 14 Hari Kerja",
    waMessage:
      "Halo PrajaLinks, kami ingin berkonsultasi mengenai pembuatan Website Desa / Sistem Informasi Desa (SID).",
    highlights: [
      "Modul Pengajuan Surat Mandiri Warga via HP (SKTM, Domisili, SKU)",
      "Infografis Transparansi Anggaran APBDes & Realisasi Pembangunan",
      "Berita Kegiatan Desa, Profil Perangkat & Peta Wilayah Desa",
      "Etalase Produk UMKM Warga & Promosi Desa Wisata",
      "Dokumen SPJ Lengkap (Invoice, Kuitansi Bermaterai, BAST)",
      "Pelatihan Operator Desa Sampai Mahir Mengelola Website",
    ],
    features: [
      {
        title: "Layanan Administrasi Surat Online 24 Jam",
        desc: "Warga cukup mengisi NIK dan keperluan surat dari smartphone. Operator desa menerima notifikasi dan draf surat siap cetak dalam hitungan detik.",
      },
      {
        title: "Transparansi APBDes & Grafik Realisasi",
        desc: "Menampilkan rincian pendapatan, belanja desa, dan progres pembangunan fisik dalam bentuk grafik visual yang rapi dan mudah dipahami masyarakat.",
      },
      {
        title: "Pendampingan Pendaftaran Domain Resmi .desa.id",
        desc: "Tim kami membantu menyiapkan persyaratan dan proses pengajuan domain resmi pemerintah desa (.desa.id) hingga aktif sepenuhnya.",
      },
      {
        title: "Bimbingan Teknis Operator & Perangkat Desa",
        desc: "Dilengkapi buku/video panduan berbahasa Indonesia serta pendampingan langsung agar perangkat desa mandiri mengunggah berita dan pengumuman.",
      },
      {
        title: "Siap Administrasi SPJ Anggaran Desa",
        desc: "Kami menerbitkan proposal penawaran, rincian RAB, invoice, kuitansi resmi, dan Berita Acara Serah Terima (BAST) sesuai standar pelaporan desa.",
      },
      {
        title: "Keamanan Server & Backup Data Berkala",
        desc: "Dilengkapi proteksi keamanan SSL dan pencadangan data berkala untuk menjaga portal desa tetap aman dan online setiap saat.",
      },
    ],
    techStack: [
      "Next.js / Laravel",
      "Database Terenkripsi",
      "Modul Cetak Surat PDF",
      "Grafik APBDes Interaktif",
      "Integrasi WhatsApp Operator",
      "Domain .desa.id Ready",
    ],
    faqs: [
      {
        q: "Apakah PrajaLinks menyediakan berkas lengkap untuk SPJ Dana Desa?",
        a: "Ya, kami menyediakan seluruh dokumen administrasi mulai dari surat penawaran, RAB, invoice, kuitansi bermaterai, hingga Berita Acara Serah Terima (BAST).",
      },
      {
        q: "Apakah perangkat desa akan diajari cara mengisi berita dan mengelola surat?",
        a: "Tentu. Kami memberikan pelatihan sampai mahir serta video tutorial langkah demi langkah yang bisa diputar ulang kapan saja oleh operator desa.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(seoServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = seoServices[slug];

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan | PrajaLinks",
    };
  }

  const canonicalUrl = `https://www.prajalinks.my.id/layanan/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: canonicalUrl,
      siteName: siteData.brand.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = seoServices[slug];

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(seoServices).filter(
    (s) => s.slug !== service.slug
  );

  const ServiceIcon = serviceIcons[service.slug] || Code2;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.prajalinks.my.id/layanan/${service.slug}#service`,
        name: service.title,
        description: service.seoDescription,
        url: `https://www.prajalinks.my.id/layanan/${service.slug}`,
        provider: {
          "@type": "ProfessionalService",
          name: siteData.brand.name,
          url: "https://www.prajalinks.my.id",
          telephone: `+${siteData.brand.waNumber}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteData.brand.address,
            addressLocality: "Ponorogo",
            addressRegion: "Jawa Timur",
            addressCountry: "ID",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://www.prajalinks.my.id",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: `https://www.prajalinks.my.id/layanan/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative overflow-hidden pt-28 pb-20 bg-[#FAF9F6] dark:bg-[#0B1120] min-h-screen">
      {/* -------------------------------------------------------------
          Ambient Glow & Smooth Curved SVG Latar Belakang Khas PrajaLinks
      -------------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#1D5BD8]/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-[#C88A23]/5 blur-3xl pointer-events-none"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        fill="none"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.35] dark:opacity-[0.15]"
        preserveAspectRatio="none"
      >
        <path
          d="M -100,120 C 320,40 680,260 1100,100 C 1280,30 1420,120 1560,90"
          stroke="url(#service-curve-gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient
            id="service-curve-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1D5BD8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#C88A23" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1D5BD8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-[#4B5563] dark:text-slate-300 mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#1D5BD8] dark:text-[#60A5FA] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Beranda PrajaLinks</span>
          </Link>
          <span>/</span>
          <span className="text-[#111827] dark:text-white truncate max-w-xs sm:max-w-md">
            {service.title}
          </span>
        </nav>

        {/* ==============================================================
            HERO DUA KOLOM: Headline + Mockup Interaktif macOS Studio
        ============================================================== */}
        <div className="relative rounded-[32px] bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-15px_rgba(29,91,216,0.08)] overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Kolom Kiri: Teks & Penawaran */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] dark:bg-[#1D5BD8]/20 text-[#1D5BD8] dark:text-[#60A5FA] text-xs sm:text-sm font-bold mb-5">
                <ServiceIcon className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA]" />
                <span>{service.badge}</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#111827] dark:text-white leading-[1.25] tracking-tight mb-5">
                {service.title}
              </h1>

              {/* Garis Coretan Emas Khas PrajaLinks */}
              <div className="w-24 h-1.5 bg-[#C88A23] rounded-full -mt-2 mb-6 opacity-90" />

              <p className="text-base sm:text-lg text-[#374151] dark:text-slate-200 font-medium leading-relaxed mb-8">
                {service.heroSubtitle}
              </p>

              {/* Quick Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#C88A23]" />
                    <span>Biaya Mulai</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                    {service.priceStart}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-1">
                    <Clock className="w-4 h-4 text-[#C88A23]" />
                    <span>Pengerjaan</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                    {service.deliveryTime}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D5BD8] dark:text-[#60A5FA] mb-1">
                    <Globe className="w-4 h-4 text-[#C88A23]" />
                    <span>Jangkauan</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                    Online Se-Indonesia
                  </p>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {service.highlights.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs sm:text-[13.5px] font-bold text-[#1F2937] dark:text-slate-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1D5BD8] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppLink(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1D5BD8] hover:bg-[#1648B0] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1D5BD8]/25 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/#demo-desa"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/15 text-[#111827] dark:text-white font-bold text-sm transition-all"
                >
                  <span>Coba Demo Interaktif</span>
                </Link>
              </div>
            </div>

            {/* Kolom Kanan: Showcase Mockup Interaktif macOS Studio */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] rounded-[24px] border border-slate-200/90 dark:border-white/15 bg-white dark:bg-[#0F172A] shadow-xl overflow-hidden">
                {/* Header macOS Bersih */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#F8FAFC] dark:bg-[#1E293B] border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>
                    <span className="h-3 w-px bg-slate-300 dark:bg-white/20 mx-1" />
                    <span className="text-xs font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#C88A23] fill-[#C88A23]" />
                      PrajaLinks Live Preview
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-[#16A34A] bg-[#DCFCE7] dark:bg-emerald-950/60 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                    <span>Aktif 24 Jam</span>
                  </div>
                </div>

                {/* Konten Showcase Spesifik Layanan */}
                <div className="p-4 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] dark:from-[#0B1528] dark:to-[#0F172A]">
                  {/* 1. MOCKUP WEBSITE */}
                  {service.slug === "jasa-pembuatan-website" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/10 rounded-lg border border-slate-200 dark:border-white/10 text-[11px] text-[#4B5563] dark:text-slate-300 font-mono">
                        <Lock className="w-3 h-3 text-[#16A34A]" />
                        <span>https://bisnis-anda.com</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA]">
                            Company Profile & Toko UMKM
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A]">
                            Skor 98/100
                          </span>
                        </div>
                        <p className="text-xs text-[#4B5563] dark:text-slate-300 leading-relaxed mb-3">
                          Website berkecepatan tinggi dengan integrasi tombol
                          order langsung WhatsApp.
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-bold pt-2 border-t border-slate-100 dark:border-white/10">
                          <span className="text-[#111827] dark:text-white">
                            Google PageSpeed
                          </span>
                          <span className="text-[#16A34A]">✓ Super Cepat</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. MOCKUP APLIKASI */}
                  {service.slug === "jasa-pembuatan-aplikasi" && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 shadow-xs">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100 dark:border-white/10">
                          <span className="text-xs font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
                            <Smartphone className="w-3.5 h-3.5 text-[#1D5BD8]" />
                            <span>Kasir POS & Android</span>
                          </span>
                          <span className="text-[10px] font-bold text-[#16A34A]">
                            Stok Terhubung
                          </span>
                        </div>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between font-medium text-[#4B5563] dark:text-slate-300">
                            <span>1x Order #PL-892</span>
                            <span className="font-bold text-[#111827] dark:text-white">
                              Rp 176.000
                            </span>
                          </div>
                          <div className="flex justify-between font-medium text-[#4B5563] dark:text-slate-300">
                            <span>Metode Bayar</span>
                            <span className="text-xs font-bold text-[#1D5BD8]">
                              QRIS & Tunai
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-bold">
                          <span>Status Laporan</span>
                          <span className="text-[#16A34A]">✓ Sinkron Real-time</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. MOCKUP TUGAS CODING */}
                  {service.slug === "jasa-pembuatan-tugas-coding" && (
                    <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-[#1E1E1E] text-white p-3.5 font-mono text-[11px] leading-relaxed shadow-xs">
                      <div className="flex items-center justify-between text-slate-400 text-[10.5px] pb-2 border-b border-white/10">
                        <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                          <Terminal className="w-3.5 h-3.5 text-sky-400" />
                          <span>tugas_coding.py</span>
                        </span>
                        <span className="text-emerald-400 font-bold">
                          Python 3.11
                        </span>
                      </div>
                      <div className="pt-2 space-y-1">
                        <p className="text-slate-400">
                          # PrajaLinks — Jasa Pembuatan Tugas Coding
                        </p>
                        <p>
                          <span className="text-[#C586C0]">def</span>{" "}
                          <span className="text-[#DCDCAA]">selesaikan_tugas</span>
                          ():
                        </p>
                        <p className="pl-3 text-[#9CDCFE]">
                          return{" "}
                          <span className="text-[#CE9178]">
                            &quot;100% Berjalan Tanpa Error ✓&quot;
                          </span>
                        </p>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px] text-emerald-400 font-bold">
                        <span>$ python test_tugas.py</span>
                        <span>[10/10 PASS • DIBIMBING]</span>
                      </div>
                    </div>
                  )}

                  {/* 4. MOCKUP WEBSITE DESA */}
                  {service.slug === "jasa-website-desa" && (
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA]">
                        <span>Portal Resmi Desa .desa.id</span>
                        <span className="text-[10px] text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                          SPJ Lengkap
                        </span>
                      </div>
                      <p className="text-xs text-[#4B5563] dark:text-slate-300">
                        Pelayanan surat online mandiri (SKTM, Domisili) &
                        transparansi APBDes terbuka.
                      </p>
                      <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-bold">
                        <span>Status Sistem</span>
                        <span className="text-[#16A34A]">✓ Siap Audit APBDes</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Kartu Studio */}
                <div className="px-4 py-3 bg-[#F8FAFC] dark:bg-[#1E293B] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#111827] dark:text-white">
                  <span className="flex items-center gap-1.5 text-[#1D5BD8] dark:text-[#60A5FA]">
                    <Check className="w-4 h-4 text-[#16A34A]" />
                    <span>Garansi Pengerjaan</span>
                  </span>
                  <span className="text-xs text-[#6B7280] dark:text-slate-400">
                    100+ Proyek Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            FITUR & SOLUSI
        ============================================================== */}
        <section className="mb-14">
          <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-[#111827] dark:text-white mb-3">
            Cakupan Layanan & Solusi yang Kami Kerjakan
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] dark:text-slate-300 font-medium mb-8">
            Setiap proyek dikerjakan langsung oleh tim engineer PrajaLinks dengan
            standar kode bersih dan performa tinggi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, idx) => (
              <div
                key={feat.title}
                className="rounded-[24px] bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6 shadow-sm hover:border-[#1D5BD8] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF2FF] dark:bg-[#1D5BD8]/20 text-[#1D5BD8] dark:text-[#60A5FA] font-extrabold flex items-center justify-center text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#111827] dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#4B5563] dark:text-slate-300 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================
            TEKNOLOGI YANG DIDUKUNG
        ============================================================== */}
        <section className="mb-14 rounded-[28px] bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Code2 className="w-5 h-5 text-[#1D5BD8]" />
            <h2 className="font-heading text-lg sm:text-xl font-extrabold text-[#111827] dark:text-white">
              Teknologi & Bahasa Pemrograman yang Didukung
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-[#F8FAFC] dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 text-xs sm:text-sm font-bold text-[#111827] dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ==============================================================
            FAQ
        ============================================================== */}
        <section className="mb-14">
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#111827] dark:text-white mb-6">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-6"
              >
                <h3 className="font-heading text-base sm:text-lg font-extrabold text-[#111827] dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] dark:text-slate-300 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================================
            CROSS-LINKS KE LAYANAN LAINNYA
        ============================================================== */}
        <section className="pt-6 border-t border-[#E2E8F0] dark:border-white/10">
          <h2 className="font-heading text-lg sm:text-xl font-extrabold text-[#111827] dark:text-white mb-4">
            Jelajahi Layanan Utama PrajaLinks Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/layanan/${item.slug}`}
                className="group rounded-2xl bg-white dark:bg-[#111C33] border border-[#E2E8F0] dark:border-white/10 p-5 hover:border-[#1D5BD8] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA] block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-[#111827] dark:text-white group-hover:text-[#1D5BD8] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D5BD8] dark:text-[#60A5FA] mt-4">
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
