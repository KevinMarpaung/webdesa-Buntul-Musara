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
      title: "Pemukiman Warga Desa",
      category: "Pemandangan",
      image: "pemukiman.JPG",
      description:
        "Pesona Pemukiman Warga Desa Buntul Musara Yang Dilihat Dari Atas Bukit",
    },
    {
      id: 2,
      title: "Air Terjun",
      category: "Pemandangan",
      image: "pemandangan2.JPG",
      description: " Pesona Air Terjun Di Kampung Yang Begitu Indah ",
    },
    {
      id: 3,
      title: "Kolam Biru",
      category: "Pemandangan",
      image: "kolabiru.JPG",
      description: "Pesona Kolam Biru Di Kampung Yang Begitu Indah",
    },
    {
      id: 6,
      title: " peukan ",
      category: "Pemandangan",
      image: "mushola.JPG",
      description:
        "berada di desa buntul musara yang di adakan setiap hari rabu jadi kek pusat perbelanjaan di kecamatan tripe jaya",
    },
    {
      id: 7,
      title: "Sawah Kampung Kuning",
      category: "Pemandangan",
      image: "sawah.jpg",
      description: "Pemandangan Sawah Yang Sangat Indah Di Kampung Kuning",
    },

    {
      id: 11,
      title: "Mengajar Disekolah",
      category: "Kegiatan",
      image: "kegiatan1.jpg",
      description: "Mengajar Disekolah Anak Sd",
    },

    {
      id: 13,
      title: "Foto bersama Kepsek SMPN 1 TRIPE Jaya",
      category: "Kegiatan",
      image: "Foto bersama Kepsek SMPN 1 TRIPE Jaya.jpg",
      description: "Foto bersama Kepsek SMPN 1 TRIPE Jaya",
    },

    {
      id: 15,
      title: "Kegiatan Posyandu",
      category: "Kegiatan",
      image: "Kegiatan Posyandu.jpg",
      description: "Foto bersama pemuda_pemudi",
    },
    {
      id: 16,
      title: "Kegiatan sosialisasi proker mandiri ",
      category: "Kegiatan",
      image: "Kegiatan sosialisasi proker mandiri .jpg",
      description: "Kegiatan sosialisasi proker mandir",
    },
    {
      id: 17,
      title: "Pemberian apresiasi di SMP Negeri 1 Tripe Jaya",
      category: "Kegiatan",
      image: "gemoyyy.jpg",
      description: "Pemberian apresiasi di SMP Negeri 1 Tripe Jaya",
    },
    {
      id: 18,
      title: "Rewang dirumah pengulu ",
      category: "Kegiatan",
      image: "Rewang dirumah pengulu.jpg",
      description: "Rewang dirumah pengulu",
    },
    {
      id: 19,
      title: "Taman Kanak-kanak Negeri",
      category: "Fasilitas",
      image: "tkn.JPG",
      description: "Rewang dirumah pengulu",
    },
    {
      id: 20,
      title: "SD Negeri 1 Tripe Jaya",
      category: "Fasilitas",
      image: "sd.JPG",
      description: "Foto Sekola SD",
    },

    {
      id: 22,
      title: "SMP Negeri 1 Tripe Jaya",
      category: "Fasilitas",
      image: "smp.JPG",
      description: "Rewang dirumah pengulu",
    },
    {
      id: 21,
      title: "SMA Negeri 1 Tripe Jaya",
      category: "Fasilitas",
      image: "sma.JPG",
      description: "Foto Sekola SMA",
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
      <header className="bg-gradient-to-br from-sky-400 to-sky-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-blue-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Galeri Foto
              </h1>
              <p className="text-blue-100">
                Dokumentasi kegiatan dan keindahan Desa Buntul Musara
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
              <Camera className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            Galeri Desa Buntul Musara
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Melihat keindahan dan aktivitas Desa Buntul Musara melalui
            dokumentasi foto yang menginspirasi
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
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "border-white text-white-700 hover:bg-blue-100"
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
              className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-sky-200 overflow-hidden group cursor-pointer"
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
                    <Camera className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-blue-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-black mb-2 line-clamp-2">
                  {item.description}
                </p>
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
          <Card className="bg-gradient-to-r from-blue-400 to-sky-500 text-white shadow-xl">
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
