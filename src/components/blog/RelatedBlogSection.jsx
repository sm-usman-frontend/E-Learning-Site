import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import RelatedBlogCard from './ui/RelatedBlogCard'

// Assets
import linaAvatar from '../../assets/images/portrait-teacher-giving-online-class 1.png'
import relatedImgOne from '../../assets/images/Rectangle 19.png'
import relatedImgTwo from '../../assets/images/confident-teacher-explaining-lesson-pupils 1.png'
import relatedImgThree from '../../assets/images/Rectangle 21.png'
import relatedImgFour from '../../assets/images/image 10.png'

/**
 * RelatedBlogSection Component
 * Displays "Related Blog" section inside a soft sky-blue container.
 * Features 2 featured large article cards and interactive slider navigation arrows.
 */
export default function RelatedBlogSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const blogPages = [
    [
      {
        id: 'rel-1',
        image: relatedImgOne,
        imageAlt: 'Instructors presenting in classroom',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        author: { name: 'Lina', avatar: linaAvatar },
        excerpt:
          'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        expandedText:
          'The round was led by GSV Ventures with participation from Owl Ventures and prominent edtech angel investors.',
        views: '251,232',
      },
      {
        id: 'rel-2',
        image: relatedImgTwo,
        imageAlt: 'Laptop with video conference meeting',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        author: { name: 'Lina', avatar: linaAvatar },
        excerpt:
          'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        expandedText:
          'Class adds virtual teaching tools, attendance tracking, and breakout room control right inside Zoom calls.',
        views: '251,232',
      },
    ],
    [
      {
        id: 'rel-3',
        image: relatedImgThree,
        imageAlt: 'Student writing notes during remote lecture',
        title: 'How Zoom integration empowers next-generation educators worldwide',
        author: { name: 'Lina', avatar: linaAvatar },
        excerpt:
          'Modern schools and universities rely on real-time feedback loops and student engagement tools...',
        expandedText:
          'With automated gradebooks and streamlined lecture notes, teachers save hours of administrative overhead.',
        views: '198,420',
      },
      {
        id: 'rel-4',
        image: relatedImgFour,
        imageAlt: 'Digital learning materials on tablet',
        title: 'The future of remote curriculum design and active collaboration',
        author: { name: 'Lina', avatar: linaAvatar },
        excerpt:
          'Interactive lesson blueprints help students stay engaged with multimedia homework and live quizzes...',
        expandedText:
          'Educational outcomes improve by over 40% when multimedia materials are synchronized with live video seminars.',
        views: '215,890',
      },
    ],
  ]

  const currentArticles = blogPages[currentPage]

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? blogPages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === blogPages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="related-blog-section">
      <div className="container">
        <div className="related-blog-container">
          {/* Section Header */}
          <div className="related-blog-header">
            <h2 className="related-blog-title">Related Blog</h2>
            <a href="#see-all-related" className="related-blog-see-all">
              See all
            </a>
          </div>

          {/* 2-Card Grid */}
          <div className="row g-4">
            {currentArticles.map((article) => (
              <div className="col-12 col-md-6" key={article.id}>
                <RelatedBlogCard
                  image={article.image}
                  imageAlt={article.imageAlt}
                  title={article.title}
                  author={article.author}
                  excerpt={article.excerpt}
                  expandedText={article.expandedText}
                  views={article.views}
                />
              </div>
            ))}
          </div>

          {/* Bottom Right Pagination Navigation */}
          <div className="related-blog-nav">
            <button
              type="button"
              className={`related-blog-nav__btn ${
                currentPage === 0 ? 'related-blog-nav__btn--muted' : ''
              }`}
              onClick={handlePrev}
              aria-label="Previous related articles"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className={`related-blog-nav__btn ${
                currentPage === 1 ? 'related-blog-nav__btn--active' : ''
              }`}
              onClick={handleNext}
              aria-label="Next related articles"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
