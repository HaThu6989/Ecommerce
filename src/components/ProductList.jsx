import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductDetail } from '../store/productDetailSlice'
import { addToCart } from '../store/cartSlice'
import { productsLoading, productsReceived } from '../store/productsSlice'
import {Card, Image, Img, Content, CategoryButton, ProductRow, ProductColumn} from "../styles/Cart"
import {Button, BoldText, Input, Space, Label} from '../styles/Global'

function ProductList() {
  const [valueQuantity, setValueQuantity] = useState(1);
  const productsArr = useSelector(state => state.products.products)
  const cartItemsArr = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  // Fetch Products List
  const fetchProducts = async () => {
    dispatch(productsLoading());
    const response = await fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
    dispatch(productsReceived(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  // Render Products List
  const renderList = productsArr.map((elm) => {
    const { id, title, description, image, price, category } = elm;

    return (
      <ProductColumn key={id}>
        <Card>
          <Image>
            <Img src={image} alt={title} />
          </Image>
          <Content>
            <h3>{title} <CategoryButton disabled>{category}</CategoryButton></h3>
            <div>{description}</div>
              <Space>
                <BoldText>Price : $ {price}</BoldText>
                <BoldText>
                  Quantity in cart :
                  {cartItemsArr
                    .filter(cart => cart.id === elm.id)
                    .map((cart, item) => {
                      return <span key={item}> {cart.cartQuantity === null ? 0 : cart.cartQuantity} </span>
                  })}
                </BoldText>
                <Label className='bold'>Add </Label>
                <Input type="number" min="1" value={valueQuantity} onChange={e => setValueQuantity(e.target.value)} />
              </Space>

              <Link to='/cart'>
                <Button onClick={() => dispatch(addToCart({ ...elm, quantityItemCart: Number(valueQuantity) }))}>Add to Cart</Button>
              </Link>
              <Link to={`/products/${id}`}>
                <Button onClick={() => dispatch(fetchProductDetail(id))}>En detail</Button>
              </Link>
            
          </Content>
        </Card>
      </ProductColumn>
    );
  });

  return (
    <div>
      <ProductRow>
        {renderList}
      </ProductRow>
    </div>
  )
}

export default ProductList



