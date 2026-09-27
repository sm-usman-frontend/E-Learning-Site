import { FeatureRow } from '../ui'
import toolsIllustration from '../../../assets/images/Tools For Teachers And Learners.png'

export default function ToolsSection() {
  return (
    <section className="landing-section tools-section">
      <div className="container">
        <FeatureRow
          reverse
          content={
            <div>
              <h3 className="content-heading content-heading--left">
                <span className="text-teal">Tools</span> For Teachers And Learners
              </h3>
              <p className="content-body">
                Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.
              </p>
            </div>
          }
          visual={
            <div className="tools-visual" aria-label="Tools for Teachers and Learners illustration">
              <span className="tools-visual__halo" aria-hidden="true" />
              <span className="tools-visual__dot tools-visual__dot--green" aria-hidden="true" />
              <span className="tools-visual__dot tools-visual__dot--purple" aria-hidden="true" />
              <span className="tools-visual__dot tools-visual__dot--orange" aria-hidden="true" />
              <span className="tools-visual__micro-dot tools-visual__micro-dot--one" aria-hidden="true" />
              <span className="tools-visual__micro-dot tools-visual__micro-dot--two" aria-hidden="true" />
              <span className="tools-visual__micro-dot tools-visual__micro-dot--three" aria-hidden="true" />
              <span className="tools-visual__micro-dot tools-visual__micro-dot--four" aria-hidden="true" />
              <div className="tools-visual__badge tools-visual__badge--left" aria-hidden="true">
                <span className="mini-icon mini-icon--grid" />
              </div>
              <div className="tools-visual__badge tools-visual__badge--right" aria-hidden="true">
                <span className="mini-icon mini-icon--list" />
              </div>
              <div className="tools-visual__image-wrap">
                <img
                  src={toolsIllustration}
                  alt="Tools for Teachers and Learners"
                  className="tools-visual__image"
                />
              </div>
            </div>
          }
        />
      </div>
    </section>
  )
}
