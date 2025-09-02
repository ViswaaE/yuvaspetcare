// components/Navbar.tsx

'use client'; // This directive is needed for state and effects (useState, useEffect)

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaSearch, FaPaw, FaBars, FaTimes } from 'react-icons/fa';

// Data for navigation links (no changes here)
const navLinks = [
    { name: 'HOME', href: '/', hasDropdown: false },
    { name: 'ABOUT US', href: '/Aboutus', hasDropdown: false },
    { name: 'PORTFOLIO', href: '#', hasDropdown: false },
    { name: 'OUR SERVICES', href: '#', hasDropdown: false },
    { name: 'BLOG', href: '#', hasDropdown: false },
    { name: 'CONTACT US', href: '/ContactUs', hasDropdown: false },
];

// Reusable component for the logo (no changes here)
const Logo = () => (
    <Link href="/" className="flex items-center ml-14 flex-shrink-0">
        <Image src="/logo.jpeg" alt="Petzorg Logo" width={80} height={80} />
    </Link>
);

// Reusable component for the main button (no chang es here)
const AppointmentButton = () => (
    <button className="bg-orange-400 text-white font-bold rounded-full py-3 px-5 flex items-center gap-x-2.5 hover:bg-orange-500 transition-colors duration-300 whitespace-nowrap">
        <span>APPOINTMENT</span>
        <div className="bg-white text-orange-400 rounded-full p-1">
            <FaPaw className="text-sm" />
        </div>
    </button>
);


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ENHANCEMENT: Lock body scroll when the mobile menu is open for better UX
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function to ensure scroll is restored if the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">

                    <Logo />

                    {/* --- DESKTOP NAVIGATION --- */}
                    {/* 'hidden' makes this disappear on mobile. 'lg:flex' makes it appear on large screens. */}
                    <ul className="hidden lg:flex items-center gap-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="flex items-center font-semibold text-zinc-700 transition-colors duration-300 hover:text-orange-500"
                                >
                                    {link.name}
                                    {link.hasDropdown && <FaChevronDown className="ml-1.5 text-xs" />}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* --- DESKTOP ACTIONS (Search & Button) --- */}
                    {/* Also hidden on mobile, shown on large screens */}
                    <div className="hidden lg:flex items-center gap-x-6">
                        <FaSearch className="text-zinc-600 text-xl cursor-pointer hover:text-orange-500 transition-colors" />
                        <AppointmentButton />   
                    </div>

                    {/* --- MOBILE MENU BUTTON (Hamburger) --- */}
                    {/* 'lg:hidden' shows this ONLY on screens smaller than large */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="text-2xl text-zinc-700" /> // Close icon
                            ) : (
                                <FaBars className="text-2xl text-zinc-700" /> // Hamburger icon
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU (Dropdown) --- */}
            {/* This entire block is rendered only if 'isMobileMenuOpen' is true */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-zinc-200">
                    <ul className="flex flex-col px-4">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-zinc-100">
                                <Link href={link.href} className="py-3 flex justify-between items-center text-zinc-700 hover:text-orange-500">
                                    {link.name}
                                    {link.hasDropdown && <FaChevronDown className="text-xs" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='p-4 border-t border-zinc-100'>
                        <AppointmentButton />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;