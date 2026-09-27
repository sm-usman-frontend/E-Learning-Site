import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    username: '',
    password: '',
    rememberMe: false,
  },
  register: {
    email: '',
    username: '',
    password: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateLoginForm: (state, action) => {
      const { field, value } = action.payload
      state.login[field] = value
    },
    updateRegisterForm: (state, action) => {
      const { field, value } = action.payload
      state.register[field] = value
    },
    toggleRememberMe: (state, action) => {
      state.login.rememberMe = action.payload
    },
    resetAuthForm: () => initialState,
  },
})

export const {
  updateLoginForm,
  updateRegisterForm,
  toggleRememberMe,
  resetAuthForm,
} = authSlice.actions

export const authReducer = authSlice.reducer
