import { useState } from 'react'
import { FaArrowRight, FaChevronRight, FaStar } from 'react-icons/fa'
import girlBanner from '../../../assets/images/girl-banner.png'

/**
 * TestimonialsSection Component
 * Displays "What They Say?" testimonial showcase.
 * Features an assessment CTA, hero student visual, carousel navigation button,
 * and a floating review card with 5-star Yelp rating.
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Gloria Rose',
      role: '12 reviews at Yelp',
      quote:
        'Thank you so much for your help. It\'s exactly what I\'ve been looking for. You won\'t regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Miller',
      role: '8 reviews at Yelp',
      quote:
        'The interactive virtual classroom and ease of study management changed how our entire faculty connects with remote students. Highly recommended!',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTestimonial = testimonials[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="landing-section testimonial-section" id="testimonials">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: Description and Assessment CTA */}
          <div className="col-lg-5">
            <div className="testimonial-header">
              <div className="testimonial-tag">
                <span className="testimonial-tag__line" aria-hidden="true" />
                <span className="testimonial-tag__text">TESTIMONIAL</span>
              </div>
              <h2 className="testimonial-title">What They Say?</h2>
            </div>

            <div className="testimonial-content">
              <p className="content-body mb-3">
                TOTC has got more than 100k positive ratings from our users around the world.
              </p>
              <p className="content-body mb-3">
                Some of the students and teachers were greatly helped by the Skilline.
              </p>
              <p className="content-body mb-4">
                Are you too? Please give your assessment
              </p>

              <button
                type="button"
                className="btn-landing btn-landing--assessment-pill"
              >
                <span>Write your assessment</span>
                <span className="btn-landing--assessment-pill__icon" aria-hidden="true">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Card with Floating Review */}
          <div className="col-lg-7">
            <div className="testimonial-stage">
              {/* Backing rounded cyan container */}
              <div className="testimonial-stage__backdrop">
                <img
                  src={girlBanner}
                  alt="Smiling student with notebooks"
                  className="testimonial-stage__image"
                />

                {/* Floating carousel next button */}
                <button
                  type="button"
                  className="testimonial-stage__next-btn"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Floating review card */}
              <div className="testimonial-card">
                <span className="testimonial-card__accent" aria-hidden="true" />
                <div className="testimonial-card__inner">
                  <div className="testimonial-card__quote-wrap">
                    <span className="testimonial-card__quote-line" aria-hidden="true" />
                    <p className="testimonial-card__quote">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="testimonial-card__footer">
                    <span className="testimonial-card__name">
                      {currentTestimonial.name}
                    </span>
                    <div className="testimonial-card__meta">
                      <div className="testimonial-card__stars" aria-label={`${currentTestimonial.rating} stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className="star-filled" />
                        ))}
                      </div>
                      <span className="testimonial-card__source">
                        {currentTestimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
