import React from "react";
import Image from "../assets/img/PRO-PROFILE 001.png";

function About() {
  return (
    <div>
      {/* <!--==================== ABOUT ====================--> */}
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h3 className="section__subtitle">
              My <span>Intro</span>
            </h3>

            <h2 className="section__title">About Me</h2>
            
            <p className="about__description" id="app">
              I’m a passionate developer with 3 years of experience building
              full-stack applications and exploring emerging technologies. My
              work spans across Web3, Bitcoin, Rust, and modern JavaScript
              frameworks like React, Next.js, and Node.js, where I focus on
              creating polished, production-ready solutions. Over the years,
              I’ve built diverse projects including learning management systems,
              Bitcoin offline transaction simulators, and AI-powered platforms
              for education, while also experimenting with graphic design to
              bring creativity into my builds. I enjoy hackathons, pushing
              myself to learn advanced coding concepts, and finding fun, unique
              ways to share my journey—whether through writing, collaboration,
              or even rap. My mission is simple: keep learning, keep building,
              and use technology to solve real problems.
            </p>

            <a href="#contact" className="button">
              Contact Me
            </a>
            <br />
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1UfpdYX_xGnnrUp3GMjdyL9z5o18j6Bj2/view?usp=sharing"
              className="button"
              style={{ marginTop: "10px" }}
            >
              MY RESUME
            </a>
          </div>

          <div className="about__image">
            <svg
              className="about__blob"
              viewBox="0 0 550 592"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="maskBorder" mask-type="alpha">
                <path
                  d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
               171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
               448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
               270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
               439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#maskBorder)">
                <rect x="37" width="476" height="630" fill="url(#pattern2)" />

                <path
                  d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
               192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
               580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
               40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
               175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z"
                  stroke="black"
                  strokeWidth="10"
                />
              </g>

              <rect x="37" width="476" height="300" fill="url(#pattern3)" />

              <defs>
                <pattern
                  id="pattern2"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#imageBorder"
                    transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                  />
                </pattern>

                <pattern
                  id="pattern3"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#imageBorder"
                    transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                  />
                </pattern>

                {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
                <image
                  className="about__img"
                  id="imageBorder"
                  width="640"
                  height="940"
                  href={Image}
                />
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
