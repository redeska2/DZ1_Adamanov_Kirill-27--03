// относится к 5 дз асинхронные thunk



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await fetch('YOUR_API_ENDPOINT_HERE');
//     const data = await response.json();
//     return data;
// });
// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//       products: [],
//       cartItems: [],
//       status: 'idle',
//       error: null
//   },
//   reducers: {
//       addToCart: (state, action) => {
//           const product = state.products.find(item => item.id === action.payload);
//           if (product) {
//               const existingItem = state.cartItems.find(item => item.id === action.payload);
//               if (existingItem) {
//                   existingItem.quantity += 1;
//               } else {
//                   state.cartItems.push({ ...product, quantity: 1 });
//               }
//           }
//       },
//       removeFromCart: (state, action) => {
//           const index = state.cartItems.findIndex(item => item.id === action.payload);
//           if (index !== -1) {
//               state.cartItems.splice(index, 1);
//           }
//       },
//   },
//   extraReducers: builder => {
//       builder
//           .addCase(fetchProducts.pending, (state) => {
//               state.status = 'loading';
//           })
//           .addCase(fetchProducts.fulfilled, (state, action) => {
//               state.status = 'succeeded';
//               state.products = action.payload;
//           })
//           .addCase(fetchProducts.rejected, (state, action) => {
//               state.status = 'failed';
//               state.error = action.error.message;
//           });
//   }
// });



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsData from "./products.json";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // Имитация загрузки данных
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 500);
  });
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    cartItems: [],
    cartCount: 0,
    status: 'idle',
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find(item => item._id === action.payload);
      if (product) {
        const existingItem = state.cartItems.find(item => item._id === action.payload);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }
        state.cartCount += 1;
      }
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
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cartItems.find(item => item._id === action.payload);
      if (product && product.quantity > 1) {
        state.cartCount -= 1;
        product.quantity -= 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = productsSlice.actions;
export default productsSlice.reducer;
