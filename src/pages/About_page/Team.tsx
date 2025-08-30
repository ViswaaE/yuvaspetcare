"use client";
import React from 'react';

// Social Media Icon Components
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 group-hover:text-white transition-colors"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H8.313v-2.782h2.125v-2.12c0-2.102 1.25-3.245 3.162-3.245.898 0 1.67.067 1.895.097v2.479h-1.46c-1.018 0-1.217.485-1.217 1.196v1.565h2.773l-.36 2.782h-2.413v7.008C18.343 21.128 22 16.991 22 12z"></path></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 group-hover:text-white transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-white transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 group-hover:text-white transition-colors"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
);

const PawIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 9.5 12 9.5z"/>
    </svg>
);

// Team data
const teamMembers = [
    { name: 'Selena Gomez', role: 'Care Taker', imageUrl: 'https://images.unsplash.com/photo-1548595358-9011f2a0e2a9?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Jane Doe', role: 'Veterinarian', imageUrl: 'https://images.unsplash.com/photo-1583324113626-4e091a7f7961?q=80&w=1887&auto=format&fit=crop' },
    { name: 'John Smith', role: 'Groomer', imageUrl: 'https://images.unsplash.com/photo-1622271811805-452405387431?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Emily White', role: 'Trainer', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop' },
    { name: 'Michael Brown', role: 'Boarding Specialist', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
    { name: 'Jessica Green', role: 'Receptionist', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
];

// TeamMemberCard Component
const TeamMemberCard = ({ name, role, imageUrl }: { name: string, role: string, imageUrl: string }) => (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
        <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x600/fdf9f4/4a4a4a?text=Image+Error'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-orange-400">{name}</h3>
            <p className="text-white text-sm mb-4">{role}</p>
            <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-opacity-90 transition-opacity"><FacebookIcon /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-opacity-90 transition-opacity"><TwitterIcon /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-opacity-90 transition-opacity"><InstagramIcon /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-opacity-90 transition-opacity"><LinkedInIcon /></a>
            </div>
        </div>
    </div>
);


// Main TeamSection Component
const TeamSection = () => {
    return (
        <section className="bg-[#fdf9f4] py-20 font-sans">
            <div className="container mx-auto max-w-7xl px-8">
                <div className="text-center mb-12">
                     <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-orange-500 font-semibold">Our Specialists</span>
                         <PawIcon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Meet Our Experience Pet Care Team
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard 
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
