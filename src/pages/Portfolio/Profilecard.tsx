import React from 'react';
import { Mail, Phone, Link, User, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const PawIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-20 h-20 text-emerald-300"
    >
        <path
            fillRule="evenodd"
            d="M11.234 2.632c.11-.19.333-.264.53-.186.196.077.304.28.275.485l-.52 3.513a1.5 1.5 0 00.564 1.482 1.5 1.5 0 001.996-.2L15.9 5.86a.5.5 0 01.766.088l.74 1.287a.5.5 0 01-.1.7l-2.01 1.16a1.5 1.5 0 00-.73 1.956l1.24 2.148a1.5 1.5 0 002.396.69l2.85-1.645a.5.5 0 01.62.53l-.22 1.34a.5.5 0 01-.61.39l-2.7-.45a1.5 1.5 0 00-1.55.51l-1.38 1.84a1.5 1.5 0 00.32 2.1l3.52 2.72a.5.5 0 01.04.75l-1.12 1.34a.5.5 0 01-.73.08l-3.2-2.4a1.5 1.5 0 00-1.88.16l-.66.66a1.5 1.5 0 00-2.12 0l-.66-.66a1.5 1.5 0 00-1.88-.16l-3.2 2.4a.5.5 0 01-.73-.08l-1.12-1.34a.5.5 0 01.04-.75l3.52-2.72a1.5 1.5 0 00.32-2.1l-1.38-1.84a1.5 1.5 0 00-1.55-.51l-2.7.45a.5.5 0 01-.61-.39l-.22-1.34a.5.5 0 01.62-.53l2.85 1.645a1.5 1.5 0 002.396-.69l1.24-2.148a1.5 1.5 0 00-.73-1.956l-2.01-1.16a.5.5 0 01-.1-.7l.74-1.287a.5.5 0 01.766-.088l1.812 1.868a1.5 1.5 0 001.996.2 1.5 1.5 0 00.564-1.482l-.52-3.513c-.03-.205.08-.408.275-.485z"
            clipRule="evenodd"
        />
        <path d="M12 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path fillRule="evenodd" d="M12.012 11.02a1.505 1.505 0 01.445 1.138 1.5 1.5 0 01-2.92 0c.01-.41.188-.795.446-1.138a3.732 3.732 0 012.029 0z" clipRule="evenodd" />
    </svg>
);


const VeterinaryDoctorProfile = () => {
    return (
        <div className=" min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="relative w-full max-w-6xl">
                {/* Bone shape background */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3/4 bg-[#FDF7EE] rounded-[150px] hidden md:block"></div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3/4 bg-[#FDF7EE] rounded-[150px] hidden md:block"></div>

                {/* Card content for responsiveness */}
                <div className="relative bg-[#FDF7EE] md:bg-transparent rounded-3xl p-6 md:p-12 shadow-lg md:shadow-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

                        <div className="lg:col-span-1 flex justify-center">
                            <img
                                src="https://placehold.co/400x500/f0e6da/333333?text=Veterinary+Doctor&font=lora"
                                alt="Veterinary Doctor"
                                className="rounded-3xl object-cover w-full max-w-sm"
                            />
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <h1 className="text-4xl lg:text-5xl font-semibold text-blue-500">
                                Veterinary Doctor
                            </h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-emerald-100 p-2 rounded-full">
                                            <Mail className="text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <a href="mailto:tomasfinn@petzorg.com" className="hover:text-emerald-500">
                                                tomasfinn@petzorg.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-emerald-100 p-2 rounded-full">
                                            <Link className="text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Website</p>
                                            <a href="https://zozothemes.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
                                                https://zozothemes.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-emerald-100 p-2 rounded-full">
                                            <Phone className="text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <p>+(528) 456-7598</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-emerald-100 p-2 rounded-full">
                                            <User className="text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Experience</p>
                                            <p>More Than 5+ Years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center space-x-3">
                                    <a href="#" className="bg-emerald-100 p-3 rounded-full hover:bg-emerald-200 transition-colors">
                                        <Facebook className="text-emerald-500 w-5 h-5" />
                                    </a>
                                    <a href="#" className="bg-emerald-100 p-3 rounded-full hover:bg-emerald-200 transition-colors">
                                        <Twitter className="text-emerald-500 w-5 h-5" />
                                    </a>
                                    <a href="#" className="bg-emerald-100 p-3 rounded-full hover:bg-emerald-200 transition-colors">
                                        <Instagram className="text-emerald-500 w-5 h-5" />
                                    </a>
                                    <a href="#" className="bg-emerald-100 p-3 rounded-full hover:bg-emerald-200 transition-colors">
                                        <Linkedin className="text-emerald-500 w-5 h-5" />
                                    </a>
                                </div>

                                <div className="hidden sm:block">
                                    <PawIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VeterinaryDoctorProfile;
