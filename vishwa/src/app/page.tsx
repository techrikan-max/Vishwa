import Image from 'next/image';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#111] via-[#0A0A0A] to-black overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('/sacred-pattern.png')] opacity-5 animate-pulse"></div>
        
        {/* Floating orbs for ambient effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFD700] rounded-full opacity-3 blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
          </div>
          
          <h1 className={`text-5xl sm:text-7xl lg:text-8xl ${cinzel.className} font-light text-white mb-8 leading-tight tracking-wide`}
              style={{
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(212, 175, 55, 0.3), 0 16px 32px rgba(0, 0, 0, 0.5)'
              }}>
            Harness the Power of
            <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent font-normal"
                  style={{
                    textShadow: '0 4px 8px rgba(212, 175, 55, 0.5), 0 8px 16px rgba(255, 215, 0, 0.3)'
                  }}>
              Rudraksha
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Discover authentic spiritual jewelry that connects you to divine energy and ancient wisdom
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-12 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/30">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="group relative border-2 border-[#D4AF37] text-[#D4AF37] px-12 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Rudraksha Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#111] px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Sacred Heritage</span>
            </div>
            <h2 className={`text-4xl sm:text-6xl ${cinzel.className} font-light text-white mb-8`}
                style={{
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 8px 16px rgba(212, 175, 55, 0.2)'
                }}>
              Sacred Beads of
              <span className="block text-[#D4AF37]"
                    style={{
                      textShadow: '0 4px 8px rgba(212, 175, 55, 0.4), 0 8px 16px rgba(0, 0, 0, 0.6)'
                    }}>
                Transformation
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Rudraksha beads, known as the <span className="text-[#D4AF37] font-medium">tears of Lord Shiva</span>, have been revered for centuries for their profound spiritual and healing properties. Each bead carries unique vibrations that can help balance your energy and enhance meditation practice.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Our carefully curated collection brings you the finest quality Rudraksha beads, ethically sourced and authenticated by experts with decades of experience.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-serif text-[#D4AF37] mb-2">500+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Sacred Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-[#D4AF37] mb-2">100%</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Authentic</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Sacred Rudraksha Beads"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 bg-gradient-to-b from-[#111] to-black px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Premium Selection</span>
            </div>
            <h2 className={`text-4xl sm:text-6xl ${cinzel.className} font-light text-white mb-8`}
                style={{
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 8px 16px rgba(212, 175, 55, 0.2)'
                }}>
              Featured Collections
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Sacred 5 Mukhi Mala", price: 108, originalPrice: 150, image: "/logo2.JPG" },
              { name: "Divine 7 Mukhi Set", price: 188, originalPrice: 225, image: "/logo3.JPG" },
              { name: "Premium 21 Mukhi", price: 388, originalPrice: 450, image: "/logo4.JPG" },
              { name: "Lotus Carved Mala", price: 258, originalPrice: 300, image: "/logo5.JPG" },
              { name: "Spiritual Bracelet Set", price: 128, originalPrice: 160, image: "/logo.jpg" },
              { name: "Temple Blessed Collection", price: 488, originalPrice: 550, image: "/logo5.JPG" }
            ].map((product, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                
                <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#111] rounded-2xl overflow-hidden border border-[#333] group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl">
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Sale badge */}
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-semibold">
                      SAVE ${product.originalPrice - product.price}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-white font-serif text-xl mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[#D4AF37] font-bold text-2xl">${product.price}</span>
                      <span className="text-gray-500 line-through text-lg">${product.originalPrice}</span>
                    </div>
                    
                    <button className="w-full group/btn relative bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105">
                      <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">Add to Cart</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#111] px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[url('/sacred-pattern.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Sacred Experiences</span>
            </div>
            <h2 className={`text-4xl sm:text-6xl ${cinzel.className} font-light text-white mb-8`}
                style={{
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 8px 16px rgba(212, 175, 55, 0.2)'
                }}>
              Testimonials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Sarah Johnson", role: "Spiritual Practitioner", rating: 5 },
              { name: "Michael Chen", role: "Meditation Teacher", rating: 5 },
              { name: "Priya Sharma", role: "Yoga Instructor", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#111] p-8 rounded-2xl border border-[#333] group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-[#D4AF37]">⭐</div>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-8 font-light">
                    &ldquo;The energy of these Rudraksha beads is truly transformative. I can feel their sacred vibrations during my meditation practice. The quality is exceptional.&rdquo;
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4 ring-2 ring-[#D4AF37]/30">
                      <Image
                        src={index === 0 ? '/4-Mukhi Border.jpg' :
                            index === 1 ? '/ganesh vertical.jpg' :
                            '/Gauri Shankar 22.jpg'}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-[#D4AF37] text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-b from-[#111] to-black px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
          </div>
          
          <h2 className={`text-4xl sm:text-6xl ${cinzel.className} font-light text-white mb-8`}
              style={{
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 8px 16px rgba(212, 175, 55, 0.2)'
              }}>
            Join Our Sacred Circle
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
            Subscribe to receive spiritual insights, exclusive offers, and ancient wisdom delivered to your soul
          </p>
          
          <form className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your sacred email"
                className="w-full px-6 py-4 bg-black/50 border-2 border-[#333] rounded-full text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <button className="group relative bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/30">
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <h3 className={`text-white ${cinzel.className} text-2xl mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent`}
                  style={{
                    textShadow: '0 2px 4px rgba(212, 175, 55, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)'
                  }}>
                Rudraksha
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Curating authentic Rudraksha beads for your spiritual journey towards enlightenment and inner peace.
              </p>
              
              <div className="flex space-x-4 mt-8">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 bg-[#1A1A1A] border border-[#333] rounded-full flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['Shop Collection', 'About Rudraksha', 'Spiritual Blog', 'Contact Us', 'Size Guide'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 font-light">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-serif text-xl mb-6">Customer Care</h3>
              <ul className="space-y-4 text-gray-400 font-light">
                <li>support@rudraksha.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Live Chat Available</li>
                <li>Free Worldwide Shipping</li>
                <li>30-Day Return Policy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-serif text-xl mb-6">Sacred Guarantee</h3>
              <ul className="space-y-4 text-gray-400 font-light">
                <li>✓ Authenticated by Experts</li>
                <li>✓ Ethically Sourced</li>
                <li>✓ Energy Cleansed</li>
                <li>✓ Temple Blessed</li>
                <li>✓ Certificate Included</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#333] text-center">
            <p className="text-gray-500 font-light">
              © {new Date().getFullYear()} Rudraksha. All rights reserved. | 
              <span className="text-[#D4AF37]"> Crafted with Sacred Intent</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
