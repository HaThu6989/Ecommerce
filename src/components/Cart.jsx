import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, getTotal, removeFromCart } from '../store/cartSlice';

function Cart() {
  const cartItemsArr = useSelector(state => state.cart.cartItems)
  const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)
  const totalAmount = useSelector(state => state.cart.cartTotalAmount)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [])

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product))
    dispatch(getTotal())
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    dispatch(getTotal())
  }

  const renderList = cartItemsArr.map((product) => {
    const { id, title, image, price, category, cartQuantity } = product;
    return (
      <div key={id} style={{ marginTop: "1rem" }}>
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <h3 >{title}</h3>
            <div>$ {price}</div>
            <div>{category}</div>
            <div> Quantity : {cartQuantity} </div>
          </div>
          <button onClick={() => handleRemoveItem(product)}>Remove</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2>Hi !!!</h2>
      <h3>There are {cartItemsArr.length} items in your cart</h3>
      <h3>Total Quantity : {totalQuantity} </h3>
      <h3>Total Price : $ {totalAmount} </h3>
      <button onClick={() => handleClearCart()}>Clear your cart</button>
      {renderList}
      <Link to="/">Return to products list</Link>
    </div>
  )
}

export default Cart