"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Users, FileText, Calendar, Home, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Penduduk {
  id: string
  nama: string
  nik: string
  alamat: string
  pekerjaan: string
  umur: number
}

interface Berita {
  id: string
  judul: string
  konten: string
  tanggal: string
  penulis: string
}

interface Kegiatan {
  id: string
  nama: string
  deskripsi: string
  tanggal: string
  lokasi: string
  status: string
}

export default function AdminPage() {
  const [penduduk, setPenduduk] = useState<Penduduk[]>([])
  const [berita, setBerita] = useState<Berita[]>([])
  const [kegiatan, setKegiatan] = useState<Kegiatan[]>([])
  const [activeTab, setActiveTab] = useState("dashboard")

  // Form states
  const [formPenduduk, setFormPenduduk] = useState<Partial<Penduduk>>({})
  const [formBerita, setFormBerita] = useState<Partial<Berita>>({})
  const [formKegiatan, setFormKegiatan] = useState<Partial<Kegiatan>>({})
  const [editingId, setEditingId] = useState<string | null>(null)

  // Load data from localStorage
  useEffect(() => {
    const savedPenduduk = localStorage.getItem("desa-penduduk")
    const savedBerita = localStorage.getItem("desa-berita")
    const savedKegiatan = localStorage.getItem("desa-kegiatan")

    if (savedPenduduk) setPenduduk(JSON.parse(savedPenduduk))
    if (savedBerita) setBerita(JSON.parse(savedBerita))
    if (savedKegiatan) setKegiatan(JSON.parse(savedKegiatan))
  }, [])

  // Save to localStorage
  const saveToStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  // CRUD Functions for Penduduk
  const addPenduduk = () => {
    if (!formPenduduk.nama || !formPenduduk.nik) return

    const newPenduduk: Penduduk = {
      id: Date.now().toString(),
      nama: formPenduduk.nama,
      nik: formPenduduk.nik,
      alamat: formPenduduk.alamat || "",
      pekerjaan: formPenduduk.pekerjaan || "",
      umur: formPenduduk.umur || 0,
    }

    const updated = [...penduduk, newPenduduk]
    setPenduduk(updated)
    saveToStorage("desa-penduduk", updated)
    setFormPenduduk({})
  }

  const updatePenduduk = () => {
    if (!editingId || !formPenduduk.nama || !formPenduduk.nik) return

    const updated = penduduk.map((p) => (p.id === editingId ? ({ ...p, ...formPenduduk } as Penduduk) : p))
    setPenduduk(updated)
    saveToStorage("desa-penduduk", updated)
    setFormPenduduk({})
    setEditingId(null)
  }

  const deletePenduduk = (id: string) => {
    const updated = penduduk.filter((p) => p.id !== id)
    setPenduduk(updated)
    saveToStorage("desa-penduduk", updated)
  }

  // CRUD Functions for Berita
  const addBerita = () => {
    if (!formBerita.judul || !formBerita.konten) return

    const newBerita: Berita = {
      id: Date.now().toString(),
      judul: formBerita.judul,
      konten: formBerita.konten,
      tanggal: new Date().toLocaleDateString("id-ID"),
      penulis: formBerita.penulis || "Admin Desa",
    }

    const updated = [...berita, newBerita]
    setBerita(updated)
    saveToStorage("desa-berita", updated)
    setFormBerita({})
  }

  const updateBerita = () => {
    if (!editingId || !formBerita.judul || !formBerita.konten) return

    const updated = berita.map((b) => (b.id === editingId ? ({ ...b, ...formBerita } as Berita) : b))
    setBerita(updated)
    saveToStorage("desa-berita", updated)
    setFormBerita({})
    setEditingId(null)
  }

  const deleteBerita = (id: string) => {
    const updated = berita.filter((b) => b.id !== id)
    setBerita(updated)
    saveToStorage("desa-berita", updated)
  }

  // CRUD Functions for Kegiatan
  const addKegiatan = () => {
    if (!formKegiatan.nama || !formKegiatan.tanggal) return

    const newKegiatan: Kegiatan = {
      id: Date.now().toString(),
      nama: formKegiatan.nama,
      deskripsi: formKegiatan.deskripsi || "",
      tanggal: formKegiatan.tanggal,
      lokasi: formKegiatan.lokasi || "",
      status: formKegiatan.status || "Direncanakan",
    }

    const updated = [...kegiatan, newKegiatan]
    setKegiatan(updated)
    saveToStorage("desa-kegiatan", updated)
    setFormKegiatan({})
  }

  const updateKegiatan = () => {
    if (!editingId || !formKegiatan.nama || !formKegiatan.tanggal) return

    const updated = kegiatan.map((k) => (k.id === editingId ? ({ ...k, ...formKegiatan } as Kegiatan) : k))
    setKegiatan(updated)
    saveToStorage("desa-kegiatan", updated)
    setFormKegiatan({})
    setEditingId(null)
  }

  const deleteKegiatan = (id: string) => {
    const updated = kegiatan.filter((k) => k.id !== id)
    setKegiatan(updated)
    saveToStorage("desa-kegiatan", updated)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
              >
                <ArrowLeft className="w-6 h-6 text-yellow-600" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-md">Admin Panel</h1>
                <p className="text-yellow-100">Sistem Informasi Desa Modern</p>
              </div>
            </div>
            <div className="text-right text-white">
              <p className="text-sm opacity-90">Selamat Datang</p>
              <p className="font-semibold">Admin Desa</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-md border border-yellow-200">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-white transition-all duration-300 hover:bg-yellow-100"
            >
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="penduduk"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-white transition-all duration-300 hover:bg-yellow-100"
            >
              <Users className="w-4 h-4 mr-2" />
              Penduduk
            </TabsTrigger>
            <TabsTrigger
              value="berita"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-white transition-all duration-300 hover:bg-yellow-100"
            >
              <FileText className="w-4 h-4 mr-2" />
              Berita
            </TabsTrigger>
            <TabsTrigger
              value="kegiatan"
              className="data-[state=active]:bg-yellow-400 data-[state=active]:text-white transition-all duration-300 hover:bg-yellow-100"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Kegiatan
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Penduduk</CardTitle>
                  <Users className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{penduduk.length}</div>
                  <p className="text-xs text-yellow-100">Jiwa terdaftar</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Berita</CardTitle>
                  <FileText className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{berita.length}</div>
                  <p className="text-xs text-orange-100">Artikel dipublikasi</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-400 to-yellow-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Kegiatan</CardTitle>
                  <Calendar className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kegiatan.length}</div>
                  <p className="text-xs text-yellow-100">Kegiatan terjadwal</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg border-yellow-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Berita Terbaru</CardTitle>
                </CardHeader>
                <CardContent>
                  {berita.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="mb-4 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200"
                    >
                      <h4 className="font-semibold text-yellow-900">{item.judul}</h4>
                      <p className="text-sm text-yellow-700 mt-1">{item.konten.substring(0, 100)}...</p>
                      <p className="text-xs text-yellow-600 mt-2">{item.tanggal}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-lg border-yellow-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Kegiatan Mendatang</CardTitle>
                </CardHeader>
                <CardContent>
                  {kegiatan.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="mb-4 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-200"
                    >
                      <h4 className="font-semibold text-amber-900">{item.nama}</h4>
                      <p className="text-sm text-amber-700 mt-1">{item.deskripsi}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-amber-600">{item.tanggal}</p>
                        <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Penduduk CRUD */}
          <TabsContent value="penduduk" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <Card className="shadow-lg border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">
                    {editingId ? "Edit Data Penduduk" : "Tambah Data Penduduk"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      value={formPenduduk.nama || ""}
                      onChange={(e) => setFormPenduduk({ ...formPenduduk, nama: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">NIK</label>
                    <input
                      type="text"
                      value={formPenduduk.nik || ""}
                      onChange={(e) => setFormPenduduk({ ...formPenduduk, nik: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan NIK"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Alamat</label>
                    <input
                      type="text"
                      value={formPenduduk.alamat || ""}
                      onChange={(e) => setFormPenduduk({ ...formPenduduk, alamat: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan alamat"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Pekerjaan</label>
                    <input
                      type="text"
                      value={formPenduduk.pekerjaan || ""}
                      onChange={(e) => setFormPenduduk({ ...formPenduduk, pekerjaan: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan pekerjaan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Umur</label>
                    <input
                      type="number"
                      value={formPenduduk.umur || ""}
                      onChange={(e) => setFormPenduduk({ ...formPenduduk, umur: Number.parseInt(e.target.value) || 0 })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan umur"
                    />
                  </div>
                  <button
                    onClick={editingId ? updatePenduduk : addPenduduk}
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200"
                  >
                    {editingId ? "Update Data" : "Tambah Data"}
                  </button>
                  {editingId && (
                    <button
                      onClick={() => {
                        setEditingId(null)
                        setFormPenduduk({})
                      }}
                      className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200"
                    >
                      Batal Edit
                    </button>
                  )}
                </CardContent>
              </Card>

              {/* Data List */}
              <Card className="shadow-lg border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Data Penduduk ({penduduk.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {penduduk.map((person) => (
                      <div key={person.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-yellow-900">{person.nama}</h4>
                            <p className="text-sm text-yellow-700">NIK: {person.nik}</p>
                            <p className="text-sm text-yellow-700">Alamat: {person.alamat}</p>
                            <p className="text-sm text-yellow-700">Pekerjaan: {person.pekerjaan}</p>
                            <p className="text-sm text-yellow-700">Umur: {person.umur} tahun</p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                setFormPenduduk(person)
                                setEditingId(person.id)
                              }}
                              className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors duration-200"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deletePenduduk(person.id)}
                              className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors duration-200"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Berita CRUD */}
          <TabsContent value="berita" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <Card className="shadow-lg border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">{editingId ? "Edit Berita" : "Tambah Berita Baru"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Judul Berita</label>
                    <input
                      type="text"
                      value={formBerita.judul || ""}
                      onChange={(e) => setFormBerita({ ...formBerita, judul: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan judul berita"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Konten Berita</label>
                    <textarea
                      value={formBerita.konten || ""}
                      onChange={(e) => setFormBerita({ ...formBerita, konten: e.target.value })}
                      rows={6}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Tulis konten berita..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Penulis</label>
                    <input
                      type="text"
                      value={formBerita.penulis || ""}
                      onChange={(e) => setFormBerita({ ...formBerita, penulis: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Nama penulis"
                    />
                  </div>
                  <button
                    onClick={editingId ? updateBerita : addBerita}
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200"
                  >
                    {editingId ? "Update Berita" : "Publikasikan Berita"}
                  </button>
                  {editingId && (
                    <button
                      onClick={() => {
                        setEditingId(null)
                        setFormBerita({})
                      }}
                      className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200"
                    >
                      Batal Edit
                    </button>
                  )}
                </CardContent>
              </Card>

              {/* Data List */}
              <Card className="shadow-lg border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Daftar Berita ({berita.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {berita.map((article) => (
                      <div key={article.id} className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-amber-900">{article.judul}</h4>
                            <p className="text-sm text-amber-700 mt-1">{article.konten.substring(0, 100)}...</p>
                            <div className="flex justify-between items-center mt-2">
                              <p className="text-xs text-amber-600">Oleh: {article.penulis}</p>
                              <p className="text-xs text-amber-600">{article.tanggal}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => {
                                setFormBerita(article)
                                setEditingId(article.id)
                              }}
                              className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors duration-200"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteBerita(article.id)}
                              className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors duration-200"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Kegiatan CRUD */}
          <TabsContent value="kegiatan" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <Card className="shadow-lg border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">
                    {editingId ? "Edit Kegiatan" : "Tambah Kegiatan Baru"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Nama Kegiatan</label>
                    <input
                      type="text"
                      value={formKegiatan.nama || ""}
                      onChange={(e) => setFormKegiatan({ ...formKegiatan, nama: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Masukkan nama kegiatan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Deskripsi</label>
                    <textarea
                      value={formKegiatan.deskripsi || ""}
                      onChange={(e) => setFormKegiatan({ ...formKegiatan, deskripsi: e.target.value })}
                      rows={4}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Deskripsi kegiatan..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Tanggal</label>
                    <input
                      type="date"
                      value={formKegiatan.tanggal || ""}
                      onChange={(e) => setFormKegiatan({ ...formKegiatan, tanggal: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Lokasi</label>
                    <input
                      type="text"
                      value={formKegiatan.lokasi || ""}
                      onChange={(e) => setFormKegiatan({ ...formKegiatan, lokasi: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      placeholder="Lokasi kegiatan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-700 mb-1">Status</label>
                    <select
                      value={formKegiatan.status || "Direncanakan"}
                      onChange={(e) => setFormKegiatan({ ...formKegiatan, status: e.target.value })}
                      className="w-full p-2 border border-yellow-300 rounded-md focus:border-yellow-500 focus:outline-none"
                    >
                      <option value="Direncanakan">Direncanakan</option>
                      <option value="Berlangsung">Berlangsung</option>
                      <option value="Selesai">Selesai</option>
                      <option value="Dibatalkan">Dibatalkan</option>
                    </select>
                  </div>
                  <button
                    onClick={editingId ? updateKegiatan : addKegiatan}
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200"
                  >
                    {editingId ? "Update Kegiatan" : "Tambah Kegiatan"}
                  </button>
                  {editingId && (
                    <button
                      onClick={() => {
                        setEditingId(null)
                        setFormKegiatan({})
                      }}
                      className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-200"
                    >
                      Batal Edit
                    </button>
                  )}
                </CardContent>
              </Card>

              {/* Data List */}
              <Card className="shadow-lg border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Daftar Kegiatan ({kegiatan.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {kegiatan.map((activity) => (
                      <div key={activity.id} className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-orange-900">{activity.nama}</h4>
                            <p className="text-sm text-orange-700 mt-1">{activity.deskripsi}</p>
                            <div className="flex justify-between items-center mt-2">
                              <p className="text-xs text-orange-600">📅 {activity.tanggal}</p>
                              <p className="text-xs text-orange-600">📍 {activity.lokasi}</p>
                            </div>
                            <span
                              className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
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
                            </span>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => {
                                setFormKegiatan(activity)
                                setEditingId(activity.id)
                              }}
                              className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors duration-200"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteKegiatan(activity.id)}
                              className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors duration-200"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
