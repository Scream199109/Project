import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from 'pages/product-page/types/product.types';
import {ThunkConfig} from 'providers/store-provider/config/StateSchema';
import {Cart} from 'services/types/cart';

interface FetchCartAddProduct {
  products: Product[];
  cartId?: number;
}

export const fetchCartAddProduct = createAsyncThunk<
  Cart,
  FetchCartAddProduct,
  ThunkConfig<string>
>(
  'cart/fetchCartAddProduct', async (cartData, thunkApi) => {
    const {rejectWithValue, extra} = thunkApi;
    const {cartId, products} = cartData;

    try {
      const response = await extra.api.put<Cart>(`/carts/${cartId}`, {products});

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  });
