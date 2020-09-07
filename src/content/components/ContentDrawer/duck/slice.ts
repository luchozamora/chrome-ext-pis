import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDrawer, closeDrawer } = slice.actions;

export default slice.reducer;
