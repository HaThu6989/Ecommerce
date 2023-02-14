import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";

// Export des actions
const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
  },
});

export default store;