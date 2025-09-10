import Image from 'next/image';
import { Product } from '@/types'; // Assuming types are in @/types

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isSale = !!product.salePrice;

  return (
    <div className="group text-center border border-gray-200 rounded-xl p-4 transition-shadow duration-300 hover:shadow-xl">
      <div className="relative bg-gray-50 rounded-lg overflow-hidden">
        {isSale && (
          <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            Sale!
          </div>
        )}
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="mx-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-2 text-md">
          {isSale ? (
            <>
              <span className="text-gray-400 line-through mr-2">${product.price.toFixed(2)}</span>
              <span className="font-bold text-emerald-600">${product.salePrice?.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-bold text-gray-700">${product.price.toFixed(2)}</span>
          )}
        </p>
      </div>
    </div>
  );
}