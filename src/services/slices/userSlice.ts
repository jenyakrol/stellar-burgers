import { getUserApi, logoutApi } from '@api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { setCookie } from '@utils-cookie';

type UserState = {
  user: TUser;
  isAuth: boolean;
};

const initialState: UserState = {
  user: {
    name: '',
    email: ''
  },
  isAuth: true
};

export const getUserAction = createAsyncThunk('user/get', async () =>
  getUserApi()
);

export const logoutAction = createAsyncThunk('user/logout', async () => {
  await logoutApi();
  localStorage.removeItem('refreshToken');
  setCookie('accessToken', '');
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<TUser>) => {
      state.user = payload;
      state.isAuth = !!payload.email && !!payload.name;
    }
  },
  selectors: {
    getAuth: (state) => state.isAuth,
    getUser: (state) => state.user
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUserAction.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ user: TUser; success: boolean }>
        ) => {
          state.user = payload.user;
          state.isAuth = payload.success;
        }
      )
      .addCase(getUserAction.rejected, (state) => {
        state.isAuth = false;
        state.user = { name: '', email: '' };
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = { name: '', email: '' };
        state.isAuth = false;
      });
  }
});

export const { getAuth, getUser } = userSlice.selectors;
export const { setUser } = userSlice.actions;
