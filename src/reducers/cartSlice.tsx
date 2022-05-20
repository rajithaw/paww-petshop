import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface CartState {
    cartOpen: boolean;
}

const initialState: CartState = {
  cartOpen: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
  },
});

export const { openCart, closeCart } = cartSlice.actions;

export const selectCartOpen = (state: RootState) => state.cart.cartOpen;

export default cartSlice.reducer;
