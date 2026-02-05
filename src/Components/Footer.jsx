import ScrollReveal from "./ScrollReveal";


import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          {/* Brand Section */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              Ayomide
            </a>
            <p className="footer__description">
              Building digital experiences that matter.<br />
              Productivity, Innovation, Technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links-wrapper">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#about" className="footer__link">About</a></li>
              <li><a href="#projects" className="footer__link">Projects</a></li>
              <li><a href="#skills" className="footer__link">Skills</a></li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="footer__socials-wrapper">
            <h3 className="footer__title">Let's Connect</h3>
            <div className="footer__social">
              <a href="https://github.com/ayomideadeniran" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/ayomideadeniran" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com/ayomideadeniran" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="mailto:ayomide@example.com" className="footer__social-link" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &#169; {currentYear} Ayomide Adeniran. All rights reserved.
          </p>
          <span className="footer__note">Made with ❤️ for Web3</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;