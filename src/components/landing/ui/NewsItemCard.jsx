/**
 * NewsItemCard Component
 * Compact news card for the list items in the Latest News section.
 * Renders thumbnail with badge overlay, title, and excerpt.
 */
export default function NewsItemCard({
  image,
  imageAlt = 'News thumbnail',
  badgeText = 'NEWS',
  badgeVariant = 'teal',
  title,
  description,
  href = '#',
  className = '',
}) {
  return (
    <article className={`news-item-card ${className}`}>
      <div className="news-item-card__media">
        <img
          src={image}
          alt={imageAlt}
          className="news-item-card__image"
          loading="lazy"
        />
        {badgeText && (
          <span className={`news-badge news-badge--${badgeVariant}`}>
            {badgeText}
          </span>
        )}
      </div>

      <div className="news-item-card__content">
        <h4 className="news-item-card__title">
          <a href={href} className="news-item-card__link">
            {title}
          </a>
        </h4>
        <p className="news-item-card__description">{description}</p>
      </div>
    </article>
  )
}
