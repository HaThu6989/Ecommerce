import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    values: [],
    valueById: {},
};
export const quantitySlice = createSlice({
    name: 'quantitySlice',
    initialState,
    reducers: {
      addValue: (state, action) => {
        const { id, value } = action.payload;
        state.values.push(id);
        state.valueById[id] = value;
      },
    },
});


export const { addValue } = quantitySlice.actions

