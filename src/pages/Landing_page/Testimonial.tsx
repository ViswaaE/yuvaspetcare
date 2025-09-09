'use client'
import React from 'react';

// Star Icon Component
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// Arrow Icon Component
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
)

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 font-sans py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Image 1 */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="dogbath2.webp"
              alt="Veterinarian examining a German Shepherd with its owner"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300/d1d5db/374151?text=Vet+Care"; }}
            />
          </div>

          {/* Testimonial Card */}
          <div className="bg-emerald-50 p-6 rounded-lg shadow-md flex flex-col justify-center h-64">
            <p className="text-gray-600 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...
            </p>
            <div className="flex text-emerald-400 mb-6">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="flex items-center">
                <div className="w-1/3 h-1.5 bg-gray-700 rounded-full"></div>
                <div className="w-2/3 h-1.5 bg-emerald-400 rounded-full -ml-1"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col items-start justify-center h-64 px-4">
            <div className="flex items-center -space-x-3 mb-6">
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" alt="User 1" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" alt="User 2" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="User 3" />
                <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center border-2 border-white">
                    <ArrowIcon />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-5xl font-bold text-gray-700">13k</p>
                <p className="text-gray-500 text-sm leading-snug">
                    This is the most common type of veterinary practice, focusing on the health and well-being of pets like dogs and cats.
                </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="dogbath.webp "
              alt="Woman washing a dog in a bathtub"
              className="w-full h-full object-cover"
               onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300/d1d5db/374151?text=Pet+Grooming"; }}
            />
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm italic">
            <span className="text-emerald-400 font-bold mx-2">&diams;</span>
            "Pets are not our whole life, but they make our lives whole."
            <span className="text-emerald-400 font-bold mx-2">&diams;</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
