import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import appointmentSlice from './appointmentSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  appointments: appointmentSlice,
});

export default rootReducer;