import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import dataBaseReducer from "./dataBase";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dataBase: dataBaseReducer,
    // user: ...
  },
});
