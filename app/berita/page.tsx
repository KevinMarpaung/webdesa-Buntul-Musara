"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, User, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Berita {
  id: string;
  judul: string;
  konten: string;
  tanggal: string;
  penulis: string;
  gambar?: string;
}

export default function BeritaPage() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBerita, setFilteredBerita] = useState<Berita[]>([]);

  useEffect(() => {
    const savedBerita = localStorage.getItem("desa-berita");
    if (savedBerita) {
      const data = JSON.parse(savedBerita);
      setBerita(data);
      setFilteredBerita(data);
    }
  }, []);

  useEffect(() => {
    const filtered = berita.filter(
      (item) =>
        item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.konten.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.penulis.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBerita(filtered);
  }, [searchTerm, berita]);

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
                Berita & Pengumuman
              </h1>
              <p className="text-white">
                Informasi terkini dari Desa Buntul Musara
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
            <Input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-blue-300 focus:border-yellow-500 bg-white shadow-md"
            />
          </div>
        </div>

        {/* Berita Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBerita.map((article) => (
            <Link
              key={article.id}
              href={`/berita/${article.id}`}
              className="group"
            >
              <Card className="bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-yellow-200 overflow-hidden h-full">
                <div className="h-48 relative overflow-hidden">
                  {
                    <img
                      src="kegiatan 2.jpeg"
                      alt={article.judul}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  }
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-yellow-800">
                      {article.tanggal}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {article.judul}
                  </h3>
                  <p className="text-yellow-600 mb-4 line-clamp-3">
                    {article.konten}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-yellow-500">
                      <User className="w-4 h-4" />
                      <span>{article.penulis}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 group-hover:border-yellow-500 transition-colors duration-300"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Baca
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredBerita.length === 0 && berita.length > 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <p className="text-yellow-600 text-lg">
              Tidak ada berita yang sesuai dengan pencarian
            </p>
          </div>
        )}

        {berita.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-blue-300 mx-auto mb-4" />
            <p className="text-black text-lg">
              Belum ada berita yang dipublikasi
            </p>
            <Link href="/admin">
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                Kelola Berita
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
