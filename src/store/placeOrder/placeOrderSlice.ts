import type { TOrder } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface IPlaceOrder {
  orderList: TOrder[];
  loading: "idle" | "pending" | "fullfiled" | "failed";
  error: string | null;
}

const initialState: IPlaceOrder = {
  orderList: [],
  loading: "idle",
  error: null,
};

const placeOrderSlice = createSlice({
  name: "placeOrder",
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.loading = "idle";
      state.error = null;
    },
  },
});

export const { resetOrderState } = placeOrderSlice.actions;
export default placeOrderSlice.reducer;
