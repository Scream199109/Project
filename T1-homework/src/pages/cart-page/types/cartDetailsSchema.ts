import {CartProduct} from "services/types/cart";

export interface CartDetailsSchema {
  isLoading: boolean;
  error?: string | unknown;
  data?: CartProduct;
}
