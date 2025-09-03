import React from 'react';

// Define the structure for a service item
interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

// Data for the service cards. You can easily add or remove services here.
const servicesData: Service[] = [
  {
    title: 'Pets Surgical Services',
    description: 'We Love to Take Care of Your Pets Caring for pets involves much more than providing...',
    imageUrl: 'https://images.unsplash.com/photo-1599426547883-7872a422055f?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Puppy Wellness Program',
    description: 'We Love to Take Care of Your Pets Caring for pets involves much more than providing...',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Nutritional Counseling',
    description: 'We Love to Take Care of Your Pets Caring for pets involves much more than providing...',
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Dental Care and Clean',
    description: 'We Love to Take Care of Your Pets Caring for pets involves much more than providing...',
    imageUrl: 'https://images.unsplash.com/photo-1598838338783-a7074c3d258b?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Ultrasound Scan Services',
    description: 'We Love to Take Care of Your Pets Caring for pets involves much more than providing...',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-2346040878a2?q=80&w=1770&auto=format&fit=crop',
  },
  {
    title: 'Skin and Ear Cytology',
    description: 'We Love to Take Care of Your Pets Caring for pets involves much more than providing...',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1862&auto=format&fit=crop',
  },
];

// Component for the two-stage bone-shaped hover effect
const ReadMoreButton: React.FC = () => (
  <div className="relative group/button">
    {/* Center rectangle */}
    <div className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full z-10 shadow-lg transition-all duration-300">
      READ MORE
    </div>

    {/* Left side circles */}
    <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 flex flex-col space-y-1 transition-transform duration-300 transform scale-0 group-hover/button:scale-100 origin-right">
      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
    </div>
    
    {/* Right side circles */}
    <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 flex flex-col space-y-1 transition-transform duration-300 transform scale-0 group-hover/button:scale-100 origin-left">
      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
    </div>
  </div>
);

// Define props for the ServiceCard component
interface ServiceCardProps {
  service: Service;
}

// Reusable ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
      <div className="relative">
        <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" />
        {/* Overlay with the button */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-in-out">
            <ReadMoreButton />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
};

// Main OurServices component
const OurServices: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-8 font-sans">
      <div className="container mx-auto">
        {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h2>
            <p className="text-gray-600">Comprehensive care for your beloved pets.</p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

