import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './authSlice'
import { newsletterReducer } from './newsletterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsletter: newsletterReducer,
  },
})
