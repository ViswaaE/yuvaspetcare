'use client'
import React from 'react';

// Calendar Icon
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
);

// Comment Icon
const CommentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
);

// Blog Post Data
const blogPosts = [
    {
        imageUrl: "blog-7.webp",
        altText: "A woman and a man training a black dog indoors.",
        date: "September 30, 2024",
        comments: 0,
        title: "Behavior and Training",
        description: "What Every Pet Owner Needs to Know Owning a pet is a rewarding experience, but it also comes with important responsibilities. Whether..."
    },
    {
        imageUrl: "blog-3.webp",
        altText: "A veterinarian examining a beagle with a stethoscope.",
        date: "September 30, 2024",
        comments: 0,
        title: "Insights from the Vet Clinic",
        description: "What Every Pet Owner Needs to Know Owning a pet is a rewarding experience, but it also comes with important responsibilities. Whether..."
    }
];

// Blog Post Card Component
const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => {
    return (
        <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-lg">
            <div className="w-full h-56">
                <img src={post.imageUrl} alt={post.altText} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/d1d5db/374151?text=Blog+Image"; }}/>
            </div>
            <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                    <div className="flex items-center gap-2">
                        <CalendarIcon />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CommentIcon />
                        <span>{post.comments}</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.description}</p>
                <button className="bg-emerald-400 text-blue text-xs font-bold py-2 px-5 rounded-md hover:bg-emerald-500 transition-colors">
                    READ MORE
                </button>
            </div>
        </div>
    );
};


// Main Blog Section Component
const BlogSection = () => {
  return (
    <section className="bg-blue-50 font-sans py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-emerald-500 font-semibold text-sm">Latest News and Updates</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800">
                Current News & Blog Posts
            </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
                <BlogPostCard key={index} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
