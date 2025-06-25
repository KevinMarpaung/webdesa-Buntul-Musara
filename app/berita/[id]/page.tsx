"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, User, Share2, Clock } from "lucide-react"
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

export default function DetailBeritaPage() {
  const params = useParams()
  const [berita, setBerita] = useState<Berita | null>(null)
  const [relatedBerita, setRelatedBerita] = useState<Berita[]>([])

  useEffect(() => {
    const savedBerita = localStorage.getItem("desa-berita")
    if (savedBerita && params.id) {
      const allBerita: Berita[] = JSON.parse(savedBerita)
      const currentBerita = allBerita.find((item) => item.id === params.id)
      setBerita(currentBerita || null)

      // Get related news (exclude current)
      const related = allBerita.filter((item) => item.id !== params.id).slice(0, 3)
      setRelatedBerita(related)
    }
  }, [params.id])

  if (!berita) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-300 rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-yellow-600">Memuat berita...</p>
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
              href="/berita"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-yellow-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-md">Detail Berita</h1>
              <p className="text-yellow-100">Baca selengkapnya</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Article */}
          <Card className="bg-white shadow-xl border-yellow-200 mb-12">
            <div className="h-64 bg-gradient-to-br from-yellow-400 to-amber-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-white/90 text-yellow-800 mb-4">{berita.tanggal}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{berita.judul}</h1>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-yellow-200">
                <div className="flex items-center space-x-4 text-yellow-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{berita.penulis}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{berita.tanggal}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-100">
                  <Share2 className="w-4 h-4 mr-2" />
                  Bagikan
                </Button>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-yellow-800 leading-relaxed text-lg whitespace-pre-wrap">{berita.konten}</p>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          {relatedBerita.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-yellow-800 mb-8">Berita Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBerita.map((article) => (
                  <Link key={article.id} href={`/berita/${article.id}`} className="group">
                    <Card className="bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-yellow-200 h-full">
                      <div className="h-32 bg-gradient-to-br from-yellow-400 to-amber-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-yellow-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                          {article.judul}
                        </h3>
                        <p className="text-sm text-yellow-600 mb-3 line-clamp-2">{article.konten}</p>
                        <div className="flex items-center space-x-2 text-xs text-yellow-500">
                          <Clock className="w-3 h-3" />
                          <span>{article.tanggal}</span>
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
