import React from 'react';

// Stats Banner Component
const StatsBanner = () => {
  return (
    <div className="bg-[#4A3F3C] py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center lg:text-left">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-gray-500 pr-4">
            <span className="text-5xl font-bold text-orange-400">86+</span>
            <p className="text-white mt-2 text-sm">Projects Completed in Last 5 Years</p>
          </div>
          {/* Stat Item 2 */}
          <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-gray-500 px-4">
            <span className="text-5xl font-bold text-orange-400">10k</span>
            <p className="text-white mt-2 text-sm">Happy Customers Who Trusted</p>
          </div>
          {/* Stat Item 3 */}
          <div className="flex flex-col items-center lg:items-start lg:border-r lg:border-gray-500 px-4">
            <span className="text-5xl font-bold text-orange-400">450+</span>
            <p className="text-white mt-2 text-sm">Awards For Success Projects</p>
          </div>
          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start lg:pl-4">
            <button className="bg-orange-400 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-transform transform hover:scale-105">
              CONTACT US
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.435 7.185A6.5 6.5 0 0 1 17.5 2a6.5 6.5 0 0 1 5.416 10.123"/><path d="M9.813 9.813a6.5 6.5 0 0 0-3.626 3.626L2 17.5V22h4.5l4.06-4.06a6.5 6.5 0 0 0 3.626-3.626Z"/><path d="M14.5 6.5 17.5 9.5"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsBanner;
