import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  // items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.items = [];
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    addToCart(state, action) {
      const { productId, quantity, prod } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity, prod });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        const newQuantity = state.items[indexProductId].quantity + quantity;
        if (newQuantity > 0) {
          state.items[indexProductId].quantity = newQuantity;
        } else {
          state.items.splice(indexProductId, 1); // Remove the item if new quantity is less than or equal to 0
        }
      }
      // if (state.items[indexProductId].quantity < 1)

      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    add(state, action) {
      const { productId } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      state.items[indexProductId].quantity += 1;
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    subtract(state, action) {
      const { productId } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        if (state.items[indexProductId].quantity > 1) {
          state.items[indexProductId].quantity -= 1;
        } else {
          state.items.splice(indexProductId, 1); // Remove the item if quantity becomes 0
        }
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    removeItem(state, action) {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      console.log(state.items);
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  changeQuantity,
  add,
  subtract,
} = cartSlice.actions;
export default cartSlice.reducer;
