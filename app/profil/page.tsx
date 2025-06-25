"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Users,
  Building,
  Leaf,
  Heart,
  Star,
  Award,
  MapPin,
  ArrowLeft,
  Target,
  Eye,
  TrendingUp,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Penduduk {
  id: string
  nama: string
  nik: string
  alamat: string
  pekerjaan: string
  umur: number
}

export default function ProfilPage() {
  const [penduduk, setPenduduk] = useState<Penduduk[]>([])

  useEffect(() => {
    const savedPenduduk = localStorage.getItem("desa-penduduk")
    if (savedPenduduk) setPenduduk(JSON.parse(savedPenduduk))
  }, [])

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
              <h1 className="text-2xl font-bold text-white drop-shadow-md">Profil Desa</h1>
              <p className="text-yellow-100">Mengenal Desa Maju Bersama</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
              <Building className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-6">Desa Maju Bersama</h1>
          <p className="text-xl text-yellow-600 max-w-3xl mx-auto leading-relaxed">
            Sebuah desa yang berkomitmen untuk membangun masa depan yang cerah bersama masyarakat yang sejahtera,
            mandiri, dan berbudaya
          </p>
        </section>

        {/* Visi Misi */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-yellow-100 to-amber-100 border-yellow-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-yellow-800">Visi Desa</h2>
              </div>
              <p className="text-yellow-700 leading-relaxed text-lg">
                "Mewujudkan Desa Maju Bersama sebagai desa yang mandiri, sejahtera, dan berbudaya dengan memanfaatkan
                potensi lokal secara optimal untuk kesejahteraan masyarakat yang berkelanjutan."
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-amber-800">Misi Desa</h2>
              </div>
              <ul className="space-y-3 text-amber-700 text-lg">
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Mengembangkan ekonomi kreatif dan UMKM berbasis potensi lokal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Melestarikan budaya dan lingkungan hidup yang berkelanjutan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Meningkatkan pelayanan publik yang prima dan transparan</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Informasi Desa */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Informasi Desa</h2>
            <p className="text-xl text-yellow-600">Data dan fakta tentang Desa Maju Bersama</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6">Data Geografis</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-yellow-100">Kecamatan Sejahtera, Kabupaten Makmur</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Luas Wilayah</p>
                    <p className="text-yellow-100">15.5 km²</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Pembagian Wilayah</p>
                    <p className="text-yellow-100">5 Dusun, 12 RT, 8 RW</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Jumlah Penduduk</p>
                    <p className="text-yellow-100">{penduduk.length} Jiwa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-green-100 to-green-200 border-green-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-800">Sektor Pertanian</h4>
                    <p className="text-green-600">Sektor ekonomi utama dengan hasil padi, jagung, dan sayuran</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-800">Kesehatan Masyarakat</h4>
                    <p className="text-blue-600">Prioritas utama dengan fasilitas Puskesmas dan Posyandu</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 border-purple-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-800">UMKM & Ekonomi Kreatif</h4>
                    <p className="text-purple-600">Pengembangan usaha mikro dan industri rumah tangga</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Sejarah Singkat */}
        <section className="mb-16">
          <Card className="p-8 bg-white shadow-xl border-yellow-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-yellow-800 mb-4">Sejarah Singkat</h2>
              <p className="text-xl text-yellow-600">Perjalanan Desa Maju Bersama</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-yellow-700 leading-relaxed text-lg mb-6">
                Desa Maju Bersama didirikan pada tahun 1945 sebagai bagian dari semangat kemerdekaan Indonesia. Nama
                "Maju Bersama" dipilih untuk mencerminkan tekad masyarakat untuk berkembang secara kolektif dan gotong
                royong.
              </p>
              <p className="text-yellow-700 leading-relaxed text-lg mb-6">
                Pada awalnya, desa ini merupakan daerah pertanian dengan mayoritas penduduk bermata pencaharian sebagai
                petani. Seiring berjalannya waktu, desa ini berkembang menjadi pusat ekonomi mikro dengan berbagai usaha
                kecil dan menengah yang berkembang pesat.
              </p>
              <p className="text-yellow-700 leading-relaxed text-lg">
                Hari ini, Desa Maju Bersama telah menjadi contoh desa mandiri yang berhasil mengintegrasikan teknologi
                modern dengan kearifan lokal, menciptakan harmoni antara pembangunan dan pelestarian lingkungan.
              </p>
            </div>
          </Card>
        </section>

        {/* Prestasi */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Prestasi Desa</h2>
            <p className="text-xl text-yellow-600">Pencapaian yang membanggakan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Desa Terbaik Tingkat Kabupaten",
                year: "2023",
                description: "Penghargaan untuk pembangunan desa terpadu",
                icon: Award,
                color: "from-yellow-400 to-amber-500",
              },
              {
                title: "Desa Mandiri Energi",
                year: "2022",
                description: "Implementasi energi terbarukan berbasis komunitas",
                icon: Leaf,
                color: "from-green-400 to-green-500",
              },
              {
                title: "Desa Digital Terdepan",
                year: "2023",
                description: "Pemanfaatan teknologi untuk pelayanan publik",
                icon: Shield,
                color: "from-blue-400 to-blue-500",
              },
              {
                title: "Desa Wisata Unggulan",
                year: "2022",
                description: "Pengembangan potensi wisata berbasis masyarakat",
                icon: Heart,
                color: "from-pink-400 to-pink-500",
              },
              {
                title: "Desa Sehat Nasional",
                year: "2021",
                description: "Program kesehatan masyarakat terbaik",
                icon: Heart,
                color: "from-red-400 to-red-500",
              },
              {
                title: "Desa Inovatif",
                year: "2023",
                description: "Inovasi dalam pemberdayaan masyarakat",
                icon: TrendingUp,
                color: "from-purple-400 to-purple-500",
              },
            ].map((prestasi, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${prestasi.color} rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}
                  >
                    <prestasi.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-semibold">
                      {prestasi.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">{prestasi.title}</h3>
                  <p className="text-yellow-600 text-sm">{prestasi.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Mari Bersama Membangun Desa</h2>
            <p className="text-xl mb-6 text-yellow-100">
              Bergabunglah dengan kami dalam membangun masa depan yang lebih baik untuk Desa Maju Bersama
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/layanan">
                <Button className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Lihat Layanan Desa
                </Button>
              </Link>
              <Link href="/kontak">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
