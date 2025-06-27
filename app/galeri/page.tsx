"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ["Semua", "Kegiatan", "Pemandangan", "Fasilitas"];

  const galeriData = [
    {
      id: 1,
      title: "Kunjungan Ke Sekolah",
      category: "Kegiatan",
      image: "kegiatan 3.jpeg",
      description: "Kunjungan Ke Sekolah Untuk Sosialisasi",
    },
    {
      id: 2,
      title: "Bukit Kampung Kuning",
      category: "Pemandangan",
      image: "bukit_kampung_kuning.jpeg",
      description: " Pesona Bukit Di Kampung Yang Begitu Indah ",
    },
    {
      id: 3,
      title: "Kantor Kampung Kuning",
      category: "Fasilitas",
      image: "kantor.jpeg",
      description:
        "Kantor Kampung yang telah direnovasi dan di Cat Kembali Agar Terlihat Indah",
    },
    {
      id: 6,
      title: "Silaturahmi Dengan Warga Kampung",
      category: "Kegiatan",
      image: "kegiatan 2.jpeg",
      description: "Bersilaturahmi Dengan Warga Yang Ada Di Kampung Kuning",
    },
    {
      id: 7,
      title: "Sawah Kampung Kuning",
      category: "Pemandangan",
      image: "sawah.jpg",
      description: "Pemandangan Sawah Yang Sangat Indah Di Kampung Kuning",
    },
    {
      id: 8,
      title: "Masjid",
      category: "Fasilitas",
      image: "masjid.jpeg",
      description: "Masjid Yang Sangat Indah Di Kampung Kuning",
    },
    {
      id: 11,
      title: "Belajar Membuat Tikar Menggunakan Daun Bengkuang",
      category: "Kegiatan",
      image: "kegiatan 1.jpeg",
      description:
        "Menjemur Daun Bengkuang Untuk Proses Pembuatan Tikar Yang Sangat Khas Di Kampung Kuning",
    },
    {
      id: 12,
      title: "Sunset Di Bukit Kampung Kuning",
      category: "Pemandangan",
      image: "Sunset.jpeg",
      description:
        "Pemandangan Sunset Yang Sangat Indah Di Antara Bukit Kampung Kuning",
    },
    {
      id: 13,
      title: "pelatihan pengembangan UMKM",
      category: "Kegiatan",
      image: "pelatihan-umkm.jpeg",
      description: "Melakukan kegiatan Pengembangan UMKN",
    },
    {
      id: 14,
      title: "Proses adat pernikahan",
      category: "Kegiatan",
      image: "pernikahan.jpeg",
      description: "Melakukan kegiatan Pengembangan UMKN",
    },
  ];

  const filteredImages =
    selectedCategory === "Semua"
      ? galeriData
      : galeriData.filter((item) => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Kegiatan: "bg-blue-100 text-blue-800",
      Pemandangan: "bg-green-100 text-green-800",
      Fasilitas: "bg-purple-100 text-purple-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-yellow-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Galeri Foto
              </h1>
              <p className="text-yellow-100">
                Dokumentasi kegiatan dan keindahan kampung Kuning
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
              <Camera className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-6">
            Galeri Kampung Kuning
          </h1>
          <p className="text-xl text-yellow-600 max-w-3xl mx-auto leading-relaxed">
            Melihat keindahan dan aktivitas kampung kuning melalui dokumentasi
            foto yang menginspirasi
          </p>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "border-yellow-300 text-yellow-700 hover:bg-yellow-100"
              } transition-all duration-300 transform hover:scale-105`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <Card
              key={item.id}
              className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-2 left-2">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-yellow-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-yellow-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-yellow-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-xs text-yellow-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={
                    filteredImages[selectedImage].image || "/placeholder.svg"
                  }
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  crossOrigin="anonymous"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={getCategoryColor(
                        filteredImages[selectedImage].category
                      )}
                    >
                      {filteredImages[selectedImage].category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-yellow-600 mb-4">
                    {filteredImages[selectedImage].description}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                    >
                      <Heart className="w-4 h-4 mr-1" />
                      Suka
                    </Button>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Statistik Galeri</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">
                    {galeriData.length}
                  </div>
                  <div className="text-yellow-100">Total Foto</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">
                    {categories.length - 1}
                  </div>
                  <div className="text-yellow-100">Kategori</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2025</div>
                  <div className="text-yellow-100">Tahun Aktif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-yellow-100">Kenangan</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
