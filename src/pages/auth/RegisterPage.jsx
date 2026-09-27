import { useDispatch, useSelector } from 'react-redux'
import AuthPageLayout from '../../components/auth/AuthPageLayout'
import FormTextField from '../../components/ui/FormTextField'
import PrimaryButton from '../../components/ui/PrimaryButton'
import { updateRegisterForm } from '../../store/authSlice'

export default function RegisterPage() {
  const dispatch = useDispatch()
  const { email, username, password } = useSelector((state) => state.auth.register)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <AuthPageLayout>
      <form onSubmit={handleSubmit} noValidate>
        <FormTextField
          label="Email Address"
          id="register-email"
          name="email"
          type="email"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => dispatch(updateRegisterForm({ field: 'email', value: e.target.value }))}
          autoComplete="email"
        />
        <FormTextField
          label="User name"
          id="register-username"
          name="username"
          placeholder="Enter your User name"
          value={username}
          onChange={(e) => dispatch(updateRegisterForm({ field: 'username', value: e.target.value }))}
          autoComplete="username"
        />
        <FormTextField
          label="Password"
          id="register-password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => dispatch(updateRegisterForm({ field: 'password', value: e.target.value }))}
          showPasswordToggle
          autoComplete="new-password"
        />
        <div className="mt-2">
          <PrimaryButton type="submit">Register</PrimaryButton>
        </div>
      </form>
    </AuthPageLayout>
  )
}
