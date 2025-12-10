import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import wishSlice from "./wishList/wishListSlice";
import placeOrderSlice from "./placeOrder/placeOrderSlice";

const store = configureStore({
  reducer: { state: cartReducer, authSlice, wishSlice, placeOrderSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
