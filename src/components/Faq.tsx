'use client'
import React, { useState } from 'react';

// Define the type for each FAQ item for type safety
type FaqItem = {
  question: string;
  answer: string;
};

// FAQ data array
const faqData: FaqItem[] = [
  {
    question: 'What are your operating hours?',
    answer: 'Our clinic is open from 9:00 AM to 6:00 PM, Monday to Friday, and from 10:00 AM to 4:00 PM on Saturdays. We are closed on Sundays.',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide 24/7 emergency services for our registered clients. Please call our emergency hotline for immediate assistance.',
  },
  {
    question: 'What types of pets do you treat?',
    answer: 'We primarily treat cats and dogs, but we also have veterinarians experienced with small mammals like rabbits, guinea pigs, and hamsters.',
  },
  {
    question: 'Do you provide boarding services?',
    answer: 'Yes, we offer comfortable and safe boarding services for both cats and dogs. Our facilities are climate-controlled and monitored 24/7.',
  },
  {
    question: 'How can I prepare my pet for their visit?',
    answer: 'For a smooth visit, please bring your pet on a leash or in a carrier. It is also helpful to bring any previous medical records and a list of current medications.',
  },
  {
    question: 'How often should my pet have a check-up?',
    answer: 'We recommend annual wellness check-ups for most pets. Senior pets or those with chronic conditions may require more frequent visits, as advised by our veterinarians.',
  },
];

// AccordionItem component
const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <span className="text-md font-medium text-gray-700">{item.question}</span>
        <span className="text-xl text-gray-500 transform transition-transform duration-300">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8m-4-4v8"/></svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="mt-2 text-gray-600 pr-8">{item.answer}</p>
      </div>
    </div>
  );
};


// Main FAQ Component
const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans p-8 lg:p-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Section */}
          <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-4">
                <span className="text-emerald-500 font-semibold text-sm">Feel free to ask details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
             </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
              Frequently Asked
              <br />
              Questions
            </h1>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl transform -rotate-3">
               <img
                src="/faq.webp"
                alt="A veterinarian with a golden retriever on an examination table, with the owner looking on."
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400/d1d5db/374151?text=Vet+Visit";
                  e.currentTarget.alt = "Placeholder image of a vet visit";
                }}
              />
            </div>
          </div>

          {/* Right Section - Accordion */}
          <div className="mt-8 lg:mt-16">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
