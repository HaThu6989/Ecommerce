import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, getTotal, removeFromCart } from '../store/cartSlice';
import '../styles/Cart.css';

function Cart() {
  const userFirst = useSelector((state) => state.user.firstName);
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
    const { id, title, description , image, price, category, cartQuantity } = product;

    return (
      <div key={id} className="product-card" style={{ marginTop: "1rem" }}>
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <h3>{title} <button className="category-btn" disabled>{category}</button></h3>
            
            <div className='space' >{description}</div>
            <div>
              <div className='bold'>$ {price}</div>
              <div className='bold'>Quantity: {cartQuantity}</div>
            
            </div>
            <button className="btn remove" onClick={() => handleRemoveItem(product)}>Remove</button>
          </div>
        </div>
        
      </div>

    );
  });

  return (
    <div>
      <div className='general-info'>
        <div className='general-info-child'>
          <h2>Hi {userFirst}!!!</h2>
          <h3>There are {cartItemsArr.length} items in your cart</h3>
          {/* <h3>Total Quantity : {totalQuantity} </h3> */}
          {/* <h3>Total Price : $ {totalAmount} </h3> */}
          <button className="btn" onClick={() => handleClearCart()}>Clear your cart</button>
        </div>
      </div>
      {renderList}
      <Link to="/">Return to products list</Link>
      
    </div>
  )
}

export default Cart