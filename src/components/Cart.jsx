import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, clearCart, getTotal, removeFromCart } from '../store/cartSlice';
import { Link } from 'react-router-dom'

import { Card, Image, Img, ProductCard, Content, CategoryButton ,RemoveButton ,GeneralInfo ,GeneralInfoChild ,ProductRow ,ProductColumn } from '../styles/Cart'
import { Button, BoldText, Input, Space, Label, Container} from '../styles/Global'
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
      <ProductCard key={id} style={{ marginTop: "1rem" }}>
        <Card>
          <Image>
            <Img src={image} alt={title} />
          </Image>
          <Content>
            <h3>{title} <CategoryButton disabled>{category}</CategoryButton></h3>

            <Space>{description}</Space>
            <Space>
            
              <BoldText className='bold'>Price per unity : $ {price}</BoldText>
              <BoldText className='bold'>Quantity : {cartQuantity}</BoldText>
              <BoldText className='bold'>Total price : ${cartQuantity * price}</BoldText>
              <Label>
                Add 
              </Label>
              <Input type="number" min="1" value={cartQuantity} onChange={(e) => handleChangeQuantityItem(elm, e)} />

            </Space>
            
            <RemoveButton className="btn remove" onClick={() => handleRemoveItem(elm)}>Remove</RemoveButton>

          </Content>
        </Card>
        

      </ProductCard>
      

    );
  });

  return (
    <div>
      <GeneralInfo>
        <GeneralInfoChild>
          <h2>Hi {userFirst}!!!</h2>
          <h3>There are {cartItemsArr.length} {cartItemsArr.length <= 1 ? "product" : "products"}  in your cart</h3>
          <h3>Total Price : $ {totalAmount} </h3>
          <Button onClick={handleClearCart}>Clear your cart</Button>
        </GeneralInfoChild>
      </GeneralInfo>
      {renderList}
      
      <Container>
        <Link to='/'>
          <Button>Back to store</Button>
        </Link>
      </Container>
    </div>
  )
}

export default Cart