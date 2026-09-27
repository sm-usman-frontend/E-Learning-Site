import { useDispatch, useSelector } from 'react-redux'
import { submitNewsletter, updateNewsletterEmail } from '../../store/newsletterSlice'

/**
 * SiteFooter Component
 * Dark navy footer featuring TOTC Zoom brand mark, newsletter subscription form,
 * policy links, and copyright text.
 */
export default function SiteFooter() {
  const dispatch = useDispatch()
  const { email, isSubscribed } = useSelector((state) => state.newsletter)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      dispatch(submitNewsletter(email.trim()))
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Brand & Partner Identification */}
        <div className="site-footer__brand-wrap">
          <div className="site-footer__brand">
            <span className="site-footer__logo-mark" aria-hidden="true">
              <span>TOTC</span>
            </span>
            <div className="site-footer__brand-divider" aria-hidden="true" />
            <div className="site-footer__brand-text">
              <span className="site-footer__brand-title">Virtual Class</span>
              <span className="site-footer__brand-sub">for Zoom</span>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Area */}
        <div className="site-footer__newsletter">
          <h3 className="site-footer__newsletter-title">
            Subscribe to get our Newsletter
          </h3>

          <form className="site-footer__form" onSubmit={handleSubmit}>
            <div className="site-footer__input-group">
              <input
                type="email"
                className="site-footer__input"
                placeholder="Your Email"
                value={email}
                onChange={(e) => dispatch(updateNewsletterEmail(e.target.value))}
                required
                aria-label="Your email address"
              />
              <button
                type="submit"
                className="site-footer__submit-btn"
              >
                Subscribe
              </button>
            </div>
            {isSubscribed && (
              <p className="site-footer__success-msg text-landing-teal mt-2">
                Thank you for subscribing to our newsletter!
              </p>
            )}
          </form>
        </div>

        {/* Footer Navigation & Legal Links */}
        <div className="site-footer__bottom">
          <ul className="site-footer__links">
            <li>
              <a href="#careers" className="site-footer__link">Careers</a>
            </li>
            <li className="site-footer__link-sep" aria-hidden="true">|</li>
            <li>
              <a href="#privacy" className="site-footer__link">Privacy Policy</a>
            </li>
            <li className="site-footer__link-sep" aria-hidden="true">|</li>
            <li>
              <a href="#terms" className="site-footer__link">Terms &amp; Conditions</a>
            </li>
          </ul>

          <p className="site-footer__copyright">
            &copy; 2021 Class Technologies Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
