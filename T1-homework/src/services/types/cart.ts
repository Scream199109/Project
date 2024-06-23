import {Product} from "pages/product-page/types/product.types";

export interface CartProduct extends Product {
  carts?: Cart[];
  total?: number;
  limit?: number;
  skip?: number;
  quantity?: number;
}

export interface Cart {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
