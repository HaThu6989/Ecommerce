import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductDetail } from '../store/productDetailSlice'
import { addToCart } from '../store/cartSlice'
import { productsLoading, productsReceived } from '../store/productsSlice'

function ProductList() {
  const productsArr = useSelector(state => state.products.products)
  console.log("products",productsArr)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    dispatch(productsLoading());
    const response = await fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
    dispatch(productsReceived(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderList = productsArr.map((product) => {
    const { id, title, description,  image, price, category } = product;
    return (
      <div key={id} className="product-col" style={{ marginTop: "1rem" }}>
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <h3>{title} <button className="category-btn" disabled>{category}</button></h3>
            <div>{description}</div>
            
            <div>
              
              <div className='space' >
                <div className='bold'>$ {price}</div>
                <label className='bold'>Quantity</label>
                <input className='input' type="number" />
                
              </div>
              <Link to='/cart'>
                <button className="btn" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </Link>
              <Link to={`/products/${id}`}>
                <button className="btn" onClick={() => dispatch(fetchProductDetail(id))}>En detail</button>
              </Link>
            </div>
            
          </div>
          
        </div>
        
      </div>
    
    );
  });

  return (
    <div>
      {/* <h2>Products list</h2> */}
      <div className="product-row">
        {renderList}
      </div>
    </div>
  )
}

export default ProductList