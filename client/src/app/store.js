import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import darkModeReducer from "features/theme/themeSlice";
import authReducer from "features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    darkMode: darkModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
