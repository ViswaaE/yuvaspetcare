import ProductGallery from "@/pages/Products/ProductGallery";
import ProductInfo from "@/pages/Products/ProductInfo";
import ProductTabs from "@/pages/Products/ProductTabs";
import RelatedProducts from "@/pages/Products/RelatedProducts";
import { Product, ProductDetail } from "@/types";

// --- DUMMY DATA ---
// Replace this with an actual API call in a real application
const productData: ProductDetail = {
  id: 'plaid-pet-bed-01',
  name: 'Plaid Comfort Pet Bed',
  price: 20.00,
  salePrice: 18.00,
  images: [
    { id: 1, url: '/images/products/bed-main.png', alt: 'Main view of the plaid pet bed' },
    { id: 2, url: '/images/products/bone-thumb.png', alt: 'Bone toy' },
    { id: 3, url: '/images/products/ball-thumb.png', alt: 'Ball toy' },
    { id: 4, url: '/images/products/bowl-thumb.png', alt: 'Food bowl' },
    { id: 5, url: '/images/products/treat-thumb.png', alt: 'Pet treat' },
  ],
  shortDescription: 'Regular grooming with our ergonomic brushes and combs reduces shedding and matting while stimulating natural oils for a shiny coat. Suitable for pets with all fur types, these tools make grooming easy and enjoyable.',
  highlights: [
    'High-Quality Pet Food',
    'Health Supplements',
    'Pet Toys & Enrichment',
    'Pet Health Care Products',
    'Comfortable Carriers',
  ],
  sku: 'Woo-beanie-logo',
  categories: ['Cat Food', 'Dog Product'],
  longDescription: 'Our pet food is crafted with premium, human-grade ingredients to support your pet\'s optimal health. Each recipe is balanced with essential nutrients and tailored to meet the specific needs of different life stages and breeds, ensuring your pet receives the best nutrition.',
  additionalInfo: {
    Weight: '2.5 kg',
    Dimensions: '50 × 50 × 15 cm',
    Materials: 'Cotton, Polyester fill',
    Color: 'Yellow & Black Plaid',
  }
};

const relatedProductsData: Product[] = [
    { id: 1, name: 'Pole Cat Toy', price: 45.00, imageUrl: '/images/related/pole-toy.png' },
    { id: 2, name: 'Monthly pet crate', price: 240.00, salePrice: 230.00, imageUrl: '/images/related/crate-toy.png' },
    { id: 3, name: 'Multi Grain Blends', price: 15.00, imageUrl: '/images/related/gnaw-bone.png' },
    { id: 4, name: 'Soft Round Shape Bed', price: 20.00, imageUrl: '/images/related/dog-in-bed.png' },
];
// --- END OF DUMMY DATA ---


// The page component
export default function ProductPage({ params }: { params: { slug: string } }) {
  // In a real app, you would use params.slug to fetch data
  // e.g., const productData = await getProductBySlug(params.slug);

  return (
    <div className="bg-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section: Gallery and Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery images={productData.images} />
          <ProductInfo product={productData} />
        </section>

        {/* Middle section: Description Tabs */}
        <section className="mb-16">
          <ProductTabs 
            description={productData.longDescription} 
            additionalInfo={productData.additionalInfo} 
          />
        </section>

        {/* Bottom section: Related Products */}
        <section>
          <RelatedProducts products={relatedProductsData} />
        </section>
      </main>
    </div>
  );
}