import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  name: string;
  email: string;
  password: string;
  _id?: string;
  id: string;
};

type TAuthState = {
  user: TUser | null;
  token: string | null;
  onlineUser: string[];
  socketConnection: unknown;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  onlineUser: [],
  socketConnection: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: TUser; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.socketConnection = null;
    },
    setOnlineUser: (state, action: PayloadAction<string[]>) => {
      state.onlineUser = action.payload;
    },
    setSocketConnection: (state, action: PayloadAction<unknown>) => {
      state.socketConnection = action.payload;
    },
  },
});

export const { setUser, logout, setOnlineUser, setSocketConnection } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectOnlineUsers = (state: RootState) => state.auth.onlineUser;
export const selectSocketConnection = (state: RootState) =>
  state.auth.socketConnection;
