import { FaPlay } from 'react-icons/fa'
import { useState } from 'react'
import ImageSlot from '../ui/ImageSlot'
import classroomImage from '../../../assets/images/confident-teacher-explaining-lesson-pupils 1.png'

export default function ClassroomSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="landing-section classroom-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <h2 className="content-heading">
              <span className="content-heading__dot content-heading__dot--start" aria-hidden="true" />
              Everything you can do in a physical classroom,{' '}
              <span className="text-teal">you can do with TOTC</span>
            </h2>
            <p className="content-body">
              TOTC&apos;s school management software helps traditional and online schools manage
              scheduling, attendance, payments and virtual classroom all in one secure cloud-based
              system.
            </p>
            {isExpanded && (
              <p className="classroom-section__more content-body">
                Teachers can organize lessons, share resources, track attendance and keep every
                classroom activity connected from one secure platform.
              </p>
            )}
            <button
              type="button"
              className="link-underline-muted classroom-section__toggle"
              onClick={() => setIsExpanded((expanded) => !expanded)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show less' : 'Learn more'}
            </button>
            <span className="content-heading__dot content-heading__dot--end" aria-hidden="true" />
          </div>
          <div className="col-lg-6">
            <div className="classroom-media">
              <span className="classroom-media__frame classroom-media__frame--tl" aria-hidden="true" />
              <span className="classroom-media__frame classroom-media__frame--br" aria-hidden="true" />
              <ImageSlot className="classroom-media__image">
                <img src={classroomImage} alt="Teacher explaining a lesson to pupils" />
              </ImageSlot>
              <button type="button" className="classroom-media__play" aria-label="Play video">
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
