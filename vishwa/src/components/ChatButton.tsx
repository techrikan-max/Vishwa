'use client';

import { useState } from 'react';
import ChatBot from './ChatBot';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Open chat assistant"
      >
        <div className="relative">
          <svg 
            className="w-6 h-6 text-black transition-transform duration-300 group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full opacity-0 group-hover:opacity-30 blur-lg animate-pulse"></div>
        </div>
      </button>

      {/* Chat Bot Modal */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
