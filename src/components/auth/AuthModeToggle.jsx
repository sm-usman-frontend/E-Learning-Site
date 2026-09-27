import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' },
]

export default function AuthModeToggle() {
  return (
    <nav className="auth-mode-toggle" aria-label="Authentication mode">
      {tabs.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `auth-mode-toggle__link${isActive ? ' auth-mode-toggle__link--active' : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
