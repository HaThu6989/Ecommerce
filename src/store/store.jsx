import { configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetailSlice";
import { cartSlice, getTotal } from "./cartSlice";
import { productsSlice } from "./productsSlice";
import { usersSlice } from "./usersSlice";
import localStorageMiddleware from "./middleware/localStorage";

// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    product: productDetailSlice.reducer,
    cart: cartSlice.reducer,
    user: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

store.dispatch(getTotal())

export default store;
