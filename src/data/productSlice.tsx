import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getProducts } from "./productApi";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: string;
  image: string;
}

export interface ProductState {
  products: IProduct[];
  status: "success" | "loading" | "failed";
}

const initialState: ProductState = {
  products: [],
  status: "success",
};

export const getProductsAsync = createAsyncThunk(
  "product/getProducts",
  async () => {
    return await getProducts();
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
