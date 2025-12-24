// src/store/langSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper to get language from cookie
const getLangFromCookie = () => {
  const match = document.cookie.match(/(^| )lang=([^;]+)/);
  return match ? match[2] : "en"; // default to 'en'
};

// Helper to set language in cookie
const setLangCookie = (lang: string) => {
  document.cookie = `lang=${lang}; path=/; max-age=${7 * 24 * 60 * 60}`;
};

const initialState = {
  lang: getLangFromCookie(),
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      setLangCookie(action.payload);
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
