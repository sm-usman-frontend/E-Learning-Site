import heroLaptopImg from '../../assets/images/confident-teacher-explaining-lesson-pupils 1.png'

/**
 * BlogHeroSection Component
 * Displays the top featured blog story inside a soft sky-blue container.
 * Features author/category meta, headline, excerpt, "Start learning now" CTA,
 * and high-resolution hero laptop visual.
 */
export default function BlogHeroSection() {
  return (
    <section className="blog-hero-section">
      <div className="container">
        <div className="blog-hero-container">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Content Column */}
            <div className="col-lg-6">
              <div className="blog-hero-content">
                <p className="blog-hero-meta">
                  By <span className="blog-hero-author">Themadbrains</span> in{' '}
                  <span className="blog-hero-category">inspiration</span>
                </p>

                <h1 className="blog-hero-title">
                  Why Swift UI Should Be on the Radar of Every Mobile Developer
                </h1>

                <p className="blog-hero-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                </p>

                <div className="blog-hero-action">
                  <a
                    href="#start-learning"
                    className="btn-landing btn-landing--teal-pill"
                  >
                    Start learning now
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="col-lg-6">
              <div className="blog-hero-media">
                <img
                  src={heroLaptopImg}
                  alt="Developer workstation with Zoom meeting and coffee"
                  className="blog-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
