import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductDetail } from '../store/productDetailSlice'
import { fetchProducts } from '../store/productsSlice'

function ProductList() {
  const productsArr = useSelector(state => state.products.products)
  console.log('productsArr', productsArr)
  const dispatch = useDispatch()
  const renderList = productsArr.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id}>
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
      </div>
    );
  });

  return (
    <div>
      <h2>Products list</h2>
      <button onClick={() => dispatch(fetchProducts(productsArr))}>Products List</button>
      <div>
        {renderList}
      </div>
    </div>
  )
}

export default ProductList