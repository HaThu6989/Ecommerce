import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading : "idle",
  products : []
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
      state.products = action.payload.map((e) => e);
    },
  },
});
export const {productsLoading, productsReceived} = productsSlice.actions

const fetchProductsApi = () => fetch('https://fakestoreapi.com/products').then(response => response.json())

export const fetchProducts = () => async (dispatch) => {
  dispatch(productsLoading());
  const response = await fetchProductsApi()
  console.log('response', response)
  dispatch(productsReceived(response))
}