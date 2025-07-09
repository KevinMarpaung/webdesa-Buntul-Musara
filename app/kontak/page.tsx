"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Pesan Anda telah terkirim! Kami akan segera merespons.");
    setFormData({ nama: "", email: "", telepon: "", subjek: "", pesan: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const kontakInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "0822-7550-4940",
      detail: "0822-1459-7289",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      info: "buntulmusara@gmail.com",
      detail: "buntulmusara44@gmail.com",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Desa Buntul Musara",
      detail: "Kec. Tripe Jaya, Kab. Gayo Lues",
      color: "from-red-400 to-red-500",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "Senin - Jumat: 08:00 - 16:00",
      detail: "Sabtu: 08:00 - 12:00",
      color: "from-purple-400 to-purple-500",
    },
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
              <ArrowLeft className="w-6 h-6 text-black" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Hubungi Kami
              </h1>
              <p className="text-white">
                Kontak dan informasi Desa Buntul Musara
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
              <Phone className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Kami siap melayani dan membantu kebutuhan masyarakat Desa Maju
            Bersama dengan sepenuh hati
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kontakInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-blue-200 text-center group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                  <p className="text-black text-sm">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nama" className="text-blue-800">
                        Nama Lengkap
                      </Label>
                      <Input
                        id="nama"
                        name="nama"
                        type="text"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="border-blue-300 focus:border-blue-500"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telepon" className="text-blue-800">
                        Nomor Telepon
                      </Label>
                      <Input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        value={formData.telepon}
                        onChange={handleChange}
                        className="border-blue-300 focus:border-blue-500"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-blue-800">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-blue-300 focus:border-yblue-500"
                      placeholder="Masukkan alamat email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subjek" className="text-blue-800">
                      Subjek
                    </Label>
                    <Input
                      id="subjek"
                      name="subjek"
                      type="text"
                      value={formData.subjek}
                      onChange={handleChange}
                      required
                      className="border-blue-300 focus:border-blue-500"
                      placeholder="Masukkan subjek pesan"
                    />
                  </div>

                  <div>
                    <Label htmlFor="pesan" className="text-blue-800">
                      Pesan
                    </Label>
                    <Textarea
                      id="pesan"
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-blue-300 focus:border-blue-500"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                <CardTitle className="flex items-center text-blue-800">
                  <MapPin className="w-6 h-6 mr-2" />
                  Lokasi Kantor Desa Buntul Musara
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 relative">
                  <div className="w-full h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93843.11003376116!2d96.97080766840378!3d4.178459675841974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3039085ef6337929%3A0xbe4739d3ca3d72cc!2sBuntul%20Musara%2C%20Kec.%20Tripe%20Jaya%2C%20Kabupaten%20Gayo%20Lues%2C%20Aceh!5e1!3m2!1sid!2sid!4v1752064551316!5m2!1sid!2sid"
                      width="600"
                      height="450"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-bold text-blue-800 mb-2">
                      Kantor Desa Buntul Musara
                    </h3>
                    <p className="text-black text-sm mb-2">
                      Desa Buntul Musara, Kec.Tripe Jaya, Kab. Gayo Lues
                    </p>
                    <Button
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=Kampung+Kuning,+Rikit+Gaib,+Gayo+Lues",
                          "_blank"
                        )
                      }
                    >
                      Buka di Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-red-800">
                <Phone className="w-6 h-6 mr-2" />
                Kontak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-800 mb-1">Pos Kamling</h3>
                  <p className="text-black">0822-312-421</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-800 mb-1">Poskesdes</h3>
                  <p className="text-black">0831-2412-4121</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-800 mb-1">Kantor Desa</h3>
                  <p className="text-black">0822-7550-4940</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-sky-400 to-sky-500 text-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Kunjungi Kantor Desa</h2>
              <p className="text-xl mb-6 text-yellow-100">
                Datang langsung ke kantor desa untuk pelayanan yang lebih
                personal dan cepat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  Lihat Lokasi
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-blue-600  hover:text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
  );
}
