export interface JatimCity {
  slug: string;
  name: string;
  capital?: string;
  province?: string;
}

export const jatimCities: JatimCity[] = [
  // ==========================================
  // JAWA TIMUR (31 Wilayah Utama)
  // ==========================================
  { slug: "bangkalan", name: "Bangkalan", capital: "Bangkalan", province: "Jawa Timur" },
  { slug: "banyuwangi", name: "Banyuwangi", capital: "Banyuwangi", province: "Jawa Timur" },
  { slug: "blitar", name: "Blitar", capital: "Kanigoro / Blitar", province: "Jawa Timur" },
  { slug: "bojonegoro", name: "Bojonegoro", capital: "Bojonegoro", province: "Jawa Timur" },
  { slug: "bondowoso", name: "Bondowoso", capital: "Bondowoso", province: "Jawa Timur" },
  { slug: "gresik", name: "Gresik", capital: "Gresik", province: "Jawa Timur" },
  { slug: "jember", name: "Jember", capital: "Jember", province: "Jawa Timur" },
  { slug: "jombang", name: "Jombang", capital: "Jombang", province: "Jawa Timur" },
  { slug: "kediri", name: "Kediri", capital: "Kediri / Ngasem", province: "Jawa Timur" },
  { slug: "lamongan", name: "Lamongan", capital: "Lamongan", province: "Jawa Timur" },
  { slug: "lumajang", name: "Lumajang", capital: "Lumajang", province: "Jawa Timur" },
  { slug: "madiun", name: "Madiun", capital: "Madiun / Caruban", province: "Jawa Timur" },
  { slug: "magetan", name: "Magetan", capital: "Magetan", province: "Jawa Timur" },
  { slug: "malang", name: "Malang", capital: "Malang / Kepanjen", province: "Jawa Timur" },
  { slug: "mojokerto", name: "Mojokerto", capital: "Mojokerto / Mojosari", province: "Jawa Timur" },
  { slug: "nganjuk", name: "Nganjuk", capital: "Nganjuk", province: "Jawa Timur" },
  { slug: "ngawi", name: "Ngawi", capital: "Ngawi", province: "Jawa Timur" },
  { slug: "pacitan", name: "Pacitan", capital: "Pacitan", province: "Jawa Timur" },
  { slug: "pamekasan", name: "Pamekasan", capital: "Pamekasan", province: "Jawa Timur" },
  { slug: "pasuruan", name: "Pasuruan", capital: "Pasuruan / Bangil", province: "Jawa Timur" },
  { slug: "ponorogo", name: "Ponorogo", capital: "Ponorogo", province: "Jawa Timur" },
  { slug: "probolinggo", name: "Probolinggo", capital: "Probolinggo / Kraksaan", province: "Jawa Timur" },
  { slug: "sampang", name: "Sampang", capital: "Sampang", province: "Jawa Timur" },
  { slug: "sidoarjo", name: "Sidoarjo", capital: "Sidoarjo", province: "Jawa Timur" },
  { slug: "situbondo", name: "Situbondo", capital: "Situbondo", province: "Jawa Timur" },
  { slug: "sumenep", name: "Sumenep", capital: "Sumenep", province: "Jawa Timur" },
  { slug: "trenggalek", name: "Trenggalek", capital: "Trenggalek", province: "Jawa Timur" },
  { slug: "tuban", name: "Tuban", capital: "Tuban", province: "Jawa Timur" },
  { slug: "tulungagung", name: "Tulungagung", capital: "Tulungagung", province: "Jawa Timur" },
  { slug: "batu", name: "Batu", capital: "Batu", province: "Jawa Timur" },
  { slug: "surabaya", name: "Surabaya", capital: "Surabaya", province: "Jawa Timur" },

  // ==========================================
  // DI YOGYAKARTA (5 Wilayah)
  // ==========================================
  { slug: "bantul", name: "Bantul", capital: "Bantul", province: "DI Yogyakarta" },
  { slug: "gunungkidul", name: "Gunungkidul", capital: "Wonosari", province: "DI Yogyakarta" },
  { slug: "kulon-progo", name: "Kulon Progo", capital: "Wates", province: "DI Yogyakarta" },
  { slug: "sleman", name: "Sleman", capital: "Sleman", province: "DI Yogyakarta" },
  { slug: "yogyakarta", name: "Yogyakarta", capital: "Yogyakarta", province: "DI Yogyakarta" },

  // ==========================================
  // JAWA TENGAH (31 Wilayah Utama)
  // ==========================================
  { slug: "banjarnegara", name: "Banjarnegara", capital: "Banjarnegara", province: "Jawa Tengah" },
  { slug: "banyumas", name: "Banyumas", capital: "Purwokerto", province: "Jawa Tengah" },
  { slug: "batang", name: "Batang", capital: "Batang", province: "Jawa Tengah" },
  { slug: "blora", name: "Blora", capital: "Blora", province: "Jawa Tengah" },
  { slug: "boyolali", name: "Boyolali", capital: "Boyolali", province: "Jawa Tengah" },
  { slug: "brebes", name: "Brebes", capital: "Brebes", province: "Jawa Tengah" },
  { slug: "cilacap", name: "Cilacap", capital: "Cilacap", province: "Jawa Tengah" },
  { slug: "demak", name: "Demak", capital: "Demak", province: "Jawa Tengah" },
  { slug: "grobogan", name: "Grobogan", capital: "Purwodadi", province: "Jawa Tengah" },
  { slug: "jepara", name: "Jepara", capital: "Jepara", province: "Jawa Tengah" },
  { slug: "karanganyar", name: "Karanganyar", capital: "Karanganyar", province: "Jawa Tengah" },
  { slug: "kebumen", name: "Kebumen", capital: "Kebumen", province: "Jawa Tengah" },
  { slug: "kendal", name: "Kendal", capital: "Kendal", province: "Jawa Tengah" },
  { slug: "klaten", name: "Klaten", capital: "Klaten", province: "Jawa Tengah" },
  { slug: "kudus", name: "Kudus", capital: "Kudus", province: "Jawa Tengah" },
  { slug: "magelang", name: "Magelang", capital: "Magelang", province: "Jawa Tengah" },
  { slug: "pati", name: "Pati", capital: "Pati", province: "Jawa Tengah" },
  { slug: "pekalongan", name: "Pekalongan", capital: "Pekalongan / Kajen", province: "Jawa Tengah" },
  { slug: "pemalang", name: "Pemalang", capital: "Pemalang", province: "Jawa Tengah" },
  { slug: "purbalingga", name: "Purbalingga", capital: "Purbalingga", province: "Jawa Tengah" },
  { slug: "purworejo", name: "Purworejo", capital: "Purworejo", province: "Jawa Tengah" },
  { slug: "rembang", name: "Rembang", capital: "Rembang", province: "Jawa Tengah" },
  { slug: "semarang", name: "Semarang", capital: "Semarang / Ungaran", province: "Jawa Tengah" },
  { slug: "sragen", name: "Sragen", capital: "Sragen", province: "Jawa Tengah" },
  { slug: "sukoharjo", name: "Sukoharjo", capital: "Sukoharjo", province: "Jawa Tengah" },
  { slug: "tegal", name: "Tegal", capital: "Tegal / Slawi", province: "Jawa Tengah" },
  { slug: "temanggung", name: "Temanggung", capital: "Temanggung", province: "Jawa Tengah" },
  { slug: "wonogiri", name: "Wonogiri", capital: "Wonogiri", province: "Jawa Tengah" },
  { slug: "wonosobo", name: "Wonosobo", capital: "Wonosobo", province: "Jawa Tengah" },
  { slug: "salatiga", name: "Salatiga", capital: "Salatiga", province: "Jawa Tengah" },
  { slug: "surakarta", name: "Surakarta", capital: "Surakarta (Solo)", province: "Jawa Tengah" },
];
