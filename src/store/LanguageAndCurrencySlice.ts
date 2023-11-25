import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "ka",
  currency: "USD",
};

export const languageAndCurrency = createSlice({
  name: "languageAndCurrency",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setCurrency: (state, { payload }) => {
      if (payload === "toggle") {
        if (state.currency === "USD") {
          state.currency = "GEL";
        } else {
          state.currency = "USD";
        }
      } else {
        state.currency = payload;
      }
    },
  },
});

export const { setLanguage, setCurrency } = languageAndCurrency.actions;

export default languageAndCurrency.reducer;
