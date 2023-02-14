import { configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetailSlice";
import { productsSlice } from "./productsSlice";

// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    product: productDetailSlice.reducer
  },
});

export default store;