import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactForm = () => {
    return (
        // Added mx-auto to center and px-4 for horizontal padding on mobile
        <div className="w-full mb-5 max-w-6xl mx-auto px-4 mt-16">
            <div className="bg-[#FDF7EE] rounded-3xl p-8 md:p-12">
                <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-[#E58F4C] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                        Contact information
                        <MessageCircle className="w-3 h-3 ml-1.5" />
                    </span>
                </div>
                {/* Made the heading font size responsive */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                    Let's Discuss With Us
                </h2>

                <form action="#" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="Name *"
                                className="w-full px-4 py-3 bg-white rounded-xl border-gray-300 focus:ring-[#E58F4C] focus:border-[#E58F4C] transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Email *"
                                className="w-full px-4 py-3 bg-white rounded-xl border-gray-300 focus:ring-[#E58F4C] focus:border-[#E58F4C] transition"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            placeholder="Message"
                            className="w-full px-4 py-3 bg-white rounded-xl border-gray-300 focus:ring-[#E58F4C] focus:border-[#E58F4C] transition"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#E58F4C] text-white font-semibold rounded-xl hover:bg-orange-500 transition-colors shadow-md"
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;