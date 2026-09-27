import { FaPlay } from 'react-icons/fa'
import { HiOutlineCalendar } from 'react-icons/hi'
import { IoMailOpenOutline } from 'react-icons/io5'
import { HiOutlineChartBar } from 'react-icons/hi'
import girlBanner from '../../../assets/images/girl-banner.png'

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-section__curve" aria-hidden="true" />
      <div className="container hero-section__container">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-lg-6">
            <h1 className="hero-section__title font-poppins">
              <span className="text-orange">Studying</span> Online is now much easier
            </h1>
            <p className="hero-section__lead font-nunito">
              TOTC is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="hero-section__actions">
              <button type="button" className="btn-landing btn-landing--glass-pill btn-landing--lg font-poppins">
                Join for free
              </button>
              <button type="button" className="hero-section__watch font-poppins">
                <span className="hero-section__play-icon">
                  <FaPlay />
                </span>
                <span className="hero-section__watch-text">Watch how it works</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual">
              <img className="hero-visual__main" src={girlBanner} alt="Student holding notebooks" />

              <div className="hero-float hero-float--stats font-nunito">
                <span className="hero-float__icon hero-float__icon--blue">
                  <HiOutlineCalendar />
                </span>
                <div>
                  <strong>250k</strong>
                  <span>Assisted Student</span>
                </div>
              </div>

              <div className="hero-float hero-float--congrats font-nunito">
                <span className="hero-float__icon hero-float__icon--orange">
                  <IoMailOpenOutline />
                </span>
                <div>
                  <strong>Congratulations</strong>
                  <span>Your admission completed</span>
                </div>
              </div>

              <div className="hero-float hero-float--class font-nunito">
                <span className="hero-float__avatar" aria-hidden="true">
                  <img src={girlBanner} alt="" />
                  <i />
                </span>
                <div className="hero-float__class-text">
                  <strong>User Experience Class</strong>
                  <span>Today at 12.00 PM</span>
                  <button type="button" className="btn-landing btn-landing--pink-pill font-nunito">
                    Join Now
                  </button>
                </div>
              </div>

              <div className="hero-float hero-float--badge" aria-hidden="true">
                <span className="hero-float__badge-img">
                  <HiOutlineChartBar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
