import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productsSlice'

function ProductList() {
  const productsArr = useSelector(state => state.product.products)
  console.log('productsArr', productsArr)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Products list</h2>
      <button onClick={() => dispatch(fetchProducts(productsArr))}>Products List</button>
      <div> 
        <ul>
          {productsArr.map(elem => (
            <li> {elem.title} </li>
          ))}
        </ul>  
      </div>
    </div>
  )
}

export default ProductList