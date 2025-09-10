import React from 'react';

// Paw Icon for "About Us" and buttons
const PawIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 9.5 12 9.5z"/>
    </svg>
);

// Training Icon
const TrainingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 14l-8 8h16l-8-8zM12 2v10"></path>
        <path d="M12 2L8 6"></path>
        <path d="M12 2l4 4"></path>
    </svg>
);

// Boarding Icon
const BoardingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <path d="M9 22V12h6v10"></path>
     </svg>
);

// Veterinary Icon
const VeterinaryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8 8a4 4 0 1 0 8 0V7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1"></path>
        <path d="M16 8a4 4 0 1 0-8 0"></path>
        <path d="M8 17v-5a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v5"></path>
        <circle cx="12" cy="19" r="2"></circle>
    </svg>
);


const RotatingTextCircle = () => (
    <div className="relative w-40 h-40">
        <svg className="w-full h-full animate-spin [animation-duration:15s]" viewBox="0 0 100 100">
            <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#4a4a4a" strokeWidth="1" />
            <text fill="#4a4a4a" fontSize="8" fontWeight="bold" letterSpacing="1.5">
                <textPath href="#circlePath" startOffset="5%">
                    GROOMING • PETS • CARE • FOOD • TRAINING •
                </textPath>
            </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                 <PawIcon className="w-8 h-8 text-emerald-400" />
            </div>
        </div>
    </div>
);


const NutritionServices = () => {
  return (
    <div className="bg-white font-sans">
      <section className="container mx-auto max-w-7xl px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Images and Cards */}
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                    <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop" alt="Woman holding a French Bulldog" className="rounded-2xl object-cover w-full h-64 shadow-md" />
                    <div className="bg-[#fdf9f4] p-6 rounded-2xl shadow-sm text-center">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Personal Care</h3>
                        <p className="text-sm text-gray-600">This is the most common type of veterinary practice.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-10">
                     <div className="bg-[#fdf9f4] p-6 rounded-2xl shadow-sm text-center">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Special Care</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1894&auto=format&fit=crop" alt="Beagle looking at the camera" className="rounded-2xl object-cover w-full h-64 shadow-md" />
                </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col items-start">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="text-emerald-500 font-semibold">About Us</span>
                    <PawIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-4 leading-tight">
                    Making Your Home<br/>Good Nutrition
                </h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    This is the most common type of veterinary practice, focusing on the health and well-being of pets like dogs and cats. Rabbits, guinea pigs, hamsters, ferrets, and other small pets. non-traditional pets such as birds, reptiles, and amphibians.
                </p>
                <div className="flex items-center gap-12">
                     <button className="bg-emerald-400 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-500 transition-all shadow-md flex items-center gap-2">
                        CONTACT US
                        <PawIcon className="w-5 h-5" />
                    </button>
                    <RotatingTextCircle />
                </div>
            </div>
        </div>
      </section>

      {/* Bottom Services Bar */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="#" className="flex items-center justify-center gap-4 bg-[#4a4a4a] text-emerald-500 font-bold px-6 py-4 rounded-full hover:bg-gray-700 transition-colors">
                    <PawIcon className="w-6 h-6 text-white"/>
                    <span>Pet Caring</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-4 bg-[#4a4a4a] text-emerald-500 font-bold px-6 py-4 rounded-full hover:bg-gray-700 transition-colors">
                    <TrainingIcon className="text-white w-6 h-6"/>
                    <span>Pet Training</span>
                </a>
                 <a href="#" className="flex items-center justify-center gap-4 bg-[#4a4a4a] text-emerald-500 font-bold px-6 py-4 rounded-full hover:bg-gray-700 transition-colors">
                    <BoardingIcon className="text-white w-6 h-6"/>
                    <span>Pet Boarding</span>
                </a>
                <a href="#" className="flex items-center justify-center gap-4 bg-[#4a4a4a] text-emerald-500 font-bold px-6 py-4 rounded-full hover:bg-gray-700 transition-colors">
                    <VeterinaryIcon className="text-white w-6 h-6"/>
                    <span>Veterinary</span>
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default NutritionServices;

