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

  // ==========================================
  // JAWA BARAT (21 Wilayah Utama)
  // ==========================================
  { slug: "bandung", name: "Bandung", capital: "Bandung / Soreang", province: "Jawa Barat" },
  { slug: "bandung-barat", name: "Bandung Barat", capital: "Ngamprah", province: "Jawa Barat" },
  { slug: "bekasi", name: "Bekasi", capital: "Bekasi / Cikarang", province: "Jawa Barat" },
  { slug: "bogor", name: "Bogor", capital: "Bogor / Cibinong", province: "Jawa Barat" },
  { slug: "ciamis", name: "Ciamis", capital: "Ciamis", province: "Jawa Barat" },
  { slug: "cianjur", name: "Cianjur", capital: "Cianjur", province: "Jawa Barat" },
  { slug: "cirebon", name: "Cirebon", capital: "Cirebon / Sumber", province: "Jawa Barat" },
  { slug: "garut", name: "Garut", capital: "Tarogong Kidul", province: "Jawa Barat" },
  { slug: "indramayu", name: "Indramayu", capital: "Indramayu", province: "Jawa Barat" },
  { slug: "karawang", name: "Karawang", capital: "Karawang Barat", province: "Jawa Barat" },
  { slug: "kuningan", name: "Kuningan", capital: "Kuningan", province: "Jawa Barat" },
  { slug: "majalengka", name: "Majalengka", capital: "Majalengka", province: "Jawa Barat" },
  { slug: "pangandaran", name: "Pangandaran", capital: "Parigi", province: "Jawa Barat" },
  { slug: "purwakarta", name: "Purwakarta", capital: "Purwakarta", province: "Jawa Barat" },
  { slug: "subang", name: "Subang", capital: "Subang", province: "Jawa Barat" },
  { slug: "sukabumi", name: "Sukabumi", capital: "Sukabumi / Palabuhanratu", province: "Jawa Barat" },
  { slug: "sumedang", name: "Sumedang", capital: "Sumedang", province: "Jawa Barat" },
  { slug: "tasikmalaya", name: "Tasikmalaya", capital: "Tasikmalaya / Singaparna", province: "Jawa Barat" },
  { slug: "banjar", name: "Banjar", capital: "Banjar", province: "Jawa Barat" },
  { slug: "cimahi", name: "Cimahi", capital: "Cimahi", province: "Jawa Barat" },
  { slug: "depok", name: "Depok", capital: "Depok", province: "Jawa Barat" },

  // ==========================================
  // DKI JAKARTA (6 Wilayah)
  // ==========================================
  { slug: "jakarta-barat", name: "Jakarta Barat", capital: "Kembangan", province: "DKI Jakarta" },
  { slug: "jakarta-pusat", name: "Jakarta Pusat", capital: "Menteng", province: "DKI Jakarta" },
  { slug: "jakarta-selatan", name: "Jakarta Selatan", capital: "Kebayoran Baru", province: "DKI Jakarta" },
  { slug: "jakarta-timur", name: "Jakarta Timur", capital: "Cakung", province: "DKI Jakarta" },
  { slug: "jakarta-utara", name: "Jakarta Utara", capital: "Koja", province: "DKI Jakarta" },
  { slug: "kepulauan-seribu", name: "Kepulauan Seribu", capital: "Pulau Pramuka", province: "DKI Jakarta" },

  // ==========================================
  // BANTEN (6 Wilayah Utama)
  // ==========================================
  { slug: "lebak", name: "Lebak", capital: "Rangkasbitung", province: "Banten" },
  { slug: "pandeglang", name: "Pandeglang", capital: "Pandeglang", province: "Banten" },
  { slug: "serang", name: "Serang", capital: "Serang / Ciruas", province: "Banten" },
  { slug: "tangerang", name: "Tangerang", capital: "Tangerang / Tigaraksa", province: "Banten" },
  { slug: "cilegon", name: "Cilegon", capital: "Cilegon", province: "Banten" },
  { slug: "tangerang-selatan", name: "Tangerang Selatan", capital: "Ciputat", province: "Banten" },

  // ==========================================
  // BALI (9 Wilayah)
  // ==========================================
  { slug: "badung", name: "Badung", capital: "Mangupura", province: "Bali" },
  { slug: "bangli", name: "Bangli", capital: "Bangli", province: "Bali" },
  { slug: "buleleng", name: "Buleleng", capital: "Singaraja", province: "Bali" },
  { slug: "gianyar", name: "Gianyar", capital: "Gianyar", province: "Bali" },
  { slug: "jembrana", name: "Jembrana", capital: "Negara", province: "Bali" },
  { slug: "karangasem", name: "Karangasem", capital: "Amlapura", province: "Bali" },
  { slug: "klungkung", name: "Klungkung", capital: "Semarapura", province: "Bali" },
  { slug: "tabanan", name: "Tabanan", capital: "Tabanan", province: "Bali" },
  { slug: "denpasar", name: "Denpasar", capital: "Denpasar", province: "Bali" },
];
