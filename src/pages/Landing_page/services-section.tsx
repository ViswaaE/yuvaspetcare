import Image from "next/image"
// import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-emerald-500 font-medium">Our Service</span>
            <div className="w-6 h-6 text-emerald-500">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13 5V7C13 8.1 13.9 9 15 9S17 8.1 17 7V6L19 7V9C19 10.1 19.9 11 21 11S23 10.1 23 9C23 7.9 22.1 7 21 7V9ZM3 9V7C1.9 7 1 7.9 1 9S1.9 11 3 11S5 10.1 5 9V7L7 6V7C7 8.1 7.9 9 9 9S11 8.1 11 7V5L9 4L3 7V9ZM9 12C7.9 12 7 12.9 7 14V16L9 17L11 16V14C11 12.9 10.1 12 9 12ZM15 12C13.9 12 13 12.9 13 14V16L15 17L17 16V14C17 12.9 16.1 12 15 12Z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight">
            Making Memories Around the
            <br />
            World, Together
          </h2>
        </div>

        {/* Services Layout */}
        <div className="relative">
          {/* Mobile: Stack vertically */}
          <div className="block lg:hidden space-y-8">
            {/* Pet Taxi 24/7 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-emerald-200">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-emerald-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 12.75a6 6 0 0 1 11.25-2.25H18a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 0 1 .75-.75h1.5Z" />
                    <path d="M12 6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 6ZM8.25 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM15.75 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H16.5a.75.75 0 0 1-.75-.75Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Pet Taxi 24/7</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A plan for ensuring that young pets receive their core vaccinations at the appropriate ages.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="w-48 h-32 rounded-2xl overflow-hidden">
                <Image
                  src="/service-2.webp"
                  alt="Cute tabby cat"
                  width={192}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pet Grooming */}
            <div className="text-center py-6">
              <div className="w-12 h-12 mx-auto mb-4 text-emerald-500">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM8.5 7C9.3 7 10 7.7 10 8.5S9.3 10 8.5 10S7 9.3 7 8.5S7.7 7 8.5 7ZM15.5 7C16.3 7 17 7.7 17 8.5S16.3 10 15.5 10S14 9.3 14 8.5S14.7 7 15.5 7ZM12 11C14.2 11 16 12.8 16 15V16H8V15C8 12.8 9.8 11 12 11Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pet Grooming</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A plan for ensuring that young pets receive their core vaccinations at the appropriate ages.
              </p>
            </div>

            {/* Pet Training */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-emerald-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 12.75a6 6 0 0 1 11.25-2.25H18a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 0 1 .75-.75h1.5Z" />
                    <path d="M12 6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 6ZM8.25 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM15.75 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H16.5a.75.75 0 0 1-.75-.75Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pet Training</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A plan for ensuring that young pets receive their core vaccinations at the appropriate ages.
                </p>
              </div>
            </div>

            {/* Mobile Images */}
            <div className="flex gap-4 justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/service-3.webp"
                  alt="Woman with dog"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/service1.webp"
                  alt="Man with dog"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Creative Layout */}
          <div className="hidden lg:block relative min-h-[600px]">
            {/* Pet Taxi 24/7 - Top Left with circular border */}
            <div className="absolute top-0 left-0 w-80 bg-white rounded-full p-8 shadow-lg border-2 border-emerald-200">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 text-emerald-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 12.75a6 6 0 0 1 11.25-2.25H18a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 0 1 .75-.75h1.5Z" />
                    <path d="M12 6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 6ZM8.25 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM15.75 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H16.5a.75.75 0 0 1-.75-.75Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pet Taxi 24/7</h3>
                <p className="text-gray-600 leading-relaxed">
                  A plan for ensuring that young pets receive their core vaccinations at the appropriate ages.
                </p>
              </div>
            </div>

            {/* Pet Training - Top Right with rectangular border */}
            <div className="absolute top-0 right-0 w-80 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 text-emerald-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 12.75a6 6 0 0 1 11.25-2.25H18a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 0 1 .75-.75h1.5Z" />
                    <path d="M12 6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 6ZM8.25 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM15.75 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H16.5a.75.75 0 0 1-.75-.75Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pet Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  A plan for ensuring that young pets receive their core vaccinations at the appropriate ages.
                </p>
              </div>
            </div>

            {/* Center Cat Image */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-48 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/service-2.webp"
                alt="Cute tabby cat"
                width={320}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pet Grooming - Center Bottom without border */}
            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-80 p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 text-emerald-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM8.5 7C9.3 7 10 7.7 10 8.5S9.3 10 8.5 10S7 9.3 7 8.5S7.7 7 8.5 7ZM15.5 7C16.3 7 17 7.7 17 8.5S16.3 10 15.5 10S14 9.3 14 8.5S14.7 7 15.5 7ZM12 11C14.2 11 16 12.8 16 15V16H8V15C8 12.8 9.8 11 12 11Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pet Grooming</h3>
                <p className="text-gray-600 leading-relaxed">
                  A plan for ensuring that young pets receive their core vaccinations at the appropriate ages.
                </p>
              </div>
            </div>

            {/* Left Circular Image */}
            <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/service1.webp"
                alt="Woman with dog"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Circular Image */}
            <div className="absolute bottom-0 right-20 w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/service-3.webp"
                alt="Man with dog"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* View Services Button */}
        <div className="text-center mt-12 lg:mt-20">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg">
            VIEW SERVICES
            <div className="ml-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Dog Image - Desktop Only */}
      <div className="hidden xl:block absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <Image
          src="/service1.webp"
          alt="Decorative dog"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
