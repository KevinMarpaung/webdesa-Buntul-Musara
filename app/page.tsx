"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Home,
  Users,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Award,
  Building,
  Shield,
  Menu,
  X,
  ArrowRight,
  Eye,
  Camera,
  Settings,
  Sparkles,
  TreePine,
  Mountain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Berita {
  id: string
  judul: string
  konten: string
  tanggal: string
  penulis: string
}

interface Kegiatan {
  id: string
  nama: string
  deskripsi: string
  tanggal: string
  lokasi: string
  status: string
}

interface Penduduk {
  id: string
  nama: string
  nik: string
  alamat: string
  pekerjaan: string
  umur: number
}

export default function HomePage() {
  const [berita, setBerita] = useState<Berita[]>([])
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([])
  const [penduduk, setPenduduk] = useState<Penduduk[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hero images carousel
  const heroImages = [
    "/placeholder.svg?height=600&width=1200&text=Pemandangan+Desa+Maju+Bersama",
    "/placeholder.svg?height=600&width=1200&text=Sawah+Hijau+Desa",
    "/placeholder.svg?height=600&width=1200&text=Kegiatan+Gotong+Royong",
    "/placeholder.svg?height=600&width=1200&text=Balai+Desa+Modern",
  ]

  // Load data from localStorage
  useEffect(() => {
    const savedBerita = localStorage.getItem("desa-berita")
    const savedKegiatan = localStorage.getItem("desa-kegiatan")
    const savedPenduduk = localStorage.getItem("desa-penduduk")

    if (savedBerita) setBerita(JSON.parse(savedBerita))
    if (savedKegiatan) setKegiatan(JSON.parse(savedKegiatan))
    if (savedPenduduk) setPenduduk(JSON.parse(savedPenduduk))
  }, [])

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const navItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/profil", label: "Profil", icon: Building },
    { href: "/berita", label: "Berita", icon: FileText },
    { href: "/kegiatan", label: "Kegiatan", icon: Calendar },
    { href: "/layanan", label: "Layanan", icon: Shield },
    { href: "/galeri", label: "Galeri", icon: Camera },
    { href: "/kontak", label: "Kontak", icon: Phone },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-yellow-800">Desa Maju Bersama</h1>
                <p className="text-xs text-yellow-600">Kabupaten Sejahtera</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800 hover:scale-105"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
              <Link
                href="/admin"
                className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">Admin</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-yellow-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-yellow-200 bg-white/95 animate-slide-down">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-yellow-700 hover:bg-yellow-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                href="/admin"
                className="w-full flex items-center space-x-3 px-4 py-3 text-left bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="w-5 h-5" />
                <span>Admin Panel</span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Image Carousel */}
      <section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-30" : "opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 via-amber-400/30 to-orange-400/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center py-20">
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 animate-float">
              <Sparkles className="w-8 h-8 text-yellow-400 opacity-70" />
            </div>
            <div className="absolute top-20 right-20 animate-float-delayed">
              <TreePine className="w-6 h-6 text-green-500 opacity-60" />
            </div>
            <div className="absolute bottom-20 left-20 animate-bounce-slow">
              <Mountain className="w-10 h-10 text-amber-500 opacity-50" />
            </div>

            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500 animate-pulse-slow">
                <Home className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-800 mb-6 animate-fade-in-up">
              Selamat Datang di
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent animate-shimmer">
                Desa Maju Bersama
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              Membangun masa depan yang cerah bersama masyarakat yang sejahtera, mandiri, dan berbudaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed-2">
              <Link href="/profil">
                <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle">
                  Jelajahi Desa
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/layanan">
                <Button
                  variant="outline"
                  className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Layanan Desa
                </Button>
              </Link>
            </div>

            {/* Image Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Stats with Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 group overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-blue-400 to-blue-500 relative">
                <img
                  src="/placeholder.svg?height=80&width=300&text=Warga+Desa"
                  alt="Penduduk"
                  className="w-full h-full object-cover opacity-50"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-blue-500/70"></div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 -mt-10 relative z-10 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800 animate-count-up">{penduduk.length}</h3>
                <p className="text-yellow-600">Total Penduduk</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 group overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-green-400 to-green-500 relative">
                <img
                  src="/placeholder.svg?height=80&width=300&text=Berita+Desa"
                  alt="Berita"
                  className="w-full h-full object-cover opacity-50"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-green-500/70"></div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 -mt-10 relative z-10 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800 animate-count-up">{berita.length}</h3>
                <p className="text-yellow-600">Berita Terbaru</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 group overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-purple-400 to-purple-500 relative">
                <img
                  src="/placeholder.svg?height=80&width=300&text=Kegiatan+Desa"
                  alt="Kegiatan"
                  className="w-full h-full object-cover opacity-50"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-purple-500/70"></div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 -mt-10 relative z-10 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800 animate-count-up">{kegiatan.length}</h3>
                <p className="text-yellow-600">Kegiatan Aktif</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 group overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-orange-400 to-orange-500 relative">
                <img
                  src="/placeholder.svg?height=80&width=300&text=Prestasi+Desa"
                  alt="Prestasi"
                  className="w-full h-full object-cover opacity-50"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-orange-500/70"></div>
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 -mt-10 relative z-10 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">15</h3>
                <p className="text-yellow-600">Prestasi Desa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section with Images */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4 animate-fade-in">Akses Cepat</h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto animate-fade-in-delayed">
              Temukan informasi dan layanan yang Anda butuhkan dengan mudah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/profil" className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Profil+Desa+Maju+Bersama"
                    alt="Profil Desa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    Profil Desa
                  </h3>
                  <p className="text-yellow-600 mb-4">Pelajari sejarah, visi, misi, dan potensi Desa Maju Bersama</p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/berita" className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Berita+dan+Informasi+Desa"
                    alt="Berita Desa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    Berita & Info
                  </h3>
                  <p className="text-yellow-600 mb-4">
                    Dapatkan informasi terkini seputar kegiatan dan perkembangan desa
                  </p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Baca Berita</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/layanan" className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Layanan+Administrasi+Desa"
                    alt="Layanan Desa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    Layanan Desa
                  </h3>
                  <p className="text-yellow-600 mb-4">Akses berbagai layanan administrasi dan pelayanan masyarakat</p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Lihat Layanan</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/kegiatan" className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Kegiatan+dan+Acara+Desa"
                    alt="Kegiatan Desa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    Kegiatan Desa
                  </h3>
                  <p className="text-yellow-600 mb-4">Ikuti agenda dan kegiatan yang sedang berlangsung di desa</p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Lihat Agenda</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/galeri" className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Galeri+Foto+Desa"
                    alt="Galeri Desa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Camera className="w-6 h-6 text-pink-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    Galeri Foto
                  </h3>
                  <p className="text-yellow-600 mb-4">Lihat dokumentasi kegiatan dan keindahan Desa Maju Bersama</p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Lihat Galeri</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/kontak" className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=400&text=Kontak+Kantor+Desa"
                    alt="Kontak Desa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    Hubungi Kami
                  </h3>
                  <p className="text-yellow-600 mb-4">Kontak langsung dengan perangkat desa untuk berbagai keperluan</p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Kontak</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview with Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-yellow-800 mb-4">Berita Terbaru</h2>
              <p className="text-xl text-yellow-600">Informasi terkini dari Desa Maju Bersama</p>
            </div>
            <Link href="/berita">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Lihat Semua
                <Eye className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berita.slice(0, 3).map((article, index) => (
              <Link key={article.id} href={`/berita/${article.id}`} className="group">
                <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden h-full">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=Berita+${index + 1}+${article.judul.substring(0, 20)}`}
                      alt={article.judul}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-yellow-800">{article.tanggal}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {article.judul}
                    </h3>
                    <p className="text-yellow-600 mb-4 line-clamp-3">{article.konten}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-yellow-500">Oleh: {article.penulis}</span>
                      <div className="flex items-center text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">
                        <span className="text-sm font-medium">Baca</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {berita.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <p className="text-yellow-600 text-lg">Belum ada berita yang dipublikasi</p>
            </div>
          )}
        </div>
      </section>

      {/* Village Highlights */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Keunggulan Desa</h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
              Berbagai keunggulan dan potensi yang dimiliki Desa Maju Bersama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pertanian Organik",
                description: "Hasil pertanian berkualitas tinggi",
                image: "/placeholder.svg?height=150&width=300&text=Pertanian+Organik",
                icon: "🌾",
              },
              {
                title: "Wisata Alam",
                description: "Pemandangan alam yang menawan",
                image: "/placeholder.svg?height=150&width=300&text=Wisata+Alam",
                icon: "🏞️",
              },
              {
                title: "Budaya Lokal",
                description: "Tradisi dan budaya yang terjaga",
                image: "/placeholder.svg?height=150&width=300&text=Budaya+Lokal",
                icon: "🎭",
              },
              {
                title: "UMKM Kreatif",
                description: "Usaha mikro yang berkembang pesat",
                image: "/placeholder.svg?height=150&width=300&text=UMKM+Kreatif",
                icon: "🏪",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden group"
              >
                <div className="h-32 relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-2 right-2 text-2xl">{item.icon}</div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-yellow-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-yellow-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-800 via-amber-800 to-orange-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Home className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Desa Maju Bersama</h3>
                  <p className="text-yellow-200 text-sm">Kabupaten Sejahtera</p>
                </div>
              </div>
              <p className="text-yellow-200 text-sm leading-relaxed">
                Membangun desa yang mandiri, sejahtera, dan berbudaya untuk masa depan yang lebih baik.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-yellow-200">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2 hover:translate-x-1"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-yellow-200 text-sm">
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Surat Keterangan</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Pelayanan KTP</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Surat Nikah</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Izin Usaha</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Layanan Kesehatan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <div className="space-y-2 text-yellow-200 text-sm">
                <div className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                  <MapPin className="w-4 h-4" />
                  <span>Jl. Desa Maju No. 123</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span>(021) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span>info@desamajubersama.id</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-700 mt-8 pt-8 text-center">
            <p className="text-yellow-200 text-sm">© 2024 Desa Maju Bersama. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
