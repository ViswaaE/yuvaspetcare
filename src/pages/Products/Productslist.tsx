// components/ProductGrid.tsx

import Image from 'next/image';

// Define the type for a single product for type safety
type Product = {
  id: number;
  name: string;
  price: number;
  salePrice?: number; // Optional property for items on sale
  imageUrl: string;
};

// --- Dummy Product Data ---
// In a real application, you would fetch this data from an API.
const products: Product[] = [
  { id: 1, name: 'Canine Bone Meals', price: 20.00, salePrice: 18.00, imageUrl: '/images/bone-treats.png' },
  { id: 2, name: 'Cutipet Toys', price: 15.00, imageUrl: '/images/dumbbell-toy.png' },
  { id: 3, name: 'Cutipets', price: 70.00, salePrice: 65.00, imageUrl: '/images/pet-carrier.png' },
  { id: 4, name: 'Dog Balls Toy', price: 90.00, salePrice: 85.00, imageUrl: '/images/ball-toy.png' },
  { id: 5, name: 'Elegant Pet Food', price: 25.00, imageUrl: '/images/pet-food-bowl.png' },
  { id: 6, name: 'Healthy Pet Treats', price: 22.00, salePrice: 19.00, imageUrl: '/images/blurry-treats.png' },
  { id: 7, name: 'Mouse & Ball Toy', price: 18.00, salePrice: 15.00, imageUrl: '/images/mouse-toy.png' },
  { id: 8, name: 'Natural Gnaw Bone', price: 12.00, imageUrl: '/images/gnaw-bone.png' },
];

// == INDIVIDUAL PRODUCT CARD COMPONENT ==
// Best practice: Place this in its own file, e.g., 'components/ProductCard.tsx'

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const isSale = !!product.salePrice;

  return (
    <div className="group relative text-center border border-gray-200 rounded-lg p-4 transition-shadow duration-300 hover:shadow-xl">
      <div className="relative bg-gray-50 rounded-md">
        {/* Sale Badge */}
        {isSale && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            Sale!
          </div>
        )}

        {/* Product Image */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={250}
          height={250}
          className="mx-auto transition-opacity duration-300 group-hover:opacity-60"
        />

        {/* Add to Cart Button (visible on hover) */}
        {/* This logic specifically targets the blurred card example from the image */}
        {product.id === 6 && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                    ADD TO CART
                </button>
            </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-2 text-md">
          {isSale ? (
            <>
              <span className="text-gray-400 line-through mr-2">${product.price.toFixed(2)}</span>
              <span className="font-bold text-orange-600">${product.salePrice?.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-bold text-gray-700">${product.price.toFixed(2)}</span>
          )}
        </p>
      </div>
    </div>
  );
}


// == MAIN PRODUCT GRID COMPONENT ==

export default function ProductGrid() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}