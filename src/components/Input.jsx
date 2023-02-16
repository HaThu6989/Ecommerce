import React, { useState } from 'react';

function Input({ id, onValueChange }) {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onValueChange(id, value);
  }

  return (
    <div>
      <input className='input' type="number" min="1"  value={value} onChange={e => setValue(e.target.value)} />
      <button className='btn' onClick={handleClick}>OK</button>
    </div>
  );
}

export default Input