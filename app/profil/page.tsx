"use client";

import Link from "next/link";
import {
  Users,
  Building,
  Leaf,
  Heart,
  Star,
  MapPin,
  ArrowLeft,
  Target,
  Eye,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const perangkatDesa = [
  {
    nama: "Jamaluddin",
    jabatan: "Pengulu Kampung",
    foto: "/ppkosong.jpg",
    icon: Building,
  },
  {
    nama: "Mantarudin",
    jabatan: "Sekretaris Kampung",
    foto: "/ppkosong.jpg",
    icon: Users,
  },
  {
    nama: "Sayang",
    jabatan: "Pegawai Kampung",
    foto: "/ppkosong.jpg",
    icon: Shield,
  },
  {
    nama: "Suwandi Yoga",
    jabatan: "Kaur Keuangan",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
  {
    nama: "Sali Syamsudin",
    jabatan: "Kaur Umum dan Perencanaan",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
  {
    nama: "Ali Asah",
    jabatan: "Kasi Pemerintahan",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
  {
    nama: "Marwansyah Putra",
    jabatan: "Kasi Kesejahteraan dan Pelayanan",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
  {
    nama: "Jalam",
    jabatan: "Kadus Kantor",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
  {
    nama: "Jafaruddin",
    jabatan: "Kadus Ume Paya",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
  {
    nama: "Kalim",
    jabatan: "Kadus Umah Paluh",
    foto: "/ppkosong.jpg",
    icon: Heart,
  },
];

const UrangTue = [
  {
    nama: "Saleh",
    jabatan: "Ketua Urang Tue",
    foto: "/ppkosong.jpg",
    icon: Building,
  },
  {
    nama: "Safira",
    jabatan: "Wakil Ketua",
    foto: "/ppkosong.jpg",
    icon: Users,
  },
  {
    nama: "Alimin",
    jabatan: "Sekretaris",
    foto: "/ppkosong.jpg",
    icon: Shield,
  },
  {
    nama: "Hasan Murni",
    jabatan: "Anggota",
    foto: "/ppkosong.jpg",
    icon: Shield,
  },
  {
    nama: "Husin",
    jabatan: "Anggota",
    foto: "/ppkosong.jpg",
    icon: Shield,
  },
];
export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-sky-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 via-sky-400 to-sky-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Profil Desa
              </h1>
              <p className="text-blue-100">Mengenal Desa Buntul Musara</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
              <Building className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            Desa Buntul Musara
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Sebuah Desa Yang Bertujuan Mewujudkan Masyarakat Buntul Musara Yang
            Bersih, Maju, Adil, Transparansi, Dan Sejahtera
          </p>
        </section>

        {/* Visi Misi */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-r from-sky-500 to-blue-500 border-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-white">Visi Desa</h2>
              </div>
              <p className="text-white leading-relaxed text-lg">
                manjadikan kampung Buntul Musara aman, bersih, berbudaya, dan
                Islami, serta pemerintahan kampung yang ramah, efektif, efesien,
                akuntabel, dan transparan.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-sky-500 to-blue-500 border-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-white">Misi Desa</h2>
              </div>
              <ul className="space-y-3 text-white  text-lg">
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Menciptakan Pemerintahan Kampung yang baik, Partisipatif dan
                    transparan.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Membangun sarana dan prasarana untuk meningkatkan
                    perekonomian masyarakat Kampung.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Mengembangkan pemberdayaan masyarakat dan kemitraan dalam
                    pelaksanaan pembangunan kampung
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Mengembangkan potensi pertanian dan peternakan dengan
                    pendekatan teknologi tepat guna/terapan.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Penerapan syariat melalui aneka pendekatan dan program yang
                    bernuansa Islami.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Dalam Konsep Perencanaan, penetapan tujuan dan sasaran
                    menjadi point paling utama guna memastikan hal-hal yang
                    perlu dilakukan dalam upaya pencapaian Visi dan Misi serta
                    menjawab aneka permasalahan di Kampung, dalam Konteks ini
                    rumusan tujuan dan sasaran merupakan dasar dalam menyusun
                    pilihan-pilihan strategis dalam pembangunan Kampung serta
                    menjadi sarana yang baik dalam mengevaluasi pilihan
                    tersebut.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Informasi Desa */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-biru-50 mb-4">
              Informasi Desa
            </h2>
            <p className="text-xl text-black">
              Data dan fakta tentang Desa Buntul Musara
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6">Data Geografis</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-white">
                      Desa Buntul Musara Tripe Jaya Kabupaten Gayo Lues
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Luas Wilayah</p>
                    <p className="text-white"></p>
                    <p>+ 38,8 km2</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Pembagian Wilayah</p>
                    <p className="text-white "> </p>
                    <div>
                      <p>-Dusun Umah Paluh</p>
                      <p>-Dusun Kantor</p>
                      <p>-Dusun Ume Paya</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Jumlah Penduduk</p>
                    <p className="text-white">780 Jiwa</p>
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
                    <h4 className="text-xl font-bold text-green-800">
                      Sektor Pertanian
                    </h4>
                    <p className="text-green-600">
                      Sektor Pertanian dengan hasil Nilam,Sereh
                      Wangi,Kemiri,Kakao,Tembakau
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-800">
                      Kesehatan Masyarakat
                    </h4>
                    <p className="text-blue-600">
                      Prioritas utama dengan fasilitas Puskesmas dan Posyandu
                    </p>
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
              <h2 className="text-4xl font-bold text-blue-800 mb-4">
                Sejarah Singkat
              </h2>
              <p className="text-xl text-blue-400">
                Perjalanan Desa Buntul Musara
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text black leading-relaxed text-lg text-justify mb-6">
                Desa Buntul Musara merupakan pemekaran dari desa Rerebe
                Kecamatan Tripe Jaya Kabupaten Gayo Lues. Kecamatan Tripe Jaya
                sendiri juga merupakan pemekaran dari kecamatan Terangun, yang
                pada saat itu Desa yang ada di kecamatan Tripe Jaya ini hanya
                berjumlah 5 desa saja, oleh karna itu untuk mencukupi jumlah
                desa pada satu kecamatan maka di mekarkan pula 5 desa lagi yang
                termasuk didalamnya desa Buntul Musara yang di mekarkan pada
                bulan maret tahun 2004 yang pada saat itu masi sebagai desa
                persiapan dan bahkan belum definitif. Yang Dimana geuchik
                sementara pada saat itu adalah bapak Mantarudin.
              </p>
              <p className="text-black leading-relaxed text-justify text-lg mb-6">
                Desa/kampung Buntul Musara definitif pada tanggal 21 Desember
                2007 yang merupakan awal dari kampung yang sah yang berdiri
                sendiri dan memiliki geuchik defenitif atas nama Derajat.
                Kampung ini dinamai Buntul Musara karena kampung ini berada di
                daerah perbukitan dan Masyarakat yang mendiami kampung ini
                banyak merupakan Masyarakat suku bangsa (campuran). Didalam
                Bahasa setempat (Bahasa Gayo) ‘’Bukit’’ bisa disebut Buntul
                sedangkan Musara sendiri berarti ‘’Bersatu’’ karna itu, desa
                Buntul Musara berarti ‘’ Bukit Yang Bersatu’’.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="p-8 bg-white shadow-xl border-yellow-200">
            <div className="max-w-4xl mx-auto">
              <section className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-blue-800 mb-4">
                    Perangkat Desa
                  </h2>
                  <p className="text-xl text-black max-w-2xl mx-auto">
                    Tim perangkat desa yang siap melayani masyarakat dengan
                    dedikasi tinggi
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {perangkatDesa.map((person, index) => (
                    <Card
                      key={index}
                      className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-blue-200 text-center group"
                    >
                      <CardContent className="p-1">
                        <div className="relative mb-4">
                          <img
                            src={person.foto}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300"
                            crossOrigin="anonymous"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <person.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {person.nama}
                        </h3>
                        <p className="text-black font-medium mb-3">
                          {person.jabatan}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="p-8 bg-white shadow-xl border-yellow-200">
            <div className="max-w-4xl mx-auto">
              <section className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-blue-800 mb-4">
                    Nama Urang Tue
                  </h2>
                  <p className="text-xl text-black max-w-2xl mx-auto"></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {UrangTue.map((person, index) => (
                    <Card
                      key={index}
                      className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-blue-200 text-center group"
                    >
                      <CardContent className="p-1">
                        <div className="relative mb-4">
                          <img
                            src={person.foto}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300"
                            crossOrigin="anonymous"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <person.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {person.nama}
                        </h3>
                        <p className="text-black font-medium mb-3">
                          {person.jabatan}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </Card>
        </section>
        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-br from-sky-400 to-sky-500 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Mari Bersama Membangun Desa
            </h2>
            <p className="text-xl mb-6 text-blue-50">
              Bergabunglah dengan kami dalam membangun masa depan yang lebih
              baik untuk Desa Buntul Musara
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/layanan">
                <Button className="bg-blue-800 text-white 600 hover:bg-yellow-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Lihat Layanan Desa
                </Button>
              </Link>
              <Link href="/kontak">
                <Button
                  variant="outline"
                  className="bg-blue-800 text-white 600 hover:bg-yellow-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
