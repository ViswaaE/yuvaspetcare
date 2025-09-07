// For the main product being displayed on the detail page
export type ProductDetail = {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  images: { id: number; url: string; alt: string }[];
  shortDescription: string;
  highlights: string[];
  sku: string;
  categories: string[];
  longDescription: string;
  additionalInfo: { [key: string]: string };
};

// For the product cards in the "Related products" section
export type Product = {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
};