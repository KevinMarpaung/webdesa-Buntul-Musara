"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Users,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Award,
  Building,
  Leaf,
  Heart,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Berita {
  id: string;
  judul: string;
  konten: string;
  tanggal: string;
  penulis: string;
}

interface Kegiatan {
  id: string;
  nama: string;
  deskripsi: string;
  tanggal: string;
  lokasi: string;
  status: string;
}

interface Penduduk {
  id: string;
  nama: string;
  nik: string;
  alamat: string;
  pekerjaan: string;
  umur: number;
}

export default function WebDesaPublic() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([]);
  const [penduduk, setPenduduk] = useState<Penduduk[]>([]);
  const [activeSection, setActiveSection] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedBerita = localStorage.getItem("desa-berita");
    const savedKegiatan = localStorage.getItem("desa-kegiatan");
    const savedPenduduk = localStorage.getItem("desa-penduduk");

    if (savedBerita) setBerita(JSON.parse(savedBerita));
    if (savedKegiatan) setKegiatan(JSON.parse(savedKegiatan));
    if (savedPenduduk) setPenduduk(JSON.parse(savedPenduduk));
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "beranda", label: "Beranda", icon: Home },
    { id: "profil", label: "Profil Desa", icon: Building },
    { id: "berita", label: "Berita", icon: FileText },
    { id: "kegiatan", label: "Kegiatan", icon: Calendar },
    { id: "layanan", label: "Layanan", icon: Shield },
    { id: "kontak", label: "Kontak", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-yellow-800">
                  Desa Maju Bersama
                </h1>
                <p className="text-xs text-yellow-600">Kabupaten Sejahtera</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? "bg-yellow-400 text-white shadow-md"
                      : "text-yellow-700 hover:bg-yellow-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-yellow-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-yellow-200 bg-white/95">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left text-yellow-700 hover:bg-yellow-100 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center py-20">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
                <Home className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-800 mb-6 animate-fade-in">
              Desa Maju Bersama
            </h1>
            <p className="text-xl md:text-2xl text-yellow-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Membangun masa depan yang cerah bersama masyarakat yang sejahtera,
              mandiri, dan berbudaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("profil")}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Jelajahi Desa
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection("layanan")}
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Layanan Desa
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">
                  {penduduk.length}
                </h3>
                <p className="text-yellow-600">Total Penduduk</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">
                  {berita.length}
                </h3>
                <p className="text-yellow-600">Berita Terbaru</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">
                  {kegiatan.length}
                </h3>
                <p className="text-yellow-600">Kegiatan Aktif</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">15</h3>
                <p className="text-yellow-600">Prestasi Desa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profil Desa */}
      <section id="profil" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Profil Desa
            </h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
              Mengenal lebih dekat Desa Maju Bersama dengan segala potensi dan
              keunggulannya
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  Visi Desa
                </h3>
                <p className="text-yellow-700 leading-relaxed">
                  Mewujudkan Desa Maju Bersama sebagai desa yang mandiri,
                  sejahtera, dan berbudaya dengan memanfaatkan potensi lokal
                  secara optimal.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">
                  Misi Desa
                </h3>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Meningkatkan kualitas sumber daya manusia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Mengembangkan ekonomi kreatif dan UMKM</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Melestarikan budaya dan lingkungan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Meningkatkan pelayanan publik</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-6">Informasi Desa</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span>Kecamatan Sejahtera, Kabupaten Makmur</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span>{penduduk.length} Jiwa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5" />
                    <span>5 Dusun, 12 RT, 8 RW</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-5 h-5" />
                    <span>Luas Wilayah: 15.5 km²</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-gradient-to-br from-green-100 to-green-200 border-green-300 hover:shadow-lg transition-shadow duration-300">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-800">Pertanian</h4>
                  <p className="text-sm text-green-600">Sektor Utama</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 hover:shadow-lg transition-shadow duration-300">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-blue-800">Kesehatan</h4>
                  <p className="text-sm text-blue-600">Prioritas Utama</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Section */}
      <section id="berita" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Berita & Pengumuman
            </h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
              Informasi terkini seputar kegiatan dan perkembangan desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {berita.slice(0, 6).map((article) => (
              <Card
                key={article.id}
                className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-amber-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-yellow-800 mb-2">
                      {article.tanggal}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {article.judul}
                  </h3>
                  <p className="text-yellow-600 mb-4 line-clamp-3">
                    {article.konten}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-yellow-500">
                      Oleh: {article.penulis}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 group-hover:border-yellow-500 transition-colors duration-300"
                    >
                      Baca Selengkapnya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {berita.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <p className="text-yellow-600 text-lg">
                Belum ada berita yang dipublikasi
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Kegiatan Section */}
      <section id="kegiatan" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Kegiatan Desa
            </h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
              Agenda dan kegiatan yang sedang berlangsung di desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kegiatan.slice(0, 4).map((activity) => (
              <Card
                key={activity.id}
                className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-yellow-200"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-yellow-800 mb-2">
                        {activity.nama}
                      </h3>
                      <Badge
                        className={`${
                          activity.status === "Direncanakan"
                            ? "bg-blue-100 text-blue-800"
                            : activity.status === "Berlangsung"
                            ? "bg-green-100 text-green-800"
                            : activity.status === "Selesai"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                    <Calendar className="w-8 h-8 text-yellow-500" />
                  </div>

                  <p className="text-yellow-600 mb-4">{activity.deskripsi}</p>

                  <div className="space-y-2 text-sm text-yellow-700">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>
                        {new Date(activity.tanggal).toLocaleDateString(
                          "id-ID",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.lokasi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {kegiatan.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <p className="text-yellow-600 text-lg">
                Belum ada kegiatan yang dijadwalkan
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Layanan Desa
            </h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
              Berbagai layanan yang tersedia untuk masyarakat desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Surat Keterangan",
                description: "Pengurusan berbagai surat keterangan resmi",
                icon: FileText,
                color: "from-blue-400 to-blue-500",
              },
              {
                title: "Pelayanan KTP",
                description: "Bantuan pengurusan KTP dan dokumen identitas",
                icon: Users,
                color: "from-green-400 to-green-500",
              },
              {
                title: "Surat Nikah",
                description: "Pengurusan surat-surat pernikahan",
                icon: Heart,
                color: "from-pink-400 to-pink-500",
              },
              {
                title: "Izin Usaha",
                description: "Bantuan pengurusan izin usaha mikro",
                icon: Building,
                color: "from-purple-400 to-purple-500",
              },
              {
                title: "Layanan Kesehatan",
                description: "Informasi dan layanan kesehatan masyarakat",
                icon: Shield,
                color: "from-red-400 to-red-500",
              },
              {
                title: "Konsultasi",
                description: "Konsultasi berbagai keperluan administrasi",
                icon: Phone,
                color: "from-orange-400 to-orange-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-yellow-600 mb-4">{service.description}</p>
                  <Button
                    size="sm"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white group-hover:scale-105 transition-transform duration-300"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section
        id="kontak"
        className="py-20 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Kami siap melayani dan membantu kebutuhan masyarakat desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Alamat</h3>
                <p className="text-yellow-600 text-sm">
                  Jl. Desa Maju No. 123
                  <br />
                  Kec. Sejahtera
                  <br />
                  Kab. Makmur 12345
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Telepon</h3>
                <p className="text-yellow-600 text-sm">
                  (021) 123-4567
                  <br />
                  0812-3456-7890
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Email</h3>
                <p className="text-yellow-600 text-sm">
                  info@desamajubersama.id
                  <br />
                  admin@desamajubersama.id
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Jam Layanan</h3>
                <p className="text-yellow-600 text-sm">
                  Senin - Jumat
                  <br />
                  08:00 - 16:00 WIB
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  Kantor Desa
                </h3>
                <p className="text-yellow-600 mb-6">
                  Kunjungi kantor desa untuk berbagai keperluan administrasi dan
                  pelayanan masyarakat
                </p>
                <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Lihat Lokasi di Maps
                  <MapPin className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
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
                Membangun desa yang mandiri, sejahtera, dan berbudaya untuk masa
                depan yang lebih baik.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-yellow-200">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-yellow-200 text-sm">
                <li>Surat Keterangan</li>
                <li>Pelayanan KTP</li>
                <li>Surat Nikah</li>
                <li>Izin Usaha</li>
                <li>Layanan Kesehatan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <div className="space-y-2 text-yellow-200 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jl. Desa Maju No. 123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(021) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@desamajubersama.id</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-700 mt-8 pt-8 text-center">
            <p className="text-yellow-200 text-sm">
              © 2024 Desa Maju Bersama. Semua hak dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
