import React from 'react'

function Footer() {
  return (
    <div>
        
    {/* <!--==================== FOOTER ====================--> */}
    <footer class="footer">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">Ayomide <span>Adeniran</span></h1>

          <h2 class="footer__education">MERN Developer</h2>
        </div>

        <div class="footer__social">
          <a
            href="https://web.facebook.com/ayomide.adeniran.562/"
            target="-blank"
            class="footer__social-link"
          >
            <i class="ri-facebook-circle-line"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ayomide-adeniran-bb3ba930b/"
            target="_blank"
            class="home__social-link"
          >
            <i class="ri-linkedin-box-line"></i>
          </a>

          <a
            href="https://x.com/AyomideAdenira"
            target="-blank"
            class="footer__social-link"
          >
            <i class="ri-twitter-line"></i>
          </a>
        </div>

        {/* <!-- <span class="footer--copy">
          &#169; copyright Knights. All right reserved
        </span> --> */}
      </div>
    </footer>

    </div>
  )
}

export default Footer