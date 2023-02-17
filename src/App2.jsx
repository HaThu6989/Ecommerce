import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 12.99 },
  { id: 3, name: 'Product 3', price: 14.99 },
];

const Product = ({ id }) => {
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    setNewQuantity(event.target.value);
  };

  const handleOkClick = () => {
    setQuantity(parseInt(newQuantity));
  };

  return (
    <div>
      <h2>Product {id}</h2>
      <p>Price: ${products[id-1].price}</p>
      <p>Quantity: {quantity}</p>
      <label>
        New Quantity: 
        <input type="number" value={newQuantity} onChange={handleQuantityChange} />
      </label>
      <button onClick={handleOkClick}>OK</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {products.map(product => <Product key={product.id} id={product.id} />)}
    </div>
  );
};

export default App;