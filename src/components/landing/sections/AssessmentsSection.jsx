import { FaCheck, FaPaperPlane, FaTimes } from 'react-icons/fa'
import { FeatureRow } from '../ui'
import assessmentsImage from '../../../assets/images/Assessments, Quizzes, Tests.png'

export default function AssessmentsSection() {
  return (
    <section className="landing-section assessments-section">
      <div className="container">
        <FeatureRow
          visual={
            <div className="quiz-mockup quiz-mockup--match-reference">
              <span className="quiz-mockup__orb quiz-mockup__orb--orange" aria-hidden="true" />
              <span className="quiz-mockup__action quiz-mockup__action--wrong" aria-label="wrong answer">
                <FaTimes />
              </span>
              <span className="quiz-mockup__action quiz-mockup__action--right" aria-label="right answer">
                <FaCheck />
              </span>

              <article className="quiz-mockup__card">
                <span className="quiz-mockup__badge">Question 1</span>
                <p className="quiz-mockup__question">True or false? This play takes place in Italy</p>

                <div className="quiz-mockup__image-wrap">
                  <img
                    src={assessmentsImage}
                    alt="Assessments, Quizzes, Tests"
                    className="quiz-mockup__image"
                  />
                </div>
              </article>

              <div className="quiz-mockup__toast">
                <span className="quiz-mockup__toast-mark">
                  <FaPaperPlane className="quiz-mockup__toast-icon" />
                </span>
                <span>Your answer was sent successfully</span>
              </div>
            </div>
          }
          content={
            <div>
              <h3 className="content-heading content-heading--left">
                Assessments, <span className="text-teal">Quizzes</span>, Tests
              </h3>
              <p className="content-body">
                Easily launch live assignments, quizzes, and tests. Student results are automatically
                entered in the online gradebook.
              </p>
            </div>
          }
        />
      </div>
    </section>
  )
}
