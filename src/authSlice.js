// src/redux/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    email: '',
  },
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.email = action.payload.email || '';
    },
    // Other reducers if necessary
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
