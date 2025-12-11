import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { bestProducts } from "@util/MocupData";

const products = bestProducts;

interface IProductsState {
  products: TProduct[];
  loading: "idle" | "pending" | "fullfiled" | "failed";
  error: string | null;
}

const initialState: IProductsState = {
  products: products,
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanup: (state) => {
      state.products = [];
    },
  },
});

export const { productsCleanup } = productsSlice.actions;
export default productsSlice.reducer;
