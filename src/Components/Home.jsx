import { useEffect, useRef } from "react";
import autotyper from "autotyper";
import ScrollReveal from "./ScrollReveal";

import Image from "../assets/img/PRO-PROFILE 001.png";

function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const example = Object.create(autotyper);
    const element = typewriterRef.current;
    const options = {
      text: "Adeniran Ayomide", // Initial text to type
      loop: true, // Enable looping
      interval: [100, 200], // Interval between each keystroke (min, max) in milliseconds
      loopInterval: 1000, // Interval between each loop in milliseconds
    };

    example.init(element, options);

    return () => {
      example.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      {/* <!--==================== HOME ====================--> */}
      {/* <main class="main"> */}
      <section className="home section" id="home">
        <div className="home__container container grid">
          <ScrollReveal className="home__content">
            <div className="home__data">
              <h3 className="home__subtitle">
                Hello World, <span>I&apos;m</span>
              </h3>

              <h1 className="home__title auto-type" ref={typewriterRef}>
                {/* Content will be typed here */}
              </h1>

              <h3 className="home__education">Software Engineer</h3>
              <p className="home__description">
                AI specialist and open-source developer focused on building
                reliable systems with Rust, C, Python, and JavaScript. I work
                remotely, contribute to open-source, bounties, Hackerthons and mentor
                students on solving real-world problems using AI.
              </p>
              <a href="#contact" className="button">
                {" "}
                Let&apos;s Talk{" "}
              </a>
            </div>

            <div className="home__social">
              <a
                href="https://github.com/ayomideadeniran"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-github-fill"></i>
              </a>

              <a
                href="https://x.com/AtechAtechAtech"
                target="_blank"
                className="home__social-link"
              >
                {/* <!-- <i class="fa-twitter"></i> --> */}
                {/* <!-- <i class="fa-brands fa-x-twitter"></i> --> */}
                <i className="ri-twitter-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/ayomide-adeniran-bb3ba930b/"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="home__image">
            <svg
              className="home__blob"
              viewBox="0 0 550 591"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="maskBlob" style={{ maskType: "alpha" }}>
                <path
                  d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                  170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                  447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                  587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                  438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
                />
              </mask>
              <g mask="url(#maskBlob)">
                <path
                  d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                  170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                  447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                  587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                  438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
                />

                <rect x="37" width="476" height="630" fill="url(#pattern0)" />
              </g>

              <rect x="37" width="476" height="300" fill="url(#pattern1)" />

              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#imageBlob"
                    transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                  />
                </pattern>

                <pattern
                  id="pattern1"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#imageBlob"
                    transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                  />
                </pattern>

                {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
                <image
                  className="home__img"
                  id="imageBlob"
                  width="640"
                  height="925"
                  href={Image}
                />
              </defs>
            </svg>
          </ScrollReveal>
        </div>
      </section >
    </div >
  );
}

export default Home;
