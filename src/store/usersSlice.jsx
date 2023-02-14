import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading : "idle",
  users : []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersLoading(state, action) {
      state.loading = "pending"
    },
    usersReceived(state, action) {
      state.loading = "idle";
      state.users = action.payload;
    },
  },
});
export const {usersLoading, usersReceived} = usersSlice.actions

const fetchUsersApi = () => fetch('https://fakestoreapi.com/users/1')
.then(res=>res.json())


export const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading());
  const response = await fetchUsersApi()

  console.log('response', response.data)
  dispatch(usersReceived(response))
}