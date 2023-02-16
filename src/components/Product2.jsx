import React, { useState } from 'react';
import Input from "./Input"
import { useDispatch, useSelector } from 'react-redux'
import { updateValue} from '../store/quantitySlice'


function Product2({ id }) {
    const quantity = useSelector(state => state.value);
    // console.log("hiquantity",quantity)
    const dispatch = useDispatch();
    
  const [value, setValue] = useState(0);

  const handleValueChange = (productId, value) => {
    if (productId === id) {
      setValue(value);
      dispatch(updateValue(value));
    }
  }

  return (
    <div>
      <Input id={id} onValueChange={handleValueChange} />
      <div>Result: {value}</div>
      {/* {console.log(quantity)} */}
    </div>
  );
}

export default Product2