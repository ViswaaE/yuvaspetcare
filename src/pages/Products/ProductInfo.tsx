'use client';

import { useState } from 'react';
import { ProductDetail } from '@/types';

type ProductInfoProps = {
  product: ProductDetail;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
      
      {/* Price */}
      <p className="text-3xl mb-4">
        {product.salePrice ? (
          <>
            <span className="text-gray-400 line-through mr-3">${product.price.toFixed(2)}</span>
            <span className="font-bold text-orange-600">${product.salePrice.toFixed(2)}</span>
          </>
        ) : (
          <span className="font-bold text-gray-800">${product.price.toFixed(2)}</span>
        )}
      </p>

      {/* Short Description */}
      <p className="text-gray-600 mb-6">{product.shortDescription}</p>

      {/* Highlights */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Highlights:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {product.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      <hr className="my-6"/>

      {/* Add to Cart Section */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-20 p-3 border border-gray-300 rounded-md text-center"
          min="1"
        />
        <button className="flex-1 bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors">
          ADD TO CART
        </button>
      </div>

      {/* Meta Info */}
      <div className="text-sm text-gray-500">
        <p><strong>SKU:</strong> {product.sku}</p>
        <p><strong>Categories:</strong> {product.categories.join(', ')}</p>
      </div>
    </div>
  );
}