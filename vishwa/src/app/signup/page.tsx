'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Cinzel } from 'next/font/google';
import { useAuth } from '@/context/AuthContext';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      setProfilePhoto(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('password', formData.password);
      
      if (profilePhoto) {
        submitData.append('profilePhoto', profilePhoto);
      }

      const response = await register(submitData);
      
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
    <div className="min-h-screen bg-gradient-to-br from-[#111] via-[#0A0A0A] to-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
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
              Join Our Community
            </h2>
            <p className="text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
              Begin your spiritual journey with us
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {/* Profile Photo Upload */}
          <div className="text-center">
            <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-300 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
              Profile Photo (Optional)
            </label>
            <div className="flex flex-col items-center">
              <div className="relative">
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="Profile preview"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-[#D4AF37]"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center border-2 border-dashed border-gray-600">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                )}
                <input
                  id="profilePhoto"
                  name="profilePhoto"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                Click to upload (Max 5MB)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'Times New Roman, serif' }}
                placeholder="Enter your full name"
              />
            </div>

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
                placeholder="Create a password (min 6 characters)"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'Times New Roman, serif' }}
                placeholder="Confirm your password"
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
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
              Already have an account?{' '}
              <Link href="/login" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
