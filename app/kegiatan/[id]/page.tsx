"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, Clock, Users, Share2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Kegiatan {
  id: string
  nama: string
  deskripsi: string
  tanggal: string
  lokasi: string
  status: string
}

export default function DetailKegiatanPage() {
  const params = useParams()
  const [kegiatan, setKegiatan] = useState<Kegiatan | null>(null)
  const [relatedKegiatan, setRelatedKegiatan] = useState<Kegiatan[]>([])

  useEffect(() => {
    const savedKegiatan = localStorage.getItem("desa-kegiatan")
    if (savedKegiatan && params.id) {
      const allKegiatan: Kegiatan[] = JSON.parse(savedKegiatan)
      const currentKegiatan = allKegiatan.find((item) => item.id === params.id)
      setKegiatan(currentKegiatan || null)

      // Get related activities (exclude current)
      const related = allKegiatan.filter((item) => item.id !== params.id).slice(0, 3)
      setRelatedKegiatan(related)
    }
  }, [params.id])

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

  if (!kegiatan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-300 rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-yellow-600">Memuat kegiatan...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/kegiatan"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-yellow-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">Detail Kegiatan</h1>
              <p className="text-yellow-100">Informasi lengkap kegiatan</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Activity */}
          <Card className="bg-white shadow-xl border-yellow-200 mb-12 overflow-hidden">
            <div className="h-64 relative overflow-hidden">
              <img
                src={`/placeholder.svg?height=300&width=800&text=${kegiatan.nama}`}
                alt={kegiatan.nama}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className={`${getStatusColor(kegiatan.status)} border mb-4`}>{kegiatan.status}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{kegiatan.nama}</h1>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-yellow-200">
                <div className="flex items-center space-x-3 text-yellow-700">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-yellow-500">Tanggal</p>
                    <p className="font-semibold">
                      {new Date(kegiatan.tanggal).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-yellow-700">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-yellow-500">Lokasi</p>
                    <p className="font-semibold">{kegiatan.lokasi}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-yellow-700">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-yellow-500">Peserta</p>
                    <p className="font-semibold">Terbuka untuk umum</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold text-yellow-800 mb-4">Deskripsi Kegiatan</h2>
                <p className="text-yellow-800 leading-relaxed text-lg whitespace-pre-wrap">{kegiatan.deskripsi}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Daftar Kegiatan
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Bagikan
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Activities */}
          {relatedKegiatan.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-yellow-800 mb-8">Kegiatan Lainnya</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedKegiatan.map((activity) => (
                  <Link key={activity.id} href={`/kegiatan/${activity.id}`} className="group">
                    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-yellow-200 h-full overflow-hidden">
                      <div className="h-32 relative overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=150&width=300&text=${activity.nama.substring(0, 20)}`}
                          alt={activity.nama}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          crossOrigin="anonymous"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <CardContent className="p-4">
                        <Badge className={`${getStatusColor(activity.status)} border mb-2 text-xs`}>
                          {activity.status}
                        </Badge>
                        <h3 className="font-bold text-yellow-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                          {activity.nama}
                        </h3>
                        <p className="text-sm text-yellow-600 mb-3 line-clamp-2">{activity.deskripsi}</p>
                        <div className="flex items-center space-x-2 text-xs text-yellow-500">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(activity.tanggal).toLocaleDateString("id-ID")}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
