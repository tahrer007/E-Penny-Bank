import { configureStore } from "@reduxjs/toolkit";
import boxesReducer from "../features/boxes/boxesSlice";
import { apiSlice } from "./api/apiSlice";
import authReducer from "features/auth/authSlice";

export const store = configureStore({
  reducer: {
    //boxes : boxesReducer ;
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    //users : usersReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
