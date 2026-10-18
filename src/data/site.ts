export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
    location: string;
    foundedText: string;
    waNumber: string;
    waDisplay: string;
    email: string;
    address: string;
    workingHours: string;
    instagram: string;
    instagramDisplay?: string;
    tiktok: string;
    github: string;
  };
  marqueeTech: string[];
  marqueeServices: string[];
  dualTrack: {
    village: {
      tag: string;
      title: string;
      badge: string;
      description: string;
      highlights: string[];
      sampleOutput: string;
      features: { title: string; desc: string }[];
    };
    business: {
      tag: string;
      title: string;
      badge: string;
      description: string;
      highlights: string[];
      sampleOutput: string;
      features: { title: string; desc: string }[];
    };
  };
  services: {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    description: string;
    tech: string[];
    featured?: boolean;
    colSpan?: string;
    icon: string;
  }[];
  villageDemo: {
    tabs: {
      id: string;
      name: string;
      icon: string;
      badge: string;
      title: string;
      description: string;
      content: {
        headline: string;
        stats?: { label: string; value: string }[];
        items?: { title: string; subtitle: string; date?: string; status?: string; amount?: string }[];
      };
    }[];
  };
  portfolio: {
    id: string;
    title: string;
    category: "Bisnis & UMKM" | "Pemerintahan Desa" | "Aplikasi & Edukasi";
    description: string;
    link: string;
    isExternal: boolean;
    isPlaceholder?: boolean;
    tags: string[];
    featuredImage: string;
    metrics: string;
    year: string;
  }[];
  pricing: {
    id: string;
    name: string;
    badge?: string;
    isPopular?: boolean;
    rawPrice: number;
    priceDisplay: string;
    period: string;
    targetAudience: string;
    description: string;
    features: string[];
    waMessage: string;
  }[];
  pricingNotes: string[];
  processSteps: {
    step: string;
    title: string;
    timeline: string;
    description: string;
    deliverables: string[];
  }[];
  whyUs: {
    id: string;
    title: string;
    desc: string;
    icon: string;
    proof: string;
  }[];
  stats: {
    label: string;
    value: number;
    suffix: string;
    description: string;
  }[];
  testimonialsPlaceholder: {
    note: string;
    slots: {
      id: string;
      name?: string;
      clientRole: string;
      location: string;
      placeholderText: string;
      rating?: number;
    }[];
  };
  faqs: {
    question: string;
    answer: string;
    category: string;
  }[];
}

export const siteData: SiteConfig = {
  brand: {
    name: "PrajaLinks",
    tagline: "Hubungkan desa dan bisnismu ke dunia digital.",
    description:
      "Mitra rekayasa web studio di Ponorogo untuk pembuatan website desa profesional, sistem informasi, toko online, dan aplikasi custom berkinerja tinggi.",
    location: "Ponorogo, Jawa Timur",
    foundedText: "Berbasis di Ponorogo, melayani seluruh Nusantara",
    waNumber: "6282338689711",
    waDisplay: "0823-3868-9711",
    email: "prajalinks@gmail.com",
    address: "Dukuh Krajan, Desa Morosari, Kec. Sukorejo, Kab. Ponorogo",
    workingHours: "24 Jam Nonstop",
    instagram: "https://www.instagram.com/prajalinks?vrfl=MTNxZHJiMWFuemtveQ==",
    instagramDisplay: "@prajalinks",
    tiktok: "[LINK_TIKTOK]",
    github: "https://github.com",
  },
  marqueeTech: [
    "WordPress",
    "Laravel",
    "Next.js",
    "React Native",
    "Golang",
    "Supabase",
    "PostgreSQL",
    "MySQL",
    "Cloud Server",
    "Tailwind CSS",
    "TypeScript",
    "Docker",
  ],
  marqueeServices: [
    "Website Desa Modern",
    "Sistem Informasi Desa (SID)",
    "Jasa Tugas Coding & Skripsi IT",
    "Company Profile Premium",
    "Toko Online & UMKM",
    "Aplikasi Web Khusus",
    "Bimbingan & Joki Coding Mahasiswa",
    "Layanan Surat Digital",
    "Transparansi APBDes",
    "Optimasi SEO & Google Maps",
    "Pemeliharaan & Keamanan Web",
  ],
  dualTrack: {
    village: {
      tag: "Jalur Pemerintahan Desa",
      title: "Desa Digital Transparan, Cepat Melayani Warga",
      badge: "Kebutuhan Desa & SPJ Ready",
      description:
        "Wujudkan transparansi anggaran, publikasi potensi desa, serta pelayanan administrasi surat mandiri yang bisa diakses warga tanpa antre di balai desa.",
      highlights: [
        "Transparansi APBDes & Infografis Anggaran Terbuka",
        "Modul Pengajuan Surat Mandiri (SKTM, Domisili, Usaha)",
        "Database Perangkat & Lembaga Desa Terstruktur",
        "Dokumen SPJ, Kuitansi & Faktur Resmi Tersedia",
      ],
      sampleOutput: "Portal Resmi Desa + Modul Pelayanan Surat Otomatis",
      features: [
        {
          title: "Pelayanan Surat 24 Jam",
          desc: "Warga mengisi form via HP, data otomatis terformat ke draf surat siap tanda tangan operator.",
        },
        {
          title: "Infografis APBDes Interaktif",
          desc: "Tampilkan grafik realisasi anggaran desa yang mudah dipahami warga dan memenuhi asas keterbukaan.",
        },
        {
          title: "Pelatihan Operator Desa",
          desc: "Pendampingan langsung atau video panduan hingga perangkat desa mandiri mengupdate berita dan data.",
        },
      ],
    },
    business: {
      tag: "Jalur Bisnis, UMKM & Sekolah",
      title: "Konversi Pengunjung Menjadi Pembeli Setia",
      badge: "Fokus Penjualan & Kredibilitas",
      description:
        "Tingkatkan wibawa bisnis Anda dengan website berkecepatan tinggi, navigasi bersih, dan integrasi WhatsApp instan yang mengubah impresi menjadi transaksi.",
      highlights: [
        "Desain Kustom Eksklusif (Bukan Sekadar Template)",
        "Kecepatan Akses Tinggi & Mobile-First",
        "Katalog Produk & Tombol Beli WhatsApp Terintegrasi",
        "SEO Lokal: Terindeks Google & Google Maps",
      ],
      sampleOutput: "Website Bisnis Responsif + Direct WhatsApp Checkout",
      features: [
        {
          title: "Katalog & Direct Order WhatsApp",
          desc: "Pengunjung memilih produk, otomatis mengirimkan rekap pesanan langsung ke WhatsApp admin penjualan.",
        },
        {
          title: "Tingkat Kecepatan 95+",
          desc: "Loading secepat kilat untuk mencegah calon pembeli kabur karena website lambat.",
        },
        {
          title: "Optimasi SEO Ponorogo & Nasional",
          desc: "Peluang muncul di halaman utama saat calon pembeli mencari jasa atau produk Anda.",
        },
      ],
    },
  },
  services: [
    {
      id: "web-custom",
      title: "Website Custom (Next.js / Laravel)",
      category: "High Performance",
      shortDesc: "Kecepatan akses tinggi, arsitektur modern, dan desain kustom untuk brand Anda.",
      description:
        "Solusi ideal untuk bisnis dan perusahaan yang membutuhkan arsitektur modern, tata kelola kode bersih, animasi proporsional, serta keleluasaan desain tanpa keterikatan template instan.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
      featured: true,
      colSpan: "lg:col-span-2",
      icon: "Code2",
    },
    {
      id: "web-desa",
      title: "Sistem Informasi Desa (SID) & Web Desa",
      category: "Pemerintahan",
      shortDesc: "Portal berita resmi desa, publikasi APBDes, profil desa, dan modul surat digital.",
      description:
        "Dibangun sesuai kaidah keterbukaan informasi publik desa, mudah dikelola oleh perangkat desa, lengkap dengan berita kegiatan, potensi wisata, dan transparansi.",
      tech: ["Next.js", "WordPress / Laravel", "MySQL", "Export PDF"],
      featured: true,
      colSpan: "lg:col-span-1",
      icon: "Landmark",
    },
    {
      id: "web-wp",
      title: "Website WordPress Bisnis & Sekolah",
      category: "Content Management",
      shortDesc: "Mudah dikelola sendiri, kaya fitur, biaya efisien, dan ramah pemula.",
      description:
        "Pilihan ideal untuk UMKM, profil sekolah, yayasan, dan blog profesional. Dilengkapi editor visual drag-and-drop agar Anda bisa mengedit teks dan foto kapan saja.",
      tech: ["WordPress", "Elementor Pro", "WooCommerce", "LiteSpeed"],
      colSpan: "lg:col-span-1",
      icon: "Globe",
    },
    {
      id: "app-web",
      title: "Aplikasi Web & Dashboard Khusus",
      category: "Enterprise System",
      shortDesc: "Sistem pencatatan internal, kasir online, inventaris, dan manajemen data.",
      description:
        "Digitalisasi alur kerja operasional bisnis atau lembaga Anda dengan hak akses bertingkat, laporan berkala, export Excel/PDF, dan integrasi database aman.",
      tech: ["Laravel", "React", "PostgreSQL", "Supabase"],
      colSpan: "lg:col-span-1",
      icon: "Layers",
    },
    {
      id: "app-mobile",
      title: "Aplikasi Mobile (Android & iOS)",
      category: "Mobile Solutions",
      shortDesc: "Jangkau pelanggan langsung di genggaman dengan aplikasi lintas platform.",
      description:
        "Pembuatan aplikasi mobile responsif dan mulus untuk absensi, layanan warga desa, atau katalog produk eksklusif dengan notifikasi push.",
      tech: ["React Native", "Expo", "REST API"],
      colSpan: "lg:col-span-1",
      icon: "Smartphone",
    },
    {
      id: "joki-coding",
      title: "Jasa Tugas Coding & Bimbingan IT",
      category: "Akademik & Mahasiswa",
      shortDesc: "Penyelesaian tugas pemrograman, skripsi IT, dan bimbingan koding kilat.",
      description:
        "Bantuan pengerjaan tugas kuliah, skripsi informatika/sistem informasi, perbaikan bug kode, hingga bimbingan logika koding sampai paham (Python, Web, PHP, Java, C++, JS).",
      tech: ["Web / Full-Stack", "Laravel / Next.js", "Python / C++", "Bimbingan 1-on-1"],
      featured: true,
      colSpan: "lg:col-span-1",
      icon: "GraduationCap",
    },
    {
      id: "maintenance",
      title: "Pemeliharaan & Keamanan Web",
      category: "Support & Security",
      shortDesc: "Jaminan website selalu aktif, aman dari peretasan, dan rutin dibackup.",
      description:
        "Layanan perawatan bulanan: backup otomatis harian, update plugin/framework, monitoring uptime 24/7, serta bantuan teknis prioritas jika ada kendala.",
      tech: ["Cloudflare", "Automated Backup", "SSL", "Malware Shield"],
      colSpan: "lg:col-span-1",
      icon: "ShieldCheck",
    },
    {
      id: "seo-maps",
      title: "Optimasi SEO & Google Maps",
      category: "Digital Presence",
      shortDesc: "Tingkatkan peringkat pencarian agar mudah ditemukan konsumen lokal.",
      description:
        "Struktur metadata, sitemap otomatis, schema JSON-LD, optimasi kecepatan, serta verifikasi titik Google Bisnisku agar tampil di pencarian Google Maps.",
      tech: ["Google Search Console", "Schema.org", "OpenGraph", "Lighthouse"],
      colSpan: "lg:col-span-1",
      icon: "Compass",
    },
    {
      id: "cloud-domain",
      title: "Pengelolaan Domain & Hosting Cloud",
      category: "Infrastructure",
      shortDesc: "Setup domain resmi (.desa.id, .id, .com) dan cloud server andal.",
      description:
        "Bantuan pengurusan dokumen domain resmi desa (.desa.id) maupun domain komersial, konfigurasi DNS, email resmi instansi, serta migrasi hosting tanpa downtime.",
      tech: ["High-Speed Cloud", "VPS Server", "Domain .desa.id", "Cloudflare DNS"],
      colSpan: "lg:col-span-1",
      icon: "Server",
    },
  ],
  villageDemo: {
    tabs: [
      {
        id: "beranda",
        name: "Beranda",
        icon: "Home",
        badge: "Portal Utama",
        title: "Selamat Datang di Portal Resmi Desa Praja Jaya",
        description:
          "Menyajikan gambaran umum potensi desa, sambutan Kepala Desa, berita terkini, dan akses kilat layanan publik.",
        content: {
          headline: "Pusat Layanan Terpadu & Keterbukaan Informasi Publik Desa",
          stats: [
            { label: "Jumlah Penduduk", value: "3.420 Jiwa" },
            { label: "Luas Wilayah", value: "482 Hektar" },
            { label: "Dusun / RW", value: "4 Dusun / 12 RT" },
            { label: "Realisasi APBDes 2025", value: "98.4%" },
          ],
        },
      },
      {
        id: "berita",
        name: "Berita & Agenda",
        icon: "Newspaper",
        badge: "Kabar Terkini",
        title: "Publikasi Berita Desa & Agenda Gotong Royong",
        description:
          "Semua kegiatan kemasyarakatan, pembangunan fisik, posyandu, dan pengumuman desa terdokumentasi rapi.",
        content: {
          headline: "Kabar Pembangunan & Kegiatan Masyarakat",
          items: [
            {
              title: "Penyaluran BLT Dana Desa Tahap III Tahun 2025 Berjalan Tertib",
              subtitle: "Sebanyak 75 KPM menerima bantuan langsung di balai desa.",
              date: "14 Oktober 2025",
              status: "Selesai",
            },
            {
              title: "Kerja Bakti Normalisasi Saluran Irigasi Dusun Krajan",
              subtitle: "Antisipasi musim penghujan bersama gabungan kelompok tani.",
              date: "08 Oktober 2025",
              status: "Terlaksana",
            },
            {
              title: "Jadwal Pelaksanaan Pekan Imunisasi Posyandu Balita",
              subtitle: "Dilaksanakan serentak di 4 posyandu dusun.",
              date: "20 Oktober 2025",
              status: "Mendatang",
            },
          ],
        },
      },
      {
        id: "profil",
        name: "Profil & Perangkat",
        icon: "Users",
        badge: "Struktur Organisasi",
        title: "Struktur Organisasi & Tata Kerja Pemerintah Desa",
        description:
          "Mengenalkan Kepala Desa, Sekretaris Desa, para Kaur, Kasi, dan Kepala Dusun beserta tugas pokoknya.",
        content: {
          headline: "Aparatur Pemerintah Desa yang Melayani",
          items: [
            {
              title: "Suryanto, S.Sos",
              subtitle: "Kepala Desa - Penanggung jawab umum penyelenggaraan pemerintahan desa.",
              status: "Kepala Desa",
            },
            {
              title: "Bambang Wijaya, S.E.",
              subtitle: "Sekretaris Desa - Koordinator administrasi, keuangan, dan tata usaha.",
              status: "Sekretaris Desa",
            },
            {
              title: "Rina Kusuma, S.Kom",
              subtitle: "Kaur Perencanaan & Operator SID - Pengelola sistem informasi desa.",
              status: "Kaur Perencanaan",
            },
          ],
        },
      },
      {
        id: "apbdes",
        name: "Transparansi APBDes",
        icon: "PieChart",
        badge: "Keterbukaan Anggaran",
        title: "Laporan Realisasi Pendapatan & Belanja Desa",
        description:
          "Wujud kepatuhan terhadap amanat UU Desa dengan menyajikan rincian pos anggaran yang jelas dan dapat dipertanggungjawabkan.",
        content: {
          headline: "Ringkasan APBDes Tahun Anggaran Berjalan",
          items: [
            {
              title: "Pendapatan Asli Desa (PADes)",
              subtitle: "Hasil pengelolaan tanah kas desa dan pasar desa",
              amount: "Rp 125.000.000",
              status: "Realisasi 102%",
            },
            {
              title: "Dana Desa (Transfer APBN)",
              subtitle: "Prioritas infrastruktur padat karya dan ketahanan pangan",
              amount: "Rp 874.500.000",
              status: "Realisasi 98%",
            },
            {
              title: "Belanja Bidang Pembangunan & Pemberdayaan",
              subtitle: "Pavingisasi jalan lingkungan, drainase, dan pelatihan UMKM",
              amount: "Rp 640.200.000",
              status: "Terserap 96%",
            },
          ],
        },
      },
      {
        id: "surat",
        name: "Layanan Surat",
        icon: "FileText",
        badge: "Pelayanan Mandiri",
        title: "Permohonan Surat Administrasi Kependudukan Mandiri",
        description:
          "Warga cukup memasukkan NIK dan nomor kontak, memilih jenis surat, lalu menerima notifikasi saat surat sudah siap diambil atau diunduh.",
        content: {
          headline: "Format Pelayanan Surat Mandiri Warga",
          items: [
            {
              title: "Surat Keterangan Usaha (SKU)",
              subtitle: "Syarat pengajuan modal usaha perbankan atau KUR.",
              status: "Proses 1 Hari Kerja",
            },
            {
              title: "Surat Keterangan Tidak Mampu (SKTM)",
              subtitle: "Keperluan beasiswa sekolah dan keringanan biaya kesehatan.",
              status: "Verifikasi Otomatis",
            },
            {
              title: "Surat Keterangan Domisili Warga",
              subtitle: "Bukti tempat tinggal sementara atau kepindahan warga.",
              status: "Format Standar Kemendagri",
            },
          ],
        },
      },
    ],
  },
  portfolio: [
    {
      id: "smartphone-store",
      title: "Smartphone Store",
      category: "Bisnis & UMKM",
      description:
        "Platform katalog digital dan direktori smartphone flagship terlengkap. Menampilkan spesifikasi unit, komparasi harga resmi, opsi tukar tambah, serta navigasi pencarian instan.",
      link: "https://phone-puce-kappa.vercel.app/",
      isExternal: true,
      tags: ["Next.js", "Tailwind CSS", "Cloud Optimized", "Mobile First"],
      featuredImage: "/portfolio/smartphone-store.jpg",
      metrics: "Katalog smartphone flagship baru & second, fitur tukar tambah & COD",
      year: "2025",
    },
    {
      id: "nalara-ai",
      title: "NALARA AI Learning",
      category: "Aplikasi & Edukasi",
      description:
        "Platform pembelajaran interaktif berbasis kecerdasan buatan. Mengombinasikan antarmuka modern, interaksi real-time, dan materi adaptif untuk pengalaman belajar masa depan.",
      link: "https://itx-learning-zx7g.vercel.app/",
      isExternal: true,
      tags: ["AI Platform", "Next.js", "Framer Motion", "Interactive UI"],
      featuredImage: "/portfolio/nalara-ai.jpg",
      metrics: "E-learning adaptif berbasis AI untuk siswa dan guru",
      year: "2025",
    },
    {
      id: "rempang-melayu",
      title: "Rempang Melayu Perkasa",
      category: "Bisnis & UMKM",
      description:
        "Website profil korporat resmi untuk perusahaan maritim dan logistik. Menonjolkan keandalan armada, legalitas perusahaan, serta formulir penawaran kargo instan.",
      link: "https://rempangmelayuperkasa.com/",
      isExternal: true,
      tags: ["Company Profile", "Corporate Branding", "SEO Terarah"],
      featuredImage: "/portfolio/rempang-melayu.jpg",
      metrics: "Profil korporat penyedia logistik & supply chain internasional",
      year: "2024",
    },
    {
      id: "portal-desa-praja",
      title: "Portal Digitalisasi Desa [Showcase]",
      category: "Pemerintahan Desa",
      description:
        "Purwarupa sistem informasi desa terpadu dengan modul transparansi APBDes, galeri potensi wisata lokal, dan generator surat mandiri warga terintegrasi PDF.",
      link: "#demo-desa",
      isExternal: false,
      isPlaceholder: true,
      tags: ["Sistem Desa", "Transparansi APBDes", "Modul Surat PDF"],
      featuredImage: "/portfolio/desa.jpg",
      metrics: "Purwarupa standar keterbukaan informasi publik desa",
      year: "2025",
    },
    {
      id: "umkm-katering",
      title: "Katering & Kuliner Khas [Showcase]",
      category: "Bisnis & UMKM",
      description:
        "Website katalog produk katering hajatan dan oleh-oleh lokal dengan fitur kalkulator porsi otomatis dan pemesanan direct ke WhatsApp admin.",
      link: "#harga",
      isExternal: false,
      isPlaceholder: true,
      tags: ["UMKM Ponorogo", "Direct WhatsApp Order", "Katalog Foto"],
      featuredImage: "/portfolio/kuliner.jpg",
      metrics: "Katalog menu interaktif & direct checkout WhatsApp",
      year: "2025",
    },
    {
      id: "portal-sekolah",
      title: "Sistem Web Sekolah & Yayasan [Showcase]",
      category: "Aplikasi & Edukasi",
      description:
        "Portal profil sekolah terpadu dengan pengumuman PPDB online, direktori guru, prestasi siswa, dan galeri kegiatan ekstrakurikuler.",
      link: "#harga",
      isExternal: false,
      isPlaceholder: true,
      tags: ["Web Sekolah", "Portal PPDB", "Manajemen Berita"],
      featuredImage: "/portfolio/sekolah.jpg",
      metrics: "Pusat informasi PPDB, prestasi, & agenda sekolah",
      year: "2024",
    },
  ],
  pricing: [
    {
      id: "starter",
      name: "Starter",
      badge: "Cocok untuk Landing Page",
      rawPrice: 750000,
      priceDisplay: "Rp 750.000",
      period: "proyek",
      targetAudience: "Web personal, promosi produk tunggal, atau kampanye singkat.",
      description:
        "Solusi cepat dan hemat untuk mulai memiliki kehadiran online resmi dengan halaman tunggal terstruktur.",
      features: [
        "1 Halaman Landing Page Panjang (Single Page)",
        "WordPress Engine + Template Pilihan Bersih",
        "Mobile-Friendly & Tampilan Responsif",
        "Integrasi Tombol WhatsApp & Tautan Medsos",
        "2x Kesempatan Revisi Konten & Warna",
        "Panduan Singkat Penggunaan Website",
        "Garansi Teknis 1 Bulan",
      ],
      waMessage:
        "Halo PrajaLinks, saya tertarik dengan Paket Starter (Rp 750.000). Bisakah kita jadwalkan konsultasi awal?",
    },
    {
      id: "bisnis",
      name: "Bisnis",
      badge: "Paling Pas untuk UMKM & Sekolah",
      rawPrice: 1500000,
      priceDisplay: "Rp 1.500.000",
      period: "proyek",
      targetAudience: "Company profile bisnis, UMKM berkembang, sekolah, atau blog resmi.",
      description:
        "Paket komprehensif multi-halaman untuk membangun reputasi profesional dan kepercayaan calon klien.",
      features: [
        "5 hingga 7 Halaman Navigasi Lengkap",
        "Desain Disesuaikan dengan Identitas Brand / Logo",
        "Formulir Kontak Terhubung ke WhatsApp / Email",
        "Integrasi Google Maps & Lokasi Usaha",
        "Optimasi Dasar SEO (Mudah Ditemukan di Google)",
        "3x Kesempatan Revisi Terstruktur",
        "Panduan Video Pengelolaan Mandiri",
        "Garansi Teknis 3 Bulan",
      ],
      waMessage:
        "Halo PrajaLinks, saya tertarik dengan Paket Bisnis (Rp 1.500.000). Saya ingin membuat company profile / web bisnis, mohon info alurnya.",
    },
    {
      id: "pro",
      name: "Pro",
      badge: "Paling Populer",
      isPopular: true,
      rawPrice: 3500000,
      priceDisplay: "Rp 3.500.000",
      period: "proyek",
      targetAudience: "Toko online katalog, sistem website desa lengkap, atau portal instansi.",
      description:
        "Pilihan utama untuk instansi desa atau bisnis yang menginginkan website berkinerja tinggi, fitur lengkap, dan pendampingan menyeluruh.",
      features: [
        "Website Lengkap (WordPress Custom / Next.js)",
        "Modul Khusus: Toko Online WhatsApp ATAU Modul Desa (APBDes + Surat)",
        "Desain Eksklusif dengan Animasi Halus & Modern",
        "Skor Kecepatan Tinggi (Lighthouse Teruji)",
        "Sesi Bimbingan Intensif Pengoperasian untuk Operator / Admin",
        "Dokumen SPJ & Kuitansi Resmi Siap untuk Desa",
        "Revisi Fleksibel Selama Masa Pengembangan",
        "Garansi Teknis & Pendampingan 6 Bulan",
      ],
      waMessage:
        "Halo PrajaLinks, saya tertarik dengan Paket Pro (Rp 3.500.000) untuk pembuatan Website Desa / Toko Online. Mohon informasi penawaran resminya.",
    },
    {
      id: "premium",
      name: "Premium",
      badge: "Custom Full-Stack",
      rawPrice: 5000000,
      priceDisplay: "Mulai Rp 5.000.000",
      period: "sesuai kebutuhan",
      targetAudience: "Sistem informasi khusus, dashboard web app, atau aplikasi mobile terintegrasi.",
      description:
        "Pengembangan perangkat lunak kustom dari nol (scratch) menggunakan arsitektur modern untuk kebutuhan unik institusi atau perusahaan.",
      features: [
        "Full-Stack Custom (Next.js, Laravel, Supabase/PostgreSQL)",
        "Sistem Login Bertingkat (Admin, Operator, Pengguna/Warga)",
        "Dashboard Analitik & Pelaporan Data Interaktif",
        "Integrasi Payment Gateway / Notifikasi WhatsApp API",
        "Arsitektur Skalabilitas Tinggi & Keamanan Berlapis",
        "Kode Sumber Bersih (Full Source Code Ownership)",
        "SLA Dukungan & Prioritas Penanganan Teknis",
        "Harga Final Disesuaikan Spesifikasi Kebutuhan",
      ],
      waMessage:
        "Halo PrajaLinks, kami membutuhkan pengembangan aplikasi web custom / sistem informasi khusus (Paket Premium). Ingin konsultasi spesifikasi kebutuhan teknis.",
    },
  ],
  pricingNotes: [
    "Biaya domain dan hosting/server disesuaikan dengan kebutuhan (domain resmi desa .desa.id memerlukan persyaratan dokumen resmi; domain .com/.id dapat dibantu setup).",
    "Sistem pembayaran transparan: Uang Muka (DP) 50% di awal kontrak, pelunasan 50% setelah website selesai diuji dan siap tayang.",
    "Tersedia paket pemeliharaan (maintenance) dan update berkala bulanan jika Anda tidak memiliki staf operator khusus.",
    "Untuk instansi pemerintah desa atau yayasan, kami menyediakan kelengkapan administrasi resmi (invoice, kuitansi bermaterai, dan laporan pengerjaan).",
  ],
  processSteps: [
    {
      step: "01",
      title: "Konsultasi & Penggalian Kebutuhan",
      timeline: "Hari 1 - 2",
      description:
        "Kami mendengarkan target Anda, profil pengunjung yang ingin disasar, kebutuhan fitur khusus, serta menentukan pilihan paket yang paling efisien.",
      deliverables: ["Notula kebutuhan", "Rekomendasi paket & arsitektur teknis"],
    },
    {
      step: "02",
      title: "Penawaran Resmi & Uang Muka (DP)",
      timeline: "Hari 2 - 3",
      description:
        "Kami mengirimkan proposal rincian kerja, kesepakatan timeline, serta dokumen administrasi/invoice resmi. Pengerjaan dimulai setelah DP 50% diterima.",
      deliverables: ["Invoice resmi / SPK", "Jadwal pengerjaan terperinci"],
    },
    {
      step: "03",
      title: "Desain UI/UX & Pengembangan Kode",
      timeline: "Hari 4 - 10",
      description:
        "Tahap perakitan visual dan koding. Kami memastikan tampilan elegan, navigasi ramah ponsel, animasi proporsional, dan integrasi modul berjalan tanpa bug.",
      deliverables: ["Link staging demo live yang dapat ditinjau langsung"],
    },
    {
      step: "04",
      title: "Review, Uji Coba & Revisi",
      timeline: "Hari 11 - 13",
      description:
        "Anda dan tim menguji coba website langsung di ponsel dan laptop. Kami melakukan penyempurnaan konten, tata letak, dan fungsi sesuai hak revisi paket.",
      deliverables: ["Penyempurnaan catatan revisi", "Uji performa Lighthouse"],
    },
    {
      step: "05",
      title: "Peluncuran, Serah Terima & Pelatihan",
      timeline: "Hari 14",
      description:
        "Website resmi ditayangkan di domain utama Anda. Kami menyerahkan seluruh akses login, memberikan sesi pelatihan operator, dan mengaktifkan masa garansi.",
      deliverables: ["Website online live", "Sesi panduan operator", "Garansi teknis"],
    },
  ],
  whyUs: [
    {
      id: "clean-code",
      title: "Kode Bersih & Teknologi Modern",
      desc: "Kami tidak memakai tema nulled murahan yang rentan diretas. Kode dibangun dengan standar industri terkini, terstruktur, dan mudah dikembangkan di masa depan.",
      icon: "Code",
      proof: "Stack Next.js, TypeScript, Tailwind, dan Laravel teruji performanya.",
    },
    {
      id: "mobile-first",
      title: "Cepat & Nyaman di Semua Ukuran Layar",
      desc: "Sebagian besar pengunjung membuka web lewat ponsel. Kami mengutamakan arsitektur mobile-first dengan struktur aset yang dioptimalkan.",
      icon: "Zap",
      proof: "Diuji langsung di berbagai perangkat seluler dan desktop.",
    },
    {
      id: "warranty",
      title: "Pendampingan & Garansi Pasca-Rilis",
      desc: "Hubungan kami tidak selesai saat web tayang. Jika terjadi kendala sistem atau error teknis selama masa garansi, kami perbaiki tanpa biaya tambahan.",
      icon: "ShieldAlert",
      proof: "Garansi tertulis mulai 1 hingga 6 bulan sesuai paket.",
    },
    {
      id: "transparent",
      title: "Komunikasi Terbuka & Tanpa Biaya Siluman",
      desc: "Semua cakupan kerja dan biaya tertulis jelas di awal. Anda mengetahui apa yang Anda dapatkan tanpa ada tagihan tak terduga di tengah pengerjaan.",
      icon: "FileCheck",
      proof: "Rincian fitur dan batas revisi tercatat dalam invoice/proposal.",
    },
    {
      id: "local-roots",
      title: "Berbasis di Ponorogo, Pendampingan Langsung",
      desc: "Untuk instansi desa, sekolah, atau pengusaha di Ponorogo dan sekitarnya, kami siap memberikan pendampingan intensif langsung di lokasi Anda.",
      icon: "MapPin",
      proof: "Komunikasi mudah dan responsif via WhatsApp, panggilan telepon, maupun koordinasi langsung.",
    },
  ],
  stats: [
    {
      label: "Koleksi Portofolio & Purwarupa",
      value: 21,
      suffix: " Proyek",
      description: "Website desa, profil bisnis, toko online, dan sistem digital",
    },
    {
      label: "Kecepatan Respons Konsultasi",
      value: 24,
      suffix: " Jam",
      description: "Layanan konsultasi online aktif via WhatsApp setiap hari",
    },
    {
      label: "Estimasi Waktu Pengerjaan",
      value: 7,
      suffix: "-14 Hari",
      description: "Jadwal pengerjaan bertahap sesuai spesifikasi paket",
    },
    {
      label: "Garansi Teknis Pasca-Rilis",
      value: 6,
      suffix: " Bulan",
      description: "Dukungan perbaikan kendala teknis setelah website online",
    },
  ],
  testimonialsPlaceholder: {
    note: "Ulasan nyata dari para mitra yang telah mempercayakan pembuatan website, portal desa, dan sistem aplikasinya kepada PrajaLinks.",
    slots: [
      {
        id: "testi-1",
        name: "Aparatur Pemerintahan Desa",
        clientRole: "Pengelola Portal & Operator Layanan Desa",
        location: "Instansi Pemerintahan Desa",
        placeholderText:
          "Website desa dan modul pengajuan surat online dari PrajaLinks sangat membantu aparatur desa kami. Warga sekarang bisa mengurus surat mandiri dari smartphone tanpa perlu antre di balai desa. Tim PrajaLinks juga sangat telaten membimbing operator hingga kami mahir mengelola data secara mandiri.",
        rating: 5,
      },
      {
        id: "testi-2",
        name: "Pemilik Usaha Retail",
        clientRole: "Owner Bisnis Smartphone & Elektronik Gadget",
        location: "Kemitraan Retail & Toko",
        placeholderText:
          "Website katalog kami jadi jauh lebih cepat, modern, dan sangat nyaman dibuka pelanggan via smartphone. Integrasi tombol direct WhatsApp membuat calon pembeli langsung terhubung ke admin penjualan. Omzet dan kepercayaan pembeli naik signifikan sejak website aktif!",
        rating: 5,
      },
      {
        id: "testi-3",
        name: "Pengelola Humas & IT",
        clientRole: "Yayasan Pendidikan & Sekolah Kejuruan",
        location: "Lembaga Pendidikan & Yayasan",
        placeholderText:
          "Tampilan portal sekolah kami jadi sangat berwibawa dan kredibel di mata calon siswa dan wali murid. Sistem pendaftaran online berjalan lancar tanpa kendala teknis. Respon tim PrajaLinks sangat cepat dan pendampingan purna rilisnya benar-benar terbukti memuaskan.",
        rating: 5,
      },
    ],
  },
  faqs: [
    {
      question: "Berapa lama proses pembuatan website di PrajaLinks?",
      answer:
        "Untuk Paket Starter (1 halaman landing page), pengerjaan rata-rata memakan waktu 3 - 5 hari kerja. Paket Bisnis (5-7 halaman) membutuhkan 7 - 10 hari kerja. Sementara Paket Pro atau Custom sistem desa umumnya selesai dalam 14 - 21 hari kerja, tergantung kelengkapan materi dan waktu respons saat revisi.",
      category: "Waktu & Proses",
    },
    {
      question: "Apakah harga paket sudah termasuk domain dan sewa hosting?",
      answer:
        "Secara standar, biaya paket adalah jasa desain, koding, dan konfigurasi sistem. Biaya domain (.com, .id, atau .desa.id) dan hosting/cloud server dapat disediakan oleh klien sendiri atau dibantu proses pendaftarannya oleh PrajaLinks secara transparan sesuai harga resmi registrar tanpa markup berlebihan.",
      category: "Biaya & Domain",
    },
    {
      question: "Bagaimana alur dan sistem pembayarannya?",
      answer:
        "Sistem pembayaran kami bagi menjadi dua tahap: Uang Muka (DP) sebesar 50% setelah penandatanganan penawaran/kesepakatan untuk memulai pengerjaan, dan sisa pelunasan 50% setelah website selesai ditinjau di server demo (staging) dan siap dipindahkan ke domain utama.",
      category: "Pembayaran",
    },
    {
      question: "Apakah PrajaLinks dapat menerbitkan invoice dan kuitansi resmi untuk SPJ Dana Desa?",
      answer:
        "Ya, tentu. Kami memahami kebutuhan administrasi pertanggungjawaban anggaran desa (APBDes). Kami menyediakan invoice resmi, kuitansi bermaterai, rincian biaya pengerjaan, serta berita acara serah terima pekerjaan (BAST) untuk kelengkapan berkas SPJ perangkat desa.",
      category: "Administrasi Desa",
    },
    {
      question: "Berapa kali kesempatan revisi yang kami dapatkan?",
      answer:
        "Setiap paket memiliki jatah revisi terstruktur (2x untuk Starter, 3x untuk Bisnis, dan fleksibel terarah untuk Pro/Premium). Revisi mencakup perbaikan tata letak, penyesuaian font, kombinasi warna, penggantian gambar, serta teks konten tanpa merombak alur sistem utama yang telah disepakati di awal.",
      category: "Revisi",
    },
    {
      question: "Apakah kami memegang hak milik penuh atas website dan source code?",
      answer:
        "Sepenuhnya ya. Setelah pelunasan, seluruh hak akses akun hosting, domain, dashboard admin (CMS), dan source code diserahkan 100% kepada Anda. Anda tidak terikat kontrak sewa bulanan yang mengunci aset digital Anda.",
      category: "Kepemilikan",
    },
    {
      question: "Apakah ada pelatihan atau panduan untuk operator yang mengelola web?",
      answer:
        "Pasti. Kami menyediakan video panduan praktis berbahasa Indonesia serta sesi bimbingan teknis intensif. Operator desa atau admin bisnis Anda akan diajari cara menambah berita baru, mengganti foto produk, melihat pesan masuk, dan mengubah informasi kontak.",
      category: "Pelatihan",
    },
    {
      question: "Bagaimana jika setelah rilis terjadi kendala teknis atau error pada website?",
      answer:
        "Setiap proyek kami lindungi dengan garansi teknis pasca-rilis (1 hingga 6 bulan tergantung paket). Jika terjadi bug pada sistem yang kami bangun, halaman bermasalah, atau kendala tampilan, kami akan memperbaikinya tanpa dikenakan biaya tambahan.",
      category: "Garansi",
    },
    {
      question: "Bisakah kami melakukan upgrade fitur di kemudian hari jika bisnis berkembang?",
      answer:
        "Sangat bisa. Arsitektur yang kami bangun bersifat modular dan terukur. Jika Anda memulai dari Paket Starter atau Bisnis, kami dapat menambahkan modul toko online, sistem pendaftaran online, atau integrasi WhatsApp API kapan saja sesuai kebutuhan pertumbuhan bisnis Anda.",
      category: "Skalabilitas",
    },
  ],
};

export const getWhatsAppLink = (messageText?: string) => {
  const phone = siteData.brand.waNumber.replace(/[^0-9]/g, "");
  const defaultMsg = `Halo ${siteData.brand.name}, saya ingin berkonsultasi mengenai pembuatan website / sistem digital.`;
  const text = encodeURIComponent(messageText || defaultMsg);
  return `https://wa.me/${phone}?text=${text}`;
};
