import { configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetailSlice";
import { productsSlice } from "./productsSlice";
import { usersSlice } from "./usersSlice";

// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    product: productDetailSlice.reducer,
    user: usersSlice.reducer,
  },
});

export default store;