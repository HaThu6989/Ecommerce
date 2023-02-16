import React, { useState } from 'react';
import Input from "./Input"
import { useDispatch, useSelector } from 'react-redux'
import { addValue } from '../store/quantitySlice'
// import { addResult, resultsSlice } from './path/to/resultsSlice.js';

function Product2({ id }) {
    // const valuesss = useSelector(state => state.value.valueById[]);

    const quantity = useSelector(state => state.value.values);
    const valuesss = useSelector(state => state.value.valueById[id]);
    console.log("Quantity",valuesss, "id", id)
    const dispatch = useDispatch();
    
  const [value, setValue] = useState(0);

//   const handleValueChange = (productId, value) => {
//     if (productId === id) {
//       setValue(value);
//       dispatch(addResult({id, value}));
//     }
//   }

  const handleValueChange = (productId, value) => {

    if (productId === id) {
        setValue(value);
        dispatch(addValue({ id, value }));
    }
  };

  return (
    <div>
      <Input id={id} onValueChange={handleValueChange} />
      <div>Result: {value}</div>
      <div>{valuesss}</div>;
      {/* {console.log(quantity)} */}
    </div>
  );
}

export default Product2