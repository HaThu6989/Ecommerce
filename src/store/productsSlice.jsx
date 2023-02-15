import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  products: []
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsLoading(state, action) {
      state.loading = "pending"
    },
    productsReceived(state, action) {
      state.loading = "idle";
      state.products = action.payload
    },
  },
});

export const { productsLoading, productsReceived } = productsSlice.actions