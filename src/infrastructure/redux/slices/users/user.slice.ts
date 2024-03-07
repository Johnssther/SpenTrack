import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserEmptyState } from "../../../../domain/entities/user.entity";

export const userSlice = createSlice({
  name: 'users',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {      
      return action.payload;
    },
    modifyUser: (state, action: PayloadAction<User>) => {      
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: (state, action: PayloadAction<User>) => {
      return UserEmptyState;
    }
  }
});

export default userSlice.reducer;

export const { createUser, modifyUser, resetUser } =  userSlice.actions;
