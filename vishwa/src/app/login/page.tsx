'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import { useAuth } from '@/context/AuthContext';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await login(formData.email, formData.password);
      
      if (response.success) {
        router.push('/');
      } else {
        setError(response.message);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111] via-[#0A0A0A] to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/sacred-pattern.png')] opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full opacity-5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFD700] rounded-full opacity-3 blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-md w-full space-y-8">
        <div>
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-3 group mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className={`text-black font-bold text-xl ${cinzel.className}`}>R</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </div>
              <span className={`text-white text-2xl font-light ${cinzel.className} group-hover:text-[#D4AF37] transition-colors duration-300`}>
                Rudraksha
              </span>
            </Link>
            <h2 className={`text-3xl ${cinzel.className} font-light text-white mb-2`}>
              Welcome Back
            </h2>
            <p className="text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
              Sign in to continue your spiritual journey
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'Times New Roman, serif' }}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'Times New Roman, serif' }}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
