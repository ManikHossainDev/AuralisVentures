/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  name: string;
  email: string;
  password: string;
  _id?: string;
  id: string;
};

// Define the type for the auth state
type TAuthState = {
  user: TUser | null;
  token: string | null;
  onlineUser: string[];
  socketConnection: any;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  onlineUser: [],
  socketConnection: null,
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.socketConnection = null;
    },
    setOnlineUser: (state, action) => {
      state.onlineUser = action.payload;
    },
    setSocketConnection: (state, action) => {
      state.socketConnection = action.payload;
    },
  },
});

export const { setUser, logout, setOnlineUser, setSocketConnection } =
  authSlice.actions;

export default authSlice.reducer;

// Selector to get the current user state
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectOnlineUsers = (state: RootState) => state.auth.onlineUser;
export const selectSocketConnection = (state: RootState) =>
  state.auth.socketConnection;
