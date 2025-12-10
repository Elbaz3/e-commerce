import { createSlice } from "@reduxjs/toolkit";

interface IauthState {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  accessToken: string | null;
  loading: "idle" | "pending" | "fullfiled" | "failed";
  error: string | null;
}

const initialState: IauthState = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
  },
  accessToken: "",
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUi: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    authLogout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { resetUi, authLogout } = authSlice.actions;
export default authSlice.reducer;
