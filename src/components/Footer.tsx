// components/Footer.tsx
import React from 'react';
import { FaPaperPlane, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

// Data for links to keep the component clean
const serviceLinks = [
  'Skilled Pet Grooming',
  'Dog Training Programs',
  'Veterinary Services',
  'Pet Adoption Events',
  'Boarding & Daycare',
  'Nutritional Counseling',
];

const quickLinks = [
  'About Us',
  'Our Team',
  'Portfolio',
  'Careers',
  'Testimonials',
  'Contact Us',
];

const openingHours = [
  { day: 'Mon - Tues', time: '08:00AM - 06:00PM' },
  { day: 'Wed - Thurs', time: '09:00AM - 05:00PM' },
  { day: 'Fri - Sat', time: '10:00AM - 04:00PM' },
  { day: 'Sunday', time: 'Closed' },
];

const Footer = () => {
  // Reusable component for list items to avoid repetition
  const ListLink = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-center mb-2">
      <span className="bg-orange-500 rounded-full w-1.5 h-1.5 block mr-3 flex-shrink-0"></span>
      <a href="#" className="hover:text-white transition-colors duration-300">
        {children}
      </a>
    </li>
  );

  return (
    <footer className="bg-[#2A2A2A] text-gray-400 pt-20 pb-8 font-sans">
      <div className="container mx-auto px-4">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: About & Newsletter */}
          <div>
            <h2 className="text-white text-3xl font-extrabold mb-2 tracking-wide">DRVETS</h2>
            <p className="text-sm mb-6 leading-relaxed">
              Where every wag, purr, and chirp matters. We provide compassionate, expert care to ensure your beloved pets live their happiest, healthiest lives.
            </p>
            <form className="relative mt-4">
              <input 
                type="email" 
                placeholder="Your Email Address"
                className="bg-zinc-700/50 border border-zinc-600 rounded-full w-full py-3 pl-5 pr-14 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button 
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2.5 hover:bg-orange-600 transition-colors duration-300"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Column 2: Our Service */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Our Service</h3>
            <ul>
              {serviceLinks.map(link => <ListLink key={link}>{link}</ListLink>)}
            </ul>
          </div>

          {/* Column 3: Quicklinks */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Quicklinks</h3>
            <ul>
              {quickLinks.map(link => <ListLink key={link}>{link}</ListLink>)}
            </ul>
          </div>
          
          {/* Column 4: Opening Hour */}
          <div className="relative">
             <h3 className="text-white text-xl font-bold mb-5">Opening Hour</h3>
             <ul>
                {openingHours.map(item => (
                  <li key={item.day} className="flex justify-between items-center text-sm border-b border-dashed border-zinc-700 py-2">
                    <span>{item.day}</span>
                    <span className="text-gray-300">{item.time}</span>
                  </li>
                ))}
             </ul>
             {/* Decorative Image */}
             <div className="absolute -bottom-12 -right-4 hidden lg:block">
                <Image src="/footer-pets.svg" alt="Pet illustration" width={150} height={150} className="opacity-50" />
             </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-16 pt-6 border-t border-zinc-700 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">&copy; Copyright 2024. All Rights Reserved. Designed by Petzorg.</p>
          <div className="flex items-center gap-x-3">
            <a href="#" aria-label="Facebook" className="bg-orange-500/80 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-orange-500 transition-colors"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="bg-orange-500/80 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-orange-500 transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="bg-orange-500/80 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-orange-500 transition-colors"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;