import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, clearCart, getTotal, removeFromCart } from '../store/cartSlice';
// import '../styles/Cart.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1rem;
  margin: 1rem 1rem;
  font-size: ${props => props.size ?? 1.1 }rem;
  background: ${props => props.primary ? "palevioletred" : props => props.secondary ? "tomato" : "white" };
  color: ${props => props.primary ? "white" : props => props.secondary ? "black" : "palevioletred" };
  border: none;
  border-radius: 0.35rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  :hover {
      transform: scale(1.05);
  }
  :active{
      transform: scale(0.9);
  }
;`

const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: 192px;
  height: 251px;
  margin-right: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Content = styled.div`
  flex: 1;
`;

function Cart() {
  const userFirst = useSelector((state) => state.user.firstName);
  const [inputQuantity, setInputQuantity] = useState()
  const cartItemsArr = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.cartTotalAmount)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cartItemsArr, dispatch])

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
    dispatch(getTotal())
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(getTotal())
  };

  const renderList = cartItemsArr.map((elm) => {
    const { id, title, description, image, price, category, cartQuantity } = elm;

    const handleChangeQuantityItem = (product, e) => {
      dispatch(updateQuantity({ idItemCart: product.id, quantityItemCart: Number(e.target.value) }))
      setInputQuantity(e.target.value)
    }

    return (
      <ProductCard key={id}  style={{ marginTop: "1rem" }}>
        <Card>
          <Image>
            <Img src={image} alt={title} />
          </Image>
          <Content>
            <h3>{title} <button className="category-btn" disabled>{category}</button></h3>

            <div className='space' >{description}</div>
            <div className='space' >
              <div className='bold'>Price per unity : $ {price}</div>
              <div className='bold'>Quantity : {cartQuantity}</div>
              <div className='bold'>Total price : ${cartQuantity * price}</div>
              <label className='bold'>
                Add 
              </label>
              <input className='input' type="number" min="1" value={cartQuantity} onChange={(e) => handleChangeQuantityItem(elm, e)} />

            </div>
            
            <Button onClick={() => handleRemoveItem(elm)}>Remove</Button>

          </Content>
        </Card>
        

      </ProductCard>
      

    );
  });

  return (
    <div>
      <div className='general-info'>
        <div className='general-info-child'>
          <h2>Hi {userFirst}!!!</h2>
          <h3>There are {cartItemsArr.length} {cartItemsArr.length <= 1 ? "product" : "products"}  in your cart</h3>
          <h3>Total Price : $ {totalAmount} </h3>
          <button className="btn" onClick={handleClearCart}>Clear your cart</button>
        </div>
      </div>
      {renderList}
      
      <div className="container">
        <Link to='/'>
          <button className="btn">Back to store</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart