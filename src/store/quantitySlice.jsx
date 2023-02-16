import { createSlice } from '@reduxjs/toolkit';

export const  quantitySlice = createSlice({
  name: 'value',
  initialState: { value: null },
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { updateValue } = quantitySlice.actions;
// export default quantitySlice.reducer;
