import { configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetailSlice";
import { cartSlice } from "./cartSlice";
import { productsSlice } from "./productsSlice";
import { usersSlice } from "./usersSlice";
import { quantitySlice } from "./quantitySlice"
import localStorageMiddleware from "./middleware/localStorage";

// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    product: productDetailSlice.reducer,
    cart: cartSlice.reducer,
    user: usersSlice.reducer,
    value: quantitySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
// export const selectQuantityById = (state, productId) => state.quantity[productId] || 0;