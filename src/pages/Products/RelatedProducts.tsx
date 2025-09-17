import { Product } from '@/types';
import ProductCard from '@/components/shared/ProductCard';

type RelatedProductsProps = {
  products?: Product[]; // optional
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) {
    return (
      <div className="mt-16 p-6 text-center text-gray-500 border border-gray-300 rounded-lg">
        No related products available.
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl text-blue-800 font-bold mb-8">Related products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
