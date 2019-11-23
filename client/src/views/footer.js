import Snabbdom from 'snabbdom-pragma'

const staticRoot = process.env.STATIC_ROOT || ''
const links = process.env.FOOTER_LINKS ? JSON.parse(process.env.FOOTER_LINKS) : { [staticRoot+'img/github_blue.png']: 'https://github.com/blockstream/esplora' }

const hasCam = process.browser && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
const currentYear = new Date().getFullYear();

export default ({ t, page }) =>
<footer>
  <div className="footer">
    <div className="mb-20 intro-section">
      <div className="footer-home-link">
        <a href="/">
          BTC TIMES
        </a>
      </div>
      <p className="copyright-text pb--20"><span>© { currentYear } BTC TIMES. All rights are reserved.</span></p>
      <div className="terms-service">
        <p className="copyright-text">  
          <a href="/">
            Commissioning terms
          </a>
        </p>
        <p className="copyright-text">  
          <a href="/">
            Terms of Service
          </a>
        </p>
        <p className="copyright-text">  
          <a href="/">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
    <div className="mb-20 common-section">
      <p className="footer-links">
          Company
      </p>
      <p className="footer-sub-links">
        <a href="https://dev.btctimes.com/about-us">
          About us
        </a>
      </p>
      <p className="footer-sub-links">
        <a href="https://dev.btctimes.com/careers">
          Careers
        </a>
      </p>
      <p className="footer-sub-links">
        <a href="https://dev.btctimes.com/contact-us">
          Contact us
        </a>
      </p>
    </div>
    <div className="mb-20 common-section">
      <p className="footer-links">
        Support
      </p>
      <p className="footer-sub-links">
        <a href="https://dev.btctimes.com/news">
          Help
        </a>
      </p>
      <p className="footer-sub-links">
        <a href="https://dev.btctimes.com/advertise">
          Advertising
        </a>
      </p>
      <p className="footer-sub-links">
        <a href="https://dev.btctimes.com/press-release-submission">
          Submissions
        </a>
      </p>
    </div>
    <div className="contact-section">
      <p className="footer-links">
        Stay in Touch
      </p>
      <p className="social-links">
        <a href="/">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/btctimescom">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC9awuImMkLzbyvK4ZLmU_lg/">
          <i className="fa fa-youtube-play"></i>
        </a>
      </p>
    </div>
  </div>
</footer>

