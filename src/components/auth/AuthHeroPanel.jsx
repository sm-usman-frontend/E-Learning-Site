/**
 * Place your hero image at: public/images/auth-hero.jpg
 * (or update imageFileName below)
 */
const DEFAULT_HERO_IMAGE = '/images/auth-hero.jpg'

export default function AuthHeroPanel({
  imageSrc = DEFAULT_HERO_IMAGE,
  title = 'Lorem Ipsum is simply',
  subtitle = 'Lorem Ipsum is simply',
}) {
  function handleImageError(event) {
    event.currentTarget.style.display = 'none'
  }

  return (
    <aside className="auth-hero-panel" aria-hidden="true">
      {/* Drop your file in public/images/ — default: auth-hero.jpg */}
      <div className="auth-hero-panel__media">
        <img src={imageSrc} alt="" onError={handleImageError} />
      </div>
      <div className="auth-hero-panel__overlay" />
      <div className="auth-hero-panel__content">
        <h2 className="auth-hero-panel__title">{title}</h2>
        <p className="auth-hero-panel__subtitle">{subtitle}</p>
      </div>
    </aside>
  )
}
