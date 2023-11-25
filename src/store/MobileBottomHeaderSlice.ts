import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileBottomHeaderIsVisible: false,
};

export const mobileBottomHeader = createSlice({
  name: "mobileBottomHeader",
  initialState,
  reducers: {
    setMobileBottomHeaderIsVisible: (state) => {
      state.mobileBottomHeaderIsVisible = !state.mobileBottomHeaderIsVisible;
    },
  },
});

export const { setMobileBottomHeaderIsVisible } = mobileBottomHeader.actions;

export default mobileBottomHeader.reducer;
