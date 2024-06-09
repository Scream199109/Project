export interface Product {
  id: string;
  title: string;
  rating?: number;
  base_price: number;
  discount_percentage?: number;
  discount_price?: number;
  stock?: number;
  brand?: string;
  categoty?: string;
  description?: string;
}
