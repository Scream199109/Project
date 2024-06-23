import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'providers/store-provider/config/StateSchema';
import {CartProduct} from 'services/types/cart';

interface FetchCartByUserProps {
  id: number;
}

export const fetchCartByUser = createAsyncThunk<
  CartProduct,
  FetchCartByUserProps,
  ThunkConfig<string>
>(
  'cart/fetchCartByUser', async (id, thunkApi) => {

    const {rejectWithValue, extra} = thunkApi;

    try {
      const response = await extra.api.get<CartProduct>(`/carts/user/${id}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  });
