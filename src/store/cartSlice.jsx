import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // If have cartItems in localStorage => add cartItems in local if not add []
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  quantityEachItem: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      // console.log('itemIndex', itemIndex)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempsProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempsProduct)
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(elm => elm.id !== action.payload.id)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    clearCart(state, action) {
      state.cartItems = []
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem
        const itemTotal = price * cartQuantity
        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity
        return cartTotal
      }, { total: 0, quantity: 0 })
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }
  },
});

export const { addToCart, removeFromCart, clearCart, getTotal } = cartSlice.actions
