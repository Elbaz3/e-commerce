import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import wishSlice from "./wishList/wishListSlice";
import placeOrderSlice from "./placeOrder/placeOrderSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    authSlice,
    wishSlice,
    placeOrderSlice,
    productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
