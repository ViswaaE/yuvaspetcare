// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPaw, FaStar } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi'; // An icon for the desktop button

const HeroSection = () => {
    return (
        <section className="relative w-full h-[85vh] md:h-screen text-white">
            {/* Background Image using next/image for optimization */}
            {/* --- Mobile Image --- */}
            {/* This image is visible by default and gets hidden on medium screens and larger (md:hidden) */}
            <Image
                src="/heroimg.png" // <-- Your image optimized for mobile
                alt="A cute puppy being held"
                layout="fill"
                objectFit="cover"
                quality={85}
                className="brightness-100 md:hidden" // Toggles visibility
            />

            {/* --- Desktop Image --- */}
            {/* This image is hidden by default and becomes visible on medium screens and larger (md:block) */}
            <Image
                src="/heroimg.png" // <-- Your original image for desktop
                alt="A cute puppy being held"
                layout="fill"
                objectFit="cover"
                quality={85}
                className="brightness-100 hidden md:block" // Toggles visibility
            />

            {/* Content Container */}
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left">
                <div className="max-w-xl">

                    {/* "Welcome" Tag - Switches between mobile and desktop styles */}
                    <div className="mb-4">
                        {/* Mobile Version (Visible by default, hidden on medium screens up) */}
                        <div className="md:hidden flex flex-col items-center">
                            <div className="bg-white/20 p-2 rounded-full mb-2">
                                <FaPaw className="text-emerald-400 text-xl" />
                            </div>
                            <p className="font-semibold text-emerald-400">Welcome to Petzorg</p>
                        </div>
                        {/* Desktop Version (Hidden by default, visible on medium screens up) */}
                        <div className="hidden md:inline-block bg-white/10 text-emerald-400 text-sm font-semibold px-4 py-1 rounded-md">
                            Welcome to Petzorg
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Taking Care of Pets as if they were Our Own
                    </h1>

                    {/* "Contact Us" Button - Switches between mobile and desktop styles */}
                    <div className="mt-8">
                        {/* Mobile Version */}
                        <Link href="/contact" passHref>
                            <button className="md:hidden bg-emerald-500 text-white font-bold rounded-full py-3 px-6 flex items-center gap-x-3 hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
                                <span>CONTACT US</span>
                                <div className="bg-white text-emerald-500 rounded-full p-1.5">
                                    <FaPaw className="text-md" />
                                </div>
                            </button>
                        </Link>
                        {/* Desktop Version */}
                        <Link href="/contact" passHref>
                            <button className="hidden md:flex items-center gap-x-3 bg-zinc-800/50 border border-zinc-600 rounded-full px-5 py-2 text-sm font-semibold hover:bg-zinc-700 transition-colors">
                                CONTACT US
                                <FiArrowRight className="bg-white/20 rounded-full p-1 text-2xl" />
                            </button>
                        </Link>
                    </div>

                    {/* Rating Section */}
                    <div className="mt-10 flex items-center justify-center md:justify-start gap-x-4">
                        <div className="flex -space-x-4">
                            <Image src="/image1.jpg" alt="Reviewer 1" width={48} height={48} className="rounded-full border-2 border-white" />
                            <Image src="/image1.png" alt="Reviewer 2" width={48} height={48} className="rounded-full border-2 border-white" />
                            <Image src="/image1.png" alt="Reviewer 3" width={48} height={48} className="rounded-full border-2 border-white" />
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-x-1.5">
                                <p className="font-bold text-lg">4.9</p>
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p className="text-gray-300 text-sm">41k reviews</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;