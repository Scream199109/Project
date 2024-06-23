import {createAsyncThunk} from '@reduxjs/toolkit';
import {CartProduct} from 'services/types/cart';

export const fetchCartByUser = createAsyncThunk(
  'cart/fetchCartByUser', async (id: number, thunkApi) => {
    const {rejectWithValue} = thunkApi;

    if (!id) {
      throw new Error('');
    }

    try {
      const response = await fetch(`https://dummyjson.com/carts/user/${id}`);
      const data: CartProduct = await response.json();

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  });
