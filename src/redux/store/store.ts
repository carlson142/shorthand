import { configureStore } from "@reduxjs/toolkit";
import asyncSlice from "../slice/asyncSlice";
import inputSlice from "../slice/inputSlice";

export const store = configureStore({
  reducer: {
    inputReducer: inputSlice,
    asyncReducer: asyncSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
