import { FaArrowRight } from 'react-icons/fa'
import CoursePill from './CoursePill'
import FeaturedCourseCard from './FeaturedCourseCard'

/**
 * CourseShelfRow Component
 *
 * Layout (matches design image exactly):
 * - The row header (icon+title on left, SEE ALL on far right) spans the FULL
 *   section width — title sits inside the blue container, SEE ALL sits in the
 *   white space outside the container.
 * - Pills are inside the blue container.
 * - The featured card overflows the container to the right into the white area.
 */
export default function CourseShelfRow({
  icon: IconComponent,
  title,
  seeAllHref = '#',
  leftPills = [],
  featuredCard,
  rightPills = [],
  className = '',
}) {
  return (
    <div className={`course-shelf-row ${className}`}>

      {/*
        Full-width header bar: title on the LEFT (inside blue container area),
        SEE ALL on the RIGHT (in the white space outside the container).
        This div must span the FULL section width, so it lives OUTSIDE the
        container clipping. We use a negative right margin to escape the
        container's padding.
      */}
      <div className="course-shelf-row__header">
        <div className="course-shelf-row__title-wrap">
          {IconComponent && (
            <span className="course-shelf-row__icon" aria-hidden="true">
              <IconComponent />
            </span>
          )}
          <h3 className="course-shelf-row__title">{title}</h3>
        </div>

        <a href={seeAllHref} className="course-shelf-row__see-all">
          <span>SEE ALL</span>
          <FaArrowRight className="course-shelf-row__see-all-arrow" />
        </a>
      </div>

      {/* Shelf stage: pills + featured card that overflows right */}
      <div className="course-shelf-row__stage">
        <div className="course-shelf-row__items">
          {leftPills.map((pill, idx) => (
            <CoursePill
              key={`left-${pill.id || idx}`}
              title={pill.title}
              color={pill.color}
              textColor={pill.textColor}
            />
          ))}

          {featuredCard && (
            <div className="course-shelf-row__featured-wrap">
              <FeaturedCourseCard {...featuredCard} />
            </div>
          )}

          {rightPills.map((pill, idx) => (
            <CoursePill
              key={`right-${pill.id || idx}`}
              title={pill.title}
              color={pill.color}
              textColor={pill.textColor}
            />
          ))}
        </div>

        <div className="course-shelf-row__podium" aria-hidden="true" />
      </div>
    </div>
  )
}
