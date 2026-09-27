import { useState } from 'react'
import { NewsItemCard } from '../ui'

// Assets for news cards
import featuredNewsImage from '../../../assets/images/confident-teacher-explaining-lesson-pupils 1.png'
import newsImageOne from '../../../assets/images/Rectangle 19.png'
import newsImageTwo from '../../../assets/images/portrait-teacher-giving-online-class 1.png'
import newsImageThree from '../../../assets/images/Rectangle 21.png'

/**
 * LatestNewsSection Component
 * Displays "Lastest News and Resources" section.
 * Includes a large featured news article on the left with an inline expandable
 * "Read more" toggle on the same page, and 3 news list items on the right.
 */
export default function LatestNewsSection() {
  // State for toggling expanded article text on the same page
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false)

  const newsItems = [
    {
      id: 'news-1',
      image: newsImageOne,
      imageAlt: 'Girl learning with tablet',
      badgeText: 'PRESS RELEASE',
      badgeVariant: 'teal',
      title: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
      description:
        'Class Technologies Inc., the company that created Class, announced the successful completion of its Series A round...',
      href: '#news-detail-1',
    },
    {
      id: 'news-2',
      image: newsImageTwo,
      imageAlt: 'Student on video conference call',
      badgeText: 'NEWS',
      badgeVariant: 'teal',
      title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
      description:
        'Zoom was never created to be a consumer product. Nonetheless, educational institutions around the world...',
      href: '#news-detail-2',
    },
    {
      id: 'news-3',
      image: newsImageThree,
      imageAlt: 'Virtual classroom illustration',
      badgeText: 'NEWS',
      badgeVariant: 'teal',
      title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
      description:
        'This year, investors have reaped big financial returns from betting on remote-first education technologies...',
      href: '#news-detail-3',
    },
  ]

  return (
    <section className="landing-section latest-news-section" id="blog">
      <div className="container">
        {/* Centered Section Header */}
        <div className="text-center latest-news-header mb-5">
          <h2 className="content-heading latest-news-title">
            Lastest News and Resources
          </h2>
          <p className="content-body latest-news-subtitle">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="row g-4 g-lg-5">
          {/* Left Column: Featured Article */}
          <div className="col-lg-6">
            <article className="featured-news-card">
              <div className="featured-news-card__media">
                <img
                  src={featuredNewsImage}
                  alt="Laptop showing online classroom meeting"
                  className="featured-news-card__image"
                />
              </div>

              <div className="featured-news-card__content">
                <span className="news-badge news-badge--teal featured-news-card__badge">
                  NEWS
                </span>

                <h3 className="featured-news-card__title">
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </h3>

                <p className="featured-news-card__description">
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>

                {/* Inline expandable text on the same page */}
                {isReadMoreExpanded && (
                  <p className="featured-news-card__expanded-text">
                    The software adds teaching tools and classroom management features on top of Zoom,
                    giving instructors direct oversight, breakout management, real-time quizzes,
                    and engagement analytics directly within their existing virtual classroom ecosystem.
                  </p>
                )}

                {/* Read more / Show less toggle button */}
                <button
                  type="button"
                  className="featured-news-card__read-more"
                  onClick={() => setIsReadMoreExpanded((prev) => !prev)}
                  aria-expanded={isReadMoreExpanded}
                >
                  {isReadMoreExpanded ? 'Show less' : 'Read more'}
                </button>
              </div>
            </article>
          </div>

          {/* Right Column: 3 News List Items */}
          <div className="col-lg-6">
            <div className="news-items-list">
              {newsItems.map((item) => (
                <NewsItemCard
                  key={item.id}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  badgeText={item.badgeText}
                  badgeVariant={item.badgeVariant}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
