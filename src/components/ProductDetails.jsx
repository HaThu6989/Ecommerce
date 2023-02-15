import React from 'react'
import { useSelector } from 'react-redux';

function ProductDetails() {
  const product = useSelector((state) => state.product.product);
  return (
    <div>
      <h2>Product detail</h2>
      <div className="card">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <h3 >{product.title}</h3>
          <div>$ {product.price}</div>
          <div>{product.category}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails