import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { bestProducts } from "@util/MocupData";

interface ICartState {
  items: { [key: string]: number };
  fullProductInfo: TProduct[];
  totalPrice: number;
  loading: "idle" | "pending" | "fullfiled" | "failed";
  error: string | null;
}

// Load from localStorage
const saved = JSON.parse(
  localStorage.getItem("cart") || "{}"
) as Partial<ICartState>;

const initialState: ICartState = {
  items: saved.items || {},
  fullProductInfo: bestProducts,
  totalPrice: saved.totalPrice || 0,
  loading: "idle",
  error: null,
};

const save = (state: ICartState) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      items: state.items,
      totalPrice: state.totalPrice,
    })
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;

      if (state.items[id]) {
        state.items[id]++;
        state.totalPrice += price;
        state.error = null;
      } else {
        state.items[id] = 1;
        state.totalPrice += price;
        state.error = null;
      }

      save(state);
    },

    changeQuantity: (state, action) => {
      const { id, price, type } = action.payload;
      const oldQuantity = state.items[id] || 0;
      if (type === "inc") {
        const newQuantity = oldQuantity + 1;

        state.items[id] = newQuantity;
        state.totalPrice += price;
      } else if (type === "dec" && oldQuantity > 1) {
        const newQuantity = oldQuantity - 1;

        state.items[id] = newQuantity;
        state.totalPrice -= price;
      }

      save(state);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const price = state.fullProductInfo.find((el) => el.id === id)?.price;
      const quantity = state.items[id];

      state.totalPrice = state.totalPrice - (price || 0) * quantity;
      delete state.items[id];
      const products = state.fullProductInfo.filter((el) => el.id !== id);
      state.fullProductInfo = products;

      save(state);
    },
    cleanCart: (state) => {
      state.items = {};
      state.totalPrice = 0;

      save(state);
    },
  },
});

export const { addToCart, changeQuantity, deleteItem, cleanCart } =
  cartSlice.actions;
export default cartSlice.reducer;
