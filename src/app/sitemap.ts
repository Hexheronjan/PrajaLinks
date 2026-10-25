import { MetadataRoute } from "next";
import { jatimCities } from "@/data/jatimCities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.prajalinks.my.id";
  const now = new Date();

  // Halaman Utama & Layanan Pilar
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/layanan/jasa-pembuatan-website`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/jasa-pembuatan-aplikasi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/jasa-pembuatan-tugas-coding`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/jasa-website-desa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wilayah`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  // 38 Wilayah Kabupaten & Kota di Jawa Timur
  const cityPages: MetadataRoute.Sitemap = jatimCities.map((city) => ({
    url: `${baseUrl}/wilayah/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...mainPages, ...cityPages];
}
