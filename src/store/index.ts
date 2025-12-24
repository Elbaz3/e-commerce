import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import authSlice from "./auth/authSlice";
import wishSlice from "./wishList/wishListSlice";
import placeOrderSlice from "./placeOrder/placeOrderSlice";
import productsSlice from "./products/productsSlice";
import langSlice from "./Language/languageSlice";
import { cartListener } from "./cart/cartListenerMiddleware";

export const store = configureStore({
  reducer: {
    cartReducer,
    authSlice,
    wishSlice,
    placeOrderSlice,
    productsSlice,
    langSlice,
  },
  middleware: (getDefault) => getDefault().prepend(cartListener.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
