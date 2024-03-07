import { combineReducers } from '@reduxjs/toolkit';

import userAuthReducer from './slices/auth/auth.slice';
import { authApi } from './apis/auth/auth.api';

const rootReducer = combineReducers({
    userAuth: userAuthReducer,

    [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;
