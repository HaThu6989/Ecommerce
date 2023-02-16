import React, { useState } from 'react';

function Input({ id, onValueChange }) {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onValueChange(id, value);
  }

  return (
    <div>
      <input className='input' type="number" min="1"  value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleClick}>OK</button>
    </div>
  );
}

function Product({ id }) {
  const [value, setValue] = useState(0);

  const handleValueChange = (productId, value) => {
    if (productId === id) {
      setValue(value);
    }
  }

  return (
    <div>
      <h2>Product {id}</h2>
      <Input id={id} onValueChange={handleValueChange} />
      <div>Result: {value}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Product id={1} />
      <Product id={2} />
      <Product id={3} />
    </div>
  );
}

export default App;