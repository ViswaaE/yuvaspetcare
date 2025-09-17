'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProductDetail } from '@/types';

type ProductGalleryProps = {
  images?: ProductDetail['images']; // optional
};

// SVG for the zoom icon
const ZoomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default function ProductGallery({ images }: ProductGalleryProps) {
  const hasImages = images && images.length > 0;
  const [selectedImage, setSelectedImage] = useState(
    hasImages ? images[0] : null
  );

  if (!hasImages || !selectedImage) {
    return (
      <div className="w-full p-6 text-center text-gray-500 border border-gray-300 rounded-lg">
        No product images available.
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`p-1 border-2 rounded-lg ${selectedImage.id === image.id
                ? 'border-emerald-500'
                : 'border-transparent'
              }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 border-2 border-emerald-500 rounded-xl p-4">
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt}
          width={500}
          height={500}
          className="w-full h-auto object-contain rounded-lg"
        />
        <button className="absolute top-4 right-4 text-blue-600 hover:text-black">
          <ZoomIcon />
        </button>
      </div>
    </div>
  );
}
