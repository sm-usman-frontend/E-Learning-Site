import { FaUsers } from 'react-icons/fa'
import { FeatureRow } from '../ui'
import teacherPortrait from '../../../assets/images/portrait-teacher-giving-online-class 1.png'
import discussionImage from '../../../assets/images/image 10.png'

export default function DiscussionsSection() {
  return (
    <section className="landing-section discussions-section">
      <div className="container">
        <FeatureRow
          visual={
            <div className="discussion-mockup">
              <span className="discussion-mockup__ring" aria-hidden="true" />
              <span className="discussion-mockup__triangle" aria-hidden="true" />
              <div className="discussion-mockup__back-window" aria-hidden="true">
                <div className="discussion-mockup__back-image" />
              </div>
              <article className="discussion-mockup__window">
                <div className="discussion-mockup__dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="discussion-mockup__panels">
                  <div className="discussion-mockup__panel">
                    <span className="discussion-mockup__panel-icon">
                      <FaUsers />
                    </span>
                    <div
                      className="discussion-mockup__video discussion-mockup__video--teacher"
                      style={{ backgroundImage: `url(${teacherPortrait})` }}
                    >
                      <span className="discussion-mockup__person-tag">Patricia Mendoza</span>
                    </div>
                    <p className="discussion-mockup__panel-title">Private Discussion</p>
                    <p className="discussion-mockup__panel-note">Your video can&apos;t be seen by others</p>
                  </div>
                  <div className="discussion-mockup__panel discussion-mockup__panel--button">
                    <div
                      className="discussion-mockup__video discussion-mockup__video--student"
                      style={{ backgroundImage: `url(${discussionImage})` }}
                    >
                      <span className="discussion-mockup__person-tag">Patricia Mendoza</span>
                    </div>
                    <button type="button" className="btn-landing btn-landing--red-pill">
                      End Discussion
                    </button>
                  </div>
                </div>
              </article>
            </div>
          }
          content={
            <div>
              <h3 className="content-heading content-heading--left">
                One-on-One
                <br />
                <span className="text-teal">Discussions</span>
              </h3>
              <p className="content-body">
                Teachers and teacher assistants can talk with students privately without leaving the
                Zoom environment.
              </p>
            </div>
          }
        />

        <div className="text-center discussions-section__more">
          <button type="button" className="btn-landing btn-landing--outline-teal">
            See more features
          </button>
        </div>
      </div>
    </section>
  )
}
