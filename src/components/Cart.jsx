import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, clearCart, getTotal, removeFromCart } from '../store/cartSlice';
import '../styles/Cart.css';
// import { updateQuantity, clearCart, getTotal, removeFromCart } from '../store/cartSlice';

function Cart() {
  const userFirst = useSelector((state) => state.user.firstName);
  console.log(userFirst)
  const cartItemsArr = useSelector(state => state.cart.cartItems)
  const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)
  const totalAmount = useSelector(state => state.cart.cartTotalAmount)
  const dispatch = useDispatch()

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotal())
  }, [cartItemsArr])

  const renderList = cartItemsArr.map((product) => {
    const { id, title, description , image, price, category, cartQuantity } = product;

    // const [inputQuantity, setInputQuantity] = useState(cartQuantity)
    // const handleChangeQuantityItem = (product, e) => {
    //   setInputQuantity(e.target.value)
    //   dispatch(updateQuantity({ id: product.id, quantity: Number(e.target.value) }))
    // }
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
              {/* <input type="number" value={inputQuantity} onChange={(e) => handleChangeQuantityItem(product, e)} /> */}
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