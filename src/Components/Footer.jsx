import ScrollReveal from "./ScrollReveal";


function Footer() {
  return (
    <footer className="footer">
      <ScrollReveal className="footer__container container grid">
        <div className="footer__content grid">
          <div>
            <a href="#" className="footer__logo nav__logo">
              Ayomide
            </a>
            <h3 className="footer__title">
              Subscribe to my <span>Newsletter</span>
            </h3>
            <span className="footer__education">
              Productivity, Innovation and Technology
            </span>
          </div>

          <div className="footer__social">
            <a
              href="https://web.facebook.com/"
              target="-blank"
              className="footer__social-link"
            >
              <i className="ri-facebook-circle-line"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169; Ayomide Adeniran. All rights reserved
        </p>
      </ScrollReveal>
    </footer>
  );
}

export default Footer;