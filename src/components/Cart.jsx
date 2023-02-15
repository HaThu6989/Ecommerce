import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, clearCart, getTotal, removeFromCart } from '../store/cartSlice';

function Cart() {
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
    const { id, title, image, price, category, cartQuantity } = product;
    const [inputQuantity, setInputQuantity] = useState(cartQuantity)
    const handleChangeQuantityItem = (product, e) => {
      setInputQuantity(e.target.value)
      dispatch(updateQuantity({ id: product.id, quantity: Number(e.target.value) }))
    }
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
            <input type="number" value={inputQuantity} onChange={(e) => handleChangeQuantityItem(product, e)} />
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
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {renderList}
      <Link to="/">Return to products list</Link>
    </div>
  )
}

export default Cart