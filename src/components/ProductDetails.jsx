import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function ProductDetails() {
  const product = useSelector((state) => state.product.product);
  return (
    <div>
      <h2 className="center">Product detail</h2>
      <div className="card center">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <h3>{product.title} <button className="category-btn" disabled>{product.category}</button></h3>
          {/* <h3 >{product.title}</h3> */}
          <div>{product.description}</div>
          <div className='space' >
            <div className='bold'>$ {product.price}</div>
          </div>
          
          {/* <div>{product.category}</div> */}
          
        </div>
      </div>
      <div className="center">
        <Link to='/'>
          <button className="btn">Back to store</button>
        </Link>
      </div>
          
    </div>
  )
}

export default ProductDetails