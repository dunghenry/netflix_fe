import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import netflixReducer from './slices/netflixSlice';
const rootReducer = combineReducers({
    auth: authReducer,
    netflix: netflixReducer,
});
export default rootReducer;
