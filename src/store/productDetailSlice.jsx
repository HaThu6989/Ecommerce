import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  product: {}
};

export const productDetailSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productSelectedLoading(state, action) {
      state.loading = "pending"
    },
    productSelected(state, action) {
      state.loading = "idle";
      state.product = action.payload
    }
  },
});

export const { productSelectedLoading, productSelected } = productDetailSlice.actions

const fetchProductDetailApi = (id) => fetch(`https://fakestoreapi.com/products/${id}`).then(response => response.json())

export const fetchProductDetail = (id) => async (dispatch) => {
  dispatch(productSelectedLoading());
  const response = await fetchProductDetailApi(id)
  console.log('response', response)
  dispatch(productSelected(response))
}