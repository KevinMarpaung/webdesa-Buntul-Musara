"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Lock,
  User,
  Eye,
  EyeOff,
  Shield,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Default admin credentials
  const adminCredentials = {
    username: "admin",
    password: "admin123",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      formData.username === adminCredentials.username &&
      formData.password === adminCredentials.password
    ) {
      // Set login status in localStorage
      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.setItem("adminLoginTime", new Date().toISOString());

      // Redirect to admin panel
      router.push("/admin");
    } else {
      setError("Username atau password salah!");
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-amber-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-yellow-500 rounded-full animate-float"></div>
      </div>

      <div className="w-full justify-between   max-w-md relative z-10 ">
        <div className="text-center   ">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 mb-6"
          >
            <ArrowLeft className="w-6 h-6 text-yellow-600" />
          </Link>

          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-500">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-yellow-800 mb-2">
            Login Admin
          </h1>
          <p className="text-yellow-600">
            Masuk ke panel administrasi Kampung Kuning
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-yellow-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-yellow-800 flex items-center justify-center">
              <Lock className="w-5 h-5 mr-2" />
              Autentikasi Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2 text-red-700 animate-fade-in">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* Username Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="text-yellow-800 font-medium"
                >
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-5 h-5" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="pl-10 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500"
                    placeholder="Masukkan username"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-yellow-800 font-medium"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-5 h-5" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-10 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500"
                    placeholder="Masukkan password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-600 transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Memverifikasi...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Masuk ke Admin Panel</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Security Note */}
            <div className="mt-4 text-center">
              <p className="text-xs text-yellow-600">
                🔒 Sesi login akan berakhir setelah 24 jam untuk keamanan
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-yellow-600">
            © 2025 Desa Kampung Kuning. Sistem Admin Panel.
          </p>
        </div>
      </div>
    </div>
  );
}
