import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

const defaultNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '#courses' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '#about' },
]

export default function SiteHeader({
  variant = 'transparent',
  user = null,
}) {
  const location = useLocation()
  const isLight = variant === 'light'

  return (
    <header className={`site-header ${isLight ? 'site-header--light' : ''}`}>
      <nav className="navbar navbar-expand-lg site-header__nav">
        <div className="container-fluid site-header__container">
          <Link className="navbar-brand site-header__brand" to="/">
            <span className="site-header__logo-mark" aria-hidden="true">
              <span>TOTC</span>
            </span>
          </Link>

          <button
            className="navbar-toggler site-header__toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse site-header__collapse" id="mainNavbar">
            <ul className="navbar-nav site-header__links me-lg-4 mb-2 mb-lg-0">
              {defaultNavLinks.map((link) => {
                const isCurrent =
                  link.href === '/'
                    ? location.pathname === '/'
                    : link.href === '/blog'
                    ? location.pathname === '/blog'
                    : false

                const isInternalRoute = link.href.startsWith('/')

                return (
                  <li className="nav-item" key={link.label}>
                    {isInternalRoute ? (
                      <Link
                        className={`nav-link font-poppins ${isCurrent ? 'active' : ''}`}
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a className="nav-link font-poppins" href={link.href}>
                        {link.label}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>

            {user ? (
              <div className="site-header__user-profile font-poppins">
                {user.avatar && (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="site-header__user-avatar"
                  />
                )}
                <span className="site-header__user-name font-poppins">{user.name}</span>
                <FaChevronDown className="site-header__user-chevron" />
              </div>
            ) : (
              <div className="site-header__actions d-flex gap-2">
                <Link className="btn-landing btn-landing--white-pill font-poppins" to="/login">
                  Login
                </Link>
                <Link className="btn-landing btn-landing--glass-pill font-poppins" to="/register">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
