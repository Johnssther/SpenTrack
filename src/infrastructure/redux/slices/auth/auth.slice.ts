import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserAuth, UserAuthEmptyState } from "../../../../domain/entities/user.entity";

export const authSlice = createSlice({
  name: 'userAuth',
  initialState: UserAuthEmptyState,
  reducers: {
    login: (state, action: PayloadAction<UserAuth>) => {      
      return { ...action.payload };
    },
    logout: () => {
      return UserAuthEmptyState;
    },
    refreshToken: (state, action: PayloadAction<UserAuth>) => {
      return { ...action.payload };
    }
  }
});

export default authSlice.reducer;

export const { login, logout, refreshToken } =  authSlice.actions;
