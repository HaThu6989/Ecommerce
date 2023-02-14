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
      state.users = action.payload.map((e) => e);
    },
  },
});
export const {usersLoading, usersReceived} = usersSlice.actions

const fetchUsersApi = () => fetch('https://fakestoreapi.com/users').then(res=>res.json())

// console.log("ici",fetch('https://fakestoreapi.com/users')
// .then(res=>res.json())
// .then(json=>console.log("json",json)))

export const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading());
  const response = await fetchUsersApi()

  console.log('response', response.data)
  dispatch(usersReceived(response))
}