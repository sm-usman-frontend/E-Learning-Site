/**
 * BlogCategoryCard Component
 * Renders a blog topic/category card with thumbnail image
 * and a frosted glass pill badge overlay positioned at the bottom.
 */
export default function BlogCategoryCard({
  image,
  imageAlt = 'Category thumbnail',
  label,
  href = '#',
  onClick,
}) {
  return (
    <div className="blog-category-card" onClick={onClick}>
      <a href={href} className="blog-category-card__link">
        <div className="blog-category-card__media">
          <img
            src={image}
            alt={imageAlt}
            className="blog-category-card__image"
            loading="lazy"
          />
          <div className="blog-category-card__badge-wrap">
            <span className="blog-category-card__badge">{label}</span>
          </div>
        </div>
      </a>
    </div>
  )
}
