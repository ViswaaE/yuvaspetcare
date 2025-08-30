'use client'
import React from 'react';

// Bone Icon Component
const BoneIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="64" 
        height="64" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-orange-300"
        style={{ filter: "drop-shadow(0 0 5px rgba(252, 211, 77, 0.8))" }}
    >
        <path d="M12 2a5.5 5.5 0 0 1 5.5 5.5c0 1.63-.73 3.07-1.86 4.02l-1.35 1.18a1 1 0 0 0 0 1.6l1.35 1.18c1.13.95 1.86 2.39 1.86 4.02A5.5 5.5 0 0 1 12 22a5.5 5.5 0 0 1-5.5-5.5c0-1.63.73-3.07 1.86-4.02l1.35-1.18a1 1 0 0 0 0-1.6L6.64 8.52C5.51 7.57 4.78 6.13 4.78 4.5A5.5 5.5 0 0 1 12 2z"/>
    </svg>
);

const AboutUsBanner = () => {
  return (
    <section className="bg-[#2a2a2a] font-sans relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 py-24 md:py-32 relative z-10">
        <div className="flex items-center gap-4 mb-6">
            <BoneIcon />
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
                About Us
            </h1>
        </div>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="mx-2" aria-hidden="true">&rsaquo;</li>
            <li>
              <span className="text-gray-400">About Us</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 z-0 pointer-events-none">
         <img 
            src="catsleeping.png" 
            alt="A bengal cat peeking from the side" 
            className="w-full h-auto"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
    </section>
  );
};

export default AboutUsBanner;
