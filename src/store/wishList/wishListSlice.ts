import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { bestProducts } from "@util/MocupData";

interface IWishList {
  itemsId: number[];
  productsFullInfo: TProduct[];
  loading: "idle" | "pending" | "fullfiled" | "failed";
  error: string | null;
}

const saved = JSON.parse(
  localStorage.getItem("wishList") || "{}"
) as Partial<IWishList>;

const initialState: IWishList = {
  itemsId: saved.itemsId || [],
  productsFullInfo: bestProducts,
  loading: "idle",
  error: null,
};

const save = (state: IWishList) => {
  localStorage.setItem(
    "wishList",
    JSON.stringify({
      itemsId: state.itemsId,
    })
  );
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    toggleWishList: (state, action) => {
      const id = action.payload;
      state.itemsId = state.itemsId.includes(id)
        ? state.itemsId.filter((item) => item !== id)
        : [...state.itemsId, id];

      save(state);
    },
    wishListCleanup: (state) => {
      state.productsFullInfo = [];

      save(state);
    },
  },
});

export const { wishListCleanup, toggleWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
