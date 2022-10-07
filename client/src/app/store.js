import { configureStore } from "@reduxjs/toolkit";
//import boxesReducer from "../features/boxes/boxesSlice";
import { apiSlice } from "./api/apiSlice";
import authReducer from "features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
