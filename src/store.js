import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // cartReducer로 변경
  },
});

export default store;
