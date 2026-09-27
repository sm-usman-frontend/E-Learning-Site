export default function CloudFeatureCard({ icon, iconBgClass, title, description }) {
  return (
    <article className="cloud-feature-card">
      <div className={`cloud-feature-card__icon ${iconBgClass}`}>{icon}</div>
      <h3 className="cloud-feature-card__title">{title}</h3>
      <p className="cloud-feature-card__text">{description}</p>
    </article>
  )
}
