import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  isSubscribed: false,
}

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    updateNewsletterEmail: (state, action) => {
      state.email = action.payload
      if (state.isSubscribed) {
        state.isSubscribed = false
      }
    },
    submitNewsletter: (state, action) => {
      state.email = action.payload
      state.isSubscribed = true
    },
    resetNewsletter: () => initialState,
  },
})

export const { updateNewsletterEmail, submitNewsletter, resetNewsletter } = newsletterSlice.actions
export const newsletterReducer = newsletterSlice.reducer
