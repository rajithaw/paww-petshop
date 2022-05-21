import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./productSlice";
import { RootState } from "./store";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartItems {
  [key: number]: ICartItem;
}

export interface CartState {
  cartOpen: boolean;
  cartItems: ICartItems;
  discount: number;
  salesTaxPercentage: number;
}

const initialState: CartState = {
  cartOpen: false,
  cartItems: {},
  discount: 5,
  salesTaxPercentage: 2,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const cartItems = { ...state.cartItems };
      let cartItem = cartItems[action.payload.id];

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cartItem = {
          product: action.payload,
          quantity: 1,
        };
      }

      cartItems[action.payload.id] = cartItem;
      state.cartItems = cartItems;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cartItems = { ...state.cartItems };
      let cartItem = cartItems[action.payload];

      if (cartItem) {
        cartItem.quantity -= 1;

        if (cartItem.quantity > 0) {
          cartItems[action.payload] = cartItem;
        } else {
          delete cartItems[action.payload];
        }

        state.cartItems = cartItems;
      }
    },
  },
});

export const { openCart, closeCart, addToCart, removeFromCart } =
  cartSlice.actions;

export const selectCartOpen = (state: RootState) => state.cart.cartOpen;

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.cartItems);

export const selectCartSize = (state: RootState) =>
  Object.keys(state.cart.cartItems).length;

export const selectCartSubtotal = (state: RootState) => {
  const cartItems = state.cart.cartItems;
  const result = Object.values(cartItems).reduce(
    (previousValue: number, currentValue: any) => {
      return previousValue + currentValue.product.price * currentValue.quantity;
    },
    0
  );

  return result;
};

export const selectDiscount = (state: RootState) => state.cart.discount;

export const selectCartTotal = (state: RootState) => {
  const subTotal = selectCartSubtotal(state);
  const discount = selectDiscount(state);

  return subTotal - discount + (subTotal * state.cart.salesTaxPercentage) / 100;
};

export default cartSlice.reducer;
