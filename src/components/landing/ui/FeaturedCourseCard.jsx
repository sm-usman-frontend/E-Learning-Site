import { FaStar } from 'react-icons/fa'

/**
 * FeaturedCourseCard Component
 * Renders the expanded course card shown alongside the pills on the course shelf.
 * Displays image thumbnail, title, description, star rating, price, and action button.
 */
export default function FeaturedCourseCard({
  image,
  imageAlt = 'Course preview',
  title = 'Integer id Orc Sed Ante Tincidunt',
  description = 'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
  price = '$ 450',
  rating = 5,
  borderColor = 'var(--landing-teal)',
  className = '',
  onExplore,
}) {
  return (
    <article
      className={`featured-course-card ${className}`}
      style={{ borderColor }}
    >
      <div className="featured-course-card__image-wrap">
        {image && (
          <img
            src={image}
            alt={imageAlt}
            className="featured-course-card__image"
          />
        )}
        <div className="featured-course-card__overlay-badge">
          <span className="featured-course-card__overlay-title">LOREM IPSUM</span>
          <span className="featured-course-card__overlay-sub">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div className="featured-course-card__content">
        <h4 className="featured-course-card__title">{title}</h4>
        <p className="featured-course-card__description">{description}</p>

        <div className="featured-course-card__footer">
          <div className="featured-course-card__rating" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? 'star-filled' : 'star-empty'}
              />
            ))}
          </div>
          <span className="featured-course-card__price">{price}</span>
        </div>

        <div className="featured-course-card__action">
          <button
            type="button"
            className="btn-course-explore"
            onClick={onExplore}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </article>
  )
}
