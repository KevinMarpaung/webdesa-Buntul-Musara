"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Building,
  Leaf,
  Heart,
  Star,
  CircleUserRound,
  MapPin,
  ArrowLeft,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Penduduk {
  id: string;
  nama: string;
  nik: string;
  alamat: string;
  pekerjaan: string;
  umur: number;
}

export default function ProfilPage() {
  const [penduduk, setPenduduk] = useState<Penduduk[]>([]);

  useEffect(() => {
    const savedPenduduk = localStorage.getItem("desa-penduduk");
    if (savedPenduduk) setPenduduk(JSON.parse(savedPenduduk));
  }, []);

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
                Profil Desa
              </h1>
              <p className="text-yellow-100">Mengenal Kampung Kuning</p>
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
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-6">
            Kampung Kuning
          </h1>
          <p className="text-xl text-yellow-600 max-w-3xl mx-auto leading-relaxed">
            Sebuah Desa Yang Bertujuan Mewujudkan Masyarakat Kampung Kuning Yang
            Bersih, Maju, Adil, Transparansi, Dan Sejahtera
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
                <h2 className="text-3xl font-bold text-yellow-800">
                  Visi Desa
                </h2>
              </div>
              <p className="text-yellow-700 leading-relaxed text-lg">
                Mewujudkan Kampung Kuning sebagai desa yang bersih, maju, adil,
                transparan, dan sejahtera melalui partisipasi aktif masyarakat,
                tata kelola pemerintahan yang baik, serta pembangunan yang
                berkelanjutan dan berkeadilan.
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
                  <span>
                    Meningkatkan kualitas sumber daya manusia dalam pembangunan
                    kampung yang berkelanjutan
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Menciptakan tranparansi anggran kampung dan mengutamakan
                    masyarakat dan mewujudkan sumber daya aparatur kampung yang
                    profesional dinamis dan bermoral
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
                    Mewujudkan pendidikan yang unggul bagi masyarakat kampung
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Informasi Desa */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Informasi Desa
            </h2>
            <p className="text-xl text-yellow-600">
              Data dan fakta tentang Kampung Kuning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6">Data Geografis</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-yellow-100">
                      Kampung Kuning Kecamatan Rikit Gaib Kabupaten Gayo Lues
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Luas Wilayah</p>
                    <p className="text-yellow-100">-</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Pembagian Wilayah</p>
                    <p className="text-yellow-100 ">
                      <div>
                        <p>-Dusun Ulung Kuning</p>
                        <p>-Dusun Nunang</p>
                        <p>-Dusun Durin</p>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Jumlah Penduduk</p>
                    <p className="text-yellow-100">307 Jiwa</p>
                    <p className=" text-yellow-50">-Laki-Laki: 148 Jiwa</p>
                    <p className=" text-yellow-50">-Perempuan: 159 Jiwa</p>
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
                      Sektor Pertanian dengan hasil padi, jagung, dan kacang
                      tanah,kopi
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
              <h2 className="text-4xl font-bold text-yellow-800 mb-4">
                Sejarah Singkat
              </h2>
              <p className="text-xl text-yellow-600">
                Perjalanan Kampung Kuning
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-yellow-700 leading-relaxed text-lg mb-6">
                pada tahun 1920 lahirlah kampung yang dipinmpin oleh Dahok yang
                berasal dari daerah Linge, maka dengan dasar lahan kuning tadi
                di buatlah nama daerah tadi menjadi kampung kuning
              </p>
              <p className="text-yellow-700 leading-relaxed text-lg mb-6">
                Dimana menurut sejarah pindahnya tempat tinggal masyarakat
                kampung kuning dari ladang kunyit tadi, karena wilayah kuning
                berlawan arah dengan terbitnya mata hari, sehingga ada anggapan
                akan mendatangkan kesialan bagi masyarakat, dan tidak
                mendatangkan rezeki, sehingga masyarakat yang masih berdomisili
                di ladang kunyit tadi tidak akan bisa menunaikan ibadah haji,
                sehingga tahun 1980 bermufakatlah para petuah-petuah kampung
                untuk memindahkan tempat tinggal masyarakat ke seberang aih kul,
                dan ini terealisasi pada tahun 1982 dengan tanah pemukiman
                penduduk yang disediakan oleh PEMDA
              </p>
            </div>
          </Card>
        </section>

        {/* Prestasi */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Daftar Kepemimpinan Pengulu
            </h2>
            <p className="text-xl text-yellow-600">Kampung Kuning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 ">
            {[
              {
                title: "Unus Aman Milah",
                year: "1919-1929",
                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Lanyut Tgk.Pisah",
                year: "1930-1934",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Adu Am.Mat Saleh",
                year: "1935-1939",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Hanya Aman Mamat",
                year: "1940-1948",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "jamad Aman Samdiah",
                year: "1949-1959",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Amin Aman Mar",
                year: "1960-1963",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Adimen aman Bantah",
                year: "1964-1966",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "kasim amn Nurmani",
                year: "1967-1981",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Nyak Raya Aman kasim",
                year: "1982-1990",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Abdullah Aman Jumi",
                year: "1991-1995",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Kasim Junaidi",
                year: "1996-1997",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Alimin Aman Adi",
                year: "1998-2000",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "MY. Samira Masa Amanudin",
                year: "2001-2007",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Usmar",
                year: "2007-2013",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Pj.Abdul Karim",
                year: "2014-2015",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "rahmat Ali",
                year: "2015-2021",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Pj. Hasbullah",
                year: "2021",

                icon: CircleUserRound,
                color: "bg-black",
              },
              {
                title: "Rajudin",
                year: "2022-2027",

                icon: CircleUserRound,
                color: "bg-black",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className=" text-center items-center bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-full flex   items-center justify-center mb-2`}
                >
                  <item.icon className="w-6 h-6 text-white items-center text-center" />
                </div>
                <h4 className="font-bold text-yellow-800">{item.title}</h4>
                <p className="text-yellow-600">{item.year}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Mari Bersama Membangun Desa
            </h2>
            <p className="text-xl mb-6 text-yellow-100">
              Bergabunglah dengan kami dalam membangun masa depan yang lebih
              baik untuk Kampung Kuning
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
  );
}
