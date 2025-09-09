import Image from "next/image"

export default function AboutUsSection() {
  const services = [
    "Nutrition and Diet",
    "Exercise and Physical Activity",
    "Grooming and Hygiene",
    "Mental & Emotional Well-Being",
    "Preventive Health",
    "Special Needs Pets",
  ]

  return (
    <section className="bg-blue-50 py-12 px-4 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-emerald-500 font-medium text-sm md:text-base">About Us</span>
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5C11.1 5 8.8 5.8 7 7.6C5.2 9.4 4.4 11.7 4.4 14C4.4 16.3 5.2 18.6 7 20.4C8.8 22.2 11.1 23 13.4 23C15.7 23 18 22.2 19.8 20.4C21.6 18.6 22.4 16.3 22.4 14C22.4 12.1 21.9 10.2 21 8.5V9H21Z" />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight">
              We Providing The Best Pet Care Services
            </h2>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5C11.1 5 8.8 5.8 7 7.6C5.2 9.4 4.4 11.7 4.4 14C4.4 16.3 5.2 18.6 7 20.4C8.8 22.2 11.1 23 13.4 23C15.7 23 18 22.2 19.8 20.4C21.6 18.6 22.4 16.3 22.4 14C22.4 12.1 21.9 10.2 21 8.5V9H21Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Trust By Clients</p>
                  <p className="text-2xl md:text-3xl font-bold text-emerald-500">1980+</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Educate owners on reading ingredient lists, choosing quality foods, and recognizing harmful ingredients.
              </p>
            </div>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gray-800 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5C11.1 5 8.8 5.8 7 7.6C5.2 9.4 4.4 11.7 4.4 14C4.4 16.3 5.2 18.6 7 20.4C8.8 22.2 11.1 23 13.4 23C15.7 23 18 22.2 19.8 20.4C21.6 18.6 22.4 16.3 22.4 14C22.4 12.1 21.9 10.2 21 8.5V9H21Z" />
                  </svg>
                  <span className="text-gray-700 text-sm md:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            {/* Rabbit Image */}
            <div className="absolute -left-8 md:-left-16 top-0 z-10 hidden lg:block">
              <Image
                src="/rabbit.webp"
                alt="Rabbit with carrot"
                width={150}
                height={200}
                className="w-32 h-40 lg:w-36 lg:h-48 object-contain"
              />
            </div>

            {/* Main Veterinarian Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg lg:ml-16">
              <Image
                src="/nurse.webp"
                alt="Veterinarian holding puppy"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
