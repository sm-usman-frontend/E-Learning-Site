import { BsGridFill } from 'react-icons/bs'
import { HiSquare2Stack } from 'react-icons/hi2'
import { FaUsers, FaPhoneAlt } from 'react-icons/fa'
import { FeatureListItem, FeatureRow, SectionHeading } from '../ui'
import imageSeven from '../../../assets/images/image 7.png'
import imageEight from '../../../assets/images/image 8.png'
import imageTen from '../../../assets/images/image 10.png'
import imageEleven from '../../../assets/images/image 11.png'
import teacherImage from '../../../assets/images/portrait-teacher-giving-online-class 1.png'

export default function OurFeaturesSection() {
  return (
    <section className="landing-section our-features-section" id="courses">
      <div className="container">
        <SectionHeading
          title="Our "
          highlight="Features"
          subtitle="This very extraordinary feature, can make learning activities more efficient"
        />

        <FeatureRow
          visual={
            <div className="ui-mockup ui-mockup--classroom">
              {/* Decorative background geometry from design */}
              <span className="ui-mockup__decor ui-mockup__decor--green" aria-hidden="true" />
              <span className="ui-mockup__decor ui-mockup__decor--cyan" aria-hidden="true" />
              <span className="ui-mockup__decor ui-mockup__decor--red" aria-hidden="true" />

              {/* White application window */}
              <div className="ui-mockup__window">
                {/* Window control dots */}
                <div className="ui-mockup__dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="ui-mockup__stage">
                  {/* Left Column: Teacher Card & Bottom Controls */}
                  <div className="ui-mockup__teacher-col">
                    <div className="ui-mockup__teacher-tile">
                      <img
                        src={teacherImage}
                        alt="Teacher wearing a headset"
                        className="ui-mockup__teacher-img"
                      />
                      <span className="ui-mockup__label">
                        <span className="ui-mockup__signal" aria-hidden="true">
                          <i /><i /><i />
                        </span>
                        <strong>Instructor</strong> Every Howard
                      </span>
                    </div>

                    <div className="ui-mockup__teacher-actions">
                      <button type="button" className="ui-mockup__btn ui-mockup__btn--present">
                        Present
                      </button>
                      <button type="button" className="ui-mockup__btn ui-mockup__btn--call">
                        <FaPhoneAlt className="ui-mockup__btn-icon" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>

                  {/* Center floating circular orb button */}
                  <div className="ui-mockup__center-orb" aria-hidden="true" />

                  {/* Right Column: 2x2 Students Grid */}
                  <div className="ui-mockup__students-grid">
                    <div className="ui-mockup__student-tile">
                      <img src={imageSeven} alt="Tamara Clark" />
                      <span className="ui-mockup__label">
                        <span className="ui-mockup__signal" aria-hidden="true"><i /><i /><i /></span>
                        Tamara Clark
                      </span>
                    </div>

                    <div className="ui-mockup__student-tile">
                      <img src={imageEight} alt="Adam Levin" />
                      <span className="ui-mockup__label">
                        <span className="ui-mockup__signal" aria-hidden="true"><i /><i /><i /></span>
                        Adam Levin
                      </span>
                    </div>

                    <div className="ui-mockup__student-tile">
                      <img src={imageTen} alt="Humbert Holland" />
                      <span className="ui-mockup__label">
                        <span className="ui-mockup__signal" aria-hidden="true"><i /><i /><i /></span>
                        Humbert Holland
                      </span>
                    </div>

                    {/* Hanging break-out card */}
                    <div className="ui-mockup__student-tile ui-mockup__student-tile--hanging">
                      <img src={imageEleven} alt="Patricia Mendoza" />
                      <span className="ui-mockup__label">
                        <span className="ui-mockup__signal" aria-hidden="true"><i /><i /><i /></span>
                        Patricia Mendoza
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          content={
            <div>
              <h3 className="content-heading content-heading--left">
                A <span className="text-teal">user interface</span> designed for the classroom
              </h3>
              <ul className="feature-list list-unstyled">
                <FeatureListItem icon={<BsGridFill />} iconClassName="feature-list-item__icon--blue">
                  Teachers don&apos;t get lost in the grid view and have a dedicated Podium space.
                </FeatureListItem>
                <FeatureListItem icon={<HiSquare2Stack />} iconClassName="feature-list-item__icon--orange">
                  TA&apos;s and presenters can be moved to the front of the class.
                </FeatureListItem>
                <FeatureListItem icon={<FaUsers />} iconClassName="feature-list-item__icon--purple">
                  Teachers can easily see all students and class data at one time.
                </FeatureListItem>
              </ul>
            </div>
          }
        />
      </div>
    </section>
  )
}
