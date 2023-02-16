import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // If have cartItems in localStorage => add cartItems in local if not add []
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: localStorage.getItem('cartTotalQuantity') ? JSON.parse(localStorage.getItem("cartTotalQuantity")) : 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempsProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempsProduct)
      }
    },
    updateQuantity(state, action) {
      state.cartItems = state.cartItems.map(elm => elm.id === action.payload.idItemCart ? { ...elm, cartQuantity: action.payload.quantityItemCart } : elm)
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(elm => elm.id !== action.payload.id)

    },
    clearCart(state, action) {
      state.cartItems = []
      state.cartTotalQuantity = 0
      state.cartTotalAmount = 0
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        }, { total: 0, quantity: 0 });
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart, getTotal } = cartSlice.actions
