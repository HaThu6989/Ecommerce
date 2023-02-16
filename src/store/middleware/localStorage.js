const localStorageMiddleware = (state) => (next) => (action) => {
  localStorage.setItem('cartItems', JSON.stringify(state.getState().cart.cartItems))
  localStorage.setItem("cartTotalQuantity", JSON.stringify(state.getState().cart.cartTotalQuantity))
  let result = next(action)
  return result
}

export default localStorageMiddleware

