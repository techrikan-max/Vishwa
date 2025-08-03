'use client';

import { useState, useEffect } from 'react';
import { Cinzel } from 'next/font/google';
import { FAQ } from '@/types';

const cinzel = Cinzel({ subsets: ['latin'] });

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [, setFaqs] = useState<FAQ[]>([]);
  const [categorizedFAQs, setCategorizedFAQs] = useState<Record<string, FAQ[]>>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState<'categories' | 'faqs' | 'answer'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchFAQs();
    }
  }, [isOpen]);

  const fetchFAQs = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/chatbot');
      const data = await response.json();
      
      if (data.success) {
        setFaqs(data.data.faqs);
        setCategorizedFAQs(data.data.categorized);
        setCategories(data.data.categories);
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('faqs');
  };

  const handleFAQSelect = (faq: FAQ) => {
    setSelectedFAQ(faq);
    setCurrentView('answer');
  };

  const handleBack = () => {
    if (currentView === 'answer') {
      setCurrentView('faqs');
      setSelectedFAQ(null);
    } else if (currentView === 'faqs') {
      setCurrentView('categories');
      setSelectedCategory('');
    }
  };

  const handleReset = () => {
    setCurrentView('categories');
    setSelectedCategory('');
    setSelectedFAQ(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-[#D4AF37]/20 rounded-2xl max-w-md w-full max-h-[80vh] flex flex-col shadow-2xl shadow-[#D4AF37]/10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center">
              <span className={`text-black font-bold text-sm ${cinzel.className}`}>R</span>
            </div>
            <div>
              <h3 className={`text-lg font-light text-white ${cinzel.className}`}>
                Rudraksha Assistant
              </h3>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'Times New Roman, serif' }}>
                Here to help with your questions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37]"></div>
            </div>
          ) : (
            <>
              {/* Navigation */}
              {currentView !== 'categories' && (
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handleBack}
                    className="flex items-center text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={handleReset}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                  >
                    Start Over
                  </button>
                </div>
              )}

              {/* Categories View */}
              {currentView === 'categories' && (
                <div className="space-y-3">
                  <div className="text-center mb-6">
                    <h4 className={`text-lg ${cinzel.className} font-light text-white mb-2`}>
                      What would you like to know about?
                    </h4>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Choose a category to see related questions
                    </p>
                  </div>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="w-full p-4 bg-black/30 border border-gray-600 rounded-lg text-left hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white font-medium group-hover:text-[#D4AF37] transition-colors duration-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                            {category}
                          </h5>
                          <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: 'Times New Roman, serif' }}>
                            {categorizedFAQs[category]?.length || 0} questions
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* FAQs View */}
              {currentView === 'faqs' && selectedCategory && (
                <div className="space-y-3">
                  <div className="text-center mb-6">
                    <h4 className={`text-lg ${cinzel.className} font-light text-white mb-2`}>
                      {selectedCategory}
                    </h4>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Click on a question to see the answer
                    </p>
                  </div>
                  
                  {categorizedFAQs[selectedCategory]?.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleFAQSelect(faq)}
                      className="w-full p-4 bg-black/30 border border-gray-600 rounded-lg text-left hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-white font-medium group-hover:text-[#D4AF37] transition-colors duration-200" style={{ fontFamily: 'Times New Roman, serif' }}>
                          {faq.question}
                        </p>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-200 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Answer View */}
              {currentView === 'answer' && selectedFAQ && (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h4 className={`text-lg ${cinzel.className} font-light text-[#D4AF37] mb-4`}>
                      {selectedFAQ.question}
                    </h4>
                  </div>
                  
                  <div className="bg-black/30 border border-gray-600 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                      {selectedFAQ.answer}
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-[#D4AF37] text-sm font-medium" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Thank you for your question!
                    </p>
                    <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Is there anything else you&apos;d like to know?
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
