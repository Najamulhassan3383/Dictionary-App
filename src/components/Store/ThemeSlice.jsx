import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "black",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
