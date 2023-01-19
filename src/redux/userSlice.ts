import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    userInfo: {
      id: '',
      username: '',
      email: '',
      role: '',
      address: '',
      profession: '',
    },
  },
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.token = action.payload.jwt;
      state.userInfo.id = action.payload.user.id;
      state.userInfo.username = action.payload.user.username;
      state.userInfo.role = action.payload.user.role;
      state.userInfo.email = action.payload.user.email;
      state.userInfo.address = action.payload.user.address;
      state.userInfo.profession = action.payload.user.profession;
      console.log(state, 'state');
    },
    logout: (state) => {
      state.token = '';
      state.userInfo.username = '';
      state.userInfo.email = '';
      state.userInfo.role = '';
      state.userInfo.address = '';
      state.userInfo.profession = '';
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
