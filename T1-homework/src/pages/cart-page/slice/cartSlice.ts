import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {fetchCartByUser} from "services/cart/fetchCartByUser";
import {CartProduct} from "services/types/cart";
import {CartDetailsSchema} from "../types/cartDetailsSchema";

const initialState: CartDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartByUser.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCartByUser.fulfilled,
        (state, action: PayloadAction<CartProduct>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchCartByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
})

export const {actions: cartActions} = cartSlice;
export const {reducer: cartReducer} = cartSlice;
