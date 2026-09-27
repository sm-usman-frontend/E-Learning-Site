import { FaThLarge, FaRegClock } from 'react-icons/fa'

/**
 * MarketingArticleCard Component
 * Displays a 4-column course/article card in the Marketing Articles section.
 * Includes thumbnail, category chip, duration chip, title, excerpt,
 * author details, original strikethrough price, and discount teal price.
 */
export default function MarketingArticleCard({
  image,
  imageAlt = 'Marketing article thumbnail',
  category = 'Design',
  duration = '3 Month',
  title = 'AWS Certified solutions Architect',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  author = { name: 'Lina', avatar: '' },
  originalPrice = '$100',
  discountPrice = '$80',
  className = '',
}) {
  return (
    <article className={`marketing-article-card ${className}`}>
      <div className="marketing-article-card__media">
        <img
          src={image}
          alt={imageAlt}
          className="marketing-article-card__image"
          loading="lazy"
        />
      </div>

      <div className="marketing-article-card__body">
        {/* Chips / Meta row */}
        <div className="marketing-article-card__meta">
          <div className="marketing-article-card__chip">
            <FaThLarge className="marketing-article-card__chip-icon" aria-hidden="true" />
            <span>{category}</span>
          </div>
          <div className="marketing-article-card__chip">
            <FaRegClock className="marketing-article-card__chip-icon" aria-hidden="true" />
            <span>{duration}</span>
          </div>
        </div>

        <h4 className="marketing-article-card__title">{title}</h4>
        <p className="marketing-article-card__description">{description}</p>

        {/* Footer: Author & Price */}
        <div className="marketing-article-card__footer">
          <div className="marketing-article-card__author">
            {author.avatar && (
              <img
                src={author.avatar}
                alt={author.name}
                className="marketing-article-card__author-avatar"
              />
            )}
            <span className="marketing-article-card__author-name">
              {author.name}
            </span>
          </div>

          <div className="marketing-article-card__pricing">
            {originalPrice && (
              <span className="marketing-article-card__original-price">
                {originalPrice}
              </span>
            )}
            <span className="marketing-article-card__discount-price">
              {discountPrice}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
