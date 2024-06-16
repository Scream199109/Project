export interface Product {
  id: number;
  title: string;
  rating?: number;
  price: number;
  discountPercentage?: number;
  stock?: number;
  brand?: string;
  category?: string;
  description?: string;
  images?: string[];
  sku?: string;
  thumbnail?: string;
}
