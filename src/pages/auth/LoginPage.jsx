import { useDispatch, useSelector } from 'react-redux'
import AuthPageLayout from '../../components/auth/AuthPageLayout'
import FormTextField from '../../components/ui/FormTextField'
import PrimaryButton from '../../components/ui/PrimaryButton'
import { toggleRememberMe, updateLoginForm } from '../../store/authSlice'

export default function LoginPage() {
  const dispatch = useDispatch()
  const { username, password, rememberMe } = useSelector((state) => state.auth.login)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <AuthPageLayout>
      <form onSubmit={handleSubmit} noValidate>
        <FormTextField
          label="User name"
          id="login-username"
          name="username"
          placeholder="Enter your User name"
          value={username}
          onChange={(e) => dispatch(updateLoginForm({ field: 'username', value: e.target.value }))}
          autoComplete="username"
        />
        <FormTextField
          label="Password"
          id="login-password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => dispatch(updateLoginForm({ field: 'password', value: e.target.value }))}
          showPasswordToggle
          autoComplete="current-password"
        />
        <div className="auth-form-extras">
          <label className="auth-remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => dispatch(toggleRememberMe(e.target.checked))}
            />
            Remember me
          </label>
          <a className="auth-forgot-link" href="#forgot-password">
            Forgot Password ?
          </a>
        </div>
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
    </AuthPageLayout>
  )
}
