export default function FeatureListItem({ icon, children, iconClassName = '' }) {
  return (
    <li className="feature-list-item">
      <span className={`feature-list-item__icon ${iconClassName}`.trim()}>{icon}</span>
      <p className="feature-list-item__text">{children}</p>
    </li>
  )
}
