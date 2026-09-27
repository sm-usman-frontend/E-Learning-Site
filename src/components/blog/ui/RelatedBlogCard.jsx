import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

/**
 * RelatedBlogCard Component
 * Displays a large 2-column style related blog article card.
 * Features hero media, title, author avatar, excerpt, inline expandable text,
 * and footer with view counter.
 */
export default function RelatedBlogCard({
  image,
  imageAlt = 'Related blog thumbnail',
  title = 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
  author = { name: 'Lina', avatar: '' },
  excerpt = 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
  expandedText = 'The edtech software adds tools for classroom management, student assessment, and breakout group collaboration directly inside the Zoom environment.',
  views = '251,232',
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className={`related-blog-card ${className}`}>
      <div className="related-blog-card__media">
        <img
          src={image}
          alt={imageAlt}
          className="related-blog-card__image"
          loading="lazy"
        />
      </div>

      <div className="related-blog-card__body">
        <h3 className="related-blog-card__title">{title}</h3>

        <div className="related-blog-card__author">
          {author.avatar && (
            <img
              src={author.avatar}
              alt={author.name}
              className="related-blog-card__author-avatar"
            />
          )}
          <span className="related-blog-card__author-name">{author.name}</span>
        </div>

        <p className="related-blog-card__excerpt">{excerpt}</p>

        {isExpanded && (
          <p className="related-blog-card__expanded-text">{expandedText}</p>
        )}

        <div className="related-blog-card__footer">
          <button
            type="button"
            className="related-blog-card__read-more"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>

          <div className="related-blog-card__views">
            <FaEye className="related-blog-card__views-icon" aria-hidden="true" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
