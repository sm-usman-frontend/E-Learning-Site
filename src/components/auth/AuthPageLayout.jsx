import AuthHeroPanel from './AuthHeroPanel'
import AuthModeToggle from './AuthModeToggle'

const WELCOME_TITLE = 'Welcome to lorem..!'
const WELCOME_DESCRIPTION =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export default function AuthPageLayout({ children, heroImageSrc }) {
  return (
    <div className="auth-page">
      <div className="auth-card container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <AuthHeroPanel imageSrc={heroImageSrc} />
          </div>
          <div className="col-12 col-md-6">
            <div className="auth-form-panel">
              <h1 className="auth-form-panel__welcome">{WELCOME_TITLE}</h1>
              <AuthModeToggle />
              <p className="auth-form-panel__description">{WELCOME_DESCRIPTION}</p>
              <div className="auth-form-inner">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
