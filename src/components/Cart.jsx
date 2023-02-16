import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, clearCart, getTotal, removeFromCart } from '../store/cartSlice';
import '../styles/Cart.css';
import { updateValue} from '../store/quantitySlice'

function Cart() {
  const userFirst = useSelector((state) => state.user.firstName);
  const [inputQuantity, setInputQuantity] = useState()
  const cartItemsArr = useSelector(state => state.cart.cartItems)
  const quantity = useSelector(state => state.value.value)
  console.log("quan2",quantity)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cartItemsArr, dispatch])

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const renderList = cartItemsArr.map((elm) => {
    const { id, title, description, image, price, category, cartQuantity  } = elm;
    // let quantity = 4;

    // cartQuantity = quantity
    const handleChangeQuantityItem = (product, e) => {
      // console.log(product,e.target.value)
      quantity = Number(e.target.value)
      dispatch(updateValue(quantity));
      dispatch(updateQuantity({ idItemCart: product.id, quantityItemCart: Number(e.target.value) }))
      setInputQuantity(e.target.value)
    }

    return (
      <div key={id} className="product-card" style={{ marginTop: "1rem" }}>
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <h3>{title} <button className="category-btn" disabled>{category}</button></h3>

            <div className='space' >{description}</div>
            <div className='space' >
              <div className='bold'>$ {price}</div>
              <label className='bold'>Quantity {quantity}</label>
            </div>
            <input className='input' type="number" min="1" value={quantity} onChange={(e) => handleChangeQuantityItem(elm, e)} />

            <button className="btn remove" onClick={() => handleRemoveItem(elm)}>Remove</button>

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
          <button className="btn" onClick={handleClearCart}>Clear your cart</button>
        </div>
      </div>
      {renderList}
    </div>
  )
}

export default Cart