import { FaBook, FaStar } from 'react-icons/fa'
import { FeatureRow } from '../ui'
import image7 from '../../../assets/images/image 7.png'
import image8 from '../../../assets/images/image 8.png'
import image10 from '../../../assets/images/image 10.png'

const gradeRows = [
  {
    score: '100',
    barClass: 'gradebook__bar--blue',
    badgeClass: 'gradebook__score--blue',
    avatar: image7,
    barWidth: '25%',
    barHeight: '25px',
    rowTop: '0px',
    rowLeft: '0px',
    rowRight: 'auto',
    rowBottom: 'auto',
    rowPositionX: '0px',
    rowPositionY: '0px',
    barBorderRadius: '0px',
    avatarTop: '50%',
    avatarRight: 'auto',
    avatarBottom: 'auto',
    avatarLeft: '91%',
    avatarTranslateX: '-50%',
    avatarTranslateY: '-50%',
    scoreLeft: '122%',
    scoreTop: '149%',
    scoreTranslateX: '-50%',
    scoreTranslateY: '-50%',
  },
  {
    score: '85',
    barClass: 'gradebook__bar--green',
    badgeClass: 'gradebook__score--green',
    avatar: image8,
    barWidth: '45%',
    barHeight: '25px',
    rowTop: '60px',
    rowLeft: '1px',
    rowRight: 'auto',
    rowBottom: 'auto',
    rowPositionX: '0px',
    rowPositionY: '0px',
    barBorderRadius: '0px',
    avatarTop: '50%',
    avatarRight: 'auto',
    avatarBottom: 'auto',
    avatarLeft: '94%',
    avatarTranslateX: '-50%',
    avatarTranslateY: '-50%',
    scoreLeft: '114%',
    scoreTop: '144%',
    scoreTranslateX: '-50%',
    scoreTranslateY: '-50%',
  },
  {
    score: '75',
    barClass: 'gradebook__bar--pink',
    badgeClass: 'gradebook__score--pink',
    avatar: image10,
    barWidth: '45%',
    barHeight: '25px',
    rowTop: '-61px',
    rowLeft: '290px',
    rowRight: 'auto',
    rowBottom: 'auto',
    rowPositionX: '0px',
    rowPositionY: '0px',
    barBorderRadius: '0px',
    avatarTop: '50%',
    avatarRight: 'auto',
    avatarBottom: 'auto',
    avatarLeft: '2%',
    avatarTranslateX: '-50%',
    avatarTranslateY: '-50%',
    scoreLeft: '-16%',
    scoreTop: '164%',
    scoreTranslateX: '-50%',
    scoreTranslateY: '-50%',
  },
]

export default function ClassManagementSection() {
  return (
    <section className="landing-section class-management-section">
      <div className="container">
        <FeatureRow
          reverse
          content={
            <div>
              <h3 className="content-heading content-heading--left">
                <span className="text-teal">Class Management</span> Tools for Educators
              </h3>
              <p className="content-body">
                Class provides tools to help run and manage the class such as Class Roster, Attendance,
                and more. With the Gradebook, teachers can review and grade tests and quizzes in
                real-time.
              </p>
            </div>
          }
          visual={
            <div className="gradebook-mockup">
              <span className="gradebook-mockup__icon gradebook-mockup__icon--star">
                <FaStar />
              </span>
              <span className="gradebook-mockup__icon gradebook-mockup__icon--book">
                <FaBook />
              </span>

              <article className="gradebook">
                <div className="gradebook__header">GradeBook</div>
                <div className="gradebook__body">
                  {gradeRows.map((row) => (
                    <div
                      className="gradebook__row"
                      key={row.score}
                      style={{
                        '--row-top': row.rowTop,
                        '--row-left': row.rowLeft,
                        '--row-right': row.rowRight,
                        '--row-bottom': row.rowBottom,
                        '--row-position-x': row.rowPositionX,
                        '--row-position-y': row.rowPositionY,
                      }}
                    >
                      <div
                        className={`gradebook__bar ${row.barClass}`}
                        style={{
                          '--bar-width': row.barWidth,
                          '--bar-height': row.barHeight,
                          '--bar-border-radius': row.barBorderRadius,
                          '--avatar-top': row.avatarTop,
                          '--avatar-right': row.avatarRight,
                          '--avatar-bottom': row.avatarBottom,
                          '--avatar-left': row.avatarLeft,
                          '--avatar-translate-x': row.avatarTranslateX,
                          '--avatar-translate-y': row.avatarTranslateY,
                        }}
                      >
                        <span
                          className="gradebook__avatar"
                          style={{
                            backgroundImage: `url(${row.avatar})`,
                            '--avatar-top': row.avatarTop,
                            '--avatar-right': row.avatarRight,
                            '--avatar-bottom': row.avatarBottom,
                            '--avatar-left': row.avatarLeft,
                            '--avatar-translate-x': row.avatarTranslateX,
                            '--avatar-translate-y': row.avatarTranslateY,
                          }}
                          aria-label="student avatar"
                        />
                        <span
                          className={`gradebook__score ${row.badgeClass}`}
                          style={{
                            '--score-left': row.scoreLeft,
                            '--score-top': row.scoreTop,
                            '--score-translate-x': row.scoreTranslateX,
                            '--score-translate-y': row.scoreTranslateY,
                          }}
                        >
                          {row.score}
                        </span>
                      </div>
                    </div>
                  ))}
                  <button type="button" className="btn-landing btn-landing--navy-pill gradebook__export">
                    Export
                  </button>
                </div>
              </article>
            </div>
          }
        />
      </div>
    </section>
  )
}


