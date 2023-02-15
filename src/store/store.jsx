import { configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetailSlice";
import { cartSlice, getTotal } from "./cartSlice";
import { productsSlice } from "./productsSlice";
import { usersSlice } from "./usersSlice";

// Export des actions
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    product: productDetailSlice.reducer,
    cart: cartSlice.reducer,
    user: usersSlice.reducer,
  },
});

// store.dispatch(getTotal())

export default store;