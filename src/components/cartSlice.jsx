import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item._id === product._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      state.cartCount += 1;
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.cartCount -= state.cartItems[index].quantity;  
        state.cartItems.splice(index, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.cartItems.find(item => item._id === action.payload);
      if (product) {
        product.quantity += 1;
        state.cartCount += 1; 
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cartItems.find(item => item._id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.cartCount -= 1;  
      }
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
