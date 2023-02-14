import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { usersSlice } from "./usersSlice";

// Export des actions
const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    user: usersSlice.reducer,
  },
});

export default store;