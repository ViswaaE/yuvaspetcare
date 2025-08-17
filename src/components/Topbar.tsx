// components/TopBar.tsx

import type { IconType } from "react-icons"; // Import the IconType for type safety
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Define props for the SocialLink component
interface SocialLinkProps {
  href: string;
  icon: IconType;
}

// Reusable component for social media links with typed props
const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#212121] rounded-full p-2 text-xs hover:bg-orange-500 hover:text-white transition-colors duration-300"
  >
    <Icon />
  </a>
);

// Define props for the InfoItem component
interface InfoItemProps {
  icon: IconType;
  text: string;
}

// Reusable component for contact info items with typed props
const InfoItem = ({ icon: Icon, text }: InfoItemProps) => (
  <div className="flex items-center gap-x-2">
    <Icon className="text-orange-500" />
    <span>{text}</span>
  </div>
);

const TopBar = () => {
  return (
    <header className="bg-[#212121] md:block hidden text-gray-300 text-sm font-light">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-3">
          {/* Left Section: Address & Hours */}
          <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2">
            <InfoItem icon={FaMapMarkerAlt} text="4th, Velca Street, USA" />
            <InfoItem
              icon={FaClock}
              text="Mon - Sun: 9:00 am - 9:00 pm"
            />
          </div>

          {/* Right Section: Email & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-3">
            <InfoItem icon={FaEnvelope} text="info@cyboxo.com" />

            {/* Social Icons */}
            <div className="flex items-center gap-x-3">
              <SocialLink href="https://facebook.com" icon={FaFacebookF} />
              <SocialLink href="https://instagram.com" icon={FaInstagram} />
              <SocialLink href="https://pinterest.com" icon={FaPinterestP} />
              <SocialLink href="https://twitter.com" icon={FaXTwitter} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;