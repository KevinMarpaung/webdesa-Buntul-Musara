"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  Users,
  Shield,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Pesan Anda telah terkirim! Kami akan segera merespons.")
    setFormData({ nama: "", email: "", telepon: "", subjek: "", pesan: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const kontakInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "(021) 123-4567",
      detail: "0812-3456-7890",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@desamajubersama.id",
      detail: "admin@desamajubersama.id",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Desa Maju No. 123",
      detail: "Kec. Sejahtera, Kab. Makmur 12345",
      color: "from-red-400 to-red-500",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "Senin - Jumat: 08:00 - 16:00",
      detail: "Sabtu: 08:00 - 12:00",
      color: "from-purple-400 to-purple-500",
    },
  ]

  const perangkatDesa = [
    {
      nama: "Budi Santoso",
      jabatan: "Kepala Desa",
      telepon: "0812-1111-1111",
      email: "kepaladesa@desamajubersama.id",
      foto: "/placeholder.svg?height=150&width=150&text=Kepala+Desa",
      icon: Building,
    },
    {
      nama: "Siti Rahayu",
      jabatan: "Sekretaris Desa",
      telepon: "0812-2222-2222",
      email: "sekdes@desamajubersama.id",
      foto: "/placeholder.svg?height=150&width=150&text=Sekretaris",
      icon: Users,
    },
    {
      nama: "Ahmad Wijaya",
      jabatan: "Kaur Pemerintahan",
      telepon: "0812-3333-3333",
      email: "pemerintahan@desamajubersama.id",
      foto: "/placeholder.svg?height=150&width=150&text=Kaur+Pemerintahan",
      icon: Shield,
    },
    {
      nama: "Dewi Lestari",
      jabatan: "Kaur Kesejahteraan",
      telepon: "0812-4444-4444",
      email: "kesejahteraan@desamajubersama.id",
      foto: "/placeholder.svg?height=150&width=150&text=Kaur+Kesejahteraan",
      icon: Heart,
    },
  ]

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
              <h1 className="text-2xl font-bold text-white drop-shadow-md">Hubungi Kami</h1>
              <p className="text-yellow-100">Kontak dan informasi Desa Maju Bersama</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
              <Phone className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-6">Hubungi Kami</h1>
          <p className="text-xl text-yellow-600 max-w-3xl mx-auto leading-relaxed">
            Kami siap melayani dan membantu kebutuhan masyarakat Desa Maju Bersama dengan sepenuh hati
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kontakInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 text-center group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">{item.title}</h3>
                  <p className="text-yellow-600 font-medium mb-1">{item.info}</p>
                  <p className="text-yellow-500 text-sm">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nama" className="text-yellow-800">
                        Nama Lengkap
                      </Label>
                      <Input
                        id="nama"
                        name="nama"
                        type="text"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="border-yellow-300 focus:border-yellow-500"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telepon" className="text-yellow-800">
                        Nomor Telepon
                      </Label>
                      <Input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        value={formData.telepon}
                        onChange={handleChange}
                        className="border-yellow-300 focus:border-yellow-500"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-yellow-800">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-yellow-300 focus:border-yellow-500"
                      placeholder="Masukkan alamat email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subjek" className="text-yellow-800">
                      Subjek
                    </Label>
                    <Input
                      id="subjek"
                      name="subjek"
                      type="text"
                      value={formData.subjek}
                      onChange={handleChange}
                      required
                      className="border-yellow-300 focus:border-yellow-500"
                      placeholder="Masukkan subjek pesan"
                    />
                  </div>

                  <div>
                    <Label htmlFor="pesan" className="text-yellow-800">
                      Pesan
                    </Label>
                    <Textarea
                      id="pesan"
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-yellow-300 focus:border-yellow-500"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-white shadow-xl border-yellow-200 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <MapPin className="w-6 h-6 mr-2" />
                  Lokasi Kantor Desa
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 relative">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Peta+Lokasi+Desa+Maju+Bersama"
                    alt="Peta Lokasi Desa"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-bold text-yellow-800 mb-2">Kantor Desa Maju Bersama</h3>
                    <p className="text-yellow-600 text-sm mb-2">
                      Jl. Desa Maju No. 123, Kec. Sejahtera, Kab. Makmur 12345
                    </p>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      Buka di Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Village Officials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Perangkat Desa</h2>
            <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
              Tim perangkat desa yang siap melayani masyarakat dengan dedikasi tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perangkatDesa.map((person, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 text-center group"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={person.foto || "/placeholder.svg"}
                      alt={person.nama}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-200 group-hover:border-yellow-400 transition-colors duration-300"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <person.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-1 group-hover:text-yellow-600 transition-colors duration-300">
                    {person.nama}
                  </h3>
                  <p className="text-yellow-600 font-medium mb-3">{person.jabatan}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-yellow-700">
                      <Phone className="w-4 h-4" />
                      <span>{person.telepon}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-yellow-700">
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">{person.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <Card className="bg-red-50 border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <Phone className="w-6 h-6 mr-2" />
                Kontak Darurat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-red-800 mb-1">Polisi</h3>
                  <p className="text-red-600">110</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-red-800 mb-1">Ambulans</h3>
                  <p className="text-red-600">118</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-red-800 mb-1">Pemadam Kebakaran</h3>
                  <p className="text-red-600">113</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Kunjungi Kantor Desa</h2>
              <p className="text-xl mb-6 text-yellow-100">
                Datang langsung ke kantor desa untuk pelayanan yang lebih personal dan cepat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  Lihat Lokasi
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Jam Operasional
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
