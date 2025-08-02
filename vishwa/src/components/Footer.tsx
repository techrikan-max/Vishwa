import Link from 'next/link';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Shop Collection', href: '/collection' },
    { name: 'About Rudraksha', href: '/about' },
    { name: 'Spiritual Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Size Guide', href: '/size-guide' },
  ];

  const customerCare = [
    'support@rudraksha.com',
    '+1 (555) 123-4567',
    'Live Chat Available',
    'Free Worldwide Shipping',
    '30-Day Return Policy',
  ];

  const guarantees = [
    '✓ Authenticated by Experts',
    '✓ Ethically Sourced',
    '✓ Energy Cleansed',
    '✓ Temple Blessed',
    '✓ Certificate Included',
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#333]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className={`text-white ${cinzel.className} text-2xl mb-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}>
                Rudraksha
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
              Curating authentic Rudraksha beads for your spiritual journey towards enlightenment and inner peace.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-[#1A1A1A] border border-[#333] rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {social.icon === 'facebook' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.348 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.348 1.052 2.348 2.349 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.349-1.051-2.349-2.348 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.348 1.052 2.348 2.349 0 1.297-1.051 2.348-2.348 2.348z"/>
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-white ${cinzel.className} text-xl mb-6`}>Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-light"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h3 className={`text-white ${cinzel.className} text-xl mb-6`}>Customer Care</h3>
            <ul className="space-y-4 text-gray-400 font-light" style={{ fontFamily: 'Times New Roman, serif' }}>
              {customerCare.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Sacred Guarantee */}
          <div>
            <h3 className={`text-white ${cinzel.className} text-xl mb-6`}>Sacred Guarantee</h3>
            <ul className="space-y-4 text-gray-400 font-light" style={{ fontFamily: 'Times New Roman, serif' }}>
              {guarantees.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#333] text-center">
          <p className="text-gray-500 font-light" style={{ fontFamily: 'Times New Roman, serif' }}>
            © {currentYear} Rudraksha. All rights reserved. | 
            <span className="text-[#D4AF37]"> Crafted with Sacred Intent</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
