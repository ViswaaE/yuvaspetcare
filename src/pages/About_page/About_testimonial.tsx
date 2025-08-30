import React from 'react';

// Paw Icon Component
const PawIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 9.5 12 9.5z" />
    </svg>
);

// Quotation Mark Icon
const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200">
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
    </svg>
);

// Chain Link Icon
const ChainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);

// Testimonial data
const testimonials = [
    { name: 'Emma Watson', text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry...', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Kozue Matsumoto', text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry...', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
    { name: 'Biscuit Oliva', text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry...', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Kristen Stewart', text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry...', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
];

// TestimonialCard Component
const TestimonialCard = ({ name, text, imageUrl, rotation }: { name: string, text: string, imageUrl: string, rotation: string }) => (
    <div className={`bg-white p-8 rounded-lg shadow-md transform ${rotation}`}>
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
                <img src={imageUrl} alt={name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                    <h3 className="font-bold text-orange-500">{name}</h3>
                </div>
            </div>
            <QuoteIcon />
        </div>
        <p className="text-gray-600 mt-4 text-sm">{text}</p>
    </div>
);

// Main Abouttestimonial Component
const Abouttestimonial = () => {
    const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];

    return (
        <section className="bg-white py-20 font-sans">
            <div className="container mx-auto max-w-7xl px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-orange-500 font-semibold">Our Testimonial</span>
                        <PawIcon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Here from Our Happy Pet Owners.
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-y-16 gap-x-4 lg:gap-x-8">
                    {testimonials.map((testimonial, index) => (
                        <React.Fragment key={index}>
                            <div className="w-full max-w-sm sm:w-2/5 lg:w-auto lg:flex-1">
                                <TestimonialCard
                                    name={testimonial.name}
                                    text={testimonial.text}
                                    imageUrl={testimonial.imageUrl}
                                    rotation={rotations[index % testimonials.length]}
                                />
                            </div>
                            {index < testimonials.length - 1 && (
                                <div className="hidden lg:flex justify-center">
                                    <ChainIcon />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Abouttestimonial;