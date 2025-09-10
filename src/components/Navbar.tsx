// components/Navbar.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// UPDATED: Imported new icons for the dropdown
import {
    FaChevronDown, FaSearch, FaPaw, FaBars, FaTimes,
    FaStethoscope, FaBriefcaseMedical, FaShoppingBasket
} from 'react-icons/fa';

// --- 1. UPDATED DATA STRUCTURE WITH ICONS ---
const navLinks = [
    { name: 'HOME', href: '/', hasDropdown: false },
    { name: 'ABOUT US', href: '/Aboutus', hasDropdown: false },
    { name: 'PORTFOLIO', href: '/Portfolio', hasDropdown: false },
    {
        name: 'SERVICES',
        href: '/Ourservices',
        hasDropdown: true,
        dropdownItems: [
            // Each item now has an icon property
            { name: 'Diseases', href: '/diseases', icon: <FaStethoscope /> },
            { name: 'Veterinary Care', href: '/Veterinary-Care', icon: <FaBriefcaseMedical /> },
            { name: 'Products', href: '/Products', icon: <FaShoppingBasket /> },
        ]
    },
    { name: 'BLOG', href: '#', hasDropdown: false },
    { name: 'CONTACT US', href: '/ContactUs', hasDropdown: false },
];

// Reusable components (no changes here)
const Logo = () => (
    <Link href="/" className="flex items-center ml-14 flex-shrink-0">
        <Image src="/logo1.png" alt="Petzorg Logo" width={80} height={80} />
    </Link>
);

const AppointmentButton = () => (
    <button className="bg-emerald-400 text-white font-bold rounded-full py-3 px-5 flex items-center gap-x-2.5 hover:bg-emerald-500 transition-colors duration-300 whitespace-nowrap">
        <span>APPOINTMENT</span>
        <div className="bg-white text-emerald-400 rounded-full p-1">
            <FaPaw className="text-sm" />
        </div>
    </button>
);


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const handleMobileDropdownToggle = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">

                    <Logo />

                    {/* --- DESKTOP NAVIGATION --- */}
                    <ul className="hidden lg:flex items-center gap-x-8">
                        {navLinks.map((link) => (
                            // --- 2. IMPROVED HOVER ACCESS ---
                            // Added pb-4 (padding-bottom) to create an "invisible bridge" for the cursor,
                            // preventing the dropdown from disappearing accidentally.
                            <li key={link.name} className="relative group pb-4 -mb-4">
                                <Link
                                    href={link.href}
                                    className="flex items-center font-semibold text-black-700 transition-colors duration-300 hover:text-emerald-500"
                                >
                                    {link.name}
                                    {link.hasDropdown && <FaChevronDown className="ml-1.5 text-xs" />}
                                </Link>

                                {/* Desktop Dropdown Menu with Icons */}
                                {link.hasDropdown && link.dropdownItems && (
                                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-4 py-2 w-52 z-10">
                                        {link.dropdownItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center gap-x-3 px-4 py-2 text-sm text-black-700 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                                            >
                                                <span className="text-emerald-500">{item.icon}</span>
                                                <span>{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-x-6">
                        <FaSearch className="text-black-600 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
                        <AppointmentButton />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="text-2xl text-black-700" />
                            ) : (
                                <FaBars className="text-2xl text-black-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU WITH ICONS --- */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-black-200">
                    <ul className="flex flex-col px-4">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-black-100">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => handleMobileDropdownToggle(link.name)}
                                            className="py-3 w-full flex justify-between items-center text-black-700 font-medium hover:text-emerald-500"
                                        >
                                            {link.name}
                                            <FaChevronDown className={`text-xs transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                        </button>

                                        {openDropdown === link.name && link.dropdownItems && (
                                            <div className="pb-2 pl-4">
                                                {link.dropdownItems.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center gap-x-3 py-2 text-black-600 hover:text-emerald-500"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <span className="text-emerald-500">{item.icon}</span>
                                                        <span>{item.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link href={link.href} className="py-3 block text-black-700 font-medium hover:text-emerald-500">
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className='p-4 border-t border-black-100'>
                        <AppointmentButton />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;