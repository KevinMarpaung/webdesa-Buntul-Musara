"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Search, Filter, Users, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface Kegiatan {
  id: string
  nama: string
  deskripsi: string
  tanggal: string
  lokasi: string
  status: string
}

export default function KegiatanPage() {
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Semua")
  const [filteredKegiatan, setFilteredKegiatan] = useState<Kegiatan[]>([])

  useEffect(() => {
    const savedKegiatan = localStorage.getItem("desa-kegiatan")
    if (savedKegiatan) {
      const data = JSON.parse(savedKegiatan)
      setKegiatan(data)
      setFilteredKegiatan(data)
    }
  }, [])

  useEffect(() => {
    let filtered = kegiatan.filter(
      (item) =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lokasi.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (statusFilter !== "Semua") {
      filtered = filtered.filter((item) => item.status === statusFilter)
    }

    setFilteredKegiatan(filtered)
  }, [searchTerm, statusFilter, kegiatan])

  const statusOptions = ["Semua", "Direncanakan", "Berlangsung", "Selesai", "Dibatalkan"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Direncanakan":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Berlangsung":
        return "bg-green-100 text-green-800 border-green-200"
      case "Selesai":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "Dibatalkan":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
    }
  }

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
              <h1 className="text-2xl font-bold text-white drop-shadow-md">Kegiatan Desa</h1>
              <p className="text-yellow-100">Agenda dan kegiatan Desa Maju Bersama</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari kegiatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-yellow-300 focus:border-yellow-500 bg-white shadow-md"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-yellow-600" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-yellow-300 rounded-md px-3 py-2 focus:border-yellow-500 focus:outline-none bg-white shadow-md"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Kegiatan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredKegiatan.map((activity, index) => (
            <Link key={activity.id} href={`/kegiatan/${activity.id}`} className="group">
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden h-full">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Kegiatan+${index + 1}+${activity.nama.substring(0, 15)}`}
                    alt={activity.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(activity.status)} border`}>{activity.status}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {activity.nama}
                  </h3>
                  <p className="text-yellow-600 mb-4 line-clamp-2">{activity.deskripsi}</p>

                  <div className="space-y-2 text-sm text-yellow-700 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>
                        {new Date(activity.tanggal).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.lokasi}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-yellow-500">
                      <Users className="w-4 h-4" />
                      <span>Terbuka untuk umum</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 group-hover:border-yellow-500 transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredKegiatan.length === 0 && kegiatan.length > 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <p className="text-yellow-600 text-lg">Tidak ada kegiatan yang sesuai dengan pencarian</p>
          </div>
        )}

        {kegiatan.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <p className="text-yellow-600 text-lg">Belum ada kegiatan yang dijadwalkan</p>
            <Link href="/admin">
              <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">Kelola Kegiatan</Button>
            </Link>
          </div>
        )}

        {/* Upcoming Events Highlight */}
        {kegiatan.filter((k) => k.status === "Direncanakan").length > 0 && (
          <section className="mt-16">
            <Card className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Kegiatan Mendatang</h2>
                <p className="text-xl mb-6 text-yellow-100">
                  Jangan lewatkan kegiatan menarik yang akan datang di desa kita!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {kegiatan
                    .filter((k) => k.status === "Direncanakan")
                    .slice(0, 3)
                    .map((activity) => (
                      <div key={activity.id} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="font-bold mb-2">{activity.nama}</h3>
                        <p className="text-sm text-yellow-100 mb-2">{activity.deskripsi}</p>
                        <div className="text-xs text-yellow-200">
                          📅 {new Date(activity.tanggal).toLocaleDateString("id-ID")}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  )
}
