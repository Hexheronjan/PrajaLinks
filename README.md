# PrajaLinks — Studio Digital Company Profile Website

Website resmi company profile untuk **PrajaLinks** (Studio Rekayasa Web & Aplikasi Ponorogo), dibangun menggunakan arsitektur modern Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, dan Lucide Icons.

---

## 🌟 Fitur & Keunggulan Utama

1. **Brand & Identitas Visual Studio Kelas Atas**:
   - Palette warna mode Gelap (`#070F1F`, `#0E1A33`, `#EAF0FF`) & Terang (`#F7F9FC`, `#FFFFFF`, `#0B1A33`) via CSS Variables + toggle switch interaktif.
   - Tipografi: **Sora** (Headings) dan **Plus Jakarta Sans** (Body) via `next/font`.
   - Sentuhan lokal motif geometris batik/parang yang sangat halus (4-6% opacity).
   - Motif "links": titik-titik (nodes) yang saling terhubung garis di loader, navbar, hero, dan divider.
   - Independen: tanpa klaim atau lambang instansi pemerintah.

2. **Sistem Animasi Studio**:
   - **Loader Awal**: Animasi logo PrajaLinks dengan 2 node yang saling terhubung lewat garis SVG yang tergambar (1 detik), diikuti tirai pembuka ke atas.
   - **Navbar Cerdas**: Turun dari atas, mengecil menjadi efek kaca (glassmorphism) saat di-scroll, indikator pill aktif mengikuti section.
   - **Hero Parallax**: Headline muncul per kata dari kiri, mockup browser 3D dan ponsel melayang dari kanan dengan efek parallax mengikuti kursor mouse, tombol CTA meluncur dari bawah.
   - **Marquee Ganda**: Baris atas bergerak kiri-ke-kanan, baris bawah kanan-ke-kiri, jeda otomatis saat di-hover.
   - **Dua Jalur (Desa vs Bisnis)**: Panel kiri (Pemerintahan Desa) dan kanan (Bisnis & UMKM) yang melebar dan mengecil secara halus saat di-hover.
   - **Layanan (Bento Grid)**: Staggered reveal dari bawah, efek tilt 3D interaktif, dan radial glow yang mengikuti kursor mouse di setiap kartu.
   - **Demo Website Desa**: Bingkai browser interaktif dengan tab (Beranda, Berita, Profil & Perangkat, Transparansi APBDes, Layanan Surat) dengan transisi slide berarah (*directional slide*), dilengkapi tombol toggle viewport Desktop / Ponsel.
   - **Portofolio Terpilih**: Pinned horizontal scroll di desktop (scroll ke bawah menggeser kartu ke samping) dan swipe drag carousel di mobile. Dilengkapi link live ke *Ponorogo Phone*, *NALARA AI Learning*, *Rempang Melayu Perkasa*, dan 3 showcase.
   - **Paket Harga (4 Kartu)**: Animasi masuk directional (kiri, bawah, kanan), count-up angka harga, kartu "Pro" dengan animated gradient border dan badge "Paling Populer", serta tombol CTA yang otomatis membuka WhatsApp dengan pesan terformat per paket.
   - **Proses 5 Langkah**: Timeline sticky dengan garis progres vertikal yang terisi saat scroll. Langkah ganjil masuk dari kiri, langkah genap masuk dari kanan.
   - **Statistik Nyata**: Count-up angka proyek dan performa yang dapat diedit langsung di `site.ts`.
   - **Testimoni Transparan**: Slot testimonial resmi bertanda jelas `[Isi testimoni asli]` (bebas testimoni palsu).
   - **FAQ Accordion**: 9 pertanyaan umum dengan ekspansi tinggi halus.
   - **CTA Penutup**: Teks marquee raksasa dan magnetic WhatsApp button yang elastis mengikuti kursor.
   - **Elemen Global**: Top scroll progress bar, desktop cursor glow, floating WhatsApp pill dengan denyut halus, tombol back-to-top, dan Lenis smooth scrolling dengan dukungan `prefers-reduced-motion`.

3. **Sentralisasi Data di `/src/data/site.ts`**:
   Semua data layanan, portofolio, harga, FAQ, nomor WhatsApp, email, dan alamat tersimpan rapi di satu tempat.

---

## 📁 Struktur Folder Proyek

```
c:\PrajaLinks\
├── public/                     # Aset statis & ikon
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Fonts, SEO metadata, JSON-LD, Providers)
│   │   ├── page.tsx            # Halaman utama dengan 16 seksi terpadu
│   │   ├── robots.ts           # robots.txt untuk SEO
│   │   └── sitemap.ts          # sitemap.xml otomatis
│   ├── components/
│   │   ├── common/
│   │   │   ├── GlobalElements.tsx   # Top progress bar, cursor glow, floating WA
│   │   │   ├── InitialLoader.tsx    # Connecting nodes animation loader
│   │   │   └── SmoothScrollProvider.tsx # Lenis smooth scroll
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Responsive navbar dengan glass scroll & theme toggle
│   │   │   └── Footer.tsx      # Footer resmi dengan info studio & copyright
│   │   └── sections/
│   │       ├── Hero.tsx        # Hero section + 3D float parallax mockups
│   │       ├── Marquee.tsx     # Dual row opposing marquee
│   │       ├── DualTrack.tsx   # Panel Desa vs Bisnis dengan hover expand
│   │       ├── Services.tsx    # Bento grid layanan dengan 3D tilt & cursor glow
│   │       ├── VillageDemo.tsx # Interactive browser mockup + tab slider
│   │       ├── Portfolio.tsx   # Desktop pinned horizontal scroll & mobile carousel
│   │       ├── Pricing.tsx     # 4 kartu harga dengan count-up & border gradient
│   │       ├── Process.tsx     # 5-step sticky timeline dengan filling line
│   │       ├── WhyUs.tsx       # 5 pilar keunggulan yang dapat dibuktikan
│   │       ├── Stats.tsx       # Statistik count-up
│   │       ├── Testimonials.tsx# Slot placeholder transparan
│   │       ├── FAQ.tsx         # Accordion 9 pertanyaan umum
│   │       ├── CTA.tsx         # Large marquee + magnetic WA button
│   │       └── Contact.tsx     # Formulir pesan instan ke WhatsApp
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark / Light theme context & storage
│   ├── data/
│   │   └── site.ts             # SATU FILE untuk seluruh konten & konfigurasi
│   ├── styles/
│   │   └── globals.css         # CSS tokens, glassmorphism, parang motif, animations
│   └── utils/
│       └── animations.ts       # Easing cubic-bezier & Framer Motion variants
├── next.config.mjs             # Konfigurasi Next.js
├── postcss.config.mjs          # Konfigurasi PostCSS
├── tailwind.config.ts          # Konfigurasi Tailwind CSS
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json                # Dependensi & script proyek
```

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Masuk ke direktori proyek
```bash
cd c:\PrajaLinks
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 4. Menjalankan Build Produksi
```bash
npm run build
npm run start
```

---

## ✏️ Cara Mengubah Konten & Kontak

Buka file `src/data/site.ts`. Seluruh konten dapat diedit di sini:
- **Nomor WhatsApp**: ubah `brand.waNumber` (misal: `"6281234567890"`) dan `brand.waDisplay`.
- **Email & Alamat**: ganti placeholder `[EMAIL]` dan `[ALAMAT]`.
- **Media Sosial**: ganti `[LINK_INSTAGRAM]` dan `[LINK_TIKTOK]`.
- **Harga & Layanan**: sesuaikan paket harga atau tambah item layanan.
- **Portofolio**: tambah atau perbarui tautan proyek live.

---

## ☁️ Langkah Deploy ke Vercel

1. **Push ke GitHub / GitLab**:
   ```bash
   git init
   git add .
   git commit -m "feat: PrajaLinks company profile complete studio website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/prajalinks.git
   git push -u origin main
   ```
2. **Impor ke Vercel**:
   - Masuk ke dashboard [vercel.com](https://vercel.com).
   - Klik **"Add New Project"** dan pilih repositori `prajalinks`.
   - Vercel akan otomatis mendeteksi framework **Next.js**.
   - Klik tombol **"Deploy"**.
   - Dalam ~1 menit website PrajaLinks sudah tayang secara global dengan sertifikat SSL otomatis dan CDN berkecepatan tinggi!
