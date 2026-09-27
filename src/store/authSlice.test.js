import { describe, expect, it } from 'vitest'
import {
  authReducer,
  updateLoginForm,
  updateRegisterForm,
  toggleRememberMe,
  resetAuthForm,
} from './authSlice'
import {
  newsletterReducer,
  updateNewsletterEmail,
  submitNewsletter,
  resetNewsletter,
} from './newsletterSlice'

describe('auth reducer', () => {
  it('updates login form values', () => {
    const state = authReducer(
      {
        login: { username: '', password: '', rememberMe: false },
        register: { email: '', username: '', password: '' },
      },
      updateLoginForm({ field: 'username', value: 'ali' }),
    )

    expect(state.login.username).toBe('ali')
  })

  it('toggles remember me from login state', () => {
    const state = authReducer(
      {
        login: { username: '', password: '', rememberMe: false },
        register: { email: '', username: '', password: '' },
      },
      toggleRememberMe(true),
    )

    expect(state.login.rememberMe).toBe(true)
  })

  it('resets auth forms to initial values', () => {
    const state = authReducer(
      {
        login: { username: 'ali', password: '123', rememberMe: true },
        register: { email: 'a@test.com', username: 'ali', password: 'abc' },
      },
      resetAuthForm(),
    )

    expect(state.login.username).toBe('')
    expect(state.register.email).toBe('')
  })
})

describe('newsletter reducer', () => {
  it('updates the email field as the user types', () => {
    const state = newsletterReducer(
      { email: '', isSubscribed: false },
      updateNewsletterEmail('hello@example.com'),
    )

    expect(state.email).toBe('hello@example.com')
    expect(state.isSubscribed).toBe(false)
  })

  it('stores the submitted email and marks the newsletter as subscribed', () => {
    const state = newsletterReducer(
      { email: '', isSubscribed: false },
      submitNewsletter('hello@example.com'),
    )

    expect(state.email).toBe('hello@example.com')
    expect(state.isSubscribed).toBe(true)
  })

  it('resets newsletter state', () => {
    const state = newsletterReducer(
      { email: 'hello@example.com', isSubscribed: true },
      resetNewsletter(),
    )

    expect(state.email).toBe('')
    expect(state.isSubscribed).toBe(false)
  })
})
