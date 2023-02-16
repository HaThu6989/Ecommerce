import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductDetail } from '../store/productDetailSlice'
import { addToCart } from '../store/cartSlice'
import { productsLoading, productsReceived } from '../store/productsSlice'
import Product2 from "./Product2"
// import { setQuantity } from '../store/quantitySlice';
// import QuantityInput from "./QuantityInput"
function ProductList() {
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

  const [value, setValue] = useState(1);
  // Render Products List
  const renderList = productsArr.map((elm) => {
    
    const { id, title, description, image, price, category } = elm;
    
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
                <Product2 id={id} />
              </div>

              <Link to='/cart'>
                <button className="btn" onClick={() => dispatch(addToCart(elm))}>Add to Cart</button>
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
      <div className="product-row">
        {renderList}
      </div>
    </div>
  )
}

export default ProductList



