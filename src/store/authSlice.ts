import { User } from '@/interfaces/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAsync: (state, action: PayloadAction<{ user: User }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem('accessToken', state.user.accessToken ?? "");
    },
    logoutAsync: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('accessToken');
    },
  },
});

export const { loginAsync, logoutAsync } = authSlice.actions;
export default authSlice.reducer;
