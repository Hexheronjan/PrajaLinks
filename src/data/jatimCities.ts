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

  // ==========================================
  // SUMATERA UTARA (32 Wilayah Utama)
  // ==========================================
  { slug: "asahan", name: "Asahan", capital: "Kisaran", province: "Sumatera Utara" },
  { slug: "batu-bara", name: "Batu Bara", capital: "Limapuluh", province: "Sumatera Utara" },
  { slug: "dairi", name: "Dairi", capital: "Sidikalang", province: "Sumatera Utara" },
  { slug: "deli-serdang", name: "Deli Serdang", capital: "Lubuk Pakam", province: "Sumatera Utara" },
  { slug: "humbang-hasundutan", name: "Humbang Hasundutan", capital: "Dolok Sanggul", province: "Sumatera Utara" },
  { slug: "karo", name: "Karo", capital: "Kabanjahe", province: "Sumatera Utara" },
  { slug: "labuhanbatu", name: "Labuhanbatu", capital: "Rantau Prapat", province: "Sumatera Utara" },
  { slug: "labuhanbatu-selatan", name: "Labuhanbatu Selatan", capital: "Kota Pinang", province: "Sumatera Utara" },
  { slug: "labuhanbatu-utara", name: "Labuhanbatu Utara", capital: "Aek Kanopan", province: "Sumatera Utara" },
  { slug: "langkat", name: "Langkat", capital: "Stabat", province: "Sumatera Utara" },
  { slug: "mandailing-natal", name: "Mandailing Natal", capital: "Panyabungan", province: "Sumatera Utara" },
  { slug: "nias", name: "Nias", capital: "Gido", province: "Sumatera Utara" },
  { slug: "nias-barat", name: "Nias Barat", capital: "Lahomi", province: "Sumatera Utara" },
  { slug: "nias-selatan", name: "Nias Selatan", capital: "Teluk Dalam", province: "Sumatera Utara" },
  { slug: "nias-utara", name: "Nias Utara", capital: "Lotu", province: "Sumatera Utara" },
  { slug: "padang-lawas", name: "Padang Lawas", capital: "Sibuhuan", province: "Sumatera Utara" },
  { slug: "padang-lawas-utara", name: "Padang Lawas Utara", capital: "Gunung Tua", province: "Sumatera Utara" },
  { slug: "pakpak-bharat", name: "Pakpak Bharat", capital: "Salak", province: "Sumatera Utara" },
  { slug: "samosir", name: "Samosir", capital: "Pangururan", province: "Sumatera Utara" },
  { slug: "serdang-bedagai", name: "Serdang Bedagai", capital: "Sei Rampah", province: "Sumatera Utara" },
  { slug: "simalungun", name: "Simalungun", capital: "Raya", province: "Sumatera Utara" },
  { slug: "tapanuli-selatan", name: "Tapanuli Selatan", capital: "Sipirok", province: "Sumatera Utara" },
  { slug: "tapanuli-tengah", name: "Tapanuli Tengah", capital: "Pandan", province: "Sumatera Utara" },
  { slug: "tapanuli-utara", name: "Tapanuli Utara", capital: "Tarutung", province: "Sumatera Utara" },
  { slug: "toba", name: "Toba", capital: "Balige", province: "Sumatera Utara" },
  { slug: "binjai", name: "Binjai", capital: "Binjai", province: "Sumatera Utara" },
  { slug: "gunungsitoli", name: "Gunungsitoli", capital: "Gunungsitoli", province: "Sumatera Utara" },
  { slug: "medan", name: "Medan", capital: "Medan", province: "Sumatera Utara" },
  { slug: "padangsidimpuan", name: "Padangsidimpuan", capital: "Padangsidimpuan", province: "Sumatera Utara" },
  { slug: "pematangsiantar", name: "Pematangsiantar", capital: "Pematangsiantar", province: "Sumatera Utara" },
  { slug: "sibolga", name: "Sibolga", capital: "Sibolga", province: "Sumatera Utara" },
  { slug: "tanjungbalai", name: "Tanjungbalai", capital: "Tanjungbalai", province: "Sumatera Utara" },

  // ==========================================
  // KEPULAUAN RIAU (7 Wilayah)
  // ==========================================
  { slug: "batam", name: "Batam", capital: "Batam", province: "Kepulauan Riau" },
  { slug: "bintan", name: "Bintan", capital: "Bandar Seri Bentan", province: "Kepulauan Riau" },
  { slug: "karimun", name: "Karimun", capital: "Tanjung Balai Karimun", province: "Kepulauan Riau" },
  { slug: "kepulauan-anambas", name: "Kepulauan Anambas", capital: "Tarempa", province: "Kepulauan Riau" },
  { slug: "lingga", name: "Lingga", capital: "Daik", province: "Kepulauan Riau" },
  { slug: "natuna", name: "Natuna", capital: "Ranai", province: "Kepulauan Riau" },
  { slug: "tanjungpinang", name: "Tanjungpinang", capital: "Tanjungpinang", province: "Kepulauan Riau" },

  // ==========================================
  // JAMBI (11 Wilayah)
  // ==========================================
  { slug: "batang-hari", name: "Batang Hari", capital: "Muara Bulian", province: "Jambi" },
  { slug: "bungo", name: "Bungo", capital: "Muara Bungo", province: "Jambi" },
  { slug: "kerinci", name: "Kerinci", capital: "Siulak", province: "Jambi" },
  { slug: "merangin", name: "Merangin", capital: "Bangko", province: "Jambi" },
  { slug: "muaro-jambi", name: "Muaro Jambi", capital: "Sengeti", province: "Jambi" },
  { slug: "sarolangun", name: "Sarolangun", capital: "Sarolangun", province: "Jambi" },
  { slug: "tanjung-jabung-barat", name: "Tanjung Jabung Barat", capital: "Kuala Tungkal", province: "Jambi" },
  { slug: "tanjung-jabung-timur", name: "Tanjung Jabung Timur", capital: "Muara Sabak", province: "Jambi" },
  { slug: "tebo", name: "Tebo", capital: "Muara Tebo", province: "Jambi" },
  { slug: "jambi", name: "Jambi", capital: "Kota Jambi", province: "Jambi" },
  { slug: "sungai-penuh", name: "Sungai Penuh", capital: "Sungai Penuh", province: "Jambi" },

  // ==========================================
  // SUMATERA SELATAN (12 Wilayah)
  // ==========================================
  { slug: "banyuasin", name: "Banyuasin", capital: "Pangkalan Balai", province: "Sumatera Selatan" },
  { slug: "empat-lawang", name: "Empat Lawang", capital: "Tebing Tinggi", province: "Sumatera Selatan" },
  { slug: "lahat", name: "Lahat", capital: "Lahat", province: "Sumatera Selatan" },
  { slug: "muara-enim", name: "Muara Enim", capital: "Muara Enim", province: "Sumatera Selatan" },
  { slug: "musi-banyuasin", name: "Musi Banyuasin", capital: "Sekayu", province: "Sumatera Selatan" },
  { slug: "musi-rawas", name: "Musi Rawas", capital: "Muara Beliti", province: "Sumatera Selatan" },
  { slug: "musi-rawas-utara", name: "Musi Rawas Utara", capital: "Rupit", province: "Sumatera Selatan" },
  { slug: "ogan-ilir", name: "Ogan Ilir", capital: "Indralaya", province: "Sumatera Selatan" },
  { slug: "ogan-komering-ilir", name: "Ogan Komering Ilir", capital: "Kayu Agung", province: "Sumatera Selatan" },
  { slug: "ogan-komering-ulu", name: "Ogan Komering Ulu", capital: "Baturaja", province: "Sumatera Selatan" },
  { slug: "palembang", name: "Palembang", capital: "Palembang", province: "Sumatera Selatan" },
  { slug: "prabumulih", name: "Prabumulih", capital: "Prabumulih", province: "Sumatera Selatan" },

  // ==========================================
  // LAMPUNG (14 Wilayah)
  // ==========================================
  { slug: "bandar-lampung", name: "Bandar Lampung", capital: "Bandar Lampung", province: "Lampung" },
  { slug: "lampung-selatan", name: "Lampung Selatan", capital: "Kalianda", province: "Lampung" },
  { slug: "lampung-tengah", name: "Lampung Tengah", capital: "Gunung Sugih", province: "Lampung" },
  { slug: "lampung-timur", name: "Lampung Timur", capital: "Sukadana", province: "Lampung" },
  { slug: "lampung-utara", name: "Lampung Utara", capital: "Kotabumi", province: "Lampung" },
  { slug: "mesuji", name: "Mesuji", capital: "Mesuji", province: "Lampung" },
  { slug: "metro", name: "Metro", capital: "Metro", province: "Lampung" },
  { slug: "pesawaran", name: "Pesawaran", capital: "Gedong Tataan", province: "Lampung" },
  { slug: "pesisir-barat", name: "Pesisir Barat", capital: "Krui", province: "Lampung" },
  { slug: "pringsewu", name: "Pringsewu", capital: "Pringsewu", province: "Lampung" },
  { slug: "tanggamus", name: "Tanggamus", capital: "Kota Agung", province: "Lampung" },
  { slug: "tulang-bawang", name: "Tulang Bawang", capital: "Menggala", province: "Lampung" },
  { slug: "tulang-bawang-barat", name: "Tulang Bawang Barat", capital: "Panaragan Jaya", province: "Lampung" },
  { slug: "way-kanan", name: "Way Kanan", capital: "Blambangan Umpu", province: "Lampung" },

  // ==========================================
  // BENGKULU (10 Wilayah)
  // ==========================================
  { slug: "bengkulu-selatan", name: "Bengkulu Selatan", capital: "Manna", province: "Bengkulu" },
  { slug: "bengkulu-tengah", name: "Bengkulu Tengah", capital: "Karang Tinggi", province: "Bengkulu" },
  { slug: "bengkulu-utara", name: "Bengkulu Utara", capital: "Arga Makmur", province: "Bengkulu" },
  { slug: "kaur", name: "Kaur", capital: "Bintuhan", province: "Bengkulu" },
  { slug: "kepahiang", name: "Kepahiang", capital: "Kepahiang", province: "Bengkulu" },
  { slug: "lebong", name: "Lebong", capital: "Tubei", province: "Bengkulu" },
  { slug: "mukomuko", name: "Mukomuko", capital: "Mukomuko", province: "Bengkulu" },
  { slug: "rejang-lebong", name: "Rejang Lebong", capital: "Curup", province: "Bengkulu" },
  { slug: "seluma", name: "Seluma", capital: "Tais", province: "Bengkulu" },
  { slug: "bengkulu", name: "Bengkulu", capital: "Kota Bengkulu", province: "Bengkulu" },

  // ==========================================
  // KEPULAUAN BANGKA BELITUNG (7 Wilayah)
  // ==========================================
  { slug: "pangkalpinang", name: "Pangkalpinang", capital: "Pangkalpinang", province: "Kepulauan Bangka Belitung" },
  { slug: "bangka", name: "Bangka", capital: "Sungailiat", province: "Kepulauan Bangka Belitung" },
  { slug: "bangka-barat", name: "Bangka Barat", capital: "Muntok", province: "Kepulauan Bangka Belitung" },
  { slug: "bangka-selatan", name: "Bangka Selatan", capital: "Toboali", province: "Kepulauan Bangka Belitung" },
  { slug: "bangka-tengah", name: "Bangka Tengah", capital: "Koba", province: "Kepulauan Bangka Belitung" },
  { slug: "belitung", name: "Belitung", capital: "Tanjung Pandan", province: "Kepulauan Bangka Belitung" },
  { slug: "belitung-timur", name: "Belitung Timur", capital: "Manggar", province: "Kepulauan Bangka Belitung" },

  // ==========================================
  // NUSA TENGGARA BARAT (10 Wilayah)
  // ==========================================
  { slug: "mataram", name: "Mataram", capital: "Mataram", province: "Nusa Tenggara Barat" },
  { slug: "lombok-barat", name: "Lombok Barat", capital: "Gerung", province: "Nusa Tenggara Barat" },
  { slug: "lombok-tengah", name: "Lombok Tengah", capital: "Praya", province: "Nusa Tenggara Barat" },
  { slug: "lombok-timur", name: "Lombok Timur", capital: "Selong", province: "Nusa Tenggara Barat" },
  { slug: "lombok-utara", name: "Lombok Utara", capital: "Tanjung", province: "Nusa Tenggara Barat" },
  { slug: "sumbawa", name: "Sumbawa", capital: "Sumbawa Besar", province: "Nusa Tenggara Barat" },
  { slug: "sumbawa-barat", name: "Sumbawa Barat", capital: "Taliwang", province: "Nusa Tenggara Barat" },
  { slug: "dompu", name: "Dompu", capital: "Dompu", province: "Nusa Tenggara Barat" },
  { slug: "bima", name: "Bima", capital: "Woha", province: "Nusa Tenggara Barat" },
  { slug: "kota-bima", name: "Kota Bima", capital: "Bima", province: "Nusa Tenggara Barat" },

  // ==========================================
  // NUSA TENGGARA TIMUR (22 Wilayah)
  // ==========================================
  { slug: "kupang", name: "Kupang", capital: "Kupang", province: "Nusa Tenggara Timur" },
  { slug: "alor", name: "Alor", capital: "Kalabahi", province: "Nusa Tenggara Timur" },
  { slug: "belu", name: "Belu", capital: "Atambua", province: "Nusa Tenggara Timur" },
  { slug: "ende", name: "Ende", capital: "Ende", province: "Nusa Tenggara Timur" },
  { slug: "flores-timur", name: "Flores Timur", capital: "Larantuka", province: "Nusa Tenggara Timur" },
  { slug: "kupang-timur", name: "Kupang Timur", capital: "Kupang Timur", province: "Nusa Tenggara Timur" },
  { slug: "lembata", name: "Lembata", capital: "Lewoleba", province: "Nusa Tenggara Timur" },
  { slug: "malaka", name: "Malaka", capital: "Betun", province: "Nusa Tenggara Timur" },
  { slug: "manggarai", name: "Manggarai", capital: "Ruteng", province: "Nusa Tenggara Timur" },
  { slug: "manggarai-barat", name: "Manggarai Barat", capital: "Labuan Bajo", province: "Nusa Tenggara Timur" },
  { slug: "manggarai-timur", name: "Manggarai Timur", capital: "Borong", province: "Nusa Tenggara Timur" },
  { slug: "nagekeo", name: "Nagekeo", capital: "Mbay", province: "Nusa Tenggara Timur" },
  { slug: "ngada", name: "Ngada", capital: "Bajawa", province: "Nusa Tenggara Timur" },
  { slug: "rote-ndao", name: "Rote Ndao", capital: "Baa", province: "Nusa Tenggara Timur" },
  { slug: "sabu-raijua", name: "Sabu Raijua", capital: "Menia", province: "Nusa Tenggara Timur" },
  { slug: "sikka", name: "Sikka", capital: "Maumere", province: "Nusa Tenggara Timur" },
  { slug: "sumba-barat", name: "Sumba Barat", capital: "Waikabubak", province: "Nusa Tenggara Timur" },
  { slug: "sumba-barat-daya", name: "Sumba Barat Daya", capital: "Tambolaka", province: "Nusa Tenggara Timur" },
  { slug: "sumba-tengah", name: "Sumba Tengah", capital: "Waibakul", province: "Nusa Tenggara Timur" },
  { slug: "sumba-timur", name: "Sumba Timur", capital: "Waingapu", province: "Nusa Tenggara Timur" },
  { slug: "timor-tengah-selatan", name: "Timor Tengah Selatan", capital: "Soe", province: "Nusa Tenggara Timur" },
  { slug: "timor-tengah-utara", name: "Timor Tengah Utara", capital: "Kefamenanu", province: "Nusa Tenggara Timur" },

  // ==========================================
  // KALIMANTAN BARAT (14 Wilayah)
  // ==========================================
  { slug: "pontianak", name: "Pontianak", capital: "Pontianak", province: "Kalimantan Barat" },
  { slug: "singkawang", name: "Singkawang", capital: "Singkawang", province: "Kalimantan Barat" },
  { slug: "bengkayang", name: "Bengkayang", capital: "Bengkayang", province: "Kalimantan Barat" },
  { slug: "kapuas-hulu", name: "Kapuas Hulu", capital: "Putussibau", province: "Kalimantan Barat" },
  { slug: "kayong-utara", name: "Kayong Utara", capital: "Sukadana", province: "Kalimantan Barat" },
  { slug: "ketapang", name: "Ketapang", capital: "Delta Pawan", province: "Kalimantan Barat" },
  { slug: "kubu-raya", name: "Kubu Raya", capital: "Sungai Raya", province: "Kalimantan Barat" },
  { slug: "landak", name: "Landak", capital: "Ngabang", province: "Kalimantan Barat" },
  { slug: "melawi", name: "Melawi", capital: "Nanga Pinoh", province: "Kalimantan Barat" },
  { slug: "mempawah", name: "Mempawah", capital: "Mempawah", province: "Kalimantan Barat" },
  { slug: "sambas", name: "Sambas", capital: "Sambas", province: "Kalimantan Barat" },
  { slug: "sanggau", name: "Sanggau", capital: "Kapuas", province: "Kalimantan Barat" },
  { slug: "sekadau", name: "Sekadau", capital: "Sekadau Hilir", province: "Kalimantan Barat" },
  { slug: "sintang", name: "Sintang", capital: "Sintang", province: "Kalimantan Barat" },

  // ==========================================
  // KALIMANTAN TENGAH (14 Wilayah)
  // ==========================================
  { slug: "palangka-raya", name: "Palangka Raya", capital: "Palangka Raya", province: "Kalimantan Tengah" },
  { slug: "barito-selatan", name: "Barito Selatan", capital: "Buntok", province: "Kalimantan Tengah" },
  { slug: "barito-timur", name: "Barito Timur", capital: "Tamiang Layang", province: "Kalimantan Tengah" },
  { slug: "barito-utara", name: "Barito Utara", capital: "Muara Teweh", province: "Kalimantan Tengah" },
  { slug: "gunung-mas", name: "Gunung Mas", capital: "Kuala Kurun", province: "Kalimantan Tengah" },
  { slug: "kapuas", name: "Kapuas", capital: "Kuala Kapuas", province: "Kalimantan Tengah" },
  { slug: "katingan", name: "Katingan", capital: "Kasongan", province: "Kalimantan Tengah" },
  { slug: "kotawaringin-barat", name: "Kotawaringin Barat", capital: "Pangkalan Bun", province: "Kalimantan Tengah" },
  { slug: "kotawaringin-timur", name: "Kotawaringin Timur", capital: "Sampit", province: "Kalimantan Tengah" },
  { slug: "lamandau", name: "Lamandau", capital: "Nanga Bulik", province: "Kalimantan Tengah" },
  { slug: "murung-raya", name: "Murung Raya", capital: "Puruk Cahu", province: "Kalimantan Tengah" },
  { slug: "pulang-pisau", name: "Pulang Pisau", capital: "Pulang Pisau", province: "Kalimantan Tengah" },
  { slug: "seruyan", name: "Seruyan", capital: "Kuala Pembuang", province: "Kalimantan Tengah" },
  { slug: "sukamara", name: "Sukamara", capital: "Sukamara", province: "Kalimantan Tengah" },

  // ==========================================
  // KALIMANTAN SELATAN (13 Wilayah)
  // ==========================================
  { slug: "banjarbaru", name: "Banjarbaru", capital: "Banjarbaru", province: "Kalimantan Selatan" },
  { slug: "banjarmasin", name: "Banjarmasin", capital: "Banjarmasin", province: "Kalimantan Selatan" },
  { slug: "balangan", name: "Balangan", capital: "Paringin", province: "Kalimantan Selatan" },
  { slug: "kabupaten-banjar", name: "Banjar", capital: "Martapura", province: "Kalimantan Selatan" },
  { slug: "barito-kuala", name: "Barito Kuala", capital: "Marabahan", province: "Kalimantan Selatan" },
  { slug: "hulu-sungai-selatan", name: "Hulu Sungai Selatan", capital: "Kandangan", province: "Kalimantan Selatan" },
  { slug: "hulu-sungai-tengah", name: "Hulu Sungai Tengah", capital: "Barabai", province: "Kalimantan Selatan" },
  { slug: "hulu-sungai-utara", name: "Hulu Sungai Utara", capital: "Amuntai", province: "Kalimantan Selatan" },
  { slug: "kotabaru", name: "Kotabaru", capital: "Kotabaru", province: "Kalimantan Selatan" },
  { slug: "tabalong", name: "Tabalong", capital: "Tanjung", province: "Kalimantan Selatan" },
  { slug: "tanah-bumbu", name: "Tanah Bumbu", capital: "Batulicin", province: "Kalimantan Selatan" },
  { slug: "tanah-laut", name: "Tanah Laut", capital: "Pelaihari", province: "Kalimantan Selatan" },
  { slug: "tapin", name: "Tapin", capital: "Rantau", province: "Kalimantan Selatan" },

  // ==========================================
  // KALIMANTAN TIMUR (10 Wilayah)
  // ==========================================
  { slug: "samarinda", name: "Samarinda", capital: "Samarinda", province: "Kalimantan Timur" },
  { slug: "balikpapan", name: "Balikpapan", capital: "Balikpapan", province: "Kalimantan Timur" },
  { slug: "bontang", name: "Bontang", capital: "Bontang", province: "Kalimantan Timur" },
  { slug: "berau", name: "Berau", capital: "Tanjung Redeb", province: "Kalimantan Timur" },
  { slug: "kutai-barat", name: "Kutai Barat", capital: "Sendawar", province: "Kalimantan Timur" },
  { slug: "kutai-kartanegara", name: "Kutai Kartanegara", capital: "Tenggarong", province: "Kalimantan Timur" },
  { slug: "kutai-timur", name: "Kutai Timur", capital: "Sangatta", province: "Kalimantan Timur" },
  { slug: "mahakam-ulu", name: "Mahakam Ulu", capital: "Ujoh Bilang", province: "Kalimantan Timur" },
  { slug: "paser", name: "Paser", capital: "Tanah Grogot", province: "Kalimantan Timur" },
  { slug: "penajam-paser-utara", name: "Penajam Paser Utara", capital: "Penajam", province: "Kalimantan Timur" },

  // ==========================================
  // KALIMANTAN UTARA (5 Wilayah)
  // ==========================================
  { slug: "tarakan", name: "Tarakan", capital: "Tarakan", province: "Kalimantan Utara" },
  { slug: "bulungan", name: "Bulungan", capital: "Tanjung Selor", province: "Kalimantan Utara" },
  { slug: "malinau", name: "Malinau", capital: "Malinau", province: "Kalimantan Utara" },
  { slug: "nunukan", name: "Nunukan", capital: "Nunukan", province: "Kalimantan Utara" },
  { slug: "tana-tidung", name: "Tana Tidung", capital: "Tideng Pale", province: "Kalimantan Utara" },

  // ==========================================
  // SULAWESI UTARA (15 Wilayah)
  // ==========================================
  { slug: "manado", name: "Manado", capital: "Manado", province: "Sulawesi Utara" },
  { slug: "bitung", name: "Bitung", capital: "Bitung", province: "Sulawesi Utara" },
  { slug: "kotamobagu", name: "Kotamobagu", capital: "Kotamobagu", province: "Sulawesi Utara" },
  { slug: "tomohon", name: "Tomohon", capital: "Tomohon", province: "Sulawesi Utara" },
  { slug: "bolaang-mongondow", name: "Bolaang Mongondow", capital: "Lolak", province: "Sulawesi Utara" },
  { slug: "bolaang-mongondow-selatan", name: "Bolaang Mongondow Selatan", capital: "Bolaang Uki", province: "Sulawesi Utara" },
  { slug: "bolaang-mongondow-timur", name: "Bolaang Mongondow Timur", capital: "Tutuyan", province: "Sulawesi Utara" },
  { slug: "bolaang-mongondow-utara", name: "Bolaang Mongondow Utara", capital: "Boroko", province: "Sulawesi Utara" },
  { slug: "kepulauan-sangihe", name: "Kepulauan Sangihe", capital: "Tahuna", province: "Sulawesi Utara" },
  { slug: "kepulauan-siau-tagulandang-biaro", name: "Kepulauan Siau Tagulandang Biaro", capital: "Ondong Siau", province: "Sulawesi Utara" },
  { slug: "kepulauan-talaud", name: "Kepulauan Talaud", capital: "Melonguane", province: "Sulawesi Utara" },
  { slug: "minahasa", name: "Minahasa", capital: "Tondano", province: "Sulawesi Utara" },
  { slug: "minahasa-selatan", name: "Minahasa Selatan", capital: "Amurang", province: "Sulawesi Utara" },
  { slug: "minahasa-tenggara", name: "Minahasa Tenggara", capital: "Ratahan", province: "Sulawesi Utara" },
  { slug: "minahasa-utara", name: "Minahasa Utara", capital: "Airmadidi", province: "Sulawesi Utara" },

  // ==========================================
  // SULAWESI TENGAH (13 Wilayah)
  // ==========================================
  { slug: "palu", name: "Palu", capital: "Palu", province: "Sulawesi Tengah" },
  { slug: "banggai", name: "Banggai", capital: "Luwuk", province: "Sulawesi Tengah" },
  { slug: "banggai-kepulauan", name: "Banggai Kepulauan", capital: "Salakan", province: "Sulawesi Tengah" },
  { slug: "banggai-laut", name: "Banggai Laut", capital: "Banggai", province: "Sulawesi Tengah" },
  { slug: "buol", name: "Buol", capital: "Buol", province: "Sulawesi Tengah" },
  { slug: "donggala", name: "Donggala", capital: "Banawa", province: "Sulawesi Tengah" },
  { slug: "morowali", name: "Morowali", capital: "Bungku", province: "Sulawesi Tengah" },
  { slug: "morowali-utara", name: "Morowali Utara", capital: "Kolonodale", province: "Sulawesi Tengah" },
  { slug: "parigi-moutong", name: "Parigi Moutong", capital: "Parigi", province: "Sulawesi Tengah" },
  { slug: "poso", name: "Poso", capital: "Poso", province: "Sulawesi Tengah" },
  { slug: "sigi", name: "Sigi", capital: "Sigi Biromaru", province: "Sulawesi Tengah" },
  { slug: "tojo-una-una", name: "Tojo Una-Una", capital: "Ampana", province: "Sulawesi Tengah" },
  { slug: "tolitoli", name: "Tolitoli", capital: "Tolitoli", province: "Sulawesi Tengah" },

  // ==========================================
  // SULAWESI SELATAN (24 Wilayah)
  // ==========================================
  { slug: "makassar", name: "Makassar", capital: "Makassar", province: "Sulawesi Selatan" },
  { slug: "bantaeng", name: "Bantaeng", capital: "Bantaeng", province: "Sulawesi Selatan" },
  { slug: "barru", name: "Barru", capital: "Barru", province: "Sulawesi Selatan" },
  { slug: "bone", name: "Bone", capital: "Watampone", province: "Sulawesi Selatan" },
  { slug: "bulukumba", name: "Bulukumba", capital: "Ujung Bulu", province: "Sulawesi Selatan" },
  { slug: "enrekang", name: "Enrekang", capital: "Enrekang", province: "Sulawesi Selatan" },
  { slug: "gowa", name: "Gowa", capital: "Sungguminasa", province: "Sulawesi Selatan" },
  { slug: "jeneponto", name: "Jeneponto", capital: "Bontosunggu", province: "Sulawesi Selatan" },
  { slug: "kepulauan-selayar", name: "Kepulauan Selayar", capital: "Benteng", province: "Sulawesi Selatan" },
  { slug: "luwu", name: "Luwu", capital: "Belopa", province: "Sulawesi Selatan" },
  { slug: "luwu-timur", name: "Luwu Timur", capital: "Malili", province: "Sulawesi Selatan" },
  { slug: "luwu-utara", name: "Luwu Utara", capital: "Masamba", province: "Sulawesi Selatan" },
  { slug: "maros", name: "Maros", capital: "Turikale", province: "Sulawesi Selatan" },
  { slug: "pangkajene-dan-kepulauan", name: "Pangkajene dan Kepulauan", capital: "Pangkajene", province: "Sulawesi Selatan" },
  { slug: "pinrang", name: "Pinrang", capital: "Watang Sawitto", province: "Sulawesi Selatan" },
  { slug: "sidenreng-rappang", name: "Sidenreng Rappang", capital: "Pangkajene Sidenreng", province: "Sulawesi Selatan" },
  { slug: "sinjai", name: "Sinjai", capital: "Sinjai Utara", province: "Sulawesi Selatan" },
  { slug: "soppeng", name: "Soppeng", capital: "Watansoppeng", province: "Sulawesi Selatan" },
  { slug: "takalar", name: "Takalar", capital: "Pattallassang", province: "Sulawesi Selatan" },
  { slug: "tana-toraja", name: "Tana Toraja", capital: "Makale", province: "Sulawesi Selatan" },
  { slug: "toraja-utara", name: "Toraja Utara", capital: "Rantepao", province: "Sulawesi Selatan" },
  { slug: "wajo", name: "Wajo", capital: "Sengkang", province: "Sulawesi Selatan" },
  { slug: "palopo", name: "Palopo", capital: "Palopo", province: "Sulawesi Selatan" },
  { slug: "parepare", name: "Parepare", capital: "Parepare", province: "Sulawesi Selatan" },

  // ==========================================
  // SULAWESI TENGGARA (17 Wilayah)
  // ==========================================
  { slug: "kendari", name: "Kendari", capital: "Kendari", province: "Sulawesi Tenggara" },
  { slug: "baubau", name: "Baubau", capital: "Baubau", province: "Sulawesi Tenggara" },
  { slug: "bombana", name: "Bombana", capital: "Rumbia", province: "Sulawesi Tenggara" },
  { slug: "buton", name: "Buton", capital: "Pasarwajo", province: "Sulawesi Tenggara" },
  { slug: "buton-selatan", name: "Buton Selatan", capital: "Batauga", province: "Sulawesi Tenggara" },
  { slug: "buton-tengah", name: "Buton Tengah", capital: "Labungkari", province: "Sulawesi Tenggara" },
  { slug: "buton-utara", name: "Buton Utara", capital: "Buranga", province: "Sulawesi Tenggara" },
  { slug: "kolaka", name: "Kolaka", capital: "Kolaka", province: "Sulawesi Tenggara" },
  { slug: "kolaka-timur", name: "Kolaka Timur", capital: "Tirawuta", province: "Sulawesi Tenggara" },
  { slug: "kolaka-utara", name: "Kolaka Utara", capital: "Lasusua", province: "Sulawesi Tenggara" },
  { slug: "konawe", name: "Konawe", capital: "Unaaha", province: "Sulawesi Tenggara" },
  { slug: "konawe-kepulauan", name: "Konawe Kepulauan", capital: "Langara", province: "Sulawesi Tenggara" },
  { slug: "konawe-selatan", name: "Konawe Selatan", capital: "Andoolo", province: "Sulawesi Tenggara" },
  { slug: "konawe-utara", name: "Konawe Utara", capital: "Wanggudu", province: "Sulawesi Tenggara" },
  { slug: "muna", name: "Muna", capital: "Raha", province: "Sulawesi Tenggara" },
  { slug: "muna-barat", name: "Muna Barat", capital: "Sawerigadi", province: "Sulawesi Tenggara" },
  { slug: "wakatobi", name: "Wakatobi", capital: "Wangi-Wangi", province: "Sulawesi Tenggara" },

  // ==========================================
  // GORONTALO (5 Wilayah)
  // ==========================================
  { slug: "gorontalo", name: "Gorontalo", capital: "Gorontalo", province: "Gorontalo" },
  { slug: "boalemo", name: "Boalemo", capital: "Tilamuta", province: "Gorontalo" },
  { slug: "bone-bolango", name: "Bone Bolango", capital: "Suwawa", province: "Gorontalo" },
  { slug: "gorontalo-utara", name: "Gorontalo Utara", capital: "Kwandang", province: "Gorontalo" },
  { slug: "pohuwato", name: "Pohuwato", capital: "Marisa", province: "Gorontalo" },

  // ==========================================
  // SULAWESI BARAT (6 Wilayah)
  // ==========================================
  { slug: "mamuju", name: "Mamuju", capital: "Mamuju", province: "Sulawesi Barat" },
  { slug: "majene", name: "Majene", capital: "Majene", province: "Sulawesi Barat" },
  { slug: "mamasa", name: "Mamasa", capital: "Mamasa", province: "Sulawesi Barat" },
  { slug: "mamuju-tengah", name: "Mamuju Tengah", capital: "Tobadak", province: "Sulawesi Barat" },
  { slug: "pasangkayu", name: "Pasangkayu", capital: "Pasangkayu", province: "Sulawesi Barat" },
  { slug: "polewali-mandar", name: "Polewali Mandar", capital: "Polewali", province: "Sulawesi Barat" },

  // ==========================================
  // MALUKU (10 Wilayah)
  // ==========================================
  { slug: "ambon", name: "Ambon", capital: "Ambon", province: "Maluku" },
  { slug: "tual", name: "Tual", capital: "Tual", province: "Maluku" },
  { slug: "buru", name: "Buru", capital: "Namlea", province: "Maluku" },
  { slug: "buru-selatan", name: "Buru Selatan", capital: "Namrole", province: "Maluku" },
  { slug: "kepulauan-aru", name: "Kepulauan Aru", capital: "Dobo", province: "Maluku" },
  { slug: "maluku-barat-daya", name: "Maluku Barat Daya", capital: "Tiakur", province: "Maluku" },
  { slug: "maluku-tengah", name: "Maluku Tengah", capital: "Masohi", province: "Maluku" },
  { slug: "maluku-tenggara", name: "Maluku Tenggara", capital: "Langgur", province: "Maluku" },
  { slug: "seram-bagian-barat", name: "Seram Bagian Barat", capital: "Piru", province: "Maluku" },
  { slug: "seram-bagian-timur", name: "Seram Bagian Timur", capital: "Bula", province: "Maluku" },

  // ==========================================
  // MALUKU UTARA (10 Wilayah)
  // ==========================================
  { slug: "ternate", name: "Ternate", capital: "Ternate", province: "Maluku Utara" },
  { slug: "tidore-kepulauan", name: "Tidore Kepulauan", capital: "Soasio", province: "Maluku Utara" },
  { slug: "halmahera-barat", name: "Halmahera Barat", capital: "Jailolo", province: "Maluku Utara" },
  { slug: "halmahera-selatan", name: "Halmahera Selatan", capital: "Labuha", province: "Maluku Utara" },
  { slug: "halmahera-tengah", name: "Halmahera Tengah", capital: "Weda", province: "Maluku Utara" },
  { slug: "halmahera-timur", name: "Halmahera Timur", capital: "Kota Maba", province: "Maluku Utara" },
  { slug: "halmahera-utara", name: "Halmahera Utara", capital: "Tobelo", province: "Maluku Utara" },
  { slug: "kepulauan-sula", name: "Kepulauan Sula", capital: "Sanana", province: "Maluku Utara" },
  { slug: "pulau-morotai", name: "Pulau Morotai", capital: "Daruba", province: "Maluku Utara" },
  { slug: "pulau-taliabu", name: "Pulau Taliabu", capital: "Bobong", province: "Maluku Utara" },

  // ==========================================
  // PAPUA (9 Wilayah)
  // ==========================================
  { slug: "biak-numfor", name: "Biak Numfor", capital: "Biak", province: "Papua" },
  { slug: "jayapura", name: "Jayapura", capital: "Sentani", province: "Papua" },
  { slug: "keerom", name: "Keerom", capital: "Waris", province: "Papua" },
  { slug: "kepulauan-yapen", name: "Kepulauan Yapen", capital: "Serui", province: "Papua" },
  { slug: "mamberamo-raya", name: "Mamberamo Raya", capital: "Burmeso", province: "Papua" },
  { slug: "sarmi", name: "Sarmi", capital: "Sarmi", province: "Papua" },
  { slug: "supiori", name: "Supiori", capital: "Sorendiweri", province: "Papua" },
  { slug: "waropen", name: "Waropen", capital: "Botawa", province: "Papua" },
  { slug: "kota-jayapura", name: "Kota Jayapura", capital: "Jayapura", province: "Papua" },

  // ==========================================
  // PAPUA BARAT (7 Wilayah)
  // ==========================================
  { slug: "manokwari", name: "Manokwari", capital: "Manokwari", province: "Papua Barat" },
  { slug: "fakfak", name: "Fakfak", capital: "Fakfak", province: "Papua Barat" },
  { slug: "kaimana", name: "Kaimana", capital: "Kaimana", province: "Papua Barat" },
  { slug: "manokwari-selatan", name: "Manokwari Selatan", capital: "Ransiki", province: "Papua Barat" },
  { slug: "pegunungan-arfak", name: "Pegunungan Arfak", capital: "Anggi", province: "Papua Barat" },
  { slug: "teluk-bintuni", name: "Teluk Bintuni", capital: "Bintuni", province: "Papua Barat" },
  { slug: "teluk-wondama", name: "Teluk Wondama", capital: "Rasiei", province: "Papua Barat" },

  // ==========================================
  // PAPUA SELATAN (4 Wilayah)
  // ==========================================
  { slug: "merauke", name: "Merauke", capital: "Merauke", province: "Papua Selatan" },
  { slug: "asmat", name: "Asmat", capital: "Agats", province: "Papua Selatan" },
  { slug: "boven-digoel", name: "Boven Digoel", capital: "Tanah Merah", province: "Papua Selatan" },
  { slug: "mappi", name: "Mappi", capital: "Kepi", province: "Papua Selatan" },

  // ==========================================
  // PAPUA TENGAH (8 Wilayah)
  // ==========================================
  { slug: "nabire", name: "Nabire", capital: "Nabire", province: "Papua Tengah" },
  { slug: "dogiyai", name: "Dogiyai", capital: "Kigamani", province: "Papua Tengah" },
  { slug: "deiyai", name: "Deiyai", capital: "Tigi", province: "Papua Tengah" },
  { slug: "intan-jaya", name: "Intan Jaya", capital: "Sugapa", province: "Papua Tengah" },
  { slug: "mimika", name: "Mimika", capital: "Timika", province: "Papua Tengah" },
  { slug: "paniai", name: "Paniai", capital: "Enarotali", province: "Papua Tengah" },
  { slug: "puncak", name: "Puncak", capital: "Ilaga", province: "Papua Tengah" },
  { slug: "puncak-jaya", name: "Puncak Jaya", capital: "Kotamulia", province: "Papua Tengah" },

  // ==========================================
  // PAPUA PEGUNUNGAN (8 Wilayah)
  // ==========================================
  { slug: "jayawijaya", name: "Jayawijaya", capital: "Wamena", province: "Papua Pegunungan" },
  { slug: "lanny-jaya", name: "Lanny Jaya", capital: "Tiom", province: "Papua Pegunungan" },
  { slug: "mamberamo-tengah", name: "Mamberamo Tengah", capital: "Kobakma", province: "Papua Pegunungan" },
  { slug: "nduga", name: "Nduga", capital: "Kenyam", province: "Papua Pegunungan" },
  { slug: "pegunungan-bintang", name: "Pegunungan Bintang", capital: "Oksibil", province: "Papua Pegunungan" },
  { slug: "tolikara", name: "Tolikara", capital: "Karubaga", province: "Papua Pegunungan" },
  { slug: "yalimo", name: "Yalimo", capital: "Elelim", province: "Papua Pegunungan" },
  { slug: "yahukimo", name: "Yahukimo", capital: "Sumohai", province: "Papua Pegunungan" },

  // ==========================================
  // PAPUA BARAT DAYA (6 Wilayah)
  // ==========================================
  { slug: "sorong", name: "Sorong", capital: "Aimas", province: "Papua Barat Daya" },
  { slug: "kota-sorong", name: "Kota Sorong", capital: "Sorong", province: "Papua Barat Daya" },
  { slug: "maybrat", name: "Maybrat", capital: "Kumurkek", province: "Papua Barat Daya" },
  { slug: "raja-ampat", name: "Raja Ampat", capital: "Waisai", province: "Papua Barat Daya" },
  { slug: "sorong-selatan", name: "Sorong Selatan", capital: "Teminabuan", province: "Papua Barat Daya" },
  { slug: "tambrauw", name: "Tambrauw", capital: "Fef", province: "Papua Barat Daya" },
];
