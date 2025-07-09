"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Users,
  Heart,
  Shield,
  Phone,
  Clock,
  CheckCircle,
  Download,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LayananPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const layananKategori = [
    {
      id: "administrasi",
      title: "Administrasi",
      icon: FileText,
      color: "from-blue-400 to-blue-500",
      services: [
        {
          name: "Surat Keterangan Domisili",
          description:
            "Surat keterangan tempat tinggal untuk berbagai keperluan",
          requirements: ["KTP Asli", "KK Asli", "Surat Pengantar RT/RW"],
          duration: "1-2 hari kerja",
          cost: "Gratis",
          image: "/admitrasi.jpg",
        },
        {
          name: "Surat Keterangan Usaha",
          description: "Surat keterangan untuk keperluan usaha dan bisnis",
          requirements: [
            "KTP Asli",
            "KK Asli",
            "Foto Usaha",
            "Surat Pengantar RT/RW",
          ],
          duration: "2-3 hari kerja",
          cost: "Gratis",
          image: "admintrasiusaha.jpg",
        },
        {
          name: "Surat Keterangan Tidak Mampu",
          description: "Surat keterangan untuk bantuan sosial dan beasiswa",
          requirements: [
            "KTP Asli",
            "KK Asli",
            "Surat Pengantar RT/RW",
            "Foto Rumah",
          ],
          duration: "1-2 hari kerja",
          cost: "Gratis",
          image: "admintrasi-tidak-mampu.jpg",
        },
      ],
    },
    {
      id: "kependudukan",
      title: "Kependudukan",
      icon: Users,
      color: "from-blue-400 to-blue-500",
      services: [
        {
          name: "Bantuan Pengurusan KTP",
          description: "Bantuan dan pendampingan pengurusan KTP elektronik",
          requirements: [
            "Surat Pengantar Desa",
            "Foto 3x4 (2 lembar)",
            "KK Asli",
          ],
          duration: "Sesuai jadwal Disdukcapil",
          cost: "Gratis",
          image: "ktp.png",
        },
        {
          name: "Bantuan Pengurusan KK",
          description: "Bantuan pengurusan Kartu Keluarga baru atau perubahan",
          requirements: [
            "Surat Pengantar Desa",
            "Dokumen pendukung",
            "KTP Kepala Keluarga",
          ],
          duration: "Sesuai jadwal Disdukcapil",
          cost: "Gratis",
          image: "/kk2.png",
        },
        {
          name: "Surat Pindah Domisili",
          description: "Surat keterangan pindah untuk keperluan mutasi",
          requirements: [
            "KTP Asli",
            "KK Asli",
            "Surat Pengantar RT/RW",
            "Alasan Pindah",
          ],
          duration: "1-2 hari kerja",
          cost: "Gratis",
          image: "SKPWNI.PNG",
        },
      ],
    },
    {
      id: "kesehatan",
      title: "Kesehatan",
      icon: Heart,
      color: "from-red-400 to-red-500",
      services: [
        {
          name: "Posyandu Balita",
          description: "Pelayanan kesehatan ibu dan anak setiap bulan",
          requirements: ["Buku KIA", "KMS Balita"],
          duration: "Setiap Rabu minggu ke-2",
          cost: "Gratis",
          image: "posyandubayi.png",
        },
        {
          name: "Posyandu Lansia",
          description: "Pemeriksaan kesehatan untuk lansia",
          requirements: ["KTP", "Buku kesehatan lansia"],
          duration: "Setiap Jumat minggu ke-3",
          cost: "Gratis",
          image: "lansia.png",
        },
        {
          name: "Rujukan Puskesmas",
          description: "Surat rujukan untuk berobat ke Puskesmas",
          requirements: ["KTP", "KK", "Keluhan kesehatan"],
          duration: "Langsung",
          cost: "Gratis",
          image: "rujukan.jpg",
        },
      ],
    },
  ];

  const jamLayanan = [
    { hari: "Senin - Kamis", jam: "08:00 - 15:00 WIB" },
    { hari: "Jumat", jam: "08:00 - 11:00 WIB" },
    { hari: "Sabtu - Minggu", jam: "Tutup" },
  ];

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
                Layanan Desa
              </h1>
              <p className="text-blue-100">
                Pelayanan terbaik untuk masyarakat Buntul Musara
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
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            Layanan Desa
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan pelayanan terbaik untuk memenuhi
            kebutuhan administrasi dan pelayanan publik masyarakat Desa Buntul Musara
          </p>
        </section>

        {/* Service Hours */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-400 to-sky-500 text-white shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Jam Pelayanan</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jamLayanan.map((jadwal, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <h3 className="font-bold mb-2">{jadwal.hari}</h3>
                    <p className="text-yellow-100">{jadwal.jam}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services by Category */}
        <section>
          <Tabs defaultValue="administrasi" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-3 bg-white shadow-md border border-blue-200 mb-8">
              {layananKategori.map((kategori) => (
                <TabsTrigger
                  key={kategori.id}
                  value={kategori.id}
                  className="data-[state=active]:bg whitedata-[state=active]:text-white transition-all duration-300 hover:bg-blue-100"
                >
                  <kategori.icon className="w-4 h-4 mr-2" />
                  {kategori.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {layananKategori.map((kategori) => (
              <TabsContent key={kategori.id} value={kategori.id}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Layanan {kategori.title}
                  </h2>
                  <p className="text-xl text-black mb-8">
                    Berbagai layanan {kategori.title.toLowerCase()} yang
                    tersedia untuk masyarakat
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {kategori.services.map((service, index) => (
                    <Card
                      key={index}
                      className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden group cursor-pointer"
                      onClick={() =>
                        setSelectedService(
                          selectedService === `${kategori.id}-${index}`
                            ? null
                            : `${kategori.id}-${index}`
                        )
                      }
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          crossOrigin="anonymous"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            {service.cost}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${kategori.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <kategori.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-black mb-4">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-sm text-blue-700">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span>{service.cost}</span>
                          </div>
                        </div>

                        {selectedService === `${kategori.id}-${index}` && (
                          <div className="mt-6 pt-6 border-t border-yellow-200 animate-fade-in">
                            <h4 className="font-bold text-yellow-800 mb-3">
                              Persyaratan:
                            </h4>
                            <ul className="space-y-2">
                              {service.requirements.map((req, reqIndex) => (
                                <li
                                  key={reqIndex}
                                  className="flex items-start space-x-2 text-sm text-yellow-700"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex gap-2">
                              <Button
                                size="sm"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                              >
                                <Download className="w-4 h-4 mr-1" />
                                Download Form
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                              >
                                <Phone className="w-4 h-4 mr-1" />
                                Konsultasi
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Important Information */}
        <section className="mt-16">
          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-black">
                <AlertCircle className="w-6 h-6 mr-2" />
                Informasi Penting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                <div>
                  <h3 className="font-bold mb-2">Syarat Umum:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Warga Desa Buntul Musara</li>
                    <li>• Membawa dokumen asli dan fotokopi</li>
                    <li>• Mengisi formulir dengan lengkap</li>
                    <li>• Datang sesuai jam pelayanan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Catatan:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Pelayanan gratis untuk semua warga</li>
                    <li>• Proses sesuai antrian</li>
                    <li>• Bawa materai jika diperlukan</li>
                    <li>• Hubungi kantor desa untuk info lebih lanjut</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Services */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-400 to-sky-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Butuh Bantuan?</h2>
              <p className="text-xl mb-6 text-yellow-100">
                Tim pelayanan kami siap membantu Anda dengan sepenuh hati
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontak">
                  <Button className="bg-white text-blue-600 hover:bg-yellow-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-blue text-blue hover:bg-blue hover:text-blue-600  text-blue-700 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Panduan
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
