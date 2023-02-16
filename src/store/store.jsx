import { configureStore } from "@reduxjs/toolkit";
import { productDetailSlice } from "./productDetailSlice";
import { cartSlice } from "./cartSlice";
import { productsSlice } from "./productsSlice";
import { usersSlice } from "./usersSlice";
<<<<<<< HEAD
import { quantitySlice } from "./quantitySlice"
=======
import localStorageMiddleware from "./middleware/localStorage";

>>>>>>> 8202f657bf6e40dda35d53d63281e7ae7675b93d
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