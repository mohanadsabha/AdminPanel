import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: {
    loggedIn: JSON.parse(localStorage.getItem("loggedIn")) ?? false,
    token: localStorage.getItem("token"),
    user: null,
  },
  name: "auth-slice",
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
