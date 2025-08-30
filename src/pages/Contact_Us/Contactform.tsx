"use client";
import React from 'react';

// Icon Components
const PawIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 9.5 12 9.5z"/>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const AddressIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);


// Main ContactSection Component
const ContactSection = () => {
    return (
        <section className="bg-white py-20 font-sans relative overflow-hidden">
            {/* Decorative Paw Prints - Top Left */}
            <div className="absolute top-10 left-10 opacity-30 hidden lg:block">
                 <PawIcon className="w-16 h-16 text-orange-400 transform -rotate-12" />
                 <PawIcon className="w-12 h-12 text-orange-400 ml-20 mt-4 transform rotate-6" />
                 <PawIcon className="w-8 h-8 text-orange-400 ml-8 mt-8 transform -rotate-12" />
            </div>

            {/* Decorative Paws with Hearts - Bottom Right */}
            <div className="absolute bottom-0 right-0 opacity-50 hidden lg:block">
                <div className="flex items-end">
                    <PawWithHearts />
                </div>
            </div>

            <div className="container mx-auto max-w-5xl px-8 z-10 relative">
                <div className="text-center mb-16">
                     <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-orange-500 font-semibold">We Love Your Pets</span>
                        <PawIcon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        We're excited to hear from you and let's start something special together, call us for any inquiry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                            <PhoneIcon />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600">+52(8) 656-7592</p>
                        <p className="text-gray-600">+55(8) 656-7591</p>
                    </div>
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                            <EmailIcon />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">info@petzorg.com</p>
                        <p className="text-gray-600">info@example.com</p>
                    </div>
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                            <AddressIcon />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Address</h3>
                        <p className="text-gray-600">2321 Colorado Avenue, 5th Floor Santa Monica</p>
                        <p className="text-gray-600">California, USA</p>
                    </div>
                </div>

                <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-100">
                     <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Name *" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
                            <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
                            <input type="email" placeholder="Email *" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
                            <input type="text" placeholder="Subject *" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
                        </div>
                        <div className="mt-6">
                            <textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"></textarea>
                        </div>
                        <div className="text-center mt-8">
                            <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

const PawWithHearts = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" className="transform scale-75 origin-bottom-right">
        <g fill="#D1D5DB">
            {/* Paw 1 */}
            <circle cx="50" cy="150" r="15" />
            <ellipse cx="50" cy="120" rx="25" ry="20" />
            <circle cx="20" cy="110" r="8" />
            <circle cx="35" cy="95" r="8" />
            <circle cx="65" cy="95" r="8" />
            <circle cx="80" cy="110" r="8" />

            {/* Paw 2 */}
            <circle cx="120" cy="160" r="15" />
            <ellipse cx="120" cy="130" rx="25" ry="20" />
            <circle cx="90" cy="120" r="8" />
            <circle cx="105" cy="105" r="8" />
            <circle cx="135" cy="105" r="8" />
            <circle cx="150" cy="120" r="8" />
        </g>
        {/* Hearts */}
        <g fill="#FCA5A5">
            <path d="M60 70 a 10 10 0 0 1 20 0 q 0 10 -10 20 q -10 -10 -10 -20" />
            <path d="M140 80 a 10 10 0 0 1 20 0 q 0 10 -10 20 q -10 -10 -10 -20" transform="rotate(20 150 90)" />
             <path d="M100 60 a 8 8 0 0 1 16 0 q 0 8 -8 16 q -8 -8 -8 -16" transform="rotate(-15 108 68)" />
        </g>
    </svg>
)


export default ContactSection;
