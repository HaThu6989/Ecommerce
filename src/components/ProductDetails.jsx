import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {Content,Image,Img,CategoryButton} from '../styles/Cart'
import { Button,Space, BoldText, CenterContainer,CenterCard} from '../styles/Global'

function ProductDetails() {
  const product = useSelector((state) => state.product.product);
  return (
    <div>
      <CenterContainer>Product detail</CenterContainer>
      <CenterCard>
        <Image>
          <Img src={product.image} alt={product.title} />
        </Image>
        <Content>
          <h3>{product.title} <CategoryButton disabled>{product.category}</CategoryButton></h3>
          {/* <h3 >{product.title}</h3> */}
          <div>{product.description}</div>
          <Space>
            <BoldText>$ {product.price}</BoldText>
          </Space>
          
          {/* <div>{product.category}</div> */}
          
        </Content>
      </CenterCard>
      <CenterContainer>
        <Link to='/'>
          <Button>Back to store</Button>
        </Link>
      </CenterContainer>
          
    </div>
  )
}

export default ProductDetails