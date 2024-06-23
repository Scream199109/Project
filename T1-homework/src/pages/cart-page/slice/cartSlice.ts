import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {fetchCartAddProduct} from "services/cart/fetchCartAddProduct";
import {fetchCartByUser} from "services/cart/fetchCartByUser";
import {Cart, CartProduct} from "services/types/cart";
import {CartDetailsSchema} from "../types/cartDetailsSchema";

const initialState: CartDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

type PayloadActionAddProduct = PayloadAction<{
  cart?: Cart;
}>

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, {payload: {cart}}: PayloadActionAddProduct) => {
      if (!state.data?.carts || !cart) return;
      state.data.carts = [cart];
    },
    removeProduct: (state, {payload: id}: PayloadAction<number>) => {
      if (!state.data?.carts) return;
      state.data.carts[0].products = state.data.carts[0].products.filter(p => p.id !== id);
    },
    // increseQty: (state, {payload: {productId}}: PayloadActionIncreseQty) => {
    //   if (!state.data?.carts) return;
    //   const product = state.data?.carts[0].products.find(p => p.id === productId);
    //   if (!product || !product.quantity) return;
    //   product.quantity += 1;
    // },
    // decreseQty: (state, {payload: {productId}}: PayloadActionIncreseQty) => {
    //   if (!state.data?.carts) return;
    //   const product = state.data?.carts[0].products.find(p => p.id === productId);
    //   if (!product || !product.quantity) return;
    //   product.quantity -= 1;
    // },

  },
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
    builder
      .addCase(fetchCartAddProduct.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCartAddProduct.fulfilled,
        (state, action: PayloadAction<Cart>) => {
          if (!state.data?.carts || !action.payload) return;

          state.isLoading = false;
          state.data.carts = [action.payload];
        },
      )
      .addCase(fetchCartAddProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
})

export const {actions: cartActions} = cartSlice;
export const {reducer: cartReducer} = cartSlice;
