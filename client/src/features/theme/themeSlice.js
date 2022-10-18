import { createSlice } from "@reduxjs/toolkit";
//change from string to boolan
const isTrueSet = (myValue) => myValue === "true";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: isTrueSet(localStorage.getItem("darkMode")) || false,
  },
  //initialState:{ darkMode: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
export const selectedCurrentMode = (state) => state.darkMode.darkMode;
