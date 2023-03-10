import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  firstName: "John",
  lastName: "Doe",
  email: 'johndoe@example.com',
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersLoading(state, action) {
      state.loading = "pending"
    },
    updateUserfirstname(state, action) {
      state.loading = "idle";
      state.firstName = action.payload;
    },
    updateUserlastName(state, action) {
      state.loading = "idle";
      state.lastName = action.payload;
    },
    updateUseremail(state, action) {
      state.loading = "idle";
      state.email = action.payload;
    },
  },
});
export const { usersLoading, updateUserfirstname, updateUserlastName, updateUseremail } = usersSlice.actions
