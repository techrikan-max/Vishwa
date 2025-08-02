'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Login attempt:', formData);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-black to-[#111] pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/sacred-pattern.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFD700] rounded-full opacity-3 blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="inline-block mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
              </div>
              <h2 className={`text-4xl sm:text-5xl ${cinzel.className} font-light text-white mb-4`}>
                Welcome Back
              </h2>
              <p className="text-gray-300 text-lg font-light" style={{ fontFamily: 'Times New Roman, serif' }}>
                Continue your spiritual journey
              </p>
            </div>

            {/* Login Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-3xl opacity-50 blur-xl"></div>
              
              <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#111] p-8 rounded-2xl border border-[#333] shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-[#D4AF37] text-sm font-medium mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black/50 border-2 ${
                        errors.email ? 'border-red-500' : 'border-[#333]'
                      } rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20 transition-all duration-300 backdrop-blur-sm`}
                      placeholder="Enter your sacred email"
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    />
                    {errors.email && (
                      <p className="mt-2 text-red-400 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-[#D4AF37] text-sm font-medium mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black/50 border-2 ${
                        errors.password ? 'border-red-500' : 'border-[#333]'
                      } rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20 transition-all duration-300 backdrop-blur-sm`}
                      placeholder="Enter your password"
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    />
                    {errors.password && (
                      <p className="mt-2 text-red-400 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-[#333] rounded bg-black/50"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link href="/forgot-password" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                        Forgot your password?
                      </Link>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-6 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/30"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                  >
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>

                {/* Divider */}
                <div className="mt-8 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#333]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gradient-to-b from-[#1A1A1A] to-[#111] text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="group relative bg-black/50 border border-[#333] text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center" style={{ fontFamily: 'Times New Roman, serif' }}>
                    <span>Google</span>
                  </button>
                  <button className="group relative bg-black/50 border border-[#333] text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center" style={{ fontFamily: 'Times New Roman, serif' }}>
                    <span>Facebook</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 font-medium">
                      Start your sacred journey
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
