import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const { item, temperature, density } = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.temperature === temperature &&
          cartItem.density === density
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          ...item,
          temperature,
          density,
          quantity: 1,
        };
        state.cartItems.push(newItem);
      }

      state.totalAmount +=
        item.price +
        (density === "extra" ? 500 : density === "double" ? 1000 : 0);
    },

    removeFromCart: (state, action) => {
      const { id, temperature, density } = action.payload;

      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === id &&
          item.temperature === temperature &&
          item.density === density
      );

      if (itemIndex !== -1) {
        const deleteItem = state.cartItems[itemIndex];
        state.cartItems.splice(itemIndex, 1);

        const densityPrice =
          deleteItem.density === "extra"
            ? 500
            : deleteItem.density === "double"
            ? 1000
            : 0;
        state.totalAmount -= deleteItem.price + densityPrice;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
