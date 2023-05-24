import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartReducer from "./features/cartSlice";

// Configure Redux store

const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
