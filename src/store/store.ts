import { configureStore } from "@reduxjs/toolkit";
import MobileBottomHeaderSlice from "./MobileBottomHeaderSlice";
import LanguageAndCurrencySlice from "./LanguageAndCurrencySlice";

export const store = configureStore({
  reducer: {
    mobileBottomHeader: MobileBottomHeaderSlice,
    languageAndCurrency: LanguageAndCurrencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
