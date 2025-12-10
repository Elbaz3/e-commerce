import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface IWishList {
  itemsId: number[];
  productsFullInfo: TProduct[];
  loading: "idle" | "pending" | "fullfiled" | "failed";
  error: string | null;
}

const initialState: IWishList = {
  itemsId: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    wishListCleanup: (state) => {
      state.productsFullInfo = [];
    },
  },
});

export const { wishListCleanup } = wishListSlice.actions;
export default wishListSlice.reducer;
