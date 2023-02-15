import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductDetail } from '../store/productDetailSlice'
import { addToCart } from '../store/cartSlice'
import { productsLoading, productsReceived } from '../store/productsSlice'

function ProductList() {
  const productsArr = useSelector(state => state.products.products)
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
    const { id, title, image, price, category } = product;
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
          </div>
        </div>
        <Link to={`/products/${id}`}>
          <button onClick={() => dispatch(fetchProductDetail(id))}>En detail</button>
        </Link>
        <div style={{ marginTop: "1rem" }}>
          <label>Quantity</label>
          <input type="number" />
          <Link to='/cart'>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2>Products list</h2>
      <div>
        {renderList}
      </div>
    </div>
  )
}

export default ProductList